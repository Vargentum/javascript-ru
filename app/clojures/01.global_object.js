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

var result = "a" in window; // true,  т.к. есть свойство window.a
var result = a; // равно undefined,  присваивание будет выполнено далее
var result = f; // function ...,  готовая к выполнению функция
var result = g; // undefined, т.к. это переменная, а не Function Declaration

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLmdsb2JhbF9vYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLElBQUksQ0FBQyxHQUFHLENBQUM7OztBQUFDLEFBR1YsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFOzs7QUFBVyxBQUczQixJQUFJLENBQUMsR0FBRyxTQUFKLENBQUMsQ0FBWSxHQUFHLEVBQUUsU0FBVzs7O0FBQUMsQUFLbEMsSUFBSSxNQUFNLEdBQUksR0FBRyxJQUFJLE1BQU0sQUFBQztBQUFDLEFBQzdCLElBQUksTUFBTSxHQUFJLENBQUMsQUFBQztBQUFDLEFBQ2pCLElBQUksTUFBTSxHQUFJLENBQUMsQUFBQztBQUFDLEFBQ2pCLElBQUksTUFBTSxHQUFJLENBQUMsQUFBQzs7QUFBQyxBQUVqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixTQUFTLENBQUMsR0FBRyxTQUFXO0FBQ3hCLElBQUksQ0FBQyxHQUFHLFNBQUosQ0FBQyxHQUFjLFNBQVc7Ozs7QUFBQyxBQVUvQixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDakIsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ1g7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0FBQUMsQUFTZixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDakIsR0FBQyxHQUFHLENBQUMsQ0FBQztDQUNQO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O0FBQUMsQUFVZixJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDakIsR0FBQyxHQUFHLENBQUMsQ0FBQztDQUNQO0FBQ0QsSUFBSSxDQUFDLENBQUM7QUFDTixPQUFPLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBRTs7O0FBQUMiLCJmaWxlIjoiY2xvanVyZXMvMDEuZ2xvYmFsX29iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qUGFyc2VyIHN0YWdlczpcblxuMS4gSW5pdGlhbGl6YXRpb24gLSBcbiAgYS4gZmluZCBGdW5jdGlvbiBEZWNsYXJhdGlvbnMgKEZEKSBhbmQgdmFyaWFibGVzXG4gIGIuIGFkZCB0aGVtIHRvIGdsb2JhbCBvYmplY3QgKHdpbmRvdylcbiAgYy4gYWRkIEZEIGFzIGlzXG4gIGQuIGFkZCB2YXJpYWJsZXMgYXMgdW5kZWZpbmVkXG5cbjIuIEV4ZWN1dGlvblxuICBFeGVjdXRlIGNvZGUgbGluZSBieSBsaW5lXG4gIGFzc2lnbiB2YXJpYWJsZXMgdG8gdmFsdWVzIHdoZW4gcGFyc2VyIHN0ZXAgb3ZlciB0aGVtXG4qL1xuXG5cblxuLy8g0J3QsCDQvNC+0LzQtdC90YIg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LgsINC00L4g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LrQvtC00LA6XG4vLyB3aW5kb3cgPSB7IGY6IGZ1bmN0aW9uLCBhOiB1bmRlZmluZWQsIGc6IHVuZGVmaW5lZCB9XG5cbnZhciBhID0gNTtcbi8vIHdpbmRvdyA9IHsgZjogZnVuY3Rpb24sIGE6IDUsIGc6IHVuZGVmaW5lZCB9XG5cbmZ1bmN0aW9uIGYoYXJnKSB7IC8qLi4uKi8gfVxuLy8gd2luZG93ID0geyBmOiBmdW5jdGlvbiwgYTogNSwgZzogdW5kZWZpbmVkIH0g0LHQtdC3INC40LfQvNC10L3QtdC90LjQuSwgZiDQvtCx0YDQsNCx0L7RgtCw0L3QsCDRgNCw0L3QtdC1XG5cbnZhciBnID0gZnVuY3Rpb24oYXJnKSB7IC8qLi4uKi8gfTtcbi8vIHdpbmRvdyA9IHsgZjogZnVuY3Rpb24sIGE6IDUsIGc6IGZ1bmN0aW9uIH1cblxuXG5cbnZhciByZXN1bHQgPSAoXCJhXCIgaW4gd2luZG93KTsgLy8gdHJ1ZSwgINGCLtC6LiDQtdGB0YLRjCDRgdCy0L7QudGB0YLQstC+IHdpbmRvdy5hXG52YXIgcmVzdWx0ID0gKGEpOyAvLyDRgNCw0LLQvdC+IHVuZGVmaW5lZCwgINC/0YDQuNGB0LLQsNC40LLQsNC90LjQtSDQsdGD0LTQtdGCINCy0YvQv9C+0LvQvdC10L3QviDQtNCw0LvQtdC1XG52YXIgcmVzdWx0ID0gKGYpOyAvLyBmdW5jdGlvbiAuLi4sICDQs9C+0YLQvtCy0LDRjyDQuiDQstGL0L/QvtC70L3QtdC90LjRjiDRhNGD0L3QutGG0LjRj1xudmFyIHJlc3VsdCA9IChnKTsgLy8gdW5kZWZpbmVkLCDRgi7Qui4g0Y3RgtC+INC/0LXRgNC10LzQtdC90L3QsNGPLCDQsCDQvdC1IEZ1bmN0aW9uIERlY2xhcmF0aW9uXG5cbnZhciBhID0gNTtcbmZ1bmN0aW9uIGYoKSB7IC8qLi4uKi8gfVxudmFyIGcgPSBmdW5jdGlvbigpIHsgLyouLi4qLyB9O1xuXG5cblxuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAxOiDRh9GC0L4g0LLRi9Cy0LXQtNC10YIg0LvQvtCzPyovXG5cbmlmIChcImFcIiBpbiB3aW5kb3cpIHtcbiAgdmFyIGEgPSAxO1xufVxuY29uc29sZS5sb2coYSk7XG5cbi8q0KDQtdGI0LXQvdC40LU6IDEsINGC0LDQuiDQutCw0Log0L/RgNC+0LLQtdGA0LrQsCDQuNGB0YLQuNC90L3QsC4gd2luZG93LmEg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0Lgg0YDQsNCy0LXQvSB1bmRlZmluZWQqL1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAyOiDRh9GC0L4g0LLRi9Cy0LXQtNC10YIg0LvQvtCzPyAo0L/QtdGA0LXQtCBhINC90LXRgiB2YXIpKi9cblxuaWYgKFwiYVwiIGluIHdpbmRvdykge1xuICBhID0gMTtcbn1cbmNvbnNvbGUubG9nKGEpO1xuXG4vKtCg0LXRiNC10L3QuNC1OiBFcnJvcjogYSBpcyBub3QgZGVmaW5lZC4g0J/RgNC4INC+0LHRitGP0LLQu9C10L3QuNC4INCx0LXQtyB2YXIsINC/0LXRgNC10LzQtdC90L3QsNGPIFxu0LHRg9C00LXRgiDQtNC+0LHQsNCy0LvQtdC90L3QsCDQsiDQs9C70L7QsdCw0LvRjNC90YvQuSDQvtCx0YrQtdC60YIg0LIg0LzQvtC80LXQvdGCINC/0LDRgNGB0LjQvdCz0LAg0LfQvdCw0YfQtdC90LjRjywg0LAg0L7QvSDQvdC10LLQvtC30LzQvtC20L3QtdC9LFxu0L/QvtGC0L7QvNGDINGH0YLQviDQv9GA0L7QstC10YDQutCwINC70L7QttC90LAuKi9cblxuXG5cbi8q0JfQsNC00LDRh9CwIDI6INGH0YLQviDQstGL0LLQtdC00LXRgiDQu9C+0LM/Ki9cblxuaWYgKFwiYVwiIGluIHdpbmRvdykge1xuICBhID0gMTtcbn1cbnZhciBhO1xuY29uc29sZS5sb2coIGEgKTtcblxuLyrQoNC10YjQtdC90LjQtTogMS4g0L/RgNC+0LLQtdGA0LrQsCDQuNGB0YLQuNC90L3QsCAodmFyIGEg0L3QtSDQv9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdGCIGE9MSEhISkqL1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
