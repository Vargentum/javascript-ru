"use strict";

/*
Greedy (by default)
  - maximum quantifier repeating
  - quantifier like {n,} * + cause to 
    - all string applying
    - backtracking phase


Lazy
  - minimum quantifier repeating
  - after applying each symbol - 
    checks with other pattern body


1. this is alternate logic to acheive the task with greedy quantifier
*/

function example1() {
  var str = "The \"witch\" and her \"broom\" are alone.";

  var greedy = /".+"/g;
  var lazy = /".+?"/g;
  var greedyCorrect = /"[^"]+"/g; //1

  console.log(str.match(greedy)); //"witch" and her "broom"
  console.log(str.match(lazy)); // "witch" "broom"
  console.log(str.match(greedyCorrect)); // "witch" "broom"

  "123 456".match(/\d+ \d+?/g); //123 4
}
// example1()

function task1() {
  /*find the links 
    <a href="..." class="doc">, с любым содержанием href.*/

  var linksFinderG = /<a.*href=["']?.*["']?.*class=["']?doc["']?.*>/ig;
  var linksFinderL = /<a.*?href=["']?.*?["']?.*?class=["']?doc["']?.*?/ig;

  var str = "<a name=\"link\" href=\"https://google.com/test?%afv\" test=\"red\" class=\"doc\">, с любым содержанием href.</a>  <a name=\"link\" href=\"https://google.com/test?%afv\" test=\"red\" class=\"doc\">, с любым содержанием href.</a>";
  var str1 = "...<a href=\"link1\" class=\"wrong\">... <p style=\"\" class=\"doc\">...";

  //greedy isn't correct
  console.log(str.match(linksFinderG).length);

  //lazy works, but!
  console.log(str.match(linksFinderL).length);

  // it fails here
  console.log(str1.match(linksFinderL));
}
// task1()

/*What shows?
Answer: 123 456
123 - from lazy
456 from greedy
*/

function task2() {
  console.log("123 456".match(/\d+? \d+/g));
}
// task2()

/*
Регулярные выражения "[^"]*" и ".*?" — при выполнении одинаковы?

Иначе говоря, существует ли такая строка,
на которой они дадут разные результаты?
Если да — дайте такую строку.
*/

function task3() {

  var g = /'[^']*/g; //all
  var l = /'.*?'/g; //all except /n

  var str = "'test \n rest'";
  console.log(str.match(g));
  console.log(str.match(l));
}
// task3()

/*Find html comments*/

function task4() {
  var str = '<!DOCTYPE html><html lang=en><!-- another comment --><head><meta charset=UTF-8><!-- some \n comment --><title>Learn javascript.ru</title><body><h1>Welcome learn.javascript.ru!</h1><script src=./RegExp/04.greedy_and_lazy.js></script>';

  var filterComments = /<!--.*?\n*?.*?-->/gi;
  var filterCommentsBetter = /<!--[/s/S]+?-->/gi;
  var filterCommentsGreedy = /<!--[^-->]+-->/ig;

  console.log(str.match(filterComments));
  console.log(str.match(filterCommentsBetter));
  console.log(str.match(filterCommentsGreedy));
}
task4();

/*Find all html tags with attributes*/

function task5() {
  var str = ' some fdkaf;j <> <a href="/"> sdfasdf <input type="radio" checked> <b>';
  var filterTags = /<.+?>/gi;
  var filterTagsU = /<[^>]+>/gi;

  console.log(str.match(filterTags));
  console.log(str.match(filterTagsU));
}
task5();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0LmdyZWVkeV9hbmRfbGF6eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRywrQ0FBMkMsQ0FBQTs7QUFFbEQsTUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFBO0FBQ3BCLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQTtBQUNuQixNQUFJLGFBQWEsR0FBRyxVQUFVOztBQUFBLEFBRTlCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUFBLEFBQzlCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLEFBQzVCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFBQSxBQUVyQyxXQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUFBLENBQzdCOzs7QUFBQSxBQUlELFNBQVMsS0FBSyxHQUFJOzs7O0FBSWhCLE1BQUksWUFBWSxHQUFHLGlEQUFpRCxDQUFBO0FBQ3BFLE1BQUksWUFBWSxHQUFHLG9EQUFvRCxDQUFBOztBQUV2RSxNQUFJLEdBQUcseU9BQXlOLENBQUE7QUFDaE8sTUFBSSxJQUFJLDZFQUFxRTs7O0FBQUEsQUFHN0UsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7O0FBQUEsQUFHM0MsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7O0FBQUEsQUFHM0MsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7Q0FFdEM7Ozs7Ozs7OztBQUFBLEFBV0QsU0FBUyxLQUFLLEdBQUc7QUFDZixTQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUUsQ0FBQztDQUM1Qzs7Ozs7Ozs7Ozs7QUFBQSxBQWFELFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLENBQUMsR0FBRyxTQUFTO0FBQUEsQUFDakIsTUFBSSxDQUFDLEdBQUcsUUFBUTs7QUFBQSxBQUVoQixNQUFJLEdBQUcsbUJBQW1CLENBQUE7QUFDMUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDMUI7Ozs7O0FBQUEsQUFPRCxTQUFTLEtBQUssR0FBSTtBQUNoQixNQUFJLEdBQUcsR0FBRywwT0FBME8sQ0FBQTs7QUFFcFAsTUFBSSxjQUFjLEdBQUcscUJBQXFCLENBQUE7QUFDMUMsTUFBSSxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQTtBQUM5QyxNQUFJLG9CQUFvQixHQUFHLGtCQUFrQixDQUFBOztBQUU3QyxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtBQUN0QyxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0FBQzVDLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7Q0FFN0M7QUFDRCxLQUFLLEVBQUU7Ozs7QUFBQSxBQU9QLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksR0FBRyxHQUFHLHdFQUF3RSxDQUFDO0FBQ25GLE1BQUksVUFBVSxHQUFHLFNBQVMsQ0FBQTtBQUMxQixNQUFJLFdBQVcsR0FBRyxXQUFXLENBQUE7O0FBRTdCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBQ2xDLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0NBQ3BDO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoiUmVnRXhwLzA0LmdyZWVkeV9hbmRfbGF6eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5HcmVlZHkgKGJ5IGRlZmF1bHQpXG4gIC0gbWF4aW11bSBxdWFudGlmaWVyIHJlcGVhdGluZ1xuICAtIHF1YW50aWZpZXIgbGlrZSB7bix9ICogKyBjYXVzZSB0byBcbiAgICAtIGFsbCBzdHJpbmcgYXBwbHlpbmdcbiAgICAtIGJhY2t0cmFja2luZyBwaGFzZVxuXG5cbkxhenlcbiAgLSBtaW5pbXVtIHF1YW50aWZpZXIgcmVwZWF0aW5nXG4gIC0gYWZ0ZXIgYXBwbHlpbmcgZWFjaCBzeW1ib2wgLSBcbiAgICBjaGVja3Mgd2l0aCBvdGhlciBwYXR0ZXJuIGJvZHlcblxuXG4xLiB0aGlzIGlzIGFsdGVybmF0ZSBsb2dpYyB0byBhY2hlaXZlIHRoZSB0YXNrIHdpdGggZ3JlZWR5IHF1YW50aWZpZXJcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUxICgpIHtcbiAgbGV0IHN0ciA9IGBUaGUgXCJ3aXRjaFwiIGFuZCBoZXIgXCJicm9vbVwiIGFyZSBhbG9uZS5gXG5cbiAgbGV0IGdyZWVkeSA9IC9cIi4rXCIvZ1xuICBsZXQgbGF6eSA9IC9cIi4rP1wiL2dcbiAgbGV0IGdyZWVkeUNvcnJlY3QgPSAvXCJbXlwiXStcIi9nIC8vMVxuICBcbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKGdyZWVkeSkpIC8vXCJ3aXRjaFwiIGFuZCBoZXIgXCJicm9vbVwiXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChsYXp5KSkgIC8vIFwid2l0Y2hcIiBcImJyb29tXCJcbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKGdyZWVkeUNvcnJlY3QpKSAvLyBcIndpdGNoXCIgXCJicm9vbVwiXG5cbiAgXCIxMjMgNDU2XCIubWF0Y2goL1xcZCsgXFxkKz8vZykgLy8xMjMgNFxufVxuLy8gZXhhbXBsZTEoKVxuXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgLypmaW5kIHRoZSBsaW5rcyBcbiAgICA8YSBocmVmPVwiLi4uXCIgY2xhc3M9XCJkb2NcIj4sINGBINC70Y7QsdGL0Lwg0YHQvtC00LXRgNC20LDQvdC40LXQvCBocmVmLiovXG5cbiAgbGV0IGxpbmtzRmluZGVyRyA9IC88YS4qaHJlZj1bXCInXT8uKltcIiddPy4qY2xhc3M9W1wiJ10/ZG9jW1wiJ10/Lio+L2lnXG4gIGxldCBsaW5rc0ZpbmRlckwgPSAvPGEuKj9ocmVmPVtcIiddPy4qP1tcIiddPy4qP2NsYXNzPVtcIiddP2RvY1tcIiddPy4qPy9pZ1xuXG4gIGxldCBzdHIgPSBgPGEgbmFtZT1cImxpbmtcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tL3Rlc3Q/JWFmdlwiIHRlc3Q9XCJyZWRcIiBjbGFzcz1cImRvY1wiPiwg0YEg0LvRjtCx0YvQvCDRgdC+0LTQtdGA0LbQsNC90LjQtdC8IGhyZWYuPC9hPiAgPGEgbmFtZT1cImxpbmtcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tL3Rlc3Q/JWFmdlwiIHRlc3Q9XCJyZWRcIiBjbGFzcz1cImRvY1wiPiwg0YEg0LvRjtCx0YvQvCDRgdC+0LTQtdGA0LbQsNC90LjQtdC8IGhyZWYuPC9hPmBcbiAgbGV0IHN0cjEgPSBgLi4uPGEgaHJlZj1cImxpbmsxXCIgY2xhc3M9XCJ3cm9uZ1wiPi4uLiA8cCBzdHlsZT1cIlwiIGNsYXNzPVwiZG9jXCI+Li4uYFxuXG4gIC8vZ3JlZWR5IGlzbid0IGNvcnJlY3RcbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKGxpbmtzRmluZGVyRykubGVuZ3RoKVxuXG4gIC8vbGF6eSB3b3JrcywgYnV0IVxuICBjb25zb2xlLmxvZyhzdHIubWF0Y2gobGlua3NGaW5kZXJMKS5sZW5ndGgpXG4gIFxuICAvLyBpdCBmYWlscyBoZXJlIFxuICBjb25zb2xlLmxvZyhzdHIxLm1hdGNoKGxpbmtzRmluZGVyTCkpXG5cbn1cbi8vIHRhc2sxKClcblxuXG5cbi8qV2hhdCBzaG93cz9cbkFuc3dlcjogMTIzIDQ1NlxuMTIzIC0gZnJvbSBsYXp5XG40NTYgZnJvbSBncmVlZHlcbiovXG5cbmZ1bmN0aW9uIHRhc2syKCkge1xuICBjb25zb2xlLmxvZyhcIjEyMyA0NTZcIi5tYXRjaCgvXFxkKz8gXFxkKy9nKSApO1xufVxuLy8gdGFzazIoKVxuXG5cblxuLypcbtCg0LXQs9GD0LvRj9GA0L3Ri9C1INCy0YvRgNCw0LbQtdC90LjRjyBcIlteXCJdKlwiINC4IFwiLio/XCIg4oCUINC/0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCDQvtC00LjQvdCw0LrQvtCy0Ys/XG5cbtCY0L3QsNGH0LUg0LPQvtCy0L7RgNGPLCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQu9C4INGC0LDQutCw0Y8g0YHRgtGA0L7QutCwLFxu0L3QsCDQutC+0YLQvtGA0L7QuSDQvtC90Lgg0LTQsNC00YPRgiDRgNCw0LfQvdGL0LUg0YDQtdC30YPQu9GM0YLQsNGC0Ys/XG7QldGB0LvQuCDQtNCwIOKAlCDQtNCw0LnRgtC1INGC0LDQutGD0Y4g0YHRgtGA0L7QutGDLlxuKi9cblxuZnVuY3Rpb24gdGFzazMgKCkge1xuXG4gIGxldCBnID0gLydbXiddKi9nIC8vYWxsXG4gIGxldCBsID0gLycuKj8nL2cgLy9hbGwgZXhjZXB0IC9uXG5cbiAgbGV0IHN0ciA9IGAndGVzdCBcXG4gcmVzdCdgXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChnKSlcbiAgY29uc29sZS5sb2coc3RyLm1hdGNoKGwpKVxufVxuLy8gdGFzazMoKVxuXG5cblxuLypGaW5kIGh0bWwgY29tbWVudHMqL1xuXG5mdW5jdGlvbiB0YXNrNCAoKSB7XG4gIGxldCBzdHIgPSAnPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz1lbj48IS0tIGFub3RoZXIgY29tbWVudCAtLT48aGVhZD48bWV0YSBjaGFyc2V0PVVURi04PjwhLS0gc29tZSBcXG4gY29tbWVudCAtLT48dGl0bGU+TGVhcm4gamF2YXNjcmlwdC5ydTwvdGl0bGU+PGJvZHk+PGgxPldlbGNvbWUgbGVhcm4uamF2YXNjcmlwdC5ydSE8L2gxPjxzY3JpcHQgc3JjPS4vUmVnRXhwLzA0LmdyZWVkeV9hbmRfbGF6eS5qcz48L3NjcmlwdD4nXG5cbiAgbGV0IGZpbHRlckNvbW1lbnRzID0gLzwhLS0uKj9cXG4qPy4qPy0tPi9naVxuICBsZXQgZmlsdGVyQ29tbWVudHNCZXR0ZXIgPSAvPCEtLVsvcy9TXSs/LS0+L2dpXG4gIGxldCBmaWx0ZXJDb21tZW50c0dyZWVkeSA9IC88IS0tW14tLT5dKy0tPi9pZ1xuXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChmaWx0ZXJDb21tZW50cykpXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChmaWx0ZXJDb21tZW50c0JldHRlcikpXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChmaWx0ZXJDb21tZW50c0dyZWVkeSkpXG5cbn1cbnRhc2s0KClcblxuXG5cblxuLypGaW5kIGFsbCBodG1sIHRhZ3Mgd2l0aCBhdHRyaWJ1dGVzKi9cblxuZnVuY3Rpb24gdGFzazUgKCkge1xuICBsZXQgc3RyID0gJyBzb21lIGZka2FmO2ogPD4gPGEgaHJlZj1cIi9cIj4gc2RmYXNkZiA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD4gPGI+JztcbiAgbGV0IGZpbHRlclRhZ3MgPSAvPC4rPz4vZ2lcbiAgbGV0IGZpbHRlclRhZ3NVID0gLzxbXj5dKz4vZ2lcblxuICBjb25zb2xlLmxvZyhzdHIubWF0Y2goZmlsdGVyVGFncykpXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChmaWx0ZXJUYWdzVSkpXG59XG50YXNrNSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
