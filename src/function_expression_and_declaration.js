/*Function Declaration and Expression*/

sum(1,5) //correct become



// Declaration
function sum (a, b) {
  return a + b;
}

// Expression
var sum = function (argument) {
  return a + b;
}


/*Key difference: FD создаются интерпретатором до начала выполнения кода (стадия инициализации)*/



// Anonymous function

function(){ /*do smth*/ }



/*Function constructor*/

new Function(params, code)
//params - string
//code - string

var sum = new Function('a,b' 'return a+b;')


/*Зачем: конструирование функций, код которых неизвестен, но строка с ним генерируется или
подгружается динамически.*/



//                      Function Declaration            Function Expression
// 
// Когда создается?     на стадии инициализации         на стадии исполнения 
// 
// вызов до 
// объявления?          ДА                              НЕТ
// 
// Условное обявление   НЕТ                             ДА
// в if?              
// 
// Вызов "на месте"?    НЕТ                             ДА
// 
// 



// Если нет явной причины для FE, то лучше использовать FD




