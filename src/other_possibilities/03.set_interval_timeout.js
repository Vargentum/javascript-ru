/*Задача 1:
Напишите функцию printNumbersInterval(), которая последовательно выводит
в консоль числа от 1 до 20, с интервалом между числами 100мс.
То есть, весь вывод должен занимать 2000мс,
в течение которых каждые 100мс в консоли появляется очередное число.

Функция должна использовать setInterval.
*/

function printNumbersInterval (max) {
  var i = 0;

  function printNums() {
    i++;
    console.log(i);
    if (i >= max) clearInterval(timer);
  }
  var timer = setInterval(printNums, 100)
}
// printNumbersInterval(20)





/*Задача 2:
Сделайте то же самое, что в задаче Вывод чисел каждые 100мс,
но с использованием рекурсивного setTimeout вместо setInterval.
*/

// var i = 0;
// setTimeout(function printNumbersRecursive() {
//   i++;
//   console.log(i);

//   if (i < 20) setTimeout(printNumbersRecursive, 100)
// }, 100)



/*Задача 3 и 4:

если во время отсчета планировщика,
интерпретатор начинает выполнять ресурсоемкую функцию, время исполнения которой
больше времени отсчета - ОТЛОЖЕННЫЙ планировщик ждет своей очереди,
после чего СРАЗУ выполняется.

*/



/*Задача 6:

Напишите функцию delay(f, ms), 
которая возвращает обёртку вокруг f,
задерживающую вызов на ms миллисекунд.
*/
function f(x) {
  console.log(x);
}

function delay (f, ms) {
  return function () {
    var self = this;
    var args = arguments;

    setTimeout(function(){
      f.apply(self, args);
    }, ms)
  }
}

// var f1 = delay(f, 2000);
// var f2 = delay(f, 4000);
// f1('test')
// f2('rest')


/*Задача 7: 

Напишите функцию debounce(f, ms), которая возвращает обёртку,
которая передаёт вызов f не чаще, чем раз в ms миллисекунд.
“Лишние” вызовы игнорируются. Все аргументы и контекст — передаются.


function f() { ... }


Решение: использовать флаг:
 - в момент инициализации функции - true
 - каждые ms переходит в true
 - передача вызова только при true
 - вместе с передачей вызова сбрасываем в false

*/

function debounce (f, ms) {
  var isCallable = true;

  setInterval(function(){
    isCallable = true;
  }, ms)

  return function (){
    if (isCallable) {
      isCallable = false;
      f.apply(this, arguments);
    }
  }
}

// var fD = debounce(f, 1000);
// setTimeout( function() { fD(1) }, 1);   // выполнится
// setTimeout( function() { fD(2) }, 100); // игнор (прошло только 100мс)
// setTimeout( function() { fD(3) }, 1100); // выполнится
// setTimeout( function() { fD(4) }, 1500); // игнор



/*Задача: 
Напишите функцию throttle(f, ms) — “тормозилку”,
которая возвращает обёртку,
передающую вызов f не чаще, чем раз в ms миллисекунд.

У этой функции должно быть важное существенное отличие от debounce: 
если игнорируемый вызов оказался последним, 
т.е. после него до окончания задержки ничего нет — то он выполнится.

*/


function throttle (f, ms) {
  var isCallable = true;
  var start = performance.now()

  setInterval(function(){
    isCallable = true;
  }, ms)

  return function (){
    if (isCallable) {
      isCallable = false;
      f.apply(this, arguments);
    }
  }
}


var fT = throttle(f, 1000);
setTimeout( function() { fT(1) }, 1);   // выполнится
setTimeout( function() { fT(2) }, 100); // игнор (прошло только 100мс)
setTimeout( function() { fT(3) }, 1100); // выполнится
setTimeout( function() { fT(4) }, 1500); // игнор
setTimeout( function() { fT(5) }, 1700); // выполнится (debounce - нет)

