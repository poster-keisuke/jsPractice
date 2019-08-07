// グローバルスコープ内で、定義されていればブロック内での代入は可能
// 逆に、ブロック内で定義された変数はアクセス不可

let a

{
  a = 'hoge'
  let b = 'fuga'
}

console.log(a) // hoge
console.log(b) // b is not defined
