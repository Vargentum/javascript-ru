"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

/*
  Destructuring - special assignment syntax
*/

/* array examples 
(use var instead of let to prevent errors with equal naming)
*/
function example1() {

  //simple
  var name = "vlad";
  var surname = "argentum";

  console.log(name, surname); //vlad argentum

  // you can skip some values
  var _ref = ["vlad", "argentum", "web-developer", 26];
  var position = _ref[2];

  console.log(position); //web-developer

  //no error when assign empty values
  var _ref2 = [];
  var name = _ref2[0];
  var surname = _ref2[1];

  console.log(name, surname); //undefined undefined

  //you can add values by default
  var _ref3 = [];
  var _ref3$ = _ref3[0];
  var name = _ref3$ === undefined ? "Guest" : _ref3$;
  var _ref3$2 = _ref3[1];
  var surname = _ref3$2 === undefined ? "Anonymous" : _ref3$2;

  console.log(name, surname); //Guest Anonymous

  //default can be any expression, even function
  function getSurName() {
    return Date.now() + '-visitor';
  }
  var _ref4 = ["vlad"];
  var name = _ref4[0];
  var _ref4$ = _ref4[1];
  var surname = _ref4$ === undefined ? getSurName() : _ref4$;

  console.log(name, surname); //vlad nnnnnnnnnnn-visitor
}
// example1()

/*Object examples
(use var instead of let to prevent errors with equal naming)
*/
function example2() {

  var me = {
    name: "vlad",
    surname: "argentum",
    position: "web-developer"
  };

  //base object destructuring
  var name = me.name;
  var surname = me.surname;

  console.log(name, surname); //vlad argentum

  //custom variable assigning
  var nm = me.name;
  var snm = me.surname;

  console.log(nm, snm); //vlad argentum

  //default values
  var _ref5 = {};
  var _ref5$name = _ref5.name;
  var name = _ref5$name === undefined ? "Guest" : _ref5$name;
  var _ref5$surname = _ref5.surname;
  var surname = _ref5$surname === undefined ? "Anon" : _ref5$surname;

  console.log(name, surname); //Guest Anon

  //custom default values
  var _ref6 = {};
  var _ref6$name = _ref6.name;
  var nm = _ref6$name === undefined ? "Guest" : _ref6$name;
  var _ref6$surname = _ref6.surname;
  var snm = _ref6$surname === undefined ? "Anon" : _ref6$surname;

  console.log(nm, snm); //Guest Anon

  /*
    spread operator: 
      - only with Babel Exprimental features enable
      - by default caused to error
  */
  // let {name, ...rest} = me
}
// example2()

/*
  Destructuring without definition
*/
function example3() {
  var a = undefined,
      b = undefined;

  /*
    {a, b} = {a:1, b:2}
    this is causes to error, because interpreter treats
    {...} as a block
  */

  //correct usage
  var _a$b = { a: 1, b: 2 };
  a = _a$b.a;
  b = _a$b.b;
}

