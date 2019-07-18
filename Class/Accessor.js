class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this._userGears = ['P', 'N', 'R', 'D']
    this._userGear = this._userGears[0] 
  }

  get userGear() {return this._userGear}

  set userGear(value) {
    if(this._userGears.indexOf(value) < 0) {
      throw new Error(`ギア指定が正しくない：${value}`)
    }

    this._userGear = value
  }

  shift(gear) { this.userGear = gear; }
}

const car = new Car('Tesla', 'Modle S')
console.log(car)

car.shift('D')
console.log(car.userGear)

// car.userGear = 'X' ギア指定が正しくない