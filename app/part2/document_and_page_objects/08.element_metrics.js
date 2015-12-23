'use strict';

/*

metrics (read-only):

  .offsetParent - contains link to CSS positioning parent of element

  .offsetWidth / .offsetHeight - total width / height element (with borders and scroll)

  .offsetLeft / .offsetTop - distance from top/left offsetParent corner to top/left element corner

  
  .clientWidth / .clientHeight - width / height without borders and scroll

  .clientTop / .clientLeft - height top border / width left border
                             hint: in rtl system to .clientLeft value will be added size of scroll


  .scrollWidth / .scrollHeight - full width / height of scrolled element

  .scrollTop / .scrollLeft - height of scrolled top part of element
                             width of scrolled left part of element 
                             hint: this props is `writable`, changing of them triggers browser to scroll element

*/

/*Task 1

Найти размер прокрутки снизу
важность: 5решение
Свойство elem.scrollTop содержит размер прокрученной области при отсчете сверху. 
А как подсчитать размер прокрутки снизу?

Напишите соответствующее выражение для произвольного элемента elem.
Проверьте: если прокрутки нет вообще или элемент полностью прокручен — оно должно давать ноль.
*/

/**/

function task1() {

  Object.defineProperty(Element.prototype, 'scrollBottom', {
    get: function get() {
      return this.scrollHeight - this.scrollTop - this.clientHeight;
    },

    set: function set(val) {
      var diff = this.scrollTop + this.scrollBottom - val;
      this.scrollTop = diff > 0 ? diff : 0;
    }
  });

  console.log(scrolled.scrollBottom, scrolled.scrollTop);
  scrolled.onscroll = function () {
    return console.log(Math.floor(scrolled.scrollBottom), Math.floor(scrolled.scrollTop));
  };
}
// task1()

/*Task 2

Узнать ширину полосы прокрутки

*/
function task2() {
  Object.defineProperty(Element.prototype, 'scrollBarWidth', {
    get: function get() {
      var _this = this;

      var getCssVal = function getCssVal(prop) {
        return parseFloat(getComputedStyle(_this)[prop]);
      };
      return this.offsetWidth - this.clientWidth - getCssVal('borderRightWidth') - getCssVal('borderLeftWidth');
    }
  });
  /*Note: left border can be accessed with this.clientLeft, 
          but access via CSS for consistency with right border*/

  console.log(scrolled.scrollBarWidth);
}
// task2()

/*Task 3
предотвратить схлопывание потока из-за придания элементу абсолютного позиционирования
Подсказка: склонировать элемент.

Решение: http://plnkr.co/edit/otsUUkLgtuCVGXUQotJ1?p=preview
*/

/* Task 4

Центрировать элемент на JS
Подсказка: простейшее центрирование

*/

function task4() {
  var ctrJS = function ctrJS(elem) {
    var pixelize = function pixelize(val) {
      return val + 'px';
    };
    elem.style.position = "absolute";
    elem.style.top = pixelize(elem.offsetParent.clientHeight / 2); // or '50%'
    elem.style.left = pixelize(elem.offsetParent.clientWidth / 2); // or '50%'
    elem.style.marginTop = pixelize(elem.offsetHeight / -2);
    elem.style.marginLeft = pixelize(elem.offsetWidth / -2);
  };

  ctrJS(ball);

  //http://plnkr.co/edit/OMyifnplr6Hwsbtf17kw?p=preview
}
// task4()

/*Task 5
Задача — написать код, который «распахнет» <div> по ширине на всю страницу.
Исходный документ (<div> содержит текст и прокрутку):
*/

function task5() {
  var reveal = function reveal(elem) {
    elem.style.height = elem.scrollHeight + 'px';
  };

  var revealToggler = function revealToggler(elem) {
    var isScrollable = true;
    var cache = {
      height: elem.offsetHeight
    };
    return function () {
      if (isScrollable) {
        elem.style.height = elem.scrollHeight + 'px';
        isScrollable = false;
      } else {
        elem.style.height = cache.height + 'px';
        isScrollable = true;
      }
    };
  };

  var toggler = revealToggler(scrolled);

  scrolled.onclick = function () {
    return toggler();
  };
}
task5();

