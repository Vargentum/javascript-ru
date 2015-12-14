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

function f(arg) { /*...*/ }
// window = { f: function, a: 5, g: undefined } без изменений, f обработана ранее

var g = function(arg) { /*...*/ };
// window = { f: function, a: 5, g: function }



var result = ("a" in window); // true,  т.к. есть свойство window.a
var result = (a); // равно undefined,  присваивание будет выполнено далее
var result = (f); // function ...,  готовая к выполнению функция
var result = (g); // undefined, т.к. это переменная, а не Function Declaration

var a = 5;
function f() { /*...*/ }
var g = function() { /*...*/ };







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
console.log( a );

/*Решение: 1. проверка истинна (var a не перезаписывает a=1!!!)*/
