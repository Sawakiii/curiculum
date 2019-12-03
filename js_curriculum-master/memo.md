# js基礎〜応用雑記
## 基礎
- 変数
    - var
    - let
    - const
    - 命名規則
    - letとvarの違い→巻き上げ
    - 定義
- 代入
    - 再代入
    - 参照渡し値私？
- 配列
    - インデックス
    - lengthプロパティ
    - constの再代入不可
- オブジェクト
    - ブラケット記法
    - ドット記法
    - 参照渡しと値渡し
    - プロパティとメソッド
    - メソッドがまだ！！！！！！！！！！！！
- データ型
    - プリミテぃぶ
    - ブーリアン
    - 文字列
    - 数値
    - undefined
    - null
    - テンプレートリテラル
- オブジェクト
    - 配列
    - オブジェクト
    - 関数など
<!-- - 演算子?????????????
    - 算術
    - →省略記法
    - 等価/不等価
    - →厳密等価演算→暗黙的な型変換
    - 比較
    - 論理 -->
- 制御構文
    - 条件分岐
        - if
        - switch    
    - 繰り返し
        - for
            - オブジェクトの繰り返し
            - 入れ子for文
        - while
- 関数
    - 定義
    - 呼び出し
    - 実行
    - 戻り値
    - アロー
    <!-- - コンストラクタ関数/インストタンス -->
- スコープ
    - グローバルスコープ
    - ローカルスコープ
    - let→ブロックスコープ
    - var→ブロックを形成しない
    - 即時関数
## 応用
- this
    - 実行コンテキストによる違い
    - →script：グローバルスコープ
    - →module：undefined
    - 呼び出し方による違い
- クラス
    - コンストラクタとインスタンス()
    - プロトタイプメソッド
    - 静的メソッド
- プロトタイプ(クラス構文優先？)
    - プロトタイプオブジェクト
    - プロトタイプチェーン
- 継承
    - super
    - プロトタイプ継承
    - 静的メソッドの継承
- 参照渡しと値渡しなんて存在しない(優先度低い)
## DOM
- DOM基礎
    - DOMツリー 
    - prevntDefault
    - 現在ストックしてあるサンプルを作っていく中で順次必要な知識を取り入れていく形にする。(これに関しては何を作るかなどを含め未定)
    - 実はほとんどオブジェクトだしメソッドだしプロパティ
        - 括弧のあるなしで代入なのか実行なのか判断できるよね
- イベントバブリング
    - stopPropegation
