'use strict';

/*
  Events

    focus - when user focuses on input / textarea /selectbox
    blur - when focus lost

    no bubbling, but can be triggered on Capturing phase
   
    focusin / focusout - same, but bubbles
      no FF support :(


  tabIndex

    control focus with `tab` order: number value
    ! any elem with tabIndex has blur / focus events !
    
    some values:
      0 - make element focused last
      -1 - ignore tab on element


*/

function example1() {

  age.onblur = function (e) {

    if (isNaN(age.value)) {
      age.classList.add('error');
      age.focus();
    } else {
      age.classList.remove('error');
    }
  };
}
example1();

/*Task 1

Реализуйте более удобный плейсхолдер-подсказку на JavaScript через атрибут data-placeholder.

Правила работы плейсхолдера:
  Элемент изначально содержит плейсхолдер. Специальный класс placeholder придает ему синий цвет.
  При фокусировке плейсхолдер показывается уже над полем, становясь «подсказкой».
  При снятии фокуса, подсказка убирается, если поле пустое – плейсхолдер возвращается в него.
*/

function task1() {
  var form = document.getElementById('placeholderWrap');
  var tip = null;
  var isContainsPlaceholder = function isContainsPlaceholder(input) {
    return input.dataset.placeholder;
  };
  var createTip = function createTip(value) {
    var tip = document.createElement('span');
    tip.classList.add('placeholder-tooltip');
    tip.innerHTML = value;
    document.body.appendChild(tip);
    return tip;
  };

  var setPlaceholderFor = function setPlaceholderFor(input) {
    input.value = input.dataset.placeholder;
  };

  document.addEventListener('DOMContentLoaded', function (e) {
    $('input[data-placeholder]').forEach(function (input) {
      setPlaceholderFor(input);
    });
  });

  form.addEventListener('focus', function (e) {
    var input = e.target;

    if (!isContainsPlaceholder(input)) return false;
    input.value = '';
    tip = createTip(input.dataset.placeholder);
    tip.style.top = input.offsetTop - tip.offsetHeight + 'px';
    tip.style.left = input.offsetLeft + 'px';
  }, true);

  form.addEventListener('blur', function (e) {
    var input = e.target;
    if (!isContainsPlaceholder(input)) return false;
    setPlaceholderFor(input);
    tip.parentElement.removeChild(tip);
  }, true);
}
task1();

/*Enlightment:
  instead of clojure `tip` you can use element.tip (custom dom property)
  useful, if you need to show 2 or more `tips`
*/

