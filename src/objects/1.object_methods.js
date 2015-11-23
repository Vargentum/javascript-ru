// Урок 1
// https://learn.javascript.ru/object-methods


// Задача 1
var arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); 

/*Решение:
дооступ к методу осуществляется через [], 
в котором контекст вызова this равен arr */




// Задача 2
var obj = {
  go: function() {console.log(this)}
};

(obj.go)()

/*Решение:
*/


// Задача 3

var obj, method;
obj = {
  go: function() { console.log(this); }
};

obj.go();            // (1) object
(obj.go)();          // (2) object
(method = obj.go)();      // (3) undefined
(obj.go || obj.stop)(); // (4) undefined



//Задача 4

var name = "";
var user = {
  name: "Василий",
  export: this
};
console.log( user.export.name ); //Василий
/*Решение: this без вызова функции - указывает на глобаальный объект
global.name = "" (объявленная выше переменная)
*/



//Задача 5: 
var name = "";
var user = {
  name: "Test",
  export: function() {
    return this;
  }
}
console.log( user.export().name ) //Test
/*Решение: метод инициализируется с помощью () и поэтому в
функцию передается this == user, so this.name == "Test"*/



// Задача 6: возврат объекта с this
var name = "";
var user = {
  name: "Василий",
  export: function() {
    return {
      value: this
    };
  }
};
console.log( user.export().value.name ); 
/*Решение: при вызове функции в this передается ссылка на объект
, поэтому user.export().value == user, отсюда */


//Задача 6: создать калькулятор
var calculator = {
  read: function(a,b){
    this.a = a;
    this.b = b;
  },
  sum: function(){
    return this.a + this.b;
  },
  mul: function(){
    return this.a * this.b;
  }
};

calculator.read(12,45);
console.log( calculator.sum() );
console.log( calculator.mul() );





//Задача 7: make a ladder
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};

//make methods chainable
ladder.up().up().down().up().down().showStep(); // 1


//Решение: в каждом методе вернуть this