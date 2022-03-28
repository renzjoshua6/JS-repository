class myQueue{
  constructor (){
    this.elements = []
  }
  // add items in the stack
  push(item){
    this.elements.push(item)
  }

  pop(item){
    if (this.elements.length === 0){
     return console.log('Stack is Empty')
    }
    else
      this.elements.shift()
  }

  check(){
    return console.log(this.elements)
  }

  peek(){
   return console.log(this.elements[this.elements.length - 1])
  }
}

const q1 = new myQueue()

q1.push('Milk')
q1.check()
q1.push('Eggs')
q1.push('Butter')
q1.check()
q1.peek()
q1.push('Cheese')
q1.check()
q1.peek()
q1.pop()
q1.pop()
q1.pop()
q1.pop()
q1.pop()

