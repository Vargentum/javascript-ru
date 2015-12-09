"use strict";

/*
Alteration mark |
used to chose one from some variants (OR)

Example: javascript|html|css

Similar to [ab] but not symbolic and can contain any
  - symbols
  - regexp parts

Alteration borders with ()
Example: /before(XXX|YYY)after/
         find beforeXXXafter or beforeYYYafter
*/

function example1() {
  var reg = /html|css|javascript/ig;
  var str = "Сначала появился HTML, затем CSS, потом JavaScript";

  console.log(str.match(reg)); // 'HTML', 'CSS', 'JavaScript'
}
// example1()

/*
Существует много языков программирования, например Java, JavaScript, PHP, C, C++.
Напишите регулярное выражение, 
которое найдёт их все в строке «Java JavaScript PHP C++ C»
*/

function task1() {
  var reg = /java(script)?|php|c(\+\+)?/gi;
  var str = "There are Java JavaScript PHP C++ C and some other fine langugages.";
  console.log(str.match(reg));
}
// task1()

/*
Найдите в тексте при помощи регэкспа строки в двойных кавычках "...".

В строке поддерживается экранирование при помощи слеша — 
примерно в таком же виде, как в обычных строках JavaScript.
То есть, строка может содержать любые символы, экранированные слэшем,
в частности: \", \n, и даже сам слэш в экранированном виде: \\.

Здесь особо важно, что двойная кавычка после слэша не оканчивает строку,
а считается её частью.
*/

function task2() {
  var reg = /"[\s\S]+?[^\\]"/ig; //can't get last occurrence
  var str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\r\\n\\\\" .. ';
  console.log(str.match(reg)); //  .. "test me" .. "Скажи \"Привет\"!" .. "\r\n\\" ..

  //use greedy search
  var regG = /"(\\.|[^\\"])*"/ig; //full worable
  console.log(str.match(regG)); //  .. "test me" .. "Скажи \"Привет\"!" .. "\r\n\\" ..
}
// task2()

/*
Напишите регулярное выражение, которое будет искать в тексте тег <style>.
Подходят как обычный тег <style>, так и вариант с атрибутами <style type="...">.

Но регулярное выражение не должно находить <styler>!

*/

