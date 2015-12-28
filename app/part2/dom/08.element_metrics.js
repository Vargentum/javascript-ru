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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA4LmVsZW1lbnRfbWV0cmljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBLFNBQVMsS0FBSyxHQUFJOztBQUVoQixRQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFO0FBQ3ZELE9BQUcsRUFBRSxlQUFXO0FBQ2QsYUFBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtLQUM5RDs7QUFFRCxPQUFHLEVBQUUsYUFBUyxHQUFHLEVBQUU7QUFDakIsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQTtBQUNuRCxVQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQTtLQUNyQztHQUNGLENBQUMsQ0FBQTs7QUFFRixTQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3RELFVBQVEsQ0FBQyxRQUFRLEdBQUc7V0FBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQUEsQ0FBQTtDQUV6Rzs7Ozs7Ozs7QUFBQSxBQVdELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLFFBQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtBQUN6RCxPQUFHLEVBQUUsZUFBWTs7O0FBQ2YsVUFBSSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQUcsSUFBSTtlQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQUEsQ0FBQTtBQUNoRSxhQUFPLElBQUksQ0FBQyxXQUFXLEdBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQ2hCLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUM3QixTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtLQUNwQztHQUNGLENBQUM7Ozs7QUFBQSxBQUlGLFNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBcUJELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksS0FBSyxHQUFHLFNBQVIsS0FBSyxDQUFJLElBQUksRUFBSztBQUNwQixRQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxHQUFHO2FBQVEsR0FBRztLQUFJLENBQUE7QUFDbEMsUUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFBO0FBQ2hDLFFBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFVLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFBQSxBQUNwRSxRQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBUyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQUEsQUFDbkUsUUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN4RCxRQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0dBQ3hELENBQUE7O0FBRUQsT0FBSyxDQUFDLElBQUksQ0FBQzs7O0FBQUEsQ0FHWjs7Ozs7Ozs7QUFBQSxBQVlELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFHLElBQUksRUFBSTtBQUNuQixRQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtHQUM3QyxDQUFBOztBQUVELE1BQUksYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBSSxJQUFJLEVBQUs7QUFDNUIsUUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFBO0FBQ3ZCLFFBQUksS0FBSyxHQUFHO0FBQ1YsWUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO0tBQzFCLENBQUE7QUFDRCxXQUFPLFlBQU07QUFDWCxVQUFJLFlBQVksRUFBRTtBQUNoQixZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtBQUM1QyxvQkFBWSxHQUFHLEtBQUssQ0FBQTtPQUNyQixNQUFNO0FBQ0wsWUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFDdkMsb0JBQVksR0FBRyxJQUFJLENBQUE7T0FDcEI7S0FDRixDQUFBO0dBQ0YsQ0FBQTs7QUFFRCxNQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7O0FBRXJDLFVBQVEsQ0FBQyxPQUFPLEdBQUc7V0FBTSxPQUFPLEVBQUU7R0FBQSxDQUFBO0NBQ25DO0FBQ0QsS0FBSyxFQUFFOzs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6InBhcnQyL2RvbS8wOC5lbGVtZW50X21ldHJpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5tZXRyaWNzIChyZWFkLW9ubHkpOlxuXG4gIC5vZmZzZXRQYXJlbnQgLSBjb250YWlucyBsaW5rIHRvIENTUyBwb3NpdGlvbmluZyBwYXJlbnQgb2YgZWxlbWVudFxuXG4gIC5vZmZzZXRXaWR0aCAvIC5vZmZzZXRIZWlnaHQgLSB0b3RhbCB3aWR0aCAvIGhlaWdodCBlbGVtZW50ICh3aXRoIGJvcmRlcnMgYW5kIHNjcm9sbClcblxuICAub2Zmc2V0TGVmdCAvIC5vZmZzZXRUb3AgLSBkaXN0YW5jZSBmcm9tIHRvcC9sZWZ0IG9mZnNldFBhcmVudCBjb3JuZXIgdG8gdG9wL2xlZnQgZWxlbWVudCBjb3JuZXJcblxuICBcbiAgLmNsaWVudFdpZHRoIC8gLmNsaWVudEhlaWdodCAtIHdpZHRoIC8gaGVpZ2h0IHdpdGhvdXQgYm9yZGVycyBhbmQgc2Nyb2xsXG5cbiAgLmNsaWVudFRvcCAvIC5jbGllbnRMZWZ0IC0gaGVpZ2h0IHRvcCBib3JkZXIgLyB3aWR0aCBsZWZ0IGJvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBpbiBydGwgc3lzdGVtIHRvIC5jbGllbnRMZWZ0IHZhbHVlIHdpbGwgYmUgYWRkZWQgc2l6ZSBvZiBzY3JvbGxcblxuXG4gIC5zY3JvbGxXaWR0aCAvIC5zY3JvbGxIZWlnaHQgLSBmdWxsIHdpZHRoIC8gaGVpZ2h0IG9mIHNjcm9sbGVkIGVsZW1lbnRcblxuICAuc2Nyb2xsVG9wIC8gLnNjcm9sbExlZnQgLSBoZWlnaHQgb2Ygc2Nyb2xsZWQgdG9wIHBhcnQgb2YgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCBvZiBzY3JvbGxlZCBsZWZ0IHBhcnQgb2YgZWxlbWVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogdGhpcyBwcm9wcyBpcyBgd3JpdGFibGVgLCBjaGFuZ2luZyBvZiB0aGVtIHRyaWdnZXJzIGJyb3dzZXIgdG8gc2Nyb2xsIGVsZW1lbnRcblxuKi9cblxuXG4vKlRhc2sgMVxuXG7QndCw0LnRgtC4INGA0LDQt9C80LXRgCDQv9GA0L7QutGA0YPRgtC60Lgg0YHQvdC40LfRg1xu0LLQsNC20L3QvtGB0YLRjDogNdGA0LXRiNC10L3QuNC1XG7QodCy0L7QudGB0YLQstC+IGVsZW0uc2Nyb2xsVG9wINGB0L7QtNC10YDQttC40YIg0YDQsNC30LzQtdGAINC/0YDQvtC60YDRg9GH0LXQvdC90L7QuSDQvtCx0LvQsNGB0YLQuCDQv9GA0Lgg0L7RgtGB0YfQtdGC0LUg0YHQstC10YDRhdGDLiBcbtCQINC60LDQuiDQv9C+0LTRgdGH0LjRgtCw0YLRjCDRgNCw0LfQvNC10YAg0L/RgNC+0LrRgNGD0YLQutC4INGB0L3QuNC30YM/XG5cbtCd0LDQv9C40YjQuNGC0LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdC1INCy0YvRgNCw0LbQtdC90LjQtSDQtNC70Y8g0L/RgNC+0LjQt9Cy0L7Qu9GM0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCBlbGVtLlxu0J/RgNC+0LLQtdGA0YzRgtC1OiDQtdGB0LvQuCDQv9GA0L7QutGA0YPRgtC60Lgg0L3QtdGCINCy0L7QvtCx0YnQtSDQuNC70Lgg0Y3Qu9C10LzQtdC90YIg0L/QvtC70L3QvtGB0YLRjNGOINC/0YDQvtC60YDRg9GH0LXQvSDigJQg0L7QvdC+INC00L7Qu9C20L3QviDQtNCw0LLQsNGC0Ywg0L3QvtC70YwuXG4qL1xuXG4vKiovXG5cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnc2Nyb2xsQm90dG9tJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLnNjcm9sbFRvcCAtIHRoaXMuY2xpZW50SGVpZ2h0XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICBsZXQgZGlmZiA9IHRoaXMuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxCb3R0b20gLSB2YWxcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0gZGlmZiA+IDAgPyBkaWZmIDogMFxuICAgIH0sIFxuICB9KVxuXG4gIGNvbnNvbGUubG9nKHNjcm9sbGVkLnNjcm9sbEJvdHRvbSwgc2Nyb2xsZWQuc2Nyb2xsVG9wKVxuICBzY3JvbGxlZC5vbnNjcm9sbCA9ICgpID0+IGNvbnNvbGUubG9nKE1hdGguZmxvb3Ioc2Nyb2xsZWQuc2Nyb2xsQm90dG9tKSwgTWF0aC5mbG9vcihzY3JvbGxlZC5zY3JvbGxUb3ApKVxuXG59XG4vLyB0YXNrMSgpXG5cblxuXG5cbi8qVGFzayAyXG5cbtCj0LfQvdCw0YLRjCDRiNC40YDQuNC90YMg0L/QvtC70L7RgdGLINC/0YDQvtC60YDRg9GC0LrQuFxuXG4qL1xuZnVuY3Rpb24gdGFzazIgKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdzY3JvbGxCYXJXaWR0aCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBnZXRDc3NWYWwgPSBwcm9wID0+IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKVtwcm9wXSlcbiAgICAgIHJldHVybiB0aGlzLm9mZnNldFdpZHRoIC0gXG4gICAgICAgICAgICAgdGhpcy5jbGllbnRXaWR0aCAtXG4gICAgICAgICAgICAgZ2V0Q3NzVmFsKCdib3JkZXJSaWdodFdpZHRoJykgLSBcbiAgICAgICAgICAgICBnZXRDc3NWYWwoJ2JvcmRlckxlZnRXaWR0aCcpXG4gICAgfVxuICB9KVxuICAvKk5vdGU6IGxlZnQgYm9yZGVyIGNhbiBiZSBhY2Nlc3NlZCB3aXRoIHRoaXMuY2xpZW50TGVmdCwgXG4gICAgICAgICAgYnV0IGFjY2VzcyB2aWEgQ1NTIGZvciBjb25zaXN0ZW5jeSB3aXRoIHJpZ2h0IGJvcmRlciovXG5cbiAgY29uc29sZS5sb2coc2Nyb2xsZWQuc2Nyb2xsQmFyV2lkdGgpXG59XG4vLyB0YXNrMigpXG5cblxuXG4vKlRhc2sgM1xu0L/RgNC10LTQvtGC0LLRgNCw0YLQuNGC0Ywg0YHRhdC70L7Qv9GL0LLQsNC90LjQtSDQv9C+0YLQvtC60LAg0LjQty3Qt9CwINC/0YDQuNC00LDQvdC40Y8g0Y3Qu9C10LzQtdC90YLRgyDQsNCx0YHQvtC70Y7RgtC90L7Qs9C+INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNGPXG7Qn9C+0LTRgdC60LDQt9C60LA6INGB0LrQu9C+0L3QuNGA0L7QstCw0YLRjCDRjdC70LXQvNC10L3Rgi5cblxu0KDQtdGI0LXQvdC40LU6IGh0dHA6Ly9wbG5rci5jby9lZGl0L290c1VVa0xndHVDVkdYVVFvdEoxP3A9cHJldmlld1xuKi9cblxuXG5cbi8qIFRhc2sgNFxuXG7QptC10L3RgtGA0LjRgNC+0LLQsNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L3QsCBKU1xu0J/QvtC00YHQutCw0LfQutCwOiDQv9GA0L7RgdGC0LXQudGI0LXQtSDRhtC10L3RgtGA0LjRgNC+0LLQsNC90LjQtVxuXG4qL1xuXG5mdW5jdGlvbiB0YXNrNCAoKSB7XG4gIGxldCBjdHJKUyA9IChlbGVtKSA9PiB7XG4gICAgbGV0IHBpeGVsaXplID0gKHZhbCkgPT4gYCR7dmFsfXB4YFxuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcbiAgICBlbGVtLnN0eWxlLnRvcCAgICAgICAgPSBwaXhlbGl6ZShlbGVtLm9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgLyAyKSAvLyBvciAnNTAlJ1xuICAgIGVsZW0uc3R5bGUubGVmdCAgICAgICA9IHBpeGVsaXplKGVsZW0ub2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIC8gMikgIC8vIG9yICc1MCUnXG4gICAgZWxlbS5zdHlsZS5tYXJnaW5Ub3AgID0gcGl4ZWxpemUoZWxlbS5vZmZzZXRIZWlnaHQgLyAtMilcbiAgICBlbGVtLnN0eWxlLm1hcmdpbkxlZnQgPSBwaXhlbGl6ZShlbGVtLm9mZnNldFdpZHRoIC8gLTIpXG4gIH1cblxuICBjdHJKUyhiYWxsKVxuXG4gIC8vaHR0cDovL3BsbmtyLmNvL2VkaXQvT015aWZucGxyNkh3c2J0ZjE3a3c/cD1wcmV2aWV3XG59XG4vLyB0YXNrNCgpXG5cblxuXG5cblxuLypUYXNrIDVcbtCX0LDQtNCw0YfQsCDigJQg0L3QsNC/0LjRgdCw0YLRjCDQutC+0LQsINC60L7RgtC+0YDRi9C5IMKr0YDQsNGB0L/QsNGF0L3QtdGCwrsgPGRpdj4g0L/QviDRiNC40YDQuNC90LUg0L3QsCDQstGB0Y4g0YHRgtGA0LDQvdC40YbRgy5cbtCY0YHRhdC+0LTQvdGL0Lkg0LTQvtC60YPQvNC10L3RgiAoPGRpdj4g0YHQvtC00LXRgNC20LjRgiDRgtC10LrRgdGCINC4INC/0YDQvtC60YDRg9GC0LrRgyk6XG4qL1xuXG5mdW5jdGlvbiB0YXNrNSAoKSB7XG4gIGxldCByZXZlYWwgPSBlbGVtID0+IHtcbiAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGVsZW0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JyBcbiAgfVxuXG4gIGxldCByZXZlYWxUb2dnbGVyID0gKGVsZW0pID0+IHtcbiAgICBsZXQgaXNTY3JvbGxhYmxlID0gdHJ1ZVxuICAgIGxldCBjYWNoZSA9IHtcbiAgICAgIGhlaWdodDogZWxlbS5vZmZzZXRIZWlnaHRcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChpc1Njcm9sbGFibGUpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBlbGVtLnNjcm9sbEhlaWdodCArICdweCcgXG4gICAgICAgIGlzU2Nyb2xsYWJsZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGNhY2hlLmhlaWdodCArICdweCdcbiAgICAgICAgaXNTY3JvbGxhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCB0b2dnbGVyID0gcmV2ZWFsVG9nZ2xlcihzY3JvbGxlZClcblxuICBzY3JvbGxlZC5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlcigpXG59XG50YXNrNSgpXG5cblxuXG4vKiBUYXNrIDZcblxu0JIg0YfRkdC8INC+0YLQu9C40YfQuNGPINC80LXQttC00YMgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKS53aWR0aCAoYSkg0LggZWxlbS5jbGllbnRXaWR0aCAoYik/XG7Qo9C60LDQttC40YLQtSDRhdC+0YLRjyDQsdGLINGC0YDQuCDQvtGC0LvQuNGH0LjRjywg0LvRg9GH0YjQtSDigJQg0LHQvtC70YzRiNC1LlxuXG7QoNC10YjQtdC90LjQtTpcbiAgMS4gYSAtIHN0cmluZyB3aXRoICdweCcgYXQgdGhlIGVuZCwgYiAtIGludGVnZXJcbiAgMi4gYSAtIHdyaXRhYmxlLCBiIC0gcmVhZC1vbmx5XG4gIDMuIGEgLSBpc24ndCBjb3VudCBzY3JvbGwgd2lkdGgsIGIgLSBpcyBjb3VudFxuICA0LiBhIC0gY2FuIHJldHVybiBgYXV0b2BcblxuKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
