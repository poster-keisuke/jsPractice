const listenersMap = new WeakMap()

class EventEmitter {
  addListener(listener) {
    const listeners = listenersMap.get(this) || []
    const newListerners = listeners.concat(listener)

    listenersMap.set(this, newListerners)
  }
}

let eventEmitter = new EventEmitter()
eventEmitter.addListener(() => {
  console.log('イベントが発火しました')
})

// eventEmitterへ参照がなくなったことで自動的にイベントリスナーが解放される
eventEmitter = null