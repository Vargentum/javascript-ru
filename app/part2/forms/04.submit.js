'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Создайте функцию showPrompt(text, callback), которая выводит форму для ввода с сообщением text и кнопками ОК/Отмена.

При отправке формы (OK/ввод в текстовом поле) – должна вызываться функция callback со значением поля.
При нажатии на Отмена или на клавишу Esc – должна вызываться функция callback(null). Клавиша Esc должна закрывать форму всегда, даже если поле для ввода сообщения не в фокусе.
Особенности реализации:

Форма должна показываться в центре окна (и оставаться в центре при изменении его размеров, а также при прокрутке окна!).
Текст может состоять из нескольких строк, возможен любой HTML
При показе формы остальные элементы страницы использовать нельзя, не работают другие кнопки и т.п, это окно – модальное.
При показе формы – сразу фокус на INPUT для ввода.
Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют переключиться на другие элементы страницы.


https://plnkr.co/edit/LPHR9P3zs4dfSrvdAa7K?p=preview
*/

function task1() {
  var ESC_KEYCODE = 27;

  var Logger = (function () {
    function Logger() {
      _classCallCheck(this, Logger);

      this.logger = document.createElement('div');
      this.logger.classList.add('logger');
      document.body.appendChild(this.logger);
    }

    _createClass(Logger, [{
      key: 'log',
      value: function log(html) {
        this.logger.innerHTML += '<br /> ' + html;
      }
    }]);

    return Logger;
  })();

  var Prompt = (function () {
    function Prompt(text, callback) {
      var _this = this;

      _classCallCheck(this, Prompt);

      this.callback = callback;
      this.text = text;
      this.formId = _.uniqueId('prompt-');
      this.escapeHandler = function (e) {
        if (e.keyCode !== ESC_KEYCODE) return;
        _this.handleCancel();
      };

      this.init();
    }

    _createClass(Prompt, [{
      key: 'handleCancel',
      value: function handleCancel() {
        this.destroy();
        this.callback(null);
      }
    }, {
      key: 'handleSubmit',
      value: function handleSubmit(e) {
        e.preventDefault(); // no page reloading
        var val = this.form.elements.text.value;
        if (val.length < 1) return;
        this.destroy();
        this.callback(val);
      }
    }, {
      key: 'makeFocusHelperInput',
      value: function makeFocusHelperInput(pos) {
        var input = '<input type="text" name="focusHelper" tabIndex="0" style="opacity: 0" />';
        this.form.insertAdjacentHTML(pos, input);
      }
    }, {
      key: 'makeFocusCycle',
      value: function makeFocusCycle(e) {
        var elements = $$(this.form.elements);
        var idx = elements.indexOf(e.target);
        var isOutsideForm = function isOutsideForm(elem) {
          return elem && elem.getAttribute('name') === 'focusHelper';
        };

        if (isOutsideForm(e.relatedTarget) && idx === 0) {
          _.last(elements).focus();
        } else if (isOutsideForm(e.relatedTarget) && idx === elements.length - 1) {
          _.first(elements).focus();
        }
      }
    }, {
      key: 'addHandlers',
      value: function addHandlers() {
        var _this2 = this;

        this.form.addEventListener('blur', function (e) {
          _this2.makeFocusCycle(e);
        }, true);
        this.form.addEventListener('submit', function (e) {
          _this2.handleSubmit(e);
        });
        this.form.elements.cancel.addEventListener('click', function (e) {
          _this2.handleCancel();
        });
        document.body.addEventListener('keydown', function (e) {
          _this2.escapeHandler(e);
        });
      }
    }, {
      key: 'init',
      value: function init() {
        var _this3 = this;

        this.formString = '<form id="' + this.formId + '" class="prompt">\n          <div class="prompt-body">\n            <p>' + this.text + '</p>\n            <input type="text" name="text"/>\n            <input type="button" value="Cancel" name="cancel" />\n            <input type="submit" value="Send" />\n          </div>\n        </form>';

        document.body.insertAdjacentHTML('beforeEnd', this.formString);
        this.form = document.getElementById(this.formId);

        this.addHandlers();
        this.form.elements.text.focus();

        //need for correct blur handling, if target is first / last at page
        ['beforeBegin', 'afterEnd'].forEach(function (pos) {
          return _this3.makeFocusHelperInput(pos);
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.form.parentElement.removeChild(this.form);
        document.body.removeEventListener('keydown', this.escapeHandler);
      }
    }]);

    return Prompt;
  })();

  var logger = new Logger();

  new Prompt('Are you ready?', function (result) {
    logger.log('Result of 1 prompt is: <u>' + result + '</u>');
    new Prompt("Really?", function (result) {
      logger.log('Result of 2 prompt is: <u>' + result + '</u>');
    });
  });
}
task1();
//# sourceMappingURL=data:application/json;base64,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T0FBSyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUE7T0FDM0U7OztnQ0FFUztBQUNSLFlBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDOUMsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtPQUNqRTs7O1dBbkZHLE1BQU07OztBQXVGWixNQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBQSxDQUFBOztBQUV2QixNQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLE1BQU0sRUFBSTtBQUNyQyxVQUFNLENBQUMsR0FBRyxnQ0FBOEIsTUFBTSxVQUFPLENBQUE7QUFDckQsUUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQUEsTUFBTSxFQUFJO0FBQzlCLFlBQU0sQ0FBQyxHQUFHLGdDQUE4QixNQUFNLFVBQU8sQ0FBQTtLQUN0RCxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FJSjtBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2Zvcm1zLzA0LnN1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7QodC+0LfQtNCw0LnRgtC1INGE0YPQvdC60YbQuNGOIHNob3dQcm9tcHQodGV4dCwgY2FsbGJhY2spLCDQutC+0YLQvtGA0LDRjyDQstGL0LLQvtC00LjRgiDRhNC+0YDQvNGDINC00LvRjyDQstCy0L7QtNCwINGBINGB0L7QvtCx0YnQtdC90LjQtdC8IHRleHQg0Lgg0LrQvdC+0L/QutCw0LzQuCDQntCaL9Ce0YLQvNC10L3QsC5cblxu0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0YTQvtGA0LzRiyAoT0sv0LLQstC+0LQg0LIg0YLQtdC60YHRgtC+0LLQvtC8INC/0L7Qu9C1KSDigJMg0LTQvtC70LbQvdCwINCy0YvQt9GL0LLQsNGC0YzRgdGPINGE0YPQvdC60YbQuNGPIGNhbGxiYWNrINGB0L4g0LfQvdCw0YfQtdC90LjQtdC8INC/0L7Qu9GPLlxu0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0J7RgtC80LXQvdCwINC40LvQuCDQvdCwINC60LvQsNCy0LjRiNGDIEVzYyDigJMg0LTQvtC70LbQvdCwINCy0YvQt9GL0LLQsNGC0YzRgdGPINGE0YPQvdC60YbQuNGPIGNhbGxiYWNrKG51bGwpLiDQmtC70LDQstC40YjQsCBFc2Mg0LTQvtC70LbQvdCwINC30LDQutGA0YvQstCw0YLRjCDRhNC+0YDQvNGDINCy0YHQtdCz0LTQsCwg0LTQsNC20LUg0LXRgdC70Lgg0L/QvtC70LUg0LTQu9GPINCy0LLQvtC00LAg0YHQvtC+0LHRidC10L3QuNGPINC90LUg0LIg0YTQvtC60YPRgdC1Llxu0J7RgdC+0LHQtdC90L3QvtGB0YLQuCDRgNC10LDQu9C40LfQsNGG0LjQuDpcblxu0KTQvtGA0LzQsCDQtNC+0LvQttC90LAg0L/QvtC60LDQt9GL0LLQsNGC0YzRgdGPINCyINGG0LXQvdGC0YDQtSDQvtC60L3QsCAo0Lgg0L7RgdGC0LDQstCw0YLRjNGB0Y8g0LIg0YbQtdC90YLRgNC1INC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0LXQs9C+INGA0LDQt9C80LXRgNC+0LIsINCwINGC0LDQutC20LUg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCEpLlxu0KLQtdC60YHRgiDQvNC+0LbQtdGCINGB0L7RgdGC0L7Rj9GC0Ywg0LjQtyDQvdC10YHQutC+0LvRjNC60LjRhSDRgdGC0YDQvtC6LCDQstC+0LfQvNC+0LbQtdC9INC70Y7QsdC+0LkgSFRNTFxu0J/RgNC4INC/0L7QutCw0LfQtSDRhNC+0YDQvNGLINC+0YHRgtCw0LvRjNC90YvQtSDRjdC70LXQvNC10L3RgtGLINGB0YLRgNCw0L3QuNGG0Ysg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC90LXQu9GM0LfRjywg0L3QtSDRgNCw0LHQvtGC0LDRjtGCINC00YDRg9Cz0LjQtSDQutC90L7Qv9C60Lgg0Lgg0YIu0L8sINGN0YLQviDQvtC60L3QviDigJMg0LzQvtC00LDQu9GM0L3QvtC1Llxu0J/RgNC4INC/0L7QutCw0LfQtSDRhNC+0YDQvNGLIOKAkyDRgdGA0LDQt9GDINGE0L7QutGD0YEg0L3QsCBJTlBVVCDQtNC70Y8g0LLQstC+0LTQsC5cbtCd0LDQttCw0YLQuNGPIFRhYi9TaGlmdCtUYWIg0L/QtdGA0LXQutC70Y7Rh9Cw0Y7RgiDQsiDRhtC40LrQu9C1INGC0L7Qu9GM0LrQviDQv9C+INC/0L7Qu9GP0Lwg0YTQvtGA0LzRiywg0L7QvdC4INC90LUg0L/QvtC30LLQvtC70Y/RjtGCINC/0LXRgNC10LrQu9GO0YfQuNGC0YzRgdGPINC90LAg0LTRgNGD0LPQuNC1INGN0LvQtdC80LXQvdGC0Ysg0YHRgtGA0LDQvdC40YbRiy5cblxuXG5odHRwczovL3BsbmtyLmNvL2VkaXQvTFBIUjlQM3pzNGRmU3J2ZEFhN0s/cD1wcmV2aWV3XG4qL1xuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG4gIGNvbnN0IEVTQ19LRVlDT0RFID0gMjdcblxuICBjbGFzcyBMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5sb2dnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy5sb2dnZXIuY2xhc3NMaXN0LmFkZCgnbG9nZ2VyJylcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sb2dnZXIpXG4gICAgfVxuICAgIGxvZyhodG1sKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbm5lckhUTUwgKz0gYDxiciAvPiAke2h0bWx9YFxuICAgIH1cbiAgfVxuICBcbiAgY2xhc3MgUHJvbXB0IHtcbiAgICBjb25zdHJ1Y3RvciAodGV4dCwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dFxuICAgICAgdGhpcy5mb3JtSWQgPSBfLnVuaXF1ZUlkKCdwcm9tcHQtJylcbiAgICAgIHRoaXMuZXNjYXBlSGFuZGxlciA9IGUgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlICE9PSBFU0NfS0VZQ09ERSkgcmV0dXJuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKClcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgIHRoaXMuY2FsbGJhY2sobnVsbClcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIC8vIG5vIHBhZ2UgcmVsb2FkaW5nXG4gICAgICBsZXQgdmFsID0gdGhpcy5mb3JtLmVsZW1lbnRzLnRleHQudmFsdWVcbiAgICAgIGlmICh2YWwubGVuZ3RoIDwgMSkgcmV0dXJuXG4gICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5jYWxsYmFjayh2YWwpXG4gICAgfVxuXG4gICAgbWFrZUZvY3VzSGVscGVySW5wdXQgKHBvcykge1xuICAgICAgbGV0IGlucHV0ID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb2N1c0hlbHBlclwiIHRhYkluZGV4PVwiMFwiIHN0eWxlPVwib3BhY2l0eTogMFwiIC8+YFxuICAgICAgdGhpcy5mb3JtLmluc2VydEFkamFjZW50SFRNTChwb3MsIGlucHV0KVxuICAgIH1cblxuICAgIG1ha2VGb2N1c0N5Y2xlKGUpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9ICQkKHRoaXMuZm9ybS5lbGVtZW50cylcbiAgICAgIGxldCBpZHggPSBlbGVtZW50cy5pbmRleE9mKGUudGFyZ2V0KVxuICAgICAgbGV0IGlzT3V0c2lkZUZvcm0gPSBlbGVtID0+IGVsZW0gJiYgZWxlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gJ2ZvY3VzSGVscGVyJ1xuXG4gICAgICBpZiAoaXNPdXRzaWRlRm9ybShlLnJlbGF0ZWRUYXJnZXQpICYmIGlkeCA9PT0gMCkge1xuICAgICAgICBfLmxhc3QoZWxlbWVudHMpLmZvY3VzKClcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmIChpc091dHNpZGVGb3JtKGUucmVsYXRlZFRhcmdldCkgJiYgaWR4ID09PSBlbGVtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIF8uZmlyc3QoZWxlbWVudHMpLmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIYW5kbGVycygpIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB7XG4gICAgICAgIHRoaXMubWFrZUZvY3VzQ3ljbGUoZSkgICAgXG4gICAgICB9LCB0cnVlKVxuICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChlKVxuICAgICAgfSlcbiAgICAgIHRoaXMuZm9ybS5lbGVtZW50cy5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICB0aGlzLmVzY2FwZUhhbmRsZXIoZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZm9ybVN0cmluZyA9XG4gICAgICAgIGA8Zm9ybSBpZD1cIiR7dGhpcy5mb3JtSWR9XCIgY2xhc3M9XCJwcm9tcHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbXB0LWJvZHlcIj5cbiAgICAgICAgICAgIDxwPiR7dGhpcy50ZXh0fTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNhbmNlbFwiIG5hbWU9XCJjYW5jZWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+YFxuXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5mb3JtU3RyaW5nKVxuICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtSWQpXG4gICAgICBcbiAgICAgIHRoaXMuYWRkSGFuZGxlcnMoKVxuICAgICAgdGhpcy5mb3JtLmVsZW1lbnRzLnRleHQuZm9jdXMoKTtcblxuICAgICAgLy9uZWVkIGZvciBjb3JyZWN0IGJsdXIgaGFuZGxpbmcsIGlmIHRhcmdldCBpcyBmaXJzdCAvIGxhc3QgYXQgcGFnZVxuICAgICAgWydiZWZvcmVCZWdpbicsICdhZnRlckVuZCddLmZvckVhY2gocG9zID0+IHRoaXMubWFrZUZvY3VzSGVscGVySW5wdXQocG9zKSlcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5mb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5lc2NhcGVIYW5kbGVyKVxuICAgIH1cbiAgfVxuXG5cbiAgbGV0IGxvZ2dlciA9IG5ldyBMb2dnZXJcblxuICBuZXcgUHJvbXB0KCdBcmUgeW91IHJlYWR5PycsIHJlc3VsdCA9PiB7XG4gICAgbG9nZ2VyLmxvZyhgUmVzdWx0IG9mIDEgcHJvbXB0IGlzOiA8dT4ke3Jlc3VsdH08L3U+YClcbiAgICBuZXcgUHJvbXB0KFwiUmVhbGx5P1wiLCByZXN1bHQgPT4ge1xuICAgICAgbG9nZ2VyLmxvZyhgUmVzdWx0IG9mIDIgcHJvbXB0IGlzOiA8dT4ke3Jlc3VsdH08L3U+YClcbiAgICB9KTtcbiAgfSk7XG5cblxuXG59XG50YXNrMSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
