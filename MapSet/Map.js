const u1 = {name: 'taro'}
const u2 = {name: 'hanako'}
const u3 = {name: 'jiro'}
const u4 = {name: 'kanako'}

const userRoles = new Map()
userRoles.set(u1, 'user')
userRoles.set(u2, 'user')
userRoles.set(u3, 'admin')

// 以下のようにチェインにすることができる。
// userRoles
    // .set(u1, 'user')
    // .set(u2, 'user')
    // .set(u3, 'admin')

// 以下のようにコンストラクタに渡して初期化も可能
// const userRoles = new Map([
//   [u1, 'user']
//   [u2, 'user']
//   [u3, 'admin']
// ])

console.log(userRoles.has(u3)) // ture
console.log(userRoles.get(u3)) // admin
console.log(userRoles.has(u4)) // false
console.log(userRoles.get(u4)) // undefined

for(let u of userRoles.keys()) {
  console.log(u.name)
}

for(let r of userRoles.values()) {
  console.log(r)
}

for(let [u,r] of userRoles.entries()) {
  console.log(u)
  console.log(r)
}

console.log([...userRoles.values()]) // [ 'user', 'user', 'admin' ]
