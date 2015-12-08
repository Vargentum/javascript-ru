'use strict';

/*

Capturing groups allows to:

  - exclude parts of founded result in separate elemens via 
    - string.match() no global mode (example2)
    - regexp.exec() with global mode (example3)

  - accept Quantifier to the whole group (example1)


  When CG not required and not matched, 
  array element will be created and equals `undefined` (example5)


  Exclude CG from remembering in separate array element with ?:
  (?:go) (example6)

*/

function example1() {

  var r1 = /abc+/g; // find 'abcccccc'
  var r2 = /(abc)+/g; //find "abcabcabc"

  console.log(r1.test('abccccc') === r2.test('abcabcabc')); //true
}
// example1()

function example2() {
  var str = '<h1>Привет, мир!</h1>';
  var reg = /<(.+?)>/;

  console.log(str.match(reg)); // ["<h1>", "h1"]
}
// example2()

function example3() {
  var str = '<h1>Привет, мир!</h1>';
  var reg = /<(.+?)>/g;
  var match = undefined;

  while ((match = reg.exec(str)) != null) {
    console.log(match);
  }
  //1. <h1>, h1
  //2. </h1>, /h1
}
// example3()

function example4() {
  var str = '<span class="my">';
  var reg = /<([^/].+?)\s*(class=".*?")>/g;
  var regOrig = /<(([a-z]+)\s*([^>]*))>/g;

  var match = undefined;

  while ((match = regOrig.exec(str)) != null) {
    console.log(match);
  }
}
// example4()

function example5() {
  var reg = /a(b)?(c)?/;

  console.log('a'.match(reg)); // a, undefined, undefined
  console.log('ack'.match(reg)); //ac, undefined, c
}
// example5()

function example6() {
  var reg = /(go)+/;
  var regExcluded = /(?:go)+/;

  console.log('gogogo'.match(reg)); //gogogo, go
  console.log('gogogo'.match(regExcluded)); // gogogo
}
// example6()

/*
  Find Hex color in format `#abc` or `#abcdef`
*/
function task1() {
  var hexReg = /#([0-9a-f]{3}){1,2}\b/ig;
  var str = "#abc #01f #o01 #aabbcc #0f9oa4 test lers #1 #12 #1234 #12345 #1234567 #12345678";
  console.log(str.match(hexReg));

  /*
    100% correct decision, but there is another way: 
    not such elegant, but also workable
  */
  var hexAnother = /#[0-9a-f]{3}([0-9a-f]{3})?\b/ig;
  console.log(str.match(hexAnother));
}
// task1()