function task3() {
  var reg = /<(style)([\s\S]*?)>.*?<\/\1>/ig; // why \2 not works?
  var str = "<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>Learn javascript.ru</title><style type=text/css>body{color:red}</style><style>body{color:red}</style><styler>body {color: red}</styler><body><h1>Welcome learn.javascript.ru!</h1><script src=./RegExp/07.alteration_mark.js></script>";
  console.log(str.match(reg));
}
task3();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA3LmFsdGVyYXRpb25fbWFyay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLHVCQUF1QixDQUFBO0FBQ2pDLE1BQUksR0FBRyxHQUFHLG9EQUFvRCxDQUFBOztBQUU5RCxTQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUU7QUFBQSxDQUM5Qjs7Ozs7Ozs7O0FBQUEsQUFXRCxTQUFTLEtBQUssR0FBSTtBQUNoQixNQUFJLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQTtBQUN4QyxNQUFJLEdBQUcsR0FBRyxxRUFBcUUsQ0FBQTtBQUMvRSxTQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQTtDQUM5Qjs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFpQkQsU0FBUyxLQUFLLEdBQUk7QUFDaEIsTUFBSSxHQUFHLEdBQUcsbUJBQW1CO0FBQUEsQUFDN0IsTUFBSSxHQUFHLEdBQUcsNERBQTRELENBQUM7QUFDdkUsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7QUFBQyxBQUc1QixNQUFJLElBQUksR0FBRyxtQkFBbUI7QUFBQSxBQUM5QixTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFBQyxDQUM5Qjs7Ozs7Ozs7Ozs7QUFBQSxBQWNELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksR0FBRyxHQUFHLGdDQUFnQztBQUFBLEFBQzFDLE1BQUksR0FBRyx5U0FBeVMsQ0FBQTtBQUNoVCxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUM3QjtBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6IlJlZ0V4cC8wNy5hbHRlcmF0aW9uX21hcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWx0ZXJhdGlvbiBtYXJrIHxcbnVzZWQgdG8gY2hvc2Ugb25lIGZyb20gc29tZSB2YXJpYW50cyAoT1IpXG5cbkV4YW1wbGU6IGphdmFzY3JpcHR8aHRtbHxjc3NcblxuU2ltaWxhciB0byBbYWJdIGJ1dCBub3Qgc3ltYm9saWMgYW5kIGNhbiBjb250YWluIGFueVxuICAtIHN5bWJvbHNcbiAgLSByZWdleHAgcGFydHNcblxuQWx0ZXJhdGlvbiBib3JkZXJzIHdpdGggKClcbkV4YW1wbGU6IC9iZWZvcmUoWFhYfFlZWSlhZnRlci9cbiAgICAgICAgIGZpbmQgYmVmb3JlWFhYYWZ0ZXIgb3IgYmVmb3JlWVlZYWZ0ZXJcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUxICgpIHtcbiAgbGV0IHJlZyA9IC9odG1sfGNzc3xqYXZhc2NyaXB0L2lnXG4gIGxldCBzdHIgPSBcItCh0L3QsNGH0LDQu9CwINC/0L7Rj9Cy0LjQu9GB0Y8gSFRNTCwg0LfQsNGC0LXQvCBDU1MsINC/0L7RgtC+0LwgSmF2YVNjcmlwdFwiXG5cbiAgY29uc29sZS5sb2coIHN0ci5tYXRjaChyZWcpICkgLy8gJ0hUTUwnLCAnQ1NTJywgJ0phdmFTY3JpcHQnXG59XG4vLyBleGFtcGxlMSgpXG5cblxuXG4vKlxu0KHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQvdC+0LPQviDRj9C30YvQutC+0LIg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y8sINC90LDQv9GA0LjQvNC10YAgSmF2YSwgSmF2YVNjcmlwdCwgUEhQLCBDLCBDKysuXG7QndCw0L/QuNGI0LjRgtC1INGA0LXQs9GD0LvRj9GA0L3QvtC1INCy0YvRgNCw0LbQtdC90LjQtSwgXG7QutC+0YLQvtGA0L7QtSDQvdCw0LnQtNGR0YIg0LjRhSDQstGB0LUg0LIg0YHRgtGA0L7QutC1IMKrSmF2YSBKYXZhU2NyaXB0IFBIUCBDKysgQ8K7XG4qL1xuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG4gIGxldCByZWcgPSAvamF2YShzY3JpcHQpP3xwaHB8YyhcXCtcXCspPy9naVxuICBsZXQgc3RyID0gXCJUaGVyZSBhcmUgSmF2YSBKYXZhU2NyaXB0IFBIUCBDKysgQyBhbmQgc29tZSBvdGhlciBmaW5lIGxhbmd1Z2FnZXMuXCIgIFxuICBjb25zb2xlLmxvZyggc3RyLm1hdGNoKHJlZykgKVxufVxuLy8gdGFzazEoKVxuXG5cblxuLypcbtCd0LDQudC00LjRgtC1INCyINGC0LXQutGB0YLQtSDQv9GA0Lgg0L/QvtC80L7RidC4INGA0LXQs9GN0LrRgdC/0LAg0YHRgtGA0L7QutC4INCyINC00LLQvtC50L3Ri9GFINC60LDQstGL0YfQutCw0YUgXCIuLi5cIi5cblxu0JIg0YHRgtGA0L7QutC1INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8g0Y3QutGA0LDQvdC40YDQvtCy0LDQvdC40LUg0L/RgNC4INC/0L7QvNC+0YnQuCDRgdC70LXRiNCwIOKAlCBcbtC/0YDQuNC80LXRgNC90L4g0LIg0YLQsNC60L7QvCDQttC1INCy0LjQtNC1LCDQutCw0Log0LIg0L7QsdGL0YfQvdGL0YUg0YHRgtGA0L7QutCw0YUgSmF2YVNjcmlwdC5cbtCi0L4g0LXRgdGC0YwsINGB0YLRgNC+0LrQsCDQvNC+0LbQtdGCINGB0L7QtNC10YDQttCw0YLRjCDQu9GO0LHRi9C1INGB0LjQvNCy0L7Qu9GLLCDRjdC60YDQsNC90LjRgNC+0LLQsNC90L3Ri9C1INGB0LvRjdGI0LXQvCxcbtCyINGH0LDRgdGC0L3QvtGB0YLQuDogXFxcIiwgXFxuLCDQuCDQtNCw0LbQtSDRgdCw0Lwg0YHQu9GN0Ygg0LIg0Y3QutGA0LDQvdC40YDQvtCy0LDQvdC90L7QvCDQstC40LTQtTogXFxcXC5cblxu0JfQtNC10YHRjCDQvtGB0L7QsdC+INCy0LDQttC90L4sINGH0YLQviDQtNCy0L7QudC90LDRjyDQutCw0LLRi9GH0LrQsCDQv9C+0YHQu9C1INGB0LvRjdGI0LAg0L3QtSDQvtC60LDQvdGH0LjQstCw0LXRgiDRgdGC0YDQvtC60YMsXG7QsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0LXRkSDRh9Cw0YHRgtGM0Y4uXG4qL1xuXG5mdW5jdGlvbiB0YXNrMiAoKSB7XG4gIGxldCByZWcgPSAvXCJbXFxzXFxTXSs/W15cXFxcXVwiL2lnIC8vY2FuJ3QgZ2V0IGxhc3Qgb2NjdXJyZW5jZVxuICBsZXQgc3RyID0gJyAuLiBcInRlc3QgbWVcIiAuLiBcItCh0LrQsNC20LggXFxcXFwi0J/RgNC40LLQtdGCXFxcXFwiIVwiIC4uIFwiXFxcXHJcXFxcblxcXFxcXFxcXCIgLi4gJztcbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKHJlZykpOyAvLyAgLi4gXCJ0ZXN0IG1lXCIgLi4gXCLQodC60LDQttC4IFxcXCLQn9GA0LjQstC10YJcXFwiIVwiIC4uIFwiXFxyXFxuXFxcXFwiIC4uXG5cbiAgLy91c2UgZ3JlZWR5IHNlYXJjaFxuICBsZXQgcmVnRyA9IC9cIihcXFxcLnxbXlxcXFxcIl0pKlwiL2lnIC8vZnVsbCB3b3JhYmxlXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChyZWdHKSk7IC8vICAuLiBcInRlc3QgbWVcIiAuLiBcItCh0LrQsNC20LggXFxcItCf0YDQuNCy0LXRglxcXCIhXCIgLi4gXCJcXHJcXG5cXFxcXCIgLi5cbn1cbi8vIHRhc2syKClcblxuXG5cblxuLypcbtCd0LDQv9C40YjQuNGC0LUg0YDQtdCz0YPQu9GP0YDQvdC+0LUg0LLRi9GA0LDQttC10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQsdGD0LTQtdGCINC40YHQutCw0YLRjCDQsiDRgtC10LrRgdGC0LUg0YLQtdCzIDxzdHlsZT4uXG7Qn9C+0LTRhdC+0LTRj9GCINC60LDQuiDQvtCx0YvRh9C90YvQuSDRgtC10LMgPHN0eWxlPiwg0YLQsNC6INC4INCy0LDRgNC40LDQvdGCINGBINCw0YLRgNC40LHRg9GC0LDQvNC4IDxzdHlsZSB0eXBlPVwiLi4uXCI+LlxuXG7QndC+INGA0LXQs9GD0LvRj9GA0L3QvtC1INCy0YvRgNCw0LbQtdC90LjQtSDQvdC1INC00L7Qu9C20L3QviDQvdCw0YXQvtC00LjRgtGMIDxzdHlsZXI+IVxuXG4qL1xuXG5mdW5jdGlvbiB0YXNrMyAoKSB7XG4gIGxldCByZWcgPSAvPChzdHlsZSkoW1xcc1xcU10qPyk+Lio/PFxcL1xcMT4vaWcgLy8gd2h5IFxcMiBub3Qgd29ya3M/IFxuICBsZXQgc3RyID0gYDwhRE9DVFlQRSBodG1sPjxodG1sIGxhbmc9ZW4+PGhlYWQ+PG1ldGEgY2hhcnNldD1VVEYtOD48dGl0bGU+TGVhcm4gamF2YXNjcmlwdC5ydTwvdGl0bGU+PHN0eWxlIHR5cGU9dGV4dC9jc3M+Ym9keXtjb2xvcjpyZWR9PC9zdHlsZT48c3R5bGU+Ym9keXtjb2xvcjpyZWR9PC9zdHlsZT48c3R5bGVyPmJvZHkge2NvbG9yOiByZWR9PC9zdHlsZXI+PGJvZHk+PGgxPldlbGNvbWUgbGVhcm4uamF2YXNjcmlwdC5ydSE8L2gxPjxzY3JpcHQgc3JjPS4vUmVnRXhwLzA3LmFsdGVyYXRpb25fbWFyay5qcz48L3NjcmlwdD5gXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChyZWcpKTtcbn1cbnRhc2szKClcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
