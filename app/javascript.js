"use strict";

/*Function Declaration and Expression*/

sum(1, 5); //correct become

// Declaration
function sum(a, b) {
  return a + b;
}

// Expression
var sum = function sum(argument) {
  return a + b;
};

/*Key difference: FD создаются интерпретатором до начала выполнения кода (стадия инициализации)*/

// Anonymous function

// function(){ /*do smth*/ }

/*Function constructor*/

// new Function(params, code)
//params - string
//code - string

// ****
// var sum = new Function('a,b' 'return a+b;')

/*Зачем: конструирование функций, код которых неизвестен, но строка с ним генерируется или
подгружается динамически.*/

//                      Function Declaration            Function Expression
//
// Когда создается?     на стадии инициализации         на стадии исполнения
//
// вызов до
// объявления?          ДА                              НЕТ
//
// Условное обявление   НЕТ                             ДА
// в if?             
//
// Вызов "на месте"?    НЕТ                             ДА
//
//

// Если нет явной причины для FE, то лучше использовать FD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uX2V4cHJlc3Npb25fYW5kX2RlY2xhcmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzs7O0FBQUEsQUFLUixTQUFTLEdBQUcsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2xCLFNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkOzs7QUFBQSxBQUdELElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFhLFFBQVEsRUFBRTtBQUM1QixTQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsImZpbGUiOiJmdW5jdGlvbl9leHByZXNzaW9uX2FuZF9kZWNsYXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRnVuY3Rpb24gRGVjbGFyYXRpb24gYW5kIEV4cHJlc3Npb24qL1xuXG5zdW0oMSw1KSAvL2NvcnJlY3QgYmVjb21lXG5cblxuXG4vLyBEZWNsYXJhdGlvblxuZnVuY3Rpb24gc3VtIChhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuLy8gRXhwcmVzc2lvblxudmFyIHN1bSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYSArIGI7XG59XG5cblxuLypLZXkgZGlmZmVyZW5jZTogRkQg0YHQvtC30LTQsNGO0YLRgdGPINC40L3RgtC10YDQv9GA0LXRgtCw0YLQvtGA0L7QvCDQtNC+INC90LDRh9Cw0LvQsCDQstGL0L/QvtC70L3QtdC90LjRjyDQutC+0LTQsCAo0YHRgtCw0LTQuNGPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4KSovXG5cblxuXG4vLyBBbm9ueW1vdXMgZnVuY3Rpb25cblxuLy8gZnVuY3Rpb24oKXsgLypkbyBzbXRoKi8gfVxuXG5cblxuLypGdW5jdGlvbiBjb25zdHJ1Y3RvciovXG5cbi8vIG5ldyBGdW5jdGlvbihwYXJhbXMsIGNvZGUpXG4vL3BhcmFtcyAtIHN0cmluZ1xuLy9jb2RlIC0gc3RyaW5nXG5cbi8vICoqKipcbi8vIHZhciBzdW0gPSBuZXcgRnVuY3Rpb24oJ2EsYicgJ3JldHVybiBhK2I7JylcblxuXG4vKtCX0LDRh9C10Lw6INC60L7QvdGB0YLRgNGD0LjRgNC+0LLQsNC90LjQtSDRhNGD0L3QutGG0LjQuSwg0LrQvtC0INC60L7RgtC+0YDRi9GFINC90LXQuNC30LLQtdGB0YLQtdC9LCDQvdC+INGB0YLRgNC+0LrQsCDRgSDQvdC40Lwg0LPQtdC90LXRgNC40YDRg9C10YLRgdGPINC40LvQuFxu0L/QvtC00LPRgNGD0LbQsNC10YLRgdGPINC00LjQvdCw0LzQuNGH0LXRgdC60LguKi9cblxuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uIERlY2xhcmF0aW9uICAgICAgICAgICAgRnVuY3Rpb24gRXhwcmVzc2lvblxuLy8gXG4vLyDQmtC+0LPQtNCwINGB0L7Qt9C00LDQtdGC0YHRjz8gICAgINC90LAg0YHRgtCw0LTQuNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4ICAgICAgICAg0L3QsCDRgdGC0LDQtNC40Lgg0LjRgdC/0L7Qu9C90LXQvdC40Y8gXG4vLyBcbi8vINCy0YvQt9C+0LIg0LTQviBcbi8vINC+0LHRitGP0LLQu9C10L3QuNGPPyAgICAgICAgICDQlNCQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QldCiXG4vLyBcbi8vINCj0YHQu9C+0LLQvdC+0LUg0L7QsdGP0LLQu9C10L3QuNC1ICAg0J3QldCiICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNCQXG4vLyDQsiBpZj8gICAgICAgICAgICAgIFxuLy8gXG4vLyDQktGL0LfQvtCyIFwi0L3QsCDQvNC10YHRgtC1XCI/ICAgINCd0JXQoiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQkFxuLy8gXG4vLyBcblxuXG5cbi8vINCV0YHQu9C4INC90LXRgiDRj9Cy0L3QvtC5INC/0YDQuNGH0LjQvdGLINC00LvRjyBGRSwg0YLQviDQu9GD0YfRiNC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCBGRFxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";

/*Parser stages:

1. Initialization - 
  a. find Function Declarations (FD) and variables
  b. add them to global object (window)
  c. add FD as is
  d. add variables as undefined

2. Execution
  Execute code line by line
  assign variables to values when parser step over them
*/

// На момент инициализации, до выполнения кода:
// window = { f: function, a: undefined, g: undefined }

var a = 5;
// window = { f: function, a: 5, g: undefined }

function f(arg) {} /*...*/
// window = { f: function, a: 5, g: undefined } без изменений, f обработана ранее

var g = function g(arg) {/*...*/};
// window = { f: function, a: 5, g: function }

alert("a" in window); // true,  т.к. есть свойство window.a
alert(a); // равно undefined,  присваивание будет выполнено далее
alert(f); // function ...,  готовая к выполнению функция
alert(g); // undefined, т.к. это переменная, а не Function Declaration

var a = 5;
function f() {/*...*/}
var g = function g() {/*...*/};

/*Задача 1: что выведет лог?*/

if ("a" in window) {
  var a = 1;
}
console.log(a);

/*Решение: 1, так как проверка истинна. window.a существует и равен undefined*/

/*Задача 2: что выведет лог? (перед a нет var)*/

if ("a" in window) {
  a = 1;
}
console.log(a);

/*Решение: Error: a is not defined. При объявлении без var, переменная 
будет добавленна в глобальный объект в момент парсинга значения, а он невозможнен,
потому что проверка ложна.*/

/*Задача 2: что выведет лог?*/

if ("a" in window) {
  a = 1;
}
var a;
console.log(a);

