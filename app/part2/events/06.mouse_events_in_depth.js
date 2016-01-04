'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

Two event types:

  Simple 
    - mouseup
    - mousedown
    - mouseover (mouse appears over element)
    - mouseout
    - mousemove

  Complex (consists of some simple)
    - click (mousedown, mouseup, click)
    - dbclick
    - contextmenu


Event additional props

  event.which - what mouse button was pressed
    1 - left
    2 - center
    3 - right


  Keyboard modifiers - bool values, enabled when according button is pressed
    
    event.ctrlKey
    event.altKey
    event.shiftKey
    event.metaKey

  
  Coords of mouse pointer

    event.clientX / .clientY - relative to visible Window
    event.pageX / .pageY - relative to whole document




Mouse movement:

  mouseover / mouseout - triggers when mouse "appears / go out" from element

    - event.relatedTarget - element that mouse 'come from / go to'
    - bubbles (delegation support)
    - parent -> child invokes additional mouseout (from parent)

  mouseenter / mouseleave - simple alternative to mouseover / mouseout
    - no bubbling
    - no parent -> child additional events
    
  
  relatedTarget === null, when mouse comes from position, behind the browser window


*/

/*Task 1

Сделайте список, элементы которого можно выделять кликом.

Добавьте мульти-выделение.  Если клик с нажатым Ctrl (Cmd под Mac), то элемент добавляется-удаляется из выделенных.

Добавьте выделение промежутков. Если происходит клик с нажатым Shift,
то к выделению добавляется промежуток элементов от предыдущего кликнутого до этого. 
При этом не важно, какое именно действие делал предыдущий клик.

Это похоже на то, как работает файловый менеджер в ряде ОС, но чуть проще,
так как конкретная реализация выделений различается у разных ОС, и её точное воспроизведение не входит в эту задачу.
*/

function task1() {
  var lastSelectedIdx = 0;

  var handler = function handler(evt) {
    var trgt = evt.target;
    var mod = 'selected';
    var items = event.currentTarget.children;

    var findItemIdx = function findItemIdx(itm) {
      return _.indexOf(items, itm);
    };

    var hltBulk = function hltBulk(itm) {
      var itmIdx = findItemIdx(itm);

      _(items).filter(function (i, idx) {
        if (lastSelectedIdx > itmIdx) {
          return idx <= lastSelectedIdx && idx >= itmIdx;
        } else {
          return idx >= lastSelectedIdx && idx <= itmIdx;
        }
      }).forEach(function (item) {
        item.classList.add(mod);
      }).value();
    };

    var hltCurrent = function hltCurrent(itm) {
      _.forEach(items, function (item) {
        item.classList.remove(mod);
      });
      itm.classList.add(mod);
      lastSelectedIdx = findItemIdx(itm);
    };

    var toggleCurrent = function toggleCurrent(itm) {
      itm.classList.toggle(mod);
      lastSelectedIdx = findItemIdx(itm);
    };

    if (trgt.tagName !== 'LI') return;

    if (evt.metaKey || evt.ctrlKey) {
      toggleCurrent(trgt);
    } else if (evt.shiftKey) {
      hltBulk(trgt);
    } else {
      hltCurrent(trgt);
    }
  };

  list.addEventListener('click', handler);
}
task1();

/*Task 2
Напишите JS-код, который будет показывать всплывающую подсказку над элементом, если у него есть атрибут data-tooltip.
Необходима поддержка вложенных элементов. При наведении показывается самая вложенная подсказка.
upgrade of 03.behavior_pattern.js task1
*/

