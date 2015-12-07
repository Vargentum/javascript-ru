"use strict";

/*
  Find digits:
  +7(903)-123-45-67

*/

function task1() {

  // + quantifier usage: find digits
  console.log("+7(903)-123-45-67".match(/\d+/g));

  // ? quantifier usage: find color or colour
  console.log("Можно писать color или colour (британский вариант)".match(/\w+u?\w/g));

  // * quantifier usage: find digit with one zero after it
  console.log('1000, 100, 10, 1, 324203'.match(/\d0+/g));

  //restore correct floats: and get them
  console.log('100, .51, 1.14, 43n10, .442, 5402, 62.3fd, 60.2432'.replace(/\s\.\d+\b/g, function (s) {
    return "0" + s.trim();
  }).match(/\b\d+\.\d+\b/g)); // convert .5 to 0.5

  // html tag without attributes
  console.log('<body class="test">lorem <div>test</div> <span>fdkj</span></body>'.match(/<[a-z]+>/ig));

  // html tag without attributes: updated. digit can be at any position, except first
  console.log('<h1 class="test">lorem <1h>test</1h><h2>rest</h2><time666>fdkj</time666></h1>'.match(/<[a-z][a-z0-9]*>/ig));

  /*
    get HTML tag
      - greedy mode: gets all to last close bracket 
        '<body class="test">lorem</body>'    
      
      - non-greedy:  gets only to first `>` occurrence: 
        '<body class="test">'
  */

  console.log('<body class="test">lorem</body>'.match(/<[a-z][a-z0-9]*\n*.*>/.ig));
}
// task1()

/*
Напишите регулярное выражения для поиска:
 - многоточий: трёх или более точек подряд.
 - HEX цвета
 - положительных чисел, в тч дробных
 - предыдущее плюс отрицательные числа (все десятичные числа)

*/

