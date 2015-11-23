/*Function doesn't remember context itself
  In some cases this context can be lost
  Use function-wrapper define it with clojure
  ... or use bind()

-----------------------------------------------------*/

var user = {
  firstName: "Tom",
  sayHi: function() {
    return this.firstName;
  }
}

setTimeout(user.sayHi, 1000); //incorrect context (this === undefined)



/*How to deal?
  1. Make a clojure (has a weekness: user can be overwritten while timeout is ticking)
-----------------------------------------------------*/

setTimeout(function(){
  user.sayHi;
}, 1000) //correct context (this === user)





/*2. Use wrapper-function bind
-----------------------------------------------------*/

function bind(func, context){
  //use clojure for disable context losing
  return function(){
    return func.apply(context);
  }
}

var f = function(){
  return this;
}
var g = bind(f, 'someContext');
g(); //someContext


setTimeout(bind(user.sayHi, user), 1000)  //not call function!!! it will be called by setTimeout




/*3. Use integrated JS bind method
-----------------------------------------------------*/

var g1 = f.bind('bindedContext')
g() //bindedContext


//bind syntax: pay attention, bind arguments, will be placed before function arguments
//func.bind(context [, arg1, arg2 ...])















/*3. Curriyng: get function variants with differen arguments fixed
-----------------------------------------------------*/
var mul = function (a, b) {
  return a * b;
}

var double = mul.bind(null, 2)//
double(10) // 10 * 2 (translated fixed argument)  == 20

var triple = mul.bind(null, 3)
triple(10) // 30

// double() and triple() are PARTIAL FUNCTIONS from CURRIYED function mul()





/*Задача 1: что выведет функция? */

function f() {
  return this;
}

var user = {
  g: f.bind("Hello")
}

user.g();

/*Решение: hello, потому что this === "Hello" через bind*/




/*Задача 2 (двойной bind): что выведет функция? */
function f() {
  return this.name;
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();

/*Решение: "Вася" так как bind вызывает функцию а возвращает функцию-обертку, 
второй bind работать не будет*/




/*Задача 3 свойство после bind: */
function sayHi() {
  return this.name;
}
sayHi.test = 5;
var result = sayHi.test; // 5

var bound = sayHi.bind({
  name: "Вася"
});

result = bound.test; // что выведет? почему?


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
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    return this.login + ' вошёл в сайт';
  },

  loginFail: function() {
    return this.login + ': ошибка входа';
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk, this.loginFail); //* неправильно

    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this)); //  правильно
  }
};

var vasua = user;
user = null
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
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    return this.login + (result ? ' вошёл в сайт' : ' ошибка входа');
  },

  checkPasswordIncorrect: function() { // исправить здесь
    ask("Ваш пароль?", this.password,
      function() {
        user.loginDone(true);
      },
      function() {
        user.loginDone(false);
      }
    );
  },

  /*Решение 1: передать правильный контекст через вспомогательную переменную*/
  checkPasswordCorrect1: function () {
    var self = this;
    ask("Ваш пароль?", this.password,
      function() {
        self.loginDone(true);  
      },
      function() {
        self.loginDone(false);
      }
    );
  },

  /*Решение 2: передать правильный контекст и фиксированные аргументы (карринг)
    ВАЖНО: почему зациклился на том чтобы оставить анонимные функции???
   */
  checkPasswordCorrect2: function () {
    ask("Ваш пароль?",
        this.password, 
        this.loginDone.bind(this, true),
        this.loginDone.bind(this, false)
    );
  }
}


var vasya = user;
user = null;
vasya.checkPasswordIncorrect();
// vasya.checkPasswordCorrect1(); 
vasya.checkPasswordCorrect2(); 




/*Решение*/