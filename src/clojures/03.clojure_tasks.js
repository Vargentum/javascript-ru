function simpleCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}
var counter = simpleCounter();
counter(); //1
counter(); //2


/*Задача 1: улучшить счетчик
  getNext() — получить следующее значение, то,
  что раньше делал вызов counter().
  set(value) — поставить значение.
  reset() — обнулить счётчик.
*/

function improvedCounter(){
  var currentCount = 1;

  // вернем объект и добавим к нему методы
  return {
    getNext: function () {
      return ++currentCount;
    },
    set: function(val) {
      return currentCount = val;
    },
    reset: function () {
      return currentCount = 1;
    }
  }
}

var i1 = improvedCounter();
var i2 = improvedCounter();

i1.getNext() //1
i1.set(5)    //5
i1.reset()   //1
i1.getNext() //2
i1.getNext() //3

i2.getNext() //1
i2.set(5)    //5
i2.reset()   //1
i2.getNext() //2


/*Задача 2: вернуть возможность прямого вызова функции
который увеличивает счетчик*/

function simpleCounterWithMethods(){
  var currentCount = 1;

  //объявим функцию вместо объекта
  function counter(){
    return currentCount++;
  }

  //и добавим к ней методы!
  counter.getNext = function () {
    return ++currentCount;
  },
  counter.set = function(val) {
    return currentCount = val;
  },
  counter.reset = function () {
    return currentCount = 1;
  }

  return counter;
}


var s1 = simpleCounterWithMethods();

s1(); //1;
s1(); //2;
s1.reset(); //1;




/*Задача 3: (правильно)
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.*/

function sum (a) {
  return function(b) {
    return a + b;
  }
}

sum(5)(6);




/*Задача 4: (правильно)
Задача — реализовать строковый буфер на функциях в JavaScript,
со следующим синтаксисом:

Создание объекта: var buffer = makeBuffer();.

Вызов makeBuffer должен возвращать такую функцию buffer,
которая при вызове buffer(value) добавляет значение в некоторое
внутреннее хранилище,
а при вызове без аргументов buffer() — возвращает его.

*/

function makeBuffer () {
  var buffer = "";

  return function(value) {
    if (value) {
      buffer += value;
    } else {
      return buffer;
    }
  }
}

var b = makeBuffer();

b() //''
b('a') //'a'
b('bc') //'abc'
b() //'abc'

var b1 = makeBuffer()

b1('test')
b1('rest')
b1() //'testrest'



/*Задача 5: добавить в makeBuffer метод clear
Решение: правильно, но лучше использовать
Function Declaration instead of Function Expression
*/


function makeBuffer () {
  var buffer = "";

  function buffFn(value){
    if (value) {
      buffer += value;
    } else {
      return buffer;
    }
  }

  buffFn.clear = function(){
    buffer = "";
  }

  return buffFn;
}

var b = makeBuffer();

b() //''
b('a')
b('bc')
b() //'abc'
b.clear();
b() // ''

var b1 = makeBuffer()

b1('test')
b1('rest')
b1() //'testrest'
b1.clear()
b1('test')
b1() // 'test'







/*Задача 6 (правильно)*/

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];


function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
/*
Напишите функцию byField(field),
которую можно использовать в sort для сравнения объектов по полю field,
чтобы пример ниже заработал.
*/


users.sort(byField('name'));
users.forEach(function(user) {
  console.log(user.name);
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  console.log(user.name);
}); // Маша, Вася, Петя



/*Задача 7:

Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
в который входят только те элементы arr, для которых func возвращает true.

Создайте набор «готовых фильтров»: inBetween(a,b) — «между a,b», inArray([...]) — «в массиве [...]».
Использование должно быть таким:
filter(arr, inBetween(3,6)) — выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) — выберет только элементы, совпадающие с одним из значений массива.*/

function filter(arr, func){
  return arr.filter(func);
}

/*Incorrect way: cant access to array current item.*/

// function inBetween(a,b) {
//   return item >= a && item <= b ? true : false;
// }

// function inArray(arr) {
//   return item in arr ? true : false;
// }


/*To properly create filter functions, think about it as a arr.filter callback, it provides an argumens*/


function inBetween(a,b) {
  return item => item >= a && item <= b
}
function inArray(arr) {
  return item => item in arr;
}



var a = [1,2,3,4,5,6,7,8,9,10];

console.log(filter(a, function(a) {
  return a % 2 === 0;
})); // 2,4,6

console.log( filter(a, inBetween(3, 8)) );
console.log( filter(a, inArray([2,4,6])) );



/*Задача 8: замыкание для цикла*/
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() { 
      var count = i; //2
      return function(){ //1
        console.log(count);
      }
    };
    shooters.push(shooter()); //3
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9



/*Решение: (правильно) 
Почему выводит 10? Потому что функция-стрелок запускается в момент когда цикл уже отработал, 
переменная i в LE этой функции будет равна последнему значению цикла, т.е. 10

1. Пусть функция-стрелок возвращает функцию
2. В замыкании сохраним текущее значение i в новую переменную. Внутренняя функция получит к ней доступ.
3. Функцию-стрелок необходимо запустить (что вернет функцию, которая потом будет запущенна в army[0]())
*/

