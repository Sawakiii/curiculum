## TypeScript
### TypeScriptの概要
#### TypeScriptとは何か
[TypeScript公式サイト](https://www.typescriptlang.org/)によると、TypeScriptとは、Microsoftによって開発された、大規模開発用のJavaScriptです。Node.jsを用いて、JavaScriptにコンパイルして使用します。


#### TypeScriptのメリット
TypeScriptは静的型付けプログラミング言語で、JavaScriptの動的型付け(プログラムが型を決定する)から、静的型付け(型を宣言する)になります。
<br>
型を宣言することで、エラーを未然に防げるため、大規模の開発現場で使われています。

### TypeScriptの文法
それでは、実際にTypeScriptの文法を見てみましょう。

#### 型宣言

変数の宣言は、

```
var/let/const 変数名: タイプ(データの型) = 初期値
```

になります。
データの型(タイプ)は、以下に分類されます。

- number 数値型
- string 文字列型
- boolean 真偽型(false/true)
- symbol シンボル型
- any 任意型(型を指定しない)
- オブジェクト型
    - 配列型
    - タプル型
    - クラス型
    - インターフェイス型
    - 関数型

基本的には、オブジェクト型以外の基本型を使っていきます。
<br>
TypeScriptでは、型を宣言しているため、宣言した型以外の型を代入することはできません。
以下がその例です。

```
let name: string = "Beppu";
name = "Puppu";
name = 10; //エラー
```

ただし、var/let宣言であれば、データ型を省略することができます。

```
let name = "Beppu";
name = "Puppu";
name = 10; //エラー
```

しかし、上記のエラーが表示されます。これは、TypeScriptの型推定と呼ばれる機能で、型を宣言せずとも型を類推します。
これを防ぐために、anyという型宣言が使えます。

```
let name: any = "Beppu";
name = "Puppu";
name = 10; //エラーなし
```

配列を宣言する場合は、

```
let オブジェクト名 = Array<配列内のデータの型> = [配列]
```

となります。以下がその例です。

```
let list = Array<number> = [1, 2, 3, 4, 5]
```



#### 関数の宣言
TypeScriptでは、パラメータの部分と返り値に型を指定して関数を宣言します。

```
function 関数名 (引数: タイプ, ...) : 返り値のタイプ {
    ：
    return ...
}
```

#### クラスの宣言
TypeScriptでは、クラスも変数や関数と同じように、プロパティ等に型を指定して宣言します。

```js
class クラス名 {
    プロパティ名: タイプ;
    ...
    constructor(引数: タイプ) {}
    メソッド名(引数: タイプ) {}
    ...
}
```

#### TypeScriptの使い方の例
##### 環境構築
それでは、実際にTypeScriptを記述して、コンパイルしてみましょう。
まず、ディレクトリを作成します。ここでは、typescript-testという名前にします。
ターミナルを開き、作成したディレクトリ(typescript-test)まで移動して、yarn initを行います。
<br>
次に、TypeScriptを使うために、

```
yarn add typescript
```

を実行してください。

##### TypeScriptのコンパイル
それでは、typescript-test内にsrcフォルダを作成して、その中にHello.tsというファイルを作ってください。
試しに、引数に渡した名前に挨拶をする関数を作ってみましょう。

```ts:Hello.ts
function greet(name: string) : string {
    return "Hello, " + name
}
console.log(greet("Beppu"))
```

それでは、これをコンパイルしてみましょう。typescript-test内でターミナルを開き、

```
yarn tsc ./src/Hello.ts
```

と入力し、実行します。
すると、src内にHello.jsが作成されます。あとは、src内にindex.htmlを作成し、ひな形を入力してHello.jsを読み込むと成功です。
<br>
このように、yarnにインストールし、コンパイルしていく形になります。
実際の開発現場では、webpackの時のように、tsconfig.jsonを作成して、細かい設定をしていきます。




#### 備考サイト

[TypeScriptについてわかりやすく解説(Samurai Blog)](https://www.sejuku.net/blog/93230)

[TypeScriptコンパイルについて(Developers.IO)](https://dev.classmethod.jp/client-side/javascript/typescript-tutorial/)

[がんばらないTypeScript(エンジニアhub)](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)

[TypeScriptの詳しい文法の記事集(atmarkit)](https://www.atmarkit.co.jp/ait/subtop/features/dotnet/typescript_index.html)





