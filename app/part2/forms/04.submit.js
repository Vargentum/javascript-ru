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
// task1()
//# sourceMappingURL=data:application/json;base64,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T0FBSyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUE7T0FDM0U7OztnQ0FFUztBQUNSLFlBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDOUMsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtPQUNqRTs7O1dBbkZHLE1BQU07OztBQXVGWixNQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBQSxDQUFBOztBQUV2QixNQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLE1BQU0sRUFBSTtBQUNyQyxVQUFNLENBQUMsR0FBRyxnQ0FBOEIsTUFBTSxVQUFPLENBQUE7QUFDckQsUUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQUEsTUFBTSxFQUFJO0FBQzlCLFlBQU0sQ0FBQyxHQUFHLGdDQUE4QixNQUFNLFVBQU8sQ0FBQTtLQUN0RCxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FJSjs7QUFBQSIsImZpbGUiOiJwYXJ0Mi9mb3Jtcy8wNC5zdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBzaG93UHJvbXB0KHRleHQsIGNhbGxiYWNrKSwg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0YTQvtGA0LzRgyDQtNC70Y8g0LLQstC+0LTQsCDRgSDRgdC+0L7QsdGJ0LXQvdC40LXQvCB0ZXh0INC4INC60L3QvtC/0LrQsNC80Lgg0J7Qmi/QntGC0LzQtdC90LAuXG5cbtCf0YDQuCDQvtGC0L/RgNCw0LLQutC1INGE0L7RgNC80YsgKE9LL9Cy0LLQvtC0INCyINGC0LXQutGB0YLQvtCy0L7QvCDQv9C+0LvQtSkg4oCTINC00L7Qu9C20L3QsCDQstGL0LfRi9Cy0LDRgtGM0YHRjyDRhNGD0L3QutGG0LjRjyBjYWxsYmFjayDRgdC+INC30L3QsNGH0LXQvdC40LXQvCDQv9C+0LvRjy5cbtCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINCe0YLQvNC10L3QsCDQuNC70Lgg0L3QsCDQutC70LDQstC40YjRgyBFc2Mg4oCTINC00L7Qu9C20L3QsCDQstGL0LfRi9Cy0LDRgtGM0YHRjyDRhNGD0L3QutGG0LjRjyBjYWxsYmFjayhudWxsKS4g0JrQu9Cw0LLQuNGI0LAgRXNjINC00L7Qu9C20L3QsCDQt9Cw0LrRgNGL0LLQsNGC0Ywg0YTQvtGA0LzRgyDQstGB0LXQs9C00LAsINC00LDQttC1INC10YHQu9C4INC/0L7Qu9C1INC00LvRjyDQstCy0L7QtNCwINGB0L7QvtCx0YnQtdC90LjRjyDQvdC1INCyINGE0L7QutGD0YHQtS5cbtCe0YHQvtCx0LXQvdC90L7RgdGC0Lgg0YDQtdCw0LvQuNC30LDRhtC40Lg6XG5cbtCk0L7RgNC80LAg0LTQvtC70LbQvdCwINC/0L7QutCw0LfRi9Cy0LDRgtGM0YHRjyDQsiDRhtC10L3RgtGA0LUg0L7QutC90LAgKNC4INC+0YHRgtCw0LLQsNGC0YzRgdGPINCyINGG0LXQvdGC0YDQtSDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INC10LPQviDRgNCw0LfQvNC10YDQvtCyLCDQsCDRgtCw0LrQttC1INC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAhKS5cbtCi0LXQutGB0YIg0LzQvtC20LXRgiDRgdC+0YHRgtC+0Y/RgtGMINC40Lcg0L3QtdGB0LrQvtC70YzQutC40YUg0YHRgtGA0L7Quiwg0LLQvtC30LzQvtC20LXQvSDQu9GO0LHQvtC5IEhUTUxcbtCf0YDQuCDQv9C+0LrQsNC30LUg0YTQvtGA0LzRiyDQvtGB0YLQsNC70YzQvdGL0LUg0Y3Qu9C10LzQtdC90YLRiyDRgdGC0YDQsNC90LjRhtGLINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQvdC10LvRjNC30Y8sINC90LUg0YDQsNCx0L7RgtCw0Y7RgiDQtNGA0YPQs9C40LUg0LrQvdC+0L/QutC4INC4INGCLtC/LCDRjdGC0L4g0L7QutC90L4g4oCTINC80L7QtNCw0LvRjNC90L7QtS5cbtCf0YDQuCDQv9C+0LrQsNC30LUg0YTQvtGA0LzRiyDigJMg0YHRgNCw0LfRgyDRhNC+0LrRg9GBINC90LAgSU5QVVQg0LTQu9GPINCy0LLQvtC00LAuXG7QndCw0LbQsNGC0LjRjyBUYWIvU2hpZnQrVGFiINC/0LXRgNC10LrQu9GO0YfQsNGO0YIg0LIg0YbQuNC60LvQtSDRgtC+0LvRjNC60L4g0L/QviDQv9C+0LvRj9C8INGE0L7RgNC80YssINC+0L3QuCDQvdC1INC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQv9C10YDQtdC60LvRjtGH0LjRgtGM0YHRjyDQvdCwINC00YDRg9Cz0LjQtSDRjdC70LXQvNC10L3RgtGLINGB0YLRgNCw0L3QuNGG0YsuXG5cblxuaHR0cHM6Ly9wbG5rci5jby9lZGl0L0xQSFI5UDN6czRkZlNydmRBYTdLP3A9cHJldmlld1xuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBjb25zdCBFU0NfS0VZQ09ERSA9IDI3XG5cbiAgY2xhc3MgTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMubG9nZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMubG9nZ2VyLmNsYXNzTGlzdC5hZGQoJ2xvZ2dlcicpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubG9nZ2VyKVxuICAgIH1cbiAgICBsb2coaHRtbCkge1xuICAgICAgdGhpcy5sb2dnZXIuaW5uZXJIVE1MICs9IGA8YnIgLz4gJHtodG1sfWBcbiAgICB9XG4gIH1cbiAgXG4gIGNsYXNzIFByb21wdCB7XG4gICAgY29uc3RydWN0b3IgKHRleHQsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgIHRoaXMudGV4dCA9IHRleHRcbiAgICAgIHRoaXMuZm9ybUlkID0gXy51bmlxdWVJZCgncHJvbXB0LScpXG4gICAgICB0aGlzLmVzY2FwZUhhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0gRVNDX0tFWUNPREUpIHJldHVyblxuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbCgpXG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaGFuZGxlQ2FuY2VsICgpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmNhbGxiYWNrKG51bGwpXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKSAvLyBubyBwYWdlIHJlbG9hZGluZ1xuICAgICAgbGV0IHZhbCA9IHRoaXMuZm9ybS5lbGVtZW50cy50ZXh0LnZhbHVlXG4gICAgICBpZiAodmFsLmxlbmd0aCA8IDEpIHJldHVyblxuICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgIHRoaXMuY2FsbGJhY2sodmFsKVxuICAgIH1cblxuICAgIG1ha2VGb2N1c0hlbHBlcklucHV0IChwb3MpIHtcbiAgICAgIGxldCBpbnB1dCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9jdXNIZWxwZXJcIiB0YWJJbmRleD1cIjBcIiBzdHlsZT1cIm9wYWNpdHk6IDBcIiAvPmBcbiAgICAgIHRoaXMuZm9ybS5pbnNlcnRBZGphY2VudEhUTUwocG9zLCBpbnB1dClcbiAgICB9XG5cbiAgICBtYWtlRm9jdXNDeWNsZShlKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSAkJCh0aGlzLmZvcm0uZWxlbWVudHMpXG4gICAgICBsZXQgaWR4ID0gZWxlbWVudHMuaW5kZXhPZihlLnRhcmdldClcbiAgICAgIGxldCBpc091dHNpZGVGb3JtID0gZWxlbSA9PiBlbGVtICYmIGVsZW0uZ2V0QXR0cmlidXRlKCduYW1lJykgPT09ICdmb2N1c0hlbHBlcidcblxuICAgICAgaWYgKGlzT3V0c2lkZUZvcm0oZS5yZWxhdGVkVGFyZ2V0KSAmJiBpZHggPT09IDApIHtcbiAgICAgICAgXy5sYXN0KGVsZW1lbnRzKS5mb2N1cygpXG4gICAgICB9IFxuICAgICAgZWxzZSBpZiAoaXNPdXRzaWRlRm9ybShlLnJlbGF0ZWRUYXJnZXQpICYmIGlkeCA9PT0gZWxlbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBfLmZpcnN0KGVsZW1lbnRzKS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkSGFuZGxlcnMoKSB7XG4gICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgICAgICB0aGlzLm1ha2VGb2N1c0N5Y2xlKGUpICAgIFxuICAgICAgfSwgdHJ1ZSlcbiAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoZSlcbiAgICAgIH0pXG4gICAgICB0aGlzLmZvcm0uZWxlbWVudHMuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsKClcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgdGhpcy5lc2NhcGVIYW5kbGVyKGUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLmZvcm1TdHJpbmcgPVxuICAgICAgICBgPGZvcm0gaWQ9XCIke3RoaXMuZm9ybUlkfVwiIGNsYXNzPVwicHJvbXB0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb21wdC1ib2R5XCI+XG4gICAgICAgICAgICA8cD4ke3RoaXMudGV4dH08L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGV4dFwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDYW5jZWxcIiBuYW1lPVwiY2FuY2VsXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPmBcblxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHRoaXMuZm9ybVN0cmluZylcbiAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZm9ybUlkKVxuICAgICAgXG4gICAgICB0aGlzLmFkZEhhbmRsZXJzKClcbiAgICAgIHRoaXMuZm9ybS5lbGVtZW50cy50ZXh0LmZvY3VzKCk7XG5cbiAgICAgIC8vbmVlZCBmb3IgY29ycmVjdCBibHVyIGhhbmRsaW5nLCBpZiB0YXJnZXQgaXMgZmlyc3QgLyBsYXN0IGF0IHBhZ2VcbiAgICAgIFsnYmVmb3JlQmVnaW4nLCAnYWZ0ZXJFbmQnXS5mb3JFYWNoKHBvcyA9PiB0aGlzLm1ha2VGb2N1c0hlbHBlcklucHV0KHBvcykpXG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZm9ybSlcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuZXNjYXBlSGFuZGxlcilcbiAgICB9XG4gIH1cblxuXG4gIGxldCBsb2dnZXIgPSBuZXcgTG9nZ2VyXG5cbiAgbmV3IFByb21wdCgnQXJlIHlvdSByZWFkeT8nLCByZXN1bHQgPT4ge1xuICAgIGxvZ2dlci5sb2coYFJlc3VsdCBvZiAxIHByb21wdCBpczogPHU+JHtyZXN1bHR9PC91PmApXG4gICAgbmV3IFByb21wdChcIlJlYWxseT9cIiwgcmVzdWx0ID0+IHtcbiAgICAgIGxvZ2dlci5sb2coYFJlc3VsdCBvZiAyIHByb21wdCBpczogPHU+JHtyZXN1bHR9PC91PmApXG4gICAgfSk7XG4gIH0pO1xuXG5cblxufVxuLy8gdGFzazEoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
