<?php

namespace App\Mail;

use App\Models\ContactMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public ContactMessage $contact)
    {
    }

    public function build()
    {
        return $this->subject('رسالة جديدة من موقعك: ' . $this->contact->subject)
            ->replyTo($this->contact->email, $this->contact->name)
            ->view('emails.contact');
    }
}
