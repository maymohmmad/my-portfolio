<?php

namespace App\Http\Controllers;

use App\Models\ProjectComment;
use App\Models\ProjectLike;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class ProjectEngagementController extends Controller
{
    /**
     * A stable-per-browser fingerprint without requiring login.
     * Not bulletproof (clearing cookies/IP change resets it), but that's
     * an acceptable tradeoff for a portfolio site's like button.
     */
    private function visitorHash(Request $request): string
    {
        return hash('sha256', $request->ip() . '|' . $request->userAgent());
    }

    /**
     * GET /api/projects/{projectId}/engagement
     * Returns current like count, whether *this* visitor already liked it,
     * and the comment list — everything the frontend needs in one call.
     */
    public function show(Request $request, string $projectId): JsonResponse
    {
        $hash = $this->visitorHash($request);

        return response()->json([
            'likes' => ProjectLike::where('project_id', $projectId)->count(),
            'liked' => ProjectLike::where('project_id', $projectId)
                ->where('visitor_hash', $hash)->exists(),
            'comments' => ProjectComment::where('project_id', $projectId)
                ->where('is_approved', true)
                ->latest()
                ->get(['id', 'name', 'body', 'created_at']),
        ]);
    }

    /**
     * POST /api/projects/{projectId}/like
     * Toggles the like for this visitor (like if not liked, unlike if liked).
     */
    public function toggleLike(Request $request, string $projectId): JsonResponse
    {
        $hash = $this->visitorHash($request);

        $existing = ProjectLike::where('project_id', $projectId)
            ->where('visitor_hash', $hash)
            ->first();

        if ($existing) {
            $existing->delete();
            $liked = false;
        } else {
            ProjectLike::create(['project_id' => $projectId, 'visitor_hash' => $hash]);
            $liked = true;
        }

        return response()->json([
            'likes' => ProjectLike::where('project_id', $projectId)->count(),
            'liked' => $liked,
        ]);
    }

    /**
     * POST /api/projects/{projectId}/comments
     * Body: { name, body }
     */
    public function storeComment(Request $request, string $projectId): JsonResponse
    {
        $key = 'project-comment:' . $request->ip();
        if (RateLimiter::tooManyAttempts($key, 8)) {
            return response()->json(['message' => 'Too many comments, slow down.'], 429);
        }
        RateLimiter::hit($key, 3600);

        $data = $request->validate([
            'name' => ['nullable', 'string', 'max:80'],
            'body' => ['required', 'string', 'max:600'],
        ]);

        $comment = ProjectComment::create([
            'project_id' => $projectId,
            'name'       => $data['name'] ?: 'Guest',
            'body'       => strip_tags($data['body']), // basic XSS safety net
            'ip_address' => $request->ip(),
        ]);

        return response()->json($comment->only(['id', 'name', 'body', 'created_at']), 201);
    }
}
