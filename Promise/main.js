function countdown(seconds) {
  return new Promise(
    function(onFulfilled, onRejected) {
      for(let i=seconds; i>=0; i--) {
        setTimeout(function() {
          if(i===13) return onRejected(new Error('do not use this number'))
          if(i>0) console.log(i + '...')
          else onFulfilled(console.log('GO'))
        }, (seconds-i)*1000)
      }
    }
  )
}

const p = countdown(15)
p.then(function() {
    console.log('success countdown!')//成功(fulfilled)時に行う処理
})
.catch(function(err) {
    console.log('failed countdown...' + err.message )//成功(rejected)時に行う処理 
})

// countdown(15).then(
//   function() {
//     console.log('success')
//   },
//   function(err) {
//     console.log(err.message)
//   }
// )