function task2() {
  function showMatched(str, ptrn) {
    console.log(str.match(ptrn));
  }

  var ellipsisPattern = /\.{3,}/g;
  var hexPattern = /#[a-f0-9]{6}/ig;
  var posPattern = /[^-]?\d+\.?\d*/g;
  var allNumsPattern = /-?\d+\.?\d*/g;

  showMatched("Привет!... Как дела?..... А это да..?", ellipsisPattern);
  showMatched("My color #0931 #09133fa is #fafafa and #6fap14", hexPattern);
  showMatched("-31, 14, 43.42, -15.05, 4103, af42410b, 0.5093, 0.53400", posPattern);
  showMatched("-31, 14, 43.42, -15.05, 4103, af42410b, 0.5093, 0.53400", allNumsPattern);

  /*Tips:
    wrap in () to add quantifiers to the part of regexp
    `-` doesnt need \ 
  */

  var posPatternU = /\d+(\.?\d*)?/g;
  var allNumsPatternU = /-?\d+(\.?\d*)?/g;
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzLnF1YW50aWZpZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsU0FBUyxLQUFLLEdBQUk7OztBQUdoQixTQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O0FBQUEsQUFHOUMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7OztBQUFBLEFBR25GLFNBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7QUFBQyxBQUd2RCxTQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUNqRCxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQztXQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO0dBQUEsQ0FBQyxDQUM1QyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7OztBQUFBLEFBR3RDLFNBQU8sQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQ2hFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzs7O0FBQUEsQUFHbkMsU0FBTyxDQUFDLEdBQUcsQ0FBQywrRUFBK0UsQ0FDNUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FBQUEsQUFXM0MsU0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FDOUIsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Q0FHbEQ7Ozs7Ozs7Ozs7OztBQUFBLEFBZ0JELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLFdBQVMsV0FBVyxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0IsV0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7R0FDN0I7O0FBRUQsTUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFBO0FBQy9CLE1BQUksVUFBVSxHQUFHLGdCQUFnQixDQUFBO0FBQ2pDLE1BQUksVUFBVSxHQUFHLGlCQUFpQixDQUFBO0FBQ2xDLE1BQUksY0FBYyxHQUFHLGNBQWMsQ0FBQTs7QUFFbkMsYUFBVyxDQUFDLHVDQUF1QyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLGFBQVcsQ0FBQyxnREFBZ0QsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN6RSxhQUFXLENBQUMseURBQXlELEVBQUUsVUFBVSxDQUFDLENBQUE7QUFDbEYsYUFBVyxDQUFDLHlEQUF5RCxFQUFFLGNBQWMsQ0FBQzs7Ozs7OztBQUFBLEFBT3RGLE1BQUksV0FBVyxHQUFHLGVBQWUsQ0FBQTtBQUNqQyxNQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQTtDQUN4QztBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6IlJlZ0V4cC8wMy5xdWFudGlmaWVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEZpbmQgZGlnaXRzOlxuICArNyg5MDMpLTEyMy00NS02N1xuXG4qL1xuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG5cbiAgLy8gKyBxdWFudGlmaWVyIHVzYWdlOiBmaW5kIGRpZ2l0c1xuICBjb25zb2xlLmxvZyhcIis3KDkwMyktMTIzLTQ1LTY3XCIubWF0Y2goL1xcZCsvZykpXG5cbiAgLy8gPyBxdWFudGlmaWVyIHVzYWdlOiBmaW5kIGNvbG9yIG9yIGNvbG91clxuICBjb25zb2xlLmxvZyhcItCc0L7QttC90L4g0L/QuNGB0LDRgtGMIGNvbG9yINC40LvQuCBjb2xvdXIgKNCx0YDQuNGC0LDQvdGB0LrQuNC5INCy0LDRgNC40LDQvdGCKVwiLm1hdGNoKC9cXHcrdT9cXHcvZykpXG5cbiAgLy8gKiBxdWFudGlmaWVyIHVzYWdlOiBmaW5kIGRpZ2l0IHdpdGggb25lIHplcm8gYWZ0ZXIgaXRcbiAgY29uc29sZS5sb2coJzEwMDAsIDEwMCwgMTAsIDEsIDMyNDIwMycubWF0Y2goL1xcZDArL2cpKTtcblxuICAvL3Jlc3RvcmUgY29ycmVjdCBmbG9hdHM6IGFuZCBnZXQgdGhlbVxuICBjb25zb2xlLmxvZygnMTAwLCAuNTEsIDEuMTQsIDQzbjEwLCAuNDQyLCA1NDAyLCA2Mi4zZmQsIDYwLjI0MzInXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcc1xcLlxcZCtcXGIvZywgKHMpID0+IFwiMFwiICsgcy50cmltKCkpXG4gICAgICAgICAgICAgICAgLm1hdGNoKC9cXGJcXGQrXFwuXFxkK1xcYi9nKSkgLy8gY29udmVydCAuNSB0byAwLjVcblxuICAvLyBodG1sIHRhZyB3aXRob3V0IGF0dHJpYnV0ZXNcbiAgY29uc29sZS5sb2coJzxib2R5IGNsYXNzPVwidGVzdFwiPmxvcmVtIDxkaXY+dGVzdDwvZGl2PiA8c3Bhbj5mZGtqPC9zcGFuPjwvYm9keT4nXG4gICAgICAgICAgICAgICAgLm1hdGNoKC88W2Etel0rPi9pZykpXG5cbiAgLy8gaHRtbCB0YWcgd2l0aG91dCBhdHRyaWJ1dGVzOiB1cGRhdGVkLiBkaWdpdCBjYW4gYmUgYXQgYW55IHBvc2l0aW9uLCBleGNlcHQgZmlyc3RcbiAgY29uc29sZS5sb2coJzxoMSBjbGFzcz1cInRlc3RcIj5sb3JlbSA8MWg+dGVzdDwvMWg+PGgyPnJlc3Q8L2gyPjx0aW1lNjY2PmZka2o8L3RpbWU2NjY+PC9oMT4nXG4gICAgICAgICAgICAgICAgLm1hdGNoKC88W2Etel1bYS16MC05XSo+L2lnKSlcblxuICAvKlxuICAgIGdldCBIVE1MIHRhZ1xuICAgICAgLSBncmVlZHkgbW9kZTogZ2V0cyBhbGwgdG8gbGFzdCBjbG9zZSBicmFja2V0IFxuICAgICAgICAnPGJvZHkgY2xhc3M9XCJ0ZXN0XCI+bG9yZW08L2JvZHk+JyAgICBcbiAgICAgIFxuICAgICAgLSBub24tZ3JlZWR5OiAgZ2V0cyBvbmx5IHRvIGZpcnN0IGA+YCBvY2N1cnJlbmNlOiBcbiAgICAgICAgJzxib2R5IGNsYXNzPVwidGVzdFwiPidcbiAgKi9cbiAgICBcbiAgY29uc29sZS5sb2coJzxib2R5IGNsYXNzPVwidGVzdFwiPmxvcmVtPC9ib2R5PidcbiAgICAgICAgICAgICAgICAubWF0Y2goLzxbYS16XVthLXowLTldKlxcbiouKj4vLmlnKSlcblxuXG59XG4vLyB0YXNrMSgpXG5cblxuXG5cbi8qXG7QndCw0L/QuNGI0LjRgtC1INGA0LXQs9GD0LvRj9GA0L3QvtC1INCy0YvRgNCw0LbQtdC90LjRjyDQtNC70Y8g0L/QvtC40YHQutCwOlxuIC0g0LzQvdC+0LPQvtGC0L7Rh9C40Lk6INGC0YDRkdGFINC40LvQuCDQsdC+0LvQtdC1INGC0L7Rh9C10Log0L/QvtC00YDRj9C0LlxuIC0gSEVYINGG0LLQtdGC0LBcbiAtINC/0L7Qu9C+0LbQuNGC0LXQu9GM0L3Ri9GFINGH0LjRgdC10LssINCyINGC0Ycg0LTRgNC+0LHQvdGL0YVcbiAtINC/0YDQtdC00YvQtNGD0YnQtdC1INC/0LvRjtGBINC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C1INGH0LjRgdC70LAgKNCy0YHQtSDQtNC10YHRj9GC0LjRh9C90YvQtSDRh9C40YHQu9CwKVxuXG4qL1xuXG5cbmZ1bmN0aW9uIHRhc2syICgpIHsgIFxuICBmdW5jdGlvbiBzaG93TWF0Y2hlZCAoc3RyLCBwdHJuKSB7XG4gICAgY29uc29sZS5sb2coc3RyLm1hdGNoKHB0cm4pKVxuICB9XG5cbiAgbGV0IGVsbGlwc2lzUGF0dGVybiA9IC9cXC57Myx9L2dcbiAgbGV0IGhleFBhdHRlcm4gPSAvI1thLWYwLTldezZ9L2lnXG4gIGxldCBwb3NQYXR0ZXJuID0gL1teLV0/XFxkK1xcLj9cXGQqL2dcbiAgbGV0IGFsbE51bXNQYXR0ZXJuID0gLy0/XFxkK1xcLj9cXGQqL2dcblxuICBzaG93TWF0Y2hlZChcItCf0YDQuNCy0LXRgiEuLi4g0JrQsNC6INC00LXQu9CwPy4uLi4uINCQINGN0YLQviDQtNCwLi4/XCIsIGVsbGlwc2lzUGF0dGVybilcbiAgc2hvd01hdGNoZWQoXCJNeSBjb2xvciAjMDkzMSAjMDkxMzNmYSBpcyAjZmFmYWZhIGFuZCAjNmZhcDE0XCIsIGhleFBhdHRlcm4pXG4gIHNob3dNYXRjaGVkKFwiLTMxLCAxNCwgNDMuNDIsIC0xNS4wNSwgNDEwMywgYWY0MjQxMGIsIDAuNTA5MywgMC41MzQwMFwiLCBwb3NQYXR0ZXJuKVxuICBzaG93TWF0Y2hlZChcIi0zMSwgMTQsIDQzLjQyLCAtMTUuMDUsIDQxMDMsIGFmNDI0MTBiLCAwLjUwOTMsIDAuNTM0MDBcIiwgYWxsTnVtc1BhdHRlcm4pXG5cbiAgLypUaXBzOlxuICAgIHdyYXAgaW4gKCkgdG8gYWRkIHF1YW50aWZpZXJzIHRvIHRoZSBwYXJ0IG9mIHJlZ2V4cFxuICAgIGAtYCBkb2VzbnQgbmVlZCBcXCBcbiAgKi9cblxuICBsZXQgcG9zUGF0dGVyblUgPSAvXFxkKyhcXC4/XFxkKik/L2dcbiAgbGV0IGFsbE51bXNQYXR0ZXJuVSA9IC8tP1xcZCsoXFwuP1xcZCopPy9nXG59XG50YXNrMigpXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