/*Task 2
 Кликните по мышонку. Затем нажимайте клавиши со стрелками, и он будет двигаться.
В этой задаче запрещается ставить обработчики куда-либо, кроме элемента #mouse.
Можно изменять атрибуты и классы в HTML.
*/
function task2() {
  var mouse = document.getElementById('mouse');
  var directions = ['left', 'top', 'right', 'bottom'];
  var isArrow = function isArrow(type, code) {
    switch (type) {
      case 'left':
        return code === 37;
      case 'top':
        return code === 38;
      case 'right':
        return code === 39;
      case 'bottom':
        return code === 40;
      default:
        return false;
    }
  };
  var shift = function shift(elem, dir) {
    var step = arguments.length <= 2 || arguments[2] === undefined ? 25 : arguments[2];

    switch (dir) {
      case 'left':
        elem.style.left = (parseInt(elem.style.left) || 0) - step + 'px';break;
      case 'right':
        elem.style.left = (parseInt(elem.style.left) || 0) + step + 'px';break;
      case 'top':
        elem.style.top = (parseInt(elem.style.top) || 0) - step + 'px';break;
      case 'bottom':
        elem.style.top = (parseInt(elem.style.top) || 0) + step + 'px';break;
      default:
        return false;
    }
  };

  mouse.addEventListener('keydown', function (e) {
    var _this = this;

    directions.forEach(function (dir) {
      if (!isArrow(dir, e.keyCode)) return;
      shift(_this, dir);
    });
  });
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLmZvY3VzX2JsdXJfZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLFNBQVMsUUFBUSxHQUFJOztBQUVuQixLQUFHLENBQUMsTUFBTSxHQUFHLFVBQUMsQ0FBQyxFQUFLOztBQUVsQixRQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDcEIsU0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDMUIsU0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQ1osTUFDSTtBQUNKLFNBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzdCO0dBQ0YsQ0FBQTtDQUdGO0FBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7QUFBQSxBQWNWLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRCxNQUFJLEdBQUcsR0FBRyxJQUFJLENBQUE7QUFDZCxNQUFJLHFCQUFxQixHQUFHLFNBQXhCLHFCQUFxQixDQUFHLEtBQUs7V0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7R0FBQSxDQUFBO0FBQzlELE1BQUksU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFJLEtBQUssRUFBSztBQUN6QixRQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3hDLE9BQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDeEMsT0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7QUFDckIsWUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDOUIsV0FBTyxHQUFHLENBQUE7R0FDWCxDQUFBOztBQUVELE1BQUksaUJBQWlCLEdBQUcsU0FBcEIs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LElBQUksQ0FBQyxDQUFBLEdBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxBQUFDLE1BQUs7QUFBQSxBQUN2RixXQUFLLEtBQUs7QUFBTSxZQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQUFBQyxNQUFLO0FBQUEsQUFDckYsV0FBSyxRQUFRO0FBQUcsWUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUEsR0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEFBQUMsTUFBSztBQUFBLEFBQ3JGO0FBQWdCLGVBQU8sS0FBSyxDQUFBO0FBQUEsS0FDN0I7R0FDRixDQUFBOztBQUVELE9BQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUU7OztBQUM3QyxjQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxFQUFJO0FBQ3hCLFVBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFNO0FBQ3BDLFdBQUssUUFBTyxHQUFHLENBQUMsQ0FBQTtLQUNqQixDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7Q0FDSDtBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2Zvcm1zLzAyLmZvY3VzX2JsdXJfZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRXZlbnRzXG5cbiAgICBmb2N1cyAtIHdoZW4gdXNlciBmb2N1c2VzIG9uIGlucHV0IC8gdGV4dGFyZWEgL3NlbGVjdGJveFxuICAgIGJsdXIgLSB3aGVuIGZvY3VzIGxvc3RcblxuICAgIG5vIGJ1YmJsaW5nLCBidXQgY2FuIGJlIHRyaWdnZXJlZCBvbiBDYXB0dXJpbmcgcGhhc2VcbiAgIFxuICAgIGZvY3VzaW4gLyBmb2N1c291dCAtIHNhbWUsIGJ1dCBidWJibGVzXG4gICAgICBubyBGRiBzdXBwb3J0IDooXG5cblxuICB0YWJJbmRleFxuXG4gICAgY29udHJvbCBmb2N1cyB3aXRoIGB0YWJgIG9yZGVyOiBudW1iZXIgdmFsdWVcbiAgICAhIGFueSBlbGVtIHdpdGggdGFiSW5kZXggaGFzIGJsdXIgLyBmb2N1cyBldmVudHMgIVxuICAgIFxuICAgIHNvbWUgdmFsdWVzOlxuICAgICAgMCAtIG1ha2UgZWxlbWVudCBmb2N1c2VkIGxhc3RcbiAgICAgIC0xIC0gaWdub3JlIHRhYiBvbiBlbGVtZW50XG5cblxuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTEgKCkge1xuICBcbiAgYWdlLm9uYmx1ciA9IChlKSA9PiB7XG5cbiAgICBpZiAoaXNOYU4oYWdlLnZhbHVlKSkge1xuICAgICAgYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgIGFnZS5mb2N1cygpXG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJylcbiAgICB9XG4gIH1cblxuXG59XG5leGFtcGxlMSgpXG5cblxuXG4vKlRhc2sgMVxuXG7QoNC10LDQu9C40LfRg9C50YLQtSDQsdC+0LvQtdC1INGD0LTQvtCx0L3Ri9C5INC/0LvQtdC50YHRhdC+0LvQtNC10YAt0L/QvtC00YHQutCw0LfQutGDINC90LAgSmF2YVNjcmlwdCDRh9C10YDQtdC3INCw0YLRgNC40LHRg9GCIGRhdGEtcGxhY2Vob2xkZXIuXG5cbtCf0YDQsNCy0LjQu9CwINGA0LDQsdC+0YLRiyDQv9C70LXQudGB0YXQvtC70LTQtdGA0LA6XG4gINCt0LvQtdC80LXQvdGCINC40LfQvdCw0YfQsNC70YzQvdC+INGB0L7QtNC10YDQttC40YIg0L/Qu9C10LnRgdGF0L7Qu9C00LXRgC4g0KHQv9C10YbQuNCw0LvRjNC90YvQuSDQutC70LDRgdGBIHBsYWNlaG9sZGVyINC/0YDQuNC00LDQtdGCINC10LzRgyDRgdC40L3QuNC5INGG0LLQtdGCLlxuICDQn9GA0Lgg0YTQvtC60YPRgdC40YDQvtCy0LrQtSDQv9C70LXQudGB0YXQvtC70LTQtdGAINC/0L7QutCw0LfRi9Cy0LDQtdGC0YHRjyDRg9C20LUg0L3QsNC0INC/0L7Qu9C10LwsINGB0YLQsNC90L7QstGP0YHRjCDCq9C/0L7QtNGB0LrQsNC30LrQvtC5wrsuXG4gINCf0YDQuCDRgdC90Y/RgtC40Lgg0YTQvtC60YPRgdCwLCDQv9C+0LTRgdC60LDQt9C60LAg0YPQsdC40YDQsNC10YLRgdGPLCDQtdGB0LvQuCDQv9C+0LvQtSDQv9GD0YHRgtC+0LUg4oCTINC/0LvQtdC50YHRhdC+0LvQtNC10YAg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINCyINC90LXQs9C+LlxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZWhvbGRlcldyYXAnKVxuICBsZXQgdGlwID0gbnVsbFxuICBsZXQgaXNDb250YWluc1BsYWNlaG9sZGVyID0gaW5wdXQgPT4gaW5wdXQuZGF0YXNldC5wbGFjZWhvbGRlclxuICBsZXQgY3JlYXRlVGlwID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlci10b29sdGlwJylcbiAgICB0aXAuaW5uZXJIVE1MID0gdmFsdWVcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRpcClcbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICBsZXQgc2V0UGxhY2Vob2xkZXJGb3IgPSBpbnB1dCA9PiB7XG4gICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0LnBsYWNlaG9sZGVyXG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgICQoJ2lucHV0W2RhdGEtcGxhY2Vob2xkZXJdJykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBzZXRQbGFjZWhvbGRlckZvcihpbnB1dClcbiAgICB9KVxuICB9KVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBlID0+IHtcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldFxuXG4gICAgaWYgKCFpc0NvbnRhaW5zUGxhY2Vob2xkZXIoaW5wdXQpKSByZXR1cm4gZmFsc2VcbiAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgdGlwID0gY3JlYXRlVGlwKGlucHV0LmRhdGFzZXQucGxhY2Vob2xkZXIpXG4gICAgdGlwLnN0eWxlLnRvcCA9IGlucHV0Lm9mZnNldFRvcCAtIHRpcC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgdGlwLnN0eWxlLmxlZnQgPSBpbnB1dC5vZmZzZXRMZWZ0ICsgJ3B4J1xuICB9LCB0cnVlKVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0XG4gICAgaWYgKCFpc0NvbnRhaW5zUGxhY2Vob2xkZXIoaW5wdXQpKSByZXR1cm4gZmFsc2VcbiAgICBzZXRQbGFjZWhvbGRlckZvcihpbnB1dClcbiAgICB0aXAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aXApXG4gIH0sIHRydWUpXG59XG50YXNrMSgpXG5cbi8qRW5saWdodG1lbnQ6XG4gIGluc3RlYWQgb2YgY2xvanVyZSBgdGlwYCB5b3UgY2FuIHVzZSBlbGVtZW50LnRpcCAoY3VzdG9tIGRvbSBwcm9wZXJ0eSlcbiAgdXNlZnVsLCBpZiB5b3UgbmVlZCB0byBzaG93IDIgb3IgbW9yZSBgdGlwc2BcbiovXG5cblxuXG5cbi8qVGFzayAyXG4g0JrQu9C40LrQvdC40YLQtSDQv9C+INC80YvRiNC+0L3QutGDLiDQl9Cw0YLQtdC8INC90LDQttC40LzQsNC50YLQtSDQutC70LDQstC40YjQuCDRgdC+INGB0YLRgNC10LvQutCw0LzQuCwg0Lgg0L7QvSDQsdGD0LTQtdGCINC00LLQuNCz0LDRgtGM0YHRjy5cbtCSINGN0YLQvtC5INC30LDQtNCw0YfQtSDQt9Cw0L/RgNC10YnQsNC10YLRgdGPINGB0YLQsNCy0LjRgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0LrRg9C00LAt0LvQuNCx0L4sINC60YDQvtC80LUg0Y3Qu9C10LzQtdC90YLQsCAjbW91c2UuXG7QnNC+0LbQvdC+INC40LfQvNC10L3Rj9GC0Ywg0LDRgtGA0LjQsdGD0YLRiyDQuCDQutC70LDRgdGB0Ysg0LIgSFRNTC5cbiovXG5mdW5jdGlvbiB0YXNrMiAoKSB7XG4gIGNvbnN0IG1vdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdXNlJylcbiAgY29uc3QgZGlyZWN0aW9ucyA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJ11cbiAgY29uc3QgaXNBcnJvdyA9ICh0eXBlLCBjb2RlKSA9PiB7XG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgY2FzZSAnbGVmdCcgICA6IHJldHVybiBjb2RlID09PSAzN1xuICAgICAgY2FzZSAndG9wJyAgICA6IHJldHVybiBjb2RlID09PSAzOFxuICAgICAgY2FzZSAncmlnaHQnICA6IHJldHVybiBjb2RlID09PSAzOVxuICAgICAgY2FzZSAnYm90dG9tJyA6IHJldHVybiBjb2RlID09PSA0MFxuICAgICAgZGVmYXVsdCAgICAgICA6IHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICBjb25zdCBzaGlmdCA9IChlbGVtLCBkaXIsIHN0ZXA9MjUpID0+IHtcbiAgICBzd2l0Y2goZGlyKXtcbiAgICAgIGNhc2UgJ2xlZnQnICAgOiBlbGVtLnN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZWxlbS5zdHlsZS5sZWZ0KSB8fCAwKSAtIHN0ZXAgKyAncHgnOyBicmVha1xuICAgICAgY2FzZSAncmlnaHQnICA6IGVsZW0uc3R5bGUubGVmdCA9IChwYXJzZUludChlbGVtLnN0eWxlLmxlZnQpIHx8IDApICsgc3RlcCArICdweCc7IGJyZWFrXG4gICAgICBjYXNlICd0b3AnICAgIDogZWxlbS5zdHlsZS50b3AgPSAocGFyc2VJbnQoZWxlbS5zdHlsZS50b3ApIHx8IDApIC0gc3RlcCArICdweCc7IGJyZWFrXG4gICAgICBjYXNlICdib3R0b20nIDogZWxlbS5zdHlsZS50b3AgPSAocGFyc2VJbnQoZWxlbS5zdHlsZS50b3ApIHx8IDApICsgc3RlcCArICdweCc7IGJyZWFrXG4gICAgICBkZWZhdWx0ICAgICAgIDogcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbW91c2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgZGlyZWN0aW9ucy5mb3JFYWNoKGRpciA9PiB7XG4gICAgICBpZiAoIWlzQXJyb3coZGlyLCBlLmtleUNvZGUpKSByZXR1cm5cbiAgICAgIHNoaWZ0KHRoaXMsIGRpcilcbiAgICB9KVxuICB9KVxufVxudGFzazIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