/*Решение: 1. проверка истинна (var a не перезаписывает a=1!!!)*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLmdsb2JhbF9vYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUksQ0FBQyxHQUFHLENBQUM7OztBQUFDLEFBR1YsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFOzs7QUFBVyxBQUczQixJQUFJLENBQUMsR0FBRyxTQUFKLENBQUMsQ0FBWSxHQUFHLEVBQUUsU0FBVzs7O0FBQUMsQUFLbEMsS0FBSyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUM7QUFBQyxBQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQUMsQUFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQUMsQUFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDOztBQUFDLEFBRVQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsU0FBUyxDQUFDLEdBQUcsU0FBVztBQUN4QixJQUFJLENBQUMsR0FBRyxTQUFKLENBQUMsR0FBYyxTQUFXOzs7O0FBQUMsQUFVL0IsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ2pCLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNYO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7OztBQUFDLEFBU2YsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ2pCLEdBQUMsR0FBRyxDQUFDLENBQUM7Q0FDUDtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztBQUFDLEFBVWYsSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ2pCLEdBQUMsR0FBRyxDQUFDLENBQUM7Q0FDUDtBQUNELElBQUksQ0FBQyxDQUFDO0FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUU7OztBQUFDIiwiZmlsZSI6ImNsb2p1cmVzLzAxLmdsb2JhbF9vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlBhcnNlciBzdGFnZXM6XG5cbjEuIEluaXRpYWxpemF0aW9uIC0gXG4gIGEuIGZpbmQgRnVuY3Rpb24gRGVjbGFyYXRpb25zIChGRCkgYW5kIHZhcmlhYmxlc1xuICBiLiBhZGQgdGhlbSB0byBnbG9iYWwgb2JqZWN0ICh3aW5kb3cpXG4gIGMuIGFkZCBGRCBhcyBpc1xuICBkLiBhZGQgdmFyaWFibGVzIGFzIHVuZGVmaW5lZFxuXG4yLiBFeGVjdXRpb25cbiAgRXhlY3V0ZSBjb2RlIGxpbmUgYnkgbGluZVxuICBhc3NpZ24gdmFyaWFibGVzIHRvIHZhbHVlcyB3aGVuIHBhcnNlciBzdGVwIG92ZXIgdGhlbVxuKi9cblxuXG5cbi8vINCd0LAg0LzQvtC80LXQvdGCINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4LCDQtNC+INCy0YvQv9C+0LvQvdC10L3QuNGPINC60L7QtNCwOlxuLy8gd2luZG93ID0geyBmOiBmdW5jdGlvbiwgYTogdW5kZWZpbmVkLCBnOiB1bmRlZmluZWQgfVxuXG52YXIgYSA9IDU7XG4vLyB3aW5kb3cgPSB7IGY6IGZ1bmN0aW9uLCBhOiA1LCBnOiB1bmRlZmluZWQgfVxuXG5mdW5jdGlvbiBmKGFyZykgeyAvKi4uLiovIH1cbi8vIHdpbmRvdyA9IHsgZjogZnVuY3Rpb24sIGE6IDUsIGc6IHVuZGVmaW5lZCB9INCx0LXQtyDQuNC30LzQtdC90LXQvdC40LksIGYg0L7QsdGA0LDQsdC+0YLQsNC90LAg0YDQsNC90LXQtVxuXG52YXIgZyA9IGZ1bmN0aW9uKGFyZykgeyAvKi4uLiovIH07XG4vLyB3aW5kb3cgPSB7IGY6IGZ1bmN0aW9uLCBhOiA1LCBnOiBmdW5jdGlvbiB9XG5cblxuXG5hbGVydChcImFcIiBpbiB3aW5kb3cpOyAvLyB0cnVlLCAg0YIu0LouINC10YHRgtGMINGB0LLQvtC50YHRgtCy0L4gd2luZG93LmFcbmFsZXJ0KGEpOyAvLyDRgNCw0LLQvdC+IHVuZGVmaW5lZCwgINC/0YDQuNGB0LLQsNC40LLQsNC90LjQtSDQsdGD0LTQtdGCINCy0YvQv9C+0LvQvdC10L3QviDQtNCw0LvQtdC1XG5hbGVydChmKTsgLy8gZnVuY3Rpb24gLi4uLCAg0LPQvtGC0L7QstCw0Y8g0Log0LLRi9C/0L7Qu9C90LXQvdC40Y4g0YTRg9C90LrRhtC40Y9cbmFsZXJ0KGcpOyAvLyB1bmRlZmluZWQsINGCLtC6LiDRjdGC0L4g0L/QtdGA0LXQvNC10L3QvdCw0Y8sINCwINC90LUgRnVuY3Rpb24gRGVjbGFyYXRpb25cblxudmFyIGEgPSA1O1xuZnVuY3Rpb24gZigpIHsgLyouLi4qLyB9XG52YXIgZyA9IGZ1bmN0aW9uKCkgeyAvKi4uLiovIH07XG5cblxuXG5cblxuXG5cbi8q0JfQsNC00LDRh9CwIDE6INGH0YLQviDQstGL0LLQtdC00LXRgiDQu9C+0LM/Ki9cblxuaWYgKFwiYVwiIGluIHdpbmRvdykge1xuICB2YXIgYSA9IDE7XG59XG5jb25zb2xlLmxvZyhhKTtcblxuLyrQoNC10YjQtdC90LjQtTogMSwg0YLQsNC6INC60LDQuiDQv9GA0L7QstC10YDQutCwINC40YHRgtC40L3QvdCwLiB3aW5kb3cuYSDRgdGD0YnQtdGB0YLQstGD0LXRgiDQuCDRgNCw0LLQtdC9IHVuZGVmaW5lZCovXG5cblxuXG5cbi8q0JfQsNC00LDRh9CwIDI6INGH0YLQviDQstGL0LLQtdC00LXRgiDQu9C+0LM/ICjQv9C10YDQtdC0IGEg0L3QtdGCIHZhcikqL1xuXG5pZiAoXCJhXCIgaW4gd2luZG93KSB7XG4gIGEgPSAxO1xufVxuY29uc29sZS5sb2coYSk7XG5cbi8q0KDQtdGI0LXQvdC40LU6IEVycm9yOiBhIGlzIG5vdCBkZWZpbmVkLiDQn9GA0Lgg0L7QsdGK0Y/QstC70LXQvdC40Lgg0LHQtdC3IHZhciwg0L/QtdGA0LXQvNC10L3QvdCw0Y8gXG7QsdGD0LTQtdGCINC00L7QsdCw0LLQu9C10L3QvdCwINCyINCz0LvQvtCx0LDQu9GM0L3Ri9C5INC+0LHRitC10LrRgiDQsiDQvNC+0LzQtdC90YIg0L/QsNGA0YHQuNC90LPQsCDQt9C90LDRh9C10L3QuNGPLCDQsCDQvtC9INC90LXQstC+0LfQvNC+0LbQvdC10L0sXG7Qv9C+0YLQvtC80YMg0YfRgtC+INC/0YDQvtCy0LXRgNC60LAg0LvQvtC20L3QsC4qL1xuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMjog0YfRgtC+INCy0YvQstC10LTQtdGCINC70L7Qsz8qL1xuXG5pZiAoXCJhXCIgaW4gd2luZG93KSB7XG4gIGEgPSAxO1xufVxudmFyIGE7XG5jb25zb2xlLmxvZyggYSApO1xuXG4vKtCg0LXRiNC10L3QuNC1OiAxLiDQv9GA0L7QstC10YDQutCwINC40YHRgtC40L3QvdCwICh2YXIgYSDQvdC1INC/0LXRgNC10LfQsNC/0LjRgdGL0LLQsNC10YIgYT0xISEhKSovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";

function sayHi(name) {
  var phrase = "Привет, " + name;
  alert(phrase);
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
  alert(phrase);
}
sayHi('Вася');

/*Stage 2: function execution
*/
function sayHi(name) {
  // LexicalEnvironment = { name: 'Вася', phrase: undefined }
  var phrase = "Привет, " + name;

  // LexicalEnvironment = { name: 'Вася', phrase: 'Привет, Вася'}
  alert(phrase);
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

function makeCount() {
  /*CLOJURE START*/

  var currentCount = 1;

  /*CLOJURE END*/
  return function () {
    return currentCount++;
    // сначала возвращает, а потом увеличивает !!!
    // (суффикный декремент, с префиксным возвращало бы уже увеличенное значение currentCount)
  };
}

var c1 = makeCount();

console.log(c1()); //1
console.log(c1()); //2
console.log(c1()); //3

//Each counter are independent
var c2 = makeCount();
console.log(c2()); //1

/*Function Properties
  in JS each function is object, so it can have properties
  Clojure is better than access to function properties, because you can access directly to this property
*/

var f = function f() {};
f.test = 5;

function makeCounter() {
  function count() {
    return count.counter++;
  }
  count.counter = 1;

  return count; //no evaluation !!! count()
}

var f = makeCount();

console.log(f()); //1
f.counter = 5;
console.log(f()); //5

/*Задача: 1*/
say('Вася'); // Что выведет? Не будет ли ошибки?

var phrase = 'Привет';

function say(name) {
  alert(name + ", " + phrase);
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
  alert(value);
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
  alert(window);
  var window = 5;
  alert(window);
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

var a = 5(function () {
  alert(a);
})();

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

  return function () {
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
  return function () {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert(counter()); // ?
alert(counter()); // ?

alert(counter2()); // ?
alert(counter2()); // ?

/*Решение: 1 2 3 4. Потому что для обеих счетчиков будет использоваться одна и та же переменная currentCount.*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLmxleGljYWxfZW52aXJvbm1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbkIsTUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztBQUMvQixPQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7Q0FDakI7QUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDOzs7Ozs7O0FBQUMsQUFRZCxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7O0FBRW5CLE1BQUksTUFBTSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDL0IsT0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0NBQ2pCO0FBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7OztBQUFDLEFBT2QsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFOztBQUVuQixNQUFJLE1BQU0sR0FBRyxVQUFVLEdBQUcsSUFBSTs7O0FBQUMsQUFHL0IsT0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0NBQ2pCOztBQUVELEtBQUssQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7OztBQUFDLEFBa0JkLFNBQVMsU0FBUyxHQUFJOzs7QUFHcEIsTUFBSSxZQUFZLEdBQUcsQ0FBQzs7O0FBQUMsQUFHckIsU0FBTyxZQUFZO0FBQ2pCLFdBQU8sWUFBWSxFQUFFOzs7QUFBQyxHQUd2QixDQUFBO0NBQ0Y7O0FBRUQsSUFBSSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUE7O0FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7QUFBQSxBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQUEsQUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7O0FBQUEsQUFJakIsSUFBSSxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUE7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7OztBQUFBLEFBV2pCLElBQUksQ0FBQyxHQUFHLFNBQUosQ0FBQyxHQUFlLEVBQUUsQ0FBQTtBQUN0QixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTs7QUFHVixTQUFTLFdBQVcsR0FBRTtBQUNwQixXQUFTLEtBQUssR0FBRTtBQUNkLFdBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ3hCO0FBQ0QsT0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7O0FBRWxCLFNBQU8sS0FBSztBQUFDLENBQ2Q7O0FBR0QsSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUM7O0FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFBQSxBQUNoQixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7OztBQUFBLEFBS2hCLEdBQUcsQ0FBQyxNQUFNLENBQUM7O0FBQUMsQUFFWixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7O0FBRXRCLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNqQixPQUFLLENBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUUsQ0FBQztDQUMvQjs7Ozs7Ozs7OztBQUFBLEFBWUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVkLFNBQVMsQ0FBQyxHQUFHO0FBQ1gsTUFBSSxDQUFDLEVBQUU7QUFDTCxTQUFLLEdBQUcsSUFBSSxDQUFDO0dBQ2QsTUFBTTtBQUNMLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNuQjtBQUNELE9BQUssQ0FBRSxLQUFLLENBQUUsQ0FBQztDQUNoQjtBQUNELENBQUMsRUFBRTs7Ozs7Ozs7Ozs7QUFBQyxBQWVKLFNBQVMsSUFBSSxHQUFHO0FBQ2QsT0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0FBQ2hCLE1BQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNmLE9BQUssQ0FBRSxNQUFNLENBQUUsQ0FBQztDQUNqQjtBQUNELElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsQUFrQlAsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUVSLFlBQVc7QUFDVixPQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDVCxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBa0JKLFNBQVMsV0FBVyxHQUFHO0FBQ3JCLE1BQUksWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFFckIsU0FBTyxZQUFXO0FBQ2hCLFFBQUksWUFBWSxDQUFDO0FBQ2pCLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQy9CLFdBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzs7QUFBQyxHQUVyQyxDQUFDO0NBQ0g7Ozs7Ozs7OztBQUFBLEFBVUQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDOztBQUVyQixTQUFTLFdBQVcsR0FBRztBQUNyQixTQUFPLFlBQVc7QUFDaEIsV0FBTyxZQUFZLEVBQUUsQ0FBQztHQUN2QixDQUFDO0NBQ0g7O0FBRUQsSUFBSSxPQUFPLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDNUIsSUFBSSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7O0FBRTdCLEtBQUssQ0FBRSxPQUFPLEVBQUUsQ0FBRTtBQUFDLEFBQ25CLEtBQUssQ0FBRSxPQUFPLEVBQUUsQ0FBRTs7QUFBQyxBQUVuQixLQUFLLENBQUUsUUFBUSxFQUFFLENBQUU7QUFBQyxBQUNwQixLQUFLLENBQUUsUUFBUSxFQUFFLENBQUU7OztBQUFDIiwiZmlsZSI6ImNsb2p1cmVzLzAyLmxleGljYWxfZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzYXlIaShuYW1lKSB7XG4gIHZhciBwaHJhc2UgPSBcItCf0YDQuNCy0LXRgiwgXCIgKyBuYW1lO1xuICBhbGVydCggcGhyYXNlICk7XG59XG5zYXlIaSgn0JLQsNGB0Y8nKTtcblxuXG4vKlN0YWdlIDE6IGZ1bmN0aW9uIGluaXRpYWxpemF0aW9uXG4gIGEuIGNyZWF0ZSBMZXhpY2FsRW52aXJvbm1lbnQgb2JqZWN0XG4gIGIuIHdyaXRlIGFyZ3VtZW50c1xuICBjLiB3cml0ZSB2YXJpYWJsZXMgKHNpbWlsYXIgdG8gZ2xvYmFsIG9iamVjdClcbiovXG5mdW5jdGlvbiBzYXlIaShuYW1lKSB7XG4gIC8vIExleGljYWxFbnZpcm9ubWVudCA9IHsgbmFtZTogJ9CS0LDRgdGPJywgcGhyYXNlOiB1bmRlZmluZWQgfVxuICB2YXIgcGhyYXNlID0gXCLQn9GA0LjQstC10YIsIFwiICsgbmFtZTtcbiAgYWxlcnQoIHBocmFzZSApO1xufVxuc2F5SGkoJ9CS0LDRgdGPJyk7XG5cblxuXG5cbi8qU3RhZ2UgMjogZnVuY3Rpb24gZXhlY3V0aW9uXG4qL1xuZnVuY3Rpb24gc2F5SGkobmFtZSkge1xuICAvLyBMZXhpY2FsRW52aXJvbm1lbnQgPSB7IG5hbWU6ICfQktCw0YHRjycsIHBocmFzZTogdW5kZWZpbmVkIH1cbiAgdmFyIHBocmFzZSA9IFwi0J/RgNC40LLQtdGCLCBcIiArIG5hbWU7XG5cbiAgLy8gTGV4aWNhbEVudmlyb25tZW50ID0geyBuYW1lOiAn0JLQsNGB0Y8nLCBwaHJhc2U6ICfQn9GA0LjQstC10YIsINCS0LDRgdGPJ31cbiAgYWxlcnQoIHBocmFzZSApO1xufVxuXG5zYXlIaSgn0JLQsNGB0Y8nKTtcblxuXG4vKlN0YWdlIDM6IGdhcmJhZ2UgY29sbGVjdGlvblxuICBhLiBEZWxldGUgTGV4aWNhbEVudmlyb25tZW50XG4gIGIuIENsZWFyIG1lbW9yeVxuKi9cblxuXG5cblxuXG4vKtChbG9qdXJlIGV4YW1wbGU6XG4gINC30LDQvNGL0LrQsNC90LjQtSAtINC+0LHQu9Cw0YHRgtGMINCy0L3QtdGI0L3QuNGFINC/0LXRgNC10LzQtdC90L3Ri9GFINC00L7RgdGC0YPQv9C90YvRhSDRhNGD0L3QutGG0LjQuFxuICDQv9C10YDQtdC80LXQvdC90LDRjyDQsdC10YDQtdGC0YHRjyDQuNC3INC30LDQvNGL0LrQsNC90LjRjyAtINC40Lcg0LLQvdC10YjQvdC10Lkg0L7QsdC70LDRgdGC0LguXG4qL1xuXG5cbmZ1bmN0aW9uIG1ha2VDb3VudCAoKSB7XG4gIC8qQ0xPSlVSRSBTVEFSVCovXG5cbiAgdmFyIGN1cnJlbnRDb3VudCA9IDE7XG5cbiAgLypDTE9KVVJFIEVORCovXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRDb3VudCsrOyBcbiAgICAvLyDRgdC90LDRh9Cw0LvQsCDQstC+0LfQstGA0LDRidCw0LXRgiwg0LAg0L/QvtGC0L7QvCDRg9Cy0LXQu9C40YfQuNCy0LDQtdGCICEhISBcbiAgICAvLyAo0YHRg9GE0YTQuNC60L3Ri9C5INC00LXQutGA0LXQvNC10L3Rgiwg0YEg0L/RgNC10YTQuNC60YHQvdGL0Lwg0LLQvtC30LLRgNCw0YnQsNC70L4g0LHRiyDRg9C20LUg0YPQstC10LvQuNGH0LXQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1IGN1cnJlbnRDb3VudClcbiAgfVxufVxuXG52YXIgYzEgPSBtYWtlQ291bnQoKVxuXG5jb25zb2xlLmxvZyhjMSgpKSAvLzFcbmNvbnNvbGUubG9nKGMxKCkpIC8vMlxuY29uc29sZS5sb2coYzEoKSkgLy8zXG5cblxuLy9FYWNoIGNvdW50ZXIgYXJlIGluZGVwZW5kZW50XG52YXIgYzIgPSBtYWtlQ291bnQoKVxuY29uc29sZS5sb2coYzIoKSkgLy8xXG5cblxuXG5cblxuLypGdW5jdGlvbiBQcm9wZXJ0aWVzXG4gIGluIEpTIGVhY2ggZnVuY3Rpb24gaXMgb2JqZWN0LCBzbyBpdCBjYW4gaGF2ZSBwcm9wZXJ0aWVzXG4gIENsb2p1cmUgaXMgYmV0dGVyIHRoYW4gYWNjZXNzIHRvIGZ1bmN0aW9uIHByb3BlcnRpZXMsIGJlY2F1c2UgeW91IGNhbiBhY2Nlc3MgZGlyZWN0bHkgdG8gdGhpcyBwcm9wZXJ0eVxuKi9cblxudmFyIGYgPSBmdW5jdGlvbiAoKSB7fVxuZi50ZXN0ID0gNVxuXG5cbmZ1bmN0aW9uIG1ha2VDb3VudGVyKCl7XG4gIGZ1bmN0aW9uIGNvdW50KCl7XG4gICAgcmV0dXJuIGNvdW50LmNvdW50ZXIrKztcbiAgfVxuICBjb3VudC5jb3VudGVyID0gMTtcblxuICByZXR1cm4gY291bnQ7IC8vbm8gZXZhbHVhdGlvbiAhISEgY291bnQoKVxufVxuXG5cbnZhciBmID0gbWFrZUNvdW50KCk7XG5cbmNvbnNvbGUubG9nKGYoKSkgLy8xXG5mLmNvdW50ZXIgPSA1O1xuY29uc29sZS5sb2coZigpKSAvLzVcblxuXG5cbi8q0JfQsNC00LDRh9CwOiAxKi9cbnNheSgn0JLQsNGB0Y8nKTsgLy8g0KfRgtC+INCy0YvQstC10LTQtdGCPyDQndC1INCx0YPQtNC10YIg0LvQuCDQvtGI0LjQsdC60Lg/XG5cbnZhciBwaHJhc2UgPSAn0J/RgNC40LLQtdGCJztcblxuZnVuY3Rpb24gc2F5KG5hbWUpIHtcbiAgYWxlcnQoIG5hbWUgKyBcIiwgXCIgKyBwaHJhc2UgKTtcbn1cblxuLyrQoNC10YjQtdC90LjQtTog0LLQtdGA0L3QtdGCICfQktCw0YHRjywgdW5kZWZpbmVkJy4g0J7RiNC40LHQutC4INC90LUg0LHRg9C00LXRgiwg0YIu0LouINC/0LXRgNC10LzQtdC90L3QsNGPIHBocmFzZSDQuNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0L3QsCDRgdC+INC30L3QsNGH0LXQvdC40LXQvCB1bmRlZmluZWQuXG7QpNGD0L3QutGG0LjRjyDQstGL0L/QvtC70L3QuNGC0YHRjyDQv9C+0YLQvtC80YMg0YfRgtC+INC+0L3QsCDRg9C20LUg0LTQvtGB0YLRg9C/0L3QsCDQsiBHbG9iYWwgT2JqZWN0Ki9cblxuXG5cbi8q0JfQsNC00LDRh9CwOiAyXG7QsC4g0LrQsNC60LjQvCDQsdGD0LTQtdGCINGA0LXQt9GD0LvRjNGC0LDRgj9cbtCxLiDQuNC30LzQtdC90LjRgtGB0Y8g0LvQuCB2YWx1ZT9cbtCyLiDRh9GC0L4g0LjQt9C80LXQvdC40YLRgdGPINC10YHQu9C4INGD0LHRgNCw0YLRjCB2YXIg0LjQtyDRgdGC0YDQvtC60LggdmFyIHZhbHVlID0gZmFsc2VcbiovXG52YXIgdmFsdWUgPSAwO1xuXG5mdW5jdGlvbiBmKCkge1xuICBpZiAoMSkge1xuICAgIHZhbHVlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmFsdWUgPSBmYWxzZTtcbiAgfVxuICBhbGVydCggdmFsdWUgKTtcbn1cbmYoKTtcblxuLyrQoNC10YjQtdC90LjQtTpcbtCwLiB0cnVlXG7QsS4g0LjQt9C80LXQvdC40YLRgdGPICjQvdC10L/RgNCw0LLQuNC70YzQvdC+OiDQvdC1INC40LfQvNC10L3QuNGC0YHRjylcbtCyLiDQvdC40YfQtdCz0L4uINC40L3RgtC10YDQv9GA0LXRgtCw0YLQvtGAINC90LUg0LHRg9C00LXRgiDQt9Cw0YXQvtC00LjRgtGMINCyINGN0YLRgyDRh9Cw0YHRgtGMLCDRgi7Qui4g0YPRgdC70L7QstC40LUg0LvQvtC20L3QviAgKNGH0LDRgdGC0LjRh9C90L46KSovXG5cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LA6IDNcbtCa0LDQutC+0Lkg0YDQtdC30YPQu9GM0YLQsNGCP1xuKi9cblxuZnVuY3Rpb24gdGVzdCgpIHtcbiAgYWxlcnQoIHdpbmRvdyApO1xuICB2YXIgd2luZG93ID0gNTtcbiAgYWxlcnQoIHdpbmRvdyApO1xufVxudGVzdCgpO1xuXG4vKtCg0LXRiNC10L3QuNC1ICjQvdC10L/RgNCw0LLQuNC70YzQvdC+LCDQt9Cw0LHRi9C7INGH0YLQviDQstC90YPRgtGA0Lgg0YTRg9C90LrRhtC40Lgg0LHRg9C00LXRgiDRgdC+0LfQtNCw0L3QsCDQu9C+0LrQsNC70YzQvdCw0Y8g0L/QtdGA0LXQvNC10L3QvdCw0Y8gd2luZG93KVxuW09iamVjdDogb2JqZWN0XVxu0LfQsNGC0LXQvCDQvtGI0LjQsdC60LAgLSDQvdC10LTQvtC/0YPRgdGC0LjQvNC+0LUg0LjQvNGPINC/0LXRgNC10LzQtdC90L3QvtC5Ki9cblxuLyrQn9GA0LDQstC40LvRjNC90L7QtSDRgNC10YjQtdC90LjQtTogdW5kZWZpbmVkLCA1XG4gINCx0YPQtNC10YIg0L7QsdGK0Y/QstC70LXQvdCwINC70L7QutCw0LvRjNC90LDRjyDQv9C10YDQtdC80LXQvdC90LDRjyB3aW5kb3cg0LIgTEUg0YTRg9C90LrRhtC40LggdGVzdCgpXG4gINC30LDRgtC10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YvQtSDRgdGC0LDQtNC40Lg6INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGBIHVuZGVmaW5lZCwg0LfQsNGC0LXQvCDQv9GA0LjRgdCy0L7QtdC90LjQtVxuKi9cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgNFxuICDQmtCw0LrQvtC5INGA0LXQt9GD0LvRjNGC0LDRgiDQstGL0L/QvtC70L3QtdC90LjRjz8g0J/QvtGH0LXQvNGDP1xuKi9cblxudmFyIGEgPSA1XG5cbihmdW5jdGlvbigpIHtcbiAgYWxlcnQoYSlcbn0pKClcblxuXG4vKtCg0LXRiNC10L3QuNC1OiB1bmRlZmluZWQgKNC90LXQv9GA0LDQstC40LvRjNC90L4gKVxu0YLQsNC6INC60LDQuiDQsiBHTyDQt9Cw0L/QuNGB0LDQvdCwINGB0LDQvNC+0LLRi9C30YvQstCw0Y7RidCw0Y/RgdGPINGE0YPQvdC60YbQuNGPINC+0L3QsCDQuNGB0L/QvtC70L3Rj9C10YLRgdGPINCyINC90LDRh9Cw0LvQtSDRgdGC0LDQtNC40Lgg0LjRgdC/0L7Qu9C90LXQvdC40Y8uXG7Qn9C10YDQtdC80LXQvdC90LDRjyAnYScg0LIg0Y3RgtC+0YIg0LzQvtC80LXQvdGCINC+0L/RgNC10LTQtdC70LXQvdCwINGB0L4g0LfQvdCw0YfQtdC90LjQtdC8IHVuZGVmaW5lZC5cbiovXG5cbi8q0J/RgNCw0LLQuNC70YzQvdC+0LUg0YDQtdGI0LXQvdC40LU6INC/0YDQvtC40LfQvtC50LTQtdGCINC+0YjQuNCx0LrQsCwg0YLQuiDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCIDsg0L/QvtGB0LvQtSDQtNC10LrQu9Cw0YDQsNGG0LjQuCB2YXIgYSA9IDVcbtC/0L7Qv9GL0YLQsNC10YLRgdGPINCy0YvQt9Cy0LDRgtGM0YHRjyA1KGZ1bmN0aW9uKCl7Li4ufSlcbtCe0L/QsNGB0L3Ri9C5INC/0L7QtNCy0L7QtNC90YvQuSDQutCw0LzQtdC90Ywg0LTQu9GPINGC0LXRhSDQutGC0L4g0L3QtSDRgdGC0LDQstC40YIgO1xuKi9cblxuXG5cbi8q0JfQsNC00LDRh9CwIDVcbiovXG5cbmZ1bmN0aW9uIG1ha2VDb3VudGVyKCkge1xuICB2YXIgY3VycmVudENvdW50ID0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDb3VudDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRDb3VudCk7XG4gICAgY29uc29sZS5sb2cobWFrZUNvdW50LmN1cnJlbnRDb3VudCk7XG4gICAgLy8g0LzQvtC20L3QviDQu9C4INC30LTQtdGB0Ywg0LLRi9Cy0LXRgdGC0LggY3VycmVudENvdW50INC40Lcg0LLQvdC10YjQvdC10Lkg0YTRg9C90LrRhtC40LggKNGA0LDQstC90YvQuSAxKT9cbiAgfTtcbn1cblxuLyrQoNC10YjQtdC90LjQtSAo0L3QtdC/0YDQsNCy0LjQu9GM0L3Qvik6INC80L7QttC90L4gYyDQv9C+0LzQvtGJ0YzRjiDQvtCx0YDQsNGJ0LXQvdC40Y8g0Log0LrQvtC90YLQtdC60YHRgtGDINCy0L3Rg9GC0YDQtdC90L3QtdC5INGE0YPQvdC60YbQuNC4LCDQutC+0YLQvtGA0L7QuSDRj9Cy0LvRj9C10YLRgdGPIG1ha2VDb3VudGVyICjRh9C10YDQtdC3IHRoaXMpXG7QuNC70Lgg0L3QsNC/0YDRj9C80YPRjiDRh9C10YDQtdC3IG1ha2VDb3VudGVyLmN1cnJlbnRDb3VudCAgKi9cblxuLyrQn9GA0LDQstC40LvRjNC90L7QtSDRgNC10YjQtdC90LjQtTog0J3QtdC70YzQt9GPLiDQm9C+0LrQsNC70YzQvdCw0Y8g0L/QtdGA0LXQvNC10L3QvdCw0Y8g0L/QvtC70L3QvtGB0YLRjNGOINC/0LXRgNC10LrRgNGL0LLQsNC10YIg0LLQvdC10YjQvdGO0Y4uKi9cblxuXG4vKtCX0LDQtNCw0YfQsCA2XG4qL1xudmFyIGN1cnJlbnRDb3VudCA9IDE7XG5cbmZ1bmN0aW9uIG1ha2VDb3VudGVyKCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRDb3VudCsrO1xuICB9O1xufVxuXG52YXIgY291bnRlciA9IG1ha2VDb3VudGVyKCk7XG52YXIgY291bnRlcjIgPSBtYWtlQ291bnRlcigpO1xuXG5hbGVydCggY291bnRlcigpICk7IC8vID9cbmFsZXJ0KCBjb3VudGVyKCkgKTsgLy8gP1xuXG5hbGVydCggY291bnRlcjIoKSApOyAvLyA/XG5hbGVydCggY291bnRlcjIoKSApOyAvLyA/XG5cbi8q0KDQtdGI0LXQvdC40LU6IDEgMiAzIDQuINCf0L7RgtC+0LzRgyDRh9GC0L4g0LTQu9GPINC+0LHQtdC40YUg0YHRh9C10YLRh9C40LrQvtCyINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQvtC00L3QsCDQuCDRgtCwINC20LUg0L/QtdGA0LXQvNC10L3QvdCw0Y8gY3VycmVudENvdW50LiovXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

function simpleCounter() {
  var currentCount = 1;

  return function () {
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

function improvedCounter() {
  var currentCount = 1;

  // вернем объект и добавим к нему методы
  return {
    getNext: function getNext() {
      return ++currentCount;
    },
    set: function set(val) {
      return currentCount = val;
    },
    reset: function reset() {
      return currentCount = 1;
    }
  };
}

var i1 = improvedCounter();
var i2 = improvedCounter();

i1.getNext(); //1
i1.set(5); //5
i1.reset(); //1
i1.getNext(); //2
i1.getNext(); //3

i2.getNext(); //1
i2.set(5); //5
i2.reset(); //1
i2.getNext(); //2

/*Задача 2: вернуть возможность прямого вызова функции
который увеличивает счетчик*/

function simpleCounterWithMethods() {
  var currentCount = 1;

  //объявим функцию вместо объекта
  function counter() {
    return currentCount++;
  }

  //и добавим к ней методы!
  counter.getNext = function () {
    return ++currentCount;
  }, counter.set = function (val) {
    return currentCount = val;
  }, counter.reset = function () {
    return currentCount = 1;
  };

  return counter;
}

var s1 = simpleCounterWithMethods();

s1(); //1;
s1(); //2;
s1.reset(); //1;

/*Задача 3: (правильно)
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.*/

function sum(a) {
  return function (b) {
    return a + b;
  };
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

function makeBuffer() {
  var buffer = "";

  return function (value) {
    if (value) {
      buffer += value;
    } else {
      return buffer;
    }
  };
}

var b = makeBuffer();

b(); //''
b('a'); //'a'
b('bc'); //'abc'
b(); //'abc'

var b1 = makeBuffer();

b1('test');
b1('rest');
b1(); //'testrest'

/*Задача 5: добавить в makeBuffer метод clear
Решение: правильно, но лучше использовать
Function Declaration instead of Function Expression
*/

function makeBuffer() {
  var buffer = "";

  function buffFn(value) {
    if (value) {
      buffer += value;
    } else {
      return buffer;
    }
  }

  buffFn.clear = function () {
    buffer = "";
  };

  return buffFn;
}

var b = makeBuffer();

b(); //''
b('a');
b('bc');
b(); //'abc'
b.clear();
b(); // ''

var b1 = makeBuffer();

b1('test');
b1('rest');
b1(); //'testrest'
b1.clear();
b1('test');
b1(); // 'test'

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
  };
}
/*
Напишите функцию byField(field),
которую можно использовать в sort для сравнения объектов по полю field,
чтобы пример ниже заработал.
*/

users.sort(byField('name'));
users.forEach(function (user) {
  console.log(user.name);
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function (user) {
  console.log(user.name);
}); // Маша, Вася, Петя

/*Задача 7:

Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
в который входят только те элементы arr, для которых func возвращает true.

Создайте набор «готовых фильтров»: inBetween(a,b) — «между a,b», inArray([...]) — «в массиве [...]».
Использование должно быть таким:
filter(arr, inBetween(3,6)) — выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) — выберет только элементы, совпадающие с одним из значений массива.*/

function filter(arr, func) {
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

function inBetween(a, b) {
  return function (item) {
    return item >= a && item <= b;
  };
}
function inArray(arr) {
  return function (item) {
    return item in arr;
  };
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filter(a, function (a) {
  return a % 2 === 0;
})); // 2,4,6

console.log(filter(a, inBetween(3, 8)));
console.log(filter(a, inArray([2, 4, 6])));

/*Задача 8: замыкание для цикла*/
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function shooter() {
      var count = i; //2
      return function () {
        //1
        console.log(count);
      };
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
//# sourceMappingURL=data:application/json;base64,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QUksSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDOztBQUV0QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFBQyxBQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7QUFBQyIsImZpbGUiOiJjbG9qdXJlcy8wMy5jbG9qdXJlX3Rhc2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2ltcGxlQ291bnRlcigpIHtcbiAgdmFyIGN1cnJlbnRDb3VudCA9IDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjdXJyZW50Q291bnQrKztcbiAgfTtcbn1cbnZhciBjb3VudGVyID0gc2ltcGxlQ291bnRlcigpO1xuY291bnRlcigpOyAvLzFcbmNvdW50ZXIoKTsgLy8yXG5cblxuLyrQl9Cw0LTQsNGH0LAgMTog0YPQu9GD0YfRiNC40YLRjCDRgdGH0LXRgtGH0LjQulxuICBnZXROZXh0KCkg4oCUINC/0L7Qu9GD0YfQuNGC0Ywg0YHQu9C10LTRg9GO0YnQtdC1INC30L3QsNGH0LXQvdC40LUsINGC0L4sXG4gINGH0YLQviDRgNCw0L3RjNGI0LUg0LTQtdC70LDQuyDQstGL0LfQvtCyIGNvdW50ZXIoKS5cbiAgc2V0KHZhbHVlKSDigJQg0L/QvtGB0YLQsNCy0LjRgtGMINC30L3QsNGH0LXQvdC40LUuXG4gIHJlc2V0KCkg4oCUINC+0LHQvdGD0LvQuNGC0Ywg0YHRh9GR0YLRh9C40LouXG4qL1xuXG5mdW5jdGlvbiBpbXByb3ZlZENvdW50ZXIoKXtcbiAgdmFyIGN1cnJlbnRDb3VudCA9IDE7XG5cbiAgLy8g0LLQtdGA0L3QtdC8INC+0LHRitC10LrRgiDQuCDQtNC+0LHQsNCy0LjQvCDQuiDQvdC10LzRgyDQvNC10YLQvtC00YtcbiAgcmV0dXJuIHtcbiAgICBnZXROZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKytjdXJyZW50Q291bnQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRDb3VudCA9IHZhbDtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY3VycmVudENvdW50ID0gMTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGkxID0gaW1wcm92ZWRDb3VudGVyKCk7XG52YXIgaTIgPSBpbXByb3ZlZENvdW50ZXIoKTtcblxuaTEuZ2V0TmV4dCgpIC8vMVxuaTEuc2V0KDUpICAgIC8vNVxuaTEucmVzZXQoKSAgIC8vMVxuaTEuZ2V0TmV4dCgpIC8vMlxuaTEuZ2V0TmV4dCgpIC8vM1xuXG5pMi5nZXROZXh0KCkgLy8xXG5pMi5zZXQoNSkgICAgLy81XG5pMi5yZXNldCgpICAgLy8xXG5pMi5nZXROZXh0KCkgLy8yXG5cblxuLyrQl9Cw0LTQsNGH0LAgMjog0LLQtdGA0L3Rg9GC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQv9GA0Y/QvNC+0LPQviDQstGL0LfQvtCy0LAg0YTRg9C90LrRhtC40LhcbtC60L7RgtC+0YDRi9C5INGD0LLQtdC70LjRh9C40LLQsNC10YIg0YHRh9C10YLRh9C40LoqL1xuXG5mdW5jdGlvbiBzaW1wbGVDb3VudGVyV2l0aE1ldGhvZHMoKXtcbiAgdmFyIGN1cnJlbnRDb3VudCA9IDE7XG5cbiAgLy/QvtCx0YrRj9Cy0LjQvCDRhNGD0L3QutGG0LjRjiDQstC80LXRgdGC0L4g0L7QsdGK0LXQutGC0LBcbiAgZnVuY3Rpb24gY291bnRlcigpe1xuICAgIHJldHVybiBjdXJyZW50Q291bnQrKztcbiAgfVxuXG4gIC8v0Lgg0LTQvtCx0LDQstC40Lwg0Log0L3QtdC5INC80LXRgtC+0LTRiyFcbiAgY291bnRlci5nZXROZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArK2N1cnJlbnRDb3VudDtcbiAgfSxcbiAgY291bnRlci5zZXQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gY3VycmVudENvdW50ID0gdmFsO1xuICB9LFxuICBjb3VudGVyLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjdXJyZW50Q291bnQgPSAxO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50ZXI7XG59XG5cblxudmFyIHMxID0gc2ltcGxlQ291bnRlcldpdGhNZXRob2RzKCk7XG5cbnMxKCk7IC8vMTtcbnMxKCk7IC8vMjtcbnMxLnJlc2V0KCk7IC8vMTtcblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMzogKNC/0YDQsNCy0LjQu9GM0L3QvilcbtCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4gc3VtLCDQutC+0YLQvtGA0LDRjyDRgNCw0LHQvtGC0LDQtdGCINGC0LDQujogc3VtKGEpKGIpID0gYStiLiovXG5cbmZ1bmN0aW9uIHN1bSAoYSkge1xuICByZXR1cm4gZnVuY3Rpb24oYikge1xuICAgIHJldHVybiBhICsgYjtcbiAgfVxufVxuXG5zdW0oNSkoNik7XG5cblxuXG5cbi8q0JfQsNC00LDRh9CwIDQ6ICjQv9GA0LDQstC40LvRjNC90L4pXG7Ql9Cw0LTQsNGH0LAg4oCUINGA0LXQsNC70LjQt9C+0LLQsNGC0Ywg0YHRgtGA0L7QutC+0LLRi9C5INCx0YPRhNC10YAg0L3QsCDRhNGD0L3QutGG0LjRj9GFINCyIEphdmFTY3JpcHQsXG7RgdC+INGB0LvQtdC00YPRjtGJ0LjQvCDRgdC40L3RgtCw0LrRgdC40YHQvtC8OlxuXG7QodC+0LfQtNCw0L3QuNC1INC+0LHRitC10LrRgtCwOiB2YXIgYnVmZmVyID0gbWFrZUJ1ZmZlcigpOy5cblxu0JLRi9C30L7QsiBtYWtlQnVmZmVyINC00L7Qu9C20LXQvSDQstC+0LfQstGA0LDRidCw0YLRjCDRgtCw0LrRg9GOINGE0YPQvdC60YbQuNGOIGJ1ZmZlcixcbtC60L7RgtC+0YDQsNGPINC/0YDQuCDQstGL0LfQvtCy0LUgYnVmZmVyKHZhbHVlKSDQtNC+0LHQsNCy0LvRj9C10YIg0LfQvdCw0YfQtdC90LjQtSDQsiDQvdC10LrQvtGC0L7RgNC+0LVcbtCy0L3Rg9GC0YDQtdC90L3QtdC1INGF0YDQsNC90LjQu9C40YnQtSxcbtCwINC/0YDQuCDQstGL0LfQvtCy0LUg0LHQtdC3INCw0YDQs9GD0LzQtdC90YLQvtCyIGJ1ZmZlcigpIOKAlCDQstC+0LfQstGA0LDRidCw0LXRgiDQtdCz0L4uXG5cbiovXG5cbmZ1bmN0aW9uIG1ha2VCdWZmZXIgKCkge1xuICB2YXIgYnVmZmVyID0gXCJcIjtcblxuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG4gIH1cbn1cblxudmFyIGIgPSBtYWtlQnVmZmVyKCk7XG5cbmIoKSAvLycnXG5iKCdhJykgLy8nYSdcbmIoJ2JjJykgLy8nYWJjJ1xuYigpIC8vJ2FiYydcblxudmFyIGIxID0gbWFrZUJ1ZmZlcigpXG5cbmIxKCd0ZXN0JylcbmIxKCdyZXN0JylcbmIxKCkgLy8ndGVzdHJlc3QnXG5cblxuXG4vKtCX0LDQtNCw0YfQsCA1OiDQtNC+0LHQsNCy0LjRgtGMINCyIG1ha2VCdWZmZXIg0LzQtdGC0L7QtCBjbGVhclxu0KDQtdGI0LXQvdC40LU6INC/0YDQsNCy0LjQu9GM0L3Qviwg0L3QviDQu9GD0YfRiNC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjFxuRnVuY3Rpb24gRGVjbGFyYXRpb24gaW5zdGVhZCBvZiBGdW5jdGlvbiBFeHByZXNzaW9uXG4qL1xuXG5cbmZ1bmN0aW9uIG1ha2VCdWZmZXIgKCkge1xuICB2YXIgYnVmZmVyID0gXCJcIjtcblxuICBmdW5jdGlvbiBidWZmRm4odmFsdWUpe1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbiAgfVxuXG4gIGJ1ZmZGbi5jbGVhciA9IGZ1bmN0aW9uKCl7XG4gICAgYnVmZmVyID0gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBidWZmRm47XG59XG5cbnZhciBiID0gbWFrZUJ1ZmZlcigpO1xuXG5iKCkgLy8nJ1xuYignYScpXG5iKCdiYycpXG5iKCkgLy8nYWJjJ1xuYi5jbGVhcigpO1xuYigpIC8vICcnXG5cbnZhciBiMSA9IG1ha2VCdWZmZXIoKVxuXG5iMSgndGVzdCcpXG5iMSgncmVzdCcpXG5iMSgpIC8vJ3Rlc3RyZXN0J1xuYjEuY2xlYXIoKVxuYjEoJ3Rlc3QnKVxuYjEoKSAvLyAndGVzdCdcblxuXG5cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgNiAo0L/RgNCw0LLQuNC70YzQvdC+KSovXG5cbnZhciB1c2VycyA9IFt7XG4gIG5hbWU6IFwi0JLQsNGB0Y9cIixcbiAgc3VybmFtZTogJ9CY0LLQsNC90L7QsicsXG4gIGFnZTogMjBcbn0sIHtcbiAgbmFtZTogXCLQn9C10YLRj1wiLFxuICBzdXJuYW1lOiAn0KfQsNC/0LDQtdCyJyxcbiAgYWdlOiAyNVxufSwge1xuICBuYW1lOiBcItCc0LDRiNCwXCIsXG4gIHN1cm5hbWU6ICfQnNC10LTQstC10LTQtdCy0LAnLFxuICBhZ2U6IDE4XG59XTtcblxuXG5mdW5jdGlvbiBieUZpZWxkKGZpZWxkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhW2ZpZWxkXSA+IGJbZmllbGRdID8gMSA6IC0xO1xuICB9XG59XG4vKlxu0J3QsNC/0LjRiNC40YLQtSDRhNGD0L3QutGG0LjRjiBieUZpZWxkKGZpZWxkKSxcbtC60L7RgtC+0YDRg9GOINC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINCyIHNvcnQg0LTQu9GPINGB0YDQsNCy0L3QtdC90LjRjyDQvtCx0YrQtdC60YLQvtCyINC/0L4g0L/QvtC70Y4gZmllbGQsXG7Rh9GC0L7QsdGLINC/0YDQuNC80LXRgCDQvdC40LbQtSDQt9Cw0YDQsNCx0L7RgtCw0LsuXG4qL1xuXG5cbnVzZXJzLnNvcnQoYnlGaWVsZCgnbmFtZScpKTtcbnVzZXJzLmZvckVhY2goZnVuY3Rpb24odXNlcikge1xuICBjb25zb2xlLmxvZyh1c2VyLm5hbWUpO1xufSk7IC8vINCS0LDRgdGPLCDQnNCw0YjQsCwg0J/QtdGC0Y9cblxudXNlcnMuc29ydChieUZpZWxkKCdhZ2UnKSk7XG51c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcbiAgY29uc29sZS5sb2codXNlci5uYW1lKTtcbn0pOyAvLyDQnNCw0YjQsCwg0JLQsNGB0Y8sINCf0LXRgtGPXG5cblxuXG4vKtCX0LDQtNCw0YfQsCA3OlxuXG7QodC+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIGZpbHRlcihhcnIsIGZ1bmMpLCDQutC+0YLQvtGA0LDRjyDQv9C+0LvRg9GH0LDQtdGCINC80LDRgdGB0LjQsiBhcnIg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0L3QvtCy0YvQuSxcbtCyINC60L7RgtC+0YDRi9C5INCy0YXQvtC00Y/RgiDRgtC+0LvRjNC60L4g0YLQtSDRjdC70LXQvNC10L3RgtGLIGFyciwg0LTQu9GPINC60L7RgtC+0YDRi9GFIGZ1bmMg0LLQvtC30LLRgNCw0YnQsNC10YIgdHJ1ZS5cblxu0KHQvtC30LTQsNC50YLQtSDQvdCw0LHQvtGAIMKr0LPQvtGC0L7QstGL0YUg0YTQuNC70YzRgtGA0L7QssK7OiBpbkJldHdlZW4oYSxiKSDigJQgwqvQvNC10LbQtNGDIGEsYsK7LCBpbkFycmF5KFsuLi5dKSDigJQgwqvQsiDQvNCw0YHRgdC40LLQtSBbLi4uXcK7Llxu0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINGC0LDQutC40Lw6XG5maWx0ZXIoYXJyLCBpbkJldHdlZW4oMyw2KSkg4oCUINCy0YvQsdC10YDQtdGCINGC0L7Qu9GM0LrQviDRh9C40YHQu9CwINC+0YIgMyDQtNC+IDYsXG5maWx0ZXIoYXJyLCBpbkFycmF5KFsxLDIsM10pKSDigJQg0LLRi9Cx0LXRgNC10YIg0YLQvtC70YzQutC+INGN0LvQtdC80LXQvdGC0YssINGB0L7QstC/0LDQtNCw0Y7RidC40LUg0YEg0L7QtNC90LjQvCDQuNC3INC30L3QsNGH0LXQvdC40Lkg0LzQsNGB0YHQuNCy0LAuKi9cblxuZnVuY3Rpb24gZmlsdGVyKGFyciwgZnVuYyl7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmMpO1xufVxuXG4vKkluY29ycmVjdCB3YXk6IGNhbnQgYWNjZXNzIHRvIGFycmF5IGN1cnJlbnQgaXRlbS4qL1xuXG4vLyBmdW5jdGlvbiBpbkJldHdlZW4oYSxiKSB7XG4vLyAgIHJldHVybiBpdGVtID49IGEgJiYgaXRlbSA8PSBiID8gdHJ1ZSA6IGZhbHNlO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBpbkFycmF5KGFycikge1xuLy8gICByZXR1cm4gaXRlbSBpbiBhcnIgPyB0cnVlIDogZmFsc2U7XG4vLyB9XG5cblxuLypUbyBwcm9wZXJseSBjcmVhdGUgZmlsdGVyIGZ1bmN0aW9ucywgdGhpbmsgYWJvdXQgaXQgYXMgYSBhcnIuZmlsdGVyIGNhbGxiYWNrLCBpdCBwcm92aWRlcyBhbiBhcmd1bWVucyovXG5cblxuZnVuY3Rpb24gaW5CZXR3ZWVuKGEsYikge1xuICByZXR1cm4gaXRlbSA9PiBpdGVtID49IGEgJiYgaXRlbSA8PSBiXG59XG5mdW5jdGlvbiBpbkFycmF5KGFycikge1xuICByZXR1cm4gaXRlbSA9PiBpdGVtIGluIGFycjtcbn1cblxuXG5cbnZhciBhID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwXTtcblxuY29uc29sZS5sb2coZmlsdGVyKGEsIGZ1bmN0aW9uKGEpIHtcbiAgcmV0dXJuIGEgJSAyID09PSAwO1xufSkpOyAvLyAyLDQsNlxuXG5jb25zb2xlLmxvZyggZmlsdGVyKGEsIGluQmV0d2VlbigzLCA4KSkgKTtcbmNvbnNvbGUubG9nKCBmaWx0ZXIoYSwgaW5BcnJheShbMiw0LDZdKSkgKTtcblxuXG5cbi8q0JfQsNC00LDRh9CwIDg6INC30LDQvNGL0LrQsNC90LjQtSDQtNC70Y8g0YbQuNC60LvQsCovXG5mdW5jdGlvbiBtYWtlQXJteSgpIHtcblxuICB2YXIgc2hvb3RlcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICB2YXIgc2hvb3RlciA9IGZ1bmN0aW9uKCkgeyBcbiAgICAgIHZhciBjb3VudCA9IGk7IC8vMlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IC8vMVxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzaG9vdGVycy5wdXNoKHNob290ZXIoKSk7IC8vM1xuICB9XG5cbiAgcmV0dXJuIHNob290ZXJzO1xufVxuXG52YXIgYXJteSA9IG1ha2VBcm15KCk7XG5cbmFybXlbMF0oKTsgLy8g0YHRgtGA0LXQu9C+0Log0LLRi9Cy0L7QtNC40YIgMTAsINCwINC00L7Qu9C20LXQvSAwXG5hcm15WzVdKCk7IC8vINGB0YLRgNC10LvQvtC6INCy0YvQstC+0LTQuNGCIDEwLi4uXG4vLyAuLiDQstGB0LUg0YHRgtGA0LXQu9C60Lgg0LLRi9Cy0L7QtNGP0YIgMTAg0LLQvNC10YHRgtC+IDAsMSwyLi4uOVxuXG5cblxuLyrQoNC10YjQtdC90LjQtTogKNC/0YDQsNCy0LjQu9GM0L3QvikgXG7Qn9C+0YfQtdC80YMg0LLRi9Cy0L7QtNC40YIgMTA/INCf0L7RgtC+0LzRgyDRh9GC0L4g0YTRg9C90LrRhtC40Y8t0YHRgtGA0LXQu9C+0Log0LfQsNC/0YPRgdC60LDQtdGC0YHRjyDQsiDQvNC+0LzQtdC90YIg0LrQvtCz0LTQsCDRhtC40LrQuyDRg9C20LUg0L7RgtGA0LDQsdC+0YLQsNC7LCBcbtC/0LXRgNC10LzQtdC90L3QsNGPIGkg0LIgTEUg0Y3RgtC+0Lkg0YTRg9C90LrRhtC40Lgg0LHRg9C00LXRgiDRgNCw0LLQvdCwINC/0L7RgdC70LXQtNC90LXQvNGDINC30L3QsNGH0LXQvdC40Y4g0YbQuNC60LvQsCwg0YIu0LUuIDEwXG5cbjEuINCf0YPRgdGC0Ywg0YTRg9C90LrRhtC40Y8t0YHRgtGA0LXQu9C+0Log0LLQvtC30LLRgNCw0YnQsNC10YIg0YTRg9C90LrRhtC40Y5cbjIuINCSINC30LDQvNGL0LrQsNC90LjQuCDRgdC+0YXRgNCw0L3QuNC8INGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUgaSDQsiDQvdC+0LLRg9GOINC/0LXRgNC10LzQtdC90L3Rg9GOLiDQktC90YPRgtGA0LXQvdC90Y/RjyDRhNGD0L3QutGG0LjRjyDQv9C+0LvRg9GH0LjRgiDQuiDQvdC10Lkg0LTQvtGB0YLRg9C/LlxuMy4g0KTRg9C90LrRhtC40Y4t0YHRgtGA0LXQu9C+0Log0L3QtdC+0LHRhdC+0LTQuNC80L4g0LfQsNC/0YPRgdGC0LjRgtGMICjRh9GC0L4g0LLQtdGA0L3QtdGCINGE0YPQvdC60YbQuNGOLCDQutC+0YLQvtGA0LDRjyDQv9C+0YLQvtC8INCx0YPQtNC10YIg0LfQsNC/0YPRidC10L3QvdCwINCyIGFybXlbMF0oKSlcbiovXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

/*Паттерн Модуль:

смысл: 
  - разделить внутренний и внешний интерфейс
  - запретить доступ извне к внутренним деталям реализации объекта: 
    переменным, вспомогательным функциям и т.п.

*/

// Вариант 1: с внутренним присвоением

(function (argument) {
  function moduleName() {}

  var privateValue = 'test';
  var privateMethod = function privateMethod(argument) {/*private*/};

  moduleName.publicMethod = function (argument) {/*public*/};

  window.moduleName = moduleName; //присвоение
})();

// Вариант 2: Function Expression через return

var lodash = (function () {
  //*

  var privateValue = 'someValue';
  var privateMethod = function privateMethod(argument) {/*private*/};

  return { //*
    publicValue: "test",
    publicMethod: function publicMethod(argument) {/*public*/}
  };
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0Lm1vZHVsZV9wYXR0ZXJuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxBQUFDLENBQUEsVUFBVSxRQUFRLEVBQUU7QUFDbkIsV0FBUyxVQUFVLEdBQUUsRUFBRTs7QUFFdkIsTUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFBO0FBQ3pCLE1BQUksYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBYSxRQUFRLEVBQUUsYUFBYSxDQUFBOztBQUVyRCxZQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsUUFBUSxFQUFFLFlBQVksQ0FBQTs7QUFFMUQsUUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVO0FBQUMsQ0FDaEMsQ0FBQSxFQUFFOzs7O0FBQUMsQUFPSixJQUFJLE1BQU0sR0FBRyxDQUFDLFlBQVk7OztBQUV4QixNQUFJLFlBQVksR0FBRyxXQUFXLENBQUM7QUFDL0IsTUFBSSxhQUFhLEdBQUcsU0FBaEIsYUFBYSxDQUFhLFFBQVEsRUFBRSxhQUFhLENBQUM7O0FBRXRELFNBQU07QUFDSixlQUFXLEVBQUUsTUFBTTtBQUNuQixnQkFBWSxFQUFFLHNCQUFVLFFBQVEsRUFBRSxZQUFZO0dBQy9DLENBQUE7Q0FDRixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJjbG9qdXJlcy8wNC5tb2R1bGVfcGF0dGVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8q0J/QsNGC0YLQtdGA0L0g0JzQvtC00YPQu9GMOlxuXG7RgdC80YvRgdC7OiBcbiAgLSDRgNCw0LfQtNC10LvQuNGC0Ywg0LLQvdGD0YLRgNC10L3QvdC40Lkg0Lgg0LLQvdC10YjQvdC40Lkg0LjQvdGC0LXRgNGE0LXQudGBXG4gIC0g0LfQsNC/0YDQtdGC0LjRgtGMINC00L7RgdGC0YPQvyDQuNC30LLQvdC1INC6INCy0L3Rg9GC0YDQtdC90L3QuNC8INC00LXRgtCw0LvRj9C8INGA0LXQsNC70LjQt9Cw0YbQuNC4INC+0LHRitC10LrRgtCwOiBcbiAgICDQv9C10YDQtdC80LXQvdC90YvQvCwg0LLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C8INGE0YPQvdC60YbQuNGP0Lwg0Lgg0YIu0L8uXG5cbiovXG5cblxuXG4vLyDQktCw0YDQuNCw0L3RgiAxOiDRgSDQstC90YPRgtGA0LXQvdC90LjQvCDQv9GA0LjRgdCy0L7QtdC90LjQtdC8XG5cbihmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgZnVuY3Rpb24gbW9kdWxlTmFtZSgpe31cblxuICB2YXIgcHJpdmF0ZVZhbHVlID0gJ3Rlc3QnXG4gIHZhciBwcml2YXRlTWV0aG9kID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7Lypwcml2YXRlKi99XG5cbiAgbW9kdWxlTmFtZS5wdWJsaWNNZXRob2QgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHsvKnB1YmxpYyovfVxuXG4gIHdpbmRvdy5tb2R1bGVOYW1lID0gbW9kdWxlTmFtZTsgLy/Qv9GA0LjRgdCy0L7QtdC90LjQtVxufSgpKVxuXG5cblxuLy8g0JLQsNGA0LjQsNC90YIgMjogRnVuY3Rpb24gRXhwcmVzc2lvbiDRh9C10YDQtdC3IHJldHVyblxuXG5cbnZhciBsb2Rhc2ggPSAoZnVuY3Rpb24gKCkgeyAvLypcbiAgXG4gIHZhciBwcml2YXRlVmFsdWUgPSAnc29tZVZhbHVlJztcbiAgdmFyIHByaXZhdGVNZXRob2QgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHsvKnByaXZhdGUqL307XG5cbiAgcmV0dXJueyAvLypcbiAgICBwdWJsaWNWYWx1ZTogXCJ0ZXN0XCIsXG4gICAgcHVibGljTWV0aG9kOiBmdW5jdGlvbiAoYXJndW1lbnQpIHsvKnB1YmxpYyovfVxuICB9XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";

// Урок 1
// https://learn.javascript.ru/object-methods

// Задача 1
var arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2]();

/*Решение:
дооступ к методу осуществляется через [], 
в котором контекст вызова this равен arr */

// Задача 2
var obj = {
  go: function go() {
    console.log(this);
  }
};

obj.go();

/*Решение:
*/

// Задача 3

var obj, method;
obj = {
  go: function go() {
    console.log(this);
  }
};

obj.go(); // (1) object
obj.go(); // (2) object
(method = obj.go)(); // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

//Задача 4

var name = "";
var user = {
  name: "Василий",
  export: undefined
};
console.log(user.export.name); //Василий
/*Решение: this без вызова функции - указывает на глобаальный объект
global.name = "" (объявленная выше переменная)
*/

//Задача 5:
var name = "";
var user = {
  name: "Test",
  export: function _export() {
    return this;
  }
};
console.log(user.export().name); //Test
/*Решение: метод инициализируется с помощью () и поэтому в
функцию передается this == user, so this.name == "Test"*/

// Задача 6: возврат объекта с this
var name = "";
var user = {
  name: "Василий",
  export: function _export() {
    return {
      value: this
    };
  }
};
console.log(user.export().value.name);
/*Решение: при вызове функции в this передается ссылка на объект
, поэтому user.export().value == user, отсюда */

//Задача 6: создать калькулятор
var calculator = {
  read: function read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function sum() {
    return this.a + this.b;
  },
  mul: function mul() {
    return this.a * this.b;
  }
};

calculator.read(12, 45);
console.log(calculator.sum());
console.log(calculator.mul());

//Задача 7: make a ladder
var ladder = {
  step: 0,
  up: function up() {
    // вверх по лестнице
    this.step++;
    return this;
  },
  down: function down() {
    // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function showStep() {
    // вывести текущую ступеньку
    alert(this.step);
    return this;
  }
};

//make methods chainable
ladder.up().up().down().up().down().showStep(); // 1

//Решение: в каждом методе вернуть this
//# sourceMappingURL=data:application/json;base64,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RSxjQUFXOztBQUNiLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFdBQU8sSUFBSSxDQUFDO0dBQ2I7QUFDRCxNQUFJLEVBQUUsZ0JBQVc7O0FBQ2YsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osV0FBTyxJQUFJLENBQUM7R0FDYjtBQUNELFVBQVEsRUFBRSxvQkFBVzs7QUFDbkIsU0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztBQUNuQixXQUFPLElBQUksQ0FBQztHQUNiO0NBQ0Y7OztBQUFDLEFBR0YsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTs7O0FBQUMiLCJmaWxlIjoib2JqZWN0cy8xLm9iamVjdF9tZXRob2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0KPRgNC+0LogMVxuLy8gaHR0cHM6Ly9sZWFybi5qYXZhc2NyaXB0LnJ1L29iamVjdC1tZXRob2RzXG5cblxuLy8g0JfQsNC00LDRh9CwIDFcbnZhciBhcnIgPSBbXCJhXCIsIFwiYlwiXTtcblxuYXJyLnB1c2goZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCB0aGlzICk7XG59KVxuXG5hcnJbMl0oKTsgXG5cbi8q0KDQtdGI0LXQvdC40LU6XG7QtNC+0L7RgdGC0YPQvyDQuiDQvNC10YLQvtC00YMg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGC0YHRjyDRh9C10YDQtdC3IFtdLCBcbtCyINC60L7RgtC+0YDQvtC8INC60L7QvdGC0LXQutGB0YIg0LLRi9C30L7QstCwIHRoaXMg0YDQsNCy0LXQvSBhcnIgKi9cblxuXG5cblxuLy8g0JfQsNC00LDRh9CwIDJcbnZhciBvYmogPSB7XG4gIGdvOiBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyh0aGlzKX1cbn07XG5cbihvYmouZ28pKClcblxuLyrQoNC10YjQtdC90LjQtTpcbiovXG5cblxuLy8g0JfQsNC00LDRh9CwIDNcblxudmFyIG9iaiwgbWV0aG9kO1xub2JqID0ge1xuICBnbzogZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKHRoaXMpOyB9XG59O1xuXG5vYmouZ28oKTsgICAgICAgICAgICAvLyAoMSkgb2JqZWN0XG4ob2JqLmdvKSgpOyAgICAgICAgICAvLyAoMikgb2JqZWN0XG4obWV0aG9kID0gb2JqLmdvKSgpOyAgICAgIC8vICgzKSB1bmRlZmluZWRcbihvYmouZ28gfHwgb2JqLnN0b3ApKCk7IC8vICg0KSB1bmRlZmluZWRcblxuXG5cbi8v0JfQsNC00LDRh9CwIDRcblxudmFyIG5hbWUgPSBcIlwiO1xudmFyIHVzZXIgPSB7XG4gIG5hbWU6IFwi0JLQsNGB0LjQu9C40LlcIixcbiAgZXhwb3J0OiB0aGlzXG59O1xuY29uc29sZS5sb2coIHVzZXIuZXhwb3J0Lm5hbWUgKTsgLy/QktCw0YHQuNC70LjQuVxuLyrQoNC10YjQtdC90LjQtTogdGhpcyDQsdC10Lcg0LLRi9C30L7QstCwINGE0YPQvdC60YbQuNC4IC0g0YPQutCw0LfRi9Cy0LDQtdGCINC90LAg0LPQu9C+0LHQsNCw0LvRjNC90YvQuSDQvtCx0YrQtdC60YJcbmdsb2JhbC5uYW1lID0gXCJcIiAo0L7QsdGK0Y/QstC70LXQvdC90LDRjyDQstGL0YjQtSDQv9C10YDQtdC80LXQvdC90LDRjylcbiovXG5cblxuXG4vL9CX0LDQtNCw0YfQsCA1OiBcbnZhciBuYW1lID0gXCJcIjtcbnZhciB1c2VyID0ge1xuICBuYW1lOiBcIlRlc3RcIixcbiAgZXhwb3J0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuY29uc29sZS5sb2coIHVzZXIuZXhwb3J0KCkubmFtZSApIC8vVGVzdFxuLyrQoNC10YjQtdC90LjQtTog0LzQtdGC0L7QtCDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGC0YHRjyDRgSDQv9C+0LzQvtGJ0YzRjiAoKSDQuCDQv9C+0Y3RgtC+0LzRgyDQslxu0YTRg9C90LrRhtC40Y4g0L/QtdGA0LXQtNCw0LXRgtGB0Y8gdGhpcyA9PSB1c2VyLCBzbyB0aGlzLm5hbWUgPT0gXCJUZXN0XCIqL1xuXG5cblxuLy8g0JfQsNC00LDRh9CwIDY6INCy0L7Qt9Cy0YDQsNGCINC+0LHRitC10LrRgtCwINGBIHRoaXNcbnZhciBuYW1lID0gXCJcIjtcbnZhciB1c2VyID0ge1xuICBuYW1lOiBcItCS0LDRgdC40LvQuNC5XCIsXG4gIGV4cG9ydDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzXG4gICAgfTtcbiAgfVxufTtcbmNvbnNvbGUubG9nKCB1c2VyLmV4cG9ydCgpLnZhbHVlLm5hbWUgKTsgXG4vKtCg0LXRiNC10L3QuNC1OiDQv9GA0Lgg0LLRi9C30L7QstC1INGE0YPQvdC60YbQuNC4INCyIHRoaXMg0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0YHRgdGL0LvQutCwINC90LAg0L7QsdGK0LXQutGCXG4sINC/0L7RjdGC0L7QvNGDIHVzZXIuZXhwb3J0KCkudmFsdWUgPT0gdXNlciwg0L7RgtGB0Y7QtNCwICovXG5cblxuLy/Ql9Cw0LTQsNGH0LAgNjog0YHQvtC30LTQsNGC0Ywg0LrQsNC70YzQutGD0LvRj9GC0L7RgFxudmFyIGNhbGN1bGF0b3IgPSB7XG4gIHJlYWQ6IGZ1bmN0aW9uKGEsYil7XG4gICAgdGhpcy5hID0gYTtcbiAgICB0aGlzLmIgPSBiO1xuICB9LFxuICBzdW06IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYSArIHRoaXMuYjtcbiAgfSxcbiAgbXVsOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmEgKiB0aGlzLmI7XG4gIH1cbn07XG5cbmNhbGN1bGF0b3IucmVhZCgxMiw0NSk7XG5jb25zb2xlLmxvZyggY2FsY3VsYXRvci5zdW0oKSApO1xuY29uc29sZS5sb2coIGNhbGN1bGF0b3IubXVsKCkgKTtcblxuXG5cblxuXG4vL9CX0LDQtNCw0YfQsCA3OiBtYWtlIGEgbGFkZGVyXG52YXIgbGFkZGVyID0ge1xuICBzdGVwOiAwLFxuICB1cDogZnVuY3Rpb24oKSB7IC8vINCy0LLQtdGA0YUg0L/QviDQu9C10YHRgtC90LjRhtC1XG4gICAgdGhpcy5zdGVwKys7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGRvd246IGZ1bmN0aW9uKCkgeyAvLyDQstC90LjQtyDQv9C+INC70LXRgdGC0L3QuNGG0LVcbiAgICB0aGlzLnN0ZXAtLTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc2hvd1N0ZXA6IGZ1bmN0aW9uKCkgeyAvLyDQstGL0LLQtdGB0YLQuCDRgtC10LrRg9GJ0YPRjiDRgdGC0YPQv9C10L3RjNC60YNcbiAgICBhbGVydCggdGhpcy5zdGVwICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbi8vbWFrZSBtZXRob2RzIGNoYWluYWJsZVxubGFkZGVyLnVwKCkudXAoKS5kb3duKCkudXAoKS5kb3duKCkuc2hvd1N0ZXAoKTsgLy8gMVxuXG5cbi8v0KDQtdGI0LXQvdC40LU6INCyINC60LDQttC00L7QvCDQvNC10YLQvtC00LUg0LLQtdGA0L3Rg9GC0YwgdGhpcyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

/*Задача 1: почему*/
a = ['x'] === 'x'; //true

/*Решение:
потому что оператор нестрогого сравнения производит преобразование типов,
массив преобразуется в строку с помощью toString(), результат 'x' равен 'x'. Отсюда true*/

/*Задача 2: что выведет alert?*/
var foo = {
  toString: function toString() {
    return 'foo';
  },
  valueOf: function valueOf() {
    return 2;
  }
};

alert(foo);
alert(foo + 1);
alert(foo + "3");

/*Решение:
1. выведется значение foo.toString() -> 'foo'
2. оператор + ВСЕГДА к преобразованию объекта к числовому типу
   с помощью .valueOf(). Отсюда foo.valueOf() => 2 + 1 => 3
3. оператор + преобразовывает в 2. Отсюда foo.toString() => 2 + '3' => '23'
*/

/*Задача 3: почему?*/
alert([] == []); // false
alert([] == ![]); // true

/*Решение:
1. объекты равны только когда это один и тот же объект. Два пустых массива - разные, поэтому неравны
2. Первым выполняется оператор ![] => false, получает [] == false 
   проверка между объектом и примитивом вызывает численное преобразование, численного нет , поэтому строковое, отсюда
   '' == false
   Сравнение различных типов вызывает численное преобразование слева и справа
   0 == 0
*/

/*Задача 4:*/
// new Date(0) - 0
// new Array(1)[0] + ""
// ({})[0]

// [1] + 1
// [1,2] + [3,4]
// [] + null + 1
// [[0]][0][0]
// ({} + {})

/*Решение:
1. 0 - оператор - выполняет valueOf() для объекта Date => 0 - 0 = 0
2. 'undefined' - new Array(1) создает массив с одним элементом undefined => new Array(1)[0] == undefined. 
       Оператор плюс выполняет строковое преобразование для undefined, тк числовое недоступно => "undefined" затем конкатенация
3. undefined
4.'11' - массив преобразовывается при помощи toString() потом конкатенация строк
5.'1,23,4' - то же что и в предыдущем пункте
6.'null1' - сначала массив к строке '', первый элемент строка - значит оператор + производит конкатенацию
7. 0 - запрашивается 0 элемент 0 элемента многомерного массива [[0]]
8. '[Object, object][Object, object] - строковое преобразование объекта и конкатенация строк*/

/*Задача 5:
Напишите функцию sum, которая будет работать так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15*/

// sum() must return itself (mine idea!)
/*TODO:
  init accum
  accumulate value inside clojure
  modify toString function, to return total sum
  (toString will be executed when next parent function call is impossible)
  */

/*Решение:*/
function sum(initVal) {
  var accumulator = initVal;
  var add = function add(x) {
    //add clojure
    x + accumulator;
    return add;
  };
  add.toString = function () {
    return accumulator;
  }; //be useful when execution stack is ended
  return add; // return clojure(without execution!)
}
console.log(sum(1)(2)(3));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjIub2JqZWN0X2NvbnZlcnNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRzs7Ozs7OztBQUFBLEFBU2pCLElBQUksR0FBRyxHQUFHO0FBQ1IsVUFBUSxFQUFFLG9CQUFXO0FBQ25CLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7QUFDRCxTQUFPLEVBQUUsbUJBQVc7QUFDbEIsV0FBTyxDQUFDLENBQUM7R0FDVjtDQUNGLENBQUM7O0FBRUYsS0FBSyxDQUFFLEdBQUcsQ0FBRSxDQUFDO0FBQ2IsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDLENBQUUsQ0FBQztBQUNqQixLQUFLLENBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBRTs7Ozs7Ozs7OztBQUFDLEFBWW5CLEtBQUssQ0FBRSxFQUFFLElBQUksRUFBRSxDQUFFO0FBQUMsQUFDbEIsS0FBSyxDQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsQUF5RG5CLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBQztBQUNuQixNQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDMUIsTUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUcsQ0FBQyxFQUFJOztBQUNiLEtBQUMsR0FBRyxXQUFXLENBQUE7QUFDZixXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUM7QUFDRixLQUFHLENBQUMsUUFBUSxHQUFHO1dBQU0sV0FBVztHQUFBO0FBQUEsQUFDaEMsU0FBTyxHQUFHO0FBQUMsQ0FDWjtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoib2JqZWN0cy8yLm9iamVjdF9jb252ZXJzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyrQl9Cw0LTQsNGH0LAgMTog0L/QvtGH0LXQvNGDKi9cbmEgPSBbJ3gnXSA9PT0gJ3gnICAvL3RydWVcblxuLyrQoNC10YjQtdC90LjQtTpcbtC/0L7RgtC+0LzRgyDRh9GC0L4g0L7Qv9C10YDQsNGC0L7RgCDQvdC10YHRgtGA0L7Qs9C+0LPQviDRgdGA0LDQstC90LXQvdC40Y8g0L/RgNC+0LjQt9Cy0L7QtNC40YIg0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjQtSDRgtC40L/QvtCyLFxu0LzQsNGB0YHQuNCyINC/0YDQtdC+0LHRgNCw0LfRg9C10YLRgdGPINCyINGB0YLRgNC+0LrRgyDRgSDQv9C+0LzQvtGJ0YzRjiB0b1N0cmluZygpLCDRgNC10LfRg9C70YzRgtCw0YIgJ3gnINGA0LDQstC10L0gJ3gnLiDQntGC0YHRjtC00LAgdHJ1ZSovXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAyOiDRh9GC0L4g0LLRi9Cy0LXQtNC10YIgYWxlcnQ/Ki9cbnZhciBmb28gPSB7XG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJ2Zvbyc7XG4gIH0sXG4gIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAyO1xuICB9XG59O1xuXG5hbGVydCggZm9vICk7XG5hbGVydCggZm9vICsgMSApO1xuYWxlcnQoIGZvbyArIFwiM1wiICk7XG5cbi8q0KDQtdGI0LXQvdC40LU6XG4xLiDQstGL0LLQtdC00LXRgtGB0Y8g0LfQvdCw0YfQtdC90LjQtSBmb28udG9TdHJpbmcoKSAtPiAnZm9vJ1xuMi4g0L7Qv9C10YDQsNGC0L7RgCArINCS0KHQldCT0JTQkCDQuiDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNGOINC+0LHRitC10LrRgtCwINC6INGH0LjRgdC70L7QstC+0LzRgyDRgtC40L/Rg1xuICAg0YEg0L/QvtC80L7RidGM0Y4gLnZhbHVlT2YoKS4g0J7RgtGB0Y7QtNCwIGZvby52YWx1ZU9mKCkgPT4gMiArIDEgPT4gM1xuMy4g0L7Qv9C10YDQsNGC0L7RgCArINC/0YDQtdC+0LHRgNCw0LfQvtCy0YvQstCw0LXRgiDQsiAyLiDQntGC0YHRjtC00LAgZm9vLnRvU3RyaW5nKCkgPT4gMiArICczJyA9PiAnMjMnXG4qL1xuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMzog0L/QvtGH0LXQvNGDPyovXG5hbGVydCggW10gPT0gW10gKTsgLy8gZmFsc2VcbmFsZXJ0KCBbXSA9PSAhW10gKTsgLy8gdHJ1ZVxuXG4vKtCg0LXRiNC10L3QuNC1OlxuMS4g0L7QsdGK0LXQutGC0Ysg0YDQsNCy0L3RiyDRgtC+0LvRjNC60L4g0LrQvtCz0LTQsCDRjdGC0L4g0L7QtNC40L0g0Lgg0YLQvtGCINC20LUg0L7QsdGK0LXQutGCLiDQlNCy0LAg0L/Rg9GB0YLRi9GFINC80LDRgdGB0LjQstCwIC0g0YDQsNC30L3Ri9C1LCDQv9C+0Y3RgtC+0LzRgyDQvdC10YDQsNCy0L3Ri1xuMi4g0J/QtdGA0LLRi9C8INCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0L7Qv9C10YDQsNGC0L7RgCAhW10gPT4gZmFsc2UsINC/0L7Qu9GD0YfQsNC10YIgW10gPT0gZmFsc2UgXG4gICDQv9GA0L7QstC10YDQutCwINC80LXQttC00YMg0L7QsdGK0LXQutGC0L7QvCDQuCDQv9GA0LjQvNC40YLQuNCy0L7QvCDQstGL0LfRi9Cy0LDQtdGCINGH0LjRgdC70LXQvdC90L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1LCDRh9C40YHQu9C10L3QvdC+0LPQviDQvdC10YIgLCDQv9C+0Y3RgtC+0LzRgyDRgdGC0YDQvtC60L7QstC+0LUsINC+0YLRgdGO0LTQsFxuICAgJycgPT0gZmFsc2VcbiAgINCh0YDQsNCy0L3QtdC90LjQtSDRgNCw0LfQu9C40YfQvdGL0YUg0YLQuNC/0L7QsiDQstGL0LfRi9Cy0LDQtdGCINGH0LjRgdC70LXQvdC90L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INGB0LvQtdCy0LAg0Lgg0YHQv9GA0LDQstCwXG4gICAwID09IDBcbiovXG5cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgNDoqL1xuLy8gbmV3IERhdGUoMCkgLSAwXG4vLyBuZXcgQXJyYXkoMSlbMF0gKyBcIlwiXG4vLyAoe30pWzBd4oCoXG4vLyBbMV0gKyAxXG4vLyBbMSwyXSArIFszLDRdXG4vLyBbXSArIG51bGwgKyAxXG4vLyBbWzBdXVswXVswXVxuLy8gKHt9ICsge30pXG5cbi8q0KDQtdGI0LXQvdC40LU6XG4xLiAwIC0g0L7Qv9C10YDQsNGC0L7RgCAtINCy0YvQv9C+0LvQvdGP0LXRgiB2YWx1ZU9mKCkg0LTQu9GPINC+0LHRitC10LrRgtCwIERhdGUgPT4gMCAtIDAgPSAwXG4yLiAndW5kZWZpbmVkJyAtIG5ldyBBcnJheSgxKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIg0YEg0L7QtNC90LjQvCDRjdC70LXQvNC10L3RgtC+0LwgdW5kZWZpbmVkID0+IG5ldyBBcnJheSgxKVswXSA9PSB1bmRlZmluZWQuIFxuICAgICAgINCe0L/QtdGA0LDRgtC+0YAg0L/Qu9GO0YEg0LLRi9C/0L7Qu9C90Y/QtdGCINGB0YLRgNC+0LrQvtCy0L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC00LvRjyB1bmRlZmluZWQsINGC0Log0YfQuNGB0LvQvtCy0L7QtSDQvdC10LTQvtGB0YLRg9C/0L3QviA9PiBcInVuZGVmaW5lZFwiINC30LDRgtC10Lwg0LrQvtC90LrQsNGC0LXQvdCw0YbQuNGPXG4zLiB1bmRlZmluZWRcbjQuJzExJyAtINC80LDRgdGB0LjQsiDQv9GA0LXQvtCx0YDQsNC30L7QstGL0LLQsNC10YLRgdGPINC/0YDQuCDQv9C+0LzQvtGJ0LggdG9TdHJpbmcoKSDQv9C+0YLQvtC8INC60L7QvdC60LDRgtC10L3QsNGG0LjRjyDRgdGC0YDQvtC6XG41LicxLDIzLDQnIC0g0YLQviDQttC1INGH0YLQviDQuCDQsiDQv9GA0LXQtNGL0LTRg9GJ0LXQvCDQv9GD0L3QutGC0LVcbjYuJ251bGwxJyAtINGB0L3QsNGH0LDQu9CwINC80LDRgdGB0LjQsiDQuiDRgdGC0YDQvtC60LUgJycsINC/0LXRgNCy0YvQuSDRjdC70LXQvNC10L3RgiDRgdGC0YDQvtC60LAgLSDQt9C90LDRh9C40YIg0L7Qv9C10YDQsNGC0L7RgCArINC/0YDQvtC40LfQstC+0LTQuNGCINC60L7QvdC60LDRgtC10L3QsNGG0LjRjlxuNy4gMCAtINC30LDQv9GA0LDRiNC40LLQsNC10YLRgdGPIDAg0Y3Qu9C10LzQtdC90YIgMCDRjdC70LXQvNC10L3RgtCwINC80L3QvtCz0L7QvNC10YDQvdC+0LPQviDQvNCw0YHRgdC40LLQsCBbWzBdXVxuOC4gJ1tPYmplY3QsIG9iamVjdF1bT2JqZWN0LCBvYmplY3RdIC0g0YHRgtGA0L7QutC+0LLQvtC1INC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0L7QsdGK0LXQutGC0LAg0Lgg0LrQvtC90LrQsNGC0LXQvdCw0YbQuNGPINGB0YLRgNC+0LoqL1xuXG5cblxuLyrQl9Cw0LTQsNGH0LAgNTpcbtCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4gc3VtLCDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINGA0LDQsdC+0YLQsNGC0Ywg0YLQsNC6OlxuXG5zdW0oMSkoMikgPT0gMzsgLy8gMSArIDJcbnN1bSgxKSgyKSgzKSA9PSA2OyAvLyAxICsgMiArIDNcbnN1bSg1KSgtMSkoMikgPT0gNlxuc3VtKDYpKC0xKSgtMikoLTMpID09IDBcbnN1bSgwKSgxKSgyKSgzKSg0KSg1KSA9PSAxNSovXG5cbi8vIHN1bSgpIG11c3QgcmV0dXJuIGl0c2VsZiAobWluZSBpZGVhISlcbi8qVE9ETzpcbiAgaW5pdCBhY2N1bVxuICBhY2N1bXVsYXRlIHZhbHVlIGluc2lkZSBjbG9qdXJlXG4gIG1vZGlmeSB0b1N0cmluZyBmdW5jdGlvbiwgdG8gcmV0dXJuIHRvdGFsIHN1bVxuICAodG9TdHJpbmcgd2lsbCBiZSBleGVjdXRlZCB3aGVuIG5leHQgcGFyZW50IGZ1bmN0aW9uIGNhbGwgaXMgaW1wb3NzaWJsZSlcbiAgKi9cblxuLyrQoNC10YjQtdC90LjQtToqL1xuZnVuY3Rpb24gc3VtKGluaXRWYWwpe1xuICBsZXQgYWNjdW11bGF0b3IgPSBpbml0VmFsO1xuICBsZXQgYWRkID0geCA9PiB7ICAvL2FkZCBjbG9qdXJlXG4gICAgeCArIGFjY3VtdWxhdG9yXG4gICAgcmV0dXJuIGFkZDtcbiAgfTtcbiAgYWRkLnRvU3RyaW5nID0gKCkgPT4gYWNjdW11bGF0b3IgLy9iZSB1c2VmdWwgd2hlbiBleGVjdXRpb24gc3RhY2sgaXMgZW5kZWRcbiAgcmV0dXJuIGFkZDsgLy8gcmV0dXJuIGNsb2p1cmUod2l0aG91dCBleGVjdXRpb24hKVxufVxuY29uc29sZS5sb2coc3VtKDEpKDIpKDMpKTtcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";

/*Задача 1*/
function A() {
  this.name = 'someString';
}
function B() {
  return a;
}

var a = new A();
var b = new B();

console.log(a == b); //true

/*Решение: нужно вернуть в конструкторе B, ссылку на объект a
Дополнение из ответа: они должны возвращать ссылку на один и тот же объект */

/*Задача 2: создать Calculator при помощи конструктора*/

function Calculator() {
  this.read = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
}

var calculator = new Calculator();
calculator.read();

console.log("Сумма=" + calculator.sum());
console.log("Произведение=" + calculator.mul());

/*Задача 3: создать Accumulator при помощи конструктора*/
var Accumulator = function Accumulator(initValue) {
  this.value = initValue || 0; //не должно идти после this.read потому что this.value внутри this.read == undefined
  this.read = function (val) {
    this.value += val || 0;
  };
};

var acm = new Accumulator(5);
console.log(acm.value); // 5
acm.read(5);
console.log(acm.value); // 10
acm.read(50);
console.log(acm.value); // 60

/*Задача 3: создать Calculator который создает расширяемые объекты-калькуляторы*/
function MetaCalculator() {
  this.calculate = function (operation) {
    var operations = operation.split(' ');
    var a = operations[0];
    var method = operations[1];
    var b = operations[2];

    if (this[method]) {
      return this[method].exec(a, b);
    } else {
      return 'Error: there is no such method' + method;
    }
  };
  this.addMethod = function (method, exec) {
    this[method] = {
      name: method,
      exec: exec
    };
  };
}

var powerCalc = new MetaCalculator();
powerCalc.addMethod("*", function (a, b) {
  return a * b;
});
powerCalc.addMethod("/", function (a, b) {
  return a / b;
});
powerCalc.addMethod("**", function (a, b) {
  return Math.pow(a, b);
});

console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("2 / 3"));
console.log(powerCalc.calculate("2 - 3"));
//# sourceMappingURL=data:application/json;base64,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QUFHLFVBQVMsTUFBTSxFQUFFLElBQUksRUFBQztBQUNyQyxRQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7QUFDYixVQUFJLEVBQUUsTUFBTTtBQUNaLFVBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQTtHQUNGLENBQUM7Q0FDSDs7QUFFRCxJQUFJLFNBQVMsR0FBRyxJQUFJLGNBQWMsRUFBQSxDQUFDO0FBQ25DLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFVBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0QyxTQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDZCxDQUFDLENBQUM7QUFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBQ0gsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3ZDLFNBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDdkIsQ0FBQyxDQUFDOztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im9iamVjdHMvMy5vYmplY3RfY29uc3RydWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKtCX0LDQtNCw0YfQsCAxKi9cbmZ1bmN0aW9uIEEoKSB7IFxuICB0aGlzLm5hbWUgPSAnc29tZVN0cmluZydcbn1cbmZ1bmN0aW9uIEIoKSB7IFxuICByZXR1cm4gYTtcbn1cblxudmFyIGEgPSBuZXcgQTtcbnZhciBiID0gbmV3IEI7XG5cbmNvbnNvbGUubG9nKCBhID09IGIgKTsgLy90cnVlXG5cbi8q0KDQtdGI0LXQvdC40LU6INC90YPQttC90L4g0LLQtdGA0L3Rg9GC0Ywg0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1IEIsINGB0YHRi9C70LrRgyDQvdCwINC+0LHRitC10LrRgiBhXG7QlNC+0L/QvtC70L3QtdC90LjQtSDQuNC3INC+0YLQstC10YLQsDog0L7QvdC4INC00L7Qu9C20L3RiyDQstC+0LfQstGA0LDRidCw0YLRjCDRgdGB0YvQu9C60YMg0L3QsCDQvtC00LjQvSDQuCDRgtC+0YIg0LbQtSDQvtCx0YrQtdC60YIgKi9cblxuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAyOiDRgdC+0LfQtNCw0YLRjCBDYWxjdWxhdG9yINC/0YDQuCDQv9C+0LzQvtGJ0Lgg0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwKi9cblxuZnVuY3Rpb24gQ2FsY3VsYXRvcigpIHtcbiAgdGhpcy5yZWFkID0gZnVuY3Rpb24obnVtMSwgbnVtMil7XG4gICAgdGhpcy5udW0xID0gbnVtMTtcbiAgICB0aGlzLm51bTIgPSBudW0yO1xuICB9XG4gIHRoaXMuc3VtID0gZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5udW0xICsgdGhpcy5udW0yfVxuICB0aGlzLm11bCA9IGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubnVtMSAqIHRoaXMubnVtMn1cbn1cblxuXG5cbnZhciBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcbmNhbGN1bGF0b3IucmVhZCgpO1xuXG5jb25zb2xlLmxvZyggXCLQodGD0LzQvNCwPVwiICsgY2FsY3VsYXRvci5zdW0oKSApO1xuY29uc29sZS5sb2coIFwi0J/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1PVwiICsgY2FsY3VsYXRvci5tdWwoKSApO1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAzOiDRgdC+0LfQtNCw0YLRjCBBY2N1bXVsYXRvciDQv9GA0Lgg0L/QvtC80L7RidC4INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsCovXG52YXIgQWNjdW11bGF0b3IgPSBmdW5jdGlvbihpbml0VmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IGluaXRWYWx1ZSB8fCAwOyAvL9C90LUg0LTQvtC70LbQvdC+INC40LTRgtC4INC/0L7RgdC70LUgdGhpcy5yZWFkINC/0L7RgtC+0LzRgyDRh9GC0L4gdGhpcy52YWx1ZSDQstC90YPRgtGA0LggdGhpcy5yZWFkID09IHVuZGVmaW5lZFxuICB0aGlzLnJlYWQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnZhbHVlICs9IHZhbCB8fCAwO1xuICB9OyAgXG59O1xuXG5cblxudmFyIGFjbSA9IG5ldyBBY2N1bXVsYXRvcig1KTtcbmNvbnNvbGUubG9nKGFjbS52YWx1ZSk7ICAvLyA1XG5hY20ucmVhZCg1KTsgXG5jb25zb2xlLmxvZyhhY20udmFsdWUpOyAgLy8gMTBcbmFjbS5yZWFkKDUwKTtcbmNvbnNvbGUubG9nKGFjbS52YWx1ZSk7ICAvLyA2MFxuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAzOiDRgdC+0LfQtNCw0YLRjCBDYWxjdWxhdG9yINC60L7RgtC+0YDRi9C5INGB0L7Qt9C00LDQtdGCINGA0LDRgdGI0LjRgNGP0LXQvNGL0LUg0L7QsdGK0LXQutGC0Yst0LrQsNC70YzQutGD0LvRj9GC0L7RgNGLKi9cbmZ1bmN0aW9uIE1ldGFDYWxjdWxhdG9yKCl7XG4gIHRoaXMuY2FsY3VsYXRlID0gZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IG9wZXJhdGlvbi5zcGxpdCgnICcpO1xuICAgIHZhciBhICAgICAgPSBvcGVyYXRpb25zWzBdO1xuICAgIHZhciBtZXRob2QgPSBvcGVyYXRpb25zWzFdO1xuICAgIHZhciBiICAgICAgPSBvcGVyYXRpb25zWzJdO1xuXG4gICAgaWYgKHRoaXNbbWV0aG9kXSkge1xuICAgICAgcmV0dXJuIHRoaXNbbWV0aG9kXS5leGVjKGEsIGIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ0Vycm9yOiB0aGVyZSBpcyBubyBzdWNoIG1ldGhvZCcgKyBtZXRob2RcbiAgICB9XG4gIH07XG4gIHRoaXMuYWRkTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kLCBleGVjKXtcbiAgICB0aGlzW21ldGhvZF0gPSB7XG4gICAgICBuYW1lOiBtZXRob2QsXG4gICAgICBleGVjOiBleGVjXG4gICAgfVxuICB9O1xufVxuXG52YXIgcG93ZXJDYWxjID0gbmV3IE1ldGFDYWxjdWxhdG9yO1xucG93ZXJDYWxjLmFkZE1ldGhvZChcIipcIiwgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSAqIGI7XG59KTtcbnBvd2VyQ2FsYy5hZGRNZXRob2QoXCIvXCIsIGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgLyBiO1xufSk7XG5wb3dlckNhbGMuYWRkTWV0aG9kKFwiKipcIiwgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gTWF0aC5wb3coYSwgYik7XG59KTtcblxuY29uc29sZS5sb2cocG93ZXJDYWxjLmNhbGN1bGF0ZShcIjIgKiogM1wiKSk7XG5jb25zb2xlLmxvZyhwb3dlckNhbGMuY2FsY3VsYXRlKFwiMiAqIDNcIikpO1xuY29uc29sZS5sb2cocG93ZXJDYWxjLmNhbGN1bGF0ZShcIjIgLyAzXCIpKTtcbmNvbnNvbGUubG9nKHBvd2VyQ2FsYy5jYWxjdWxhdGUoXCIyIC0gM1wiKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var user = {};

//1.Простое присваивание
user.name = "Tom";

//2. Присваивание через дескриптор
Object.defineProperty(user, name, {
  value: "Tom",
  writable: false, //disable editing property
  configurable: false, //disable deliting property
  enumerable: true
});

user.name = "Jerry"; // 'strict mode' ? generates Error : silent passing

/*
У встроенного toString() enumerable false
у кастомного == true

если нужно изменить - тогда задавать через дескриптор
*/
user.toString = function () {
  return this.name;
};

Object.defineProperty(user, toString, { enumerable: false });

/*Cвойство-функция
с помощью get можно задать свойство, которое будет являть функцией
*/

user = {
  firstName: "John",
  surname: "Rambo"
};

Object.defineProperty(user, fullName, {

  get: function get() {
    return this.firstName + " " + this.surname;
  },

  set: function set(val) {
    var _val$split = val.split(' ');
    //set the first and last name, so the get() function can work correctly

    var _val$split2 = _slicedToArray(_val$split, 2);

    this.firstName = _val$split2[0];
    this.lastName = _val$split2[1];
  }
});

console.log(user.fullName); //get
user.fullName = "Sylvester Stallone"; //set

/* Геттеры/сеттеры в литералах объекта
*/

user = {
  firstName: "T1000",
  lastName: "Terminator"

  // //define a getter
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`
  // },

  // //define a setter
  // set fullName(name) {
  //   [this.firstName, this.lastName] = name.split(' ')
  // }
};

/* Зачем??
простой рефакторинг
увеличение гибкости
*/

function User(name, age) {
  var _ref = [name, age];
  this.name = _ref[0];
  this.age = _ref[1];
}

var user1 = new User("John", 25);

// but if you want to refactor age to birthdate
//

function User(name, birthdate) {

  //safe getting age for old code usages!
  // get age() {
  //   return new Date.now().getFullYear() - this.birthdate.getFullYear()
  // }
  var _ref2 = [name, birthdate];
  this.name = _ref2[0];
  this.birthdate = _ref2[1];
}

var user2 = new User("Jane", new Date(1984, 6, 4));
console.log(user2.age);

/* Другие методы работы со свойствами
*/
user = {};

// объявление нескольких свойств сразу

Object.defineDescriptors(user, {
  firstName: {
    value: "Captain"
  },
  lastName: {
    value: "America"
  },
  fullName: {
    get function() {
      return this.firstName + " " + this.lastName;
    }
  }
});

// Other methods
Object.keys(o); // return only enumerable properties

Object.getOwnPropertyDescriptor(o); //return descriptor object

Object.getOwnPropertyNames(o); //return all properties

//Rare used methods
Object.preventExtensions(o); //disable add props to object

Object.seal(o); //disable add/delete props; make all props configurable: false

Object.freeze(o); //disable add/edit/delete props; configurable:false; writable: false

//checking
Object.isExtensible(o);
Object.isSealed(o);
Object.isFrozen(o);

// Задача:
//Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
//Имя и фамилия всегда разделяются пробелом.
//Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

function User(fullName) {

  return {
    fullName: fullName,

    //firstName
    get firstName() {
      return fullName.split(' ')[0];
    },

    set firstName(newName) {
      this.fullName = newName + ' ' + this.lastName;
    },

    //lastName
    get lastName() {
      return fullName.split(' ')[1];
    },

    set lastName(newName) {
      this.fullName = this.firstName + ' ' + newName;
    }
  };
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
console.log(vasya.fullName); // Василий Сидоров
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjQuZGVzY3JpcHRvcnNfZ2V0dGVyc19zZXR0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztBQUdiLElBQUksSUFBSSxHQUFHLEVBQUU7OztBQUFDLEFBR2QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLOzs7QUFBQyxBQUdsQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEMsT0FBSyxFQUFFLEtBQUs7QUFDWixVQUFRLEVBQUUsS0FBSztBQUNmLGNBQVksRUFBRSxLQUFLO0FBQ25CLFlBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQUMsQ0FBQTs7QUFFRixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU87Ozs7Ozs7O0FBQUEsQUFTbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFVO0FBQUUsU0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0NBQUUsQ0FBQTs7QUFFOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDOzs7Ozs7QUFBQSxBQU81RCxJQUFJLEdBQUc7QUFDTCxXQUFTLEVBQUUsTUFBTTtBQUNqQixTQUFPLEVBQUUsT0FBTztDQUNqQixDQUFBOztBQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTs7QUFFcEMsS0FBRyxFQUFFLGVBQVU7QUFDYixXQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRztHQUM1Qzs7QUFFRCxLQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUM7cUJBRWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7OztBQUEvQyxRQUFJLENBQUMsU0FBUztBQUFFLFFBQUksQ0FBQyxRQUFRO0dBQy9CO0NBQ0YsQ0FBQyxDQUFBOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUFBLEFBQzFCLElB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Qy9CLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBRTs7O0FBQUMsQUFHOUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsUUFBUSxDQUFFO0FBQUMiLCJmaWxlIjoib2JqZWN0cy80LmRlc2NyaXB0b3JzX2dldHRlcnNfc2V0dGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5sZXQgdXNlciA9IHt9O1xuXG4vLzEu0J/RgNC+0YHRgtC+0LUg0L/RgNC40YHQstCw0LjQstCw0L3QuNC1XG51c2VyLm5hbWUgPSBcIlRvbVwiO1xuXG4gLy8yLiDQn9GA0LjRgdCy0LDQuNCy0LDQvdC40LUg0YfQtdGA0LXQtyDQtNC10YHQutGA0LjQv9GC0L7RgFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHVzZXIsIG5hbWUsIHtcbiAgdmFsdWU6IFwiVG9tXCIsXG4gIHdyaXRhYmxlOiBmYWxzZSwgLy9kaXNhYmxlIGVkaXRpbmcgcHJvcGVydHlcbiAgY29uZmlndXJhYmxlOiBmYWxzZSwgLy9kaXNhYmxlIGRlbGl0aW5nIHByb3BlcnR5XG4gIGVudW1lcmFibGU6IHRydWVcbn0pXG5cbnVzZXIubmFtZSA9IFwiSmVycnlcIiAvLyAnc3RyaWN0IG1vZGUnID8gZ2VuZXJhdGVzIEVycm9yIDogc2lsZW50IHBhc3NpbmcgXG5cblxuLypcbtCjINCy0YHRgtGA0L7QtdC90L3QvtCz0L4gdG9TdHJpbmcoKSBlbnVtZXJhYmxlIGZhbHNlXG7RgyDQutCw0YHRgtC+0LzQvdC+0LPQviA9PSB0cnVlXG5cbtC10YHQu9C4INC90YPQttC90L4g0LjQt9C80LXQvdC40YLRjCAtINGC0L7Qs9C00LAg0LfQsNC00LDQstCw0YLRjCDRh9C10YDQtdC3INC00LXRgdC60YDQuNC/0YLQvtGAXG4qL1xudXNlci50b1N0cmluZyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLm5hbWUgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodXNlciwgdG9TdHJpbmcsIHsgZW51bWVyYWJsZTogZmFsc2UgfSlcblxuXG4vKkPQstC+0LnRgdGC0LLQvi3RhNGD0L3QutGG0LjRj1xu0YEg0L/QvtC80L7RidGM0Y4gZ2V0INC80L7QttC90L4g0LfQsNC00LDRgtGMINGB0LLQvtC50YHRgtCy0L4sINC60L7RgtC+0YDQvtC1INCx0YPQtNC10YIg0Y/QstC70Y/RgtGMINGE0YPQvdC60YbQuNC10LlcbiovXG5cbnVzZXIgPSB7XG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gIHN1cm5hbWU6IFwiUmFtYm9cIlxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodXNlciwgZnVsbE5hbWUsIHtcbiAgXG4gIGdldDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5zdXJuYW1lfWA7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbih2YWwpe1xuICAgIC8vc2V0IHRoZSBmaXJzdCBhbmQgbGFzdCBuYW1lLCBzbyB0aGUgZ2V0KCkgZnVuY3Rpb24gY2FuIHdvcmsgY29ycmVjdGx5XG4gICAgW3RoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lXSA9IHZhbC5zcGxpdCgnICcpO1xuICB9XG59KVxuXG5jb25zb2xlLmxvZyh1c2VyLmZ1bGxOYW1lKSAvL2dldFxudXNlci5mdWxsTmFtZSA9IFwiU3lsdmVzdGVyIFN0YWxsb25lXCIgLy9zZXRcblxuXG5cblxuLyog0JPQtdGC0YLQtdGA0Ysv0YHQtdGC0YLQtdGA0Ysg0LIg0LvQuNGC0LXRgNCw0LvQsNGFINC+0LHRitC10LrRgtCwXG4qL1xuXG51c2VyID0ge1xuICBmaXJzdE5hbWU6IFwiVDEwMDBcIixcbiAgbGFzdE5hbWU6IFwiVGVybWluYXRvclwiXG5cbiAgLy8gLy9kZWZpbmUgYSBnZXR0ZXJcbiAgLy8gZ2V0IGZ1bGxOYW1lKCkge1xuICAvLyAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWBcbiAgLy8gfSxcblxuICAvLyAvL2RlZmluZSBhIHNldHRlclxuICAvLyBzZXQgZnVsbE5hbWUobmFtZSkge1xuICAvLyAgIFt0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZV0gPSBuYW1lLnNwbGl0KCcgJylcbiAgLy8gfVxufVxuXG5cblxuXG5cbi8qINCX0LDRh9C10Lw/P1xu0L/RgNC+0YHRgtC+0Lkg0YDQtdGE0LDQutGC0L7RgNC40L3Qs1xu0YPQstC10LvQuNGH0LXQvdC40LUg0LPQuNCx0LrQvtGB0YLQuFxuKi9cblxuZnVuY3Rpb24gVXNlcihuYW1lLCBhZ2UpIHtcbiAgW3RoaXMubmFtZSwgdGhpcy5hZ2VdID0gW25hbWUsIGFnZV07XG59XG5cbmxldCB1c2VyMSA9IG5ldyBVc2VyKFwiSm9oblwiLCAyNSlcblxuXG4vLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmYWN0b3IgYWdlIHRvIGJpcnRoZGF0ZVxuLy8gXG5cbmZ1bmN0aW9uIFVzZXIobmFtZSwgYmlydGhkYXRlKSB7XG4gIFt0aGlzLm5hbWUsIHRoaXMuYmlydGhkYXRlXSA9IFtuYW1lLCBiaXJ0aGRhdGVdO1xuXG4gIC8vc2FmZSBnZXR0aW5nIGFnZSBmb3Igb2xkIGNvZGUgdXNhZ2VzIVxuICAvLyBnZXQgYWdlKCkge1xuICAvLyAgIHJldHVybiBuZXcgRGF0ZS5ub3coKS5nZXRGdWxsWWVhcigpIC0gdGhpcy5iaXJ0aGRhdGUuZ2V0RnVsbFllYXIoKVxuICAvLyB9XG59XG5cbmxldCB1c2VyMiA9IG5ldyBVc2VyKFwiSmFuZVwiLCBuZXcgRGF0ZSgxOTg0LCA2LCA0KSlcbmNvbnNvbGUubG9nKHVzZXIyLmFnZSlcblxuXG5cbi8qINCU0YDRg9Cz0LjQtSDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0L4g0YHQstC+0LnRgdGC0LLQsNC80LhcbiovXG51c2VyID0ge307XG5cblxuLy8g0L7QsdGK0Y/QstC70LXQvdC40LUg0L3QtdGB0LrQvtC70YzQutC40YUg0YHQstC+0LnRgdGC0LIg0YHRgNCw0LfRg1xuXG5PYmplY3QuZGVmaW5lRGVzY3JpcHRvcnModXNlciwge1xuICBmaXJzdE5hbWU6IHtcbiAgICB2YWx1ZTogXCJDYXB0YWluXCJcbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICB2YWx1ZTogXCJBbWVyaWNhXCJcbiAgfSxcbiAgZnVsbE5hbWU6IHtcbiAgICBnZXQgZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWBcbiAgICB9XG4gIH1cbn0pXG5cblxuXG4vLyBPdGhlciBtZXRob2RzXG5PYmplY3Qua2V5cyhvKTsgLy8gcmV0dXJuIG9ubHkgZW51bWVyYWJsZSBwcm9wZXJ0aWVzXG5cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobyk7IC8vcmV0dXJuIGRlc2NyaXB0b3Igb2JqZWN0XG5cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pOyAvL3JldHVybiBhbGwgcHJvcGVydGllc1xuXG5cbi8vUmFyZSB1c2VkIG1ldGhvZHNcbk9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhvKTsgLy9kaXNhYmxlIGFkZCBwcm9wcyB0byBvYmplY3RcblxuT2JqZWN0LnNlYWwobyk7ICAvL2Rpc2FibGUgYWRkL2RlbGV0ZSBwcm9wczsgbWFrZSBhbGwgcHJvcHMgY29uZmlndXJhYmxlOiBmYWxzZVxuXG5PYmplY3QuZnJlZXplKG8pOyAvL2Rpc2FibGUgYWRkL2VkaXQvZGVsZXRlIHByb3BzOyBjb25maWd1cmFibGU6ZmFsc2U7IHdyaXRhYmxlOiBmYWxzZVxuXG4vL2NoZWNraW5nXG5PYmplY3QuaXNFeHRlbnNpYmxlKG8pO1xuT2JqZWN0LmlzU2VhbGVkKG8pO1xuT2JqZWN0LmlzRnJvemVuKG8pO1xuXG5cblxuLy8g0JfQsNC00LDRh9CwOlxuLy/QktCw0Lwg0L/QvtC/0LDQuyDQsiDRgNGD0LrQuCDQutC+0LQg0L7QsdGK0LXQutGC0LAgVXNlciwg0LrQvtGC0L7RgNGL0Lkg0YXRgNCw0L3QuNGCINC40LzRjyDQuCDRhNCw0LzQuNC70LjRjiDQsiDRgdCy0L7QudGB0YLQstC1IHRoaXMuZnVsbE5hbWU6XG4vL9CY0LzRjyDQuCDRhNCw0LzQuNC70LjRjyDQstGB0LXQs9C00LAg0YDQsNC30LTQtdC70Y/RjtGC0YHRjyDQv9GA0L7QsdC10LvQvtC8LlxuLy/QodC00LXQu9Cw0LnRgtC1LCDRh9GC0L7QsdGLINCx0YvQu9C4INC00L7RgdGC0YPQv9C90Ysg0YHQstC+0LnRgdGC0LLQsCBmaXJzdE5hbWUg0LggbGFzdE5hbWUsINC/0YDQuNGH0ZHQvCDQvdC1INGC0L7Qu9GM0LrQviDQvdCwINGH0YLQtdC90LjQtSwg0L3QviDQuCDQvdCwINC30LDQv9C40YHRjCwg0LLQvtGCINGC0LDQujpcblxuZnVuY3Rpb24gVXNlcihmdWxsTmFtZSkge1xuICBcbiAgcmV0dXJuIHtcbiAgICBmdWxsTmFtZTogZnVsbE5hbWUsXG5cbiAgICAvL2ZpcnN0TmFtZVxuICAgIGdldCBmaXJzdE5hbWUoKXtcbiAgICAgIHJldHVybiBmdWxsTmFtZS5zcGxpdCgnICcpWzBdO1xuICAgIH0sXG5cbiAgICBzZXQgZmlyc3ROYW1lKG5ld05hbWUpe1xuICAgICAgdGhpcy5mdWxsTmFtZSA9IG5ld05hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lO1xuICAgIH0sXG5cbiAgICAvL2xhc3ROYW1lXG4gICAgZ2V0IGxhc3ROYW1lKCl7XG4gICAgICByZXR1cm4gZnVsbE5hbWUuc3BsaXQoJyAnKVsxXTtcbiAgICB9LFxuXG4gICAgc2V0IGxhc3ROYW1lKG5ld05hbWUpe1xuICAgICAgdGhpcy5mdWxsTmFtZSA9IHRoaXMuZmlyc3ROYW1lICsgJyAnICsgbmV3TmFtZTtcbiAgICB9ICBcbiAgfTtcbn1cblxuXG52YXIgdmFzeWEgPSBuZXcgVXNlcihcItCS0LDRgdC40LvQuNC5INCf0L7Qv9C60LjQvVwiKTtcblxuLy8g0YfRgtC10L3QuNC1IGZpcnN0TmFtZS9sYXN0TmFtZVxuY29uc29sZS5sb2coIHZhc3lhLmZpcnN0TmFtZSApOyAvLyDQktCw0YHQuNC70LjQuVxuY29uc29sZS5sb2coIHZhc3lhLmxhc3ROYW1lICk7IC8vINCf0L7Qv9C60LjQvVxuXG4vLyDQt9Cw0L/QuNGB0Ywg0LIgbGFzdE5hbWVcbnZhc3lhLmxhc3ROYW1lID0gJ9Ch0LjQtNC+0YDQvtCyJztcbmNvbnNvbGUubG9nKCB2YXN5YS5mdWxsTmFtZSApOyAvLyDQktCw0YHQuNC70LjQuSDQodC40LTQvtGA0L7QslxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

/*Статический метод: 
  не привязывается к конкретному экземпляру класса
  записывается в Конструктор

  существует у всех экземпляров класса!
  работает со всеми экземплярами класса

  Можно использовать для функций которые не требуют наличия объекта  



  Удобно применять для: 
    - общих действий с объектами данного типа (подсчеты)
    - методы не привязанные к конкретному экземпляру
    - вспомогательные методы
    - фабричные методы

  */

function Article() {
  Article.count++;
}
Article.count = 0; //static property
Article.DEFAULT_FORMAT = 'html'; //static constant value

Article.showCount = function () {
  return this.count;
};

// define compare function for Journal date

function Journal(date) {
  this.date = date;
}

Journal.compareByDate = function (one, another) {
  return one.date === another.date;
};

j1 = new Journal(new Date(1999, 1, 1));
j2 = new Journal(new Date(1999, 1, 1));

Journal.compare(j1, j2);

Journal.formatDate = function (date) {
  //month + 1 because journal is for the next month)
  return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
};

//no objects creation, simply format current data
console.log(Journal.formatDate(new Date()));

/*Фабричные статический метод:
  
  служит для создания новых объектов (фабрика)
  удобная альтернатива полиморфному конструктору
  (возврат разных объектов в зависимости от типа входных данных)
*/

/*полиморфный конструктор. Плюсы:
использовать где нужна полиморфность 
(тип входящих данных заранее неизвестен)
*/
function User(data) {
  if (data) {
    this.name = data.name;
    this.age = data.age;
  } else {
    this.name = "Anonymous";
  }

  this.sayHi = function () {
    console.log(this.name);
  };
}
var knownUser = new User({
  name: "Tom",
  age: "16"
});
knownUser.sayHi(); //Tom

var guest = new User();
guest.sayHi(); //Anonymous

/*фабричный метод. Плюсы:
лучше читаемость (вместо одной сложной ф-ции - несколько простых)
лучше контроль ошибок
лучше расширяемость (проще добавить другой тип данных) ? 
*/

function FabricUser(data) {
  this.sayHi = function () {
    console.log(this.name);
  };
}

FabricUser.createKnownUser = function (data) {
  var user = new FabricUser(); // !!! not call constructor

  var _data = _slicedToArray(data, 2);

  user.name = _data[0];
  user.age = _data[1];

  return user;
};

FabricUser.createAnonymousUser = function () {
  var user = new FabricUser(); //create instance of Class to get all attributes
  user.name = "Anonymous";
  return user;
};

var knownUser = new FabricUser.createKnownUser({
  name: "Tom",
  age: "16"
});
knownUser.sayHi(); //Tom

var guest = new FabricUser.createAnonymousUser()();
guest.sayHi(); //Anonymous

/*Задача 1

Добавить в конструктор Article:

Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.

Пусть вызов Article.showStats() выводит то и другое.
*/

function Article() {
  this.created = new Date();
  Article.count++; //count each article and store in static prop
  Article.allDates.push(this.created);
}

// Init static help properties
Article.count = 0;
Article.allDates = [];

//init static methods
Article.countTotal = function () {
  return this.count; //this === Constructor
};

Article.getLastDate = function () {
  return this.allDates[this.allDates.length - 1];
};

Article.showStats = function () {
  return 'Всего: ' + this.countTotal() + ', Последняя: ' + this.getLastDate();
};

new Article();
new Article();
console.log(Article.showStats()); // Всего: 2, Последняя: (дата)

new Article();
console.log(Article.showStats()); // Всего: 3, Последняя: (дата)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUuc3RhdGljX2FuZF9mYWJyaWNfbWV0aG9kcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTLE9BQU8sR0FBRztBQUNqQixTQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Q0FDakI7QUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUM7QUFBQSxBQUNqQixPQUFPLENBQUMsY0FBYyxHQUFHLE1BQU07O0FBQUEsQUFHL0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxZQUFVO0FBQzVCLFNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztDQUNuQjs7OztBQUFBLEFBS0QsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3JCLE1BQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0NBQ2pCOztBQUdELE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBUyxHQUFHLEVBQUUsT0FBTyxFQUFDO0FBQzVDLFNBQU8sR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFBO0NBQ2pDLENBQUE7O0FBRUQsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVyQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFHeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFTLElBQUksRUFBQzs7QUFFakMsU0FBVSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQSxTQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBRTtDQUN0RTs7O0FBQUEsQUFHRCxPQUFPLENBQUMsR0FBRyxDQUFF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QU8sRUFBRSxDQUFDO0FBQ2QsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDOztBQUFDLEFBRWpDLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUFDIiwiZmlsZSI6Im9iamVjdHMvNS5zdGF0aWNfYW5kX2ZhYnJpY19tZXRob2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyrQodGC0LDRgtC40YfQtdGB0LrQuNC5INC80LXRgtC+0LQ6IFxuICDQvdC1INC/0YDQuNCy0Y/Qt9GL0LLQsNC10YLRgdGPINC6INC60L7QvdC60YDQtdGC0L3QvtC80YMg0Y3QutC30LXQvNC/0LvRj9GA0YMg0LrQu9Cw0YHRgdCwXG4gINC30LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDQsiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAXG5cbiAg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0YMg0LLRgdC10YUg0Y3QutC30LXQvNC/0LvRj9GA0L7QsiDQutC70LDRgdGB0LAhXG4gINGA0LDQsdC+0YLQsNC10YIg0YHQviDQstGB0LXQvNC4INGN0LrQt9C10LzQv9C70Y/RgNCw0LzQuCDQutC70LDRgdGB0LBcblxuICDQnNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0YTRg9C90LrRhtC40Lkg0LrQvtGC0L7RgNGL0LUg0L3QtSDRgtGA0LXQsdGD0Y7RgiDQvdCw0LvQuNGH0LjRjyDQvtCx0YrQtdC60YLQsCAgXG5cblxuXG4gINCj0LTQvtCx0L3QviDQv9GA0LjQvNC10L3Rj9GC0Ywg0LTQu9GPOiBcbiAgICAtINC+0LHRidC40YUg0LTQtdC50YHRgtCy0LjQuSDRgSDQvtCx0YrQtdC60YLQsNC80Lgg0LTQsNC90L3QvtCz0L4g0YLQuNC/0LAgKNC/0L7QtNGB0YfQtdGC0YspXG4gICAgLSDQvNC10YLQvtC00Ysg0L3QtSDQv9GA0LjQstGP0LfQsNC90L3Ri9C1INC6INC60L7QvdC60YDQtdGC0L3QvtC80YMg0Y3QutC30LXQvNC/0LvRj9GA0YNcbiAgICAtINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDQvNC10YLQvtC00YtcbiAgICAtINGE0LDQsdGA0LjRh9C90YvQtSDQvNC10YLQvtC00YtcblxuICAqL1xuXG5cbmZ1bmN0aW9uIEFydGljbGUoKSB7XG4gIEFydGljbGUuY291bnQrKztcbn1cbkFydGljbGUuY291bnQgPSAwIC8vc3RhdGljIHByb3BlcnR5XG5BcnRpY2xlLkRFRkFVTFRfRk9STUFUID0gJ2h0bWwnIC8vc3RhdGljIGNvbnN0YW50IHZhbHVlXG5cblxuQXJ0aWNsZS5zaG93Q291bnQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5jb3VudDtcbn1cblxuXG4vLyBkZWZpbmUgY29tcGFyZSBmdW5jdGlvbiBmb3IgSm91cm5hbCBkYXRlXG5cbmZ1bmN0aW9uIEpvdXJuYWwoZGF0ZSkge1xuICB0aGlzLmRhdGUgPSBkYXRlXG59XG5cblxuSm91cm5hbC5jb21wYXJlQnlEYXRlID0gZnVuY3Rpb24ob25lLCBhbm90aGVyKXtcbiAgcmV0dXJuIG9uZS5kYXRlID09PSBhbm90aGVyLmRhdGVcbn1cblxuajEgPSBuZXcgSm91cm5hbChuZXcgRGF0ZSgxOTk5LDEsMSkpO1xuajIgPSBuZXcgSm91cm5hbChuZXcgRGF0ZSgxOTk5LDEsMSkpO1xuXG5Kb3VybmFsLmNvbXBhcmUoajEsIGoyKTtcblxuXG5Kb3VybmFsLmZvcm1hdERhdGUgPSBmdW5jdGlvbihkYXRlKXsgXG4gIC8vbW9udGggKyAxIGJlY2F1c2Ugam91cm5hbCBpcyBmb3IgdGhlIG5leHQgbW9udGgpXG4gIHJldHVybiBgJHtkYXRlLmdldERhdGUoKX0uJHtkYXRlLmdldE1vbnRoKCkrMX0uJHtkYXRlLmdldEZ1bGxZZWFyKCl9YFxufVxuXG4vL25vIG9iamVjdHMgY3JlYXRpb24sIHNpbXBseSBmb3JtYXQgY3VycmVudCBkYXRhIFxuY29uc29sZS5sb2coIEpvdXJuYWwuZm9ybWF0RGF0ZShuZXcgRGF0ZSkgKTtcblxuXG5cblxuXG5cbi8q0KTQsNCx0YDQuNGH0L3Ri9C1INGB0YLQsNGC0LjRh9C10YHQutC40Lkg0LzQtdGC0L7QtDpcbiAgXG4gINGB0LvRg9C20LjRgiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQvdC+0LLRi9GFINC+0LHRitC10LrRgtC+0LIgKNGE0LDQsdGA0LjQutCwKVxuICDRg9C00L7QsdC90LDRjyDQsNC70YzRgtC10YDQvdCw0YLQuNCy0LAg0L/QvtC70LjQvNC+0YDRhNC90L7QvNGDINC60L7QvdGB0YLRgNGD0LrRgtC+0YDRg1xuICAo0LLQvtC30LLRgNCw0YIg0YDQsNC30L3Ri9GFINC+0LHRitC10LrRgtC+0LIg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGC0LjQv9CwINCy0YXQvtC00L3Ri9GFINC00LDQvdC90YvRhSlcbiovXG5cblxuLyrQv9C+0LvQuNC80L7RgNGE0L3Ri9C5INC60L7QvdGB0YLRgNGD0LrRgtC+0YAuINCf0LvRjtGB0Ys6XG7QuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LPQtNC1INC90YPQttC90LAg0L/QvtC70LjQvNC+0YDRhNC90L7RgdGC0YwgXG4o0YLQuNC/INCy0YXQvtC00Y/RidC40YUg0LTQsNC90L3Ri9GFINC30LDRgNCw0L3QtdC1INC90LXQuNC30LLQtdGB0YLQtdC9KVxuKi9cbmZ1bmN0aW9uIFVzZXIoZGF0YSkge1xuICBpZiAoZGF0YSkge1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmFnZSA9IGRhdGEuYWdlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubmFtZSA9IFwiQW5vbnltb3VzXCI7XG4gIH1cblxuICB0aGlzLnNheUhpID0gZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICB9XG59XG52YXIga25vd25Vc2VyID0gbmV3IFVzZXIoe1xuICBuYW1lOiBcIlRvbVwiLFxuICBhZ2U6IFwiMTZcIlxufSk7XG5rbm93blVzZXIuc2F5SGkoKSAvL1RvbVxuXG52YXIgZ3Vlc3QgPSBuZXcgVXNlcigpO1xuZ3Vlc3Quc2F5SGkoKSAvL0Fub255bW91c1xuXG5cblxuXG4vKtGE0LDQsdGA0LjRh9C90YvQuSDQvNC10YLQvtC0LiDQn9C70Y7RgdGLOlxu0LvRg9GH0YjQtSDRh9C40YLQsNC10LzQvtGB0YLRjCAo0LLQvNC10YHRgtC+INC+0LTQvdC+0Lkg0YHQu9C+0LbQvdC+0Lkg0YQt0YbQuNC4IC0g0L3QtdGB0LrQvtC70YzQutC+INC/0YDQvtGB0YLRi9GFKVxu0LvRg9GH0YjQtSDQutC+0L3RgtGA0L7Qu9GMINC+0YjQuNCx0L7Qulxu0LvRg9GH0YjQtSDRgNCw0YHRiNC40YDRj9C10LzQvtGB0YLRjCAo0L/RgNC+0YnQtSDQtNC+0LHQsNCy0LjRgtGMINC00YDRg9Cz0L7QuSDRgtC40L8g0LTQsNC90L3Ri9GFKSA/IFxuKi9cblxuXG5mdW5jdGlvbiBGYWJyaWNVc2VyKGRhdGEpIHtcbiAgdGhpcy5zYXlIaSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcbiAgfVxufVxuXG5GYWJyaWNVc2VyLmNyZWF0ZUtub3duVXNlciA9IGZ1bmN0aW9uKGRhdGEpe1xuICBsZXQgdXNlciA9IG5ldyBGYWJyaWNVc2VyOyAvLyAhISEgbm90IGNhbGwgY29uc3RydWN0b3JcbiAgW3VzZXIubmFtZSwgdXNlci5hZ2VdID0gZGF0YTtcbiAgcmV0dXJuIHVzZXI7XG59XG5cbkZhYnJpY1VzZXIuY3JlYXRlQW5vbnltb3VzVXNlciA9IGZ1bmN0aW9uKCl7XG4gIGxldCB1c2VyID0gbmV3IEZhYnJpY1VzZXI7IC8vY3JlYXRlIGluc3RhbmNlIG9mIENsYXNzIHRvIGdldCBhbGwgYXR0cmlidXRlc1xuICB1c2VyLm5hbWUgPSBcIkFub255bW91c1wiO1xuICByZXR1cm4gdXNlcjtcbn1cblxudmFyIGtub3duVXNlciA9IG5ldyBGYWJyaWNVc2VyLmNyZWF0ZUtub3duVXNlcih7XG4gIG5hbWU6IFwiVG9tXCIsXG4gIGFnZTogXCIxNlwiXG59KTtcbmtub3duVXNlci5zYXlIaSgpIC8vVG9tXG5cbnZhciBndWVzdCA9IG5ldyBGYWJyaWNVc2VyLmNyZWF0ZUFub255bW91c1VzZXIoKSgpO1xuZ3Vlc3Quc2F5SGkoKSAvL0Fub255bW91c1xuXG5cblxuXG5cbi8q0JfQsNC00LDRh9CwIDFcblxu0JTQvtCx0LDQstC40YLRjCDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAIEFydGljbGU6XG5cbtCf0L7QtNGB0YfRkdGCINC+0LHRidC10LPQviDQutC+0LvQuNGH0LXRgdGC0LLQsCDRgdC+0LfQtNCw0L3QvdGL0YUg0L7QsdGK0LXQutGC0L7Qsi5cbtCX0LDQv9C+0LzQuNC90LDQvdC40LUg0LTQsNGC0Ysg0L/QvtGB0LvQtdC00L3QtdCz0L4g0YHQvtC30LTQsNC90L3QvtCz0L4g0L7QsdGK0LXQutGC0LAuXG7QmNGB0L/QvtC70YzQt9GD0LnRgtC1INC00LvRjyDRjdGC0L7Qs9C+INGB0YLQsNGC0LjRh9C10YHQutC40LUg0YHQstC+0LnRgdGC0LLQsC5cblxu0J/Rg9GB0YLRjCDQstGL0LfQvtCyIEFydGljbGUuc2hvd1N0YXRzKCkg0LLRi9Cy0L7QtNC40YIg0YLQviDQuCDQtNGA0YPQs9C+0LUuXG4qL1xuXG5cblxuXG5mdW5jdGlvbiBBcnRpY2xlKCkge1xuICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICBBcnRpY2xlLmNvdW50Kys7IC8vY291bnQgZWFjaCBhcnRpY2xlIGFuZCBzdG9yZSBpbiBzdGF0aWMgcHJvcFxuICBBcnRpY2xlLmFsbERhdGVzLnB1c2godGhpcy5jcmVhdGVkKTtcbn1cblxuLy8gSW5pdCBzdGF0aWMgaGVscCBwcm9wZXJ0aWVzXG5BcnRpY2xlLmNvdW50ID0gMDsgXG5BcnRpY2xlLmFsbERhdGVzID0gW107XG5cbi8vaW5pdCBzdGF0aWMgbWV0aG9kc1xuQXJ0aWNsZS5jb3VudFRvdGFsID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuY291bnQ7IC8vdGhpcyA9PT0gQ29uc3RydWN0b3Jcbn07XG5cbkFydGljbGUuZ2V0TGFzdERhdGUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hbGxEYXRlc1t0aGlzLmFsbERhdGVzLmxlbmd0aCAtIDFdO1xufTtcblxuQXJ0aWNsZS5zaG93U3RhdHMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gJ9CS0YHQtdCz0L46ICcgKyB0aGlzLmNvdW50VG90YWwoKSArICcsINCf0L7RgdC70LXQtNC90Y/RjzogJyArIHRoaXMuZ2V0TGFzdERhdGUoKTtcbn07XG5cblxubmV3IEFydGljbGUoKTtcbm5ldyBBcnRpY2xlKCk7XG5jb25zb2xlLmxvZyhBcnRpY2xlLnNob3dTdGF0cygpKTsgLy8g0JLRgdC10LPQvjogMiwg0J/QvtGB0LvQtdC00L3Rj9GPOiAo0LTQsNGC0LApXG5cbm5ldyBBcnRpY2xlKCk7XG5jb25zb2xlLmxvZyhBcnRpY2xlLnNob3dTdGF0cygpKTsgLy8g0JLRgdC10LPQvjogMywg0J/QvtGB0LvQtdC00L3Rj9GPOiAo0LTQsNGC0LApXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";

/*CALL и APPLY позволяют явно передавать this внутрь функции
*/

//Syntax
// func.call(context, arg1,arg2 ..., argN);
// func.apply(context, [arg1, arg2, ..., argN]);

//Simple example
function showFullName() {
  console.log(this.firstName + ' ' + this.lastName);
}

var user = {
  firstName: "Jack",
  lastName: "Daniels"
};

//Функция будет вызвана с this = user
showFullName.call(user); // "Jack Daniels"

/*Одалживание метода (method borrowing)
можно взять метод одного объекта, в т.ч. встроенного и 
вызвать в контексте другого объекта!

*/

function joinData() {
  return [].join.call(arguments, ':');
}

joinData("10", "00"); // "10:00"

function anotherFunc() {
  var args = [].slice.call(arguments);
}

/*APPLY can work with dynamic data [arrays]*/
var arr = [];
arr.push(1);
arr.push(5);
arr.push(3);

Math.max.apply(nul, arr); //5

// if method not uses func, you can pass null instead of this

/*Задача: 1*/

//Дана функция sum. Создать аналогичную функцию sumArgs которая будет суммировать свои аргументы
function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

function sumArgs() {
  return [].reduce.call(arguments, function (prev, next) {
    return prev + next;
  }, 0);
}

console.log(sumArgs(1, 2, 3)); //6

/* Задача 2:
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
Например:
*/

function applyAll() {
  var args = [].slice.apply(arguments);
  return args[0].apply(null, args.slice(1));
}
function sum() {
  // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function (a, b) {
    return a + b;
  });
}

function mul() {
  // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function (a, b) {
    return a * b;
  });
}

console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24
console.log(applyAll(Math.max, 2, -2, 3)); // 3
console.log(applyAll(Math.min, 2, -2, 3)); // -2
//# sourceMappingURL=data:application/json;base64,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dEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUU7QUFBQyxBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRTtBQUFDIiwiZmlsZSI6Im9iamVjdHMvNi5jYWxsX2FuZF9hcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQ0FMTCDQuCBBUFBMWSDQv9C+0LfQstC+0LvRj9GO0YIg0Y/QstC90L4g0L/QtdGA0LXQtNCw0LLQsNGC0YwgdGhpcyDQstC90YPRgtGA0Ywg0YTRg9C90LrRhtC40LhcbiovXG5cbi8vU3ludGF4XG4vLyBmdW5jLmNhbGwoY29udGV4dCwgYXJnMSxhcmcyIC4uLiwgYXJnTik7XG4vLyBmdW5jLmFwcGx5KGNvbnRleHQsIFthcmcxLCBhcmcyLCAuLi4sIGFyZ05dKTtcblxuXG4vL1NpbXBsZSBleGFtcGxlXG5mdW5jdGlvbiBzaG93RnVsbE5hbWUoKXtcbiAgY29uc29sZS5sb2codGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lKTtcbn1cblxudmFyIHVzZXIgPSB7XG4gIGZpcnN0TmFtZTogXCJKYWNrXCIsXG4gIGxhc3ROYW1lOiBcIkRhbmllbHNcIlxufTtcblxuLy/QpNGD0L3QutGG0LjRjyDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvdCwINGBIHRoaXMgPSB1c2VyXG5zaG93RnVsbE5hbWUuY2FsbCh1c2VyKSAvLyBcIkphY2sgRGFuaWVsc1wiXG5cblxuXG4vKtCe0LTQsNC70LbQuNCy0LDQvdC40LUg0LzQtdGC0L7QtNCwIChtZXRob2QgYm9ycm93aW5nKVxu0LzQvtC20L3QviDQstC30Y/RgtGMINC80LXRgtC+0LQg0L7QtNC90L7Qs9C+INC+0LHRitC10LrRgtCwLCDQsiDRgi7Rhy4g0LLRgdGC0YDQvtC10L3QvdC+0LPQviDQuCBcbtCy0YvQt9Cy0LDRgtGMINCyINC60L7QvdGC0LXQutGB0YLQtSDQtNGA0YPQs9C+0LPQviDQvtCx0YrQtdC60YLQsCFcblxuKi9cblxuZnVuY3Rpb24gam9pbkRhdGEoKSB7XG4gIHJldHVybiBbXS5qb2luLmNhbGwoYXJndW1lbnRzLCAnOicpO1xufVxuXG5qb2luRGF0YShcIjEwXCIsIFwiMDBcIikgLy8gXCIxMDowMFwiXG5cblxuXG5mdW5jdGlvbiBhbm90aGVyRnVuYygpe1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbn1cblxuXG5cbi8qQVBQTFkgY2FuIHdvcmsgd2l0aCBkeW5hbWljIGRhdGEgW2FycmF5c10qL1xudmFyIGFyciA9IFtdXG5hcnIucHVzaCgxKVxuYXJyLnB1c2goNSlcbmFyci5wdXNoKDMpXG5cbk1hdGgubWF4LmFwcGx5KG51bCwgYXJyKTsgLy81XG5cbi8vIGlmIG1ldGhvZCBub3QgdXNlcyBmdW5jLCB5b3UgY2FuIHBhc3MgbnVsbCBpbnN0ZWFkIG9mIHRoaXNcblxuXG5cblxuLyrQl9Cw0LTQsNGH0LA6IDEqL1xuXG4vL9CU0LDQvdCwINGE0YPQvdC60YbQuNGPIHN1bS4g0KHQvtC30LTQsNGC0Ywg0LDQvdCw0LvQvtCz0LjRh9C90YPRjiDRhNGD0L3QutGG0LjRjiBzdW1BcmdzINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0YHRg9C80LzQuNGA0L7QstCw0YLRjCDRgdCy0L7QuCDQsNGA0LPRg9C80LXQvdGC0YtcbmZ1bmN0aW9uIHN1bShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1bUFyZ3MoKSB7XG4gIHJldHVybiBbXS5yZWR1Y2UuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICByZXR1cm4gcHJldiArIG5leHQ7XG4gIH0sIDApO1xufVxuXG5jb25zb2xlLmxvZyhzdW1BcmdzKDEsMiwzKSkgLy82XG5cblxuLyog0JfQsNC00LDRh9CwIDI6XG7QndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOIGFwcGx5QWxsKGZ1bmMsIGFyZzEsIGFyZzIuLi4pLCDQutC+0YLQvtGA0LDRjyDQv9C+0LvRg9GH0LDQtdGCINGE0YPQvdC60YbQuNGOIGZ1bmMg0Lgg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INCw0YDQs9GD0LzQtdC90YLQvtCyLlxu0J7QvdCwINC00L7Qu9C20L3QsCDQstGL0LfQstCw0YLRjCBmdW5jKGFyZzEsIGFyZzIuLi4pLCDRgtC+INC10YHRgtGMINC/0LXRgNC10LTQsNGC0Ywg0LIgZnVuYyDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLLCDQvdCw0YfQuNC90LDRjyDRgdC+INCy0YLQvtGA0L7Qs9C+LCDQuCDQstC+0LfQstGA0LDRgtC40YLRjCDRgNC10LfRg9C70YzRgtCw0YIuXG7QndCw0L/RgNC40LzQtdGAOlxuKi9cblxuZnVuY3Rpb24gYXBwbHlBbGwoKXtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5hcHBseShhcmd1bWVudHMpO1xuICByZXR1cm4gYXJnc1swXS5hcHBseShudWxsLCBhcmdzLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHN1bSgpIHsgLy8g0YHRg9C80LzQuNGA0YPQtdGCINCw0YDQs9GD0LzQtdC90YLRizogc3VtKDEsMiwzKSA9IDZcbiAgcmV0dXJuIFtdLnJlZHVjZS5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG11bCgpIHsgLy8g0L/QtdGA0LXQvNC90L7QttCw0LXRgiDQsNGA0LPRg9C80LXQvdGC0Ys6IG11bCgyLDMsNCkgPSAyNFxuICByZXR1cm4gW10ucmVkdWNlLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgKiBiO1xuICB9KTtcbn1cblxuY29uc29sZS5sb2coIGFwcGx5QWxsKHN1bSwgMSwgMiwgMykgKTsgLy8gLT4gc3VtKDEsIDIsIDMpID0gNlxuY29uc29sZS5sb2coIGFwcGx5QWxsKG11bCwgMiwgMywgNCkgKTsgLy8gLT4gbXVsKDIsIDMsIDQpID0gMjRcbmNvbnNvbGUubG9nKCBhcHBseUFsbChNYXRoLm1heCwgMiwgLTIsIDMpICk7IC8vIDNcbmNvbnNvbGUubG9nKCBhcHBseUFsbChNYXRoLm1pbiwgMiwgLTIsIDMpICk7IC8vIC0yXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

'use strict';

/*Function doesn't remember context itself
  In some cases this context can be lost
  Use function-wrapper define it with clojure
  ... or use bind()

-----------------------------------------------------*/

var user = {
  firstName: "Tom",
  sayHi: function sayHi() {
    return this.firstName;
  }
};

setTimeout(user.sayHi, 1000); //incorrect context (this === undefined)

/*How to deal?
  1. Make a clojure (has a weekness: user can be overwritten while timeout is ticking)
-----------------------------------------------------*/

setTimeout(function () {
  user.sayHi;
}, 1000); //correct context (this === user)

/*2. Use wrapper-function bind
-----------------------------------------------------*/

function bind(func, context) {
  //use clojure for disable context losing
  return function () {
    return func.apply(context);
  };
}

var f = function f() {
  return this;
};
var g = bind(f, 'someContext');
g(); //someContext

setTimeout(bind(user.sayHi, user), 1000); //not call function!!! it will be called by setTimeout

/*3. Use integrated JS bind method
-----------------------------------------------------*/

var g1 = f.bind('bindedContext');
g(); //bindedContext

//bind syntax: pay attention, bind arguments, will be placed before function arguments
//func.bind(context [, arg1, arg2 ...])

/*3. Curriyng: get function variants with differen arguments fixed
-----------------------------------------------------*/
var mul = function mul(a, b) {
  return a * b;
};

var double = mul.bind(null, 2); //
double(10); // 10 * 2 (translated fixed argument)  == 20

var triple = mul.bind(null, 3);
triple(10); // 30

// double() and triple() are PARTIAL FUNCTIONS from CURRIYED function mul()

/*Задача 1: что выведет функция? */

function f() {
  alert(this);
}

var user = {
  g: f.bind("Hello")
};

user.g();

/*Решение: hello, потому что this === "Hello" через bind*/

/*Задача 2 (двойной bind): что выведет функция? */
function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();

/*Решение: "Вася" так как bind вызывает функцию а возвращает функцию-обертку, 
второй bind работать не будет*/

/*Задача 3 свойство после bind: */
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;
alert(sayHi.test); // 5

var bound = sayHi.bind({
  name: "Вася"
});

alert(bound.test); // что выведет? почему?

/*Решение: undefined, т.к bound возвращает не sayHi, в которой есть свойство test
а обертку, в которой его не существует. 

Примечание: понять почему не Error, ведь происходит обращение к несуществующей переменной */

/*Задача 4: 
Вызов user.checkPassword() в коде ниже должен, при помощи ask, спрашивать пароль
и вызывать loginOk/loginFail в зависимости от правильности ответа.
Однако, его вызов приводит к ошибке. Почему?

Исправить строку: *  

P.S. Ваше решение должно также срабатывать, если переменная user будет перезаписана, например вместо user.checkPassword() в конце будут строки:

var vasya = user;
user = null;
vasya.checkPassword();
*/

"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function loginOk() {
    alert(this.login + ' вошёл в сайт');
  },

  loginFail: function loginFail() {
    alert(this.login + ': ошибка входа');
  },

  checkPassword: function checkPassword() {
    ask("Ваш пароль?", this.password, this.loginOk, this.loginFail); //* неправильно

    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this)); //  правильно
  }
};

var vasua = user;
user = null;
vasya.checkPassword();

/*Решение: т.к. внутри loginOk и loginFail this == undefined, поэтому привязываем с помощью bind */

/*Задача 5: 
Сейчас код ниже обладает важным недостатком: 
при записи в user другого значения объект перестанет корректно работать,
вы увидите это, запустив пример ниже (будет ошибка).

Исправьте выделенный фрагмент, чтобы код заработал.
*/

"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function loginDone(result) {
    alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
  },

  checkPasswordIncorrect: function checkPasswordIncorrect() {
    // исправить здесь
    ask("Ваш пароль?", this.password, function () {
      user.loginDone(true);
    }, function () {
      user.loginDone(false);
    });
  },

  /*Решение 1: передать правильный контекст через вспомогательную переменную*/
  checkPasswordCorrect1: function checkPasswordCorrect1() {
    var self = this;
    ask("Ваш пароль?", this.password, function () {
      self.loginDone(true);
    }, function () {
      self.loginDone(false);
    });
  },

  /*Решение 2: передать правильный контекст и фиксированные аргументы (карринг)
    ВАЖНО: почему зациклился на том чтобы оставить анонимные функции???
   */
  checkPasswordCorrect2: function checkPasswordCorrect2() {
    ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
  }
};

var vasya = user;
user = null;
vasya.checkPasswordIncorrect();
// vasya.checkPasswordCorrect1();
vasya.checkPasswordCorrect2();

/*Решение*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjcuY29udGV4dF9iaW5kaW5nX2FuZF9jdXJyeWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxJQUFJLElBQUksR0FBRztBQUNULFdBQVMsRUFBRSxLQUFLO0FBQ2hCLE9BQUssRUFBRSxpQkFBVztBQUNoQixXQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7R0FDdkI7Q0FDRixDQUFBOztBQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzs7Ozs7O0FBQUMsQUFRN0IsVUFBVSxDQUFDLFlBQVU7QUFDbkIsTUFBSSxDQUFDLEtBQUssQ0FBQztDQUNaLEVBQUUsSUFBSSxDQUFDOzs7OztBQUFBLEFBU1IsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQzs7QUFFMUIsU0FBTyxZQUFVO0FBQ2YsV0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQzVCLENBQUE7Q0FDRjs7QUFFRCxJQUFJLENBQUMsR0FBRyxhQUFVO0FBQ2hCLFNBQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQTtBQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxFQUFFOztBQUFDLEFBR0osVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQzs7Ozs7QUFBQSxBQVF4QyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hDLENBQUMsRUFBRTs7Ozs7OztBQUFBLEFBc0JILElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFhLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2QsQ0FBQTs7QUFFRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFD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O0FBQ2pCLElBQUksR0FBRyxJQUFJLENBQUM7QUFDWixLQUFLLENBQUMsc0JBQXNCLEVBQUU7O0FBQUMsQUFFL0IsS0FBSyxDQUFDLHFCQUFxQixFQUFFOzs7QUFBQyIsImZpbGUiOiJvYmplY3RzLzcuY29udGV4dF9iaW5kaW5nX2FuZF9jdXJyeWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRnVuY3Rpb24gZG9lc24ndCByZW1lbWJlciBjb250ZXh0IGl0c2VsZlxuICBJbiBzb21lIGNhc2VzIHRoaXMgY29udGV4dCBjYW4gYmUgbG9zdFxuICBVc2UgZnVuY3Rpb24td3JhcHBlciBkZWZpbmUgaXQgd2l0aCBjbG9qdXJlXG4gIC4uLiBvciB1c2UgYmluZCgpXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxudmFyIHVzZXIgPSB7XG4gIGZpcnN0TmFtZTogXCJUb21cIixcbiAgc2F5SGk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG5zZXRUaW1lb3V0KHVzZXIuc2F5SGksIDEwMDApOyAvL2luY29ycmVjdCBjb250ZXh0ICh0aGlzID09PSB1bmRlZmluZWQpXG5cblxuXG4vKkhvdyB0byBkZWFsP1xuICAxLiBNYWtlIGEgY2xvanVyZSAoaGFzIGEgd2Vla25lc3M6IHVzZXIgY2FuIGJlIG92ZXJ3cml0dGVuIHdoaWxlIHRpbWVvdXQgaXMgdGlja2luZylcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICB1c2VyLnNheUhpO1xufSwgMTAwMCkgLy9jb3JyZWN0IGNvbnRleHQgKHRoaXMgPT09IHVzZXIpXG5cblxuXG5cblxuLyoyLiBVc2Ugd3JhcHBlci1mdW5jdGlvbiBiaW5kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCl7XG4gIC8vdXNlIGNsb2p1cmUgZm9yIGRpc2FibGUgY29udGV4dCBsb3NpbmdcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCk7XG4gIH1cbn1cblxudmFyIGYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcztcbn1cbnZhciBnID0gYmluZChmLCAnc29tZUNvbnRleHQnKTtcbmcoKTsgLy9zb21lQ29udGV4dFxuXG5cbnNldFRpbWVvdXQoYmluZCh1c2VyLnNheUhpLCB1c2VyKSwgMTAwMCkgIC8vbm90IGNhbGwgZnVuY3Rpb24hISEgaXQgd2lsbCBiZSBjYWxsZWQgYnkgc2V0VGltZW91dFxuXG5cblxuXG4vKjMuIFVzZSBpbnRlZ3JhdGVkIEpTIGJpbmQgbWV0aG9kXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbnZhciBnMSA9IGYuYmluZCgnYmluZGVkQ29udGV4dCcpXG5nKCkgLy9iaW5kZWRDb250ZXh0XG5cblxuLy9iaW5kIHN5bnRheDogcGF5IGF0dGVudGlvbiwgYmluZCBhcmd1bWVudHMsIHdpbGwgYmUgcGxhY2VkIGJlZm9yZSBmdW5jdGlvbiBhcmd1bWVudHNcbi8vZnVuYy5iaW5kKGNvbnRleHQgWywgYXJnMSwgYXJnMiAuLi5dKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyozLiBDdXJyaXluZzogZ2V0IGZ1bmN0aW9uIHZhcmlhbnRzIHdpdGggZGlmZmVyZW4gYXJndW1lbnRzIGZpeGVkXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgbXVsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgKiBiO1xufVxuXG52YXIgZG91YmxlID0gbXVsLmJpbmQobnVsbCwgMikvL1xuZG91YmxlKDEwKSAvLyAxMCAqIDIgKHRyYW5zbGF0ZWQgZml4ZWQgYXJndW1lbnQpICA9PSAyMFxuXG52YXIgdHJpcGxlID0gbXVsLmJpbmQobnVsbCwgMylcbnRyaXBsZSgxMCkgLy8gMzBcblxuLy8gZG91YmxlKCkgYW5kIHRyaXBsZSgpIGFyZSBQQVJUSUFMIEZVTkNUSU9OUyBmcm9tIENVUlJJWUVEIGZ1bmN0aW9uIG11bCgpXG5cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMTog0YfRgtC+INCy0YvQstC10LTQtdGCINGE0YPQvdC60YbQuNGPPyAqL1xuXG5mdW5jdGlvbiBmKCkge1xuICBhbGVydCggdGhpcyApO1xufVxuXG52YXIgdXNlciA9IHtcbiAgZzogZi5iaW5kKFwiSGVsbG9cIilcbn1cblxudXNlci5nKCk7XG5cbi8q0KDQtdGI0LXQvdC40LU6IGhlbGxvLCDQv9C+0YLQvtC80YMg0YfRgtC+IHRoaXMgPT09IFwiSGVsbG9cIiDRh9C10YDQtdC3IGJpbmQqL1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAyICjQtNCy0L7QudC90L7QuSBiaW5kKTog0YfRgtC+INCy0YvQstC10LTQtdGCINGE0YPQvdC60YbQuNGPPyAqL1xuZnVuY3Rpb24gZigpIHtcbiAgYWxlcnQodGhpcy5uYW1lKTtcbn1cblxuZiA9IGYuYmluZCgge25hbWU6IFwi0JLQsNGB0Y9cIn0gKS5iaW5kKCB7bmFtZTogXCLQn9C10YLRj1wiIH0gKTtcblxuZigpO1xuXG4vKtCg0LXRiNC10L3QuNC1OiBcItCS0LDRgdGPXCIg0YLQsNC6INC60LDQuiBiaW5kINCy0YvQt9GL0LLQsNC10YIg0YTRg9C90LrRhtC40Y4g0LAg0LLQvtC30LLRgNCw0YnQsNC10YIg0YTRg9C90LrRhtC40Y4t0L7QsdC10YDRgtC60YMsIFxu0LLRgtC+0YDQvtC5IGJpbmQg0YDQsNCx0L7RgtCw0YLRjCDQvdC1INCx0YPQtNC10YIqL1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAzINGB0LLQvtC50YHRgtCy0L4g0L/QvtGB0LvQtSBiaW5kOiAqL1xuZnVuY3Rpb24gc2F5SGkoKSB7XG4gIGFsZXJ0KCB0aGlzLm5hbWUgKTtcbn1cbnNheUhpLnRlc3QgPSA1O1xuYWxlcnQoIHNheUhpLnRlc3QgKTsgLy8gNVxuXG52YXIgYm91bmQgPSBzYXlIaS5iaW5kKHtcbiAgbmFtZTogXCLQktCw0YHRj1wiXG59KTtcblxuYWxlcnQoIGJvdW5kLnRlc3QgKTsgLy8g0YfRgtC+INCy0YvQstC10LTQtdGCPyDQv9C+0YfQtdC80YM/XG5cblxuLyrQoNC10YjQtdC90LjQtTogdW5kZWZpbmVkLCDRgi7QuiBib3VuZCDQstC+0LfQstGA0LDRidCw0LXRgiDQvdC1IHNheUhpLCDQsiDQutC+0YLQvtGA0L7QuSDQtdGB0YLRjCDRgdCy0L7QudGB0YLQstC+IHRlc3RcbtCwINC+0LHQtdGA0YLQutGDLCDQsiDQutC+0YLQvtGA0L7QuSDQtdCz0L4g0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgi4gXG5cbtCf0YDQuNC80LXRh9Cw0L3QuNC1OiDQv9C+0L3Rj9GC0Ywg0L/QvtGH0LXQvNGDINC90LUgRXJyb3IsINCy0LXQtNGMINC/0YDQvtC40YHRhdC+0LTQuNGCINC+0LHRgNCw0YnQtdC90LjQtSDQuiDQvdC10YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdC5INC/0LXRgNC10LzQtdC90L3QvtC5ICovXG5cblxuXG5cbi8q0JfQsNC00LDRh9CwIDQ6IFxu0JLRi9C30L7QsiB1c2VyLmNoZWNrUGFzc3dvcmQoKSDQsiDQutC+0LTQtSDQvdC40LbQtSDQtNC+0LvQttC10L0sINC/0YDQuCDQv9C+0LzQvtGJ0LggYXNrLCDRgdC/0YDQsNGI0LjQstCw0YLRjCDQv9Cw0YDQvtC70YxcbtC4INCy0YvQt9GL0LLQsNGC0YwgbG9naW5Pay9sb2dpbkZhaWwg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC/0YDQsNCy0LjQu9GM0L3QvtGB0YLQuCDQvtGC0LLQtdGC0LAuXG7QntC00L3QsNC60L4sINC10LPQviDQstGL0LfQvtCyINC/0YDQuNCy0L7QtNC40YIg0Log0L7RiNC40LHQutC1LiDQn9C+0YfQtdC80YM/XG5cbtCY0YHQv9GA0LDQstC40YLRjCDRgdGC0YDQvtC60YM6ICogIFxuXG5QLlMuINCS0LDRiNC1INGA0LXRiNC10L3QuNC1INC00L7Qu9C20L3QviDRgtCw0LrQttC1INGB0YDQsNCx0LDRgtGL0LLQsNGC0YwsINC10YHQu9C4INC/0LXRgNC10LzQtdC90L3QsNGPIHVzZXIg0LHRg9C00LXRgiDQv9C10YDQtdC30LDQv9C40YHQsNC90LAsINC90LDQv9GA0LjQvNC10YAg0LLQvNC10YHRgtC+IHVzZXIuY2hlY2tQYXNzd29yZCgpINCyINC60L7QvdGG0LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60Lg6XG5cbnZhciB2YXN5YSA9IHVzZXI7XG51c2VyID0gbnVsbDtcbnZhc3lhLmNoZWNrUGFzc3dvcmQoKTtcbiovXG5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGFzayhxdWVzdGlvbiwgYW5zd2VyLCBvaywgZmFpbCkge1xuICB2YXIgcmVzdWx0ID0gcHJvbXB0KHF1ZXN0aW9uLCAnJyk7XG4gIGlmIChyZXN1bHQudG9Mb3dlckNhc2UoKSA9PSBhbnN3ZXIudG9Mb3dlckNhc2UoKSkgb2soKTtcbiAgZWxzZSBmYWlsKCk7XG59XG5cbnZhciB1c2VyID0ge1xuICBsb2dpbjogJ9CS0LDRgdC40LvQuNC5JyxcbiAgcGFzc3dvcmQ6ICcxMjM0NScsXG5cbiAgbG9naW5PazogZnVuY3Rpb24oKSB7XG4gICAgYWxlcnQoIHRoaXMubG9naW4gKyAnINCy0L7RiNGR0Lsg0LIg0YHQsNC50YInICk7XG4gIH0sXG5cbiAgbG9naW5GYWlsOiBmdW5jdGlvbigpIHtcbiAgICBhbGVydCggdGhpcy5sb2dpbiArICc6INC+0YjQuNCx0LrQsCDQstGF0L7QtNCwJyApO1xuICB9LFxuXG4gIGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uKCkge1xuICAgIGFzayhcItCS0LDRiCDQv9Cw0YDQvtC70Yw/XCIsIHRoaXMucGFzc3dvcmQsIHRoaXMubG9naW5PaywgdGhpcy5sb2dpbkZhaWwpOyAvLyog0L3QtdC/0YDQsNCy0LjQu9GM0L3QvlxuXG4gICAgYXNrKFwi0JLQsNGIINC/0LDRgNC+0LvRjD9cIiwgdGhpcy5wYXNzd29yZCwgdGhpcy5sb2dpbk9rLmJpbmQodGhpcyksIHRoaXMubG9naW5GYWlsLmJpbmQodGhpcykpOyAvLyAg0L/RgNCw0LLQuNC70YzQvdC+XG4gIH1cbn07XG5cbnZhciB2YXN1YSA9IHVzZXI7XG51c2VyID0gbnVsbFxudmFzeWEuY2hlY2tQYXNzd29yZCgpO1xuXG4vKtCg0LXRiNC10L3QuNC1OiDRgi7Qui4g0LLQvdGD0YLRgNC4IGxvZ2luT2sg0LggbG9naW5GYWlsIHRoaXMgPT0gdW5kZWZpbmVkLCDQv9C+0Y3RgtC+0LzRgyDQv9GA0LjQstGP0LfRi9Cy0LDQtdC8INGBINC/0L7QvNC+0YnRjNGOIGJpbmQgKi9cblxuXG5cbi8q0JfQsNC00LDRh9CwIDU6IFxu0KHQtdC50YfQsNGBINC60L7QtCDQvdC40LbQtSDQvtCx0LvQsNC00LDQtdGCINCy0LDQttC90YvQvCDQvdC10LTQvtGB0YLQsNGC0LrQvtC8OiBcbtC/0YDQuCDQt9Cw0L/QuNGB0Lgg0LIgdXNlciDQtNGA0YPQs9C+0LPQviDQt9C90LDRh9C10L3QuNGPINC+0LHRitC10LrRgiDQv9C10YDQtdGB0YLQsNC90LXRgiDQutC+0YDRgNC10LrRgtC90L4g0YDQsNCx0L7RgtCw0YLRjCxcbtCy0Ysg0YPQstC40LTQuNGC0LUg0Y3RgtC+LCDQt9Cw0L/Rg9GB0YLQuNCyINC/0YDQuNC80LXRgCDQvdC40LbQtSAo0LHRg9C00LXRgiDQvtGI0LjQsdC60LApLlxuXG7QmNGB0L/RgNCw0LLRjNGC0LUg0LLRi9C00LXQu9C10L3QvdGL0Lkg0YTRgNCw0LPQvNC10L3Rgiwg0YfRgtC+0LHRiyDQutC+0LQg0LfQsNGA0LDQsdC+0YLQsNC7LlxuKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGFzayhxdWVzdGlvbiwgYW5zd2VyLCBvaywgZmFpbCkge1xuICB2YXIgcmVzdWx0ID0gcHJvbXB0KHF1ZXN0aW9uLCAnJyk7XG4gIGlmIChyZXN1bHQudG9Mb3dlckNhc2UoKSA9PSBhbnN3ZXIudG9Mb3dlckNhc2UoKSkgb2soKTtcbiAgZWxzZSBmYWlsKCk7XG59XG5cbnZhciB1c2VyID0ge1xuICBsb2dpbjogJ9CS0LDRgdC40LvQuNC5JyxcbiAgcGFzc3dvcmQ6ICcxMjM0NScsXG5cbiAgLy8g0LzQtdGC0L7QtCDQtNC70Y8g0LLRi9C30L7QstCwINC40LcgYXNrXG4gIGxvZ2luRG9uZTogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgYWxlcnQoIHRoaXMubG9naW4gKyAocmVzdWx0ID8gJyDQstC+0YjRkdC7INCyINGB0LDQudGCJyA6ICcg0L7RiNC40LHQutCwINCy0YXQvtC00LAnKSApO1xuICB9LFxuXG4gIGNoZWNrUGFzc3dvcmRJbmNvcnJlY3Q6IGZ1bmN0aW9uKCkgeyAvLyDQuNGB0L/RgNCw0LLQuNGC0Ywg0LfQtNC10YHRjFxuICAgIGFzayhcItCS0LDRiCDQv9Cw0YDQvtC70Yw/XCIsIHRoaXMucGFzc3dvcmQsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgdXNlci5sb2dpbkRvbmUodHJ1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVzZXIubG9naW5Eb25lKGZhbHNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9LFxuXG4gIC8q0KDQtdGI0LXQvdC40LUgMTog0L/QtdGA0LXQtNCw0YLRjCDQv9GA0LDQstC40LvRjNC90YvQuSDQutC+0L3RgtC10LrRgdGCINGH0LXRgNC10Lcg0LLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Rg9GOINC/0LXRgNC10LzQtdC90L3Rg9GOKi9cbiAgY2hlY2tQYXNzd29yZENvcnJlY3QxOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGFzayhcItCS0LDRiCDQv9Cw0YDQvtC70Yw/XCIsIHRoaXMucGFzc3dvcmQsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5sb2dpbkRvbmUodHJ1ZSk7ICBcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5sb2dpbkRvbmUoZmFsc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG5cbiAgLyrQoNC10YjQtdC90LjQtSAyOiDQv9C10YDQtdC00LDRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C5INC60L7QvdGC0LXQutGB0YIg0Lgg0YTQuNC60YHQuNGA0L7QstCw0L3QvdGL0LUg0LDRgNCz0YPQvNC10L3RgtGLICjQutCw0YDRgNC40L3QsylcbiAgICDQktCQ0JbQndCeOiDQv9C+0YfQtdC80YMg0LfQsNGG0LjQutC70LjQu9GB0Y8g0L3QsCDRgtC+0Lwg0YfRgtC+0LHRiyDQvtGB0YLQsNCy0LjRgtGMINCw0L3QvtC90LjQvNC90YvQtSDRhNGD0L3QutGG0LjQuD8/P1xuICAgKi9cbiAgY2hlY2tQYXNzd29yZENvcnJlY3QyOiBmdW5jdGlvbiAoKSB7XG4gICAgYXNrKFwi0JLQsNGIINC/0LDRgNC+0LvRjD9cIixcbiAgICAgICAgdGhpcy5wYXNzd29yZCwgXG4gICAgICAgIHRoaXMubG9naW5Eb25lLmJpbmQodGhpcywgdHJ1ZSksXG4gICAgICAgIHRoaXMubG9naW5Eb25lLmJpbmQodGhpcywgZmFsc2UpXG4gICAgKTtcbiAgfVxufVxuXG5cbnZhciB2YXN5YSA9IHVzZXI7XG51c2VyID0gbnVsbDtcbnZhc3lhLmNoZWNrUGFzc3dvcmRJbmNvcnJlY3QoKTtcbi8vIHZhc3lhLmNoZWNrUGFzc3dvcmRDb3JyZWN0MSgpOyBcbnZhc3lhLmNoZWNrUGFzc3dvcmRDb3JyZWN0MigpOyBcblxuXG5cblxuLyrQoNC10YjQtdC90LjQtSovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";

/*Decorator: function that wrap another function and
improve or change it behavior*/

// Timer decorator

/*TODO:
function with clojure
forward call (with apply)
count time with performance now
store exec time in object

*/
function timingDecorator(func, time) {
  return function () {
    var start = performance.now();
    var result = func.apply(this, arguments); //forward call
    if (!timers[time]) {
      timers[time] = 0;
    }
    timers[time] = performance.now() - start;
    return result;
  };
}

function f(x) {} // любая функция

var timers = {}; // объект для таймеров

// отдекорировали
f = timingDecorator(f, "myFunc");

// запускаем
f(1);
f(2);
f(3); // функция работает как раньше, но время подсчитывается
f(3e15);

timers.myFunc; // общее время

/*Example 2: data check decorator*/

function isNumber(data) {
  return typeof data === 'number' ? true : false;
}

function dataCheck(func, check) {
  return function () {
    var args = [].slice.apply(arguments);
    var invalidParams = args.filter(function (a) {
      return !check(a);
    });
    invalidParams.forEach(function (p) {
      console.log("Attention: invalid param " + p);
    });
    return func.apply(this, args);
  };
}

function sum(a, b) {
  return a + b;
}

sum = dataCheck(sum, isNumber); //decorated function

sum(1, 2); // 3
sum(1, true, false, '42'); //Invalid params: true

/*Декоратор проверки доступа*/
function isAdmin(user) {
  return user.admin ? true : false;
}

function checkYourPrivileges(f) {
  return function () {
    isAdmin(arguments) ? f.apply(this, arguments) : "No permissions!";
  };
}
var vasya = {
  admin: false
};

function removeAll() {
  return 'sudo rm -r -f /';
}

removeAll = checkYourPrivileges(removeAll);
removeAll(vasya); //no permissions

/*Задача 1: логгирующий декоратор
makeLogging(f, log) //log array
при каждом вызове записывает аргументы в лог, затем запусткает функцию
*/
function test() {
  return arguments;
}

function makeLogging(f, log) {
  return function () {
    [].slice.call(arguments).forEach(function (x) {
      return log.push(x);
    });
    return f.apply(this, arguments);
  };
}

var logArray = [];
test = makeLogging(test, logArray);

test(5);
test(623);
test(643);

console.log(logArray);

/*Задача 2: кеширующий декоратор. 
при первом вызове f с аргументом запоминает результат функции
при последующих вызовах с тем же аргументом - сразу вернуть запомненное значение*/
function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
  var cache = {}; // store in clojure

  return function (x) {
    if (cache[x]) {
      return cache[x];
    } else {
      cache[x] = f.call(this, x);
      return f.call(this, x);
    }
  };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log(a === b); // true (значение закешировано)

b = f(2);
console.log(a === b); // false, другой аргумент => другое значение

/*ПОВТОРЕНИЕ: логирующий декоратор*/

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
  return function () {
    log.push(arguments);

    f.apply(this, arguments);
  };
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}

/*ПОВТОРЕНИЕ: логирующий декоратор с мульти-параметрами*/

function work(a, b) {
  return a + b; // work - произвольная функция
}

function makeLogging(f, log) {
  return function () {
    for (i in arguments) {
      log.push(arguments[i]);
    }

    f.apply(this, arguments);
  };
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

console.log(log);

/*ПОВТОРЕНИЕ: кеширующий декоратор с мульти-параметрами

При первом вызове обертки с определенным аргументом — она вызывает f и запоминает значение.
При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.*/

function f(x) {
  return Math.random() * x;
}

function makeCaching(f) {
  var cache = []; //общий для всех вызовов makeCaching()

  return function (num) {
    if (!cache[num]) {
      cache[num] = f.call(this, num);
    }
    return cache[num]; //возвращаем не прямое значение - а из кеша.
  };
}

//улучшенная версия
//Кеш использует объект вместо массива - работает для любого параметра, не только для чисел!

function makeCachingUpdated(f) {
  var cache = {};

  return function (num) {
    if (!(num in cache)) {
      cache[num] = f.call(this, num);
    }
    return cache[num];
  };
}

f = makeCachingUpdated(f);

var a, b;

a = f(1);
b = f(1);
console.log(a === b); // true (значение закешировано)

b = f(2);
console.log(a === b); // false, другой аргумент => другое значение
//# sourceMappingURL=data:application/json;base64,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R0FBRyxFQUFFLENBQUM7O0FBRWYsU0FBTyxVQUFVLEdBQUcsRUFBRTtBQUNwQixRQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQSxBQUFDLEVBQUU7QUFDbkIsV0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsV0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDbkIsQ0FBQTtDQUNGOztBQUdELENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVULENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFFOztBQUFDLEFBRXZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDVCxPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsS0FBSyxDQUFDLENBQUU7QUFBQyIsImZpbGUiOiJvYmplY3RzLzguZGVjb3JhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRGVjb3JhdG9yOiBmdW5jdGlvbiB0aGF0IHdyYXAgYW5vdGhlciBmdW5jdGlvbiBhbmRcbmltcHJvdmUgb3IgY2hhbmdlIGl0IGJlaGF2aW9yKi9cblxuXG4vLyBUaW1lciBkZWNvcmF0b3JcblxuLypUT0RPOlxuZnVuY3Rpb24gd2l0aCBjbG9qdXJlXG5mb3J3YXJkIGNhbGwgKHdpdGggYXBwbHkpXG5jb3VudCB0aW1lIHdpdGggcGVyZm9ybWFuY2Ugbm93XG5zdG9yZSBleGVjIHRpbWUgaW4gb2JqZWN0XG5cbiovXG5mdW5jdGlvbiB0aW1pbmdEZWNvcmF0b3IgKGZ1bmMsIHRpbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vZm9yd2FyZCBjYWxsXG4gICAgaWYgKCF0aW1lcnNbdGltZV0pIHtcbiAgICAgIHRpbWVyc1t0aW1lXSA9IDA7XG4gICAgfVxuICAgIHRpbWVyc1t0aW1lXSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGYoeCkge30gLy8g0LvRjtCx0LDRjyDRhNGD0L3QutGG0LjRj1xuXG52YXIgdGltZXJzID0ge307IC8vINC+0LHRitC10LrRgiDQtNC70Y8g0YLQsNC50LzQtdGA0L7QslxuXG4vLyDQvtGC0LTQtdC60L7RgNC40YDQvtCy0LDQu9C4XG5mID0gdGltaW5nRGVjb3JhdG9yKGYsIFwibXlGdW5jXCIpO1xuXG4vLyDQt9Cw0L/Rg9GB0LrQsNC10LxcbmYoMSk7XG5mKDIpO1xuZigzKTsgLy8g0YTRg9C90LrRhtC40Y8g0YDQsNCx0L7RgtCw0LXRgiDQutCw0Log0YDQsNC90YzRiNC1LCDQvdC+INCy0YDQtdC80Y8g0L/QvtC00YHRh9C40YLRi9Cy0LDQtdGC0YHRj1xuZigzZTE1KTtcblxuXG50aW1lcnMubXlGdW5jOyAvLyDQvtCx0YnQtdC1INCy0YDQtdC80Y9cblxuXG5cblxuXG4vKkV4YW1wbGUgMjogZGF0YSBjaGVjayBkZWNvcmF0b3IqL1xuXG5mdW5jdGlvbiBpc051bWJlciAoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mKGRhdGEpID09PSAnbnVtYmVyJyA/IHRydWUgOiBmYWxzZTtcbn1cblxuXG5mdW5jdGlvbiBkYXRhQ2hlY2soZnVuYywgY2hlY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmFwcGx5KGFyZ3VtZW50cyk7XG4gICAgdmFyIGludmFsaWRQYXJhbXMgPSBhcmdzLmZpbHRlcihmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiAhY2hlY2soYSk7XG4gICAgfSk7XG4gICAgaW52YWxpZFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgY29uc29sZS5sb2coXCJBdHRlbnRpb246IGludmFsaWQgcGFyYW0gXCIgKyBwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3VtIChhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuc3VtID0gZGF0YUNoZWNrKHN1bSwgaXNOdW1iZXIpOyAvL2RlY29yYXRlZCBmdW5jdGlvblxuXG5zdW0oMSwgMik7IC8vIDNcbnN1bSgxLCB0cnVlLCBmYWxzZSwgJzQyJyk7IC8vSW52YWxpZCBwYXJhbXM6IHRydWVcblxuXG5cblxuLyrQlNC10LrQvtGA0LDRgtC+0YAg0L/RgNC+0LLQtdGA0LrQuCDQtNC+0YHRgtGD0L/QsCovXG5mdW5jdGlvbiBpc0FkbWluKHVzZXIpIHtcbiAgcmV0dXJuIHVzZXIuYWRtaW4gPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrWW91clByaXZpbGVnZXMgKGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpc0FkbWluKGFyZ3VtZW50cykgPyBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBcIk5vIHBlcm1pc3Npb25zIVwiXG4gIH1cbn1cbnZhciB2YXN5YSA9IHtcbiAgYWRtaW46IGZhbHNlXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbCgpe1xuICByZXR1cm4gJ3N1ZG8gcm0gLXIgLWYgLydcbn1cblxucmVtb3ZlQWxsID0gY2hlY2tZb3VyUHJpdmlsZWdlcyhyZW1vdmVBbGwpXG5yZW1vdmVBbGwodmFzeWEpOyAvL25vIHBlcm1pc3Npb25zXG5cblxuXG5cbi8q0JfQsNC00LDRh9CwIDE6INC70L7Qs9Cz0LjRgNGD0Y7RidC40Lkg0LTQtdC60L7RgNCw0YLQvtGAXG5tYWtlTG9nZ2luZyhmLCBsb2cpIC8vbG9nIGFycmF5XG7Qv9GA0Lgg0LrQsNC20LTQvtC8INCy0YvQt9C+0LLQtSDQt9Cw0L/QuNGB0YvQstCw0LXRgiDQsNGA0LPRg9C80LXQvdGC0Ysg0LIg0LvQvtCzLCDQt9Cw0YLQtdC8INC30LDQv9GD0YHRgtC60LDQtdGCINGE0YPQvdC60YbQuNGOXG4qL1xuZnVuY3Rpb24gdGVzdCgpe3JldHVybiBhcmd1bWVudHM7fVxuXG5mdW5jdGlvbiBtYWtlTG9nZ2luZyAoZiwgbG9nKSB7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5mb3JFYWNoKCB4ID0+IGxvZy5wdXNoKHgpKTtcbiAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG52YXIgbG9nQXJyYXkgPSBbXTtcbnRlc3QgPSBtYWtlTG9nZ2luZyh0ZXN0LCBsb2dBcnJheSk7XG5cbnRlc3QoNSk7XG50ZXN0KDYyMyk7XG50ZXN0KDY0Myk7XG5cbmNvbnNvbGUubG9nKGxvZ0FycmF5KTtcblxuXG4vKtCX0LDQtNCw0YfQsCAyOiDQutC10YjQuNGA0YPRjtGJ0LjQuSDQtNC10LrQvtGA0LDRgtC+0YAuIFxu0L/RgNC4INC/0LXRgNCy0L7QvCDQstGL0LfQvtCy0LUgZiDRgSDQsNGA0LPRg9C80LXQvdGC0L7QvCDQt9Cw0L/QvtC80LjQvdCw0LXRgiDRgNC10LfRg9C70YzRgtCw0YIg0YTRg9C90LrRhtC40LhcbtC/0YDQuCDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINCy0YvQt9C+0LLQsNGFINGBINGC0LXQvCDQttC1INCw0YDQs9GD0LzQtdC90YLQvtC8IC0g0YHRgNCw0LfRgyDQstC10YDQvdGD0YLRjCDQt9Cw0L/QvtC80L3QtdC90L3QvtC1INC30L3QsNGH0LXQvdC40LUqL1xuZnVuY3Rpb24gZih4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogeDsgLy8gcmFuZG9tINC00LvRjyDRg9C00L7QsdGB0YLQstCwINGC0LXRgdGC0LjRgNC+0LLQsNC90LjRj1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FjaGluZyhmKSB7XG4gIHZhciBjYWNoZSA9IHt9IC8vIHN0b3JlIGluIGNsb2p1cmVcblxuICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgIGlmIChjYWNoZVt4XSkge1xuICAgICAgcmV0dXJuIGNhY2hlW3hdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVt4XSA9IGYuY2FsbCh0aGlzLCB4KTtcbiAgICAgIHJldHVybiBmLmNhbGwodGhpcywgeCk7XG4gICAgfVxuXG4gIH1cbn1cblxuZiA9IG1ha2VDYWNoaW5nKGYpO1xuXG52YXIgYSwgYjtcblxuYSA9IGYoMSk7XG5iID0gZigxKTtcbmNvbnNvbGUubG9nKCBhID09PSBiICk7IC8vIHRydWUgKNC30L3QsNGH0LXQvdC40LUg0LfQsNC60LXRiNC40YDQvtCy0LDQvdC+KVxuXG5iID0gZigyKTtcbmNvbnNvbGUubG9nKCBhID09PSBiICk7IC8vIGZhbHNlLCDQtNGA0YPQs9C+0Lkg0LDRgNCz0YPQvNC10L3RgiA9PiDQtNGA0YPQs9C+0LUg0LfQvdCw0YfQtdC90LjQtVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyrQn9Ce0JLQotCe0KDQldCd0JjQlTog0LvQvtCz0LjRgNGD0Y7RidC40Lkg0LTQtdC60L7RgNCw0YLQvtGAKi9cblxuZnVuY3Rpb24gd29yayhhKSB7XG4gIC8qIC4uLiAqLyAvLyB3b3JrIC0g0L/RgNC+0LjQt9Cy0L7Qu9GM0L3QsNGPINGE0YPQvdC60YbQuNGPLCDQvtC00LjQvSDQsNGA0LPRg9C80LXQvdGCXG59XG5cbmZ1bmN0aW9uIG1ha2VMb2dnaW5nKGYsIGxvZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGxvZy5wdXNoKGFyZ3VtZW50cyk7XG5cbiAgICBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxudmFyIGxvZyA9IFtdO1xud29yayA9IG1ha2VMb2dnaW5nKHdvcmssIGxvZyk7XG5cbndvcmsoMSk7IC8vIDEsINC00L7QsdCw0LLQu9C10L3QviDQsiBsb2dcbndvcmsoNSk7IC8vIDUsINC00L7QsdCw0LLQu9C10L3QviDQsiBsb2dcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBsb2cubGVuZ3RoOyBpKyspIHtcbiAgYWxlcnQoICfQm9C+0LM6JyArIGxvZ1tpXSApOyAvLyBcItCb0L7QszoxXCIsINC30LDRgtC10LwgXCLQm9C+0LM6NVwiXG59XG5cblxuXG5cbi8q0J/QntCS0KLQntCg0JXQndCY0JU6INC70L7Qs9C40YDRg9GO0YnQuNC5INC00LXQutC+0YDQsNGC0L7RgCDRgSDQvNGD0LvRjNGC0Lgt0L/QsNGA0LDQvNC10YLRgNCw0LzQuCovXG5cbmZ1bmN0aW9uIHdvcmsoYSwgYikge1xuICByZXR1cm4gYSArIGI7IC8vIHdvcmsgLSDQv9GA0L7QuNC30LLQvtC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y9cbn1cblxuZnVuY3Rpb24gbWFrZUxvZ2dpbmcoZiwgbG9nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChpIGluIGFyZ3VtZW50cykge1xuICAgICAgbG9nLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxudmFyIGxvZyA9IFtdO1xud29yayA9IG1ha2VMb2dnaW5nKHdvcmssIGxvZyk7XG5cbndvcmsoMSwgMik7IC8vIDNcbndvcmsoNCwgNSk7IC8vIDlcblxuY29uc29sZS5sb2cobG9nKTtcblxuXG5cblxuXG4vKtCf0J7QktCi0J7QoNCV0J3QmNCVOiDQutC10YjQuNGA0YPRjtGJ0LjQuSDQtNC10LrQvtGA0LDRgtC+0YAg0YEg0LzRg9C70YzRgtC4LdC/0LDRgNCw0LzQtdGC0YDQsNC80Lhcblxu0J/RgNC4INC/0LXRgNCy0L7QvCDQstGL0LfQvtCy0LUg0L7QsdC10YDRgtC60Lgg0YEg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C8INCw0YDQs9GD0LzQtdC90YLQvtC8IOKAlCDQvtC90LAg0LLRi9C30YvQstCw0LXRgiBmINC4INC30LDQv9C+0LzQuNC90LDQtdGCINC30L3QsNGH0LXQvdC40LUuXG7Qn9GA0Lgg0LLRgtC+0YDQvtC8INC4INC/0L7RgdC70LXQtNGD0Y7RidC40YUg0LLRi9C30L7QstCw0YUg0YEg0YLQtdC8INC20LUg0LDRgNCz0YPQvNC10L3RgtC+0Lwg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINC30LDQv9C+0LzQvdC10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtS4qL1xuXG5mdW5jdGlvbiBmKHgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiB4O1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FjaGluZyhmKSB7XG4gIHZhciBjYWNoZSA9IFtdOyAgLy/QvtCx0YnQuNC5INC00LvRjyDQstGB0LXRhSDQstGL0LfQvtCy0L7QsiBtYWtlQ2FjaGluZygpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChudW0pIHtcbiAgICBpZiAoIWNhY2hlW251bV0pIHtcbiAgICAgIGNhY2hlW251bV0gPSBmLmNhbGwodGhpcywgbnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW251bV07IC8v0LLQvtC30LLRgNCw0YnQsNC10Lwg0L3QtSDQv9GA0Y/QvNC+0LUg0LfQvdCw0YfQtdC90LjQtSAtINCwINC40Lcg0LrQtdGI0LAuXG4gIH1cbn1cblxuLy/Rg9C70YPRh9GI0LXQvdC90LDRjyDQstC10YDRgdC40Y9cbi8v0JrQtdGIINC40YHQv9C+0LvRjNC30YPQtdGCINC+0LHRitC10LrRgiDQstC80LXRgdGC0L4g0LzQsNGB0YHQuNCy0LAgLSDRgNCw0LHQvtGC0LDQtdGCINC00LvRjyDQu9GO0LHQvtCz0L4g0L/QsNGA0LDQvNC10YLRgNCwLCDQvdC1INGC0L7Qu9GM0LrQviDQtNC70Y8g0YfQuNGB0LXQuyFcblxuZnVuY3Rpb24gbWFrZUNhY2hpbmdVcGRhdGVkKGYpIHsgXG4gIHZhciBjYWNoZSA9IHt9OyBcblxuICByZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuICAgIGlmICghKG51bSBpbiBjYWNoZSkpIHtcbiAgICAgIGNhY2hlW251bV0gPSBmLmNhbGwodGhpcywgbnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW251bV07XG4gIH1cbn1cblxuXG5mID0gbWFrZUNhY2hpbmdVcGRhdGVkKGYpO1xuXG52YXIgYSwgYjtcblxuYSA9IGYoMSk7XG5iID0gZigxKTtcbmNvbnNvbGUubG9nKCBhID09PSBiICk7IC8vIHRydWUgKNC30L3QsNGH0LXQvdC40LUg0LfQsNC60LXRiNC40YDQvtCy0LDQvdC+KVxuXG5iID0gZigyKTtcbmNvbnNvbGUubG9nKCBhID09PSBiICk7IC8vIGZhbHNlLCDQtNGA0YPQs9C+0Lkg0LDRgNCz0YPQvNC10L3RgiA9PiDQtNGA0YPQs9C+0LUg0LfQvdCw0YfQtdC90LjQtVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";

/*Полиморфная функция*/

function sayHi(who) {

  if (Array.isArray(who)) {
    // for (i in who) {
    //   console.log "Привет: " + who[i];
    // }
    who.forEach(sayHi); // изящнее с помощью рекурсии
  } else {
      console.log("Привет: " + who);
    }
}

// Утиная типизация
function sayHi(who) {

  if (who.forEach) {
    //eсли существует forEach - предполагаем что данные правильные
    who.forEach(sayHi);
  } else {
    console.log("Привет: " + who);
  }
}

/*Задача 1:

Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

Как объект Date.
Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
Как число секунд с 01.01.1970.
Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.


*/

function formatDate(date) {

  function isTypeEqual(d, type) {
    return ({}).toString.call(d).slice(8, -1) === type ? true : false;
  }

  function convertToProperFormat(d) {
    return "" + d.getDay() + "." + d.getMonth() + "." + d.getFullYear();
  }

  if (isTypeEqual(date, "Date")) {
    return convertToProperFormat(date);
  } else if (typeof date === "number") {
    return convertToProperFormat(new Date(date));
  } else if (Array.isArray(date)) {
    date = new Date(date[0], date[1] + 1, date[2]);
    return convertToProperFormat(date);
  } else {
    return "Error! Incorrect date format: " + date;
  }
}

console.log(formatDate(Date.now()));
console.log(formatDate(234143234));
console.log(formatDate([1999, 0, 24]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLmRhdGFfdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRTs7QUFFbEIsTUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzs7O0FBSXRCLE9BQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQUEsR0FDbkIsTUFBTTtBQUNMLGFBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0tBQzlCO0NBQ0Y7OztBQUFBLEFBSUQsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFOztBQUVsQixNQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7O0FBQ2YsT0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtHQUNuQixNQUFPO0FBQ04sV0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUE7R0FDOUI7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQXFCRCxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUU7O0FBRXhCLFdBQVMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUM7QUFDM0IsV0FBTyxDQUFBLEdBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztHQUNqRTs7QUFFRCxXQUFTLHFCQUFxQixDQUFDLENBQUMsRUFBQztBQUMvQixXQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0dBQ3JFOztBQUdELE1BQUksV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtBQUM3QixXQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3BDLE1BQ0ksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDakMsV0FBTyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQzlDLE1BQ0ksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzVCLFFBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxXQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ3BDLE1BQ0k7QUFDSCxXQUFPLGdDQUFnQyxHQUFHLElBQUksQ0FBQztHQUNoRDtDQUNGOztBQUlELE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBRSxDQUFDLENBQUM7QUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUUsU0FBUyxDQUFHLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBRSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6Im90aGVyX3Bvc3NpYmlsaXRpZXMvMDEuZGF0YV90eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8q0J/QvtC70LjQvNC+0YDRhNC90LDRjyDRhNGD0L3QutGG0LjRjyovXG5cbmZ1bmN0aW9uIHNheUhpKHdobykge1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHdobykpIHtcbiAgICAvLyBmb3IgKGkgaW4gd2hvKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyBcItCf0YDQuNCy0LXRgjogXCIgKyB3aG9baV07XG4gICAgLy8gfVxuICAgIHdoby5mb3JFYWNoKHNheUhpKSAvLyDQuNC30Y/RidC90LXQtSDRgSDQv9C+0LzQvtGJ0YzRjiDRgNC10LrRg9GA0YHQuNC4XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCLQn9GA0LjQstC10YI6IFwiICsgd2hvKVxuICB9XG59XG5cblxuLy8g0KPRgtC40L3QsNGPINGC0LjQv9C40LfQsNGG0LjRj1xuZnVuY3Rpb24gc2F5SGkod2hvKSB7XG5cbiAgaWYgKHdoby5mb3JFYWNoKSB7IC8vZdGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiBmb3JFYWNoIC0g0L/RgNC10LTQv9C+0LvQsNCz0LDQtdC8INGH0YLQviDQtNCw0L3QvdGL0LUg0L/RgNCw0LLQuNC70YzQvdGL0LVcbiAgICB3aG8uZm9yRWFjaChzYXlIaSkgIFxuICB9ICBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcItCf0YDQuNCy0LXRgjogXCIgKyB3aG8pXG4gIH1cbn1cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMTpcblxu0J3QsNC/0LjRiNC40YLQtSDRhNGD0L3QutGG0LjRjiBmb3JtYXREYXRlKGRhdGUpLCDQutC+0YLQvtGA0LDRjyDQstC+0LfQstGA0LDRidCw0LXRgiDQtNCw0YLRgyDQsiDRhNC+0YDQvNCw0YLQtSBkZC5tbS55eS5cblxu0JXQtSDQv9C10YDQstGL0Lkg0LDRgNCz0YPQvNC10L3RgiDQtNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINC00LDRgtGDINCyINC+0LTQvdC+0Lwg0LjQtyDQstC40LTQvtCyOlxuXG7QmtCw0Log0L7QsdGK0LXQutGCIERhdGUuXG7QmtCw0Log0YHRgtGA0L7QutGDLCDQvdCw0L/RgNC40LzQtdGAIHl5eXktbW0tZGQg0LjQu9C4INC00YDRg9Cz0YPRjiDQsiDRgdGC0LDQvdC00LDRgNGC0L3QvtC8INGE0L7RgNC80LDRgtC1INC00LDRgtGLLlxu0JrQsNC6INGH0LjRgdC70L4g0YHQtdC60YPQvdC0INGBIDAxLjAxLjE5NzAuXG7QmtCw0Log0LzQsNGB0YHQuNCyIFvQs9Cz0LPQsywg0LzQvCwg0LTQtF0sINC80LXRgdGP0YYg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEg0L3Rg9C70Y9cbtCU0LvRjyDRjdGC0L7Qs9C+INCy0LDQvCDQv9C+0L3QsNC00L7QsdC40YLRgdGPINC+0L/RgNC10LTQtdC70LjRgtGMINGC0LjQvyDQtNCw0L3QvdGL0YUg0LDRgNCz0YPQvNC10L3RgtCwINC4LCDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LgsINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDRgtGMINCy0YXQvtC00L3Ri9C1INC00LDQvdC90YvQtSDQsiDQvdGD0LbQvdGL0Lkg0YTQvtGA0LzQsNGCLlxuXG5cbiovXG5cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG5cbiAgZnVuY3Rpb24gaXNUeXBlRXF1YWwoZCwgdHlwZSl7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoZCkuc2xpY2UoOCwgLTEpID09PSB0eXBlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFRvUHJvcGVyRm9ybWF0KGQpe1xuICAgIHJldHVybiBcIlwiICsgZC5nZXREYXkoKSArIFwiLlwiICsgZC5nZXRNb250aCgpICsgXCIuXCIgKyBkLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuXG4gIGlmIChpc1R5cGVFcXVhbChkYXRlLCBcIkRhdGVcIikpIHtcbiAgICByZXR1cm4gY29udmVydFRvUHJvcGVyRm9ybWF0KGRhdGUpO1xuICB9IFxuICBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBjb252ZXJ0VG9Qcm9wZXJGb3JtYXQobmV3IERhdGUoZGF0ZSkpO1xuICB9XG4gIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0ZSkpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZVswXSwgZGF0ZVsxXSArIDEsIGRhdGVbMl0pO1xuICAgIHJldHVybiBjb252ZXJ0VG9Qcm9wZXJGb3JtYXQoZGF0ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIFwiRXJyb3IhIEluY29ycmVjdCBkYXRlIGZvcm1hdDogXCIgKyBkYXRlO1xuICB9XG59XG5cblxuXG5jb25zb2xlLmxvZyggZm9ybWF0RGF0ZSggRGF0ZS5ub3coKSApKTtcbmNvbnNvbGUubG9nKCBmb3JtYXREYXRlKCAyMzQxNDMyMzQgICkpO1xuY29uc29sZS5sb2coIGZvcm1hdERhdGUoIFsxOTk5LDAsMjRdICkpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";

/*Задача 1: превратить объект в json*/

var leader = {
  name: "Tom Jefferson",
  age: 35
};

var leaderJ = console.log(JSON.stringify(leader));
console.log(JSON.parse(leaderJ));

/*
Задача 2: 

Может ли это сделать прямой вызов JSON.stringify(team)? Если нет, то почему?
Какой подход вы бы предложили для чтения и восстановления таких объектов?
*/

var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

/*Решение:

Прямой вызов JSON.stringify(team) приведет к бесконечному циклу
можно сделать проверку предотвращающую ссылку объектов друг на друга через их свойства


Дополнение: выдаст ошибку ()
Не поддерживается хранение ссылок

В таких случаях лучше всего использовать кастомные реализации JSON
(jquery, dojo...) которые поддерживают хранение ссылок

*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLmpzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQUksTUFBTSxHQUFHO0FBQ1gsTUFBSSxFQUFFLGVBQWU7QUFDckIsS0FBRyxFQUFFLEVBQUU7Q0FDUixDQUFBOztBQUVELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7O0FBQUEsQUFVaEMsSUFBSSxNQUFNLEdBQUc7QUFDWCxNQUFJLEVBQUUsa0JBQWtCO0NBQ3pCLENBQUM7O0FBRUYsSUFBSSxPQUFPLEdBQUc7QUFDWixNQUFJLEVBQUUsUUFBUTtDQUNmOzs7QUFBQyxBQUdGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUV4QixJQUFJLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUFDIiwiZmlsZSI6Im90aGVyX3Bvc3NpYmlsaXRpZXMvMDIuanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8q0JfQsNC00LDRh9CwIDE6INC/0YDQtdCy0YDQsNGC0LjRgtGMINC+0LHRitC10LrRgiDQsiBqc29uKi9cbiBcbnZhciBsZWFkZXIgPSB7XG4gIG5hbWU6IFwiVG9tIEplZmZlcnNvblwiLFxuICBhZ2U6IDM1XG59XG5cbnZhciBsZWFkZXJKID0gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobGVhZGVyKSk7XG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxlYWRlckopKVxuXG5cbi8qXG7Ql9Cw0LTQsNGH0LAgMjogXG5cbtCc0L7QttC10YIg0LvQuCDRjdGC0L4g0YHQtNC10LvQsNGC0Ywg0L/RgNGP0LzQvtC5INCy0YvQt9C+0LIgSlNPTi5zdHJpbmdpZnkodGVhbSk/INCV0YHQu9C4INC90LXRgiwg0YLQviDQv9C+0YfQtdC80YM/XG7QmtCw0LrQvtC5INC/0L7QtNGF0L7QtCDQstGLINCx0Ysg0L/RgNC10LTQu9C+0LbQuNC70Lgg0LTQu9GPINGH0YLQtdC90LjRjyDQuCDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPINGC0LDQutC40YUg0L7QsdGK0LXQutGC0L7Qsj9cbiovXG5cbnZhciBsZWFkZXIgPSB7XG4gIG5hbWU6IFwi0JLQsNGB0LjQu9C40Lkg0JjQstCw0L3QvtCy0LjRh1wiXG59O1xuXG52YXIgc29sZGllciA9IHtcbiAgbmFtZTogXCLQn9C10YLRjNC60LBcIlxufTtcblxuLy8g0Y3RgtC4INC+0LHRitC10LrRgtGLINGB0YHRi9C70LDRjtGC0YHRjyDQtNGA0YPQsyDQvdCwINC00YDRg9Cz0LAhXG5sZWFkZXIuc29sZGllciA9IHNvbGRpZXI7XG5zb2xkaWVyLmxlYWRlciA9IGxlYWRlcjtcblxudmFyIHRlYW0gPSBbbGVhZGVyLCBzb2xkaWVyXTtcblxuXG4vKtCg0LXRiNC10L3QuNC1OlxuXG7Qn9GA0Y/QvNC+0Lkg0LLRi9C30L7QsiBKU09OLnN0cmluZ2lmeSh0ZWFtKSDQv9GA0LjQstC10LTQtdGCINC6INCx0LXRgdC60L7QvdC10YfQvdC+0LzRgyDRhtC40LrQu9GDXG7QvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINC/0YDQvtCy0LXRgNC60YMg0L/RgNC10LTQvtGC0LLRgNCw0YnQsNGO0YnRg9GOINGB0YHRi9C70LrRgyDQvtCx0YrQtdC60YLQvtCyINC00YDRg9CzINC90LAg0LTRgNGD0LPQsCDRh9C10YDQtdC3INC40YUg0YHQstC+0LnRgdGC0LLQsFxuXG5cbtCU0L7Qv9C+0LvQvdC10L3QuNC1OiDQstGL0LTQsNGB0YIg0L7RiNC40LHQutGDICgpXG7QndC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0YXRgNCw0L3QtdC90LjQtSDRgdGB0YvQu9C+0Lpcblxu0JIg0YLQsNC60LjRhSDRgdC70YPRh9Cw0Y/RhSDQu9GD0YfRiNC1INCy0YHQtdCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC60LDRgdGC0L7QvNC90YvQtSDRgNC10LDQu9C40LfQsNGG0LjQuCBKU09OXG4oanF1ZXJ5LCBkb2pvLi4uKSDQutC+0YLQvtGA0YvQtSDQv9C+0LTQtNC10YDQttC40LLQsNGO0YIg0YXRgNCw0L3QtdC90LjQtSDRgdGB0YvQu9C+0LpcblxuKi8iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
