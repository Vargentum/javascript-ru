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
        this.destroy();
        this.callback(this.form.elements.text.value);
        e.preventDefault(); // no page reloading
      }
    }, {
      key: 'addHandlers',
      value: function addHandlers() {
        var _this2 = this;

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
        this.formString = '<form id="' + this.formId + '" class="prompt">\n          <div class="prompt-body">\n            <p>' + this.text + '</p>\n            <input type="text" name="text"/>\n            <input type="button" value="Cancel" name="cancel" />\n            <input type="submit" value="Send" />\n          </div>\n        </form>';

        document.body.insertAdjacentHTML('beforeEnd', this.formString);
        this.form = document.getElementById(this.formId);
        this.addHandlers();
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
//# sourceMappingURL=data:application/json;base64,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QUM5QyxnQkFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO09BQ2pFOzs7V0F2REcsTUFBTTs7O0FBMkRaLE1BQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFBLENBQUE7O0FBRXZCLE1BQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFLFVBQUEsTUFBTSxFQUFJO0FBQ3JDLFVBQU0sQ0FBQyxHQUFHLGdDQUE4QixNQUFNLFVBQU8sQ0FBQTtBQUNyRCxRQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDOUIsWUFBTSxDQUFDLEdBQUcsZ0NBQThCLE1BQU0sVUFBTyxDQUFBO0tBQ3RELENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUlKO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZm9ybXMvMDQuc3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbtCh0L7Qt9C00LDQudGC0LUg0YTRg9C90LrRhtC40Y4gc2hvd1Byb21wdCh0ZXh0LCBjYWxsYmFjayksINC60L7RgtC+0YDQsNGPINCy0YvQstC+0LTQuNGCINGE0L7RgNC80YMg0LTQu9GPINCy0LLQvtC00LAg0YEg0YHQvtC+0LHRidC10L3QuNC10LwgdGV4dCDQuCDQutC90L7Qv9C60LDQvNC4INCe0Jov0J7RgtC80LXQvdCwLlxuXG7Qn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDRhNC+0YDQvNGLIChPSy/QstCy0L7QtCDQsiDRgtC10LrRgdGC0L7QstC+0Lwg0L/QvtC70LUpIOKAkyDQtNC+0LvQttC90LAg0LLRi9C30YvQstCw0YLRjNGB0Y8g0YTRg9C90LrRhtC40Y8gY2FsbGJhY2sg0YHQviDQt9C90LDRh9C10L3QuNC10Lwg0L/QvtC70Y8uXG7Qn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQntGC0LzQtdC90LAg0LjQu9C4INC90LAg0LrQu9Cw0LLQuNGI0YMgRXNjIOKAkyDQtNC+0LvQttC90LAg0LLRi9C30YvQstCw0YLRjNGB0Y8g0YTRg9C90LrRhtC40Y8gY2FsbGJhY2sobnVsbCkuINCa0LvQsNCy0LjRiNCwIEVzYyDQtNC+0LvQttC90LAg0LfQsNC60YDRi9Cy0LDRgtGMINGE0L7RgNC80YMg0LLRgdC10LPQtNCwLCDQtNCw0LbQtSDQtdGB0LvQuCDQv9C+0LvQtSDQtNC70Y8g0LLQstC+0LTQsCDRgdC+0L7QsdGJ0LXQvdC40Y8g0L3QtSDQsiDRhNC+0LrRg9GB0LUuXG7QntGB0L7QsdC10L3QvdC+0YHRgtC4INGA0LXQsNC70LjQt9Cw0YbQuNC4OlxuXG7QpNC+0YDQvNCwINC00L7Qu9C20L3QsCDQv9C+0LrQsNC30YvQstCw0YLRjNGB0Y8g0LIg0YbQtdC90YLRgNC1INC+0LrQvdCwICjQuCDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQsiDRhtC10L3RgtGA0LUg0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQtdCz0L4g0YDQsNC30LzQtdGA0L7Qsiwg0LAg0YLQsNC60LbQtSDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC+0LrQvdCwISkuXG7QotC10LrRgdGCINC80L7QttC10YIg0YHQvtGB0YLQvtGP0YLRjCDQuNC3INC90LXRgdC60L7Qu9GM0LrQuNGFINGB0YLRgNC+0LosINCy0L7Qt9C80L7QttC10L0g0LvRjtCx0L7QuSBIVE1MXG7Qn9GA0Lgg0L/QvtC60LDQt9C1INGE0L7RgNC80Ysg0L7RgdGC0LDQu9GM0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0YHRgtGA0LDQvdC40YbRiyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L3QtdC70YzQt9GPLCDQvdC1INGA0LDQsdC+0YLQsNGO0YIg0LTRgNGD0LPQuNC1INC60L3QvtC/0LrQuCDQuCDRgi7Qvywg0Y3RgtC+INC+0LrQvdC+IOKAkyDQvNC+0LTQsNC70YzQvdC+0LUuXG7Qn9GA0Lgg0L/QvtC60LDQt9C1INGE0L7RgNC80Ysg4oCTINGB0YDQsNC30YMg0YTQvtC60YPRgSDQvdCwIElOUFVUINC00LvRjyDQstCy0L7QtNCwLlxu0J3QsNC20LDRgtC40Y8gVGFiL1NoaWZ0K1RhYiDQv9C10YDQtdC60LvRjtGH0LDRjtGCINCyINGG0LjQutC70LUg0YLQvtC70YzQutC+INC/0L4g0L/QvtC70Y/QvCDRhNC+0YDQvNGLLCDQvtC90Lgg0L3QtSDQv9C+0LfQstC+0LvRj9GO0YIg0L/QtdGA0LXQutC70Y7Rh9C40YLRjNGB0Y8g0L3QsCDQtNGA0YPQs9C40LUg0Y3Qu9C10LzQtdC90YLRiyDRgdGC0YDQsNC90LjRhtGLLlxuXG5cbmh0dHBzOi8vcGxua3IuY28vZWRpdC9MUEhSOVAzenM0ZGZTcnZkQWE3Sz9wPXByZXZpZXdcbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgY29uc3QgRVNDX0tFWUNPREUgPSAyN1xuXG4gIGNsYXNzIExvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmxvZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLmxvZ2dlci5jbGFzc0xpc3QuYWRkKCdsb2dnZXInKVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxvZ2dlcilcbiAgICB9XG4gICAgbG9nKGh0bWwpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmlubmVySFRNTCArPSBgPGJyIC8+ICR7aHRtbH1gXG4gICAgfVxuICB9XG4gIFxuICBjbGFzcyBQcm9tcHQge1xuICAgIGNvbnN0cnVjdG9yICh0ZXh0LCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICB0aGlzLnRleHQgPSB0ZXh0XG4gICAgICB0aGlzLmZvcm1JZCA9IF8udW5pcXVlSWQoJ3Byb21wdC0nKVxuICAgICAgdGhpcy5lc2NhcGVIYW5kbGVyID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgIT09IEVTQ19LRVlDT0RFKSByZXR1cm5cbiAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGhhbmRsZUNhbmNlbCAoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5jYWxsYmFjayhudWxsKVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmZvcm0uZWxlbWVudHMudGV4dC52YWx1ZSlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKSAvLyBubyBwYWdlIHJlbG9hZGluZ1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXJzKCkge1xuICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChlKVxuICAgICAgfSlcbiAgICAgIHRoaXMuZm9ybS5lbGVtZW50cy5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICB0aGlzLmVzY2FwZUhhbmRsZXIoZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZm9ybVN0cmluZyA9XG4gICAgICAgIGA8Zm9ybSBpZD1cIiR7dGhpcy5mb3JtSWR9XCIgY2xhc3M9XCJwcm9tcHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbXB0LWJvZHlcIj5cbiAgICAgICAgICAgIDxwPiR7dGhpcy50ZXh0fTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNhbmNlbFwiIG5hbWU9XCJjYW5jZWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+YFxuXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5mb3JtU3RyaW5nKVxuICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtSWQpXG4gICAgICB0aGlzLmFkZEhhbmRsZXJzKClcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5mb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5lc2NhcGVIYW5kbGVyKVxuICAgIH1cbiAgfVxuXG5cbiAgbGV0IGxvZ2dlciA9IG5ldyBMb2dnZXJcblxuICBuZXcgUHJvbXB0KCdBcmUgeW91IHJlYWR5PycsIHJlc3VsdCA9PiB7XG4gICAgbG9nZ2VyLmxvZyhgUmVzdWx0IG9mIDEgcHJvbXB0IGlzOiA8dT4ke3Jlc3VsdH08L3U+YClcbiAgICBuZXcgUHJvbXB0KFwiUmVhbGx5P1wiLCByZXN1bHQgPT4ge1xuICAgICAgbG9nZ2VyLmxvZyhgUmVzdWx0IG9mIDIgcHJvbXB0IGlzOiA8dT4ke3Jlc3VsdH08L3U+YClcbiAgICB9KTtcbiAgfSk7XG5cblxuXG59XG50YXNrMSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
