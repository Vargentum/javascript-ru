"use strict";

/*CALL и APPLY позволяют явно передавать this внутрь функции
*/

//Syntax
// func.call(context, arg1,arg2 ..., argN);
// func.apply(context, [arg1, arg2, ..., argN]);

//Simple example
function showFullName() {
  console.log(this.firstName + ' ' + this.lastName);
}

var user = {
  firstName: "Jack",
  lastName: "Daniels"
};

//Функция будет вызвана с this = user
showFullName.call(user); // "Jack Daniels"

/*Одалживание метода (method borrowing)
можно взять метод одного объекта, в т.ч. встроенного и 
вызвать в контексте другого объекта!

*/

function joinData() {
  return [].join.call(arguments, ':');
}

joinData("10", "00"); // "10:00"

function anotherFunc() {
  var args = [].slice.call(arguments);
}

/*APPLY can work with dynamic data [arrays]*/
var arr = [];
arr.push(1);
arr.push(5);
arr.push(3);

Math.max.apply(nul, arr); //5

// if method not uses func, you can pass null instead of this

/*Задача: 1*/

//Дана функция sum. Создать аналогичную функцию sumArgs которая будет суммировать свои аргументы
function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

function sumArgs() {
  return [].reduce.call(arguments, function (prev, next) {
    return prev + next;
  }, 0);
}

console.log(sumArgs(1, 2, 3)); //6

/* Задача 2:
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
Например:
*/

function applyAll() {
  var args = [].slice.apply(arguments);
  return args[0].apply(null, args.slice(1));
}
function sum() {
  // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function (a, b) {
    return a + b;
  });
}

function mul() {
  // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function (a, b) {
    return a * b;
  });
}

