"use strict";

/*
Метод elem.matches(css) в некоторых старых браузерах поддерживается 
под старым именем matchesSelector или с префиксами,
то есть: webkitMatchesSelector (старый Chrome, Safari),
mozMatchesSelector (старый Firefox) 
или Element.prototype.msMatchesSelector (старый IE).

Создайте полифилл, который гарантирует стандартный синтаксис 
elem.matches(css) для всех браузеров.

*/

function task1() {

  if (!Element.prototype.matches) {

    Element.prototype.matches = function (cssQuery) {

      return this.matchesSelector || this.webkitMatchesSelector || this.mozMatchesSelector || this.msMatchesSelector;
    };
  }
}

/*
  Enlightment: write following method into prototype.matches
               make check `before` method implementation
*/

/*
Метод elem.closest(css) для поиска ближайшего родителя,
удовлетворяющего селектору css, не поддерживается некоторыми браузерами, например IE11-.

Создайте для него полифилл.

*/

function task2() {

  if (!Element.prototype.closest) {

    Element.prototype.closest = function (cssQuery) {
      var _this = this;

      [].prototype.forEach.call(this.querySelectorAll(cssQuery), function (el) {
        if (el === _this.parentElement) return true;
      });
      return false;
    };
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0LnBvbHlmaWxscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O0FBRTlCLFdBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsUUFBUSxFQUFFOztBQUU3QyxhQUFTLElBQUksQ0FBQyxlQUFlLElBQ3BCLElBQUksQ0FBQyxxQkFBcUIsSUFDMUIsSUFBSSxDQUFDLGtCQUFrQixJQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUE7S0FDaEMsQ0FBQTtHQUNGO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBbUJELFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O0FBRTlCLFdBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsUUFBUSxFQUFFOzs7QUFDN0MsUUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFDLEVBQUUsRUFBSztBQUNqRSxZQUFJLEVBQUUsS0FBSyxNQUFLLGFBQWEsRUFBRSxPQUFPLElBQUksQ0FBQztPQUM1QyxDQUFDLENBQUE7QUFDRixhQUFPLEtBQUssQ0FBQTtLQUNiLENBQUE7R0FFRjtDQUNGIiwiZmlsZSI6InBhcnQyL2RvY3VtZW50X2FuZF9wYWdlX29iamVjdHMvMDQucG9seWZpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbtCc0LXRgtC+0LQgZWxlbS5tYXRjaGVzKGNzcykg0LIg0L3QtdC60L7RgtC+0YDRi9GFINGB0YLQsNGA0YvRhSDQsdGA0LDRg9C30LXRgNCw0YUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyBcbtC/0L7QtCDRgdGC0LDRgNGL0Lwg0LjQvNC10L3QtdC8IG1hdGNoZXNTZWxlY3RvciDQuNC70Lgg0YEg0L/RgNC10YTQuNC60YHQsNC80LgsXG7RgtC+INC10YHRgtGMOiB3ZWJraXRNYXRjaGVzU2VsZWN0b3IgKNGB0YLQsNGA0YvQuSBDaHJvbWUsIFNhZmFyaSksXG5tb3pNYXRjaGVzU2VsZWN0b3IgKNGB0YLQsNGA0YvQuSBGaXJlZm94KSBcbtC40LvQuCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciAo0YHRgtCw0YDRi9C5IElFKS5cblxu0KHQvtC30LTQsNC50YLQtSDQv9C+0LvQuNGE0LjQu9C7LCDQutC+0YLQvtGA0YvQuSDQs9Cw0YDQsNC90YLQuNGA0YPQtdGCINGB0YLQsNC90LTQsNGA0YLQvdGL0Lkg0YHQuNC90YLQsNC60YHQuNGBIFxuZWxlbS5tYXRjaGVzKGNzcykg0LTQu9GPINCy0YHQtdGFINCx0YDQsNGD0LfQtdGA0L7Qsi5cblxuKi9cblxuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG5cbiAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG5cbiAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24oY3NzUXVlcnkpIHtcblxuICAgICAgcmV0dXJuICAgdGhpcy5tYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgICAgIHx8IHRoaXMud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgICAgICB8fCB0aGlzLm1vek1hdGNoZXNTZWxlY3RvclxuICAgICAgICAgICAgfHwgdGhpcy5tc01hdGNoZXNTZWxlY3RvclxuICAgIH1cbiAgfVxufVxuXG4vKlxuICBFbmxpZ2h0bWVudDogd3JpdGUgZm9sbG93aW5nIG1ldGhvZCBpbnRvIHByb3RvdHlwZS5tYXRjaGVzXG4gICAgICAgICAgICAgICBtYWtlIGNoZWNrIGBiZWZvcmVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuKi9cblxuXG5cblxuLypcbtCc0LXRgtC+0LQgZWxlbS5jbG9zZXN0KGNzcykg0LTQu9GPINC/0L7QuNGB0LrQsCDQsdC70LjQttCw0LnRiNC10LPQviDRgNC+0LTQuNGC0LXQu9GPLFxu0YPQtNC+0LLQu9C10YLQstC+0YDRj9GO0YnQtdCz0L4g0YHQtdC70LXQutGC0L7RgNGDIGNzcywg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YLRgdGPINC90LXQutC+0YLQvtGA0YvQvNC4INCx0YDQsNGD0LfQtdGA0LDQvNC4LCDQvdCw0L/RgNC40LzQtdGAIElFMTEtLlxuXG7QodC+0LfQtNCw0LnRgtC1INC00LvRjyDQvdC10LPQviDQv9C+0LvQuNGE0LjQu9C7LlxuXG4qL1xuXG5cbmZ1bmN0aW9uIHRhc2syICgpIHtcbiAgXG4gIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCkge1xuXG4gICAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGNzc1F1ZXJ5KSB7XG4gICAgICBbXS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMucXVlcnlTZWxlY3RvckFsbChjc3NRdWVyeSksIChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwgPT09IHRoaXMucGFyZW50RWxlbWVudCkgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
