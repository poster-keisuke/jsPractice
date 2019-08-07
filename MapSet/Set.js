const roles = new Set()

roles.add('user')
roles.add('admin')

console.log(roles) // Set { 'user', 'admin' }
console.log(roles.size) // 2

console.log(roles.delete('admin')) // true
console.log(roles)  // Set { 'user' }
