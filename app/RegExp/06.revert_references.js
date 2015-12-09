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
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2LnJldmVydF9yZWZlcmVuY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksSUFBSSxHQUFHLGVBQWUsQ0FBQTs7QUFFMUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUEsQ0FDekQ7Ozs7Ozs7Ozs7QUFBQSxBQVlELFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLDhCQUE4QixDQUFDOztBQUV6QyxNQUFJLGdCQUFnQixHQUFHLGVBQWUsQ0FBQTtBQUN0QyxNQUFJLE9BQU8sR0FBRyxlQUFlOztBQUFBLEFBRTdCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7QUFDeEMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Q0FDaEM7Ozs7Ozs7OztBQUFBLEFBVUQsU0FBUyxLQUFLLEdBQUk7QUFDaEIsTUFBSSxTQUFTLEdBQUcsZ0NBQWdDLENBQUE7QUFDaEQsTUFBSSxHQUFHLEdBQUcsNkJBQTZCLENBQUE7O0FBRXZDLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLFNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0NBQ25DO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoiUmVnRXhwLzA2LnJldmVydF9yZWZlcmVuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiRuIC0gd29yayB3aXRoIG4gY2FwdHVyZWQgZ3JvdXAgKClcbndvcmtzIHdpdGggLnJlcGxhY2UoKSBtZXRob2RcblxueW91IGNhbiByZW9yZ2FuaXplLCBvciBpbXBsZW1lbnQgc29tZSBuZXcgbG9vayB0byBzdHJpbmdcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUxICgpIHtcbiAgbGV0IG5hbWUgPSBcIlZsYWQgQXJnZW50dW1cIlxuXG4gIGNvbnNvbGUubG9nKG5hbWUucmVwbGFjZSgvKFthLXpdKykgKFthLXpdKykvaSwgXCIkMiAkMVwiKSkgLy9BcmdlbnR1bSBWbGFkXG59XG4vLyBleGFtcGxlMSgpXG5cblxuXG4vKlxuVXNlIFxcbiBpbnNpZGUgcGF0dGVybiB0byBnZXQgcmVmZXJlbmNlIHRvIHVzZWQgcGFydCBvZiBwYXR0ZXI6XG4xIC0gZ2V0IHJlZmVyZW5jZSB0byB1c2VkIHR5cGUgb2YgcXVvdGF0aW9uIG1hcmsgdG8gcHJvcGVybHkgaGFuZGxlIHRoZSBzdHJpbmdcblxubm8gYWNjZXNzIHRvIGV4Y2x1ZGVkICg6PyBncm91cHMpXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMiAoKSB7XG4gIGxldCBzdHIgPSBcIkhlIHNhaWQ6IFxcXCJTaGUncyB0aGUgb25lIVxcXCIuXCI7XG4gIFxuICBsZXQgcGF0dGVybkluY29ycmVjdCA9IC9bXCInXS4rP1tcIiddL2dpXG4gIGxldCBwYXR0ZXJuID0gLyhbXCInXSkuKz9cXDEvZ2kgLy8xXG5cbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKHBhdHRlcm5JbmNvcnJlY3QpKVxuICBjb25zb2xlLmxvZyhzdHIubWF0Y2gocGF0dGVybikpXG59XG4vLyBleGFtcGxlMigpXG5cblxuLypcbkZpbmQgQkIgdGFnc1xu0JHQkS3RgtC10LMg0LjQvNC10LXRgiDQstC40LQgW9C40LzRj10uLi5bL9C40LzRj10sINCz0LTQtSDQuNC80Y8g4oCUINGB0LvQvtCy0L4sINC+0LTQvdC+INC40Lc6IGIsIHVybCwgcXVvdGUuXG7QkdCRLdGC0LXQs9C4INC80L7Qs9GD0YIg0LHRi9GC0Ywg0LLQu9C+0LbQtdC90L3Ri9C80LgsINC90L4g0YHQsNC8INCyINGB0LXQsdGPINGC0LXQsyDQsdGL0YLRjCDQstC70L7QttC10L0g0L3QtSDQvNC+0LbQtdGCXG4qL1xuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG4gIGxldCBiYlBhdHRlcm4gPSAvXFxbKGJ8dXJsfHF1b3RlKVxcXS4qP1xcW1xcL1xcMVxcXS9pZ1xuICBsZXQgc3RyID0gXCIuLlt1cmxdaHR0cDovL3lhLnJ1Wy91cmxdLi5cIlxuXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChiYlBhdHRlcm4pKVxuICBjb25zb2xlLmxvZyhzdHIxLm1hdGNoKGJiUGF0dGVybikpXG59XG50YXNrMSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
