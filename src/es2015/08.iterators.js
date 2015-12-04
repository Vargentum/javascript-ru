/*
  new method for..of
    - used for iterate through 
  

  iterable by default
    - array
    - string


  for objects you can create custom iterator with

  Symbol.iterator (hint use [] to set expressed property)

  // * save working variables in clojure

  this method has to return an Object, that contains 
  next() method that return object with two properties
    value: current iterable value
    done: bool


  iterable can be added with spread operator that 
*/


// build in iterate object example
function example1 () {
  let str = "Hello"
  let arr = str.split('')

  for (let i of str) {
    console.log(i);
  }

  for (let i of arr) {
    console.log(i);
  }
}
// example1()



// custom iterator
function example2 () {
  
  class IterableObject {
    constructor (...params) {
      [this.from, this.to] = params
    }
    
    //make object iterable
    [Symbol.iterator] () {

      // save working variables in clojure
      let current = this.from
      let last = this.to

      return {
        next() {
          if (current <= last) {
            return {
              value: current++,
              done: false
            } 
          } else {
            return {
              done: true
            }
          }
        }
      }
    }
  }

  let a = new IterableObject(1,3)
  let b = new IterableObject(5, 8)

  for (let i of a) { console.log(i) }
  console.log('-------------')
  for (let i of b) { console.log(i) }
  console.log('-------------')

  // spread 
  console.log(Math.max(...a))
  console.log(Math.max(...b))
}
// example2()