console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24
console.log(applyAll(Math.max, 2, -2, 3)); // 3
console.log(applyAll(Math.min, 2, -2, 3)); // -2
//# sourceMappingURL=data:application/json;base64,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dEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUU7QUFBQyxBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRTtBQUFDIiwiZmlsZSI6Im9iamVjdHMvNi5jYWxsX2FuZF9hcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQ0FMTCDQuCBBUFBMWSDQv9C+0LfQstC+0LvRj9GO0YIg0Y/QstC90L4g0L/QtdGA0LXQtNCw0LLQsNGC0YwgdGhpcyDQstC90YPRgtGA0Ywg0YTRg9C90LrRhtC40LhcbiovXG5cbi8vU3ludGF4XG4vLyBmdW5jLmNhbGwoY29udGV4dCwgYXJnMSxhcmcyIC4uLiwgYXJnTik7XG4vLyBmdW5jLmFwcGx5KGNvbnRleHQsIFthcmcxLCBhcmcyLCAuLi4sIGFyZ05dKTtcblxuXG4vL1NpbXBsZSBleGFtcGxlXG5mdW5jdGlvbiBzaG93RnVsbE5hbWUoKXtcbiAgY29uc29sZS5sb2codGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lKTtcbn1cblxudmFyIHVzZXIgPSB7XG4gIGZpcnN0TmFtZTogXCJKYWNrXCIsXG4gIGxhc3ROYW1lOiBcIkRhbmllbHNcIlxufTtcblxuLy/QpNGD0L3QutGG0LjRjyDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvdCwINGBIHRoaXMgPSB1c2VyXG5zaG93RnVsbE5hbWUuY2FsbCh1c2VyKSAvLyBcIkphY2sgRGFuaWVsc1wiXG5cblxuXG4vKtCe0LTQsNC70LbQuNCy0LDQvdC40LUg0LzQtdGC0L7QtNCwIChtZXRob2QgYm9ycm93aW5nKVxu0LzQvtC20L3QviDQstC30Y/RgtGMINC80LXRgtC+0LQg0L7QtNC90L7Qs9C+INC+0LHRitC10LrRgtCwLCDQsiDRgi7Rhy4g0LLRgdGC0YDQvtC10L3QvdC+0LPQviDQuCBcbtCy0YvQt9Cy0LDRgtGMINCyINC60L7QvdGC0LXQutGB0YLQtSDQtNGA0YPQs9C+0LPQviDQvtCx0YrQtdC60YLQsCFcblxuKi9cblxuZnVuY3Rpb24gam9pbkRhdGEoKSB7XG4gIHJldHVybiBbXS5qb2luLmNhbGwoYXJndW1lbnRzLCAnOicpO1xufVxuXG5qb2luRGF0YShcIjEwXCIsIFwiMDBcIikgLy8gXCIxMDowMFwiXG5cblxuXG5mdW5jdGlvbiBhbm90aGVyRnVuYygpe1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbn1cblxuXG5cbi8qQVBQTFkgY2FuIHdvcmsgd2l0aCBkeW5hbWljIGRhdGEgW2FycmF5c10qL1xudmFyIGFyciA9IFtdXG5hcnIucHVzaCgxKVxuYXJyLnB1c2goNSlcbmFyci5wdXNoKDMpXG5cbk1hdGgubWF4LmFwcGx5KG51bCwgYXJyKTsgLy81XG5cbi8vIGlmIG1ldGhvZCBub3QgdXNlcyBmdW5jLCB5b3UgY2FuIHBhc3MgbnVsbCBpbnN0ZWFkIG9mIHRoaXNcblxuXG5cblxuLyrQl9Cw0LTQsNGH0LA6IDEqL1xuXG4vL9CU0LDQvdCwINGE0YPQvdC60YbQuNGPIHN1bS4g0KHQvtC30LTQsNGC0Ywg0LDQvdCw0LvQvtCz0LjRh9C90YPRjiDRhNGD0L3QutGG0LjRjiBzdW1BcmdzINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0YHRg9C80LzQuNGA0L7QstCw0YLRjCDRgdCy0L7QuCDQsNGA0LPRg9C80LXQvdGC0YtcbmZ1bmN0aW9uIHN1bShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN1bUFyZ3MoKSB7XG4gIHJldHVybiBbXS5yZWR1Y2UuY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICByZXR1cm4gcHJldiArIG5leHQ7XG4gIH0sIDApO1xufVxuXG5jb25zb2xlLmxvZyhzdW1BcmdzKDEsMiwzKSkgLy82XG5cblxuLyog0JfQsNC00LDRh9CwIDI6XG7QndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOIGFwcGx5QWxsKGZ1bmMsIGFyZzEsIGFyZzIuLi4pLCDQutC+0YLQvtGA0LDRjyDQv9C+0LvRg9GH0LDQtdGCINGE0YPQvdC60YbQuNGOIGZ1bmMg0Lgg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INCw0YDQs9GD0LzQtdC90YLQvtCyLlxu0J7QvdCwINC00L7Qu9C20L3QsCDQstGL0LfQstCw0YLRjCBmdW5jKGFyZzEsIGFyZzIuLi4pLCDRgtC+INC10YHRgtGMINC/0LXRgNC10LTQsNGC0Ywg0LIgZnVuYyDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLLCDQvdCw0YfQuNC90LDRjyDRgdC+INCy0YLQvtGA0L7Qs9C+LCDQuCDQstC+0LfQstGA0LDRgtC40YLRjCDRgNC10LfRg9C70YzRgtCw0YIuXG7QndCw0L/RgNC40LzQtdGAOlxuKi9cblxuZnVuY3Rpb24gYXBwbHlBbGwoKXtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5hcHBseShhcmd1bWVudHMpO1xuICByZXR1cm4gYXJnc1swXS5hcHBseShudWxsLCBhcmdzLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHN1bSgpIHsgLy8g0YHRg9C80LzQuNGA0YPQtdGCINCw0YDQs9GD0LzQtdC90YLRizogc3VtKDEsMiwzKSA9IDZcbiAgcmV0dXJuIFtdLnJlZHVjZS5jYWxsKGFyZ3VtZW50cywgZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG11bCgpIHsgLy8g0L/QtdGA0LXQvNC90L7QttCw0LXRgiDQsNGA0LPRg9C80LXQvdGC0Ys6IG11bCgyLDMsNCkgPSAyNFxuICByZXR1cm4gW10ucmVkdWNlLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgKiBiO1xuICB9KTtcbn1cblxuY29uc29sZS5sb2coIGFwcGx5QWxsKHN1bSwgMSwgMiwgMykgKTsgLy8gLT4gc3VtKDEsIDIsIDMpID0gNlxuY29uc29sZS5sb2coIGFwcGx5QWxsKG11bCwgMiwgMywgNCkgKTsgLy8gLT4gbXVsKDIsIDMsIDQpID0gMjRcbmNvbnNvbGUubG9nKCBhcHBseUFsbChNYXRoLm1heCwgMiwgLTIsIDMpICk7IC8vIDNcbmNvbnNvbGUubG9nKCBhcHBseUFsbChNYXRoLm1pbiwgMiwgLTIsIDMpICk7IC8vIC0yXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=