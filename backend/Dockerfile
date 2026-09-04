FROM php:8.2-cli

# System dependencies + PHP extensions needed by Laravel + PostgreSQL
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql zip

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN composer install --no-dev --optimize-autoloader --no-interaction

# Ensure Laravel's cache/storage directories exist and are writable
RUN mkdir -p storage/framework/views storage/framework/cache storage/framework/sessions storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 8080

# Runs migrations then starts the server. Uses Render's $PORT automatically.
CMD php artisan config:clear && php artisan migrate --force && php artisan serve --host 0.0.0.0 --port ${PORT:-8080}