# Installation

## Clone the repo
`git clone https://github.com/masteropen/encore-demo.git`

## Generate php/js dependencies
`composer install`

`npm install`

## Run server

If you use symfony cli:

`symfony serve`

See [symfony cli](https://github.com/symfony/cli) for more details.

Or by pass symfony built-in server:

`composer require --dev symfony/web-server-bundle`

`php bin/console server:start`.

See [symfony built-in server](https://symfony.com/doc/3.4/setup/built_in_web_server.html) for more details.


Feel free to edit webpack encore configuration, add more entries ...
