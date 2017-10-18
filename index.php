<?php
require 'vendor/autoload.php';

$app = new Slim\App();
// ルーティングの読み込み
$app->get('/', function() {
    require 'public/top.php';
});


$app->run();