/*
  Nested destructuring
*/
function example4() {

  var options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Salad", "Apple"]
  };

  var _options$title = options.title;
  var title = _options$title === undefined ? "Menu" : _options$title;
  var _options$size = options.size;
  var w = _options$size.width;
  var h = _options$size.height;

  var _options$items = _slicedToArray(options.items, 2);

  var a = _options$items[0];
  var b = _options$items[1];

  console.log(title);
  console.log(w, h);
  console.log(a, b);
}
// example4()
//# sourceMappingURL=data:application/json;base64,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QUFDLENBQUM7O0FBQ3ZELFNBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FFbkI7O0FBQUEiLCJmaWxlIjoiZXMyMDE1LzAyLmRlc3RydWN0dXJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBEZXN0cnVjdHVyaW5nIC0gc3BlY2lhbCBhc3NpZ25tZW50IHN5bnRheFxuKi9cblxuLyogYXJyYXkgZXhhbXBsZXMgXG4odXNlIHZhciBpbnN0ZWFkIG9mIGxldCB0byBwcmV2ZW50IGVycm9ycyB3aXRoIGVxdWFsIG5hbWluZylcbiovXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIFxuICAvL3NpbXBsZVxuICB2YXIgW25hbWUsIHN1cm5hbWVdID0gW1widmxhZFwiLCBcImFyZ2VudHVtXCJdXG4gIGNvbnNvbGUubG9nKG5hbWUsIHN1cm5hbWUpOyAvL3ZsYWQgYXJnZW50dW1cblxuICBcbiAgLy8geW91IGNhbiBza2lwIHNvbWUgdmFsdWVzXG4gIHZhciBbLCAsIHBvc2l0aW9uXSA9IFtcInZsYWRcIiwgXCJhcmdlbnR1bVwiLCBcIndlYi1kZXZlbG9wZXJcIiwgMjZdXG4gIGNvbnNvbGUubG9nKHBvc2l0aW9uKTsgLy93ZWItZGV2ZWxvcGVyXG5cblxuICAvL25vIGVycm9yIHdoZW4gYXNzaWduIGVtcHR5IHZhbHVlc1xuICB2YXIgW25hbWUsIHN1cm5hbWVdID0gW11cbiAgY29uc29sZS5sb2cobmFtZSwgc3VybmFtZSk7IC8vdW5kZWZpbmVkIHVuZGVmaW5lZFxuXG4gIFxuICAvL3lvdSBjYW4gYWRkIHZhbHVlcyBieSBkZWZhdWx0XG4gIHZhciBbbmFtZT1cIkd1ZXN0XCIsIHN1cm5hbWU9XCJBbm9ueW1vdXNcIl0gPSBbXVxuICBjb25zb2xlLmxvZyhuYW1lLCBzdXJuYW1lKTsgLy9HdWVzdCBBbm9ueW1vdXNcblxuXG4gIC8vZGVmYXVsdCBjYW4gYmUgYW55IGV4cHJlc3Npb24sIGV2ZW4gZnVuY3Rpb25cbiAgZnVuY3Rpb24gZ2V0U3VyTmFtZSAoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyAnLXZpc2l0b3InXG4gIH1cbiAgdmFyIFtuYW1lLCBzdXJuYW1lPWdldFN1ck5hbWUoKV0gPSBbXCJ2bGFkXCJdXG4gIGNvbnNvbGUubG9nKG5hbWUsIHN1cm5hbWUpOyAgICAvL3ZsYWQgbm5ubm5ubm5ubm4tdmlzaXRvclxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLypPYmplY3QgZXhhbXBsZXNcbih1c2UgdmFyIGluc3RlYWQgb2YgbGV0IHRvIHByZXZlbnQgZXJyb3JzIHdpdGggZXF1YWwgbmFtaW5nKVxuKi9cbmZ1bmN0aW9uIGV4YW1wbGUyICgpIHtcblxuICB2YXIgbWUgPSB7XG4gICAgbmFtZTogXCJ2bGFkXCIsXG4gICAgc3VybmFtZTogXCJhcmdlbnR1bVwiLFxuICAgIHBvc2l0aW9uOiBcIndlYi1kZXZlbG9wZXJcIlxuICB9XG5cbiAgLy9iYXNlIG9iamVjdCBkZXN0cnVjdHVyaW5nXG4gIHZhciB7bmFtZSwgc3VybmFtZX0gPSBtZVxuICBjb25zb2xlLmxvZyhuYW1lLCBzdXJuYW1lKTsgLy92bGFkIGFyZ2VudHVtXG5cblxuICAvL2N1c3RvbSB2YXJpYWJsZSBhc3NpZ25pbmdcbiAgdmFyIHtuYW1lOiBubSwgc3VybmFtZTogc25tfSA9IG1lXG4gIGNvbnNvbGUubG9nKG5tLCBzbm0pOy8vdmxhZCBhcmdlbnR1bVxuXG5cbiAgLy9kZWZhdWx0IHZhbHVlc1xuICB2YXIge25hbWU9XCJHdWVzdFwiLCBzdXJuYW1lPVwiQW5vblwifSA9IHt9XG4gIGNvbnNvbGUubG9nKG5hbWUsIHN1cm5hbWUpOyAgLy9HdWVzdCBBbm9uXG5cblxuICAvL2N1c3RvbSBkZWZhdWx0IHZhbHVlcyBcbiAgdmFyIHtuYW1lOm5tPVwiR3Vlc3RcIiwgc3VybmFtZTpzbm09XCJBbm9uXCJ9ID0ge31cbiAgY29uc29sZS5sb2cobm0sIHNubSk7ICAvL0d1ZXN0IEFub25cblxuXG4gIC8qXG4gICAgc3ByZWFkIG9wZXJhdG9yOiBcbiAgICAgIC0gb25seSB3aXRoIEJhYmVsIEV4cHJpbWVudGFsIGZlYXR1cmVzIGVuYWJsZVxuICAgICAgLSBieSBkZWZhdWx0IGNhdXNlZCB0byBlcnJvclxuICAqL1xuICAvLyBsZXQge25hbWUsIC4uLnJlc3R9ID0gbWVcblxufVxuLy8gZXhhbXBsZTIoKVxuXG5cblxuLypcbiAgRGVzdHJ1Y3R1cmluZyB3aXRob3V0IGRlZmluaXRpb25cbiovXG5mdW5jdGlvbiBleGFtcGxlMyAoKSB7XG4gIGxldCBhLCBiO1xuXG4gIC8qXG4gICAge2EsIGJ9ID0ge2E6MSwgYjoyfVxuICAgIHRoaXMgaXMgY2F1c2VzIHRvIGVycm9yLCBiZWNhdXNlIGludGVycHJldGVyIHRyZWF0c1xuICAgIHsuLi59IGFzIGEgYmxvY2tcbiAgKi9cblxuICAoe2EsIGJ9ID0ge2E6MSwgYjoyfSkgLy9jb3JyZWN0IHVzYWdlXG59XG5cblxuXG4vKlxuICBOZXN0ZWQgZGVzdHJ1Y3R1cmluZ1xuKi9cbmZ1bmN0aW9uIGV4YW1wbGU0ICgpIHtcbiAgXG4gIGxldCBvcHRpb25zID0ge1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBoZWlnaHQ6IDIwMFxuICAgIH0sXG4gICAgaXRlbXM6IFtcIlNhbGFkXCIsIFwiQXBwbGVcIl1cbiAgfVxuXG4gIGxldCB7dGl0bGU9XCJNZW51XCIsIHNpemU6e3dpZHRoOncsIGhlaWdodDpofSwgaXRlbXM6W2EsYl19ID0gb3B0aW9uc1xuICBjb25zb2xlLmxvZyh0aXRsZSk7XG4gIGNvbnNvbGUubG9nKHcsIGgpO1xuICBjb25zb2xlLmxvZyhhLCBiKTtcblxufVxuLy8gZXhhbXBsZTQoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
