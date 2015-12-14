/*Decorator: function that wrap another function and
improve or change it behavior*/


// Timer decorator

/*TODO:
function with clojure
forward call (with apply)
count time with performance now
store exec time in object

*/
function timingDecorator (func, time) {
  return function() {
    var start = performance.now();
    var result = func.apply(this, arguments); //forward call
    if (!timers[time]) {
      timers[time] = 0;
    }
    timers[time] = performance.now() - start;
    return result;
  }
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

function isNumber (data) {
  return typeof(data) === 'number' ? true : false;
}


function dataCheck(func, check) {
  return function () {
    var args = [].slice.apply(arguments);
    var invalidParams = args.filter(function(a){
      return !check(a);
    });
    invalidParams.forEach(function(p){
      console.log("Attention: invalid param " + p);
    });
    return func.apply(this, args);
  };
}

function sum (a, b) {
  return a + b;
}

sum = dataCheck(sum, isNumber); //decorated function

sum(1, 2); // 3
sum(1, true, false, '42'); //Invalid params: true




/*Декоратор проверки доступа*/
function isAdmin(user) {
  return user.admin ? true : false;
}

function checkYourPrivileges (f) {
  return function () {
    isAdmin(arguments) ? f.apply(this, arguments) : "No permissions!"
  }
}
var vasya = {
  admin: false
}

function removeAll(){
  return 'sudo rm -r -f /'
}

removeAll = checkYourPrivileges(removeAll)
removeAll(vasya); //no permissions




/*Задача 1: логгирующий декоратор
makeLogging(f, log) //log array
при каждом вызове записывает аргументы в лог, затем запусткает функцию
*/
function test(){return arguments;}

function makeLogging (f, log) {
  return function(){
    [].slice.call(arguments).forEach( x => log.push(x));
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
  var cache = {} // store in clojure

  return function(x) {
    if (cache[x]) {
      return cache[x];
    } else {
      cache[x] = f.call(this, x);
      return f.call(this, x);
    }

  }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a === b ); // true (значение закешировано)

b = f(2);
console.log( a === b ); // false, другой аргумент => другое значение












/*ПОВТОРЕНИЕ: логирующий декоратор*/

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
  return function () {
    log.push(arguments);

    f.apply(this, arguments);
  }
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//   console.log('Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }




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
  }
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
  var cache = [];  //общий для всех вызовов makeCaching()

  return function (num) {
    if (!cache[num]) {
      cache[num] = f.call(this, num);
    }
    return cache[num]; //возвращаем не прямое значение - а из кеша.
  }
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
  }
}


f = makeCachingUpdated(f);

var a, b;

a = f(1);
b = f(1);
console.log( a === b ); // true (значение закешировано)

b = f(2);
console.log( a === b ); // false, другой аргумент => другое значение


