/*Задача 1*/
function A() { 
  this.name = 'someString'
}
function B() { 
  return a;
}

var a = new A;
var b = new B;

console.log( a == b ); //true

/*Решение: нужно вернуть в конструкторе B, ссылку на объект a
Дополнение из ответа: они должны возвращать ссылку на один и тот же объект */





/*Задача 2: создать Calculator при помощи конструктора*/

function Calculator() {
  this.read = function(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }
  this.sum = function(){return this.num1 + this.num2}
  this.mul = function(){return this.num1 * this.num2}
}



var calculator = new Calculator();
calculator.read();

console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );




/*Задача 3: создать Accumulator при помощи конструктора*/
var Accumulator = function(initValue) {
  this.value = initValue || 0; //не должно идти после this.read потому что this.value внутри this.read == undefined
  this.read = function(val) {
    this.value += val || 0;
  };  
};



var acm = new Accumulator(5);
console.log(acm.value);  // 5
acm.read(5); 
console.log(acm.value);  // 10
acm.read(50);
console.log(acm.value);  // 60




/*Задача 3: создать Calculator который создает расширяемые объекты-калькуляторы*/
function MetaCalculator(){
  this.calculate = function(operation){
    var operations = operation.split(' ');
    var a      = operations[0];
    var method = operations[1];
    var b      = operations[2];

    if (this[method]) {
      return this[method].exec(a, b);
    } else {
      return 'Error: there is no such method' + method
    }
  };
  this.addMethod = function(method, exec){
    this[method] = {
      name: method,
      exec: exec
    }
  };
}

var powerCalc = new MetaCalculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("2 / 3"));
console.log(powerCalc.calculate("2 - 3"));
