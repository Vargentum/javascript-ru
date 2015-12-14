/*
Base class Machine realize common enable() and disable() methods

Inherit CoffeeMachine from Machine, via call()
*/

function example1 () {
  
  function Machine () {
    var isEnabled = false

    this.enable = function () {
      this.isEnabled = true
    }

    this.disable = function () {
      this.isEnabled = false
    }
  }

  function CoffeeMachine () {
    Machine.call(this) //inherit machine methods
    var waterAmount = 0

    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };
  }

  var cm = new CoffeeMachine(10000);
  cm.enable();
  cm.setWaterAmount(100);
  cm.disable();
}
// example1()




/*Problem: private Parent methods are unavailable from Descendand

Desicion: make ALL Parent methods public (attach to this),
          and define private methods with underscore at start: _privateMethod

          It's a Convention not a Rule (be careful)
*/

function example2 () {
  
  function Machine () {
    this._isEnabled = false //this is Private property: access only from Parent and Descendants, no outside!
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function CoffeeMachine () {
    Machine.call(this) //inherit machine methods
    this.enable()
    console.log(this._isEnabled)
  }

  var cm = new CoffeeMachine(10000);
}
// example2()






/*
  Task: add power argument to all machines

  use Parent.apply(this, arguments), to invoke Parent inside Descendant
  with correct context and parameters passed to Descendant

*/

function example3() {

  function Machine (power) {
    this._power = power

    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function CoffeeMachine (power) {
    Machine.apply(this, arguments) // apply M function with CM arguments

    console.log(this._isEnabled);
    console.log(this._power);
  }

  var cm = new CoffeeMachine(1000)
}
// example3()




/*
  Task: Extend Parents methods in Descendant
*/



function example4() {

  function Machine (power) {
    this._power = power

    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  //1. Overriding method (bad potentially)

  function CoffeeMachine (power, capacity) {
    Machine.apply(this, arguments)

    this.enable = function() {
      //totally new enable
    }
  }


  /* 2. Extending the parent method (better)
        a. Save parent method in variable
        b. define new function (as Overriding method)
        c. call previously saved method with Descendant context passing 
  */


  function Fridge (power, capacity) {
    Machine.apply(this, arguments)

    var parentEnable = this.enable  //a

    this.enable = function() { // b
      parentEnable.call(this) // c
      
      // new extended stuff
    }
  }



  var cm = new CoffeeMachine(1000)
}
// example4()





/*Task 1: 
Make method run causes to error when CM is off
*/

function task1() {

  function Machine (power) {
    this._power = power

    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function CoffeeMachine (power) {
    Machine.apply(this, arguments) // apply M function with CM arguments

    var onReady = function () {
      console.log("Your coffee is ready!");
    }

    this.run = function() {
      if (!this._isEnabled) {
        throw new Error("CoffeeMachine is turned off.")
      }
      onReady()
    }
  }

  var cm = new CoffeeMachine(1000)
  // cm.run() //Error

  cm.enable()
  cm.run() //Ok
}
// task1()



/*Task 2:
Stop CM when it disabled
*/

function task3() {

  function Machine (power) {
    this._power = power

    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function CoffeeMachine (power, capacity) {
    Machine.apply(this, arguments) // apply M function with CM arguments

    var timerID;

    function boilTime() {
      return 3000
    }

    var onReady = function () {
      console.log("Your coffee is ready!");
    }

    this.run = function() {
      if (!this._isEnabled) {
        throw new Error("CoffeeMachine is turned off.")
      }
      timerID = setTimeout(onReady, boilTime());
    }

    var __disable = this.disable

    this.disable = function () {
      __disable.call(this)
      clearTimeout(timerID)
      console.log('Turned off. Sorry, no coffee');
    }
  }

  var cm = new CoffeeMachine(1000)

  cm.enable()
  cm.run() 
  cm.disable() // No onReady message
}
// task2()



/*Task 3:
Inherit Fridge from Machine with private food and methods addFood and getFood
food = array
addFood(i[, i1, i2 ...])
getFood()


*/

function task3() {

  function Machine (power) {
    this._power = power

    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function Fridge (power) {
    Machine.apply(this, arguments)

    var CAPASITY = power / 100
    var food = []

    this.addFood = function() {
      if (!this._isEnabled) {
        throw new Error("Can't add food. Fridge is turned off.")
      }

      for (var i = 0; i < arguments.length; i++) {
        if (food.length >= CAPASITY) {
          throw new Error("Can't add " + arguments[i] + ". Max capacity limit.")  
        } else {
          food.push(arguments[i])  
        }
      }
    }

    this.getFood = function() {
      return food.slice() // new array to prevent outside reaching
    }
  }
  
  var fridge = new Fridge(200)
  // fridge.addFood('Meat') //Error

  fridge.enable() //Error
  try {
    fridge.addFood('Fish', "Milk", "Bread")
  } catch(e) {
    console.log('Sorry, max capacity');
    console.log(fridge.getFood(), 'add all except overflowed')
  }
  
  var mutation = fridge.getFood()
  mutation.push('Bread')

  console.log(mutation, 'mutated array')
  console.log(fridge.getFood(), 'no mutation in private property food')
}
// task3()



/*
task 4:
add public filterFood(func)
add public removeFood(item)
*/

function task4() {

  function Machine (power) {
    this._power = power
    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function Fridge (power) {
    Machine.apply(this, arguments)

    var CAPASITY = power / 100
    var food = []

    this.addFood = function() {
      if (!this._isEnabled) {
        throw new Error("Can't add food. Fridge is turned off.")
      }

      for (var i = 0; i < arguments.length; i++) {
        if (food.length >= CAPASITY) {
          throw new Error("Can't add " + arguments[i] + ". Max capacity limit.")  
        } else {
          food.push(arguments[i])  
        }
      }
    }

    this.getFood = function() {
      return food.slice() // new array to prevent outside reaching
    }

    this.filterFood = function(flt) {
      return food.filter( i => flt(i))
    }

    //dump method: works only with items from fridge
    this.removeFood = function(item) {
      food.map( (i, idx) => {
        if (i == item) {
          food.splice(idx, 1)
        }
      })
    }

    // faster with indexOf
    this.removeFood = function(item) {
      var idx = food.indexOf(item)
      if (idx !== -1) food.splice(idx, 1)
    }
  }
  
  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood({
    title: "котлета",
    calories: 100
  });
  fridge.addFood({
    title: "сок",
    calories: 30
  });
  fridge.addFood({
    title: "зелень",
    calories: 10
  });
  fridge.addFood({
    title: "варенье",
    calories: 150
  });

  fridge.removeFood("нет такой еды"); // без эффекта
  console.log( fridge.getFood().length); // 4

  var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
  });

  dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
  });

  console.log( fridge.getFood().length ); // 2

}
// task4()





/*
task 5:
modify disable method: if food -> error
*/

function task5() {

  function Machine (power) {
    this._power = power
    this._isEnabled = false
    this.enable = function () {
      this._isEnabled = true
    }
    this.disable = function () {
      this._isEnabled = false
    }
  }

  function Fridge (power) {
    Machine.apply(this, arguments)

    var CAPASITY = power / 100
    var food = []

    this.addFood = function() {
      if (!this._isEnabled) {
        throw new Error("Can't add food. Fridge is turned off.")
      }

      for (var i = 0; i < arguments.length; i++) {
        if (food.length >= CAPASITY) {
          throw new Error("Can't add " + arguments[i] + ". Max capacity limit.")  
        } else {
          food.push(arguments[i])  
        }
      }
    }

    this.getFood = function() {
      return food.slice()
    }

    this.filterFood = function(flt) {
      return food.filter( i => flt(i))
    }

    this.removeFood = function(item) {
      var idx = food.indexOf(item)
      if (idx !== -1) food.splice(idx, 1)
    }

    var __disable = this.disable

    this.disable = function () {
      if (food.length > 0) {
        throw new Error("Error: Can't disable fridge with food!")
      }

      __disable.call(this)
    }
  }
  
  var fridge = new Fridge(500);
  fridge.enable();
  fridge.addFood("кус-кус");
  fridge.disable(); // ошибка, в холодильнике есть еда
}
// task5()



