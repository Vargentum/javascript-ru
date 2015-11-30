"use strict";

/*LET: 

differences from var
*/

/*
  1. let is block scoped {...}
*/

function example1() {
  var a = 1;

  if (true) {
    var a = 10;
    console.log(a); //10
  };

  console.log(a); //10: variable inside block rewrite outside one

  var b = 1;

  if (true) {
    var _b = 10;
    console.log(_b); //10
  };

  console.log(b); // 1:

  /*
  we have two definitions of b: global, and local inside if block
  hint: if you remove first definition, it causes to error
  */
}
// example1()

/*
  2. let is visible only after defining
  * not work in babel, but standart
*/

function example2() {

  console.log(a); // return undefined (no error)
  var a = 1;

  console.log(b); // * Error: variable isn't defined
  var b = 2;
}
// example2()

/*
  3. can't be redefined in single scope
  * Babel errors when compiling
*/

function example3() {
  var a = 1;
  // let a = 2 // * Error
}
// example3()

/* !!! Most important
  4. for each iteration in cycle, independent variable has been created

  * Easy solve classic clojure iteration problem,
    if it was 'var i', the result will be always 10,
    and you have to use clojure to deal with this.

*/

function example4() {

  function makeArmy() {
    var shooters = [];

    var _loop = function _loop(i) {
      //*
      shooters.push(function () {
        alert(i); // выводит свой номер
      });
    };

    for (var i = 0; i < 10; i++) {
      _loop(i);
    }
    return shooters;
  }

  var army = makeArmy();
  army[0](); // 0
  army[5](); // 5
}
// example4()

/*CONST: 

  - cant be redefined
  -in other - similar to let

  * babel compile error  
*/

function exaqmple5() {
  var b = 1;
  // b = 10 // * Error:e b is read-only
}

/*
  Const and reference types
  
  Pay attention that if const used with reference type objects,
  we can change object by referece, but can't change referece itself.
  */

