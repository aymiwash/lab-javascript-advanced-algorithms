class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl < this.MAX_SIZE) {
      return true
    }
    return false
    // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true
    }
    return false
    // ... your code goes here
  }

  enqueue(item) {
    if(this.canEnqueue()){
      this.queueControl.push(item)
      return this.queueControl
    }
    throw new Error(`QUEUE_OVERFLOW`)
    // ... your code goes here
  }

  dequeue() {
    if(!this.isEmpty()){
      return this.queueControl.shift()
      
    }
    throw new Error(`QUEUE_UNDERFLOW`)
    // ... your code goes here
  }

  display() {
    return this.queueControl
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