/*
  Напишите функцию, которая будет получать выражение и возвращать массив из трёх аргументов:

    Первое число.
    Оператор.
    Второе число.
*/
function task2() {

  function destruct(expr) {
    return expr.match(/(\s?-?\d+?\.?\d*\s*)([\+\-\*\/])(\s?-?\d+?\.?\d*\s*)/).slice(1, 4).map(function (x) {
      return x.trim();
    });
  }
  console.log(destruct("1*2"));
  console.log(destruct("1 + 2"));
  console.log(destruct("1.4 - 2.4"));
  console.log(destruct("-1.44 / -2.4"));

  /*Tip: 
    wrap to CG float part of number. make it no-rechable with :? 
    in [] you may not to ecranize operator symbols but make `-` (minus) first or last
  */
  var wrapFloat = /-?\d+(:?\.\d*)?/;
  var idealOperatorGroup = /[-+*/]/;
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1LmNhcHR1cmluZ19ncm91cHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxFQUFFLEdBQUcsT0FBTztBQUFBLEFBQ2hCLE1BQUksRUFBRSxHQUFHLFNBQVM7O0FBQUEsQUFFbEIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFBQSxDQUN6RDs7O0FBQUEsQUFLRCxTQUFTLFFBQVEsR0FBSTtBQUNuQixNQUFJLEdBQUcsR0FBRyx1QkFBdUIsQ0FBQztBQUNsQyxNQUFJLEdBQUcsR0FBRyxTQUFTLENBQUE7O0FBRW5CLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFBLENBQzVCOzs7QUFBQSxBQUtELFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLHVCQUF1QixDQUFDO0FBQ2xDLE1BQUksR0FBRyxHQUFHLFVBQVUsQ0FBQTtBQUNwQixNQUFJLEtBQUssWUFBQSxDQUFBOztBQUVULFNBQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxJQUFLLElBQUksRUFBQztBQUNwQyxXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0dBQ25COzs7QUFBQSxDQUdGOzs7QUFBQSxBQUtELFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxzQkFBc0IsQ0FBQTtBQUM3QixNQUFJLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQTtBQUN4QyxNQUFJLE9BQU8sR0FBRyx5QkFBeUIsQ0FBQTs7QUFFdkMsTUFBSSxLQUFLLFlBQUEsQ0FBQTs7QUFFVCxTQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsSUFBSyxJQUFJLEVBQUM7QUFDeEMsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtHQUNuQjtDQUNGOzs7QUFBQSxBQUtELFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksR0FBRyxHQUFHLFdBQVcsQ0FBQTs7QUFFckIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsQUFDM0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsQ0FDOUI7OztBQUFBLEFBS0QsU0FBUyxRQUFRLEdBQUk7QUFDbkIsTUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFBO0FBQ2pCLE1BQUksV0FBVyxHQUFHLFNBQVMsQ0FBQTs7QUFFM0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsQUFDaEMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQUEsQ0FDekM7Ozs7OztBQUFBLEFBVUQsU0FBUyxLQUFLLEdBQUk7QUFDaEIsTUFBSSxNQUFNLEdBQUcseUJBQXlCLENBQUE7QUFDdEMsTUFBSSxHQUFHLEdBQUcsaUZBQWlGLENBQUE7QUFDM0YsU0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7QUFBQSxBQU05QixNQUFJLFVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQTtBQUNqRCxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtDQUNuQzs7Ozs7Ozs7OztBQUFBLEFBWUQsU0FBUyxLQUFLLEdBQUk7O0FBRWhCLFdBQVMsUUFBUSxDQUFFLElBQUksRUFBRTtBQUN2QixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FDN0QsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FDVixHQUFHLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtLQUFBLENBQUMsQ0FBQTtHQUMvQjtBQUNELFNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDNUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUM5QixTQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0FBQ2xDLFNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7QUFBQSxBQU1yQyxNQUFJLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQTtBQUNqQyxNQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQTtDQUNsQztBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6IlJlZ0V4cC8wNS5jYXB0dXJpbmdfZ3JvdXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuQ2FwdHVyaW5nIGdyb3VwcyBhbGxvd3MgdG86XG5cbiAgLSBleGNsdWRlIHBhcnRzIG9mIGZvdW5kZWQgcmVzdWx0IGluIHNlcGFyYXRlIGVsZW1lbnMgdmlhIFxuICAgIC0gc3RyaW5nLm1hdGNoKCkgbm8gZ2xvYmFsIG1vZGUgKGV4YW1wbGUyKVxuICAgIC0gcmVnZXhwLmV4ZWMoKSB3aXRoIGdsb2JhbCBtb2RlIChleGFtcGxlMylcblxuICAtIGFjY2VwdCBRdWFudGlmaWVyIHRvIHRoZSB3aG9sZSBncm91cCAoZXhhbXBsZTEpXG5cblxuICBXaGVuIENHIG5vdCByZXF1aXJlZCBhbmQgbm90IG1hdGNoZWQsIFxuICBhcnJheSBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCBhbmQgZXF1YWxzIGB1bmRlZmluZWRgIChleGFtcGxlNSlcblxuXG4gIEV4Y2x1ZGUgQ0cgZnJvbSByZW1lbWJlcmluZyBpbiBzZXBhcmF0ZSBhcnJheSBlbGVtZW50IHdpdGggPzpcbiAgKD86Z28pIChleGFtcGxlNilcblxuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTEgKCkge1xuICBcbiAgbGV0IHIxID0gL2FiYysvZyAgICAvLyBmaW5kICdhYmNjY2NjYydcbiAgbGV0IHIyID0gLyhhYmMpKy9nICAvL2ZpbmQgXCJhYmNhYmNhYmNcIlxuXG4gIGNvbnNvbGUubG9nKHIxLnRlc3QoJ2FiY2NjY2MnKSA9PT0gcjIudGVzdCgnYWJjYWJjYWJjJykpIC8vdHJ1ZVxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuZnVuY3Rpb24gZXhhbXBsZTIgKCkge1xuICBsZXQgc3RyID0gJzxoMT7Qn9GA0LjQstC10YIsINC80LjRgCE8L2gxPic7XG4gIGxldCByZWcgPSAvPCguKz8pPi9cblxuICBjb25zb2xlLmxvZyhzdHIubWF0Y2gocmVnKSkgLy8gW1wiPGgxPlwiLCBcImgxXCJdXG59XG4vLyBleGFtcGxlMigpXG5cblxuXG5mdW5jdGlvbiBleGFtcGxlMyAoKSB7XG4gIGxldCBzdHIgPSAnPGgxPtCf0YDQuNCy0LXRgiwg0LzQuNGAITwvaDE+JztcbiAgbGV0IHJlZyA9IC88KC4rPyk+L2dcbiAgbGV0IG1hdGNoXG4gIFxuICB3aGlsZSgobWF0Y2ggPSByZWcuZXhlYyhzdHIpKSAhPSBudWxsKXtcbiAgICBjb25zb2xlLmxvZyhtYXRjaClcbiAgfVxuICAvLzEuIDxoMT4sIGgxXG4gIC8vMi4gPC9oMT4sIC9oMVxufVxuLy8gZXhhbXBsZTMoKVxuXG5cblxuZnVuY3Rpb24gZXhhbXBsZTQgKCkge1xuICBsZXQgc3RyID0gYDxzcGFuIGNsYXNzPVwibXlcIj5gXG4gIGxldCByZWcgPSAvPChbXi9dLis/KVxccyooY2xhc3M9XCIuKj9cIik+L2dcbiAgbGV0IHJlZ09yaWcgPSAvPCgoW2Etel0rKVxccyooW14+XSopKT4vZ1xuXG4gIGxldCBtYXRjaFxuXG4gIHdoaWxlKChtYXRjaCA9IHJlZ09yaWcuZXhlYyhzdHIpKSAhPSBudWxsKXtcbiAgICBjb25zb2xlLmxvZyhtYXRjaClcbiAgfVxufVxuLy8gZXhhbXBsZTQoKVxuXG5cblxuZnVuY3Rpb24gZXhhbXBsZTUgKCkge1xuICBsZXQgcmVnID0gL2EoYik/KGMpPy9cblxuICBjb25zb2xlLmxvZygnYScubWF0Y2gocmVnKSkgLy8gYSwgdW5kZWZpbmVkLCB1bmRlZmluZWRcbiAgY29uc29sZS5sb2coJ2FjaycubWF0Y2gocmVnKSkgLy9hYywgdW5kZWZpbmVkLCBjXG59XG4vLyBleGFtcGxlNSgpXG5cblxuXG5mdW5jdGlvbiBleGFtcGxlNiAoKSB7XG4gIGxldCByZWcgPSAvKGdvKSsvXG4gIGxldCByZWdFeGNsdWRlZCA9IC8oPzpnbykrL1xuXG4gIGNvbnNvbGUubG9nKCdnb2dvZ28nLm1hdGNoKHJlZykpIC8vZ29nb2dvLCBnb1xuICBjb25zb2xlLmxvZygnZ29nb2dvJy5tYXRjaChyZWdFeGNsdWRlZCkpIC8vIGdvZ29nb1xufVxuLy8gZXhhbXBsZTYoKVxuXG5cblxuXG5cbi8qXG4gIEZpbmQgSGV4IGNvbG9yIGluIGZvcm1hdCBgI2FiY2Agb3IgYCNhYmNkZWZgXG4qL1xuZnVuY3Rpb24gdGFzazEgKCkge1xuICBsZXQgaGV4UmVnID0gLyMoWzAtOWEtZl17M30pezEsMn1cXGIvaWdcbiAgbGV0IHN0ciA9IFwiI2FiYyAjMDFmICNvMDEgI2FhYmJjYyAjMGY5b2E0IHRlc3QgbGVycyAjMSAjMTIgIzEyMzQgIzEyMzQ1ICMxMjM0NTY3ICMxMjM0NTY3OFwiXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChoZXhSZWcpKVxuXG4gIC8qXG4gICAgMTAwJSBjb3JyZWN0IGRlY2lzaW9uLCBidXQgdGhlcmUgaXMgYW5vdGhlciB3YXk6IFxuICAgIG5vdCBzdWNoIGVsZWdhbnQsIGJ1dCBhbHNvIHdvcmthYmxlXG4gICovXG4gIGxldCBoZXhBbm90aGVyID0gLyNbMC05YS1mXXszfShbMC05YS1mXXszfSk/XFxiL2lnXG4gIGNvbnNvbGUubG9nKHN0ci5tYXRjaChoZXhBbm90aGVyKSlcbn1cbi8vIHRhc2sxKClcblxuXG5cbi8qXG4gINCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4sINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0L/QvtC70YPRh9Cw0YLRjCDQstGL0YDQsNC20LXQvdC40LUg0Lgg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0LzQsNGB0YHQuNCyINC40Lcg0YLRgNGR0YUg0LDRgNCz0YPQvNC10L3RgtC+0LI6XG5cbiAgICDQn9C10YDQstC+0LUg0YfQuNGB0LvQvi5cbiAgICDQntC/0LXRgNCw0YLQvtGALlxuICAgINCS0YLQvtGA0L7QtSDRh9C40YHQu9C+LlxuKi9cbmZ1bmN0aW9uIHRhc2syICgpIHtcbiAgXG4gIGZ1bmN0aW9uIGRlc3RydWN0IChleHByKSB7XG4gICAgcmV0dXJuIGV4cHIubWF0Y2goLyhcXHM/LT9cXGQrP1xcLj9cXGQqXFxzKikoW1xcK1xcLVxcKlxcL10pKFxccz8tP1xcZCs/XFwuP1xcZCpcXHMqKS8pXG4gICAgICAgICAgICAgICAuc2xpY2UoMSw0KVxuICAgICAgICAgICAgICAgLm1hcCh4ID0+IHgudHJpbSgpKVxuICB9XG4gIGNvbnNvbGUubG9nKGRlc3RydWN0KFwiMSoyXCIpKVxuICBjb25zb2xlLmxvZyhkZXN0cnVjdChcIjEgKyAyXCIpKVxuICBjb25zb2xlLmxvZyhkZXN0cnVjdChcIjEuNCAtIDIuNFwiKSlcbiAgY29uc29sZS5sb2coZGVzdHJ1Y3QoXCItMS40NCAvIC0yLjRcIikpXG5cbiAgLypUaXA6IFxuICAgIHdyYXAgdG8gQ0cgZmxvYXQgcGFydCBvZiBudW1iZXIuIG1ha2UgaXQgbm8tcmVjaGFibGUgd2l0aCA6PyBcbiAgICBpbiBbXSB5b3UgbWF5IG5vdCB0byBlY3Jhbml6ZSBvcGVyYXRvciBzeW1ib2xzIGJ1dCBtYWtlIGAtYCAobWludXMpIGZpcnN0IG9yIGxhc3RcbiAgKi9cbiAgbGV0IHdyYXBGbG9hdCA9IC8tP1xcZCsoOj9cXC5cXGQqKT8vXG4gIGxldCBpZGVhbE9wZXJhdG9yR3JvdXAgPSAvWy0rKi9dL1xufVxudGFzazIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
