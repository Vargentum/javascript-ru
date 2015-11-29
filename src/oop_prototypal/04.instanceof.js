/*Task 1: why instanceof retuns true?

Answer: because Constructor not take part in equality checking
only prototype takes. 
And prototype of A and prototype of B constructors, has 
reference to single empty object. So
a instaceof A -> true
a instaceof B -> true

*/

function task1 () {
  function A() {}
  function B() {}

  A.prototype = B.prototype = {};

  var a = new A();

  console.log( a instanceof A ); // true
  console.log( a instanceof B ); // true
}
// task1()




/*Task 2: what and why console logs?
Answer: 
  1. false, because Rabbit.prototype.constructor is Animal
  To prevent this, set constructor explicitly
  Rabbit.prototype.constructor = Rabbit
  (incorrect: result is true, because constructor not used equality checking
  only prototype: remember for future)

  2. true, see answer 1
  3. true, because all functions are objects
*/

function task2 () {
  function Animal() {}

  function Rabbit() {}
  Rabbit.prototype = Object.create(Animal.prototype);

  var rabbit = new Rabbit();

  console.log( rabbit instanceof Rabbit ); //false
  console.log( rabbit instanceof Animal ); //true
  console.log( rabbit instanceof Object ); //true
}
task2()