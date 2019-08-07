class Vehicle {
  constructor() {
    this.passengers = []
    console.log('create vehicle')
  }

  addPassenger(p) {
    this.passengers.push(p)
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log('create Car')
  }

  deployAirbags() {
    console.log('deploy')
  }
}

const v = new Vehicle()
v.addPassenger('taro')
v.addPassenger('kei')
console.log(v.passengers) //['taro', 'kei']

const c = new Car()
c.addPassenger('john')
console.log(c.passengers) //['john']

c.deployAirbags() //deploy
