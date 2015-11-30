/*LET: 

differences from var
*/


/*
  1. let is block scoped {...}
*/

function example1 () {
  var a = 1

  if (true) {
    var a = 10
    console.log(a); //10 
  };

  console.log(a); //10: variable inside block rewrite outside one


  let b = 1

  if (true) {
    let b = 10
    console.log(b); //10
  };

  console.log(b); // 1: 

  /*
  we have two definitions of b: global, and local inside if block
  hint: if you remove first definition, it causes to error
  */
  
}
// example1()



/*
  2. let is visible only after defining
  * not work in babel, but standart
*/

function example2 () {
  
  console.log(a); // return undefined (no error)
  var a = 1

  console.log(b); // * Error: variable isn't defined
  let b = 2
}
// example2()


/*
  3. can't be redefined in single scope
  * Babel errors when compiling
*/

function example3 () {
  let a = 1
  // let a = 2 // * Error
}
// example3()


/* !!! Most important
  4. for each iteration in cycle, independent variable has been created

  * Easy solve classic clojure iteration problem,
    if it was 'var i', the result will be always 10,
    and you have to use clojure to deal with this.

*/

function example4 () {
    
  function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) { //*
      shooters.push(function() {
        alert( i ); // выводит свой номер
      });
    }
    return shooters;
  }

  var army = makeArmy();
  army[0](); // 0
  army[5](); // 5
}
// example4()





/*CONST: 

  - cant be redefined
  -in other - similar to let

  * babel compile error  
*/

function exaqmple5 () {
  const b = 1
  // b = 10 // * Error:e b is read-only
}


/*
  Const and reference types
  
  Pay attention that if const used with reference type objects,
  we can change object by referece, but can't change referece itself.
  */

function example6 () {
  const o = {a: 1}
  o.a = 2 //allowed: change ref object
  o.b = 1 //allowed: change ref object

  // o = {a: 1} //not allowed: change referece itself
}
