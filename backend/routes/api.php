<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectEngagementController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| These routes back the React frontend (frontend/src/pages/Contact.jsx and
| frontend/src/pages/Projects.jsx).
*/

Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:10,1'); // extra safety net on top of RateLimiter in the controller

// Project likes & comments (frontend/src/pages/Projects.jsx -> LikeCommentBar)
Route::get('/projects/{projectId}/engagement', [ProjectEngagementController::class, 'show']);
Route::post('/projects/{projectId}/like', [ProjectEngagementController::class, 'toggleLike'])
    ->middleware('throttle:20,1');
Route::post('/projects/{projectId}/comments', [ProjectEngagementController::class, 'storeComment'])
    ->middleware('throttle:10,1');
