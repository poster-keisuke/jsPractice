// function asyncFunc(paramsAsyncFunc) {
//   return new Promise(
//     function(onFulfilled, onRejected) {
//       // 非同期処理の記述
//       onFulfilled(paramsAsyncFunc) // 成功の場合。引数を経由して値を呼び出し側に渡せる

//       onRejected(paramsAsyncFunc) // 失敗の場合。なくても可
//     }
//   ) // promise
// }

// asyncFunc(paramsAsyncFunc)
// .then(function(paramsOnfulfilled) {
//   // 成功時の処理. paramsOnFUlfilled経由で非同期処理から値を受理可能
// })
// .catch(function(paramsOnRejected) {
//   // エラー発生時の処理。 paramsOnRejected経由で例外などを受け取れる
// })


function countdown(seconds) {
  return new Promise(function(onFulfilled, onRejected) {
      const timeoutIds = []

      for(let i=seconds; i>=0; i--) {
        timeoutIds.push(setTimeout(
          function() {
            if(i===13) {
              timeoutIds.forEach(clearTimeout)
              onRejected(new Error('Do not use this number'))
            }
            else if(i>0) {
              console.log(i + '...')
            }
            else {
              console.log('GO')
              onFulfilled()
            }
        }, (seconds-i)*1000))
      }
    })
}

function launch() {
  return new Promise(function(onFulfilled, onRejected) {
    console.log('launch!!!!!')
    setTimeout(function() {
      onFulfilled('in the space!!!')
    }, 2*1000)
  })
}

countdown(2)
.then(function() {
    console.log('success countdown!')//成功(fulfilled)時に行う処理
})
.then(launch)
.then(function(msg) {
  console.log(msg)
})
.catch(function(err) {
    console.error('failed countdown...' + err.message )//成功(rejected)時に行う処理 
})
