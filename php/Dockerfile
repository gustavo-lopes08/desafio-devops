FROM php:7.3-fpm
RUN apt-get update
RUN apt-get install -y libbz2-dev zip libpng-dev libgmp-dev libmagickwand-dev zlib1g-dev libicu-dev zip
RUN docker-php-ext-install mysqli pdo_mysql calendar bz2 exif gd gettext
RUN pecl install redis imagick && docker-php-ext-enable redis imagick
RUN ln -s /usr/include/x86_64-linux-gnu/gmp.h /usr/local/include/
RUN docker-php-ext-configure gmp
RUN docker-php-ext-install gmp
