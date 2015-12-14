'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var user = {};

//1.Простое присваивание
user.name = "Tom";

//2. Присваивание через дескриптор
Object.defineProperty(user, name, {
  value: "Tom",
  writable: false, //disable editing property
  configurable: false, //disable deliting property
  enumerable: true
});

user.name = "Jerry"; // 'strict mode' ? generates Error : silent passing

/*
У встроенного toString() enumerable false
у кастомного == true

если нужно изменить - тогда задавать через дескриптор
*/
user.toString = function () {
  return this.name;
};

Object.defineProperty(user, toString, { enumerable: false });

/*Cвойство-функция
с помощью get можно задать свойство, которое будет являть функцией
*/

user = {
  firstName: "John",
  surname: "Rambo"
};

Object.defineProperty(user, fullName, {

  get: function get() {
    return this.firstName + " " + this.surname;
  },

  set: function set(val) {
    var _val$split = val.split(' ');
    //set the first and last name, so the get() function can work correctly

    var _val$split2 = _slicedToArray(_val$split, 2);

    this.firstName = _val$split2[0];
    this.lastName = _val$split2[1];
  }
});

console.log(user.fullName); //get
user.fullName = "Sylvester Stallone"; //set

/* Геттеры/сеттеры в литералах объекта
*/

user = {
  firstName: "T1000",
  lastName: "Terminator"

  // //define a getter
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`
  // },

  // //define a setter
  // set fullName(name) {
  //   [this.firstName, this.lastName] = name.split(' ')
  // }
};

/* Зачем??
простой рефакторинг
увеличение гибкости
*/

function User(name, age) {
  var _ref = [name, age];
  this.name = _ref[0];
  this.age = _ref[1];
}

var user1 = new User("John", 25);

// but if you want to refactor age to birthdate
//

function User(name, birthdate) {

  //safe getting age for old code usages!
  // get age() {
  //   return new Date.now().getFullYear() - this.birthdate.getFullYear()
  // }
  var _ref2 = [name, birthdate];
  this.name = _ref2[0];
  this.birthdate = _ref2[1];
}

var user2 = new User("Jane", new Date(1984, 6, 4));
console.log(user2.age);

/* Другие методы работы со свойствами
*/
user = {};

// объявление нескольких свойств сразу

Object.defineDescriptors(user, {
  firstName: {
    value: "Captain"
  },
  lastName: {
    value: "America"
  },
  fullName: {
    get function() {
      return this.firstName + " " + this.lastName;
    }
  }
});

// Other methods
Object.keys(o); // return only enumerable properties

Object.getOwnPropertyDescriptor(o); //return descriptor object

Object.getOwnPropertyNames(o); //return all properties

//Rare used methods
Object.preventExtensions(o); //disable add props to object

Object.seal(o); //disable add/delete props; make all props configurable: false

Object.freeze(o); //disable add/edit/delete props; configurable:false; writable: false

//checking
Object.isExtensible(o);
Object.isSealed(o);
Object.isFrozen(o);

// Задача:
//Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
//Имя и фамилия всегда разделяются пробелом.
//Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

function User(fullName) {

  return {
    fullName: fullName,

    //firstName
    get firstName() {
      return fullName.split(' ')[0];
    },

    set firstName(newName) {
      this.fullName = newName + ' ' + this.lastName;
    },

    //lastName
    get lastName() {
      return fullName.split(' ')[1];
    },

    set lastName(newName) {
      this.fullName = this.firstName + ' ' + newName;
    }
  };
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
console.log(vasya.fullName); // Василий Сидоров
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjQuZGVzY3JpcHRvcnNfZ2V0dGVyc19zZXR0ZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztBQUdiLElBQUksSUFBSSxHQUFHLEVBQUU7OztBQUFDLEFBR2QsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLOzs7QUFBQyxBQUdsQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEMsT0FBSyxFQUFFLEtBQUs7QUFDWixVQUFRLEVBQUUsS0FBSztBQUNmLGNBQVksRUFBRSxLQUFLO0FBQ25CLFlBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQUMsQ0FBQTs7QUFFRixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU87Ozs7Ozs7O0FBQUEsQUFTbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFVO0FBQUUsU0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0NBQUUsQ0FBQTs7QUFFOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDOzs7Ozs7QUFBQSxBQU81RCxJQUFJLEdBQUc7QUFDTCxXQUFTLEVBQUUsTUFBTTtBQUNqQixTQUFPLEVBQUUsT0FBTztDQUNqQixDQUFBOztBQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTs7QUFFcEMsS0FBRyxFQUFFLGVBQVU7QUFDYixXQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRztHQUM1Qzs7QUFFRCxLQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUM7cUJBRWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7OztBQUEvQyxRQUFJLENBQUMsU0FBUztBQUFFLFFBQUksQ0FBQyxRQUFRO0dBQy9CO0NBQ0YsQ0FBQyxDQUFBOztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUFBLEFBQzFCLElB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Qy9CLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBRTs7O0FBQUMsQUFHOUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsUUFBUSxDQUFFO0FBQUMiLCJmaWxlIjoicGFydDEvb2JqZWN0cy80LmRlc2NyaXB0b3JzX2dldHRlcnNfc2V0dGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5sZXQgdXNlciA9IHt9O1xuXG4vLzEu0J/RgNC+0YHRgtC+0LUg0L/RgNC40YHQstCw0LjQstCw0L3QuNC1XG51c2VyLm5hbWUgPSBcIlRvbVwiO1xuXG4gLy8yLiDQn9GA0LjRgdCy0LDQuNCy0LDQvdC40LUg0YfQtdGA0LXQtyDQtNC10YHQutGA0LjQv9GC0L7RgFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHVzZXIsIG5hbWUsIHtcbiAgdmFsdWU6IFwiVG9tXCIsXG4gIHdyaXRhYmxlOiBmYWxzZSwgLy9kaXNhYmxlIGVkaXRpbmcgcHJvcGVydHlcbiAgY29uZmlndXJhYmxlOiBmYWxzZSwgLy9kaXNhYmxlIGRlbGl0aW5nIHByb3BlcnR5XG4gIGVudW1lcmFibGU6IHRydWVcbn0pXG5cbnVzZXIubmFtZSA9IFwiSmVycnlcIiAvLyAnc3RyaWN0IG1vZGUnID8gZ2VuZXJhdGVzIEVycm9yIDogc2lsZW50IHBhc3NpbmcgXG5cblxuLypcbtCjINCy0YHRgtGA0L7QtdC90L3QvtCz0L4gdG9TdHJpbmcoKSBlbnVtZXJhYmxlIGZhbHNlXG7RgyDQutCw0YHRgtC+0LzQvdC+0LPQviA9PSB0cnVlXG5cbtC10YHQu9C4INC90YPQttC90L4g0LjQt9C80LXQvdC40YLRjCAtINGC0L7Qs9C00LAg0LfQsNC00LDQstCw0YLRjCDRh9C10YDQtdC3INC00LXRgdC60YDQuNC/0YLQvtGAXG4qL1xudXNlci50b1N0cmluZyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLm5hbWUgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodXNlciwgdG9TdHJpbmcsIHsgZW51bWVyYWJsZTogZmFsc2UgfSlcblxuXG4vKkPQstC+0LnRgdGC0LLQvi3RhNGD0L3QutGG0LjRj1xu0YEg0L/QvtC80L7RidGM0Y4gZ2V0INC80L7QttC90L4g0LfQsNC00LDRgtGMINGB0LLQvtC50YHRgtCy0L4sINC60L7RgtC+0YDQvtC1INCx0YPQtNC10YIg0Y/QstC70Y/RgtGMINGE0YPQvdC60YbQuNC10LlcbiovXG5cbnVzZXIgPSB7XG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gIHN1cm5hbWU6IFwiUmFtYm9cIlxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkodXNlciwgZnVsbE5hbWUsIHtcbiAgXG4gIGdldDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5zdXJuYW1lfWA7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbih2YWwpe1xuICAgIC8vc2V0IHRoZSBmaXJzdCBhbmQgbGFzdCBuYW1lLCBzbyB0aGUgZ2V0KCkgZnVuY3Rpb24gY2FuIHdvcmsgY29ycmVjdGx5XG4gICAgW3RoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lXSA9IHZhbC5zcGxpdCgnICcpO1xuICB9XG59KVxuXG5jb25zb2xlLmxvZyh1c2VyLmZ1bGxOYW1lKSAvL2dldFxudXNlci5mdWxsTmFtZSA9IFwiU3lsdmVzdGVyIFN0YWxsb25lXCIgLy9zZXRcblxuXG5cblxuLyog0JPQtdGC0YLQtdGA0Ysv0YHQtdGC0YLQtdGA0Ysg0LIg0LvQuNGC0LXRgNCw0LvQsNGFINC+0LHRitC10LrRgtCwXG4qL1xuXG51c2VyID0ge1xuICBmaXJzdE5hbWU6IFwiVDEwMDBcIixcbiAgbGFzdE5hbWU6IFwiVGVybWluYXRvclwiXG5cbiAgLy8gLy9kZWZpbmUgYSBnZXR0ZXJcbiAgLy8gZ2V0IGZ1bGxOYW1lKCkge1xuICAvLyAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWBcbiAgLy8gfSxcblxuICAvLyAvL2RlZmluZSBhIHNldHRlclxuICAvLyBzZXQgZnVsbE5hbWUobmFtZSkge1xuICAvLyAgIFt0aGlzLmZpcnN0TmFtZSwgdGhpcy5sYXN0TmFtZV0gPSBuYW1lLnNwbGl0KCcgJylcbiAgLy8gfVxufVxuXG5cblxuXG5cbi8qINCX0LDRh9C10Lw/P1xu0L/RgNC+0YHRgtC+0Lkg0YDQtdGE0LDQutGC0L7RgNC40L3Qs1xu0YPQstC10LvQuNGH0LXQvdC40LUg0LPQuNCx0LrQvtGB0YLQuFxuKi9cblxuZnVuY3Rpb24gVXNlcihuYW1lLCBhZ2UpIHtcbiAgW3RoaXMubmFtZSwgdGhpcy5hZ2VdID0gW25hbWUsIGFnZV07XG59XG5cbmxldCB1c2VyMSA9IG5ldyBVc2VyKFwiSm9oblwiLCAyNSlcblxuXG4vLyBidXQgaWYgeW91IHdhbnQgdG8gcmVmYWN0b3IgYWdlIHRvIGJpcnRoZGF0ZVxuLy8gXG5cbmZ1bmN0aW9uIFVzZXIobmFtZSwgYmlydGhkYXRlKSB7XG4gIFt0aGlzLm5hbWUsIHRoaXMuYmlydGhkYXRlXSA9IFtuYW1lLCBiaXJ0aGRhdGVdO1xuXG4gIC8vc2FmZSBnZXR0aW5nIGFnZSBmb3Igb2xkIGNvZGUgdXNhZ2VzIVxuICAvLyBnZXQgYWdlKCkge1xuICAvLyAgIHJldHVybiBuZXcgRGF0ZS5ub3coKS5nZXRGdWxsWWVhcigpIC0gdGhpcy5iaXJ0aGRhdGUuZ2V0RnVsbFllYXIoKVxuICAvLyB9XG59XG5cbmxldCB1c2VyMiA9IG5ldyBVc2VyKFwiSmFuZVwiLCBuZXcgRGF0ZSgxOTg0LCA2LCA0KSlcbmNvbnNvbGUubG9nKHVzZXIyLmFnZSlcblxuXG5cbi8qINCU0YDRg9Cz0LjQtSDQvNC10YLQvtC00Ysg0YDQsNCx0L7RgtGLINGB0L4g0YHQstC+0LnRgdGC0LLQsNC80LhcbiovXG51c2VyID0ge307XG5cblxuLy8g0L7QsdGK0Y/QstC70LXQvdC40LUg0L3QtdGB0LrQvtC70YzQutC40YUg0YHQstC+0LnRgdGC0LIg0YHRgNCw0LfRg1xuXG5PYmplY3QuZGVmaW5lRGVzY3JpcHRvcnModXNlciwge1xuICBmaXJzdE5hbWU6IHtcbiAgICB2YWx1ZTogXCJDYXB0YWluXCJcbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICB2YWx1ZTogXCJBbWVyaWNhXCJcbiAgfSxcbiAgZnVsbE5hbWU6IHtcbiAgICBnZXQgZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWBcbiAgICB9XG4gIH1cbn0pXG5cblxuXG4vLyBPdGhlciBtZXRob2RzXG5PYmplY3Qua2V5cyhvKTsgLy8gcmV0dXJuIG9ubHkgZW51bWVyYWJsZSBwcm9wZXJ0aWVzXG5cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobyk7IC8vcmV0dXJuIGRlc2NyaXB0b3Igb2JqZWN0XG5cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pOyAvL3JldHVybiBhbGwgcHJvcGVydGllc1xuXG5cbi8vUmFyZSB1c2VkIG1ldGhvZHNcbk9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhvKTsgLy9kaXNhYmxlIGFkZCBwcm9wcyB0byBvYmplY3RcblxuT2JqZWN0LnNlYWwobyk7ICAvL2Rpc2FibGUgYWRkL2RlbGV0ZSBwcm9wczsgbWFrZSBhbGwgcHJvcHMgY29uZmlndXJhYmxlOiBmYWxzZVxuXG5PYmplY3QuZnJlZXplKG8pOyAvL2Rpc2FibGUgYWRkL2VkaXQvZGVsZXRlIHByb3BzOyBjb25maWd1cmFibGU6ZmFsc2U7IHdyaXRhYmxlOiBmYWxzZVxuXG4vL2NoZWNraW5nXG5PYmplY3QuaXNFeHRlbnNpYmxlKG8pO1xuT2JqZWN0LmlzU2VhbGVkKG8pO1xuT2JqZWN0LmlzRnJvemVuKG8pO1xuXG5cblxuLy8g0JfQsNC00LDRh9CwOlxuLy/QktCw0Lwg0L/QvtC/0LDQuyDQsiDRgNGD0LrQuCDQutC+0LQg0L7QsdGK0LXQutGC0LAgVXNlciwg0LrQvtGC0L7RgNGL0Lkg0YXRgNCw0L3QuNGCINC40LzRjyDQuCDRhNCw0LzQuNC70LjRjiDQsiDRgdCy0L7QudGB0YLQstC1IHRoaXMuZnVsbE5hbWU6XG4vL9CY0LzRjyDQuCDRhNCw0LzQuNC70LjRjyDQstGB0LXQs9C00LAg0YDQsNC30LTQtdC70Y/RjtGC0YHRjyDQv9GA0L7QsdC10LvQvtC8LlxuLy/QodC00LXQu9Cw0LnRgtC1LCDRh9GC0L7QsdGLINCx0YvQu9C4INC00L7RgdGC0YPQv9C90Ysg0YHQstC+0LnRgdGC0LLQsCBmaXJzdE5hbWUg0LggbGFzdE5hbWUsINC/0YDQuNGH0ZHQvCDQvdC1INGC0L7Qu9GM0LrQviDQvdCwINGH0YLQtdC90LjQtSwg0L3QviDQuCDQvdCwINC30LDQv9C40YHRjCwg0LLQvtGCINGC0LDQujpcblxuZnVuY3Rpb24gVXNlcihmdWxsTmFtZSkge1xuICBcbiAgcmV0dXJuIHtcbiAgICBmdWxsTmFtZTogZnVsbE5hbWUsXG5cbiAgICAvL2ZpcnN0TmFtZVxuICAgIGdldCBmaXJzdE5hbWUoKXtcbiAgICAgIHJldHVybiBmdWxsTmFtZS5zcGxpdCgnICcpWzBdO1xuICAgIH0sXG5cbiAgICBzZXQgZmlyc3ROYW1lKG5ld05hbWUpe1xuICAgICAgdGhpcy5mdWxsTmFtZSA9IG5ld05hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lO1xuICAgIH0sXG5cbiAgICAvL2xhc3ROYW1lXG4gICAgZ2V0IGxhc3ROYW1lKCl7XG4gICAgICByZXR1cm4gZnVsbE5hbWUuc3BsaXQoJyAnKVsxXTtcbiAgICB9LFxuXG4gICAgc2V0IGxhc3ROYW1lKG5ld05hbWUpe1xuICAgICAgdGhpcy5mdWxsTmFtZSA9IHRoaXMuZmlyc3ROYW1lICsgJyAnICsgbmV3TmFtZTtcbiAgICB9ICBcbiAgfTtcbn1cblxuXG52YXIgdmFzeWEgPSBuZXcgVXNlcihcItCS0LDRgdC40LvQuNC5INCf0L7Qv9C60LjQvVwiKTtcblxuLy8g0YfRgtC10L3QuNC1IGZpcnN0TmFtZS9sYXN0TmFtZVxuY29uc29sZS5sb2coIHZhc3lhLmZpcnN0TmFtZSApOyAvLyDQktCw0YHQuNC70LjQuVxuY29uc29sZS5sb2coIHZhc3lhLmxhc3ROYW1lICk7IC8vINCf0L7Qv9C60LjQvVxuXG4vLyDQt9Cw0L/QuNGB0Ywg0LIgbGFzdE5hbWVcbnZhc3lhLmxhc3ROYW1lID0gJ9Ch0LjQtNC+0YDQvtCyJztcbmNvbnNvbGUubG9nKCB2YXN5YS5mdWxsTmFtZSApOyAvLyDQktCw0YHQuNC70LjQuSDQodC40LTQvtGA0L7QslxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
