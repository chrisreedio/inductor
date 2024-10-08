# Inductor

[![Latest Version on Packagist](https://img.shields.io/packagist/v/chrisreedio/inductor.svg?style=flat-square)](https://packagist.org/packages/chrisreedio/inductor)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/chrisreedio/inductor/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/chrisreedio/inductor/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/chrisreedio/inductor/fix-php-code-styling.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/chrisreedio/inductor/actions?query=workflow%3A"Fix+PHP+code+styling"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/chrisreedio/inductor.svg?style=flat-square)](https://packagist.org/packages/chrisreedio/inductor)

Inductor is a Laravel package that allows Vue components to be used in FilamentPHP.

## Installation

You can install the package via composer:

```bash
composer require chrisreedio/inductor
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="inductor-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="inductor-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="inductor-views"
```

This is the contents of the published config file:

```php
return [
];
```

## Usage

```php
$inductor = new Inductor\Inductor();
echo $inductor->echoPhrase('Hello, Inductor!');
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Chris Reed](https://github.com/chrisreedio)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
