'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Class 
  
  1 Can't attach varibles to prototype. 
  1.1 add directly instead
*/

function example1() {
  var User = (function () {
    function User(name, surname) {
      _classCallCheck(this, User);

      var _ref = [name, surname];
      this.name = _ref[0];
      this.surname = _ref[1];
    }

    _createClass(User, [{
      key: 'sayHi',

      // isHuman: "web-developer" // 1

      value: function sayHi() {
        return 'Hi, I\'am ' + this.name + ' ' + this.surname;
      }
    }, {
      key: 'fullName',
      get: function get() {
        return name + ' ' + surname;
      },
      set: function set(str) {
        var _str$split = str.split(' ');

        var _str$split2 = _slicedToArray(_str$split, 2);

        this.name = _str$split2[0];
        this.surname = _str$split2[1];
      }
    }], [{
      key: 'isUser',
      value: function isUser() {}
    }]);

    return User;
  })();

  User.prototype.isHuman = true; // 1.1

  var me = new User('vlad', 'argentum');
  console.log(me.sayHi());
  console.log(me.isHuman);
}

// example1()

/*
  Class Inheritance

  1. parent method usage with super

  2. call parent constructor explicitly with arguments
  2.1 after calling `super`, you `this` object is created and you can access to it

*/

function example2() {
  var Animal = (function () {
    function Animal(name) {
      _classCallCheck(this, Animal);

      this.name = name;
    }

    _createClass(Animal, [{
      key: 'walk',
      value: function walk() {
        console.log('I am walking');
      }
    }]);

    return Animal;
  })();

  var Rabbit = (function (_Animal) {
    _inherits(Rabbit, _Animal);

    function Rabbit(name, color) {
      _classCallCheck(this, Rabbit);

      // 2

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rabbit).call(this, name));

      _this.color = color; // 2.1
      return _this;
    }

    _createClass(Rabbit, [{
      key: 'walk',
      value: function walk() {
        _get(Object.getPrototypeOf(Rabbit.prototype), 'walk', this).call(this); // 1
        console.log('and jumping');
      }
    }]);

    return Rabbit;
  })(Animal);

  var r1 = new Rabbit('robert', 'grey');

  r1.walk();
  console.log(r1.color);
}
example2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2LmNsYXNzZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsU0FBUyxRQUFRLEdBQUc7TUFFWixJQUFJO0FBRVIsYUFGSSxJQUFJLENBRUssSUFBSSxFQUFFLE9BQU8sRUFBRTs0QkFGeEIsSUFBSTs7aUJBR3NCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztBQUExQyxVQUFJLENBQUMsSUFBSTtBQUFFLFVBQUksQ0FBQyxPQUFPO0tBQ3pCOztpQkFKRyxJQUFJOzs7Ozs4QkFrQkE7QUFDTiw4QkFBbUIsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsT0FBTyxDQUFFO09BQy9DOzs7MEJBWmU7QUFDZCxlQUFVLElBQUksU0FBSSxPQUFPLENBQUU7T0FDNUI7d0JBRWEsR0FBRyxFQUFFO3lCQUNXLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7O0FBQXpDLFlBQUksQ0FBQyxJQUFJO0FBQUUsWUFBSSxDQUFDLE9BQU87T0FDekI7OzsrQkFSZSxFQUFFOzs7V0FOZCxJQUFJOzs7QUF3QlYsTUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSTs7QUFBQSxBQUc3QixNQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDckMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN4QixTQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUV6Qjs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQWtCRCxTQUFTLFFBQVEsR0FBSTtNQUViLE1BQU07QUFFVixhQUZJLE1BQU0sQ0FFRyxJQUFJLEVBQUU7NEJBRmYsTUFBTTs7QUFHUixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtLQUNqQjs7aUJBSkcsTUFBTTs7NkJBTUY7QUFDTixlQUFPLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQTtPQUM1Qjs7O1dBUkcsTUFBTTs7O01BWU4sTUFBTTtjQUFOLE1BQU07O0FBRVYsYUFGSSxNQUFNLENBRUcsSUFBSSxFQUFFLEtBQUssRUFBRTs0QkFGdEIsTUFBTTs7Ozt5RUFBTixNQUFNLGFBR0YsSUFBSTs7QUFDVixZQUFLLEtBQUssR0FBRyxLQUFLO0FBQUE7S0FDbkI7O2lCQUxHLE1BQU07OzZCQU9IO0FBQ0wsbUNBUkUsTUFBTTtBQVFJLEFBQ1osZUFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztPQUM1Qjs7O1dBVkcsTUFBTTtLQUFTLE1BQU07O0FBYzNCLE1BQUksRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTs7QUFFckMsSUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0FBQ1QsU0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7Q0FFdEI7QUFDRCxRQUFRLEVBQUUsQ0FBQSIsImZpbGUiOiJlczIwMTUvMDYuY2xhc3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENsYXNzIFxuICBcbiAgMSBDYW4ndCBhdHRhY2ggdmFyaWJsZXMgdG8gcHJvdG90eXBlLiBcbiAgMS4xIGFkZCBkaXJlY3RseSBpbnN0ZWFkXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSgpIHtcblxuICBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBzdXJuYW1lKSB7XG4gICAgICBbdGhpcy5uYW1lLCB0aGlzLnN1cm5hbWVdID0gW25hbWUsIHN1cm5hbWVdXG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcigpIHt9XG5cbiAgICBnZXQgZnVsbE5hbWUgKCkge1xuICAgICAgcmV0dXJuIGAke25hbWV9ICR7c3VybmFtZX1gXG4gICAgfVxuXG4gICAgc2V0IGZ1bGxOYW1lIChzdHIpIHtcbiAgICAgIFt0aGlzLm5hbWUsIHRoaXMuc3VybmFtZV0gPSBzdHIuc3BsaXQoJyAnKVxuICAgIH1cblxuICAgIC8vIGlzSHVtYW46IFwid2ViLWRldmVsb3BlclwiIC8vIDFcblxuICAgIHNheUhpKCkge1xuICAgICAgcmV0dXJuIGBIaSwgSSdhbSAke3RoaXMubmFtZX0gJHt0aGlzLnN1cm5hbWV9YFxuICAgIH1cblxuICB9XG5cbiAgVXNlci5wcm90b3R5cGUuaXNIdW1hbiA9IHRydWUgLy8gMS4xXG5cblxuICBsZXQgbWUgPSBuZXcgVXNlcigndmxhZCcsICdhcmdlbnR1bScpXG4gIGNvbnNvbGUubG9nKG1lLnNheUhpKCkpO1xuICBjb25zb2xlLmxvZyhtZS5pc0h1bWFuKTtcblxufVxuXG4vLyBleGFtcGxlMSgpXG5cblxuXG5cblxuLypcbiAgQ2xhc3MgSW5oZXJpdGFuY2VcblxuICAxLiBwYXJlbnQgbWV0aG9kIHVzYWdlIHdpdGggc3VwZXJcblxuICAyLiBjYWxsIHBhcmVudCBjb25zdHJ1Y3RvciBleHBsaWNpdGx5IHdpdGggYXJndW1lbnRzXG4gIDIuMSBhZnRlciBjYWxsaW5nIGBzdXBlcmAsIHlvdSBgdGhpc2Agb2JqZWN0IGlzIGNyZWF0ZWQgYW5kIHlvdSBjYW4gYWNjZXNzIHRvIGl0XG5cbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUyICgpIHtcblxuICBjbGFzcyBBbmltYWwge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgd2FsayAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSSBhbSB3YWxraW5nYCkgXG4gICAgfVxuICB9XG5cblxuICBjbGFzcyBSYWJiaXQgZXh0ZW5kcyBBbmltYWwge1xuXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGNvbG9yKSB7XG4gICAgICBzdXBlcihuYW1lKSAvLyAyXG4gICAgICB0aGlzLmNvbG9yID0gY29sb3IgLy8gMi4xXG4gICAgfVxuXG4gICAgd2FsaygpIHtcbiAgICAgIHN1cGVyLndhbGsoKSAvLyAxXG4gICAgICBjb25zb2xlLmxvZygnYW5kIGp1bXBpbmcnKTtcbiAgICB9XG4gIH1cblxuXG4gIGxldCByMSA9IG5ldyBSYWJiaXQoJ3JvYmVydCcsICdncmV5JylcblxuICByMS53YWxrKClcbiAgY29uc29sZS5sb2cocjEuY29sb3IpXG5cbn1cbmV4YW1wbGUyKClcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
