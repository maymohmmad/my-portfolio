<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'    => ['required', 'string', 'max:120'],
            'email'   => ['required', 'email', 'max:180'],
            'subject' => ['required', 'string', 'max:150'],
            'message' => ['required', 'string', 'max:5000'],
            // Honeypot field: real users never fill this. Add a hidden
            // "website" input in the form if you want extra spam protection.
            'website' => ['prohibited'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'    => 'الاسم مطلوب.',
            'email.required'   => 'البريد الإلكتروني مطلوب.',
            'email.email'      => 'صيغة البريد الإلكتروني غير صحيحة.',
            'subject.required' => 'موضوع الرسالة مطلوب.',
            'message.required' => 'محتوى الرسالة مطلوب.',
        ];
    }
}
