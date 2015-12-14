/*
Use getters & setters for limiting and correct usage of public
methods and properties

Convention: 
setter name begins with 'set': setWaterAmount
getter name begins with 'get': getWaterAmount
*/

function example1() {
  function CoffeeMachine(power, amount) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;
    var MAX_WATER_LIMIT = 2000;

    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    //set up 'smart' setter 
    this.setWaterAmount = function (amount) {
      if (amount < 0) {
        throw new Error("Oops, negative number. Try a positive one.");
      } else if (amount > MAX_WATER_LIMIT) {
        throw new Error("You can't add more water then " + MAX_WATER_LIMIT);
      }
      waterAmount = amount;
    }

    // set up getter
    this.getWaterAmout = function() {
      return waterAmount || 0
    }

    // getter-setter (all-in-one) Task 3
    this.waterAmount = function(){
      if (typeof arguments[0] === 'number') {
        // use Settter for shorten, irl replace it to avoid duplications
        this.setWaterAmount(arguments[0])
      
      } else if (arguments.length === 0) {
        // use Getter for shorten, irl replace it to avoid duplications
        this.getWaterAmount()
      }
    }


    // Задать сеттер для onReady Task 4
    var onReady = function () {
      console.log("Your coffee is ready!");
    }
    
    this.setOnReady = function(newOnReady) {
      onReady = newOnReady
    }

    var runningState = false

    this.run = function() {
      runningState = true
      setTimeout(function() {
        runningState = false
        onReady()
      }, getTimeToBoil());
    };

    this.isRunning = function() {
      return runningState;
    }

  }

  var cm = new CoffeeMachine(10000, 200);
  // cm.setOnReady(function(){
  //   console.log("Custom ready message!")
  // })

  console.log( 'До: ' + cm.isRunning() ); // До: false

  cm.run();
  console.log( 'В процессе: ' + cm.isRunning() ); // В процессе: true

  cm.setOnReady(function() {
  console.log( "После: " + cm.isRunning() ); // После: false
});
}

example1()

/*Notes
arguments.length === 0 equal to !arguments.length
*/





/*Задача 1:

Напишите конструктор User для создания объектов:

С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.
*/

function task1 (argument) {

  function User () {
    var firstName = ""
    var surName = ""

    this.setFirstName = function (str) {
      firstName = str
    }

    this.setSurName = function (str) {
      surName = str
    }

    this.getFullName = function () {
      return firstName + " " + surName
    }
  }

  var me = new User()

  me.setFirstName("Vlad")
  me.setSurName("Argentum")

  console.log(me.getFullName());
}

// task1()



/*Задача 2:
Добавьте кофеварке геттер для приватного 
свойства power, чтобы внешний код мог узнать мощность кофеварки.
*/

function task2 () {
  
  function CoffeeMachine(power, capacity) {

    this.setWaterAmount = function(amount) {
      if (amount < 0) {
        throw new Error("Значение должно быть положительным");
      }
      if (amount > capacity) {
        throw new Error("Нельзя залить воды больше, чем " + capacity);
      }

      waterAmount = amount;
    };

    this.getWaterAmount = function() {
      return waterAmount;
    };

    this.getPower = function () {
      return power;
    }
  }

  var cm = new CoffeeMachine(10000, 2000)  
  console.log(cm.getPower());
}
// task2()




/*Задача 3:
Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
Решение см. example1()

*/



/*Задача 4:
Создать сеттер для onReady
Решение см. example1()
*/



/*Задача 5:

*/

