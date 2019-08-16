class Log {
  constructor() {
    this.messages = []
  }

  add(message) {
    const now = Date.now()
    console.log(`add log: ${message}(${now})`)
    this.messages.push({message, timestamp: now})
  }

  [Symbol.iterator]() {
    return this.messages.values();
  }
}

const log = new Log()
log.add('work start!')

setTimeout(function() {log.add('watch whoele')}, 3*1000)
setTimeout(function() {log.add('watch ship')}, 7*1000)
setTimeout(function() {log.add('finish!')}, 9*1000)

setTimeout(function() {
  console.log(`-work report- (${new Date()})`)

  for(let entry of log) {
    const date = new Date(entry.timestamp)
    console.log(`${entry.message}(${date})`)
  }
}, 10*1000)