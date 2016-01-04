'use strict';

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

/**/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2Lm1vdXNlX2V2ZW50c19pbl9kZXB0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksZUFBZSxHQUFHLENBQUMsQ0FBQTs7QUFFdkIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUksR0FBRyxFQUFLO0FBQ3JCLFFBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7QUFDckIsUUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFBO0FBQ3BCLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFBOztBQUV4QyxRQUFJLFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBRyxHQUFHO2FBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0tBQUEsQ0FBQTs7QUFFOUMsUUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUcsR0FBRyxFQUFJO0FBQ25CLFVBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7QUFFN0IsT0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNMLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxHQUFHLEVBQUs7QUFDbEIsWUFBSSxlQUFlLEdBQUcsTUFBTSxFQUFFO0FBQzVCLGlCQUFPLEdBQUcsSUFBSSxlQUFlLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQTtTQUMvQyxNQUNJO0FBQ0gsaUJBQU8sR0FBRyxJQUFJLGVBQWUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFBO1NBQy9DO09BQ0YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNqQixZQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtPQUN4QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7S0FDYixDQUFBOztBQUVELFFBQUksVUFBVSxHQUFHLFNBQWIsVUFBVSxDQUFHLEdBQUcsRUFBSTtBQUN0QixPQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUksRUFBSTtBQUNyQixZQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtPQUMzQixDQUFDLENBQUE7QUFDSixTQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN0QixxQkFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNuQyxDQUFBOztBQUVELFFBQUksYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBRyxHQUFHLEVBQUk7QUFDekIsU0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDekIscUJBQWUsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDbkMsQ0FBQTs7QUFFRCxRQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFLE9BQU07O0FBRWpDLFFBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEIsTUFDSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7QUFDckIsYUFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2QsTUFDSTtBQUNILGdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakI7R0FFRixDQUFBOztBQUVELE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Q0FFeEM7QUFDRCxLQUFLLEVBQUU7OztBQUFBIiwiZmlsZSI6InBhcnQyL2V2ZW50cy8wNi5tb3VzZV9ldmVudHNfaW5fZGVwdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG4gIFR3byBldmVudCB0eXBlczpcblxuICAgIFNpbXBsZSBcbiAgICAgIC0gbW91c2V1cFxuICAgICAgLSBtb3VzZWRvd25cbiAgICAgIC0gbW91c2VvdmVyIChtb3VzZSBhcHBlYXJzIG92ZXIgZWxlbWVudClcbiAgICAgIC0gbW91c2VvdXRcbiAgICAgIC0gbW91c2Vtb3ZlXG5cbiAgICBDb21wbGV4IChjb25zaXN0cyBvZiBzb21lIHNpbXBsZSlcbiAgICAgIC0gY2xpY2sgKG1vdXNlZG93biwgbW91c2V1cCwgY2xpY2spXG4gICAgICAtIGRiY2xpY2tcbiAgICAgIC0gY29udGV4dG1lbnVcblxuXG4gIEV2ZW50IGFkZGl0aW9uYWwgcHJvcHNcblxuICAgIGV2ZW50LndoaWNoIC0gd2hhdCBtb3VzZSBidXR0b24gd2FzIHByZXNzZWRcbiAgICAgIDEgLSBsZWZ0XG4gICAgICAyIC0gY2VudGVyXG4gICAgICAzIC0gcmlnaHRcblxuXG4gICAgS2V5Ym9hcmQgbW9kaWZpZXJzIC0gYm9vbCB2YWx1ZXMsIGVuYWJsZWQgd2hlbiBhY2NvcmRpbmcgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgIFxuICAgICAgZXZlbnQuY3RybEtleVxuICAgICAgZXZlbnQuYWx0S2V5XG4gICAgICBldmVudC5zaGlmdEtleVxuICAgICAgZXZlbnQubWV0YUtleVxuXG4gICAgXG4gICAgQ29vcmRzIG9mIG1vdXNlIHBvaW50ZXJcblxuICAgICAgZXZlbnQuY2xpZW50WCAvIC5jbGllbnRZIC0gcmVsYXRpdmUgdG8gdmlzaWJsZSBXaW5kb3dcbiAgICAgIGV2ZW50LnBhZ2VYIC8gLnBhZ2VZIC0gcmVsYXRpdmUgdG8gd2hvbGUgZG9jdW1lbnRcbiovXG5cblxuXG4vKlRhc2sgMVxuXG7QodC00LXQu9Cw0LnRgtC1INGB0L/QuNGB0L7Quiwg0Y3Qu9C10LzQtdC90YLRiyDQutC+0YLQvtGA0L7Qs9C+INC80L7QttC90L4g0LLRi9C00LXQu9GP0YLRjCDQutC70LjQutC+0LwuXG5cbtCU0L7QsdCw0LLRjNGC0LUg0LzRg9C70YzRgtC4LdCy0YvQtNC10LvQtdC90LjQtS4gINCV0YHQu9C4INC60LvQuNC6INGBINC90LDQttCw0YLRi9C8IEN0cmwgKENtZCDQv9C+0LQgTWFjKSwg0YLQviDRjdC70LXQvNC10L3RgiDQtNC+0LHQsNCy0LvRj9C10YLRgdGPLdGD0LTQsNC70Y/QtdGC0YHRjyDQuNC3INCy0YvQtNC10LvQtdC90L3Ri9GFLlxuXG7QlNC+0LHQsNCy0YzRgtC1INCy0YvQtNC10LvQtdC90LjQtSDQv9GA0L7QvNC10LbRg9GC0LrQvtCyLiDQldGB0LvQuCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQutC70LjQuiDRgSDQvdCw0LbQsNGC0YvQvCBTaGlmdCxcbtGC0L4g0Log0LLRi9C00LXQu9C10L3QuNGOINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8g0L/RgNC+0LzQtdC20YPRgtC+0Log0Y3Qu9C10LzQtdC90YLQvtCyINC+0YIg0L/RgNC10LTRi9C00YPRidC10LPQviDQutC70LjQutC90YPRgtC+0LPQviDQtNC+INGN0YLQvtCz0L4uIFxu0J/RgNC4INGN0YLQvtC8INC90LUg0LLQsNC20L3Qviwg0LrQsNC60L7QtSDQuNC80LXQvdC90L4g0LTQtdC50YHRgtCy0LjQtSDQtNC10LvQsNC7INC/0YDQtdC00YvQtNGD0YnQuNC5INC60LvQuNC6LlxuXG7QrdGC0L4g0L/QvtGF0L7QttC1INC90LAg0YLQviwg0LrQsNC6INGA0LDQsdC+0YLQsNC10YIg0YTQsNC50LvQvtCy0YvQuSDQvNC10L3QtdC00LbQtdGAINCyINGA0Y/QtNC1INCe0KEsINC90L4g0YfRg9GC0Ywg0L/RgNC+0YnQtSxcbtGC0LDQuiDQutCw0Log0LrQvtC90LrRgNC10YLQvdCw0Y8g0YDQtdCw0LvQuNC30LDRhtC40Y8g0LLRi9C00LXQu9C10L3QuNC5INGA0LDQt9C70LjRh9Cw0LXRgtGB0Y8g0YMg0YDQsNC30L3Ri9GFINCe0KEsINC4INC10ZEg0YLQvtGH0L3QvtC1INCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQvdC1INCy0YXQvtC00LjRgiDQsiDRjdGC0YMg0LfQsNC00LDRh9GDLlxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBsZXQgbGFzdFNlbGVjdGVkSWR4ID0gMFxuICBcbiAgbGV0IGhhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gICAgbGV0IHRyZ3QgPSBldnQudGFyZ2V0XG4gICAgbGV0IG1vZCA9ICdzZWxlY3RlZCdcbiAgICBsZXQgaXRlbXMgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuXG5cbiAgICBsZXQgZmluZEl0ZW1JZHggPSBpdG0gPT4gXy5pbmRleE9mKGl0ZW1zLCBpdG0pXG5cbiAgICBsZXQgaGx0QnVsayA9IGl0bSA9PiB7XG4gICAgICBsZXQgaXRtSWR4ID0gZmluZEl0ZW1JZHgoaXRtKVxuXG4gICAgICBfKGl0ZW1zKVxuICAgICAgICAuZmlsdGVyKChpLCBpZHgpID0+IHtcbiAgICAgICAgICBpZiAobGFzdFNlbGVjdGVkSWR4ID4gaXRtSWR4KSB7XG4gICAgICAgICAgICByZXR1cm4gaWR4IDw9IGxhc3RTZWxlY3RlZElkeCAmJiBpZHggPj0gaXRtSWR4XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpZHggPj0gbGFzdFNlbGVjdGVkSWR4ICYmIGlkeCA8PSBpdG1JZHhcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKG1vZClcbiAgICAgICAgfSkudmFsdWUoKVxuICAgIH1cblxuICAgIGxldCBobHRDdXJyZW50ID0gaXRtID0+IHtcbiAgICAgIF8uZm9yRWFjaChpdGVtcywgaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKG1vZClcbiAgICAgICAgfSlcbiAgICAgIGl0bS5jbGFzc0xpc3QuYWRkKG1vZClcbiAgICAgIGxhc3RTZWxlY3RlZElkeCA9IGZpbmRJdGVtSWR4KGl0bSlcbiAgICB9XG5cbiAgICBsZXQgdG9nZ2xlQ3VycmVudCA9IGl0bSA9PiB7XG4gICAgICBpdG0uY2xhc3NMaXN0LnRvZ2dsZShtb2QpXG4gICAgICBsYXN0U2VsZWN0ZWRJZHggPSBmaW5kSXRlbUlkeChpdG0pXG4gICAgfVxuXG4gICAgaWYgKHRyZ3QudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG5cbiAgICBpZiAoZXZ0Lm1ldGFLZXkgfHwgZXZ0LmN0cmxLZXkpIHtcbiAgICAgIHRvZ2dsZUN1cnJlbnQodHJndClcbiAgICB9IFxuICAgIGVsc2UgaWYgKGV2dC5zaGlmdEtleSkge1xuICAgICAgaGx0QnVsayh0cmd0KVxuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICBobHRDdXJyZW50KHRyZ3QpXG4gICAgfVxuXG4gIH1cblxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcblxufVxudGFzazEoKVxuXG5cbi8qKi9cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
