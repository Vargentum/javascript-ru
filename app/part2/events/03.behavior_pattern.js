'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

  Behavior Pattern

    - allows to use custom handlers DECLARATIVELY
    - via html-attributes / classes


  How? 
    - set-up attrs / classes
    
    - add handler to DOCUMENT
      - it handles ALL clicks
      - if it bubbles from right target => do some actions

*/

/*Task 1

  При наведении мыши на элемент, на нём возникает событие mouseover, при удалении мыши с элемента — событие mouseout.
  Зная это, напишите JS-код, который будет делать так, что при наведении на элемент,
  если у него есть атрибут data-tooltip — над ним будет показываться подсказка с содержимым этого атрибута.
  В этой задаче можно полагать, что в элементе с атрибутом data-tooltip — только текст, то есть нет подэлементов.
  
  Детали оформления:
    Подсказка должна появляться при наведении на элемент, по центру и на небольшом расстоянии сверху. При уходе курсора с элемента — исчезать.
    Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
    Оформление подсказки должно задаваться CSS.
    Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена. Если нельзя показать сверху — показывать снизу элемента.

  Важно: нужно использовать приём разработки «поведение», то есть поставить обработчик (точнее два) на document, а не на каждый элемент.
  Плюс этого подхода — динамически добавленные в DOM позже элементы автоматически получат этот функционал.
*/

