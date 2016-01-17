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
      key: 'makeFocusHelperInput',
      value: function makeFocusHelperInput(pos) {
        var input = '<input type="text" name="focusHelper" />';
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
//# sourceMappingURL=data:application/json;base64,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QUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzlDLGdCQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7T0FDakU7OztXQWpGRyxNQUFNOzs7QUFxRlosTUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUEsQ0FBQTs7QUFFdkIsTUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDckMsVUFBTSxDQUFDLEdBQUcsZ0NBQThCLE1BQU0sVUFBTyxDQUFBO0FBQ3JELFFBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFBLE1BQU0sRUFBSTtBQUM5QixZQUFNLENBQUMsR0FBRyxnQ0FBOEIsTUFBTSxVQUFPLENBQUE7S0FDdEQsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBSUo7QUFDRCxLQUFLLEVBQUUsQ0FBQSIsImZpbGUiOiJwYXJ0Mi9mb3Jtcy8wNC5zdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBzaG93UHJvbXB0KHRleHQsIGNhbGxiYWNrKSwg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0YTQvtGA0LzRgyDQtNC70Y8g0LLQstC+0LTQsCDRgSDRgdC+0L7QsdGJ0LXQvdC40LXQvCB0ZXh0INC4INC60L3QvtC/0LrQsNC80Lgg0J7Qmi/QntGC0LzQtdC90LAuXG5cbtCf0YDQuCDQvtGC0L/RgNCw0LLQutC1INGE0L7RgNC80YsgKE9LL9Cy0LLQvtC0INCyINGC0LXQutGB0YLQvtCy0L7QvCDQv9C+0LvQtSkg4oCTINC00L7Qu9C20L3QsCDQstGL0LfRi9Cy0LDRgtGM0YHRjyDRhNGD0L3QutGG0LjRjyBjYWxsYmFjayDRgdC+INC30L3QsNGH0LXQvdC40LXQvCDQv9C+0LvRjy5cbtCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINCe0YLQvNC10L3QsCDQuNC70Lgg0L3QsCDQutC70LDQstC40YjRgyBFc2Mg4oCTINC00L7Qu9C20L3QsCDQstGL0LfRi9Cy0LDRgtGM0YHRjyDRhNGD0L3QutGG0LjRjyBjYWxsYmFjayhudWxsKS4g0JrQu9Cw0LLQuNGI0LAgRXNjINC00L7Qu9C20L3QsCDQt9Cw0LrRgNGL0LLQsNGC0Ywg0YTQvtGA0LzRgyDQstGB0LXQs9C00LAsINC00LDQttC1INC10YHQu9C4INC/0L7Qu9C1INC00LvRjyDQstCy0L7QtNCwINGB0L7QvtCx0YnQtdC90LjRjyDQvdC1INCyINGE0L7QutGD0YHQtS5cbtCe0YHQvtCx0LXQvdC90L7RgdGC0Lgg0YDQtdCw0LvQuNC30LDRhtC40Lg6XG5cbtCk0L7RgNC80LAg0LTQvtC70LbQvdCwINC/0L7QutCw0LfRi9Cy0LDRgtGM0YHRjyDQsiDRhtC10L3RgtGA0LUg0L7QutC90LAgKNC4INC+0YHRgtCw0LLQsNGC0YzRgdGPINCyINGG0LXQvdGC0YDQtSDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INC10LPQviDRgNCw0LfQvNC10YDQvtCyLCDQsCDRgtCw0LrQttC1INC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAhKS5cbtCi0LXQutGB0YIg0LzQvtC20LXRgiDRgdC+0YHRgtC+0Y/RgtGMINC40Lcg0L3QtdGB0LrQvtC70YzQutC40YUg0YHRgtGA0L7Quiwg0LLQvtC30LzQvtC20LXQvSDQu9GO0LHQvtC5IEhUTUxcbtCf0YDQuCDQv9C+0LrQsNC30LUg0YTQvtGA0LzRiyDQvtGB0YLQsNC70YzQvdGL0LUg0Y3Qu9C10LzQtdC90YLRiyDRgdGC0YDQsNC90LjRhtGLINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvdC10LvRjNC30Y8sINC90LUg0YDQsNCx0L7RgtCw0Y7RgiDQtNGA0YPQs9C40LUg0LrQvdC+0L/QutC4INC4INGCLtC/LCDRjdGC0L4g0L7QutC90L4g4oCTINC80L7QtNCw0LvRjNC90L7QtS5cbtCf0YDQuCDQv9C+0LrQsNC30LUg0YTQvtGA0LzRiyDigJMg0YHRgNCw0LfRgyDRhNC+0LrRg9GBINC90LAgSU5QVVQg0LTQu9GPINCy0LLQvtC00LAuXG7QndCw0LbQsNGC0LjRjyBUYWIvU2hpZnQrVGFiINC/0LXRgNC10LrQu9GO0YfQsNGO0YIg0LIg0YbQuNC60LvQtSDRgtC+0LvRjNC60L4g0L/QviDQv9C+0LvRj9C8INGE0L7RgNC80YssINC+0L3QuCDQvdC1INC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQv9C10YDQtdC60LvRjtGH0LjRgtGM0YHRjyDQvdCwINC00YDRg9Cz0LjQtSDRjdC70LXQvNC10L3RgtGLINGB0YLRgNCw0L3QuNGG0YsuXG5cblxuaHR0cHM6Ly9wbG5rci5jby9lZGl0L0xQSFI5UDN6czRkZlNydmRBYTdLP3A9cHJldmlld1xuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBjb25zdCBFU0NfS0VZQ09ERSA9IDI3XG5cbiAgY2xhc3MgTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMubG9nZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMubG9nZ2VyLmNsYXNzTGlzdC5hZGQoJ2xvZ2dlcicpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubG9nZ2VyKVxuICAgIH1cbiAgICBsb2coaHRtbCkge1xuICAgICAgdGhpcy5sb2dnZXIuaW5uZXJIVE1MICs9IGA8YnIgLz4gJHtodG1sfWBcbiAgICB9XG4gIH1cbiAgXG4gIGNsYXNzIFByb21wdCB7XG4gICAgY29uc3RydWN0b3IgKHRleHQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgIHRoaXMudGV4dCA9IHRleHRcbiAgICAgIHRoaXMuZm9ybUlkID0gXy51bmlxdWVJZCgncHJvbXB0LScpXG4gICAgICB0aGlzLmVzY2FwZUhhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0gRVNDX0tFWUNPREUpIHJldHVyblxuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbCgpXG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmNhbGxiYWNrKG51bGwpXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZm9ybS5lbGVtZW50cy50ZXh0LnZhbHVlKVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIC8vIG5vIHBhZ2UgcmVsb2FkaW5nXG4gICAgfVxuXG4gICAgbWFrZUZvY3VzSGVscGVySW5wdXQgKHBvcykge1xuICAgICAgbGV0IGlucHV0ID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb2N1c0hlbHBlclwiIC8+YFxuICAgICAgdGhpcy5mb3JtLmluc2VydEFkamFjZW50SFRNTChwb3MsIGlucHV0KVxuICAgIH1cblxuICAgIG1ha2VGb2N1c0N5Y2xlKGUpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9ICQkKHRoaXMuZm9ybS5lbGVtZW50cylcbiAgICAgIGxldCBpZHggPSBlbGVtZW50cy5pbmRleE9mKGUudGFyZ2V0KVxuICAgICAgbGV0IGlzT3V0c2lkZUZvcm0gPSBlbGVtID0+IGVsZW0gJiYgZWxlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gJ2ZvY3VzSGVscGVyJ1xuXG4gICAgICBpZiAoaXNPdXRzaWRlRm9ybShlLnJlbGF0ZWRUYXJnZXQpICYmIGlkeCA9PT0gMCkge1xuICAgICAgICBfLmxhc3QoZWxlbWVudHMpLmZvY3VzKClcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmIChpc091dHNpZGVGb3JtKGUucmVsYXRlZFRhcmdldCkgJiYgaWR4ID09PSBlbGVtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIF8uZmlyc3QoZWxlbWVudHMpLmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIYW5kbGVycygpIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB7XG4gICAgICAgIHRoaXMubWFrZUZvY3VzQ3ljbGUoZSkgICAgXG4gICAgICB9LCB0cnVlKVxuICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChlKVxuICAgICAgfSlcbiAgICAgIHRoaXMuZm9ybS5lbGVtZW50cy5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICB0aGlzLmVzY2FwZUhhbmRsZXIoZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuZm9ybVN0cmluZyA9XG4gICAgICAgIGA8Zm9ybSBpZD1cIiR7dGhpcy5mb3JtSWR9XCIgY2xhc3M9XCJwcm9tcHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbXB0LWJvZHlcIj5cbiAgICAgICAgICAgIDxwPiR7dGhpcy50ZXh0fTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNhbmNlbFwiIG5hbWU9XCJjYW5jZWxcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+YFxuXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5mb3JtU3RyaW5nKVxuICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtSWQpXG4gICAgICBcbiAgICAgIHRoaXMuYWRkSGFuZGxlcnMoKVxuICAgICAgdGhpcy5mb3JtLmVsZW1lbnRzLnRleHQuZm9jdXMoKTtcblxuICAgICAgLy9uZWVkIGZvciBjb3JyZWN0IGJsdXIgaGFuZGxpbmcsIGlmIHRhcmdldCBpcyBmaXJzdCAvIGxhc3QgYXQgcGFnZVxuICAgICAgWydiZWZvcmVCZWdpbicsICdhZnRlckVuZCddLmZvckVhY2gocG9zID0+IHRoaXMubWFrZUZvY3VzSGVscGVySW5wdXQocG9zKSlcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5mb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5lc2NhcGVIYW5kbGVyKVxuICAgIH1cbiAgfVxuXG5cbiAgbGV0IGxvZ2dlciA9IG5ldyBMb2dnZXJcblxuICBuZXcgUHJvbXB0KCdBcmUgeW91IHJlYWR5PycsIHJlc3VsdCA9PiB7XG4gICAgbG9nZ2VyLmxvZyhgUmVzdWx0IG9mIDEgcHJvbXB0IGlzOiA8dT4ke3Jlc3VsdH08L3U+YClcbiAgICBuZXcgUHJvbXB0KFwiUmVhbGx5P1wiLCByZXN1bHQgPT4ge1xuICAgICAgbG9nZ2VyLmxvZyhgUmVzdWx0IG9mIDIgcHJvbXB0IGlzOiA8dT4ke3Jlc3VsdH08L3U+YClcbiAgICB9KTtcbiAgfSk7XG5cblxuXG59XG50YXNrMSgpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
