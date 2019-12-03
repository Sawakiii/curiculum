# React-class-2
前回の授業で、Reactの基本的な書き方、コンポーネント構築を学習しましたので、今回からデータを用いて機能を実装していきます。
Reactでデータを扱うために、stateとpropsという概念を理解しましょう。

## stateとpropsの基本-データの受け渡し[SHA1値 : 7822143]
Reactでは、アプリをコンポーネントに分割したため、定義した変数やデータをコンポーネント同士で受け渡しする必要があります。その際に用いるのが、stateとpropsです。
<br>
ちなみに、上記のSHA1値というのは、このReactカリキュラムの完成コードと作成過程のコードが[こちらのgithub](https://github.com/sawaki1998/React-class/commits/master)に公開されており、該当するSHA1値のコミットを参照すると、ソースコードの差分を確認できます。コード全てでなく、差分の確認ができますので、コードの改変が楽になるかと思います。

### stateとは
stateとは、そのコンポーネントが持っている状態(データ)です。
<br>
stateは可変データで、this.setState()で更新が可能です。

### propsとは
propsとは、properties(プロパティ)の略で、親コンポーネントから渡されたプロパティになります。親コンポーネントから渡されたデータと捉えてください。
<br>
propsは不変データで、更新や変更ができません。

### stateとpropsのデータの受け渡し
それでは、TODOアプリのデータの受け渡しと機能実装を通して、stateとpropsの使い方を学んでいきましょう。

実装する残りの機能は、

1. タスクの追加機能
1. タスクの完了・戻す切替機能

の2つになります。

これらの機能を実装するために、コンポーネント間でのTODOデータの受け渡しができるようにしましょう。

#### App.jsxコンポーネントのstate設定
まず、今回扱うTODOのデータは、

1. TODOのタイトル
1. TODOの詳細
1. 完了したかどうか(Boolean)

の3つでした。これらをstateとして定義します。
以下のコードをApp.jsx内に記述していきましょう。
```js:App.jsx
・
・
・
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos : [
				{
					title : "React",
					desc : "コンポーネントを作る",
					isDone: false
				},
				{
					title : "LP作成",
					desc : "レスポンシブ対応でLP作成",
					isDone : false
				}
			]
		}
	}
	render() {
		return (
	  		<div>
				<Form></Form>
				<TodoList todos={this.state.todos}></TodoList>
	  		</div>
		)
  	}
}
・
・
・
```
ここでは、

1. クラスのコンストラクタであるstateの定義
1. stateのTodoListへの受け渡し

を行っています。

super()というのは、継承元のコンストラクタを呼ぶ関数です。これによってthis.stateが使えるようになり、ここではstateを定義していなくてもthis.stateが使用できています。

```
<TodoList todos={this.state.todos}>
```

ここで、htmlのプロパティの形でstateを渡しています。これは、子コンポーネントであるTodoList内ではpropsとなります。

#### TodoList.jsxコンポーネントのpropsの受け渡し
親コンポーネントから受け渡されたプロパティは、
```
this.props.プロパティ名
```
で参照できます。
todosのリスト内のオブジェクトひとつひとつがTodoItemになりますので、TodoItemに必要な情報が渡るようにします。TodoList.jsx内に、どのような処理になるか、考えて書いてみてください。
<br>
ここでは、繰り返し処理を行います。
以下のようなコードになります。

```js:TodoList.jsx
・
・
・
render() {
    let list =[]
    for (let i = 0; i < this.props.todos.length;++) {
        list.push(<TodoItem 
            title={this.props.todos[i].title}
            desc={this.props.todos[i].desc}
            isDone={this.props.todos[i].isDone}
            ></TodoItem>)
    }
    return (
        <ul>
            {list}
        </ul>
    )
}
・
・
・
```
もしくは、このような形になります。

```js:TodoList.jsx
・
・
・
render() {
    let list = this.props.todos.map((todo, i)=>{
        return (
            <TodoItem
            title={todo.title}
            desc={todo.desc}
            isDone={todo.isDone}
            ></TodoItem>
        )
    })
    return (
        <ul>
            {list}
        </ul>
    )
}
・
・
・
```
map関数は、配列.map(新しい配列に変更する関数)で、配列を関数処理して返します。
詳細は[こちら(mdn)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)になります。<br>
Reactではfor文よりmap関数の方がコードが少ないのでmap関数で書くのを推奨します。

#### TodoItem.jsxのコンポーネントのpropsの受け渡し
最後に、TodoItem.jsxのコンポーネントにpropsを受け渡す処理を書いてみましょう。
以下のようなコードになると思います。
```js:TodoItem.jsx
import React from "react"
export default class TodoItem extends React.Component {
    render() {
        const buttonText = this.props.isDone ? "戻す" : "完了" 
        return (
            <li>
                <p>{this.props.title}</p>
                <p>{this.props.desc}</p>
                <button>{buttonText}</button>
            </li>
        )
    }
}
```

それでは、yarn startでアプリを走らせてみましょう。stateに記述した内容が見れれば成功です。