function task1() {
  var Tooltip = (function () {
    function Tooltip(parent, content) {
      _classCallCheck(this, Tooltip);

      init(parent);
    }

    _createClass(Tooltip, [{
      key: 'destroy',
      value: function destroy() {}
    }, {
      key: 'init',
      value: function init() {}
    }]);

    return Tooltip;
  })();

  var tooltipShow = function tooltipShow(evt) {
    var target = evt.target;
    var content = target.dataset(tooltip);

    if (!content) return;
    var tooltip = new Tooltip(target, content);
  };

  document.addEventListener('mouseover', showTooltip);
  document.addEventListener('mouseout', hideTooltip);
}
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzLmJlaGF2aW9yX3BhdHRlcm4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxTQUFTLEtBQUssR0FBSTtNQUVWLE9BQU87QUFFWCxhQUZJLE9BQU8sQ0FFQyxNQUFNLEVBQUUsT0FBTyxFQUFFOzRCQUZ6QixPQUFPOztBQUdULFVBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUNiOztpQkFKRyxPQUFPOztnQ0FNRCxFQUVUOzs7NkJBRU0sRUFFTjs7O1dBWkcsT0FBTzs7O0FBZWIsTUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQUksR0FBRyxFQUFLO0FBQzNCLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUE7QUFDdkIsUUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTs7QUFFckMsUUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPO0FBQ3JCLFFBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtHQUMzQyxDQUFBOztBQUVELFVBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFDbkQsVUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtDQUNuRDtBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2V2ZW50cy8wMy5iZWhhdmlvcl9wYXR0ZXJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuICBCZWhhdmlvciBQYXR0ZXJuXG5cbiAgICAtIGFsbG93cyB0byB1c2UgY3VzdG9tIGhhbmRsZXJzIERFQ0xBUkFUSVZFTFlcbiAgICAtIHZpYSBodG1sLWF0dHJpYnV0ZXMgLyBjbGFzc2VzXG5cblxuICBIb3c/IFxuICAgIC0gc2V0LXVwIGF0dHJzIC8gY2xhc3Nlc1xuICAgIFxuICAgIC0gYWRkIGhhbmRsZXIgdG8gRE9DVU1FTlRcbiAgICAgIC0gaXQgaGFuZGxlcyBBTEwgY2xpY2tzXG4gICAgICAtIGlmIGl0IGJ1YmJsZXMgZnJvbSByaWdodCB0YXJnZXQgPT4gZG8gc29tZSBhY3Rpb25zXG5cbiovXG5cblxuLypUYXNrIDFcblxuICDQn9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC80YvRiNC4INC90LAg0Y3Qu9C10LzQtdC90YIsINC90LAg0L3RkdC8INCy0L7Qt9C90LjQutCw0LXRgiDRgdC+0LHRi9GC0LjQtSBtb3VzZW92ZXIsINC/0YDQuCDRg9C00LDQu9C10L3QuNC4INC80YvRiNC4INGBINGN0LvQtdC80LXQvdGC0LAg4oCUINGB0L7QsdGL0YLQuNC1IG1vdXNlb3V0LlxuICDQl9C90LDRjyDRjdGC0L4sINC90LDQv9C40YjQuNGC0LUgSlMt0LrQvtC0LCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQviDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC90LAg0Y3Qu9C10LzQtdC90YIsXG4gINC10YHQu9C4INGDINC90LXQs9C+INC10YHRgtGMINCw0YLRgNC40LHRg9GCIGRhdGEtdG9vbHRpcCDigJQg0L3QsNC0INC90LjQvCDQsdGD0LTQtdGCINC/0L7QutCw0LfRi9Cy0LDRgtGM0YHRjyDQv9C+0LTRgdC60LDQt9C60LAg0YEg0YHQvtC00LXRgNC20LjQvNGL0Lwg0Y3RgtC+0LPQviDQsNGC0YDQuNCx0YPRgtCwLlxuICDQkiDRjdGC0L7QuSDQt9Cw0LTQsNGH0LUg0LzQvtC20L3QviDQv9C+0LvQsNCz0LDRgtGMLCDRh9GC0L4g0LIg0Y3Qu9C10LzQtdC90YLQtSDRgSDQsNGC0YDQuNCx0YPRgtC+0LwgZGF0YS10b29sdGlwIOKAlCDRgtC+0LvRjNC60L4g0YLQtdC60YHRgiwg0YLQviDQtdGB0YLRjCDQvdC10YIg0L/QvtC00Y3Qu9C10LzQtdC90YLQvtCyLlxuICBcbiAg0JTQtdGC0LDQu9C4INC+0YTQvtGA0LzQu9C10L3QuNGPOlxuICAgINCf0L7QtNGB0LrQsNC30LrQsCDQtNC+0LvQttC90LAg0L/QvtGP0LLQu9GP0YLRjNGB0Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvdCwINGN0LvQtdC80LXQvdGCLCDQv9C+INGG0LXQvdGC0YDRgyDQuCDQvdCwINC90LXQsdC+0LvRjNGI0L7QvCDRgNCw0YHRgdGC0L7Rj9C90LjQuCDRgdCy0LXRgNGF0YMuINCf0YDQuCDRg9GF0L7QtNC1INC60YPRgNGB0L7RgNCwINGBINGN0LvQtdC80LXQvdGC0LAg4oCUINC40YHRh9C10LfQsNGC0YwuXG4gICAg0KLQtdC60YHRgiDQv9C+0LTRgdC60LDQt9C60Lgg0LHRgNCw0YLRjCDQuNC3INC30L3QsNGH0LXQvdC40Y8g0LDRgtGA0LjQsdGD0YLQsCBkYXRhLXRvb2x0aXAuINCt0YLQviDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YDQvtC40LfQstC+0LvRjNC90YvQuSBIVE1MLlxuICAgINCe0YTQvtGA0LzQu9C10L3QuNC1INC/0L7QtNGB0LrQsNC30LrQuCDQtNC+0LvQttC90L4g0LfQsNC00LDQstCw0YLRjNGB0Y8gQ1NTLlxuICAgINCf0L7QtNGB0LrQsNC30LrQsCDQvdC1INC00L7Qu9C20L3QsCDQstGL0LvQtdC30LDRgtGMINC30LAg0LPRgNCw0L3QuNGG0Ysg0Y3QutGA0LDQvdCwLCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQtdGB0LvQuCDRgdGC0YDQsNC90LjRhtCwINGH0LDRgdGC0LjRh9C90L4g0L/RgNC+0LrRgNGD0YfQtdC90LAuINCV0YHQu9C4INC90LXQu9GM0LfRjyDQv9C+0LrQsNC30LDRgtGMINGB0LLQtdGA0YXRgyDigJQg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0YHQvdC40LfRgyDRjdC70LXQvNC10L3RgtCwLlxuXG4gINCS0LDQttC90L46INC90YPQttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC/0YDQuNGR0Lwg0YDQsNC30YDQsNCx0L7RgtC60LggwqvQv9C+0LLQtdC00LXQvdC40LXCuywg0YLQviDQtdGB0YLRjCDQv9C+0YHRgtCw0LLQuNGC0Ywg0L7QsdGA0LDQsdC+0YLRh9C40LogKNGC0L7Rh9C90LXQtSDQtNCy0LApINC90LAgZG9jdW1lbnQsINCwINC90LUg0L3QsCDQutCw0LbQtNGL0Lkg0Y3Qu9C10LzQtdC90YIuXG4gINCf0LvRjtGBINGN0YLQvtCz0L4g0L/QvtC00YXQvtC00LAg4oCUINC00LjQvdCw0LzQuNGH0LXRgdC60Lgg0LTQvtCx0LDQstC70LXQvdC90YvQtSDQsiBET00g0L/QvtC30LbQtSDRjdC70LXQvNC10L3RgtGLINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0L7Qu9GD0YfQsNGCINGN0YLQvtGCINGE0YPQvdC60YbQuNC+0L3QsNC7LlxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuXG4gIGNsYXNzIFRvb2x0aXAge1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBjb250ZW50KSB7XG4gICAgICBpbml0KHBhcmVudClcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvb2x0aXBTaG93ID0gKGV2dCkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgbGV0IGNvbnRlbnQgPSB0YXJnZXQuZGF0YXNldCh0b29sdGlwKVxuXG4gICAgaWYgKCFjb250ZW50KSByZXR1cm47XG4gICAgbGV0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0YXJnZXQsIGNvbnRlbnQpXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93VG9vbHRpcClcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoaWRlVG9vbHRpcClcbn1cbnRhc2sxKCkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