function task2() {
  var Tooltip = (function () {
    function Tooltip() {
      _classCallCheck(this, Tooltip);

      this.tip = document.createElement('div');
      this.tip.classList.add('tooltip');
    }

    _createClass(Tooltip, [{
      key: 'destroy',
      value: function destroy() {
        document.body.removeChild(this.tip);
      }
    }, {
      key: '_setRelativeTo',
      value: function _setRelativeTo(target) {
        var targetCoords = target.getBoundingClientRect();
        var top = undefined;

        if (targetCoords.top > this.tip.offsetHeight) {
          top = targetCoords.top - this.tip.offsetHeight + 'px';
        } else {
          top = targetCoords.bottom + 'px';
        };
        this.tip.style.top = top;
        this.tip.style.left = target.getBoundingClientRect().left + 'px';
      }
    }, {
      key: 'init',
      value: function init(target, content) {
        this.tip.innerHTML = content;
        document.body.appendChild(this.tip);
        this._setRelativeTo(target);
      }
    }]);

    return Tooltip;
  })();

  var tooltip = new Tooltip();

  var tooltipController = function tooltipController(type, evt) {
    var target = evt.target;

    var getTipContent = function getTipContent(elem) {
      while (target.parentElement) {
        target = target.parentElement;
        var ttp = target.dataset.tooltip;
        if (ttp) return ttp;
      }
      return;
    };
    var targetContent = getTipContent(target);

    if (!targetContent) return;

    switch (type) {
      case 'show':
        tooltip.init(target, targetContent);
        break;
      case 'hide':
        var relTargetContent = getTipContent(evt.relatedTarget);
        if (!relTargetContent && evt.relatedTarget.parentElement === target) return;
        tooltip.destroy();
        break;
    }
  };

  document.addEventListener('mouseover', tooltipController.bind(this, 'show'));
  document.addEventListener('mouseout', tooltipController.bind(this, 'hide'));
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2Lm1vdXNlX2V2ZW50c19pbl9kZXB0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkVBLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksZUFBZSxHQUFHLENBQUMsQ0FBQTs7QUFFdkIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUksR0FBRyxFQUFLO0FBQ3JCLFFBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7QUFDckIsUUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFBO0FBQ3BCLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFBOztBQUV4QyxRQUFJLFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBRyxHQUFHO2FBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0tBQUEsQ0FBQTs7QUFFOUMsUUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUcsR0FBRyxFQUFJO0FBQ25CLFVBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFN0IsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNMLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxHQUFHLEVBQUs7QUFDbEIsWUFBSSxlQUFlLEdBQUcsTUFBTSxFQUFFO0FBQzVCLGlCQUFPLEdBQUcsSUFBSSxlQUFlLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQTtTQUMvQyxNQUNJO0FBQ0gsaUJBQU8sR0FBRyxJQUFJLGVBQWUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFBO1NBQy9DO09BQ0YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNqQixZQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtPQUN4QixDQUFDLENBQUMsS0FBSyxF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X2RlcHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuVHdvIGV2ZW50IHR5cGVzOlxuXG4gIFNpbXBsZSBcbiAgICAtIG1vdXNldXBcbiAgICAtIG1vdXNlZG93blxuICAgIC0gbW91c2VvdmVyIChtb3VzZSBhcHBlYXJzIG92ZXIgZWxlbWVudClcbiAgICAtIG1vdXNlb3V0XG4gICAgLSBtb3VzZW1vdmVcblxuICBDb21wbGV4IChjb25zaXN0cyBvZiBzb21lIHNpbXBsZSlcbiAgICAtIGNsaWNrIChtb3VzZWRvd24sIG1vdXNldXAsIGNsaWNrKVxuICAgIC0gZGJjbGlja1xuICAgIC0gY29udGV4dG1lbnVcblxuXG5FdmVudCBhZGRpdGlvbmFsIHByb3BzXG5cbiAgZXZlbnQud2hpY2ggLSB3aGF0IG1vdXNlIGJ1dHRvbiB3YXMgcHJlc3NlZFxuICAgIDEgLSBsZWZ0XG4gICAgMiAtIGNlbnRlclxuICAgIDMgLSByaWdodFxuXG5cbiAgS2V5Ym9hcmQgbW9kaWZpZXJzIC0gYm9vbCB2YWx1ZXMsIGVuYWJsZWQgd2hlbiBhY2NvcmRpbmcgYnV0dG9uIGlzIHByZXNzZWRcbiAgICBcbiAgICBldmVudC5jdHJsS2V5XG4gICAgZXZlbnQuYWx0S2V5XG4gICAgZXZlbnQuc2hpZnRLZXlcbiAgICBldmVudC5tZXRhS2V5XG5cbiAgXG4gIENvb3JkcyBvZiBtb3VzZSBwb2ludGVyXG5cbiAgICBldmVudC5jbGllbnRYIC8gLmNsaWVudFkgLSByZWxhdGl2ZSB0byB2aXNpYmxlIFdpbmRvd1xuICAgIGV2ZW50LnBhZ2VYIC8gLnBhZ2VZIC0gcmVsYXRpdmUgdG8gd2hvbGUgZG9jdW1lbnRcblxuXG5cblxuTW91c2UgbW92ZW1lbnQ6XG5cbiAgbW91c2VvdmVyIC8gbW91c2VvdXQgLSB0cmlnZ2VycyB3aGVuIG1vdXNlIFwiYXBwZWFycyAvIGdvIG91dFwiIGZyb20gZWxlbWVudFxuXG4gICAgLSBldmVudC5yZWxhdGVkVGFyZ2V0IC0gZWxlbWVudCB0aGF0IG1vdXNlICdjb21lIGZyb20gLyBnbyB0bydcbiAgICAtIGJ1YmJsZXMgKGRlbGVnYXRpb24gc3VwcG9ydClcbiAgICAtIHBhcmVudCAtPiBjaGlsZCBpbnZva2VzIGFkZGl0aW9uYWwgbW91c2VvdXQgKGZyb20gcGFyZW50KVxuXG4gIG1vdXNlZW50ZXIgLyBtb3VzZWxlYXZlIC0gc2ltcGxlIGFsdGVybmF0aXZlIHRvIG1vdXNlb3ZlciAvIG1vdXNlb3V0XG4gICAgLSBubyBidWJibGluZ1xuICAgIC0gbm8gcGFyZW50IC0+IGNoaWxkIGFkZGl0aW9uYWwgZXZlbnRzXG4gICAgXG4gIFxuICByZWxhdGVkVGFyZ2V0ID09PSBudWxsLCB3aGVuIG1vdXNlIGNvbWVzIGZyb20gcG9zaXRpb24sIGJlaGluZCB0aGUgYnJvd3NlciB3aW5kb3dcblxuXG4qL1xuXG5cblxuLypUYXNrIDFcblxu0KHQtNC10LvQsNC50YLQtSDRgdC/0LjRgdC+0LosINGN0LvQtdC80LXQvdGC0Ysg0LrQvtGC0L7RgNC+0LPQviDQvNC+0LbQvdC+INCy0YvQtNC10LvRj9GC0Ywg0LrQu9C40LrQvtC8LlxuXG7QlNC+0LHQsNCy0YzRgtC1INC80YPQu9GM0YLQuC3QstGL0LTQtdC70LXQvdC40LUuICDQldGB0LvQuCDQutC70LjQuiDRgSDQvdCw0LbQsNGC0YvQvCBDdHJsIChDbWQg0L/QvtC0IE1hYyksINGC0L4g0Y3Qu9C10LzQtdC90YIg0LTQvtCx0LDQstC70Y/QtdGC0YHRjy3Rg9C00LDQu9GP0LXRgtGB0Y8g0LjQtyDQstGL0LTQtdC70LXQvdC90YvRhS5cblxu0JTQvtCx0LDQstGM0YLQtSDQstGL0LTQtdC70LXQvdC40LUg0L/RgNC+0LzQtdC20YPRgtC60L7Qsi4g0JXRgdC70Lgg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LrQu9C40Log0YEg0L3QsNC20LDRgtGL0LwgU2hpZnQsXG7RgtC+INC6INCy0YvQtNC10LvQtdC90LjRjiDQtNC+0LHQsNCy0LvRj9C10YLRgdGPINC/0YDQvtC80LXQttGD0YLQvtC6INGN0LvQtdC80LXQvdGC0L7QsiDQvtGCINC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LrQu9C40LrQvdGD0YLQvtCz0L4g0LTQviDRjdGC0L7Qs9C+LiBcbtCf0YDQuCDRjdGC0L7QvCDQvdC1INCy0LDQttC90L4sINC60LDQutC+0LUg0LjQvNC10L3QvdC+INC00LXQudGB0YLQstC40LUg0LTQtdC70LDQuyDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQutC70LjQui5cblxu0K3RgtC+INC/0L7RhdC+0LbQtSDQvdCwINGC0L4sINC60LDQuiDRgNCw0LHQvtGC0LDQtdGCINGE0LDQudC70L7QstGL0Lkg0LzQtdC90LXQtNC20LXRgCDQsiDRgNGP0LTQtSDQntChLCDQvdC+INGH0YPRgtGMINC/0YDQvtGJ0LUsXG7RgtCw0Log0LrQsNC6INC60L7QvdC60YDQtdGC0L3QsNGPINGA0LXQsNC70LjQt9Cw0YbQuNGPINCy0YvQtNC10LvQtdC90LjQuSDRgNCw0LfQu9C40YfQsNC10YLRgdGPINGDINGA0LDQt9C90YvRhSDQntChLCDQuCDQtdGRINGC0L7Rh9C90L7QtSDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0L3QtSDQstGF0L7QtNC40YIg0LIg0Y3RgtGDINC30LDQtNCw0YfRgy5cbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgbGV0IGxhc3RTZWxlY3RlZElkeCA9IDBcbiAgXG4gIGxldCBoYW5kbGVyID0gKGV2dCkgPT4ge1xuICAgIGxldCB0cmd0ID0gZXZ0LnRhcmdldFxuICAgIGxldCBtb2QgPSAnc2VsZWN0ZWQnXG4gICAgbGV0IGl0ZW1zID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblxuXG4gICAgbGV0IGZpbmRJdGVtSWR4ID0gaXRtID0+IF8uaW5kZXhPZihpdGVtcywgaXRtKVxuXG4gICAgbGV0IGhsdEJ1bGsgPSBpdG0gPT4ge1xuICAgICAgbGV0IGl0bUlkeCA9IGZpbmRJdGVtSWR4KGl0bSlcblxuICAgICAgXyhpdGVtcylcbiAgICAgICAgLmZpbHRlcigoaSwgaWR4KSA9PiB7XG4gICAgICAgICAgaWYgKGxhc3RTZWxlY3RlZElkeCA+IGl0bUlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkeCA8PSBsYXN0U2VsZWN0ZWRJZHggJiYgaWR4ID49IGl0bUlkeFxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaWR4ID49IGxhc3RTZWxlY3RlZElkeCAmJiBpZHggPD0gaXRtSWR4XG4gICAgICAgICAgfVxuICAgICAgICB9KS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChtb2QpXG4gICAgICAgIH0pLnZhbHVlKClcbiAgICB9XG5cbiAgICBsZXQgaGx0Q3VycmVudCA9IGl0bSA9PiB7XG4gICAgICBfLmZvckVhY2goaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShtb2QpXG4gICAgICAgIH0pXG4gICAgICBpdG0uY2xhc3NMaXN0LmFkZChtb2QpXG4gICAgICBsYXN0U2VsZWN0ZWRJZHggPSBmaW5kSXRlbUlkeChpdG0pXG4gICAgfVxuXG4gICAgbGV0IHRvZ2dsZUN1cnJlbnQgPSBpdG0gPT4ge1xuICAgICAgaXRtLmNsYXNzTGlzdC50b2dnbGUobW9kKVxuICAgICAgbGFzdFNlbGVjdGVkSWR4ID0gZmluZEl0ZW1JZHgoaXRtKVxuICAgIH1cblxuICAgIGlmICh0cmd0LnRhZ05hbWUgIT09ICdMSScpIHJldHVyblxuXG4gICAgaWYgKGV2dC5tZXRhS2V5IHx8IGV2dC5jdHJsS2V5KSB7XG4gICAgICB0b2dnbGVDdXJyZW50KHRyZ3QpXG4gICAgfSBcbiAgICBlbHNlIGlmIChldnQuc2hpZnRLZXkpIHtcbiAgICAgIGhsdEJ1bGsodHJndClcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgaGx0Q3VycmVudCh0cmd0KVxuICAgIH1cblxuICB9XG5cbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXG5cbn1cbnRhc2sxKClcblxuXG4vKlRhc2sgMlxu0J3QsNC/0LjRiNC40YLQtSBKUy3QutC+0LQsINC60L7RgtC+0YDRi9C5INCx0YPQtNC10YIg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0LLRgdC/0LvRi9Cy0LDRjtGJ0YPRjiDQv9C+0LTRgdC60LDQt9C60YMg0L3QsNC0INGN0LvQtdC80LXQvdGC0L7QvCwg0LXRgdC70Lgg0YMg0L3QtdCz0L4g0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgZGF0YS10b29sdGlwLlxu0J3QtdC+0LHRhdC+0LTQuNC80LAg0L/QvtC00LTQtdGA0LbQutCwINCy0LvQvtC20LXQvdC90YvRhSDRjdC70LXQvNC10L3RgtC+0LIuINCf0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0L/QvtC60LDQt9GL0LLQsNC10YLRgdGPINGB0LDQvNCw0Y8g0LLQu9C+0LbQtdC90L3QsNGPINC/0L7QtNGB0LrQsNC30LrQsC5cbnVwZ3JhZGUgb2YgMDMuYmVoYXZpb3JfcGF0dGVybi5qcyB0YXNrMVxuKi9cblxuXG5mdW5jdGlvbiB0YXNrMiAoKSB7XG5cbiAgY2xhc3MgVG9vbHRpcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMudGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMudGlwKVxuICAgIH1cblxuICAgIF9zZXRSZWxhdGl2ZVRvKHRhcmdldCkge1xuICAgICAgbGV0IHRhcmdldENvb3JkcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbGV0IHRvcDtcblxuICAgICAgaWYgKHRhcmdldENvb3Jkcy50b3AgPiB0aGlzLnRpcC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgdG9wID0gdGFyZ2V0Q29vcmRzLnRvcCAtIHRoaXMudGlwLm9mZnNldEhlaWdodCArICdweCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCA9IHRhcmdldENvb3Jkcy5ib3R0b20gKyAncHgnXG4gICAgICB9O1xuICAgICAgdGhpcy50aXAuc3R5bGUudG9wID0gdG9wXG4gICAgICB0aGlzLnRpcC5zdHlsZS5sZWZ0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAncHgnICAgICAgXG4gICAgfVxuXG4gICAgaW5pdCh0YXJnZXQsIGNvbnRlbnQpIHtcbiAgICAgIHRoaXMudGlwLmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50aXApXG4gICAgICB0aGlzLl9zZXRSZWxhdGl2ZVRvKHRhcmdldClcbiAgICB9XG4gIH1cbiAgXG5cbiAgY29uc3QgdG9vbHRpcCA9IG5ldyBUb29sdGlwKClcblxuICBsZXQgdG9vbHRpcENvbnRyb2xsZXIgPSAodHlwZSwgZXZ0KSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGV2dC50YXJnZXRcblxuICAgIGxldCBnZXRUaXBDb250ZW50ID0gZWxlbSA9PiB7XG4gICAgICB3aGlsZSh0YXJnZXQucGFyZW50RWxlbWVudCl7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGxldCB0dHAgPSB0YXJnZXQuZGF0YXNldC50b29sdGlwXG4gICAgICAgIGlmICh0dHApIHJldHVybiB0dHBcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgdGFyZ2V0Q29udGVudCA9IGdldFRpcENvbnRlbnQodGFyZ2V0KVxuXG4gICAgaWYgKCF0YXJnZXRDb250ZW50KSByZXR1cm47XG5cbiAgICBzd2l0Y2godHlwZSl7XG4gICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgdG9vbHRpcC5pbml0KHRhcmdldCwgdGFyZ2V0Q29udGVudClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgbGV0IHJlbFRhcmdldENvbnRlbnQgPSBnZXRUaXBDb250ZW50KGV2dC5yZWxhdGVkVGFyZ2V0KVxuICAgICAgICBpZiAoIXJlbFRhcmdldENvbnRlbnQgJiYgZXZ0LnJlbGF0ZWRUYXJnZXQucGFyZW50RWxlbWVudCA9PT0gdGFyZ2V0KSByZXR1cm5cbiAgICAgICAgdG9vbHRpcC5kZXN0cm95KClcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0b29sdGlwQ29udHJvbGxlci5iaW5kKHRoaXMsICdzaG93JykpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdG9vbHRpcENvbnRyb2xsZXIuYmluZCh0aGlzLCAnaGlkZScpKVxufVxudGFzazIoKVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
