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
