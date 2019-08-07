// const o = {
//   name: 'Wallance',
//   speak() {return `My name is ${this.name}!`; }
// }

// const speak = o.speak;
// console.log(speak === o.speak); // true
// console.log(o); // { name: 'Wallance', speak: [Function: speak] }
// console.log(o.speak()); // My name is Wallance!
// console.log(speak()); // My name is undefined!


// const o = {
//   name: 'Julie!',
//   greetBackwards: function() {
//     const self = this;

//     function getReverseName() {
//       let nameBackwards = '';
//       for(let i=self.name.length-1; i>=0; i--) {
//         nameBackwards += self.name[i];
//       }
//       return nameBackwards;
//     }

//     return `${getReverseName()} si eman ym , olleH`; //greetBackwardsから呼び出されると、thisの値が別のものになる。
//   }
// }
// console.log(o.greetBackwards()); //!eiluJ si eman ym , olleH
