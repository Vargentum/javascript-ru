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

    var findItemIdx = function findItemIdx(itm) {
      return _.indexOf(list.children, itm);
    };

    var hltBulk = function hltBulk(itm) {
      var itmIdx = findItemIdx(itm);

      _(list.children).filter(function (i, idx) {
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
      _.forEach(list.children, function (item) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2Lm1vdXNlX2V2ZW50c19pbl9kZXB0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksZUFBZSxHQUFHLENBQUMsQ0FBQTs7QUFFdkIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUksR0FBRyxFQUFLO0FBQ3JCLFFBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7QUFDckIsUUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFBOztBQUVwQixRQUFJLFdBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBRyxHQUFHO2FBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztLQUFBLENBQUE7O0FBRXRELFFBQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFHLEdBQUcsRUFBSTtBQUNuQixVQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7O0FBRTdCLE9BQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ2IsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBSztBQUNsQixZQUFJLGVBQWUsR0FBRyxNQUFNLEVBQUU7QUFDNUIsaUJBQU8sR0FBRyxJQUFJLGVBQWUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFBO1NBQy9DLE1BQ0k7QUFDSCxpQkFBTyxHQUFHLElBQUksZUFBZSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUE7U0FDL0M7T0FDRixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO09BQ3hCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtLQUNiLENBQUE7O0FBRUQsUUFBSSxVQUFVLEdBQUcsU0FBYixVQUFVLENBQUcsR0FBRyxFQUFJO0FBQ3RCLE9BQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFBLElBQUksRUFBSTtBQUM3QixZQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtPQUMzQixDQUFDLENBQUE7QUFDSixTQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN0QixxQkFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNuQyxDQUFBOztBQUVELFFBQUksYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBRyxHQUFHLEVBQUk7QUFDekIsU0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDekIscUJBQWUsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDbkMsQ0FBQTs7QUFFRCxRQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFLE9BQU07O0FBRWpDLFFBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLG1CQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEIsTUFDSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7QUFDckIsYUFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2QsTUFDSTtBQUNILGdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakI7R0FFRixDQUFBOztBQUVELE1BQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Q0FFeEM7QUFDRCxLQUFLLEVBQUUsQ0FBQSIsImZpbGUiOiJwYXJ0Mi9ldmVudHMvMDYubW91c2VfZXZlbnRzX2luX2RlcHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuICBUd28gZXZlbnQgdHlwZXM6XG5cbiAgICBTaW1wbGUgXG4gICAgICAtIG1vdXNldXBcbiAgICAgIC0gbW91c2Vkb3duXG4gICAgICAtIG1vdXNlb3ZlciAobW91c2UgYXBwZWFycyBvdmVyIGVsZW1lbnQpXG4gICAgICAtIG1vdXNlb3V0XG4gICAgICAtIG1vdXNlbW92ZVxuXG4gICAgQ29tcGxleCAoY29uc2lzdHMgb2Ygc29tZSBzaW1wbGUpXG4gICAgICAtIGNsaWNrIChtb3VzZWRvd24sIG1vdXNldXAsIGNsaWNrKVxuICAgICAgLSBkYmNsaWNrXG4gICAgICAtIGNvbnRleHRtZW51XG5cblxuICBFdmVudCBhZGRpdGlvbmFsIHByb3BzXG5cbiAgICBldmVudC53aGljaCAtIHdoYXQgbW91c2UgYnV0dG9uIHdhcyBwcmVzc2VkXG4gICAgICAxIC0gbGVmdFxuICAgICAgMiAtIGNlbnRlclxuICAgICAgMyAtIHJpZ2h0XG5cblxuICAgIEtleWJvYXJkIG1vZGlmaWVycyAtIGJvb2wgdmFsdWVzLCBlbmFibGVkIHdoZW4gYWNjb3JkaW5nIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgICBcbiAgICAgIGV2ZW50LmN0cmxLZXlcbiAgICAgIGV2ZW50LmFsdEtleVxuICAgICAgZXZlbnQuc2hpZnRLZXlcbiAgICAgIGV2ZW50Lm1ldGFLZXlcblxuICAgIFxuICAgIENvb3JkcyBvZiBtb3VzZSBwb2ludGVyXG5cbiAgICAgIGV2ZW50LmNsaWVudFggLyAuY2xpZW50WSAtIHJlbGF0aXZlIHRvIHZpc2libGUgV2luZG93XG4gICAgICBldmVudC5wYWdlWCAvIC5wYWdlWSAtIHJlbGF0aXZlIHRvIHdob2xlIGRvY3VtZW50XG4qL1xuXG5cblxuLypUYXNrIDFcblxu0KHQtNC10LvQsNC50YLQtSDRgdC/0LjRgdC+0LosINGN0LvQtdC80LXQvdGC0Ysg0LrQvtGC0L7RgNC+0LPQviDQvNC+0LbQvdC+INCy0YvQtNC10LvRj9GC0Ywg0LrQu9C40LrQvtC8LlxuXG7QlNC+0LHQsNCy0YzRgtC1INC80YPQu9GM0YLQuC3QstGL0LTQtdC70LXQvdC40LUuICDQldGB0LvQuCDQutC70LjQuiDRgSDQvdCw0LbQsNGC0YvQvCBDdHJsIChDbWQg0L/QvtC0IE1hYyksINGC0L4g0Y3Qu9C10LzQtdC90YIg0LTQvtCx0LDQstC70Y/QtdGC0YHRjy3Rg9C00LDQu9GP0LXRgtGB0Y8g0LjQtyDQstGL0LTQtdC70LXQvdC90YvRhS5cblxu0JTQvtCx0LDQstGM0YLQtSDQstGL0LTQtdC70LXQvdC40LUg0L/RgNC+0LzQtdC20YPRgtC60L7Qsi4g0JXRgdC70Lgg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LrQu9C40Log0YEg0L3QsNC20LDRgtGL0LwgU2hpZnQsXG7RgtC+INC6INCy0YvQtNC10LvQtdC90LjRjiDQtNC+0LHQsNCy0LvRj9C10YLRgdGPINC/0YDQvtC80LXQttGD0YLQvtC6INGN0LvQtdC80LXQvdGC0L7QsiDQvtGCINC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LrQu9C40LrQvdGD0YLQvtCz0L4g0LTQviDRjdGC0L7Qs9C+LiBcbtCf0YDQuCDRjdGC0L7QvCDQvdC1INCy0LDQttC90L4sINC60LDQutC+0LUg0LjQvNC10L3QvdC+INC00LXQudGB0YLQstC40LUg0LTQtdC70LDQuyDQv9GA0LXQtNGL0LTRg9GJ0LjQuSDQutC70LjQui5cblxu0K3RgtC+INC/0L7RhdC+0LbQtSDQvdCwINGC0L4sINC60LDQuiDRgNCw0LHQvtGC0LDQtdGCINGE0LDQudC70L7QstGL0Lkg0LzQtdC90LXQtNC20LXRgCDQsiDRgNGP0LTQtSDQntChLCDQvdC+INGH0YPRgtGMINC/0YDQvtGJ0LUsXG7RgtCw0Log0LrQsNC6INC60L7QvdC60YDQtdGC0L3QsNGPINGA0LXQsNC70LjQt9Cw0YbQuNGPINCy0YvQtNC10LvQtdC90LjQuSDRgNCw0LfQu9C40YfQsNC10YLRgdGPINGDINGA0LDQt9C90YvRhSDQntChLCDQuCDQtdGRINGC0L7Rh9C90L7QtSDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0L3QtSDQstGF0L7QtNC40YIg0LIg0Y3RgtGDINC30LDQtNCw0YfRgy5cbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgbGV0IGxhc3RTZWxlY3RlZElkeCA9IDBcbiAgXG4gIGxldCBoYW5kbGVyID0gKGV2dCkgPT4ge1xuICAgIGxldCB0cmd0ID0gZXZ0LnRhcmdldFxuICAgIGxldCBtb2QgPSAnc2VsZWN0ZWQnXG5cbiAgICBsZXQgZmluZEl0ZW1JZHggPSBpdG0gPT4gXy5pbmRleE9mKGxpc3QuY2hpbGRyZW4sIGl0bSlcblxuICAgIGxldCBobHRCdWxrID0gaXRtID0+IHtcbiAgICAgIGxldCBpdG1JZHggPSBmaW5kSXRlbUlkeChpdG0pXG5cbiAgICAgIF8obGlzdC5jaGlsZHJlbilcbiAgICAgICAgLmZpbHRlcigoaSwgaWR4KSA9PiB7XG4gICAgICAgICAgaWYgKGxhc3RTZWxlY3RlZElkeCA+IGl0bUlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkeCA8PSBsYXN0U2VsZWN0ZWRJZHggJiYgaWR4ID49IGl0bUlkeFxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaWR4ID49IGxhc3RTZWxlY3RlZElkeCAmJiBpZHggPD0gaXRtSWR4XG4gICAgICAgICAgfVxuICAgICAgICB9KS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChtb2QpXG4gICAgICAgIH0pLnZhbHVlKClcbiAgICB9XG5cbiAgICBsZXQgaGx0Q3VycmVudCA9IGl0bSA9PiB7XG4gICAgICBfLmZvckVhY2gobGlzdC5jaGlsZHJlbiwgaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKG1vZClcbiAgICAgICAgfSlcbiAgICAgIGl0bS5jbGFzc0xpc3QuYWRkKG1vZClcbiAgICAgIGxhc3RTZWxlY3RlZElkeCA9IGZpbmRJdGVtSWR4KGl0bSlcbiAgICB9XG5cbiAgICBsZXQgdG9nZ2xlQ3VycmVudCA9IGl0bSA9PiB7XG4gICAgICBpdG0uY2xhc3NMaXN0LnRvZ2dsZShtb2QpXG4gICAgICBsYXN0U2VsZWN0ZWRJZHggPSBmaW5kSXRlbUlkeChpdG0pXG4gICAgfVxuXG4gICAgaWYgKHRyZ3QudGFnTmFtZSAhPT0gJ0xJJykgcmV0dXJuXG5cbiAgICBpZiAoZXZ0Lm1ldGFLZXkgfHwgZXZ0LmN0cmxLZXkpIHtcbiAgICAgIHRvZ2dsZUN1cnJlbnQodHJndClcbiAgICB9IFxuICAgIGVsc2UgaWYgKGV2dC5zaGlmdEtleSkge1xuICAgICAgaGx0QnVsayh0cmd0KVxuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICBobHRDdXJyZW50KHRyZ3QpXG4gICAgfVxuXG4gIH1cblxuICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcblxufVxudGFzazEoKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
