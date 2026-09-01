<!doctype html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <title>رسالة تواصل جديدة</title>
</head>
<body style="font-family: Tahoma, Arial, sans-serif; background:#050813; color:#EAF0FF; padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#0E1630;border:1px solid rgba(148,176,255,0.15);border-radius:16px;padding:32px;">
        <p style="font-size:12px;color:#5CE6FF;letter-spacing:1px;text-transform:uppercase;margin:0 0 8px;">رسالة جديدة من موقعك</p>
        <h2 style="margin:0 0 20px;color:#EAF0FF;">{{ $contact->subject }}</h2>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr>
                <td style="padding:8px 0;color:#9FB0DA;width:100px;">الاسم</td>
                <td style="padding:8px 0;color:#EAF0FF;">{{ $contact->name }}</td>
            </tr>
            <tr>
                <td style="padding:8px 0;color:#9FB0DA;">البريد</td>
                <td style="padding:8px 0;color:#EAF0FF;">{{ $contact->email }}</td>
            </tr>
        </table>

        <div style="margin-top:16px;padding:16px;background:#080D1F;border-radius:12px;line-height:1.7;color:#EAF0FF;">
            {{ $contact->message }}
        </div>

        <p style="margin-top:24px;font-size:11px;color:#5D6B93;">
            أُرسلت هذه الرسالة تلقائيًا من نموذج التواصل في موقعك.
        </p>
    </div>
</body>
</html>
