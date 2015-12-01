"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  Property improvements
*/

//short property notation

function example1() {

  var name = "Vlad";
  var surname = "Argentum";

  var me = { name: name, surname: surname }; //equal to {name: name, surname: surname}
  console.log(me);
}
// example1()

//expression key notation

function example2() {
  var _object;

  var a = "about";
  var j = a + "_job";

  var object = (_object = {}, _defineProperty(_object, a, "description"), _defineProperty(_object, j, 'some text'), _object);

  console.log(object);
}
// example2()

/*
  Prototype get/set
*/

function example3() {

  Object.getPrototypeOf(obj);
  Object.setPrototypeOf(obj, newProto); //can be used instead of Object.create(proto)
}
// example3()

/*
  Object.assign(obj, o1, o2, ... oN) 
  - merges properties to obj from o1, o2, ... oN
  - modify the first argument


*/

function example4() {

  var body = { name: "John", surname: "Doe", gender: "man" };
  var b = { isDead: true, legs: [1, 1] };
  var c = { name: "Jane", gender: "woman" };

  Object.assign(body, b, c);
  console.log(body);

  //useful for 1-lvl deep cloning

  var clone = Object.assign({}, body);
  console.log('this is clone ', clone);
}
// example4()

/*
  Object.is(pro1, prop2)
  - equal to strict equality operator ===
  - but with has diffferences between NaN and +0 -0 equality
*/

function example5() {
  // Сравнение +0 и -0
  console.log(Object.is(+0, -0)); // false
  console.log(+0 === -0); // true

  // Сравнение с NaN
  console.log(Object.is(NaN, NaN)); // true
  console.log(NaN === NaN); // false
}
// example5()

/*
  Object methods 
  - new syntax
  - has [[HomeObject]], that points to object that contains this method
*/

function example6() {

  var user = {
    name: "John",
    surname: "Doe",
    sayHi: function sayHi() {
      console.log("Hi, I'am " + this.name + " " + this.surname);
    },

    get fullName() {
      console.log(this.name + " " + this.surname);
    },

    set fullName(str) {
      var _str$split = str.split(' ');

      var _str$split2 = _slicedToArray(_str$split, 2);

      this.name = _str$split2[0];
      this.surname = _str$split2[1];
    }
  };
  user.sayHi();
  user.fullName = 'Vlad Argentum';
  user.sayHi();
}
// example6()

/*
  Super keyword
  
  1 standart defined inheritance
  2 get access to parent method (via prototype)

  super in depth: 
    - access to [[HomeObject]] of current method
    - get its __proto__

  3. Works only with methods
 
  4. But works inside Arrow functions
     - arrow function hasnt its own super (similar to 'this')
     - super gets from outside funciton
*/

function example7() {
  var _obj;

  var animal = {
    walk: function walk() {
      console.log("I'am walking");
    }
  };

  var rabbit = _obj = {
    __proto__: animal, // 1

    walk: function walk() {
      _get(Object.getPrototypeOf(_obj), "walk", this).call(this); // 2
    },

    //3
    // walk: function() {
    //   super.walk() // Error
    // }

    //4
    walk1: function walk1() {
      var _this = this;

      setTimeout(function () {
        return _get(Object.getPrototypeOf(_obj), "walk", _this).call(_this);
      });
    }
  };
  rabbit.walk();
  rabbit.walk1();
}
// example7()

