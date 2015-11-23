/*Паттерн Модуль:

смысл: 
  - разделить внутренний и внешний интерфейс
  - запретить доступ извне к внутренним деталям реализации объекта: 
    переменным, вспомогательным функциям и т.п.

*/



// Вариант 1: с внутренним присвоением

(function (argument) {
  function moduleName(){}

  var privateValue = 'test'
  var privateMethod = function (argument) {/*private*/}

  moduleName.publicMethod = function (argument) {/*public*/}

  window.moduleName = moduleName; //присвоение
}())



// Вариант 2: Function Expression через return


var lodash = (function () { //*
  
  var privateValue = 'someValue';
  var privateMethod = function (argument) {/*private*/};

  return{ //*
    publicValue: "test",
    publicMethod: function (argument) {/*public*/}
  }
})();