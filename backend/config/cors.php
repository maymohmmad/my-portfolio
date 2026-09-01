<?php

// Drop this into config/cors.php in your Laravel install (or merge with
// the existing one). It allows the React frontend to call /api/* routes
// from a different origin during local development and in production.

return [
    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

   'allowed_origins' => [
    'http://localhost:5175',
    'http://localhost:5174',
    'http://127.0.0.1:5175',
    'http://127.0.0.1:5174',
],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
