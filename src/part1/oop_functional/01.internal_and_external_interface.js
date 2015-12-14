/*
Внутренний интерфейс - приватные свойства и методы
Внешний - публичные свойства и методы. Доступен снаружи объекта.

ИНКАПСУЛЯЦИЯ - разделение внутреннего и внешнего интерфейса


/*Get right context from private method
1. Use call/apply
2. use bind
3. var self = this
*/


function example1() {

  function CoffeeMachine (power) {
    this.watherAmount = 0;
    
    console.log('Created coffee machine with power of  ' + power + 'VT.');
  }

  //create
  var cm = new CoffeeMachine(1000);

  //add water
  cm.waterAmount = 200;

}
// example1()



/*
add private gedBoilTime - return some int
add private onReady with alert about ready state
add public run, that exec onReady after getBoilTime
*/

function example2 () {
    
  function CoffeeMachine (power) {
    this.watherAmount = 0;

    function getBoilTime() {
      return 5000
    }

    function onReady() {
      console.log('Your coffee is ready!');
    }

    this.run = function () {
      setTimeout(onReady, getBoilTime())
    }
    
    console.log('Created coffee machine with ' + power + ' VT.');
  }

  var cm = new CoffeeMachine(1000);
  cm.waterAmount = 200;

  cm.run()
}

// example2()




/*Add formula for getBoilTime c * m * T*/


function example3 () {
    
  function CoffeeMachine (power) {
    var self = this; // save correct context in clojure
    
    this.watherAmount = 0;
    var WATER_HEAT_CAPACITY = 4200

    function getBoilTime() {
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power
    }

    function onReady() {
      console.log('Your coffee is ready!');
    }

    this.run = function () {
      setTimeout(onReady, getBoilTime())
    }
    
    console.log('Created coffee machine with ' + power + ' VT.');
  }

  var cm = new CoffeeMachine(10000);
  cm.waterAmount = 200;

  cm.run()
}

// example3()




/*TASK 1

add public method stop(), which stops water boiling
*/

function task1() {

 function CoffeeMachine (power) {
    var self = this; // save correct context in clojure
    
    this.watherAmount = 0;
    var WATER_HEAT_CAPACITY = 4200

    var boilTimerID;

    function getBoilTime() {
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power
    }

    function onReady() {
      console.log('Your coffee is ready!');
    }

    this.run = function () {
      boilTimerID = setTimeout(onReady, getBoilTime())
    }

    this.stop = function () {
      clearTimeout(boilTimerID)
      console.log("No Coffee")
    }
    
    console.log('Created coffee machine with ' + power + ' VT.');
  }

  var cm = new CoffeeMachine(10000);
  cm.waterAmount = 200;
  cm.run()
  cm.stop()
}

task1()


