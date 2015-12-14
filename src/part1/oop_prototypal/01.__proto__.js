/*Task 1:
organize the prototypal chain: pockets -> bed -> table -> head
*/

function task1 () {

  var head = {
    glasses: 1
  };

  var table = {
    __proto__: head,
    pen: 3
  };

  var bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
  };

  var pockets = {
    __proto__: bed,
    money: 2000
  };

}
// task1()


/*Task: 2

add defer(ms) method to function prototype,
it provide ms delay for function execution
*/
function task2 () {

  Function.prototype.defer = function (ms) {

    // setTimeout(function() {
    //   this.apply(this, arguments)
    // }.bind(this), ms)

    //Keep it simple!!!
    setTimeout(this, ms)

  }

  function f() {
    console.log("hello")
  }
  f.defer(3000)
}
// task2()


/*Task: 3

пусть defer возвращает обертку, которая откладывает вызов на ms
*/
function task3 () {

  Function.prototype.defer = function (ms) {
    var f = this; // save function

    return function(){
      var self = this
      var args = arguments; //save proper context and arguments

      setTimeout(function(){
        f.apply(this, args) // forwarding
      }, ms)
    }
  }

  function f(a,b) {
    console.log(a + b)
  }
  f.defer(1000)(1,2)
}
task3()
