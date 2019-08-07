// インスタンスメソッドであり、プロトタイプメソッドでもある。
class CounterA {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
  }
}

const counterA = new CounterA()
const counterB = new CounterA()

console.log(counterA.increment())
console.log(counterA.count)

console.log(counterA.increment === counterB.increment) // true


// インスタンスメソッドではあるが、プロトタイプメソッドではない。
class CounterB {
  constructor() {
    this.count = 0

    this.increment = () => {
      this.count++
    }
  }
}

const counterC = new CounterB()
const counterD = new CounterB()

console.log(counterC.increment())
console.log(counterC.count)
console.log(counterC.increment === counterD.increment) // false