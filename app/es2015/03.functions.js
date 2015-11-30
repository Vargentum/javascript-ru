"use strict";

/*
  Default parameters: base example
*/

function example1() {

  function hi() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? "Guest" : arguments[0];

    console.log("Hello, " + name);
  }

  hi(); // Hello, Guest
  hi('Vlad'); // Hello, Vlad
}
// example1()

/*
  Default parameters: expression example
*/

function example2() {

  function hi() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? getName().toUpperCase() : arguments[0];

    console.log("Hello, " + name);
  }

  function getName() {
    if (true) {
      return "Anon";
    };
  }

  hi(); // Hello, ANON
  hi('Vlad'); // Hello, Vlad
}
// example2()

/*
  Spread operator

  info: fullName instead of arguments is full-functional Array
*/
function example3() {

  function hi() {
    for (var _len = arguments.length, fullName = Array(_len), _key = 0; _key < _len; _key++) {
      fullName[_key] = arguments[_key];
    }

    console.log(fullName.join(' '));
  }

  hi('vlad', 'argentum');
}
// example3()

/*
  Destructuring in params: all features available
*/
function example4() {

  var me = {
    name: "Vlad",
    surname: "Argentum"
  };

  function hi(_ref) {
    var _ref$name = _ref.name;
    var name = _ref$name === undefined ? "Guest" : _ref$name;
    var _ref$surname = _ref.surname;
    var s = _ref$surname === undefined ? "Anon" : _ref$surname;

    console.log("Hi, " + name + " " + s);
  }

  hi({}); //Guest Anon
  hi(me); //Vlad Argentum

  //even can call without params
  function hi() {
    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref2$name = _ref2.name;
    var name = _ref2$name === undefined ? "No" : _ref2$name;
    var _ref2$surname = _ref2.surname;
    var s = _ref2$surname === undefined ? "Params" : _ref2$surname;

    console.log("Hi, " + name + " " + s);
  }
  hi(); //No Params
}
// example4()

/*
  Function name property
*/
function example5() {

  function a() {} // a.name === 'a'

  var z = function b() {}; // b.name === 'b'

  //smart name assigning

  var c = function c() {};
  console.log(c.name); // c

  var user = {
    sayHi: function sayHi() {} //sayHi.name === 'sayHi'
  };
}
// example5()

/*
  Function Declaration are block scoped
*/
function example6() {

  if (true) {
    var sayHi = function sayHi() {
      return 'Hi';
    };

    sayHi();
  };

  // sayHi() // Error: sayHi is not defined
}
// example6()

/*
  Arrow Functions syntax
*/
function example7() {

  //base
  var inc = function inc(x) {
    return x + 1;
  };

  //self evaluated function
  var incEval = (function (x) {
    return x + 1;
  })();

  // add parenthes when no params
  var pi = function pi() {
    return 3.14;
  };

  // add parenthes when more then 1 param
  var sum = function sum(x, y) {
    return x + y;
  };

  // add curly brackets and explicit return, when multistring body
  var divide = function divide(x, y) {
    if (y !== 0) {
      return x / y;
    };
  };
}
// example7()

/*
  Arrow functions details
*/
function example8() {

  //useful for callbacks
  var arr = [5, 2, 4];
  var sorted = arr.sort(function (a, b) {
    return a - b;
  });

  console.log(sorted); // 2,4,5

  //Hasn't its own THIS: get it from outer function

  var group = {
    title: "Our command",
    users: [{
      name: "Alex"
    }, {
      name: "Bob"
    }, {
      name: "John"
    }],

    showList: function showList() {
      var _this = this;

      this.users.forEach(function (user) {
        console.log(_this.title + ": " + user.name); //this === group
      });
    }
  };
  group.showList();

  // Hasn't its own ARGUMENTS object. Get it from outer function

  function foo() {
    var _arguments = arguments;

    return (function () {
      return _arguments[0];
    })();
  }
  console.log(foo(123)); // 123
}
// example8()

