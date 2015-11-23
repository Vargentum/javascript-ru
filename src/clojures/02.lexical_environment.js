function sayHi(name) {
  var phrase = "Привет, " + name;
  alert( phrase );
}
sayHi('Вася');


/*Stage 1: function initialization
  a. create LexicalEnvironment object
  b. write arguments
  c. write variables (similar to global object)
*/
function sayHi(name) {
  // LexicalEnvironment = { name: 'Вася', phrase: undefined }
  var phrase = "Привет, " + name;
  alert( phrase );
}
sayHi('Вася');




/*Stage 2: function execution
*/
function sayHi(name) {
  // LexicalEnvironment = { name: 'Вася', phrase: undefined }
  var phrase = "Привет, " + name;

  // LexicalEnvironment = { name: 'Вася', phrase: 'Привет, Вася'}
  alert( phrase );
}

sayHi('Вася');


/*Stage 3: garbage collection
  a. Delete LexicalEnvironment
  b. Clear memory
*/





/*Сlojure example:
  замыкание - область внешних переменных доступных функции
  переменная берется из замыкания - из внешней области.
*/


function makeCount () {
  /*CLOJURE START*/

  var currentCount = 1;

  /*CLOJURE END*/
  return function () {
    return currentCount++; 
    // сначала возвращает, а потом увеличивает !!! 
    // (суффикный декремент, с префиксным возвращало бы уже увеличенное значение currentCount)
  }
}

var c1 = makeCount()

console.log(c1()) //1
console.log(c1()) //2
console.log(c1()) //3


//Each counter are independent
var c2 = makeCount()
console.log(c2()) //1





/*Function Properties
  in JS each function is object, so it can have properties
  Clojure is better than access to function properties, because you can access directly to this property
*/

var f = function () {}
f.test = 5


function makeCounter(){
  function count(){
    return count.counter++;
  }
  count.counter = 1;

  return count; //no evaluation !!! count()
}


var f = makeCount();

console.log(f()) //1
f.counter = 5;
console.log(f()) //5



/*Задача: 1*/
say('Вася'); // Что выведет? Не будет ли ошибки?

var phrase = 'Привет';

function say(name) {
  alert( name + ", " + phrase );
}

/*Решение: вернет 'Вася, undefined'. Ошибки не будет, т.к. переменная phrase инициализирована со значением undefined.
Функция выполнится потому что она уже доступна в Global Object*/



/*Задача: 2
а. каким будет результат?
б. изменится ли value?
в. что изменится если убрать var из строки var value = false
*/
var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  alert( value );
}
f();

/*Решение:
а. true
б. изменится (неправильно: не изменится)
в. ничего. интерпретатор не будет заходить в эту часть, т.к. условие ложно  (частично:)*/





/*Задача: 3
Какой результат?
*/

function test() {
  alert( window );
  var window = 5;
  alert( window );
}
test();

/*Решение (неправильно, забыл что внутри функции будет создана локальная переменная window)
[Object: object]
затем ошибка - недопустимое имя переменной*/

/*Правильное решение: undefined, 5
  будет объявлена локальная переменная window в LE функции test()
  затем стандартные стадии: инициализация с undefined, затем присвоение
*/




/*Задача 4
  Какой результат выполнения? Почему?
*/

var a = 5

(function() {
  alert(a)
})()


/*Решение: undefined (неправильно )
так как в GO записана самовызывающаяся функция она исполняется в начале стадии исполнения.
Переменная 'a' в этот момент определена со значением undefined.
*/

/*Правильное решение: произойдет ошибка, тк отсутствует ; после декларации var a = 5
попытается вызваться 5(function(){...})
Опасный подводный камень для тех кто не ставит ;
*/



/*Задача 5
*/

function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;
    console.log(this.currentCount);
    console.log(makeCount.currentCount);
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}

/*Решение (неправильно): можно c помощью обращения к контексту внутренней функции, которой является makeCounter (через this)
или напрямую через makeCounter.currentCount  */

/*Правильное решение: Нельзя. Локальная переменная полностью перекрывает внешнюю.*/


/*Задача 6
*/
var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // ?
alert( counter() ); // ?

alert( counter2() ); // ?
alert( counter2() ); // ?

/*Решение: 1 2 3 4. Потому что для обеих счетчиков будет использоваться одна и та же переменная currentCount.*/




