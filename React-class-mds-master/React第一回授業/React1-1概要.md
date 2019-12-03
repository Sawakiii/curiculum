# React-class-1
## Reactの概要
プログラミングにおけるフレームワークとは、アプリやサイト作りに必要な機能や関数をまとめている枠組みです。
ライブラリとは、使う頻度の高い機能や関数をまとめたものです。
フレームワークやライブラリを使うと、コードを一から書かずに様々な機能を実装できるため、開発現場で必須です。

※[フレームワークとライブラリの違いについて(qiita)](https://qiita.com/ryosuke071111/items/63e7c3f06fae14d86b38)

フロントエンドのフレームワークは、React、Angular、Vue.jsが有名です。(厳密にはReactはライブラリです。)
これらには様々な違いがありますが、ここでは最も人気のReactを扱っていきます。


### Reactとは何か
Reactとは、UIに特化したJavaScriptライブラリです。
airbnbやUber、facebookなどがReactを使っています。

[React入門1(WEB企画LAB)](https://webkikaku.co.jp/blog/javascript/react-start/)
<br>
[React入門2(qiita)](https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048)

### なにができるのか
Reactを使うことで、ロジック主体の(JavaScriptをふんだんに使用した)アプリケーションを効率的に開発することが可能です。
特に、SPA(1ページで動作するアプリ)の開発において、真価を発揮します。

### どんな特徴があるか
Reactを使うと、[Material UI(公式)](https://material-ui.com/)などのUIライブラリを使うことができ、UIのデザインが簡単に実装できます。

また、JSX記法を使うという特徴があります。これは、JavaScript内にHTMLを書くような形式になります。
今まではHTMLにJavaScriptを実装していく、HTML主体の開発でしたが、Reactを用いると、JavaScriptをベースに開発していくことが可能になります。