// オブジェクトの場合、参照渡しされるため関数の中で変数の値が変更された場合、関数外の変数の値も変更される。（※新しくオブジェクトを作った場合は別）

function f(o) {
  console.log(`fの中（2つの代入前）: o.message="${o.message}"`); //初期値
  o.message = 'fで最初にセットされた';
  console.log(`fの中（2つの代入の間）: o.message="${o.message}"`); // fで最初にセットされた
  o = {
    message: '新しいオブジェクト'
  };

  console.log(`fの中（2つの代入の後）: o.message="${o.message}"`); // 新しいオブジェクト
}

let o = {
  message: '初期値'
};

console.log(`fの呼び出し前: o.message=${o.message}`); // 初期値
f(o);
console.log(`fの呼び出し前: o.message=${o.message}`);　// fで最初にセットされた
