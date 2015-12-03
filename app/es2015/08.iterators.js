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
example2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA4Lml0ZXJhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLE9BQU8sQ0FBQTtBQUNqQixNQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBOzs7Ozs7O0FBRXZCLHlCQUFjLEdBQUcsOEhBQUU7VUFBVixDQUFDOztBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELDBCQUFjLEdBQUcsbUlBQUU7VUFBVixDQUFDOztBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7Ozs7Ozs7Ozs7Ozs7OztDQUNGOzs7O0FBQUEsQUFNRCxTQUFTLFFBQVEsR0FBSTs7O01BRWIsY0FBYztBQUNsQixhQURJLGNBQWMsR0FDTTs0QkFEcEIsY0FBYzs7d0NBQ0YsTUFBTTtBQUFOLGNBQU07OztBQUNuQixVQUFJLENBQUMsSUFBSSxHQUFhLE1BQU07QUFBakIsVUFBSSxDQUFDLEVBQUUsR0FBSSxNQUFNO0tBQzlCOzs7QUFBQTtpQkFIRyxjQUFjO1dBTWpCLE1BQU0sQ0FBQyxRQUFROzhCQUFLOzs7QUFHbkIsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtBQUN2QixZQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBOztBQUVsQixlQUFPO0FBQ0wsY0FBSSxrQkFBRztBQUNMLGdCQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFDbkIscUJBQU87QUFDTCxxQkFBSyxFQUFFLE9BQU8sRUFBRTtBQUNoQixvQkFBSSxFQUFFLEtBQUs7ZUFDWixDQUFBO2FBQ0YsTUFBTTtBQUNMLHFCQUFPO0FBQ0wsb0JBQUksRUFBRSxJQUFJO2VBQ1gsQ0FBQTthQUNGO1dBQ0Y7U0FDRixDQUFBO09BQ0Y7OztXQTFCRyxjQUFjOzs7QUE2QnBCLE1BQUksQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQixNQUFJLENBQUMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7Ozs7QUFFaEMsMEJBQWMsQ0FBQyxtSUFBRTtVQUFSLENBQUM7QUFBUyxhQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbkMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTs7Ozs7O0FBQzVCLDBCQUFjLENBQUMsbUlBQUU7VUFBUixDQUFDO0FBQVMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ25DLFNBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDOzs7QUFBQSxBQUc1QixTQUFPLENBQUMsR0FBRyxDQUFDLFNBQUEsSUFBSSxFQUFDLEdBQUcsTUFBQSwyQkFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFBO0FBQzNCLFNBQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLEVBQUMsR0FBRyxNQUFBLDRCQUFJLENBQUMsRUFBQyxDQUFDLENBQUE7Q0FDNUI7QUFDRCxRQUFRLEVBQUUsQ0FBQSIsImZpbGUiOiJlczIwMTUvMDguaXRlcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgbmV3IG1ldGhvZCBmb3IuLm9mXG4gICAgLSB1c2VkIGZvciBpdGVyYXRlIHRocm91Z2ggXG4gIFxuXG4gIGl0ZXJhYmxlIGJ5IGRlZmF1bHRcbiAgICAtIGFycmF5XG4gICAgLSBzdHJpbmdcblxuXG4gIGZvciBvYmplY3RzIHlvdSBjYW4gY3JlYXRlIGN1c3RvbSBpdGVyYXRvciB3aXRoXG5cbiAgU3ltYm9sLml0ZXJhdG9yIChoaW50IHVzZSBbXSB0byBzZXQgZXhwcmVzc2VkIHByb3BlcnR5KVxuXG4gIC8vICogc2F2ZSB3b3JraW5nIHZhcmlhYmxlcyBpbiBjbG9qdXJlXG5cbiAgdGhpcyBtZXRob2QgaGFzIHRvIHJldHVybiBhbiBPYmplY3QsIHRoYXQgY29udGFpbnMgXG4gIG5leHQoKSBtZXRob2QgdGhhdCByZXR1cm4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXNcbiAgICB2YWx1ZTogY3VycmVudCBpdGVyYWJsZSB2YWx1ZVxuICAgIGRvbmU6IGJvb2xcblxuXG4gIGl0ZXJhYmxlIGNhbiBiZSBhZGRlZCB3aXRoIHNwcmVhZCBvcGVyYXRvciB0aGF0IFxuKi9cblxuXG4vLyBidWlsZCBpbiBpdGVyYXRlIG9iamVjdCBleGFtcGxlXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIGxldCBzdHIgPSBcIkhlbGxvXCJcbiAgbGV0IGFyciA9IHN0ci5zcGxpdCgnJylcblxuICBmb3IgKGxldCBpIG9mIHN0cikge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICB9XG5cbiAgZm9yIChsZXQgaSBvZiBhcnIpIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgfVxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLy8gY3VzdG9tIGl0ZXJhdG9yXG5mdW5jdGlvbiBleGFtcGxlMiAoKSB7XG4gIFxuICBjbGFzcyBJdGVyYWJsZU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IgKC4uLnBhcmFtcykge1xuICAgICAgW3RoaXMuZnJvbSwgdGhpcy50b10gPSBwYXJhbXNcbiAgICB9XG4gICAgXG4gICAgLy9tYWtlIG9iamVjdCBpdGVyYWJsZVxuICAgIFtTeW1ib2wuaXRlcmF0b3JdICgpIHtcblxuICAgICAgLy8gc2F2ZSB3b3JraW5nIHZhcmlhYmxlcyBpbiBjbG9qdXJlXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuZnJvbVxuICAgICAgbGV0IGxhc3QgPSB0aGlzLnRvXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnQgPD0gbGFzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnQrKyxcbiAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgYSA9IG5ldyBJdGVyYWJsZU9iamVjdCgxLDMpXG4gIGxldCBiID0gbmV3IEl0ZXJhYmxlT2JqZWN0KDUsIDgpXG5cbiAgZm9yIChsZXQgaSBvZiBhKSB7IGNvbnNvbGUubG9nKGkpIH1cbiAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0nKVxuICBmb3IgKGxldCBpIG9mIGIpIHsgY29uc29sZS5sb2coaSkgfVxuICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLScpXG5cbiAgLy8gc3ByZWFkIFxuICBjb25zb2xlLmxvZyhNYXRoLm1heCguLi5hKSlcbiAgY29uc29sZS5sb2coTWF0aC5tYXgoLi4uYikpXG59XG5leGFtcGxlMigpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