function example6() {
  var o = { a: 1 };
  o.a = 2; //allowed: change ref object
  o.b = 1; //allowed: change ref object

  // o = {a: 1} //not allowed: change referece itself
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLmxldF9jb25zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVBLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFVCxNQUFJLElBQUksRUFBRTtBQUNSLFFBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNWLFdBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUMsR0FDaEIsQ0FBQzs7QUFFRixTQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFBQyxBQUdmLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFVCxNQUFJLElBQUksRUFBRTtBQUNSLFFBQUksRUFBQyxHQUFHLEVBQUUsQ0FBQTtBQUNWLFdBQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0FBQUMsR0FDaEIsQ0FBQzs7QUFFRixTQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0NBT2Y7QUFQZ0I7Ozs7Ozs7QUFPaEIsQUFVRCxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFBQyxBQUNmLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFVCxTQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFDLEFBQ2YsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0NBQ1Y7Ozs7Ozs7O0FBQUEsQUFTRCxTQUFTLFFBQVEsR0FBSTtBQUNuQixNQUFJLENBQUMsR0FBRyxDQUFDOztBQUFBLENBRVY7Ozs7Ozs7Ozs7OztBQUFBLEFBYUQsU0FBUyxRQUFRLEdBQUk7O0FBRW5CLFdBQVMsUUFBUSxHQUFHO0FBQ2xCLFFBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7K0JBRVQsQ0FBQzs7QUFDUixjQUFRLENBQUMsSUFBSSxDQUFDLFlBQVc7QUFDdkIsYUFBSyxDQUFFLENBQUMsQ0FBRTtBQUFDLE9BQ1osQ0FBQyxDQUFDOzs7QUFITCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQXBCLENBQUM7S0FJVDtBQUNELFdBQU8sUUFBUSxDQUFDO0dBQ2pCOztBQUVELE1BQUksSUFBSSxHQUFHLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLE1BQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUFDLEFBQ1YsTUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQUMsQ0FDWDs7Ozs7Ozs7Ozs7QUFBQSxBQWVELFNBQVMsU0FBUyxHQUFJO0FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7O0FBQUEsQ0FFWjs7Ozs7Ozs7O0FBQUEsQUFVRCxTQUFTLFFBQVEsR0FBSTtBQUNuQixNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQTtBQUNoQixHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFBQSxBQUNQLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7O0FBQUEsQ0FHUiIsImZpbGUiOiJlczIwMTUvMDEubGV0X2NvbnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypMRVQ6IFxuXG5kaWZmZXJlbmNlcyBmcm9tIHZhclxuKi9cblxuXG4vKlxuICAxLiBsZXQgaXMgYmxvY2sgc2NvcGVkIHsuLi59XG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIHZhciBhID0gMVxuXG4gIGlmICh0cnVlKSB7XG4gICAgdmFyIGEgPSAxMFxuICAgIGNvbnNvbGUubG9nKGEpOyAvLzEwIFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKGEpOyAvLzEwOiB2YXJpYWJsZSBpbnNpZGUgYmxvY2sgcmV3cml0ZSBvdXRzaWRlIG9uZVxuXG5cbiAgbGV0IGIgPSAxXG5cbiAgaWYgKHRydWUpIHtcbiAgICBsZXQgYiA9IDEwXG4gICAgY29uc29sZS5sb2coYik7IC8vMTBcbiAgfTtcblxuICBjb25zb2xlLmxvZyhiKTsgLy8gMTogXG5cbiAgLypcbiAgd2UgaGF2ZSB0d28gZGVmaW5pdGlvbnMgb2YgYjogZ2xvYmFsLCBhbmQgbG9jYWwgaW5zaWRlIGlmIGJsb2NrXG4gIGhpbnQ6IGlmIHlvdSByZW1vdmUgZmlyc3QgZGVmaW5pdGlvbiwgaXQgY2F1c2VzIHRvIGVycm9yXG4gICovXG4gIFxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLypcbiAgMi4gbGV0IGlzIHZpc2libGUgb25seSBhZnRlciBkZWZpbmluZ1xuICAqIG5vdCB3b3JrIGluIGJhYmVsLCBidXQgc3RhbmRhcnRcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUyICgpIHtcbiAgXG4gIGNvbnNvbGUubG9nKGEpOyAvLyByZXR1cm4gdW5kZWZpbmVkIChubyBlcnJvcilcbiAgdmFyIGEgPSAxXG5cbiAgY29uc29sZS5sb2coYik7IC8vICogRXJyb3I6IHZhcmlhYmxlIGlzbid0IGRlZmluZWRcbiAgbGV0IGIgPSAyXG59XG4vLyBleGFtcGxlMigpXG5cblxuLypcbiAgMy4gY2FuJ3QgYmUgcmVkZWZpbmVkIGluIHNpbmdsZSBzY29wZVxuICAqIEJhYmVsIGVycm9ycyB3aGVuIGNvbXBpbGluZ1xuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTMgKCkge1xuICBsZXQgYSA9IDFcbiAgLy8gbGV0IGEgPSAyIC8vICogRXJyb3Jcbn1cbi8vIGV4YW1wbGUzKClcblxuXG4vKiAhISEgTW9zdCBpbXBvcnRhbnRcbiAgNC4gZm9yIGVhY2ggaXRlcmF0aW9uIGluIGN5Y2xlLCBpbmRlcGVuZGVudCB2YXJpYWJsZSBoYXMgYmVlbiBjcmVhdGVkXG5cbiAgKiBFYXN5IHNvbHZlIGNsYXNzaWMgY2xvanVyZSBpdGVyYXRpb24gcHJvYmxlbSxcbiAgICBpZiBpdCB3YXMgJ3ZhciBpJywgdGhlIHJlc3VsdCB3aWxsIGJlIGFsd2F5cyAxMCxcbiAgICBhbmQgeW91IGhhdmUgdG8gdXNlIGNsb2p1cmUgdG8gZGVhbCB3aXRoIHRoaXMuXG5cbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGU0ICgpIHtcbiAgICBcbiAgZnVuY3Rpb24gbWFrZUFybXkoKSB7XG4gICAgbGV0IHNob290ZXJzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8qXG4gICAgICBzaG9vdGVycy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBhbGVydCggaSApOyAvLyDQstGL0LLQvtC00LjRgiDRgdCy0L7QuSDQvdC+0LzQtdGAXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNob290ZXJzO1xuICB9XG5cbiAgdmFyIGFybXkgPSBtYWtlQXJteSgpO1xuICBhcm15WzBdKCk7IC8vIDBcbiAgYXJteVs1XSgpOyAvLyA1XG59XG4vLyBleGFtcGxlNCgpXG5cblxuXG5cblxuLypDT05TVDogXG5cbiAgLSBjYW50IGJlIHJlZGVmaW5lZFxuICAtaW4gb3RoZXIgLSBzaW1pbGFyIHRvIGxldFxuXG4gICogYmFiZWwgY29tcGlsZSBlcnJvciAgXG4qL1xuXG5mdW5jdGlvbiBleGFxbXBsZTUgKCkge1xuICBjb25zdCBiID0gMVxuICAvLyBiID0gMTAgLy8gKiBFcnJvcjplIGIgaXMgcmVhZC1vbmx5XG59XG5cblxuLypcbiAgQ29uc3QgYW5kIHJlZmVyZW5jZSB0eXBlc1xuICBcbiAgUGF5IGF0dGVudGlvbiB0aGF0IGlmIGNvbnN0IHVzZWQgd2l0aCByZWZlcmVuY2UgdHlwZSBvYmplY3RzLFxuICB3ZSBjYW4gY2hhbmdlIG9iamVjdCBieSByZWZlcmVjZSwgYnV0IGNhbid0IGNoYW5nZSByZWZlcmVjZSBpdHNlbGYuXG4gICovXG5cbmZ1bmN0aW9uIGV4YW1wbGU2ICgpIHtcbiAgY29uc3QgbyA9IHthOiAxfVxuICBvLmEgPSAyIC8vYWxsb3dlZDogY2hhbmdlIHJlZiBvYmplY3RcbiAgby5iID0gMSAvL2FsbG93ZWQ6IGNoYW5nZSByZWYgb2JqZWN0XG5cbiAgLy8gbyA9IHthOiAxfSAvL25vdCBhbGxvd2VkOiBjaGFuZ2UgcmVmZXJlY2UgaXRzZWxmXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
