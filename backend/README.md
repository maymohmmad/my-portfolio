# خطوات استخدام هالملفات

## 1. أنشئي مشروع Laravel جديد ونضيف
```bash
cd C:\xampp33\htdocs
composer create-project laravel/laravel myapp_new
```

## 2. انسخي كل محتوى هالمجلد المضغوط فوق مجلد المشروع الجديد
انسخي والصقي (Copy + Paste) كل الملفات والمجلدات هون فوق `myapp_new`، وخليها تدمج/تستبدل الملفات الموجودة عند السؤال (خصوصًا `.env` و `bootstrap/app.php`).

الملفات يلي رح تنستبدل أو تنضاف:
- `app/Http/Controllers/ContactController.php`
- `app/Http/Controllers/ProjectEngagementController.php`
- `app/Http/Requests/StoreContactRequest.php`
- `app/Mail/ContactMail.php`
- `app/Models/ContactMessage.php`
- `app/Models/ProjectComment.php`
- `app/Models/ProjectLike.php`
- `app/Providers/AppServiceProvider.php` (نسخة افتراضية سليمة)
- `database/migrations/2026_01_01_000000_create_contact_messages_table.php`
- `database/migrations/2026_01_02_000000_create_project_engagement_tables.php`
- `routes/api.php`
- `resources/views/emails/contact.blade.php`
- `config/cors.php`
- `bootstrap/app.php` (معدّل: مضاف فيه `api:` route)
- `.env` (معدّل: production settings + Resend + DB fixes)
- `.gitignore` (معدّل: صحيح لمشروع Laravel)

## 3. ركّبي الباكيجات المطلوبة
```bash
cd myapp_new
composer require resend/resend-laravel
```

## 4. عدّلي القيم الوهمية بملف .env
- `RESEND_KEY` → API key الحقيقي من resend.com
- `DB_PASSWORD` → باسورد قاعدة البيانات المحلية عندك (أو فاضي إذا XAMPP بدون باسورد)
- `APP_URL` / `FRONTEND_URL` → دومينات حقيقية وقت النشر (تقدري تخليها localhost بمرحلة التطوير المحلي)

## 5. شغّلي الميغريشن
```bash
php artisan session:table
php artisan cache:table
php artisan migrate
```

## 6. جربي السيرفر محليًا
```bash
php artisan serve
```
وجربي تبعتي فورم التواصل من الفرونت-إند وشوفي هل بيوصل الإيميل ويتخزن بقاعدة البيانات.
