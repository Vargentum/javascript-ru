'use strict';

/*

  Delegation pattern:

    - one handler on Parent, instead of many handlers at every Child
    - event.target contains Initial element that event occurs
    
  
  Tips: 
    - use event.target
    - filter needless elements (outer, or inner)
    - use .closest() to handle clicks on childrens of your real target

*/

/*Task 1

Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
Используйте делегирование событий. Один обработчик для всего.
*/

function task1() {

  var handler = function handler(evt) {
    var target = evt.target;
    if (!(target.className === 'remove-button')) return;
    target.closest('.pane').remove();
  };
  msgContainer.addEventListener('click', handler);
}
task1();

/*Task 2
  
  Создайте дерево, которое по клику на заголовок скрывает-показывает детей:
  Использовать делегирование.
  Клик вне текста заголовка (на пустом месте) ничего делать не должен.
*/

function task2() {

  var toggleVisibility = function toggleVisibility(node) {
    return node.hidden = !node.hidden;
  };

  var handler = function handler(evt) {
    var target = evt.target;
    if (!(target.tagName === 'SPAN' && target.nextElementSibling.tagName === 'UL')) return;
    toggleVisibility(target.nextElementSibling);
  };

  tree.addEventListener('click', handler);
}
task2();

/*Task 3
  Сделать сортировку таблицы при клике на заголовок.

  Использовать делегирование.
  Код не должен меняться при увеличении количества столбцов или строк.
*/

