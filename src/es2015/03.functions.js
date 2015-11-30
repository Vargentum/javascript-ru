/*
  Default parameters: base example
*/

function example1 () {
  
  function hi(name="Guest") {
    console.log(`Hello, ${name}`);
  }

  hi() // Hello, Guest
  hi('Vlad') // Hello, Vlad
}
// example1()



/*
  Default parameters: expression example
*/


function example2 () {
  
  function hi(name=getName().toUpperCase()) {
    console.log(`Hello, ${name}`);
  }

  function getName() {
    if (true) {return "Anon"};
  }

  hi() // Hello, ANON
  hi('Vlad') // Hello, Vlad
}
// example2()



/*
  Spread operator

  info: fullName instead of arguments is full-functional Array
*/
function example3 () {
  
  function hi (...fullName) {
    console.log(fullName.join(' '));
  } 

  hi('vlad', 'argentum') 
}
// example3()



/*
  Destructuring in params: all features available
*/
function example4 () {
  
  let me = {
    name: "Vlad",
    surname: "Argentum"
  }

  function hi ({name="Guest", surname:s="Anon"}) {
    console.log(`Hi, ${name} ${s}`);
  }

  hi({}) //Guest Anon
  hi(me) //Vlad Argentum


  //even can call without params
  function hi ({name="No", surname:s="Params"} = {}) {
    console.log(`Hi, ${name} ${s}`);
  }
  hi() //No Params
}
// example4()





/*
  Function name property
*/
function example5 () {
  
  function a () {} // a.name === 'a'

  let z = function b() {} // b.name === 'b'


  //smart name assigning

  let c = function() {}
  console.log(c.name); // c

  let user = {
    sayHi: function () {} //sayHi.name === 'sayHi'
  }

}
// example5()




/*
  Function Declaration are block scoped
*/
function example6 () {
  
  if (true) {
    function sayHi () { return 'Hi'}
    sayHi()
  };

  // sayHi() // Error: sayHi is not defined
}
// example6()



/*
  Arrow Functions syntax
*/
function example7 () {

  //base
  let inc = x => x + 1


  //self evaluated function
  let incEval = (x => x + 1)()


  // add parenthes when no params
  let pi = () => 3.14


  // add parenthes when more then 1 param
  let sum = (x, y) => x + y


  // add curly brackets and explicit return, when multistring body
  let divide = (x, y) => {
    if (y !== 0) {
      return x / y
    };
  }

}
// example7()



/*
  Arrow functions details
*/
function example8 () {
  
  //useful for callbacks
  let arr = [5,2,4]
  let sorted = arr.sort( (a, b) => a - b)

  console.log(sorted); // 2,4,5



  //Hasn't its own THIS: get it from outer function

  let group = {
    title: "Our command",
    users: [
      {
        name: "Alex"
      },
      {
        name: "Bob"
      },
      {
        name: "John"
      }
    ],

    showList: function() {
      this.users.forEach(user => {
        console.log(`${this.title}: ${user.name}`); //this === group
      })
    }
  }
  group.showList()



  // Hasn't its own ARGUMENTS object. Get it from outer function

  function foo () {
    return (() => arguments[0])()
  }
  console.log(foo(123)) // 123
}
// example8()



/*
  Very useful for decorators: easy call forwarding
*/
function example9 () {
  
  let sum = (x, y) => {
    console.log(x + y)
  }

  function delay (f, ms) {
    return function(){
      setTimeout(() => f.apply(this, arguments), ms)  
    }
  }

  let d = delay(sum, 5000)
  d(1,2)
}
example9()
