
### thisとはなにか。

thisとは、現在のコードが実行されているJavaScriptコンテキストオブジェクトです。参照した時のコンテクスト(状況)によって、thisの内容が変化します。簡単にいうと、.より前の部分になります。
とは言ってもなんのことか分からないと思いますので、実例を通してみてみましょう。

### グローバルオブジェクトを記すthis
まずは、適当にindex.htmlとmain.jsを作成して、index.htmlでmain.jsを読み込みます。そして、main.jsに以下を記述します。

```js:main.js
console.log(this)
```

そして、index.htmlをブラウザで開いて、検証ツールでコンソールを見ると

```
Window
```

と表示されると思います。
これは、グローバルオブジェクト(Windowオブジェクト)になります。グローバルとは、この場合「全体的な」という意味です。どこからでも参照できるということですね。
では、ここでmain.jsを、

```js:main.js
var a = 1111
console.log(this)
```

としてみて、コンソールを見て、Windowの中を見ると、

```
▼Window i 
a: 1111
：
```

となります。varで宣言すると、グローバルオブジェクトに宣言されると学習していたと思います。このように単純にthisを参照すると、このようにグローバルオブジェクトを参照します。関数内でthisを呼び出しても、同じようにグローバルオブジェクトを参照します。

### オブジェクト内でのthis
それでは、今度はオブジェクト内でthisを呼び出してみましょう。

```js:main.js
let obj = {
    number: 10,
    string: "aaaaaa",
    function: function hello() {
        console.log(this)
    }
}

obj.function()
```

ここでコンソールを開くと、以下が表示されます。

```
{number: 10, string: "aaaaaa", function: f}
```

この場合にはthisはobj.function()のうち、objを表しています。つまり、thisはドット( . )以前を表します。

### クラス内でのthis
クラスのインスタンスも、ドット( . )で表せるため、thisを用いて記述します。

```js:main.js
class School {
    constructor(n) {
        this.student = n
    }
    add() {
        this.student += 1
        console.log(this)
    }
}

let codeVillage = new School(10)
codeVillage.add()
```

コンソールには、インスタンスであるcodeVillageの内容が表示されます。

```
School{ student: 11 }
```

このように、thisは、クラスでは任意のインスタンスを表します。なぜなら、クラスの記述の仕方が、インスタンス名.メソッド(コンストラクタ)になるからです。

### apply, call, bind
ここまで見てきたように、thisが何になるかは、状況に依存して変化します。しかし、thisは状況によって変化するため、その状況のthisではないものをthisにしたい場合もあります。例えば、以下の例です。

```js:main.js
var beppu = {
    name: "beppu",
    hello: function () {
        console.log("Hello, " + this.name)
    }
}
var puppu = {
    name: "puppu"
}
puppu.hello() // Hello, puppu を表示したい。
```

すでに関数を定義したので、もう一度関数を定義せずに、Hello, puppuを定義したい場合です。ここでは、this.nameのthisをbeppuではなく、puppuにしたいですね。このように、thisの値を指定できるのが、call, applyの役割です。

```js:main.js
var beppu = {
    name: "beppu",
    hello: function () {
        console.log("Hello, " + this.name)
    }
}
var puppu = {
    name: "puppu"
}
beppu.hello.call(puppu) // Hello, puppu が表示される
```

callとapplyはthisの値の指定に関しては、同じ働きをします。callとapplyの違いは、呼び出し先の関数に引数が必要な場合の、引き渡し方が異なります。例えば、以下のような違いになります。

```js:main.js
var beppu = {
    name: "beppu",
    hello: function (msg) {
        console.log(msg + this.name)
    }
}
var puppu = {
    name: "puppu"
}

beppu.hello.call(puppu, "bonjour, ") // bonjour, puppu が表示される
beppu.hello.apply(puppu, ["bonjour, "]) // bonjour, puppuが表示される
```

hello関数部分をmsgという引数を取るようにした場合、hello関数を呼び出した時点で引数が必要になります。
callとapplyを使っている場合は、callは第二引数以降で、applyは配列で元の関数の引数を渡します。

<br>

callとapplyの他に、bindもあります。ほぼ同じ役割ですが、bindは引数のthisをしばりつけてくれます。

```js:main.js
var hello = {
    name: "Beppu",
    helloName: function() {
        return this.name
    }
}

var helloBeppu = hello.helloName
console.log(helloBeppu()) // グローバルで呼び出されているため、何も表示されない。

var helloBindBeppu = hello.helloName.bind(hello)
console.log(helloBindBeppu()) // bindしたため、コンソールにBeppuが表示される。
```

