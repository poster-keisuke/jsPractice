console.log('Before setTimeout:' + new Date())

setTimeout( () => 
console.log('This is in function of setTimeout' + new Date())
, 10*1000) // 10秒後

console.log('After setTimeout')
console.log('After setTimeout too')
