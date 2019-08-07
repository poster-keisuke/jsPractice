// 'use strict'

const bruce = { name: 'bruce'}

function update(birthYear, occupation) {
  this.birthYear = birthYear
  this.occupation = occupation
}

console.log(bruce) // { name: 'bruce' }
update.apply(bruce, [1994, '歌手']) // 引数は配列で渡す。
console.log(bruce) // { name: 'bruce', birthYear: 1994, occupation: '歌手' }
