// objectとmapの違いについて

// 1. object keyに入れられる値が、文字列とシンボルのみ

const a = {'1': 'hoge', 1: 'fuga'}
console.log(a) // {'1': 'fuga'}　後から定義した数値が文字列として書き換わる

// 2.Object.prototypeのビルトインプロパティを上書きする

const x = {toString: 'hoge'}

console.log(x) //{ toString: 'hoge' }

//参考: https://qiita.com/raccy/items/816a322fb330193e788b
// https://medium.com/@manjuladube/es6-map-vs-object-648f0b6e69