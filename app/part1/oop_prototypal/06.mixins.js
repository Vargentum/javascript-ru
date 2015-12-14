'use strict';

/*Example 1: How to use mixins

1. Copy mixin into prototype
*/

function example1() {

  var SayHiMixin = {
    sayHi: function sayHi() {
      console.log('Hi ' + this.name);
    },
    sayBye: function sayBye() {
      console.log('Bye ' + this.name);
    }
  };

  function User(name) {
    this.name = name;
  }

  //1
  for (var prop in SayHiMixin) {
    User.prototype[prop] = SayHiMixin[prop];
  }

  var a = new User('Alfred');
  a.sayHi();
}
// example1()

/*Example 2: real-life mixin

Define eventMixin with methods on, off, and trigger

on - add eventName and it's handler to defended property _eventHandlers,
that contains evenNames array with handlers into it
!Take care of empty cases

off - remove selected handler from current event handlers array

trigger - call ALL handlers for selected eventName
take care of empty states


*/
function example2() {

  var eventMixin = {

    //on('click', function(){...})
    on: function on(eventName, handler) {

      if (!this._eventHandlers) {
        this._eventHandlers = {};
      }
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },

    //off('click', handler)
    off: function off(eventName, handler) {
      var pos = this._eventHandlers[eventName].indexOf(handler);
      if (pos !== -1) {
        this._eventHandlers.splice(pos, 1);
      }
    },

    //trigger('click')
    trigger: function trigger(eventName) {
      var _this = this,
          _arguments = arguments;

      var evt = this._eventHandlers[eventName];

      if (this._eventHandlers.length > 0 && evt) {
        evt.forEach(function (handler) {
          handler.apply(_this, _arguments);
        });
      }
    }

  };
}
// example2()

/*There are some mistakes at example 2: correct them

off: 
 - check handlers array excistence
 - remove all handlers similar to proven argument, not only the first one

trigger:
 - flatten the structure - user inverted value and return 
 - not pass the eventName arugment to handler applying
*/

function example21() {

  var eventMixin = {

    //on('click', function(){...})
    on: function on(eventName, handler) {

      if (!this._eventHandlers) {
        this._eventHandlers = {};
      }
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },

    //off('click', handler)
    off: function off(eventName, handler) {
      var handlers = this._eventHandlers && this._eventHandlers[eventName];

      if (!handlers) return;

      this._eventHandlers[eventName] = handlers.filter(function (h) {
        h !== handler;
      });
    },

    //trigger('click', [args])
    trigger: function trigger(eventName) {
      var _this2 = this,
          _arguments2 = arguments;

      var handlers = this._eventHandlers && this._eventHandlers[eventName];

      if (!handlers) return;

      handlers.forEach(function (handler) {
        //[].slice.call(arguments, 1) === arguments.slice(1)

        handler.apply(_this2, [].slice.call(_arguments2, 1));
      });
    }

  };

  // Класс Menu с примесью eventMixin
  // Генерирует событие select при выборе значения
  // Создадим меню
  // При наступлении события select вызвать эту функцию
  // Запускаем выбор (событие select вызовет обработчики)

  function Menu() {}

  for (var key in eventMixin) {
    Menu.prototype[key] = eventMixin[key];
  }

  Menu.prototype.choose = function (val) {
    this.trigger('select', val); // trigger method select with argument val
  };

  var menu = new Menu();

  menu.on('select', function (val) {
    console.log('Выбранно значение: ' + val);
  });

  menu.choose('125');
}

