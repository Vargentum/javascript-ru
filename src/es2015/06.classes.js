/*
  Class 
  
  1 Can't attach varibles to prototype. 
  1.1 add directly instead
*/

function example1() {

  class User {

    constructor (name, surname) {
      [this.name, this.surname] = [name, surname]
    }

    static isUser() {}

    get fullName () {
      return `${name} ${surname}`
    }

    set fullName (str) {
      [this.name, this.surname] = str.split(' ')
    }

    // isHuman: "web-developer" // 1

    sayHi() {
      return `Hi, I'am ${this.name} ${this.surname}`
    }

  }

  User.prototype.isHuman = true // 1.1


  let me = new User('vlad', 'argentum')
  console.log(me.sayHi());
  console.log(me.isHuman);

}

// example1()





/*
  Class Inheritance

  1. parent method usage with super

  2. call parent constructor explicitly with arguments
  2.1 after calling `super`, you `this` object is created and you can access to it

*/

function example2 () {

  class Animal {
    
    constructor (name) {
      this.name = name
    }

    walk () {
      console.log(`I am walking`) 
    }
  }


  class Rabbit extends Animal {

    constructor (name, color) {
      super(name) // 2
      this.color = color // 2.1
    }

    walk() {
      super.walk() // 1
      console.log('and jumping');
    }
  }


  let r1 = new Rabbit('robert', 'grey')

  r1.walk()
  console.log(r1.color)

}
example2()
