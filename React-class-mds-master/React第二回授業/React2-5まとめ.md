## 今回のまとめ
### stateとpropsの基本
stateは全体を管理するコンポーネントでのみ変更可能です。
<br>
propsは親コンポーネントから渡されるデータで、変更不可です。

stateはクラスで記述するコンポーネント内では、以下の型で定義します。
```
：
constructor() {
    super()
    this.state = {}
}
：
```
stateをpropsとして子コンポーネントに受け渡すには、プロパティの形で渡します。
html内にjsを記述する場合は、{}で囲います。

### stateとpropsの応用
stateを更新する時は、

```js
this.ステート.slice()
ステートの変更
this.setState()
```

で行います。

子コンポーネントがstateを更新するメソッドを使用する場合は、親コンポーネントからthis.メソッド名.bind(this)で渡します。



