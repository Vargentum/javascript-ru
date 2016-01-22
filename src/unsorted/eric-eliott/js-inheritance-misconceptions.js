/* Example 1

  Object creation with `delegating prototype`

  animal - delegate prototypa
  mouse - instance


  Tip: Combining Object.assign with Object.create for faster
*/

function example1 () {
  
  let animal = {
    animalType: 'animal',
    describe () {
      return `An ${this.animalType}, with ${this.furColor} fur, ${this.legs} legs, and a ${this.tail} tail.`;
    }
  }

  let mouse = Object.assign(Object.create(animal), {
    animalType: 'mouse',
    furColor: 'brown',
    legs: 4,
    tail: 'long, skinny'
  })

  console.log(mouse.describe())
}
example1()




/* Example 2: Factory function

  Constructors is dangerous and can cause side effects. 
  Stop to use them! Use factories instead.

  Tip: it isn't neccessary to end factory name with `factory` postfix )
*/

function example2 () {

  let animal = {
    animalType: 'animal',
    describe () {
      return `An ${this.animalType}, with ${this.furColor} fur, ${this.legs} legs, and a ${this.tail} tail.`;
    }
  }  

  let mouseFactory = function(config) {
    return Object.assign(Object.create(animal), {
      animalType: 'mouse',
      furColor: 'brown',
      legs: 4,
      tail: 'long, skinny'
    })
  }

  let mickey = mouseFactory()
  console.log(mickey.describe())
}
example2()