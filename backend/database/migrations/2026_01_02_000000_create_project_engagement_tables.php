<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // One row per (project, visitor) so the same browser can't like twice.
        // We identify a "visitor" by IP + a hashed fingerprint — no login needed.
        Schema::create('project_likes', function (Blueprint $table) {
            $table->id();
            $table->string('project_id');       // matches p.id on the frontend, e.g. "kafaf"
            $table->string('visitor_hash', 64);  // sha256 of ip + user agent
            $table->timestamps();

            $table->unique(['project_id', 'visitor_hash']);
        });

        Schema::create('project_comments', function (Blueprint $table) {
            $table->id();
            $table->string('project_id');
            $table->string('name', 80);
            $table->text('body');
            $table->string('ip_address', 45)->nullable();
            $table->boolean('is_approved')->default(true); // flip to false if you want to moderate first
            $table->timestamps();

            $table->index('project_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('project_comments');
        Schema::dropIfExists('project_likes');
    }
};
