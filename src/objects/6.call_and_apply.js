/*CALL и APPLY позволяют явно передавать this внутрь функции
*/

//Syntax
func.call(context, arg1,arg2 ..., argN);
func.apply(context, [arg1, arg2, ..., argN]);


//Simple example
function showFullName(){
  console.log(this.firstName + ' ' + this.lastName);
}

var user = {
  firstName: "Jack",
  lastName: "Daniels"
};

//Функция будет вызвана с this = user
showFullName.call(user) // "Jack Daniels"



/*Одалживание метода (method borrowing)
можно взять метод одного объекта, в т.ч. встроенного и 
вызвать в контексте другого объекта!

*/

function joinData() {
  return [].join.call(arguments, ':');
}

joinData("10", "00") // "10:00"



function anotherFunc(){
  var args = [].slice.call(arguments);
}



/*APPLY can work with dynamic data [arrays]*/
var arr = []
arr.push(1)
arr.push(5)
arr.push(3)

Math.max.apply(nul, arr); //5

// if method not uses func, you can pass null instead of this




/*Задача: 1*/

//Дана функция sum. Создать аналогичную функцию sumArgs которая будет суммировать свои аргументы
function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

function sumArgs() {
  return [].reduce.call(arguments, function(prev, next) {
    return prev + next;
  }, 0);
}

console.log(sumArgs(1,2,3)) //6


/* Задача 2:
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
Например:
*/

function applyAll(){
  var args = [].slice.apply(arguments);
  return args[0].apply(null, args.slice(1));
}
function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
console.log( applyAll(Math.max, 2, -2, 3) ); // 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2



