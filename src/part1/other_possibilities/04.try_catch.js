/*----------
try..catch конструкция для обработки ошибок.
Не позволить ошибкам остановить исполнение скрипта
----------*/


try {
  //some code
} catch (err) {
  //do smth with error object
}


/*Объект ошибки:
error = {
  name: "error name & type"
  message: "more info about error"
  stack: "stack trace caused this error"
}
*/

function example1() {
  var data = "Has Error"; // в данных ошибка

  try {
    var user = JSON.parse(data); // <-- ошибка при выполнении
    console.log( user.name ); // не сработает

  } catch (e) {
    // ...выполнится catch
    console.log( "Sorry, your data is incorrect" );
    console.log( e.name );
    console.log( e.message );
  }
}
// example1()



/* ----------
Генерация ошибок с помощью оператора throw
---------- */
function example2 () {
  var data = '{ "age": "30"}'; //неполные данные
  try {
    var user = JSON.parse(data); // выполняется без ошибки
    if (!user.name) {
      throw new SyntaxError("Incorrect data") //если нет имени - выбрасываем ошибку
    }
  } catch (e) {
    console.log("Sorry, your data is incorrect");
  }
}
// example2()



/* ----------
Проброс исключения:
анализируем в catch(e), если ошибка не подходит - выбрасываем наружу через throw

!!!Ошибку, о которой catch не знает, он не должен обрабатывать.
---------- */

function example3 () {
  var data = '{"name": "Tom", "age": "30"}'; //правильные данные

  try {
    var user = JSON.parse(data); // ошибок нет
    if (!user.name) { // ошибок нет
      throw new SyntaxError("Incorrect data")
    };
    errorCauseFunction() // непредусмотренная ошибка :(

  } catch (e) {
    if (e.name === "SyntaxError") {
      console.log("Sorry, your data is incorrect");
    } else {
      throw e; //Проброс ошибки наружу
    }
  }
}
// example3()



/* --------------------------------
  Проброшенную ошибку, можно обработать внутри внешнего try..catch
-------------------------------------- */


function example4 () {
  function readData() {
    var data = '{ "name": "Вася", "age": 30 }';

    try {
      blabla(); // ошибка!

    } catch (e) {
      if (e.name != 'SyntaxError') {
        throw e; // пробрасываем
      }
    }
  }

  try {
    readData();
  } catch (e) {
    console.log( "Поймал во внешнем catch: " + e ); // ловим
  }
}
// example4()



/*----------------------------------------------
Оборачивание исключений

Каждый участок фукнционала должен получать информацию
на том уровне, который ему необходим
----------------------------------------------*/

function example5 () {

  /*ошибки низкого уровня оборачиваем в ReadError*/
  function ReadError (message, cause) {
    this.name = "ReadError";
    this.message = message;
    this.cause = cause; //сохраняем оригинальную ошибку
    this.stack = cause.stack;
  }

  function readData() {
    var data = '{ bad data }';

    try {
      JSON.parse(data);
    } catch (e) {
      if (e.name === "URIError") {
        throw new ReadError("Requested URI is incorrect", e)
      } else if (e.name === "SyntaxError") {
        throw new ReadError("Data syntax is incorrect", e)
      } else {
        throw e
      }
    }
  }

  try {
    readData();

  } catch(e) {
    if (e.name === "ReadError") {
      console.log(e.message)
      console.log(e.cause) //оригинальная ошибка-причина
    } else {
      throw e;
    }
  }
}
// example5()




/*--------------------------------------------
  Конструкция finally

  generateError true ->  try..catch..finally
  generateError false -> try..finally
--------------------------------------------*/

function example6() {
  var generateError = true;

  try {
    console.log('try');
    if (generateError) {
      BAD_CODE()
    };
  } catch (e) {
    console.log('catch');
  } finally {
    console.log('finally');
  }
}
// example6()



/*
пример: Здесь секция finally гарантирует,
что время будет подсчитано в любых ситуациях — при ошибке в sum или без неё.
*/

function example7() {
  function sum(n) {
    return n ? (n + sum(n - 1)) : 0;
  }
  var n = +prompt('Введите n?', 100);

  var start = new Date();

  try {
    var result = sum(n);
  } catch (e) {
    result = 0;
  } finally {
    var diff = new Date() - start;
  }

  alert( result ? result : 'была ошибка' );
  alert( "Выполнение заняло " + diff );
}
// example7()




/*
Finally и return
В примере ниже, из try происходит return,
но finally получает управление ДО того, как контроль возвращается во внешний код.
*/
function example8 () {

  function func() {
    try {
      return 1; // сразу вернуть значение
    } catch (e) {
      /* ... */
    } finally {
      console.log( 'finally' );
    }
  }
  console.log( func() ); // сначала finally, потом 1
}
// example8()


/*
Если внутри try были начаты какие-то процессы,
которые нужно завершить по окончании работы, то в finally это обязательно будет сделано.

Кстати, для таких случаев иногда используют try..finally вообще без catch:
*/
function example9() {
  function func() {
    try {
      return 1;
    } finally {
      console.log( 'Вызов завершён' );
    }
  }

  console.log(func()); // сначала finally, потом 1
}
// example9()



/* ------------------------------------------
  window.onerror
  в случае любой ошибки в коде - выполнит функцию
------------------------------------------*/
function example10(){
  window.onerror = function(message, url, lineNumber) {
    alert("Поймана ошибка, выпавшая в глобальную область!\n" +
      "Сообщение: " + message + "\n(" + url + ":" + lineNumber + ")");
  };

  function readData() {
    error(); // ой, что-то не так
  }

  readData();
}
// example10()




/*--------------------------------------------------------------------*/




/*Задача 1:
Нужно, чтобы код финализации всегда выполнялся при выходе из блока try..catch и,
таким образом, заканчивал начатую работу.
Имеет ли здесь finally какое-то преимущество или оба фрагмента работают одинаково?

Если имеет, то дайте пример когда код с finally работает верно, а без — неверно.
*/
function exercise1() {
  try{
    GEN_ERROR();
  } catch(e){
    if (e.name === "SytaxError") {
      console.log(e.name, e.message);
    } else{
      throw e;
    };
  } finally{
    //this code will be executed
  }

  //this code nope
}
// exercise1()




/*Задача 2:
Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.
При ошибке нужно выводить сообщение и просить переввести выражение.
*/
function exercise2 (){

  function evalCalculator () {
    function getUserPrompt(){
      return prompt('Enter phraze to calc', 0)
    }
    try{
      var result = eval(getUserPrompt());
      if (typeof result !== 'number' || isNaN(result) !== false) {
        throw new Error('Incorrect data')
      };
      console.log(result);
      return result;

    } catch(e){
      console.log("Sorry, there is a " + e.name + "\n" + e.message);
      evalCalculator()
    }
  }

  evalCalculator();
}

// exercise2();