/* Task 6

В чём отличия между getComputedStyle(elem).width (a) и elem.clientWidth (b)?
Укажите хотя бы три отличия, лучше — больше.

Решение:
  1. a - string with 'px' at the end, b - integer
  2. a - writable, b - read-only
  3. a - isn't count scroll width, b - is count
  4. a - can return `auto`

*/
//# sourceMappingURL=data:application/json;base64,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QUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtHQUM3QyxDQUFBOztBQUVELE1BQUksYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBSSxJQUFJLEVBQUs7QUFDNUIsUUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFBO0FBQ3ZCLFFBQUksS0FBSyxHQUFHO0FBQ1YsWUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO0tBQzFCLENBQUE7QUFDRCxXQUFPLFlBQU07QUFDWCxVQUFJLFlBQVksRUFBRTtBQUNoQixZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtBQUM1QyxvQkFBWSxHQUFHLEtBQUssQ0FBQTtPQUNyQixNQUFNO0FBQ0wsWUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFDdkMsb0JBQVksR0FBRyxJQUFJLENBQUE7T0FDcEI7S0FDRixDQUFBO0dBQ0YsQ0FBQTs7QUFFRCxNQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7O0FBRXJDLFVBQVEsQ0FBQyxPQUFPLEdBQUc7V0FBTSxPQUFPLEVBQUU7R0FBQSxDQUFBO0NBQ25DO0FBQ0QsS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6InBhcnQyL2RvY3VtZW50X2FuZF9wYWdlX29iamVjdHMvMDguZWxlbWVudF9tZXRyaWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxubWV0cmljcyAocmVhZC1vbmx5KTpcblxuICAub2Zmc2V0UGFyZW50IC0gY29udGFpbnMgbGluayB0byBDU1MgcG9zaXRpb25pbmcgcGFyZW50IG9mIGVsZW1lbnRcblxuICAub2Zmc2V0V2lkdGggLyAub2Zmc2V0SGVpZ2h0IC0gdG90YWwgd2lkdGggLyBoZWlnaHQgZWxlbWVudCAod2l0aCBib3JkZXJzIGFuZCBzY3JvbGwpXG5cbiAgLm9mZnNldExlZnQgLyAub2Zmc2V0VG9wIC0gZGlzdGFuY2UgZnJvbSB0b3AvbGVmdCBvZmZzZXRQYXJlbnQgY29ybmVyIHRvIHRvcC9sZWZ0IGVsZW1lbnQgY29ybmVyXG5cbiAgXG4gIC5jbGllbnRXaWR0aCAvIC5jbGllbnRIZWlnaHQgLSB3aWR0aCAvIGhlaWdodCB3aXRob3V0IGJvcmRlcnMgYW5kIHNjcm9sbFxuXG4gIC5jbGllbnRUb3AgLyAuY2xpZW50TGVmdCAtIGhlaWdodCB0b3AgYm9yZGVyIC8gd2lkdGggbGVmdCBib3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogaW4gcnRsIHN5c3RlbSB0byAuY2xpZW50TGVmdCB2YWx1ZSB3aWxsIGJlIGFkZGVkIHNpemUgb2Ygc2Nyb2xsXG5cblxuICAuc2Nyb2xsV2lkdGggLyAuc2Nyb2xsSGVpZ2h0IC0gZnVsbCB3aWR0aCAvIGhlaWdodCBvZiBzY3JvbGxlZCBlbGVtZW50XG5cbiAgLnNjcm9sbFRvcCAvIC5zY3JvbGxMZWZ0IC0gaGVpZ2h0IG9mIHNjcm9sbGVkIHRvcCBwYXJ0IG9mIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggb2Ygc2Nyb2xsZWQgbGVmdCBwYXJ0IG9mIGVsZW1lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IHRoaXMgcHJvcHMgaXMgYHdyaXRhYmxlYCwgY2hhbmdpbmcgb2YgdGhlbSB0cmlnZ2VycyBicm93c2VyIHRvIHNjcm9sbCBlbGVtZW50XG5cbiovXG5cblxuLypUYXNrIDFcblxu0J3QsNC50YLQuCDRgNCw0LfQvNC10YAg0L/RgNC+0LrRgNGD0YLQutC4INGB0L3QuNC30YNcbtCy0LDQttC90L7RgdGC0Yw6IDXRgNC10YjQtdC90LjQtVxu0KHQstC+0LnRgdGC0LLQviBlbGVtLnNjcm9sbFRvcCDRgdC+0LTQtdGA0LbQuNGCINGA0LDQt9C80LXRgCDQv9GA0L7QutGA0YPRh9C10L3QvdC+0Lkg0L7QsdC70LDRgdGC0Lgg0L/RgNC4INC+0YLRgdGH0LXRgtC1INGB0LLQtdGA0YXRgy4gXG7QkCDQutCw0Log0L/QvtC00YHRh9C40YLQsNGC0Ywg0YDQsNC30LzQtdGAINC/0YDQvtC60YDRg9GC0LrQuCDRgdC90LjQt9GDP1xuXG7QndCw0L/QuNGI0LjRgtC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQtSDQstGL0YDQsNC20LXQvdC40LUg0LTQu9GPINC/0YDQvtC40LfQstC+0LvRjNC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAgZWxlbS5cbtCf0YDQvtCy0LXRgNGM0YLQtTog0LXRgdC70Lgg0L/RgNC+0LrRgNGD0YLQutC4INC90LXRgiDQstC+0L7QsdGJ0LUg0LjQu9C4INGN0LvQtdC80LXQvdGCINC/0L7Qu9C90L7RgdGC0YzRjiDQv9GA0L7QutGA0YPRh9C10L0g4oCUINC+0L3QviDQtNC+0LvQttC90L4g0LTQsNCy0LDRgtGMINC90L7Qu9GMLlxuKi9cblxuLyoqL1xuXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ3Njcm9sbEJvdHRvbScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5zY3JvbGxUb3AgLSB0aGlzLmNsaWVudEhlaWdodFxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgbGV0IGRpZmYgPSB0aGlzLnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsQm90dG9tIC0gdmFsXG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IGRpZmYgPiAwID8gZGlmZiA6IDBcbiAgICB9LCBcbiAgfSlcblxuICBjb25zb2xlLmxvZyhzY3JvbGxlZC5zY3JvbGxCb3R0b20sIHNjcm9sbGVkLnNjcm9sbFRvcClcbiAgc2Nyb2xsZWQub25zY3JvbGwgPSAoKSA9PiBjb25zb2xlLmxvZyhNYXRoLmZsb29yKHNjcm9sbGVkLnNjcm9sbEJvdHRvbSksIE1hdGguZmxvb3Ioc2Nyb2xsZWQuc2Nyb2xsVG9wKSlcblxufVxuLy8gdGFzazEoKVxuXG5cblxuXG4vKlRhc2sgMlxuXG7Qo9C30L3QsNGC0Ywg0YjQuNGA0LjQvdGDINC/0L7Qu9C+0YHRiyDQv9GA0L7QutGA0YPRgtC60LhcblxuKi9cbmZ1bmN0aW9uIHRhc2syICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnc2Nyb2xsQmFyV2lkdGgnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZ2V0Q3NzVmFsID0gcHJvcCA9PiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcylbcHJvcF0pXG4gICAgICByZXR1cm4gdGhpcy5vZmZzZXRXaWR0aCAtIFxuICAgICAgICAgICAgIHRoaXMuY2xpZW50V2lkdGggLVxuICAgICAgICAgICAgIGdldENzc1ZhbCgnYm9yZGVyUmlnaHRXaWR0aCcpIC0gXG4gICAgICAgICAgICAgZ2V0Q3NzVmFsKCdib3JkZXJMZWZ0V2lkdGgnKVxuICAgIH1cbiAgfSlcbiAgLypOb3RlOiBsZWZ0IGJvcmRlciBjYW4gYmUgYWNjZXNzZWQgd2l0aCB0aGlzLmNsaWVudExlZnQsIFxuICAgICAgICAgIGJ1dCBhY2Nlc3MgdmlhIENTUyBmb3IgY29uc2lzdGVuY3kgd2l0aCByaWdodCBib3JkZXIqL1xuXG4gIGNvbnNvbGUubG9nKHNjcm9sbGVkLnNjcm9sbEJhcldpZHRoKVxufVxuLy8gdGFzazIoKVxuXG5cblxuLypUYXNrIDNcbtC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINGB0YXQu9C+0L/Ri9Cy0LDQvdC40LUg0L/QvtGC0L7QutCwINC40Lct0LfQsCDQv9GA0LjQtNCw0L3QuNGPINGN0LvQtdC80LXQvdGC0YMg0LDQsdGB0L7Qu9GO0YLQvdC+0LPQviDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjRj1xu0J/QvtC00YHQutCw0LfQutCwOiDRgdC60LvQvtC90LjRgNC+0LLQsNGC0Ywg0Y3Qu9C10LzQtdC90YIuXG5cbtCg0LXRiNC10L3QuNC1OiBodHRwOi8vcGxua3IuY28vZWRpdC9vdHNVVWtMZ3R1Q1ZHWFVRb3RKMT9wPXByZXZpZXdcbiovXG5cblxuXG4vKiBUYXNrIDRcblxu0KbQtdC90YLRgNC40YDQvtCy0LDRgtGMINGN0LvQtdC80LXQvdGCINC90LAgSlNcbtCf0L7QtNGB0LrQsNC30LrQsDog0L/RgNC+0YHRgtC10LnRiNC10LUg0YbQtdC90YLRgNC40YDQvtCy0LDQvdC40LVcblxuKi9cblxuZnVuY3Rpb24gdGFzazQgKCkge1xuICBsZXQgY3RySlMgPSAoZWxlbSkgPT4ge1xuICAgIGxldCBwaXhlbGl6ZSA9ICh2YWwpID0+IGAke3ZhbH1weGBcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgZWxlbS5zdHlsZS50b3AgICAgICAgID0gcGl4ZWxpemUoZWxlbS5vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IC8gMikgLy8gb3IgJzUwJSdcbiAgICBlbGVtLnN0eWxlLmxlZnQgICAgICAgPSBwaXhlbGl6ZShlbGVtLm9mZnNldFBhcmVudC5jbGllbnRXaWR0aCAvIDIpICAvLyBvciAnNTAlJ1xuICAgIGVsZW0uc3R5bGUubWFyZ2luVG9wICA9IHBpeGVsaXplKGVsZW0ub2Zmc2V0SGVpZ2h0IC8gLTIpXG4gICAgZWxlbS5zdHlsZS5tYXJnaW5MZWZ0ID0gcGl4ZWxpemUoZWxlbS5vZmZzZXRXaWR0aCAvIC0yKVxuICB9XG5cbiAgY3RySlMoYmFsbClcblxuICAvL2h0dHA6Ly9wbG5rci5jby9lZGl0L09NeWlmbnBscjZId3NidGYxN2t3P3A9cHJldmlld1xufVxuLy8gdGFzazQoKVxuXG5cblxuXG5cbi8qVGFzayA1XG7Ql9Cw0LTQsNGH0LAg4oCUINC90LDQv9C40YHQsNGC0Ywg0LrQvtC0LCDQutC+0YLQvtGA0YvQuSDCq9GA0LDRgdC/0LDRhdC90LXRgsK7IDxkaXY+INC/0L4g0YjQuNGA0LjQvdC1INC90LAg0LLRgdGOINGB0YLRgNCw0L3QuNGG0YMuXG7QmNGB0YXQvtC00L3Ri9C5INC00L7QutGD0LzQtdC90YIgKDxkaXY+INGB0L7QtNC10YDQttC40YIg0YLQtdC60YHRgiDQuCDQv9GA0L7QutGA0YPRgtC60YMpOlxuKi9cblxuZnVuY3Rpb24gdGFzazUgKCkge1xuICBsZXQgcmV2ZWFsID0gZWxlbSA9PiB7XG4gICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBlbGVtLnNjcm9sbEhlaWdodCArICdweCcgXG4gIH1cblxuICBsZXQgcmV2ZWFsVG9nZ2xlciA9IChlbGVtKSA9PiB7XG4gICAgbGV0IGlzU2Nyb2xsYWJsZSA9IHRydWVcbiAgICBsZXQgY2FjaGUgPSB7XG4gICAgICBoZWlnaHQ6IGVsZW0ub2Zmc2V0SGVpZ2h0XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoaXNTY3JvbGxhYmxlKSB7XG4gICAgICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gZWxlbS5zY3JvbGxIZWlnaHQgKyAncHgnIFxuICAgICAgICBpc1Njcm9sbGFibGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBjYWNoZS5oZWlnaHQgKyAncHgnXG4gICAgICAgIGlzU2Nyb2xsYWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgdG9nZ2xlciA9IHJldmVhbFRvZ2dsZXIoc2Nyb2xsZWQpXG5cbiAgc2Nyb2xsZWQub25jbGljayA9ICgpID0+IHRvZ2dsZXIoKVxufVxudGFzazUoKVxuXG5cblxuLyogVGFzayA2XG5cbtCSINGH0ZHQvCDQvtGC0LvQuNGH0LjRjyDQvNC10LbQtNGDIGdldENvbXB1dGVkU3R5bGUoZWxlbSkud2lkdGggKGEpINC4IGVsZW0uY2xpZW50V2lkdGggKGIpP1xu0KPQutCw0LbQuNGC0LUg0YXQvtGC0Y8g0LHRiyDRgtGA0Lgg0L7RgtC70LjRh9C40Y8sINC70YPRh9GI0LUg4oCUINCx0L7Qu9GM0YjQtS5cblxu0KDQtdGI0LXQvdC40LU6XG4gIDEuIGEgLSBzdHJpbmcgd2l0aCAncHgnIGF0IHRoZSBlbmQsIGIgLSBpbnRlZ2VyXG4gIDIuIGEgLSB3cml0YWJsZSwgYiAtIHJlYWQtb25seVxuICAzLiBhIC0gaXNuJ3QgY291bnQgc2Nyb2xsIHdpZHRoLCBiIC0gaXMgY291bnRcbiAgNC4gYSAtIGNhbiByZXR1cm4gYGF1dG9gXG5cbiovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
