// WeakMap 弱い参照（GCによるオブジェクトの開放を防げない）
// キーに使えるのは、参照型のオブジェクトのみ
// Iterableではない(keysメソッドやsizeプロパティはない)

const map = WeakMap()

let obj = {}

// {}への参照をキーに値をセットする
map.set(obj, 'value')

// {}への参照を破棄する
obj = null

// GCが発生するタイミングでWeakMapから値が破棄される
