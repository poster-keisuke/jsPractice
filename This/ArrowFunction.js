// アロー関数を利用すると、thisもbindされる
const p = {
  name: 'Julie!',
  greetBackwards: function() {

    const getReverseName = () => {
      console.log(this);
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }

    return `${getReverseName()} si eman ym , olleH`; //greetBackwardsから呼び出されると、thisの値が別のものになる。
  },
}
console.log(p.greetBackwards()); //!eiluJ si eman ym , olleH
