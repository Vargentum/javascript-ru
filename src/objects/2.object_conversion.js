/*Задача 1: почему*/
a = ['x'] === 'x'  //true

/*Решение:
потому что оператор нестрогого сравнения производит преобразование типов,
массив преобразуется в строку с помощью toString(), результат 'x' равен 'x'. Отсюда true*/



/*Задача 2: что выведет alert?*/
var foo = {
  toString: function() {
    return 'foo';
  },
  valueOf: function() {
    return 2;
  }
};

alert( foo );
alert( foo + 1 );
alert( foo + "3" );

/*Решение:
1. выведется значение foo.toString() -> 'foo'
2. оператор + ВСЕГДА к преобразованию объекта к числовому типу
   с помощью .valueOf(). Отсюда foo.valueOf() => 2 + 1 => 3
3. оператор + преобразовывает в 2. Отсюда foo.toString() => 2 + '3' => '23'
*/



/*Задача 3: почему?*/
alert( [] == [] ); // false
alert( [] == ![] ); // true

/*Решение:
1. объекты равны только когда это один и тот же объект. Два пустых массива - разные, поэтому неравны
2. Первым выполняется оператор ![] => false, получает [] == false 
   проверка между объектом и примитивом вызывает численное преобразование, численного нет , поэтому строковое, отсюда
   '' == false
   Сравнение различных типов вызывает численное преобразование слева и справа
   0 == 0
*/





/*Задача 4:*/
// new Date(0) - 0
// new Array(1)[0] + ""
// ({})[0] 
// [1] + 1
// [1,2] + [3,4]
// [] + null + 1
// [[0]][0][0]
// ({} + {})

/*Решение:
1. 0 - оператор - выполняет valueOf() для объекта Date => 0 - 0 = 0
2. 'undefined' - new Array(1) создает массив с одним элементом undefined => new Array(1)[0] == undefined. 
       Оператор плюс выполняет строковое преобразование для undefined, тк числовое недоступно => "undefined" затем конкатенация
3. undefined
4.'11' - массив преобразовывается при помощи toString() потом конкатенация строк
5.'1,23,4' - то же что и в предыдущем пункте
6.'null1' - сначала массив к строке '', первый элемент строка - значит оператор + производит конкатенацию
7. 0 - запрашивается 0 элемент 0 элемента многомерного массива [[0]]
8. '[Object, object][Object, object] - строковое преобразование объекта и конкатенация строк*/



/*Задача 5:
Напишите функцию sum, которая будет работать так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15*/

// sum() must return itself (mine idea!)
/*TODO:
  init accum
  accumulate value inside clojure
  modify toString function, to return total sum
  (toString will be executed when next parent function call is impossible)
  */

/*Решение:*/
function sum(initVal){
  let accumulator = initVal;
  let add = x => {  //add clojure
    x + accumulator
    return add;
  };
  add.toString = () => accumulator //be useful when execution stack is ended
  return add; // return clojure(without execution!)
}
console.log(sum(1)(2)(3));