example21();
//# sourceMappingURL=data:application/json;base64,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LEdBQUcsRUFBRTtBQUM5QixXQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxDQUFBO0dBQ3pDLENBQUMsQ0FBQzs7QUFFSCxNQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0NBRW5COztBQUVELFNBQVMsRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQxL29vcF9wcm90b3R5cGFsLzA2Lm1peGlucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRXhhbXBsZSAxOiBIb3cgdG8gdXNlIG1peGluc1xuXG4xLiBDb3B5IG1peGluIGludG8gcHJvdG90eXBlXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIFxuICB2YXIgU2F5SGlNaXhpbiA9IHtcbiAgICBzYXlIaTogZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coJ0hpICcgKyB0aGlzLm5hbWUpO30sXG4gICAgc2F5QnllOiBmdW5jdGlvbigpIHtjb25zb2xlLmxvZygnQnllICcgKyB0aGlzLm5hbWUpO30gIFxuICB9XG5cbiAgZnVuY3Rpb24gVXNlcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICB9XG5cbiAgLy8xXG4gIGZvciAodmFyIHByb3AgaW4gU2F5SGlNaXhpbikge1xuICAgIFVzZXIucHJvdG90eXBlW3Byb3BdID0gU2F5SGlNaXhpbltwcm9wXVxuICB9XG5cbiAgdmFyIGEgPSBuZXcgVXNlcignQWxmcmVkJylcbiAgYS5zYXlIaSgpXG5cbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cbi8qRXhhbXBsZSAyOiByZWFsLWxpZmUgbWl4aW5cblxuRGVmaW5lIGV2ZW50TWl4aW4gd2l0aCBtZXRob2RzIG9uLCBvZmYsIGFuZCB0cmlnZ2VyXG5cbm9uIC0gYWRkIGV2ZW50TmFtZSBhbmQgaXQncyBoYW5kbGVyIHRvIGRlZmVuZGVkIHByb3BlcnR5IF9ldmVudEhhbmRsZXJzLFxudGhhdCBjb250YWlucyBldmVuTmFtZXMgYXJyYXkgd2l0aCBoYW5kbGVycyBpbnRvIGl0XG4hVGFrZSBjYXJlIG9mIGVtcHR5IGNhc2VzXG5cbm9mZiAtIHJlbW92ZSBzZWxlY3RlZCBoYW5kbGVyIGZyb20gY3VycmVudCBldmVudCBoYW5kbGVycyBhcnJheVxuXG50cmlnZ2VyIC0gY2FsbCBBTEwgaGFuZGxlcnMgZm9yIHNlbGVjdGVkIGV2ZW50TmFtZVxudGFrZSBjYXJlIG9mIGVtcHR5IHN0YXRlc1xuXG5cbiovXG5mdW5jdGlvbiBleGFtcGxlMigpIHtcblxuICB2YXIgZXZlbnRNaXhpbiA9IHtcblxuICAgICAgLy9vbignY2xpY2snLCBmdW5jdGlvbigpey4uLn0pXG4gICAgICBvbjogZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cbiAgICAgICAgaWYoIXRoaXMuX2V2ZW50SGFuZGxlcnMpIHtcbiAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzID0ge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcilcbiAgICAgIH0sXG5cblxuICAgICAgLy9vZmYoJ2NsaWNrJywgaGFuZGxlcilcbiAgICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBwb3MgPSB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0uaW5kZXhPZihoYW5kbGVyKVxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc3BsaWNlKHBvcywgMSkgIFxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvL3RyaWdnZXIoJ2NsaWNrJylcbiAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdXG5cbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50SGFuZGxlcnMubGVuZ3RoID4gMCAmJiBldnQpIHtcbiAgICAgICAgICBldnQuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICB9XG5cblxufVxuLy8gZXhhbXBsZTIoKVxuXG5cblxuLypUaGVyZSBhcmUgc29tZSBtaXN0YWtlcyBhdCBleGFtcGxlIDI6IGNvcnJlY3QgdGhlbVxuXG5vZmY6IFxuIC0gY2hlY2sgaGFuZGxlcnMgYXJyYXkgZXhjaXN0ZW5jZVxuIC0gcmVtb3ZlIGFsbCBoYW5kbGVycyBzaW1pbGFyIHRvIHByb3ZlbiBhcmd1bWVudCwgbm90IG9ubHkgdGhlIGZpcnN0IG9uZVxuXG50cmlnZ2VyOlxuIC0gZmxhdHRlbiB0aGUgc3RydWN0dXJlIC0gdXNlciBpbnZlcnRlZCB2YWx1ZSBhbmQgcmV0dXJuIFxuIC0gbm90IHBhc3MgdGhlIGV2ZW50TmFtZSBhcnVnbWVudCB0byBoYW5kbGVyIGFwcGx5aW5nXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMjEoKSB7XG5cbiAgdmFyIGV2ZW50TWl4aW4gPSB7XG5cbiAgICAgIC8vb24oJ2NsaWNrJywgZnVuY3Rpb24oKXsuLi59KVxuICAgICAgb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXG4gICAgICAgIGlmKCF0aGlzLl9ldmVudEhhbmRsZXJzKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycyA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpXG4gICAgICB9LFxuXG5cbiAgICAgIC8vb2ZmKCdjbGljaycsIGhhbmRsZXIpXG4gICAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzICYmIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXVxuXG4gICAgICAgIGlmICghaGFuZGxlcnMpIHJldHVyblxuXG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IGhhbmRsZXJzLmZpbHRlciggaCA9PiB7XG4gICAgICAgICAgaCAhPT0gaGFuZGxlclxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgLy90cmlnZ2VyKCdjbGljaycsIFthcmdzXSlcbiAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzICYmIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXVxuXG4gICAgICAgIGlmICghaGFuZGxlcnMpIHJldHVyblxuXG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgLy9bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgPT09IGFyZ3VtZW50cy5zbGljZSgxKVxuXG4gICAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBcbiAgfVxuXG4gIC8vINCa0LvQsNGB0YEgTWVudSDRgSDQv9GA0LjQvNC10YHRjNGOIGV2ZW50TWl4aW5cbiAgLy8g0JPQtdC90LXRgNC40YDRg9C10YIg0YHQvtCx0YvRgtC40LUgc2VsZWN0INC/0YDQuCDQstGL0LHQvtGA0LUg0LfQvdCw0YfQtdC90LjRj1xuICAvLyDQodC+0LfQtNCw0LTQuNC8INC80LXQvdGOXG4gIC8vINCf0YDQuCDQvdCw0YHRgtGD0L/Qu9C10L3QuNC4INGB0L7QsdGL0YLQuNGPIHNlbGVjdCDQstGL0LfQstCw0YLRjCDRjdGC0YMg0YTRg9C90LrRhtC40Y5cbiAgLy8g0JfQsNC/0YPRgdC60LDQtdC8INCy0YvQsdC+0YAgKNGB0L7QsdGL0YLQuNC1IHNlbGVjdCDQstGL0LfQvtCy0LXRgiDQvtCx0YDQsNCx0L7RgtGH0LjQutC4KVxuXG4gIGZ1bmN0aW9uIE1lbnUoKSB7fVxuXG4gIGZvciAodmFyIGtleSBpbiBldmVudE1peGluKSB7XG4gICAgTWVudS5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XVxuICB9XG5cbiAgTWVudS5wcm90b3R5cGUuY2hvb3NlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdmFsKSAvLyB0cmlnZ2VyIG1ldGhvZCBzZWxlY3Qgd2l0aCBhcmd1bWVudCB2YWxcbiAgfVxuXG4gIHZhciBtZW51ID0gbmV3IE1lbnUoKVxuXG4gIG1lbnUub24oJ3NlbGVjdCcsIGZ1bmN0aW9uKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCfQktGL0LHRgNCw0L3QvdC+INC30L3QsNGH0LXQvdC40LU6ICcgKyB2YWwpXG4gIH0pO1xuXG4gIG1lbnUuY2hvb3NlKCcxMjUnKVxuXG59XG5cbmV4YW1wbGUyMSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
