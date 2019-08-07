// 'use strict'

const bruce = { name: 'bruce'}

function update(birthYear, occupation) {
  this.birthYear = birthYear
  this.occupation = occupation
}

console.log(bruce) // { name: 'bruce' }
update.call(bruce, 1994, '歌手')
console.log(bruce) // { name: 'bruce', birthYear: 1994, occupation: '歌手' }
