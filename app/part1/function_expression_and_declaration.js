"use strict";

/*Function Declaration and Expression*/

sum(1, 5); //correct become

// Declaration
function sum(a, b) {
  return a + b;
}

// Expression
var sum = function sum(argument) {
  return a + b;
};

/*Key difference: FD создаются интерпретатором до начала выполнения кода (стадия инициализации)*/

// Anonymous function

// function(){ /*do smth*/ }

/*Function constructor*/

// new Function(params, code)
//params - string
//code - string

// ****
// var sum = new Function('a,b' 'return a+b;')

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uX2V4cHJlc3Npb25fYW5kX2RlY2xhcmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQzs7O0FBQUEsQUFLUixTQUFTLEdBQUcsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2xCLFNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkOzs7QUFBQSxBQUdELElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFhLFFBQVEsRUFBRTtBQUM1QixTQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsImZpbGUiOiJwYXJ0MS9mdW5jdGlvbl9leHByZXNzaW9uX2FuZF9kZWNsYXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qRnVuY3Rpb24gRGVjbGFyYXRpb24gYW5kIEV4cHJlc3Npb24qL1xuXG5zdW0oMSw1KSAvL2NvcnJlY3QgYmVjb21lXG5cblxuXG4vLyBEZWNsYXJhdGlvblxuZnVuY3Rpb24gc3VtIChhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuLy8gRXhwcmVzc2lvblxudmFyIHN1bSA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYSArIGI7XG59XG5cblxuLypLZXkgZGlmZmVyZW5jZTogRkQg0YHQvtC30LTQsNGO0YLRgdGPINC40L3RgtC10YDQv9GA0LXRgtCw0YLQvtGA0L7QvCDQtNC+INC90LDRh9Cw0LvQsCDQstGL0L/QvtC70L3QtdC90LjRjyDQutC+0LTQsCAo0YHRgtCw0LTQuNGPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4KSovXG5cblxuXG4vLyBBbm9ueW1vdXMgZnVuY3Rpb25cblxuLy8gZnVuY3Rpb24oKXsgLypkbyBzbXRoKi8gfVxuXG5cblxuLypGdW5jdGlvbiBjb25zdHJ1Y3RvciovXG5cbi8vIG5ldyBGdW5jdGlvbihwYXJhbXMsIGNvZGUpXG4vL3BhcmFtcyAtIHN0cmluZ1xuLy9jb2RlIC0gc3RyaW5nXG5cbi8vICoqKipcbi8vIHZhciBzdW0gPSBuZXcgRnVuY3Rpb24oJ2EsYicgJ3JldHVybiBhK2I7JylcblxuXG4vKtCX0LDRh9C10Lw6INC60L7QvdGB0YLRgNGD0LjRgNC+0LLQsNC90LjQtSDRhNGD0L3QutGG0LjQuSwg0LrQvtC0INC60L7RgtC+0YDRi9GFINC90LXQuNC30LLQtdGB0YLQtdC9LCDQvdC+INGB0YLRgNC+0LrQsCDRgSDQvdC40Lwg0LPQtdC90LXRgNC40YDRg9C10YLRgdGPINC40LvQuFxu0L/QvtC00LPRgNGD0LbQsNC10YLRgdGPINC00LjQvdCw0LzQuNGH0LXRgdC60LguKi9cblxuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uIERlY2xhcmF0aW9uICAgICAgICAgICAgRnVuY3Rpb24gRXhwcmVzc2lvblxuLy8gXG4vLyDQmtC+0LPQtNCwINGB0L7Qt9C00LDQtdGC0YHRjz8gICAgINC90LAg0YHRgtCw0LTQuNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4ICAgICAgICAg0L3QsCDRgdGC0LDQtNC40Lgg0LjRgdC/0L7Qu9C90LXQvdC40Y8gXG4vLyBcbi8vINCy0YvQt9C+0LIg0LTQviBcbi8vINC+0LHRitGP0LLQu9C10L3QuNGPPyAgICAgICAgICDQlNCQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QldCiXG4vLyBcbi8vINCj0YHQu9C+0LLQvdC+0LUg0L7QsdGP0LLQu9C10L3QuNC1ICAg0J3QldCiICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNCQXG4vLyDQsiBpZj8gICAgICAgICAgICAgIFxuLy8gXG4vLyDQktGL0LfQvtCyIFwi0L3QsCDQvNC10YHRgtC1XCI/ICAgINCd0JXQoiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQkFxuLy8gXG4vLyBcblxuXG5cbi8vINCV0YHQu9C4INC90LXRgiDRj9Cy0L3QvtC5INC/0YDQuNGH0LjQvdGLINC00LvRjyBGRSwg0YLQviDQu9GD0YfRiNC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCBGRFxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
