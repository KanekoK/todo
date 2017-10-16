<?php
require 'vendor/autoload.php';

$app = \Slim\App;
$app->get('/', function() {
    echo 'Hello world!';
});
$app->run();