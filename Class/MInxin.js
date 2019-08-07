class Car {
  constructor(){
  }
}

class InsurancePolicy {
}

function makeInsurable(o) {
  o.addInsurancePolisy = function(p) { this.InsurancePolicy = p }
  o.getIunsurancePolisy = function() { return this.InsurancePolicy }
  o.isIusured = function() { return !!this.InsurancePolicy }
}