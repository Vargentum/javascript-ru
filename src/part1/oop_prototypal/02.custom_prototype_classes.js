/*
Exercise 1: создание Класса через Прототип

props in Constructor
methods in Prototype

*/

function example1 () {

  //constructor
  function Animal (name) {
    this.speed = 0
    this.name = name
  }

  //extend contstructor prototype with new methods

  Animal.prototype.run = function (speed) {
    this.speed += speed;
  }

  Animal.prototype.stop = function() {
    this.speed = 0;
  };

  var a = new Animal('rabbit')

  a.run(3)
  console.log(a.speed);
  a.run(3)
  console.log(a.speed);
  a.stop()
  console.log(a.speed);
}
// example1()



/*
Rewrite Functional inheritance to Prototypal
*/

function task1(){

  //functional
  function CoffeeMachineFunctional(power) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.run = function() {
      setTimeout(function() {
        console.log( 'Кофе готов!' );
      }, getTimeToBoil());
    };

    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };

  }

  var cm = new CoffeeMachineFunctional(10000);
  cm.setWaterAmount(50);
  cm.run();


  //prototypal

  function CoffeeMachinePrototypal (power) {
    this._waterAmount = 0
    this._power = power
  }

  //static property
  CoffeeMachinePrototypal.prototype.WATER_HEAD_CAPACITY = 4200

  CoffeeMachinePrototypal.prototype._getTimeToBoil = function () {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
  }

  CoffeeMachinePrototypal.prototype.run = function () {
    setTimeout(function() {
      console.log('Coffee is Ready!');
    }, this._getTimeToBoil())
  }

  CoffeeMachinePrototypal.prototype.setWaterAmount = function (amount) {
    this._waterAmount = amount;
  }

  var cm = new CoffeeMachinePrototypal(10001)
  cm.setWaterAmount(50)
  cm.run()
}
// task1()



/*Task 2: Fix function
*/
function task2 () {
  function Hamster() {
    this.food = [] // make different prop for each instance
  }

  // Hamster.prototype.food = []  incorrect - one food for all instances

  Hamster.prototype.found = function(something) {
    this.food.push(something);
  };

  // Создаём двух хомяков и кормим первого
  var speedy = new Hamster();
  var lazy = new Hamster();

  speedy.found("яблоко");
  speedy.found("орех");

  console.log( speedy.food.length ); // 2
  console.log( lazy.food.length ); // 0
}
// task2()
