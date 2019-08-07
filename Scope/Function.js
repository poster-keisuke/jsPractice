let f
{
  let o = {note: 'safty', note2: 'safe'}

  f = function() {
    console.log('無名関数の中:' + o.note)
    return o
  }
}

let oRef= f()
console.log(oRef)
oRef.note = 'not safty'
console.log(oRef)
console.log(f())
