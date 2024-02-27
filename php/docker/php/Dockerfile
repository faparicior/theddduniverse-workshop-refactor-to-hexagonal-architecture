FROM php:8.3.2-cli-bullseye

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN apt -y update \
    && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer \
    && apt -y install git libzip-dev \
    && docker-php-ext-install zip \
