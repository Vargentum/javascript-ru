'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  new method for..of
    - used for iterate through 
  

  iterable by default
    - array
    - string


  for objects you can create custom iterator with

  Symbol.iterator (hint use [] to set expressed property)

  // * save working variables in clojure

  this method has to return an Object, that contains 
  next() method that return object with two properties
    value: current iterable value
    done: bool


  iterable can be added with spread operator that 
*/

// build in iterate object example
function example1() {
  var str = "Hello";
  var arr = str.split('');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      console.log(i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var i = _step2.value;

      console.log(i);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
// example1()

// custom iterator
function example2() {
  var _Math, _Math2;

  var IterableObject = (function () {
    function IterableObject() {
      _classCallCheck(this, IterableObject);

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      this.from = params[0];
      this.to = params[1];
    }

    //make object iterable

    _createClass(IterableObject, [{
      key: Symbol.iterator,
      value: function value() {

        // save working variables in clojure
        var current = this.from;
        var last = this.to;

        return {
          next: function next() {
            if (current <= last) {
              return {
                value: current++,
                done: false
              };
            } else {
              return {
                done: true
              };
            }
          }
        };
      }
    }]);

    return IterableObject;
  })();

  var a = new IterableObject(1, 3);
  var b = new IterableObject(5, 8);

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = a[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var i = _step3.value;
      console.log(i);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  console.log('-------------');
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = b[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var i = _step4.value;
      console.log(i);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  console.log('-------------');

  // spread
  console.log((_Math = Math).max.apply(_Math, _toConsumableArray(a)));
  console.log((_Math2 = Math).max.apply(_Math2, _toConsumableArray(b)));
}
// example2()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA4Lml0ZXJhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLE9BQU8sQ0FBQTtBQUNqQixNQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBOzs7Ozs7O0FBRXZCLHlCQUFjLEdBQUcsOEhBQUU7VUFBVixDQUFDOztBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELDBCQUFjLEdBQUcsbUlBQUU7VUFBVixDQUFDOztBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7Ozs7Ozs7Ozs7Ozs7OztDQUNGOzs7O0FBQUEsQUFNRCxTQUFTLFFBQVEsR0FBSTs7O01BRWIsY0FBYztBQUNsQixhQURJLGNBQWMsR0FDTTs0QkFEcEIsY0FBYzs7d0NBQ0YsTUFBTTtBQUFOLGNBQU07OztBQUNuQixVQUFJLENBQUMsSUFBSSxHQUFhLE1BQU07QUFBakIsVUFBSSxDQUFDLEVBQUUsR0FBSSxNQUFNO0tBQzlCOzs7QUFBQTtpQkFIRyxjQUFjO1dBTWpCLE1BQU0sQ0FBQyxRQUFROzhCQUFLOzs7QUFHbkIsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtBQUN2QixZQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBOztBQUVsQixlQUFPO0FBQ0wsY0FBSSxrQkFBRztBQUNMLGdCQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFDbkIscUJBQU87QUFDTCxxQkFBSyxFQUFFLE9BQU8sRUFBRTtBQUNoQixvQkFBSSxFQUFFLEtBQUs7ZUFDWixDQUFBO2FBQ0YsTUFBTTtBQUNMLHFCQUFPO0FBQ0wsb0JBQUksRUFBRSxJQUFJO2VBQ1gsQ0FBQTthQUNGO1dBQ0Y7U0FDRixDQUFBO09BQ0Y7OztXQTFCRyxjQUFjOzs7QUE2QnBCLE1BQUksQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQixNQUFJLENBQUMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7Ozs7QUFFaEMsMEJBQWMsQ0FBQyxtSUFBRTtVQUFSLENBQUM7QUFBUyxhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbkMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTs7Ozs7O0FBQzVCLDBCQUFjLENBQUMsbUlBQUU7VUFBUixDQUFDO0FBQVMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ25DLFNBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDOzs7QUFBQSxBQUc1QixTQUFPLENBQUMsR0FBRyxDQUFDLFNBQUEsSUFBSSxFQUFDLEdBQUcsTUFBQSwyQkFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFBO0FBQzNCLFNBQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQUMsR0FBRyxNQUFBLDRCQUFJLENBQUMsRUFBQyxDQUFDLENBQUE7Q0FDNUI7O0FBQUEiLCJmaWxlIjoiZXMyMDE1LzA4Lml0ZXJhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIG5ldyBtZXRob2QgZm9yLi5vZlxuICAgIC0gdXNlZCBmb3IgaXRlcmF0ZSB0aHJvdWdoIFxuICBcblxuICBpdGVyYWJsZSBieSBkZWZhdWx0XG4gICAgLSBhcnJheVxuICAgIC0gc3RyaW5nXG5cblxuICBmb3Igb2JqZWN0cyB5b3UgY2FuIGNyZWF0ZSBjdXN0b20gaXRlcmF0b3Igd2l0aFxuXG4gIFN5bWJvbC5pdGVyYXRvciAoaGludCB1c2UgW10gdG8gc2V0IGV4cHJlc3NlZCBwcm9wZXJ0eSlcblxuICAvLyAqIHNhdmUgd29ya2luZyB2YXJpYWJsZXMgaW4gY2xvanVyZVxuXG4gIHRoaXMgbWV0aG9kIGhhcyB0byByZXR1cm4gYW4gT2JqZWN0LCB0aGF0IGNvbnRhaW5zIFxuICBuZXh0KCkgbWV0aG9kIHRoYXQgcmV0dXJuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzXG4gICAgdmFsdWU6IGN1cnJlbnQgaXRlcmFibGUgdmFsdWVcbiAgICBkb25lOiBib29sXG5cblxuICBpdGVyYWJsZSBjYW4gYmUgYWRkZWQgd2l0aCBzcHJlYWQgb3BlcmF0b3IgdGhhdCBcbiovXG5cblxuLy8gYnVpbGQgaW4gaXRlcmF0ZSBvYmplY3QgZXhhbXBsZVxuZnVuY3Rpb24gZXhhbXBsZTEgKCkge1xuICBsZXQgc3RyID0gXCJIZWxsb1wiXG4gIGxldCBhcnIgPSBzdHIuc3BsaXQoJycpXG5cbiAgZm9yIChsZXQgaSBvZiBzdHIpIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgb2YgYXJyKSB7XG4gICAgY29uc29sZS5sb2coaSk7XG4gIH1cbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cbi8vIGN1c3RvbSBpdGVyYXRvclxuZnVuY3Rpb24gZXhhbXBsZTIgKCkge1xuICBcbiAgY2xhc3MgSXRlcmFibGVPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yICguLi5wYXJhbXMpIHtcbiAgICAgIFt0aGlzLmZyb20sIHRoaXMudG9dID0gcGFyYW1zXG4gICAgfVxuICAgIFxuICAgIC8vbWFrZSBvYmplY3QgaXRlcmFibGVcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSAoKSB7XG5cbiAgICAgIC8vIHNhdmUgd29ya2luZyB2YXJpYWJsZXMgaW4gY2xvanVyZVxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmZyb21cbiAgICAgIGxldCBsYXN0ID0gdGhpcy50b1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgIGlmIChjdXJyZW50IDw9IGxhc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50KyssXG4gICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IGEgPSBuZXcgSXRlcmFibGVPYmplY3QoMSwzKVxuICBsZXQgYiA9IG5ldyBJdGVyYWJsZU9iamVjdCg1LCA4KVxuXG4gIGZvciAobGV0IGkgb2YgYSkgeyBjb25zb2xlLmxvZyhpKSB9XG4gIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tJylcbiAgZm9yIChsZXQgaSBvZiBiKSB7IGNvbnNvbGUubG9nKGkpIH1cbiAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0nKVxuXG4gIC8vIHNwcmVhZCBcbiAgY29uc29sZS5sb2coTWF0aC5tYXgoLi4uYSkpXG4gIGNvbnNvbGUubG9nKE1hdGgubWF4KC4uLmIpKVxufVxuLy8gZXhhbXBsZTIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
