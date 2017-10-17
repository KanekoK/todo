# todoリスト

## 使用するもの
- gulp　：　タスクランナー
- ECMAScript　：　フロント部分
- MySQL　：　データベース
- Slim　：　PHPフレームワーク
- Sass　：　CSSのプリプロセッサ


### composerでインストールする準備
#### composer.jsonの生成
```bash
$ composer init
```
#### composer.jsonに記述
```json
{
  "require": {
    "slim/slim": "3.*"
  }
}
```
### Slimのインストール
```bash
$ composer update
```

## ルーティングの設定
index.phpと同階層に`routes`というフォルダを作成。
その中に`[ファイル名].router.php`を作成していく。
`index.php`には以下の記述
```php
<?php
require 'vendor/autoload.php';

$app = new \Slim\App();

// ルーティングの読み込み
$routers = glob('./routes/*.router.php');
    foreach ($routers as $router) {
    require $router;
}

$app->run();
```
今回はしないかな？