function task3() {
  var getRowText = function getRowText(row, idx) {
    return row.children[idx].textContent.toLowerCase();
  };

  var toggleWrapper = function toggleWrapper(fn, initType) {
    var sortType = initType;

    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      sortType = !sortType;
      return fn.apply(undefined, [sortType].concat(args));
    };
  };

  var reorderRows = function reorderRows(isAsc, tbody, idx) {
    return Array.prototype.sort.call(tbody.rows, function (a, b) {
      if (isAsc) {
        return getRowText(a, idx) - getRowText(b, idx);
      } else {
        return getRowText(b, idx) - getRowText(a, idx);
      }
    });
  };
  var reorderRowsCycled = toggleWrapper(reorderRows, true);

  var handler = function handler(evt) {
    var table = evt.currentTarget;
    var tbody = table.tBodies[0];
    var target = evt.target;
    if (!target.tagName === 'TH') return;

    var orderedRows = reorderRowsCycled(tbody, target.cellIndex);
    Array.prototype.map.call(orderedRows, function (row) {
      getRowText(row, 0);
      debugger;
    });
  };

  grid.addEventListener('click', handler);
}
task3();
//# sourceMappingURL=data:application/json;base64,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QUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUM1QixRQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0FBQ3ZCLFFBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRSxPQUFNOztBQUVwQyxRQUFJLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzVELFNBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQSxHQUFHLEVBQUk7QUFDM0MsZ0JBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDbEIsZUFBUTtLQUNULENBQUMsQ0FBQTtHQUNILENBQUE7O0FBRUQsTUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtDQUN4QztBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2V2ZW50cy8wMi5ldmVudF9kZWxlZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuICBEZWxlZ2F0aW9uIHBhdHRlcm46XG5cbiAgICAtIG9uZSBoYW5kbGVyIG9uIFBhcmVudCwgaW5zdGVhZCBvZiBtYW55IGhhbmRsZXJzIGF0IGV2ZXJ5IENoaWxkXG4gICAgLSBldmVudC50YXJnZXQgY29udGFpbnMgSW5pdGlhbCBlbGVtZW50IHRoYXQgZXZlbnQgb2NjdXJzXG4gICAgXG4gIFxuICBUaXBzOiBcbiAgICAtIHVzZSBldmVudC50YXJnZXRcbiAgICAtIGZpbHRlciBuZWVkbGVzcyBlbGVtZW50cyAob3V0ZXIsIG9yIGlubmVyKVxuICAgIC0gdXNlIC5jbG9zZXN0KCkgdG8gaGFuZGxlIGNsaWNrcyBvbiBjaGlsZHJlbnMgb2YgeW91ciByZWFsIHRhcmdldFxuXG4qL1xuXG5cblxuLypUYXNrIDFcblxu0JTQsNC9INGB0L/QuNGB0L7QuiDRgdC+0L7QsdGJ0LXQvdC40LkuINCU0L7QsdCw0LLRjNGC0LUg0LrQsNC20LTQvtC80YMg0YHQvtC+0LHRidC10L3QuNGOINC60L3QvtC/0LrRgyDQtNC70Y8g0LXQs9C+INGD0LTQsNC70LXQvdC40Y8uXG7QmNGB0L/QvtC70YzQt9GD0LnRgtC1INC00LXQu9C10LPQuNGA0L7QstCw0L3QuNC1INGB0L7QsdGL0YLQuNC5LiDQntC00LjQvSDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQtNC70Y8g0LLRgdC10LPQvi5cbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgXG4gIGxldCBoYW5kbGVyID0gKGV2dCkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgaWYgKCEodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3JlbW92ZS1idXR0b24nKSkgcmV0dXJuXG4gICAgdGFyZ2V0LmNsb3Nlc3QoJy5wYW5lJykucmVtb3ZlKClcbiAgfVxuICBtc2dDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxufVxudGFzazEoKVxuXG5cblxuLypUYXNrIDJcbiAgXG4gINCh0L7Qt9C00LDQudGC0LUg0LTQtdGA0LXQstC+LCDQutC+0YLQvtGA0L7QtSDQv9C+INC60LvQuNC60YMg0L3QsCDQt9Cw0LPQvtC70L7QstC+0Log0YHQutGA0YvQstCw0LXRgi3Qv9C+0LrQsNC30YvQstCw0LXRgiDQtNC10YLQtdC5OlxuICDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQtdC70LXQs9C40YDQvtCy0LDQvdC40LUuXG4gINCa0LvQuNC6INCy0L3QtSDRgtC10LrRgdGC0LAg0LfQsNCz0L7Qu9C+0LLQutCwICjQvdCwINC/0YPRgdGC0L7QvCDQvNC10YHRgtC1KSDQvdC40YfQtdCz0L4g0LTQtdC70LDRgtGMINC90LUg0LTQvtC70LbQtdC9LlxuKi9cblxuZnVuY3Rpb24gdGFzazIgKCkge1xuXG4gIGxldCB0b2dnbGVWaXNpYmlsaXR5ID0gKG5vZGUpID0+IG5vZGUuaGlkZGVuID0gIW5vZGUuaGlkZGVuXG5cbiAgbGV0IGhhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICBpZiAoISh0YXJnZXQudGFnTmFtZSA9PT0gJ1NQQU4nICYmIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSA9PT0gJ1VMJykpIHJldHVyblxuICAgIHRvZ2dsZVZpc2liaWxpdHkodGFyZ2V0Lm5leHRFbGVtZW50U2libGluZylcbiAgfVxuXG4gIHRyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxufVxudGFzazIoKVxuXG5cblxuLypUYXNrIDNcbiAg0KHQtNC10LvQsNGC0Ywg0YHQvtGA0YLQuNGA0L7QstC60YMg0YLQsNCx0LvQuNGG0Ysg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQt9Cw0LPQvtC70L7QstC+0LouXG5cbiAg0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LXQu9C10LPQuNGA0L7QstCw0L3QuNC1LlxuICDQmtC+0LQg0L3QtSDQtNC+0LvQttC10L0g0LzQtdC90Y/RgtGM0YHRjyDQv9GA0Lgg0YPQstC10LvQuNGH0LXQvdC40Lgg0LrQvtC70LjRh9C10YHRgtCy0LAg0YHRgtC+0LvQsdGG0L7QsiDQuNC70Lgg0YHRgtGA0L7Qui5cbiovXG5cbmZ1bmN0aW9uIHRhc2szICgpIHtcbiAgbGV0IGdldFJvd1RleHQgPSAocm93LCBpZHgpID0+IHJvdy5jaGlsZHJlbltpZHhdLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKClcbiAgXG4gIGxldCB0b2dnbGVXcmFwcGVyID0gKGZuLCBpbml0VHlwZSkgPT4ge1xuICAgIGxldCBzb3J0VHlwZSA9IGluaXRUeXBlXG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHNvcnRUeXBlID0gIXNvcnRUeXBlXG4gICAgICByZXR1cm4gZm4oc29ydFR5cGUsIC4uLmFyZ3MpXG4gICAgfVxuICB9XG5cbiAgbGV0IHJlb3JkZXJSb3dzID0gKGlzQXNjLCB0Ym9keSwgaWR4KSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb3J0LmNhbGwodGJvZHkucm93cywgKGEsIGIpID0+IHtcbiAgICAgIGlmIChpc0FzYykge1xuICAgICAgICByZXR1cm4gZ2V0Um93VGV4dChhLCBpZHgpIC0gZ2V0Um93VGV4dChiLCBpZHgpICBcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgcmV0dXJuIGdldFJvd1RleHQoYiwgaWR4KSAtIGdldFJvd1RleHQoYSwgaWR4KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgbGV0IHJlb3JkZXJSb3dzQ3ljbGVkID0gdG9nZ2xlV3JhcHBlcihyZW9yZGVyUm93cywgdHJ1ZSlcblxuICBsZXQgaGFuZGxlciA9IChldnQpID0+IHtcbiAgICBsZXQgdGFibGUgPSBldnQuY3VycmVudFRhcmdldFxuICAgIGxldCB0Ym9keSA9IHRhYmxlLnRCb2RpZXNbMF1cbiAgICBsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuICAgIGlmICghdGFyZ2V0LnRhZ05hbWUgPT09ICdUSCcpIHJldHVyblxuXG4gICAgbGV0IG9yZGVyZWRSb3dzID0gcmVvcmRlclJvd3NDeWNsZWQodGJvZHksIHRhcmdldC5jZWxsSW5kZXgpXG4gICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKG9yZGVyZWRSb3dzLCByb3cgPT4ge1xuICAgICAgZ2V0Um93VGV4dChyb3csIDApXG4gICAgICBkZWJ1Z2dlclxuICAgIH0pXG4gIH1cblxuICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcbn1cbnRhc2szKCkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
