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
    var content = target.dataset.tooltip;

    if (!content) return;

    switch (type) {
      case 'show':
        tooltip.init(target, content);
        break;
      case 'hide':
        tooltip.destroy();
        break;
    }
  };

  document.addEventListener('mouseover', tooltipController.bind(this, 'show'));
  document.addEventListener('mouseout', tooltipController.bind(this, 'hide'));
}
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAzLmJlaGF2aW9yX3BhdHRlcm4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxTQUFTLEtBQUssR0FBSTtNQUVWLE9BQU87QUFFWCxhQUZJLE9BQU8sR0FFRzs0QkFGVixPQUFPOztBQUdULFVBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN4QyxVQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7S0FDbEM7O2lCQUxHLE9BQU87O2dDQU9EO0FBQ1IsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtPQUNwQzs7O3FDQUVjLE1BQU0sRUFBRTtBQUNyQixZQUFJLFlBQVksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtBQUNqRCxZQUFJLEdBQUcsWUFBQSxDQUFDOztBQUVSLFlBQUksWUFBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtBQUM1QyxhQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7U0FDdEQsTUFBTTtBQUNMLGFBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUNqQyxDQUFDO0FBQ0YsWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtBQUN4QixZQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtPQUNqRTs7OzJCQUVJLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDcEIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO0FBQzVCLGdCQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbkMsWUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQUM1Qjs7O1dBNUJHLE9BQU87OztBQWdDYixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBOztBQUU3QixNQUFJLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFpQixDQUFJLElBQUksRUFBRSxHQUFHLEVBQUs7QUFDckMsUUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtBQUN2QixRQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTs7QUFFcEMsUUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPOztBQUVyQixZQUFPLElBQUk7QUFDVCxXQUFLLE1BQU07QUFBRSxlQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUN4QyxjQUFNO0FBQUEsQUFDUixXQUFLLE1BQU07QUFBRSxlQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDNUIsY0FBTTtBQUFBLEtBQ1Q7R0FDRixDQUFBOztBQUdELFVBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQzVFLFVBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0NBQzVFO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZXZlbnRzLzAzLmJlaGF2aW9yX3BhdHRlcm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG4gIEJlaGF2aW9yIFBhdHRlcm5cblxuICAgIC0gYWxsb3dzIHRvIHVzZSBjdXN0b20gaGFuZGxlcnMgREVDTEFSQVRJVkVMWVxuICAgIC0gdmlhIGh0bWwtYXR0cmlidXRlcyAvIGNsYXNzZXNcblxuXG4gIEhvdz8gXG4gICAgLSBzZXQtdXAgYXR0cnMgLyBjbGFzc2VzXG4gICAgXG4gICAgLSBhZGQgaGFuZGxlciB0byBET0NVTUVOVFxuICAgICAgLSBpdCBoYW5kbGVzIEFMTCBjbGlja3NcbiAgICAgIC0gaWYgaXQgYnViYmxlcyBmcm9tIHJpZ2h0IHRhcmdldCA9PiBkbyBzb21lIGFjdGlvbnNcblxuKi9cblxuXG4vKlRhc2sgMVxuXG4gINCf0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0LzRi9GI0Lgg0L3QsCDRjdC70LXQvNC10L3Rgiwg0L3QsCDQvdGR0Lwg0LLQvtC30L3QuNC60LDQtdGCINGB0L7QsdGL0YLQuNC1IG1vdXNlb3Zlciwg0L/RgNC4INGD0LTQsNC70LXQvdC40Lgg0LzRi9GI0Lgg0YEg0Y3Qu9C10LzQtdC90YLQsCDigJQg0YHQvtCx0YvRgtC40LUgbW91c2VvdXQuXG4gINCX0L3QsNGPINGN0YLQviwg0L3QsNC/0LjRiNC40YLQtSBKUy3QutC+0LQsINC60L7RgtC+0YDRi9C5INCx0YPQtNC10YIg0LTQtdC70LDRgtGMINGC0LDQuiwg0YfRgtC+INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0L3QsCDRjdC70LXQvNC10L3RgixcbiAg0LXRgdC70Lgg0YMg0L3QtdCz0L4g0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgZGF0YS10b29sdGlwIOKAlCDQvdCw0LQg0L3QuNC8INCx0YPQtNC10YIg0L/QvtC60LDQt9GL0LLQsNGC0YzRgdGPINC/0L7QtNGB0LrQsNC30LrQsCDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDRjdGC0L7Qs9C+INCw0YLRgNC40LHRg9GC0LAuXG4gINCSINGN0YLQvtC5INC30LDQtNCw0YfQtSDQvNC+0LbQvdC+INC/0L7Qu9Cw0LPQsNGC0YwsINGH0YLQviDQsiDRjdC70LXQvNC10L3RgtC1INGBINCw0YLRgNC40LHRg9GC0L7QvCBkYXRhLXRvb2x0aXAg4oCUINGC0L7Qu9GM0LrQviDRgtC10LrRgdGCLCDRgtC+INC10YHRgtGMINC90LXRgiDQv9C+0LTRjdC70LXQvNC10L3RgtC+0LIuXG4gIFxuICDQlNC10YLQsNC70Lgg0L7RhNC+0YDQvNC70LXQvdC40Y86XG4gICAg0J/QvtC00YHQutCw0LfQutCwINC00L7Qu9C20L3QsCDQv9C+0Y/QstC70Y/RgtGM0YHRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC90LAg0Y3Qu9C10LzQtdC90YIsINC/0L4g0YbQtdC90YLRgNGDINC4INC90LAg0L3QtdCx0L7Qu9GM0YjQvtC8INGA0LDRgdGB0YLQvtGP0L3QuNC4INGB0LLQtdGA0YXRgy4g0J/RgNC4INGD0YXQvtC00LUg0LrRg9GA0YHQvtGA0LAg0YEg0Y3Qu9C10LzQtdC90YLQsCDigJQg0LjRgdGH0LXQt9Cw0YLRjC5cbiAgICDQotC10LrRgdGCINC/0L7QtNGB0LrQsNC30LrQuCDQsdGA0LDRgtGMINC40Lcg0LfQvdCw0YfQtdC90LjRjyDQsNGC0YDQuNCx0YPRgtCwIGRhdGEtdG9vbHRpcC4g0K3RgtC+INC80L7QttC10YIg0LHRi9GC0Ywg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3Ri9C5IEhUTUwuXG4gICAg0J7RhNC+0YDQvNC70LXQvdC40LUg0L/QvtC00YHQutCw0LfQutC4INC00L7Qu9C20L3QviDQt9Cw0LTQsNCy0LDRgtGM0YHRjyBDU1MuXG4gICAg0J/QvtC00YHQutCw0LfQutCwINC90LUg0LTQvtC70LbQvdCwINCy0YvQu9C10LfQsNGC0Ywg0LfQsCDQs9GA0LDQvdC40YbRiyDRjdC60YDQsNC90LAsINCyINGC0L7QvCDRh9C40YHQu9C1INC10YHQu9C4INGB0YLRgNCw0L3QuNGG0LAg0YfQsNGB0YLQuNGH0L3QviDQv9GA0L7QutGA0YPRh9C10L3QsC4g0JXRgdC70Lgg0L3QtdC70YzQt9GPINC/0L7QutCw0LfQsNGC0Ywg0YHQstC10YDRhdGDIOKAlCDQv9C+0LrQsNC30YvQstCw0YLRjCDRgdC90LjQt9GDINGN0LvQtdC80LXQvdGC0LAuXG5cbiAg0JLQsNC20L3Qvjog0L3Rg9C20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L/RgNC40ZHQvCDRgNCw0LfRgNCw0LHQvtGC0LrQuCDCq9C/0L7QstC10LTQtdC90LjQtcK7LCDRgtC+INC10YHRgtGMINC/0L7RgdGC0LDQstC40YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQuiAo0YLQvtGH0L3QtdC1INC00LLQsCkg0L3QsCBkb2N1bWVudCwg0LAg0L3QtSDQvdCwINC60LDQttC00YvQuSDRjdC70LXQvNC10L3Rgi5cbiAg0J/Qu9GO0YEg0Y3RgtC+0LPQviDQv9C+0LTRhdC+0LTQsCDigJQg0LTQuNC90LDQvNC40YfQtdGB0LrQuCDQtNC+0LHQsNCy0LvQtdC90L3Ri9C1INCyIERPTSDQv9C+0LfQttC1INGN0LvQtdC80LXQvdGC0Ysg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QvtC70YPRh9Cw0YIg0Y3RgtC+0YIg0YTRg9C90LrRhtC40L7QvdCw0LsuXG4qL1xuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG5cbiAgY2xhc3MgVG9vbHRpcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMudGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMudGlwKVxuICAgIH1cblxuICAgIF9zZXRSZWxhdGl2ZVRvKHRhcmdldCkge1xuICAgICAgbGV0IHRhcmdldENvb3JkcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgbGV0IHRvcDtcblxuICAgICAgaWYgKHRhcmdldENvb3Jkcy50b3AgPiB0aGlzLnRpcC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgdG9wID0gdGFyZ2V0Q29vcmRzLnRvcCAtIHRoaXMudGlwLm9mZnNldEhlaWdodCArICdweCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCA9IHRhcmdldENvb3Jkcy5ib3R0b20gKyAncHgnXG4gICAgICB9O1xuICAgICAgdGhpcy50aXAuc3R5bGUudG9wID0gdG9wXG4gICAgICB0aGlzLnRpcC5zdHlsZS5sZWZ0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyAncHgnICAgICAgXG4gICAgfVxuXG4gICAgaW5pdCh0YXJnZXQsIGNvbnRlbnQpIHtcbiAgICAgIHRoaXMudGlwLmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50aXApXG4gICAgICB0aGlzLl9zZXRSZWxhdGl2ZVRvKHRhcmdldClcbiAgICB9XG4gIH1cbiAgXG5cbiAgY29uc3QgdG9vbHRpcCA9IG5ldyBUb29sdGlwKClcblxuICBsZXQgdG9vbHRpcENvbnRyb2xsZXIgPSAodHlwZSwgZXZ0KSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICBsZXQgY29udGVudCA9IHRhcmdldC5kYXRhc2V0LnRvb2x0aXBcblxuICAgIGlmICghY29udGVudCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgY2FzZSAnc2hvdyc6IHRvb2x0aXAuaW5pdCh0YXJnZXQsIGNvbnRlbnQpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlkZSc6IHRvb2x0aXAuZGVzdHJveSgpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdG9vbHRpcENvbnRyb2xsZXIuYmluZCh0aGlzLCAnc2hvdycpKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRvb2x0aXBDb250cm9sbGVyLmJpbmQodGhpcywgJ2hpZGUnKSlcbn1cbnRhc2sxKCkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
