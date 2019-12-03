## 環境構築
まず、Reactを使う環境を整備していきましょう。
最初にNode.jsが入っていることを確認しましょう。
ターミナルで以下のコマンドを入力してみてください。
```
node -v
```
バージョンが表示されれば、次にアプリを作ってみましょう。
ターミナルでアプリを作りたいディレクトリまで移動し、まずはyarnを使うために初期化をしましょう。
```
yarn init
```
```
yarn create react-app first-app
cd first-app
yarn start
```
これで、Reactを使う環境が整いました。
今回は「first-app」というアプリを作成しました。
yarn create react-app (アプリ名)でアプリを作り、yarn startでアプリを走らせることができます。
http://localhost:3000/
が開けば成功です。

### 環境の説明
first-appの中には、
1. node_modules<br>
create-react-appで導入されたモジュールが入っています。基本的に触れることはないでしょう。
1. public<br>
アプリの「エントリーポイント」となるindex.htmlや、画像ファイルなどの静的ファイルを配置するディレクトリです。
1. src<br>
ページやコンポーネントを管理するフォルダです。
開発用のソースコードは主にここに配置します。
基本的にここにコンポーネントを作り、編集していきます。
1. .gitignore<br>
node_modulesのようなデータ量が膨大なファイルがある場合、gitに非常に時間がかかります。gitする時にデータ量が膨大なファイルのパスをここに記述するとそのファイルをcommitの対象外にすることができます。
1. package.json<br>
依存モジュールが記述されます。
また、npm scriptsを書くことが可能です。
1. README.md<br>
create-react-appで作成されたアプリの各種実行コマンドの解説が記述されています。
1. yarn.lock<br>
依存モジュールの正確なバージョンが記述されます。

があります。