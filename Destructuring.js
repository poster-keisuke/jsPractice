// 宣言と代入が一緒パターン
const obj = { b: 2, c: 3, d: 4}
const {a, b, c} = obj;

console.log(a); // undefined
console.log(b); // 2
console.log(c); // 3
console.log(d); // d is not defined

// 宣言と代入を分けるパターン
const obj = { b: 2, c: 3, d: 4}
let a, b, c

({a, b, c} = obj) // 括弧で囲む必要がある にブロック囲む{...}だと解釈される

console.log(a); // undefined
console.log(b); // 2
console.log(c); // 3

// 配列の分割
const arr = [1,2,3]
let [x,y] = arr
console.log(x) // 1
console.log(y) // 2

// スプレッド演算子
const arr = [1,2,3,4,5]
let [x,y, ...rest] = arr
console.log(x)
console.log(y)
console.log(rest)