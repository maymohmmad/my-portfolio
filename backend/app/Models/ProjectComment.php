<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectComment extends Model
{
    protected $fillable = ['project_id', 'name', 'body', 'ip_address', 'is_approved'];

    protected $casts = [
        'is_approved' => 'boolean',
    ];
}
