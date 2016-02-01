/*
  Method dispatch - mechainsm, that determines, how to response at income message


  Dynamic dispatch - technique that select method, based on parameters passed into function


  Algo:

    - define methods map
    - compare argument with methods
    - make fallback if method isn't defined
    - translate parameters for selected method and execute it

*/

function example1 () {
  

  let methods = {

    init: function(args) {
      return `Initializing...`
    },
    hello: function(args) {
      return `Hello, ${args}`
    },
    bye: function(args) {
      return `Goodbye, ${args}`
    }

  }

  let greeting = function(type, ...args) {
    let action = 'init' //init default param

    if (typeof type === 'string' && typeof methods[type] === "function") {
      action = type
    }
    return methods[action](args)
  }

  console.log(greeting('hello', 'World', 'and', 'me'))
  console.log(greeting('bye', 'War'))
  console.log(greeting('someMethod', 'War'))

}
example1()
