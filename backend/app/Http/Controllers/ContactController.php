<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMail;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;

class ContactController extends Controller
{
    /**
     * Handle a new contact form submission from the portfolio site.
     * POST /api/contact
     */
    public function store(StoreContactRequest $request): JsonResponse
    {
        // Simple rate limiting: 5 messages per hour per IP.
        $key = 'contact-form:' . $request->ip();

        if (RateLimiter::tooManyAttempts($key, 5)) {
            return response()->json([
                'message' => 'لقد تجاوزتِ الحد المسموح من الرسائل، حاولي لاحقًا.',
            ], 429);
        }

        RateLimiter::hit($key, 3600);

        $contact = ContactMessage::create([
            'name'       => $request->validated('name'),
            'email'      => $request->validated('email'),
            'subject'    => $request->validated('subject'),
            'message'    => $request->validated('message'),
            'ip_address' => $request->ip(),
        ]);

        // Sends the notification to your inbox (maymosa2002@gmail.com by
        // default — set MAIL_TO_ADDRESS in .env to change it).
       // Mail::to(config('mail.to_address', 'maymosa2002@gmail.com'))
        //    ->send(new ContactMail($contact));

        return response()->json([
            'message' => 'وصلت رسالتك بنجاح، شكرًا لتواصلك!',
        ], 201);
    }
}