function example() {}
// example()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1Lm9iamVjdHNfYW5kX3Byb3RvdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFPQSxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFBO0FBQ2pCLE1BQUksT0FBTyxHQUFHLFVBQVUsQ0FBQTs7QUFFeEIsTUFBSSxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUosSUFBSSxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUM7QUFBQSxBQUN4QixTQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBRWpCOzs7OztBQUFBLEFBU0QsU0FBUyxRQUFRLEdBQUk7OztBQUVuQixNQUFJLENBQUMsR0FBRyxPQUFPLENBQUE7QUFDZixNQUFJLENBQUMsR0FBTSxDQUFDLFNBQU0sQ0FBQTs7QUFFbEIsTUFBSSxNQUFNLDJDQUNQLENBQUMsRUFBRyxhQUFhLDRCQUNqQixDQUFDLEVBQUcsV0FBVyxXQUNqQixDQUFBOztBQUVELFNBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDckI7Ozs7Ozs7QUFBQSxBQVlELFNBQVMsUUFBUSxHQUFJOztBQUVuQixRQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzFCLFFBQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztDQUVyQztBQUZxQzs7Ozs7Ozs7OztBQUVyQyxBQWVELFNBQVMsUUFBUSxHQUFJOztBQUVuQixNQUFJLElBQUksR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUE7QUFDeEQsTUFBSSxDQUFDLEdBQU0sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFBO0FBQ3RDLE1BQUksQ0FBQyxHQUFNLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUE7O0FBRTFDLFFBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN6QixTQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzs7OztBQUFDLEFBS2xCLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ25DLFNBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDdEM7Ozs7Ozs7OztBQUFBLEFBV0QsU0FBUyxRQUFRLEdBQUk7O0FBRW5CLFNBQU8sQ0FBQyxHQUFHLENBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUMsQUFDaEMsU0FBTyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRTs7O0FBQUMsQUFHekIsU0FBTyxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBRTtBQUFDLEFBQ25DLFNBQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBRTtBQUFDLENBQzVCOzs7Ozs7Ozs7QUFBQSxBQWFELFNBQVMsUUFBUSxHQUFJOztBQUVuQixNQUFJLElBQUksR0FBRztBQUNULFFBQUksRUFBRSxNQUFNO0FBQ1osV0FBTyxFQUFFLEtBQUs7QUFDZCxTQUFLLG1CQUFJO0FBQ1AsYUFBTyxDQUFDLEdBQUcsZUFBYSxJQUFJLENBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUcsQ0FBQztLQUN0RDs7QUFFRCxRQUFJLFFBQVEsR0FBSTtBQUNkLGFBQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsT0FBTyxDQUFHLENBQUM7S0FDN0M7O0FBRUQsUUFBSSxRQUFRLENBQUUsR0FBRyxFQUFFO3VCQUNXLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7O0FBQXpDLFVBQUksQ0FBQyxJQUFJO0FBQUUsVUFBSSxDQUFDLE9BQU87S0FDekI7R0FDRixDQUFBO0FBQ0QsTUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsTUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUE7QUFDL0IsTUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUF3QkQsU0FBUyxRQUFRLEdBQUk7OztBQUVuQixNQUFJLE1BQU0sR0FBRztBQUNYLFFBQUksa0JBQUc7QUFDTCxhQUFPLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztLQUM3QjtHQUNGLENBQUE7O0FBRUQsTUFBSSxNQUFNLFVBQUc7QUFDWCxhQUFTLEVBQUUsTUFBTTs7QUFFakIsUUFBSSxrQkFBRztBQUNMO0FBQVksS0FDYjs7Ozs7Ozs7QUFTRCxTQUFLLG1CQUFHOzs7QUFDTixnQkFBVSxDQUFDOztPQUFrQixDQUFDLENBQUE7S0FDL0I7R0FFRixDQUFBO0FBQ0QsUUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO0FBQ2IsUUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO0NBQ2Y7OztBQUFBLEFBT0QsU0FBUyxPQUFPLEdBQUksRUFJbkI7O0FBQUEiLCJmaWxlIjoiZXMyMDE1LzA1Lm9iamVjdHNfYW5kX3Byb3RvdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBQcm9wZXJ0eSBpbXByb3ZlbWVudHNcbiovXG5cblxuLy9zaG9ydCBwcm9wZXJ0eSBub3RhdGlvblxuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG5cbiAgbGV0IG5hbWUgPSBcIlZsYWRcIlxuICBsZXQgc3VybmFtZSA9IFwiQXJnZW50dW1cIlxuXG4gIGxldCBtZSA9IHtuYW1lLCBzdXJuYW1lfSAvL2VxdWFsIHRvIHtuYW1lOiBuYW1lLCBzdXJuYW1lOiBzdXJuYW1lfVxuICBjb25zb2xlLmxvZyhtZSk7XG5cbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cblxuXG4vL2V4cHJlc3Npb24ga2V5IG5vdGF0aW9uXG5cbmZ1bmN0aW9uIGV4YW1wbGUyICgpIHtcbiAgXG4gIGxldCBhID0gXCJhYm91dFwiXG4gIGxldCBqID0gYCR7YX1fam9iYFxuXG4gIGxldCBvYmplY3QgPSB7XG4gICAgW2FdOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgW2pdOiAnc29tZSB0ZXh0J1xuICB9XG5cbiAgY29uc29sZS5sb2cob2JqZWN0KTtcbn1cbi8vIGV4YW1wbGUyKClcblxuXG5cblxuXG4vKlxuICBQcm90b3R5cGUgZ2V0L3NldFxuKi9cblxuXG5mdW5jdGlvbiBleGFtcGxlMyAoKSB7XG4gIFxuICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2Yob2JqLCBuZXdQcm90bykgLy9jYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIE9iamVjdC5jcmVhdGUocHJvdG8pXG5cbn1cbi8vIGV4YW1wbGUzKClcblxuXG5cblxuXG4vKlxuICBPYmplY3QuYXNzaWduKG9iaiwgbzEsIG8yLCAuLi4gb04pIFxuICAtIG1lcmdlcyBwcm9wZXJ0aWVzIHRvIG9iaiBmcm9tIG8xLCBvMiwgLi4uIG9OXG4gIC0gbW9kaWZ5IHRoZSBmaXJzdCBhcmd1bWVudFxuXG5cbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGU0ICgpIHtcbiAgXG4gIGxldCBib2R5ID0ge25hbWU6IFwiSm9oblwiLCBzdXJuYW1lOiBcIkRvZVwiLCBnZW5kZXI6IFwibWFuXCJ9XG4gIGxldCBiID0gICAge2lzRGVhZDogdHJ1ZSwgbGVnczogWzEsMV19XG4gIGxldCBjID0gICAge25hbWU6IFwiSmFuZVwiLCBnZW5kZXI6IFwid29tYW5cIn1cblxuICBPYmplY3QuYXNzaWduKGJvZHksIGIsIGMpXG4gIGNvbnNvbGUubG9nKGJvZHkpO1xuXG5cbiAgLy91c2VmdWwgZm9yIDEtbHZsIGRlZXAgY2xvbmluZ1xuXG4gIGxldCBjbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIGJvZHkpXG4gIGNvbnNvbGUubG9nKCd0aGlzIGlzIGNsb25lICcsIGNsb25lKTtcbn1cbi8vIGV4YW1wbGU0KClcblxuXG5cbi8qXG4gIE9iamVjdC5pcyhwcm8xLCBwcm9wMilcbiAgLSBlcXVhbCB0byBzdHJpY3QgZXF1YWxpdHkgb3BlcmF0b3IgPT09XG4gIC0gYnV0IHdpdGggaGFzIGRpZmZmZXJlbmNlcyBiZXR3ZWVuIE5hTiBhbmQgKzAgLTAgZXF1YWxpdHlcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGU1ICgpIHtcbiAgLy8g0KHRgNCw0LLQvdC10L3QuNC1ICswINC4IC0wXG4gIGNvbnNvbGUubG9nKCBPYmplY3QuaXMoKzAsIC0wKSk7IC8vIGZhbHNlXG4gIGNvbnNvbGUubG9nKCArMCA9PT0gLTAgKTsgICAgICAgIC8vIHRydWVcblxuICAvLyDQodGA0LDQstC90LXQvdC40LUg0YEgTmFOXG4gIGNvbnNvbGUubG9nKCBPYmplY3QuaXMoTmFOLCBOYU4pICk7IC8vIHRydWVcbiAgY29uc29sZS5sb2coIE5hTiA9PT0gTmFOICk7ICAgICAgICAgLy8gZmFsc2Vcbn1cbi8vIGV4YW1wbGU1KClcblxuXG5cblxuLypcbiAgT2JqZWN0IG1ldGhvZHMgXG4gIC0gbmV3IHN5bnRheFxuICAtIGhhcyBbW0hvbWVPYmplY3RdXSwgdGhhdCBwb2ludHMgdG8gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhpcyBtZXRob2RcbiovXG5cblxuZnVuY3Rpb24gZXhhbXBsZTYgKCkge1xuICBcbiAgbGV0IHVzZXIgPSB7XG4gICAgbmFtZTogXCJKb2huXCIsXG4gICAgc3VybmFtZTogXCJEb2VcIixcbiAgICBzYXlIaSAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSGksIEknYW0gJHt0aGlzLm5hbWV9ICR7dGhpcy5zdXJuYW1lfWApO1xuICAgIH0sXG5cbiAgICBnZXQgZnVsbE5hbWUgKCkge1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSAke3RoaXMuc3VybmFtZX1gKTtcbiAgICB9LFxuXG4gICAgc2V0IGZ1bGxOYW1lIChzdHIpIHtcbiAgICAgIFt0aGlzLm5hbWUsIHRoaXMuc3VybmFtZV0gPSBzdHIuc3BsaXQoJyAnKVxuICAgIH1cbiAgfVxuICB1c2VyLnNheUhpKCk7XG4gIHVzZXIuZnVsbE5hbWUgPSAnVmxhZCBBcmdlbnR1bSdcbiAgdXNlci5zYXlIaSgpO1xufVxuLy8gZXhhbXBsZTYoKVxuXG5cblxuXG4vKlxuICBTdXBlciBrZXl3b3JkXG4gIFxuICAxIHN0YW5kYXJ0IGRlZmluZWQgaW5oZXJpdGFuY2VcbiAgMiBnZXQgYWNjZXNzIHRvIHBhcmVudCBtZXRob2QgKHZpYSBwcm90b3R5cGUpXG5cbiAgc3VwZXIgaW4gZGVwdGg6IFxuICAgIC0gYWNjZXNzIHRvIFtbSG9tZU9iamVjdF1dIG9mIGN1cnJlbnQgbWV0aG9kXG4gICAgLSBnZXQgaXRzIF9fcHJvdG9fX1xuXG4gIDMuIFdvcmtzIG9ubHkgd2l0aCBtZXRob2RzXG4gXG4gIDQuIEJ1dCB3b3JrcyBpbnNpZGUgQXJyb3cgZnVuY3Rpb25zXG4gICAgIC0gYXJyb3cgZnVuY3Rpb24gaGFzbnQgaXRzIG93biBzdXBlciAoc2ltaWxhciB0byAndGhpcycpXG4gICAgIC0gc3VwZXIgZ2V0cyBmcm9tIG91dHNpZGUgZnVuY2l0b25cbiovXG5cblxuZnVuY3Rpb24gZXhhbXBsZTcgKCkge1xuICBcbiAgbGV0IGFuaW1hbCA9IHtcbiAgICB3YWxrKCkge1xuICAgICAgY29uc29sZS5sb2coYEknYW0gd2Fsa2luZ2ApO1xuICAgIH1cbiAgfVxuXG4gIGxldCByYWJiaXQgPSB7XG4gICAgX19wcm90b19fOiBhbmltYWwsIC8vIDEgXG5cbiAgICB3YWxrKCkge1xuICAgICAgc3VwZXIud2FsaygpICAvLyAyXG4gICAgfSxcblxuICAgIC8vM1xuICAgIC8vIHdhbGs6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgc3VwZXIud2FsaygpIC8vIEVycm9yXG4gICAgLy8gfVxuXG5cbiAgICAvLzRcbiAgICB3YWxrMSgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3VwZXIud2FsaygpKVxuICAgIH1cblxuICB9XG4gIHJhYmJpdC53YWxrKClcbiAgcmFiYml0LndhbGsxKClcbn1cbi8vIGV4YW1wbGU3KClcblxuXG5cblxuXG5mdW5jdGlvbiBleGFtcGxlICgpIHtcbiAgXG5cblxufVxuLy8gZXhhbXBsZSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
