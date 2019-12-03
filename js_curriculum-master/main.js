'use strict'




// let hoge = "ほげゲゲゲゲゲゲげ"
// console.log(hoge)



// function hoge() {
//     let huga
//     console.log(huga)
// }


// for (let i = 0; i < 10; i++) {
//     let hoge = "ほげ"
//     console.log(hoge)
// }
















// const HAMBURGER = [
//     "ハンバーガー",
//     "チーズバーガー",
//     "BLTバーガー",
//     "おでんバーガー"
// ]

// const DRINK = [
//     "コーラ",
//     "ビール",
//     "コーヒー",
//     "ストロングゼロ"
// ]

// for (let i = 0; i < HAMBURGER.length; i++) {
//     for (let j = 0; j < DRINK.length; j++) {
//         console.log(`${HAMBURGER[i]}と${DRINK[j]}のセット`)
//     }
// }
// console.log(`${HAMBURGER[0]}と${DRINK[2]}のセット`)
// console.log(`${HAMBURGER[2]}と${DRINK[1]}のセット`)

// for (const i = 0; i < 10; i++) {
//     console.log(i)
// }

// let obj = {
//     a: 1,
//     b: 6,
//     c: 24,
//     d: 17
// }

// const test = Object.keys(obj)

// console.log(test)

// for (let i = 0; i < objKey.length; i++) {
//     // obj[objKey[i]] = obj[objKey[i]] * 2
//     console.log(objKey[i])
// }

// let obj = {
//     a: 1,
//     b: 6,
//     c: 24,
//     d: 17
// }
// let myObjKey = Object.keys(obj)
// console.log(myObjKey)

// let hoge = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (let key in hoge) {
//     console.log(key)
// }

// let x = 0
// while (x < 7) {
//     console.log(x)
//     x += 1
// }

// let price = 1000 // 商品の価格
// let age = 75 // 客の年齢
// if (age > 65) {
//     price = price - (price * 0.2)
// }
// console.log(price)

// let price = 1000
// console.log(`if文前のprice →　：${price}`)

// let age = 25 // 若者(65より小さい)に変更
// if (age > 65) {
//     price = price - (price * 0.2)
// }
// console.log(`if文後のprice →　：${price}`) 

// let num = 100
// console.log(num > 0)
// console.log(num < 0)// 成立してない

// if (true) {
//     console.log("成立だよ")
// }

// if (8) {
//     console.log("if文実行完了")
// }

// let one = 1for (i = 1; i <= 100; i++) {
// if (i % 3 == 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
// } else if (i % 3 == 0) {
//     console.log('Fizz');
// } else if (i % 5 == 0) {
//     console.log('Buzz');
// } else {
//     console.log(i);
// }
// }

// let wan = "1"
// if (one == wan) {
//     console.log('同じだよ！')// こっちが実行される
// } else {
//     console.log('違うよ！')
// }

// function calcTriangleArea(width, height) {
//     let area = width * height / 2
//     console.log(area)
// }
// console.log(calcTriangleArea)

// function calcTax(value) {
//     const tax = 1.08
//     result = value * tax
//     alert('税抜き' + value + '円の税込価格は' + result + "円です。この内" + result - value + "円が消費税です。")
// }
// function calc(num1, num2) {
//     let sum = num1 + num2
//     let diff = num1 - num2
//     let prod = num1 * num2
//     let quot = num1 / num2

//     let calcResult = [sum, diff, prod, quot]

//     return calcResult
// }
// const calcResult = calc(10, 5)

// let sum = calcResult[0]
// let diff = calcResult[1]
// let prod = calcResult[2]
// let quot = calcResult[3]

// console.log(sum, diff, prod, quot)

// 配列
// let [x, y, z] = [1, 2, 3]
// console.log("x →" + x)
// console.log("y →" + y)
// console.log("z →" + z)

// // オブジェクト
// let obj = {
//     x: 1,
//     y: 2,
//     z: 3
// }
// let { x, y, z } = obj
// console.log("x →" + x)
// console.log("y →" + y)
// console.log("z →" + z)

// const name = "名前";
// const obj = {
//     // キーと値が同じ名前
//     name
// };
// console.log(obj); 

// function calc(num1, num2) {
//     let sum = num1 + num2
//     let diff = num1 - num2
//     let prod = num1 * num2
//     let quot = num1 / num2

//     // まずオブジェクトの形でまとめる
//     let calcResult = { sum, diff, prod, quot }

//     // return calcResult
// }
// 分割代入する
// let { sum, diff, prod, quot } = calc(10, 5)
// console.log(sum, diff, prod, quot)

// function sample() {
//     console.log(this)
// }
// let sample = () => {
//     console.log(this)
// }
// let obj = {
//     old: function () {
//         console.log(this)
//     },
//     arrow: () => {
//         console.log(this)
//     }
// }
// obj.old()
// obj.arrow()
// var person = {
//     name: 'mejileben',
//     hobby: 'programming',
//     callHobbyLater: function () {
//         setTimeout(function () {
//             console.log('趣味は' + this.hobby);
//             console.log(this)
//         }, 1000);
//     },
//     callName: function () {
//         console.log("私の名前は" + this.name);
//     }
// }

// person.callHobbyLater();
// person.callName();
// let greet = {
//     hello: function () {
//         alert('へろー')
//     }
// }
// greet.hello()

// function A(n) {
//     if (n != 0) {
//         return n * A(n - 1);
//     }
//     else {
//         return 1;
//     }
// }

// let x = 108
// function scope() {
//     console.log(x)// 参照可
// }

// {
//     let hoge = "ほげ"
//     console.log(hoge)// ほげ
// }
// console.log(hoge)// エラー
// let global = "グローバル変数だよ"
// {
//     let local = "ローカル変数だよ"
// }
// let console = "アイウエオ"

// element.parentNode.removeChild(element);


const text = document.getElementById('text')
const addBtn = document.getElementById('addBtn')
const deleteBtn = document.getElementById('deleteBtn')
let lastElementInBody

const changeText = () => {
    text.textContent = 'クリックされました！'
    const p = document.createElement('p')
    p.textContent = '追加されました！'
    document.body.appendChild(p)
}

const deleteElement = () => {
    lastElementInBody = document.body.lastElementChild
    if (lastElementInBody.tagName !== "P") {
        alert('うわああああああ！！！！')
        return;
    } else {
        lastElementInBody.remove()
    }
}

addBtn.addEventListener('click', changeText)
deleteBtn.addEventListener('click', deleteElement)