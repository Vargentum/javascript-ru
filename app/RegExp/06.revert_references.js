"use strict";

/*
$n - work with n captured group ()
works with .replace() method

you can reorganize, or implement some new look to string
*/

function example1() {
  var name = "Vlad Argentum";

  console.log(name.replace(/([a-z]+) ([a-z]+)/i, "$2 $1")); //Argentum Vlad
}
// example1()

/*
Use \n inside pattern to get reference to used part of patter:
1 - get reference to used type of quotation mark to properly handle the string

no access to excluded (:? groups)
*/

function example2() {
  var str = "He said: \"She's the one!\".";

  var patternIncorrect = /["'].+?["']/gi;
  var pattern = /(["']).+?\1/gi; //1

  console.log(str.match(patternIncorrect));
  console.log(str.match(pattern));
}
// example2()

/*
Find BB tags
ББ-тег имеет вид [имя]...[/имя], где имя — слово, одно из: b, url, quote.
ББ-теги могут быть вложенными, но сам в себя тег быть вложен не может
*/

function task1() {
  var bbPattern = /\[(b|url|quote)\].*?\[\/\1\]/ig;
  var str = "..[url]http://ya.ru[/url]..";

  console.log(str.match(bbPattern));
  console.log(str1.match(bbPattern));
}
// task1()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2LnJldmVydF9yZWZlcmVuY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksSUFBSSxHQUFHLGVBQWUsQ0FBQTs7QUFFMUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUEsQ0FDekQ7Ozs7Ozs7Ozs7QUFBQSxBQVlELFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLDhCQUE4QixDQUFDOztBQUV6QyxNQUFJLGdCQUFnQixHQUFHLGVBQWUsQ0FBQTtBQUN0QyxNQUFJLE9BQU8sR0FBRyxlQUFlOztBQUFBLEFBRTdCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7QUFDeEMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Q0FDaEM7Ozs7Ozs7OztBQUFBLEFBVUQsU0FBUyxLQUFLLEdBQUk7QUFDaEIsTUFBSSxTQUFTLEdBQUcsZ0NBQWdDLENBQUE7QUFDaEQsTUFBSSxHQUFHLEdBQUcsNkJBQTZCLENBQUE7O0FBRXZDLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLFNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0NBQ25DOztBQUFBIiwiZmlsZSI6IlJlZ0V4cC8wNi5yZXZlcnRfcmVmZXJlbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4kbiAtIHdvcmsgd2l0aCBuIGNhcHR1cmVkIGdyb3VwICgpXG53b3JrcyB3aXRoIC5yZXBsYWNlKCkgbWV0aG9kXG5cbnlvdSBjYW4gcmVvcmdhbml6ZSwgb3IgaW1wbGVtZW50IHNvbWUgbmV3IGxvb2sgdG8gc3RyaW5nXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIGxldCBuYW1lID0gXCJWbGFkIEFyZ2VudHVtXCJcblxuICBjb25zb2xlLmxvZyhuYW1lLnJlcGxhY2UoLyhbYS16XSspIChbYS16XSspL2ksIFwiJDIgJDFcIikpIC8vQXJnZW50dW0gVmxhZFxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLypcblVzZSBcXG4gaW5zaWRlIHBhdHRlcm4gdG8gZ2V0IHJlZmVyZW5jZSB0byB1c2VkIHBhcnQgb2YgcGF0dGVyOlxuMSAtIGdldCByZWZlcmVuY2UgdG8gdXNlZCB0eXBlIG9mIHF1b3RhdGlvbiBtYXJrIHRvIHByb3Blcmx5IGhhbmRsZSB0aGUgc3RyaW5nXG5cbm5vIGFjY2VzcyB0byBleGNsdWRlZCAoOj8gZ3JvdXBzKVxuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTIgKCkge1xuICBsZXQgc3RyID0gXCJIZSBzYWlkOiBcXFwiU2hlJ3MgdGhlIG9uZSFcXFwiLlwiO1xuICBcbiAgbGV0IHBhdHRlcm5JbmNvcnJlY3QgPSAvW1wiJ10uKz9bXCInXS9naVxuICBsZXQgcGF0dGVybiA9IC8oW1wiJ10pLis/XFwxL2dpIC8vMVxuXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChwYXR0ZXJuSW5jb3JyZWN0KSlcbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKHBhdHRlcm4pKVxufVxuLy8gZXhhbXBsZTIoKVxuXG5cbi8qXG5GaW5kIEJCIHRhZ3NcbtCR0JEt0YLQtdCzINC40LzQtdC10YIg0LLQuNC0IFvQuNC80Y9dLi4uWy/QuNC80Y9dLCDQs9C00LUg0LjQvNGPIOKAlCDRgdC70L7QstC+LCDQvtC00L3QviDQuNC3OiBiLCB1cmwsIHF1b3RlLlxu0JHQkS3RgtC10LPQuCDQvNC+0LPRg9GCINCx0YvRgtGMINCy0LvQvtC20LXQvdC90YvQvNC4LCDQvdC+INGB0LDQvCDQsiDRgdC10LHRjyDRgtC10LMg0LHRi9GC0Ywg0LLQu9C+0LbQtdC9INC90LUg0LzQvtC20LXRglxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBsZXQgYmJQYXR0ZXJuID0gL1xcWyhifHVybHxxdW90ZSlcXF0uKj9cXFtcXC9cXDFcXF0vaWdcbiAgbGV0IHN0ciA9IFwiLi5bdXJsXWh0dHA6Ly95YS5ydVsvdXJsXS4uXCJcblxuICBjb25zb2xlLmxvZyhzdHIubWF0Y2goYmJQYXR0ZXJuKSlcbiAgY29uc29sZS5sb2coc3RyMS5tYXRjaChiYlBhdHRlcm4pKVxufVxuLy8gdGFzazEoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