/*
  Very useful for decorators: easy call forwarding
*/
function example9() {

  var sum = function sum(x, y) {
    console.log(x + y);
  };

  function delay(f, ms) {
    return function () {
      var _this2 = this,
          _arguments2 = arguments;

      setTimeout(function () {
        return f.apply(_this2, _arguments2);
      }, ms);
    };
  }

  var d = delay(sum, 5000);
  d(1, 2);
}
example9();
//# sourceMappingURL=data:application/json;base64,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QUNkLFdBQU8sQ0FBQzthQUFNLFdBQVUsQ0FBQyxDQUFDO01BQUEsRUFBRyxDQUFBO0dBQzlCO0FBQ0QsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxDQUN0Qjs7Ozs7O0FBQUEsQUFRRCxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUMsRUFBSztBQUNsQixXQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtHQUNuQixDQUFBOztBQUVELFdBQVMsS0FBSyxDQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7QUFDckIsV0FBTyxZQUFVOzs7O0FBQ2YsZ0JBQVUsQ0FBQztlQUFNLENBQUMsQ0FBQyxLQUFLLHFCQUFpQjtPQUFBLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDL0MsQ0FBQTtHQUNGOztBQUVELE1BQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDeEIsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtDQUNQO0FBQ0QsUUFBUSxFQUFFLENBQUEiLCJmaWxlIjoiZXMyMDE1LzAzLmZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIERlZmF1bHQgcGFyYW1ldGVyczogYmFzZSBleGFtcGxlXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIFxuICBmdW5jdGlvbiBoaShuYW1lPVwiR3Vlc3RcIikge1xuICAgIGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfWApO1xuICB9XG5cbiAgaGkoKSAvLyBIZWxsbywgR3Vlc3RcbiAgaGkoJ1ZsYWQnKSAvLyBIZWxsbywgVmxhZFxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLypcbiAgRGVmYXVsdCBwYXJhbWV0ZXJzOiBleHByZXNzaW9uIGV4YW1wbGVcbiovXG5cblxuZnVuY3Rpb24gZXhhbXBsZTIgKCkge1xuICBcbiAgZnVuY3Rpb24gaGkobmFtZT1nZXROYW1lKCkudG9VcHBlckNhc2UoKSkge1xuICAgIGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfWApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICBpZiAodHJ1ZSkge3JldHVybiBcIkFub25cIn07XG4gIH1cblxuICBoaSgpIC8vIEhlbGxvLCBBTk9OXG4gIGhpKCdWbGFkJykgLy8gSGVsbG8sIFZsYWRcbn1cbi8vIGV4YW1wbGUyKClcblxuXG5cbi8qXG4gIFNwcmVhZCBvcGVyYXRvclxuXG4gIGluZm86IGZ1bGxOYW1lIGluc3RlYWQgb2YgYXJndW1lbnRzIGlzIGZ1bGwtZnVuY3Rpb25hbCBBcnJheVxuKi9cbmZ1bmN0aW9uIGV4YW1wbGUzICgpIHtcbiAgXG4gIGZ1bmN0aW9uIGhpICguLi5mdWxsTmFtZSkge1xuICAgIGNvbnNvbGUubG9nKGZ1bGxOYW1lLmpvaW4oJyAnKSk7XG4gIH0gXG5cbiAgaGkoJ3ZsYWQnLCAnYXJnZW50dW0nKSBcbn1cbi8vIGV4YW1wbGUzKClcblxuXG5cbi8qXG4gIERlc3RydWN0dXJpbmcgaW4gcGFyYW1zOiBhbGwgZmVhdHVyZXMgYXZhaWxhYmxlXG4qL1xuZnVuY3Rpb24gZXhhbXBsZTQgKCkge1xuICBcbiAgbGV0IG1lID0ge1xuICAgIG5hbWU6IFwiVmxhZFwiLFxuICAgIHN1cm5hbWU6IFwiQXJnZW50dW1cIlxuICB9XG5cbiAgZnVuY3Rpb24gaGkgKHtuYW1lPVwiR3Vlc3RcIiwgc3VybmFtZTpzPVwiQW5vblwifSkge1xuICAgIGNvbnNvbGUubG9nKGBIaSwgJHtuYW1lfSAke3N9YCk7XG4gIH1cblxuICBoaSh7fSkgLy9HdWVzdCBBbm9uXG4gIGhpKG1lKSAvL1ZsYWQgQXJnZW50dW1cblxuXG4gIC8vZXZlbiBjYW4gY2FsbCB3aXRob3V0IHBhcmFtc1xuICBmdW5jdGlvbiBoaSAoe25hbWU9XCJOb1wiLCBzdXJuYW1lOnM9XCJQYXJhbXNcIn0gPSB7fSkge1xuICAgIGNvbnNvbGUubG9nKGBIaSwgJHtuYW1lfSAke3N9YCk7XG4gIH1cbiAgaGkoKSAvL05vIFBhcmFtc1xufVxuLy8gZXhhbXBsZTQoKVxuXG5cblxuXG5cbi8qXG4gIEZ1bmN0aW9uIG5hbWUgcHJvcGVydHlcbiovXG5mdW5jdGlvbiBleGFtcGxlNSAoKSB7XG4gIFxuICBmdW5jdGlvbiBhICgpIHt9IC8vIGEubmFtZSA9PT0gJ2EnXG5cbiAgbGV0IHogPSBmdW5jdGlvbiBiKCkge30gLy8gYi5uYW1lID09PSAnYidcblxuXG4gIC8vc21hcnQgbmFtZSBhc3NpZ25pbmdcblxuICBsZXQgYyA9IGZ1bmN0aW9uKCkge31cbiAgY29uc29sZS5sb2coYy5uYW1lKTsgLy8gY1xuXG4gIGxldCB1c2VyID0ge1xuICAgIHNheUhpOiBmdW5jdGlvbiAoKSB7fSAvL3NheUhpLm5hbWUgPT09ICdzYXlIaSdcbiAgfVxuXG59XG4vLyBleGFtcGxlNSgpXG5cblxuXG5cbi8qXG4gIEZ1bmN0aW9uIERlY2xhcmF0aW9uIGFyZSBibG9jayBzY29wZWRcbiovXG5mdW5jdGlvbiBleGFtcGxlNiAoKSB7XG4gIFxuICBpZiAodHJ1ZSkge1xuICAgIGZ1bmN0aW9uIHNheUhpICgpIHsgcmV0dXJuICdIaSd9XG4gICAgc2F5SGkoKVxuICB9O1xuXG4gIC8vIHNheUhpKCkgLy8gRXJyb3I6IHNheUhpIGlzIG5vdCBkZWZpbmVkXG59XG4vLyBleGFtcGxlNigpXG5cblxuXG4vKlxuICBBcnJvdyBGdW5jdGlvbnMgc3ludGF4XG4qL1xuZnVuY3Rpb24gZXhhbXBsZTcgKCkge1xuXG4gIC8vYmFzZVxuICBsZXQgaW5jID0geCA9PiB4ICsgMVxuXG5cbiAgLy9zZWxmIGV2YWx1YXRlZCBmdW5jdGlvblxuICBsZXQgaW5jRXZhbCA9ICh4ID0+IHggKyAxKSgpXG5cblxuICAvLyBhZGQgcGFyZW50aGVzIHdoZW4gbm8gcGFyYW1zXG4gIGxldCBwaSA9ICgpID0+IDMuMTRcblxuXG4gIC8vIGFkZCBwYXJlbnRoZXMgd2hlbiBtb3JlIHRoZW4gMSBwYXJhbVxuICBsZXQgc3VtID0gKHgsIHkpID0+IHggKyB5XG5cblxuICAvLyBhZGQgY3VybHkgYnJhY2tldHMgYW5kIGV4cGxpY2l0IHJldHVybiwgd2hlbiBtdWx0aXN0cmluZyBib2R5XG4gIGxldCBkaXZpZGUgPSAoeCwgeSkgPT4ge1xuICAgIGlmICh5ICE9PSAwKSB7XG4gICAgICByZXR1cm4geCAvIHlcbiAgICB9O1xuICB9XG5cbn1cbi8vIGV4YW1wbGU3KClcblxuXG5cbi8qXG4gIEFycm93IGZ1bmN0aW9ucyBkZXRhaWxzXG4qL1xuZnVuY3Rpb24gZXhhbXBsZTggKCkge1xuICBcbiAgLy91c2VmdWwgZm9yIGNhbGxiYWNrc1xuICBsZXQgYXJyID0gWzUsMiw0XVxuICBsZXQgc29ydGVkID0gYXJyLnNvcnQoIChhLCBiKSA9PiBhIC0gYilcblxuICBjb25zb2xlLmxvZyhzb3J0ZWQpOyAvLyAyLDQsNVxuXG5cblxuICAvL0hhc24ndCBpdHMgb3duIFRISVM6IGdldCBpdCBmcm9tIG91dGVyIGZ1bmN0aW9uXG5cbiAgbGV0IGdyb3VwID0ge1xuICAgIHRpdGxlOiBcIk91ciBjb21tYW5kXCIsXG4gICAgdXNlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJBbGV4XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQm9iXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiSm9oblwiXG4gICAgICB9XG4gICAgXSxcblxuICAgIHNob3dMaXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy50aXRsZX06ICR7dXNlci5uYW1lfWApOyAvL3RoaXMgPT09IGdyb3VwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBncm91cC5zaG93TGlzdCgpXG5cblxuXG4gIC8vIEhhc24ndCBpdHMgb3duIEFSR1VNRU5UUyBvYmplY3QuIEdldCBpdCBmcm9tIG91dGVyIGZ1bmN0aW9uXG5cbiAgZnVuY3Rpb24gZm9vICgpIHtcbiAgICByZXR1cm4gKCgpID0+IGFyZ3VtZW50c1swXSkoKVxuICB9XG4gIGNvbnNvbGUubG9nKGZvbygxMjMpKSAvLyAxMjNcbn1cbi8vIGV4YW1wbGU4KClcblxuXG5cbi8qXG4gIFZlcnkgdXNlZnVsIGZvciBkZWNvcmF0b3JzOiBlYXN5IGNhbGwgZm9yd2FyZGluZ1xuKi9cbmZ1bmN0aW9uIGV4YW1wbGU5ICgpIHtcbiAgXG4gIGxldCBzdW0gPSAoeCwgeSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHggKyB5KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsYXkgKGYsIG1zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGYuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgbXMpICBcbiAgICB9XG4gIH1cblxuICBsZXQgZCA9IGRlbGF5KHN1bSwgNTAwMClcbiAgZCgxLDIpXG59XG5leGFtcGxlOSgpXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
