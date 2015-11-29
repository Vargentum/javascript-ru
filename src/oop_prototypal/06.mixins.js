/*Example 1: How to use mixins

1. Copy mixin into prototype
*/

function example1 () {
  
  var SayHiMixin = {
    sayHi: function() {console.log('Hi ' + this.name);},
    sayBye: function() {console.log('Bye ' + this.name);}  
  }

  function User(name) {
    this.name = name
  }

  //1
  for (var prop in SayHiMixin) {
    User.prototype[prop] = SayHiMixin[prop]
  }

  var a = new User('Alfred')
  a.sayHi()

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
      on: function(eventName, handler) {

        if(!this._eventHandlers) {
          this._eventHandlers = {}
        }
        if (!this._eventHandlers[eventName]) {
          this._eventHandlers[eventName] = []
        }
        this._eventHandlers[eventName].push(handler)
      },


      //off('click', handler)
      off: function(eventName, handler) {
        var pos = this._eventHandlers[eventName].indexOf(handler)
        if (pos !== -1) {
          this._eventHandlers.splice(pos, 1)  
        }
      },

      //trigger('click')
      trigger: function(eventName) {
        var evt = this._eventHandlers[eventName]

        if (this._eventHandlers.length > 0 && evt) {
          evt.forEach(handler => {
            handler.apply(this, arguments)
          })
        }
      }
      
  }


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
      on: function(eventName, handler) {

        if(!this._eventHandlers) {
          this._eventHandlers = {}
        }
        if (!this._eventHandlers[eventName]) {
          this._eventHandlers[eventName] = []
        }
        this._eventHandlers[eventName].push(handler)
      },


      //off('click', handler)
      off: function(eventName, handler) {
        var handlers = this._eventHandlers && this._eventHandlers[eventName]

        if (!handlers) return

        this._eventHandlers[eventName] = handlers.filter( h => {
          h !== handler
        })
      },

      //trigger('click', [args])
      trigger: function(eventName) {
        var handlers = this._eventHandlers && this._eventHandlers[eventName]

        if (!handlers) return

        handlers.forEach(handler => {
          //[].slice.call(arguments, 1) === arguments.slice(1)

          handler.apply(this, [].slice.call(arguments, 1))
        })
      }
      
  }

  // Класс Menu с примесью eventMixin
  // Генерирует событие select при выборе значения
  // Создадим меню
  // При наступлении события select вызвать эту функцию
  // Запускаем выбор (событие select вызовет обработчики)

  function Menu() {}

  for (var key in eventMixin) {
    Menu.prototype[key] = eventMixin[key]
  }

  Menu.prototype.choose = function (val) {
    this.trigger('select', val) // trigger method select with argument val
  }

  var menu = new Menu()

  menu.on('select', function(val) {
    console.log('Выбранно значение: ' + val)
  });

  menu.choose('125')

}

example21()