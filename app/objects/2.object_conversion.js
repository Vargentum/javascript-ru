'use strict';

/*Задача 1: почему*/
a = ['x'] === 'x'; //true

/*Решение:
потому что оператор нестрогого сравнения производит преобразование типов,
массив преобразуется в строку с помощью toString(), результат 'x' равен 'x'. Отсюда true*/

/*Задача 2: что выведет?*/
var foo = {
  toString: function toString() {
    return 'foo';
  },
  valueOf: function valueOf() {
    return 2;
  }
};

var result = foo;
var result = foo + 1;
var result = foo + "3";

/*Решение:
1. выведется значение foo.toString() -> 'foo'
2. оператор + ВСЕГДА к преобразованию объекта к числовому типу
   с помощью .valueOf(). Отсюда foo.valueOf() => 2 + 1 => 3
3. оператор + преобразовывает в 2. Отсюда foo.toString() => 2 + '3' => '23'
*/

/*Задача 3: почему?*/
var result = [] == []; // false
var result = [] == ![]; // true

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
function sum(initVal) {
  var accumulator = initVal;
  var add = function add(x) {
    //add clojure
    x + accumulator;
    return add;
  };
  add.toString = function () {
    return accumulator;
  }; //be useful when execution stack is ended
  return add; // return clojure(without execution!)
}
console.log(sum(1)(2)(3));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjIub2JqZWN0X2NvbnZlcnNpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRzs7Ozs7OztBQUFBLEFBU2pCLElBQUksR0FBRyxHQUFHO0FBQ1IsVUFBUSxFQUFFLG9CQUFXO0FBQ25CLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7QUFDRCxTQUFPLEVBQUUsbUJBQVc7QUFDbEIsV0FBTyxDQUFDLENBQUM7R0FDVjtDQUNGLENBQUM7O0FBRUYsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckIsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7QUFBQyxBQVl2QixJQUFJLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRTtBQUFDLEFBQ3RCLElBQUksTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLEFBeUR2QixTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUM7QUFDbkIsTUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzFCLE1BQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFHLENBQUMsRUFBSTs7QUFDYixLQUFDLEdBQUcsV0FBVyxDQUFBO0FBQ2YsV0FBTyxHQUFHLENBQUM7R0FDWixDQUFDO0FBQ0YsS0FBRyxDQUFDLFFBQVEsR0FBRztXQUFNLFdBQVc7R0FBQTtBQUFBLEFBQ2hDLFNBQU8sR0FBRztBQUFDLENBQ1o7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im9iamVjdHMvMi5vYmplY3RfY29udmVyc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8q0JfQsNC00LDRh9CwIDE6INC/0L7Rh9C10LzRgyovXG5hID0gWyd4J10gPT09ICd4JyAgLy90cnVlXG5cbi8q0KDQtdGI0LXQvdC40LU6XG7Qv9C+0YLQvtC80YMg0YfRgtC+INC+0L/QtdGA0LDRgtC+0YAg0L3QtdGB0YLRgNC+0LPQvtCz0L4g0YHRgNCw0LLQvdC10L3QuNGPINC/0YDQvtC40LfQstC+0LTQuNGCINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0YLQuNC/0L7QsixcbtC80LDRgdGB0LjQsiDQv9GA0LXQvtCx0YDQsNC30YPQtdGC0YHRjyDQsiDRgdGC0YDQvtC60YMg0YEg0L/QvtC80L7RidGM0Y4gdG9TdHJpbmcoKSwg0YDQtdC30YPQu9GM0YLQsNGCICd4JyDRgNCw0LLQtdC9ICd4Jy4g0J7RgtGB0Y7QtNCwIHRydWUqL1xuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMjog0YfRgtC+INCy0YvQstC10LTQtdGCPyovXG52YXIgZm9vID0ge1xuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdmb28nO1xuICB9LFxuICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxufTtcblxudmFyIHJlc3VsdCA9IGZvbztcbnZhciByZXN1bHQgPSBmb28gKyAxO1xudmFyIHJlc3VsdCA9IGZvbyArIFwiM1wiO1xuXG4vKtCg0LXRiNC10L3QuNC1OlxuMS4g0LLRi9Cy0LXQtNC10YLRgdGPINC30L3QsNGH0LXQvdC40LUgZm9vLnRvU3RyaW5nKCkgLT4gJ2ZvbydcbjIuINC+0L/QtdGA0LDRgtC+0YAgKyDQktCh0JXQk9CU0JAg0Log0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjRjiDQvtCx0YrQtdC60YLQsCDQuiDRh9C40YHQu9C+0LLQvtC80YMg0YLQuNC/0YNcbiAgINGBINC/0L7QvNC+0YnRjNGOIC52YWx1ZU9mKCkuINCe0YLRgdGO0LTQsCBmb28udmFsdWVPZigpID0+IDIgKyAxID0+IDNcbjMuINC+0L/QtdGA0LDRgtC+0YAgKyDQv9GA0LXQvtCx0YDQsNC30L7QstGL0LLQsNC10YIg0LIgMi4g0J7RgtGB0Y7QtNCwIGZvby50b1N0cmluZygpID0+IDIgKyAnMycgPT4gJzIzJ1xuKi9cblxuXG5cbi8q0JfQsNC00LDRh9CwIDM6INC/0L7Rh9C10LzRgz8qL1xudmFyIHJlc3VsdCA9IFtdID09IFtdOyAvLyBmYWxzZVxudmFyIHJlc3VsdCA9IFtdID09ICFbXTsgLy8gdHJ1ZVxuXG4vKtCg0LXRiNC10L3QuNC1OlxuMS4g0L7QsdGK0LXQutGC0Ysg0YDQsNCy0L3RiyDRgtC+0LvRjNC60L4g0LrQvtCz0LTQsCDRjdGC0L4g0L7QtNC40L0g0Lgg0YLQvtGCINC20LUg0L7QsdGK0LXQutGCLiDQlNCy0LAg0L/Rg9GB0YLRi9GFINC80LDRgdGB0LjQstCwIC0g0YDQsNC30L3Ri9C1LCDQv9C+0Y3RgtC+0LzRgyDQvdC10YDQsNCy0L3Ri1xuMi4g0J/QtdGA0LLRi9C8INCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0L7Qv9C10YDQsNGC0L7RgCAhW10gPT4gZmFsc2UsINC/0L7Qu9GD0YfQsNC10YIgW10gPT0gZmFsc2UgXG4gICDQv9GA0L7QstC10YDQutCwINC80LXQttC00YMg0L7QsdGK0LXQutGC0L7QvCDQuCDQv9GA0LjQvNC40YLQuNCy0L7QvCDQstGL0LfRi9Cy0LDQtdGCINGH0LjRgdC70LXQvdC90L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1LCDRh9C40YHQu9C10L3QvdC+0LPQviDQvdC10YIgLCDQv9C+0Y3RgtC+0LzRgyDRgdGC0YDQvtC60L7QstC+0LUsINC+0YLRgdGO0LTQsFxuICAgJycgPT0gZmFsc2VcbiAgINCh0YDQsNCy0L3QtdC90LjQtSDRgNCw0LfQu9C40YfQvdGL0YUg0YLQuNC/0L7QsiDQstGL0LfRi9Cy0LDQtdGCINGH0LjRgdC70LXQvdC90L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INGB0LvQtdCy0LAg0Lgg0YHQv9GA0LDQstCwXG4gICAwID09IDBcbiovXG5cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgNDoqL1xuLy8gbmV3IERhdGUoMCkgLSAwXG4vLyBuZXcgQXJyYXkoMSlbMF0gKyBcIlwiXG4vLyAoe30pWzBd4oCoXG4vLyBbMV0gKyAxXG4vLyBbMSwyXSArIFszLDRdXG4vLyBbXSArIG51bGwgKyAxXG4vLyBbWzBdXVswXVswXVxuLy8gKHt9ICsge30pXG5cbi8q0KDQtdGI0LXQvdC40LU6XG4xLiAwIC0g0L7Qv9C10YDQsNGC0L7RgCAtINCy0YvQv9C+0LvQvdGP0LXRgiB2YWx1ZU9mKCkg0LTQu9GPINC+0LHRitC10LrRgtCwIERhdGUgPT4gMCAtIDAgPSAwXG4yLiAndW5kZWZpbmVkJyAtIG5ldyBBcnJheSgxKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIg0YEg0L7QtNC90LjQvCDRjdC70LXQvNC10L3RgtC+0LwgdW5kZWZpbmVkID0+IG5ldyBBcnJheSgxKVswXSA9PSB1bmRlZmluZWQuIFxuICAgICAgINCe0L/QtdGA0LDRgtC+0YAg0L/Qu9GO0YEg0LLRi9C/0L7Qu9C90Y/QtdGCINGB0YLRgNC+0LrQvtCy0L7QtSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC00LvRjyB1bmRlZmluZWQsINGC0Log0YfQuNGB0LvQvtCy0L7QtSDQvdC10LTQvtGB0YLRg9C/0L3QviA9PiBcInVuZGVmaW5lZFwiINC30LDRgtC10Lwg0LrQvtC90LrQsNGC0LXQvdCw0YbQuNGPXG4zLiB1bmRlZmluZWRcbjQuJzExJyAtINC80LDRgdGB0LjQsiDQv9GA0LXQvtCx0YDQsNC30L7QstGL0LLQsNC10YLRgdGPINC/0YDQuCDQv9C+0LzQvtGJ0LggdG9TdHJpbmcoKSDQv9C+0YLQvtC8INC60L7QvdC60LDRgtC10L3QsNGG0LjRjyDRgdGC0YDQvtC6XG41LicxLDIzLDQnIC0g0YLQviDQttC1INGH0YLQviDQuCDQsiDQv9GA0LXQtNGL0LTRg9GJ0LXQvCDQv9GD0L3QutGC0LVcbjYuJ251bGwxJyAtINGB0L3QsNGH0LDQu9CwINC80LDRgdGB0LjQsiDQuiDRgdGC0YDQvtC60LUgJycsINC/0LXRgNCy0YvQuSDRjdC70LXQvNC10L3RgiDRgdGC0YDQvtC60LAgLSDQt9C90LDRh9C40YIg0L7Qv9C10YDQsNGC0L7RgCArINC/0YDQvtC40LfQstC+0LTQuNGCINC60L7QvdC60LDRgtC10L3QsNGG0LjRjlxuNy4gMCAtINC30LDQv9GA0LDRiNC40LLQsNC10YLRgdGPIDAg0Y3Qu9C10LzQtdC90YIgMCDRjdC70LXQvNC10L3RgtCwINC80L3QvtCz0L7QvNC10YDQvdC+0LPQviDQvNCw0YHRgdC40LLQsCBbWzBdXVxuOC4gJ1tPYmplY3QsIG9iamVjdF1bT2JqZWN0LCBvYmplY3RdIC0g0YHRgtGA0L7QutC+0LLQvtC1INC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0L7QsdGK0LXQutGC0LAg0Lgg0LrQvtC90LrQsNGC0LXQvdCw0YbQuNGPINGB0YLRgNC+0LoqL1xuXG5cblxuLyrQl9Cw0LTQsNGH0LAgNTpcbtCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4gc3VtLCDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINGA0LDQsdC+0YLQsNGC0Ywg0YLQsNC6OlxuXG5zdW0oMSkoMikgPT0gMzsgLy8gMSArIDJcbnN1bSgxKSgyKSgzKSA9PSA2OyAvLyAxICsgMiArIDNcbnN1bSg1KSgtMSkoMikgPT0gNlxuc3VtKDYpKC0xKSgtMikoLTMpID09IDBcbnN1bSgwKSgxKSgyKSgzKSg0KSg1KSA9PSAxNSovXG5cbi8vIHN1bSgpIG11c3QgcmV0dXJuIGl0c2VsZiAobWluZSBpZGVhISlcbi8qVE9ETzpcbiAgaW5pdCBhY2N1bVxuICBhY2N1bXVsYXRlIHZhbHVlIGluc2lkZSBjbG9qdXJlXG4gIG1vZGlmeSB0b1N0cmluZyBmdW5jdGlvbiwgdG8gcmV0dXJuIHRvdGFsIHN1bVxuICAodG9TdHJpbmcgd2lsbCBiZSBleGVjdXRlZCB3aGVuIG5leHQgcGFyZW50IGZ1bmN0aW9uIGNhbGwgaXMgaW1wb3NzaWJsZSlcbiAgKi9cblxuLyrQoNC10YjQtdC90LjQtToqL1xuZnVuY3Rpb24gc3VtKGluaXRWYWwpe1xuICBsZXQgYWNjdW11bGF0b3IgPSBpbml0VmFsO1xuICBsZXQgYWRkID0geCA9PiB7ICAvL2FkZCBjbG9qdXJlXG4gICAgeCArIGFjY3VtdWxhdG9yXG4gICAgcmV0dXJuIGFkZDtcbiAgfTtcbiAgYWRkLnRvU3RyaW5nID0gKCkgPT4gYWNjdW11bGF0b3IgLy9iZSB1c2VmdWwgd2hlbiBleGVjdXRpb24gc3RhY2sgaXMgZW5kZWRcbiAgcmV0dXJuIGFkZDsgLy8gcmV0dXJuIGNsb2p1cmUod2l0aG91dCBleGVjdXRpb24hKVxufVxuY29uc29sZS5sb2coc3VtKDEpKDIpKDMpKTtcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
