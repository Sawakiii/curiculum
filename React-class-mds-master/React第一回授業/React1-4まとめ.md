## 今回のまとめ
### Reactでwebアプリを作る時
```
yarn init
yarn create react-app アプリ名
```
### アプリを走らせる時
```
yarn start
```
### src内のコンポーネントは、以下の書き方で作成していきます
```
import React from "react";
import コンポーネント from "コンポーネントまでのパス";
export default class コンポーネント名 extends React.Component {
    render() {
        return(html部分)
    }
}
```