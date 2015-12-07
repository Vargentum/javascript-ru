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
  var posPattern = /\b\d*[^-]?\d+\.?\d*\b/g;
  var allNumsPattern = /\b-?\d+\.?\d*\b/g;

  showMatched("Привет!... Как дела?..... А это да..?", ellipsisPattern);
  showMatched("My color #0931 #09133fa is #fafafa and #6fap14", hexPattern);
  showMatched("-31, 14, 43.42, -15.05, 4103, af42410b, 0.5093, 0.53400", posPattern);
  showMatched("-31, 14, 43.42, -15.05, 4103, af42410b, 0.5093, 0.53400", allNumsPattern);
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzLnF1YW50aWZpZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsU0FBUyxLQUFLLEdBQUk7OztBQUdoQixTQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O0FBQUEsQUFHOUMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7OztBQUFBLEFBR25GLFNBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7QUFBQyxBQUd2RCxTQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUNqRCxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQztXQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO0dBQUEsQ0FBQyxDQUM1QyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7OztBQUFBLEFBR3RDLFNBQU8sQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQ2hFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzs7O0FBQUEsQUFHbkMsU0FBTyxDQUFDLEdBQUcsQ0FBQywrRUFBK0UsQ0FDNUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FBQUEsQUFXM0MsU0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FDOUIsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Q0FHbEQ7Ozs7Ozs7Ozs7OztBQUFBLEFBZ0JELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLFdBQVMsV0FBVyxDQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDL0IsV0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7R0FDN0I7O0FBRUQsTUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFBO0FBQy9CLE1BQUksVUFBVSxHQUFHLGdCQUFnQixDQUFBO0FBQ2pDLE1BQUksVUFBVSxHQUFHLHdCQUF3QixDQUFBO0FBQ3pDLE1BQUksY0FBYyxHQUFHLGtCQUFrQixDQUFBOztBQUV2QyxhQUFXLENBQUMsdUNBQXVDLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDckUsYUFBVyxDQUFDLGdEQUFnRCxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3pFLGFBQVcsQ0FBQyx5REFBeUQsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUNsRixhQUFXLENBQUMseURBQXlELEVBQUUsY0FBYyxDQUFDLENBQUE7Q0FDdkY7QUFDRCxLQUFLLEVBQUUsQ0FBQSIsImZpbGUiOiJSZWdFeHAvMDMucXVhbnRpZmllcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBGaW5kIGRpZ2l0czpcbiAgKzcoOTAzKS0xMjMtNDUtNjdcblxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuXG4gIC8vICsgcXVhbnRpZmllciB1c2FnZTogZmluZCBkaWdpdHNcbiAgY29uc29sZS5sb2coXCIrNyg5MDMpLTEyMy00NS02N1wiLm1hdGNoKC9cXGQrL2cpKVxuXG4gIC8vID8gcXVhbnRpZmllciB1c2FnZTogZmluZCBjb2xvciBvciBjb2xvdXJcbiAgY29uc29sZS5sb2coXCLQnNC+0LbQvdC+INC/0LjRgdCw0YLRjCBjb2xvciDQuNC70LggY29sb3VyICjQsdGA0LjRgtCw0L3RgdC60LjQuSDQstCw0YDQuNCw0L3RgilcIi5tYXRjaCgvXFx3K3U/XFx3L2cpKVxuXG4gIC8vICogcXVhbnRpZmllciB1c2FnZTogZmluZCBkaWdpdCB3aXRoIG9uZSB6ZXJvIGFmdGVyIGl0XG4gIGNvbnNvbGUubG9nKCcxMDAwLCAxMDAsIDEwLCAxLCAzMjQyMDMnLm1hdGNoKC9cXGQwKy9nKSk7XG5cbiAgLy9yZXN0b3JlIGNvcnJlY3QgZmxvYXRzOiBhbmQgZ2V0IHRoZW1cbiAgY29uc29sZS5sb2coJzEwMCwgLjUxLCAxLjE0LCA0M24xMCwgLjQ0MiwgNTQwMiwgNjIuM2ZkLCA2MC4yNDMyJ1xuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHNcXC5cXGQrXFxiL2csIChzKSA9PiBcIjBcIiArIHMudHJpbSgpKVxuICAgICAgICAgICAgICAgIC5tYXRjaCgvXFxiXFxkK1xcLlxcZCtcXGIvZykpIC8vIGNvbnZlcnQgLjUgdG8gMC41XG5cbiAgLy8gaHRtbCB0YWcgd2l0aG91dCBhdHRyaWJ1dGVzXG4gIGNvbnNvbGUubG9nKCc8Ym9keSBjbGFzcz1cInRlc3RcIj5sb3JlbSA8ZGl2PnRlc3Q8L2Rpdj4gPHNwYW4+ZmRrajwvc3Bhbj48L2JvZHk+J1xuICAgICAgICAgICAgICAgIC5tYXRjaCgvPFthLXpdKz4vaWcpKVxuXG4gIC8vIGh0bWwgdGFnIHdpdGhvdXQgYXR0cmlidXRlczogdXBkYXRlZC4gZGlnaXQgY2FuIGJlIGF0IGFueSBwb3NpdGlvbiwgZXhjZXB0IGZpcnN0XG4gIGNvbnNvbGUubG9nKCc8aDEgY2xhc3M9XCJ0ZXN0XCI+bG9yZW0gPDFoPnRlc3Q8LzFoPjxoMj5yZXN0PC9oMj48dGltZTY2Nj5mZGtqPC90aW1lNjY2PjwvaDE+J1xuICAgICAgICAgICAgICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9pZykpXG5cbiAgLypcbiAgICBnZXQgSFRNTCB0YWdcbiAgICAgIC0gZ3JlZWR5IG1vZGU6IGdldHMgYWxsIHRvIGxhc3QgY2xvc2UgYnJhY2tldCBcbiAgICAgICAgJzxib2R5IGNsYXNzPVwidGVzdFwiPmxvcmVtPC9ib2R5PicgICAgXG4gICAgICBcbiAgICAgIC0gbm9uLWdyZWVkeTogIGdldHMgb25seSB0byBmaXJzdCBgPmAgb2NjdXJyZW5jZTogXG4gICAgICAgICc8Ym9keSBjbGFzcz1cInRlc3RcIj4nXG4gICovXG4gICAgXG4gIGNvbnNvbGUubG9nKCc8Ym9keSBjbGFzcz1cInRlc3RcIj5sb3JlbTwvYm9keT4nXG4gICAgICAgICAgICAgICAgLm1hdGNoKC88W2Etel1bYS16MC05XSpcXG4qLio+Ly5pZykpXG5cblxufVxuLy8gdGFzazEoKVxuXG5cblxuXG4vKlxu0J3QsNC/0LjRiNC40YLQtSDRgNC10LPRg9C70Y/RgNC90L7QtSDQstGL0YDQsNC20LXQvdC40Y8g0LTQu9GPINC/0L7QuNGB0LrQsDpcbiAtINC80L3QvtCz0L7RgtC+0YfQuNC5OiDRgtGA0ZHRhSDQuNC70Lgg0LHQvtC70LXQtSDRgtC+0YfQtdC6INC/0L7QtNGA0Y/QtC5cbiAtIEhFWCDRhtCy0LXRgtCwXG4gLSDQv9C+0LvQvtC20LjRgtC10LvRjNC90YvRhSDRh9C40YHQtdC7LCDQsiDRgtGHINC00YDQvtCx0L3Ri9GFXG4gLSDQv9GA0LXQtNGL0LTRg9GJ0LXQtSDQv9C70Y7RgSDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQtSDRh9C40YHQu9CwICjQstGB0LUg0LTQtdGB0Y/RgtC40YfQvdGL0LUg0YfQuNGB0LvQsClcblxuKi9cblxuXG5mdW5jdGlvbiB0YXNrMiAoKSB7ICBcbiAgZnVuY3Rpb24gc2hvd01hdGNoZWQgKHN0ciwgcHRybikge1xuICAgIGNvbnNvbGUubG9nKHN0ci5tYXRjaChwdHJuKSlcbiAgfVxuXG4gIGxldCBlbGxpcHNpc1BhdHRlcm4gPSAvXFwuezMsfS9nXG4gIGxldCBoZXhQYXR0ZXJuID0gLyNbYS1mMC05XXs2fS9pZ1xuICBsZXQgcG9zUGF0dGVybiA9IC9cXGJcXGQqW14tXT9cXGQrXFwuP1xcZCpcXGIvZ1xuICBsZXQgYWxsTnVtc1BhdHRlcm4gPSAvXFxiLT9cXGQrXFwuP1xcZCpcXGIvZ1xuXG4gIHNob3dNYXRjaGVkKFwi0J/RgNC40LLQtdGCIS4uLiDQmtCw0Log0LTQtdC70LA/Li4uLi4g0JAg0Y3RgtC+INC00LAuLj9cIiwgZWxsaXBzaXNQYXR0ZXJuKVxuICBzaG93TWF0Y2hlZChcIk15IGNvbG9yICMwOTMxICMwOTEzM2ZhIGlzICNmYWZhZmEgYW5kICM2ZmFwMTRcIiwgaGV4UGF0dGVybilcbiAgc2hvd01hdGNoZWQoXCItMzEsIDE0LCA0My40MiwgLTE1LjA1LCA0MTAzLCBhZjQyNDEwYiwgMC41MDkzLCAwLjUzNDAwXCIsIHBvc1BhdHRlcm4pXG4gIHNob3dNYXRjaGVkKFwiLTMxLCAxNCwgNDMuNDIsIC0xNS4wNSwgNDEwMywgYWY0MjQxMGIsIDAuNTA5MywgMC41MzQwMFwiLCBhbGxOdW1zUGF0dGVybilcbn1cbnRhc2syKClcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
