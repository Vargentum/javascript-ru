'use strict';

/*
  keydown / keyup: fired when key is down / up

    allow to get `event.keyCode` - unified code, represented for each key
      - layout agnostic
      - lettercase agnostic
      - 'Z'.keyCode === 'Z'.charPointAt(0)  (works for [a-zA-Z0-9])
  


  keypress: fired after keydown, if key generate a `symbol` (all keys except special, like F1, Ctrl ...)

    allow to get `event.charCode` - code for each pressed char
    crossbrowser function to get charcode, presented in `example1`


  
  You can prevent keyboard event to cancel user input



  all keyboard events support `modifier keys`: altKey / ctrlKey / shiftKey / metaKey
*/

function example1() {

  /*Crossbroser function to get correct key symbol*/

  // event.type должен быть keypress
  function getChar(event) {
    if (event.which == null) {
      // IE
      if (event.keyCode < 32) return null; // спец. символ
      return String.fromCharCode(event.keyCode);
    }

    if (event.which != 0 && event.charCode != 0) {
      // все кроме IE
      if (event.which < 32) return null; // спец. символ
      return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
  }
}
// example1()

/*Task 1:
При помощи событий клавиатуры сделайте так, чтобы в поле можно было вводить только цифры. 
*/

function task1() {

  var filterNonDigits = function filterNonDigits(e) {
    var key = e.keyCode;

    var isInside = function isInside(x, y) {
      return key >= x && key <= y;
    };

    var isLetter = function isLetter() {
      return isInside(65, 90);
    };
    var isAriphmetics = function isAriphmetics() {
      return isInside(186, 192);
    };
    var isPunctuation1 = function isPunctuation1() {
      return isInside(186, 192);
    };
    var isPunctuation2 = function isPunctuation2() {
      return isInside(219, 222);
    };
    var isSpecialMode = function isSpecialMode() {
      return e.metaKey || e.shiftKey || e.altKey || e.ctrlKey;
    };

    if (!isSpecialMode() && isLetter() || isAriphmetics() || isPunctuation1() || isPunctuation2()) {
      e.preventDefault();
    }
  };

  numbersOnly.addEventListener('keydown', filterNonDigits);
}
// task1()

/*Task 2
Создайте функцию runOnKeys(func, code1, code2, ... code_n), 
которая запускает func при одновременном нажатии клавиш со скан-кодами code1, code2, …, code_n.

Например, код ниже выведет alert при одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)

  algo: 
    args -> ['c']

*/

function task2() {

  var runOnKeys = function runOnKeys(func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pressedKeys = args.reduce(function (a, i) {
      a[i] = false;
      return a;
    }, {});

    var isPressedAll = function isPressedAll(keys) {
      for (var key in keys) {
        if (keys[key] === false) return false;
      }
      return true;
    };

    var setCurrentKeyStatus = function setCurrentKeyStatus(keys, status, e) {
      if (keys[e.keyCode] !== undefined) {
        keys[e.keyCode] = status;
      }
    };

    var handleDown = function handleDown(e) {
      setCurrentKeyStatus(pressedKeys, true, e);

      if (isPressedAll(pressedKeys)) {
        func.apply(null);
      };
    };

    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', setCurrentKeyStatus.bind(null, pressedKeys, false));
  };

  runOnKeys(function () {
    return console.log('BT!');
  }, "B".charCodeAt(0), "T".charCodeAt(0));
  runOnKeys(function () {
    return console.log('YN!');
  }, "Y".charCodeAt(0), "N".charCodeAt(0));
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA5LmtleWJvYXJkX2V2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxTQUFTLFFBQVEsR0FBSTs7Ozs7QUFLbkIsV0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ3RCLFFBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7O0FBQ3ZCLFVBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFBQSxBQUNwQyxhQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzFDOztBQUVELFFBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7O0FBQzNDLFVBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUM7QUFBQSxBQUNsQyxhQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUFDLEtBQ3pDOztBQUVELFdBQU8sSUFBSTtBQUFDLEdBQ2I7Q0FFRjs7Ozs7OztBQUFBLEFBVUQsU0FBUyxLQUFLLEdBQUk7O0FBRWhCLE1BQUksZUFBZSxHQUFHLFNBQWxCLGVBQWUsQ0FBSSxDQUFDLEVBQUs7QUFDM0IsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQTs7QUFFbkIsUUFBSSxRQUFRLEdBQUcsU0FBWCxRQUFRLENBQUksQ0FBQyxFQUFDLENBQUM7YUFBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQUEsQ0FBQTs7QUFFNUMsUUFBSSxRQUFRLEdBQVMsU0FBakIsUUFBUTthQUFlLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQUEsQ0FBQTtBQUMzQyxRQUFJLGFBQWEsR0FBSSxTQUFqQixhQUFhO2FBQVUsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7S0FBQSxDQUFBO0FBQzdDLFFBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWM7YUFBUyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztLQUFBLENBQUE7QUFDN0MsUUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBYzthQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQUEsQ0FBQTtBQUM3QyxRQUFJLGFBQWEsR0FBRyxTQUFoQixhQUFhO2FBQVMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE9BQU87S0FBQSxDQUFBOztBQUcxRSxRQUFJLENBQUMsYUFBYSxFQUFFLElBQUksUUFBUSxFQUFFLElBQUksYUFBYSxFQUFFLElBQUksY0FBYyxFQUFFLElBQUksY0FBYyxFQUFFLEVBQUU7QUFDN0YsT0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0tBQ25CO0dBQ0YsQ0FBQTs7QUFFRCxhQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0NBQ3pEOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBZ0JELFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBSSxJQUFJLEVBQWM7c0NBQVQsSUFBSTtBQUFKLFVBQUk7OztBQUU5QixRQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBSztBQUNyQyxPQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO0FBQ1osYUFBTyxDQUFDLENBQUE7S0FDVCxFQUFFLEVBQUUsQ0FBQyxDQUFBOztBQUVOLFFBQUksWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFJLElBQUksRUFBSztBQUMzQixXQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBQztBQUNsQixZQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUE7T0FDdEM7QUFDRCxhQUFPLElBQUksQ0FBQTtLQUNaLENBQUE7O0FBRUQsUUFBSSxtQkFBbUIsR0FBRyxTQUF0QixtQkFBbUIsQ0FBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBSztBQUM3QyxVQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFBO09BQ3pCO0tBQ0YsQ0FBQTs7QUFFRCxRQUFJLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBRyxDQUFDLEVBQUk7QUFDcEIseUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTs7QUFFekMsVUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDN0IsWUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtPQUNqQixDQUFDO0tBQ0gsQ0FBQTs7QUFFRCxZQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ2hELFlBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtHQUN2RixDQUFBOztBQUVELFdBQVMsQ0FBRTtXQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0dBQUEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN6RSxXQUFTLENBQUU7V0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztHQUFBLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FFMUU7QUFDRCxLQUFLLEVBQUUsQ0FBQSIsImZpbGUiOiJwYXJ0Mi9ldmVudHMvMDkua2V5Ym9hcmRfZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAga2V5ZG93biAvIGtleXVwOiBmaXJlZCB3aGVuIGtleSBpcyBkb3duIC8gdXBcblxuICAgIGFsbG93IHRvIGdldCBgZXZlbnQua2V5Q29kZWAgLSB1bmlmaWVkIGNvZGUsIHJlcHJlc2VudGVkIGZvciBlYWNoIGtleVxuICAgICAgLSBsYXlvdXQgYWdub3N0aWNcbiAgICAgIC0gbGV0dGVyY2FzZSBhZ25vc3RpY1xuICAgICAgLSAnWicua2V5Q29kZSA9PT0gJ1onLmNoYXJQb2ludEF0KDApICAod29ya3MgZm9yIFthLXpBLVowLTldKVxuICBcblxuXG4gIGtleXByZXNzOiBmaXJlZCBhZnRlciBrZXlkb3duLCBpZiBrZXkgZ2VuZXJhdGUgYSBgc3ltYm9sYCAoYWxsIGtleXMgZXhjZXB0IHNwZWNpYWwsIGxpa2UgRjEsIEN0cmwgLi4uKVxuXG4gICAgYWxsb3cgdG8gZ2V0IGBldmVudC5jaGFyQ29kZWAgLSBjb2RlIGZvciBlYWNoIHByZXNzZWQgY2hhclxuICAgIGNyb3NzYnJvd3NlciBmdW5jdGlvbiB0byBnZXQgY2hhcmNvZGUsIHByZXNlbnRlZCBpbiBgZXhhbXBsZTFgXG5cblxuICBcbiAgWW91IGNhbiBwcmV2ZW50IGtleWJvYXJkIGV2ZW50IHRvIGNhbmNlbCB1c2VyIGlucHV0XG5cblxuXG4gIGFsbCBrZXlib2FyZCBldmVudHMgc3VwcG9ydCBgbW9kaWZpZXIga2V5c2A6IGFsdEtleSAvIGN0cmxLZXkgLyBzaGlmdEtleSAvIG1ldGFLZXlcbiovXG5cblxuZnVuY3Rpb24gZXhhbXBsZTEgKCkge1xuICBcbiAgLypDcm9zc2Jyb3NlciBmdW5jdGlvbiB0byBnZXQgY29ycmVjdCBrZXkgc3ltYm9sKi9cblxuICAvLyBldmVudC50eXBlINC00L7Qu9C20LXQvSDQsdGL0YLRjCBrZXlwcmVzc1xuICBmdW5jdGlvbiBnZXRDaGFyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LndoaWNoID09IG51bGwpIHsgLy8gSUVcbiAgICAgIGlmIChldmVudC5rZXlDb2RlIDwgMzIpIHJldHVybiBudWxsOyAvLyDRgdC/0LXRhi4g0YHQuNC80LLQvtC7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKVxuICAgIH1cblxuICAgIGlmIChldmVudC53aGljaCAhPSAwICYmIGV2ZW50LmNoYXJDb2RlICE9IDApIHsgLy8g0LLRgdC1INC60YDQvtC80LUgSUVcbiAgICAgIGlmIChldmVudC53aGljaCA8IDMyKSByZXR1cm4gbnVsbDsgLy8g0YHQv9C10YYuINGB0LjQvNCy0L7Qu1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpOyAvLyDQvtGB0YLQsNC70YzQvdGL0LVcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDsgLy8g0YHQv9C10YYuINGB0LjQvNCy0L7Qu1xuICB9XG5cbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cblxuLypUYXNrIDE6XG7Qn9GA0Lgg0L/QvtC80L7RidC4INGB0L7QsdGL0YLQuNC5INC60LvQsNCy0LjQsNGC0YPRgNGLINGB0LTQtdC70LDQudGC0LUg0YLQsNC6LCDRh9GC0L7QsdGLINCyINC/0L7Qu9C1INC80L7QttC90L4g0LHRi9C70L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INGG0LjRhNGA0YsuIFxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBcbiAgbGV0IGZpbHRlck5vbkRpZ2l0cyA9IChlKSA9PiB7XG4gICAgbGV0IGtleSA9IGUua2V5Q29kZVxuXG4gICAgbGV0IGlzSW5zaWRlID0gKHgseSkgPT4ga2V5ID49IHggJiYga2V5IDw9IHlcblxuICAgIGxldCBpc0xldHRlciAgICAgICA9ICgpID0+IGlzSW5zaWRlKDY1LCA5MClcbiAgICBsZXQgaXNBcmlwaG1ldGljcyAgPSAoKSA9PiBpc0luc2lkZSgxODYsIDE5MilcbiAgICBsZXQgaXNQdW5jdHVhdGlvbjEgPSAoKSA9PiBpc0luc2lkZSgxODYsIDE5MilcbiAgICBsZXQgaXNQdW5jdHVhdGlvbjIgPSAoKSA9PiBpc0luc2lkZSgyMTksIDIyMilcbiAgICBsZXQgaXNTcGVjaWFsTW9kZSA9ICgpID0+IGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleVxuXG5cbiAgICBpZiAoIWlzU3BlY2lhbE1vZGUoKSAmJiBpc0xldHRlcigpIHx8IGlzQXJpcGhtZXRpY3MoKSB8fCBpc1B1bmN0dWF0aW9uMSgpIHx8IGlzUHVuY3R1YXRpb24yKCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIG51bWJlcnNPbmx5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmaWx0ZXJOb25EaWdpdHMpXG59XG4vLyB0YXNrMSgpXG5cblxuXG4vKlRhc2sgMlxu0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBydW5PbktleXMoZnVuYywgY29kZTEsIGNvZGUyLCAuLi4gY29kZV9uKSwgXG7QutC+0YLQvtGA0LDRjyDQt9Cw0L/Rg9GB0LrQsNC10YIgZnVuYyDQv9GA0Lgg0L7QtNC90L7QstGA0LXQvNC10L3QvdC+0Lwg0L3QsNC20LDRgtC40Lgg0LrQu9Cw0LLQuNGIINGB0L4g0YHQutCw0L0t0LrQvtC00LDQvNC4IGNvZGUxLCBjb2RlMiwg4oCmLCBjb2RlX24uXG5cbtCd0LDQv9GA0LjQvNC10YAsINC60L7QtCDQvdC40LbQtSDQstGL0LLQtdC00LXRgiBhbGVydCDQv9GA0Lgg0L7QtNC90L7QstGA0LXQvNC10L3QvdC+0Lwg0L3QsNC20LDRgtC40Lgg0LrQu9Cw0LLQuNGIIFwiUVwiINC4IFwiV1wiICjQsiDQu9GO0LHQvtC8INGA0LXQs9C40YHRgtGA0LUsINCyINC70Y7QsdC+0Lkg0YDQsNGB0LrQu9Cw0LTQutC1KVxuXG4gIGFsZ286IFxuICAgIGFyZ3MgLT4gWydjJ11cblxuKi9cblxuZnVuY3Rpb24gdGFzazIgKCkge1xuXG4gIGNvbnN0IHJ1bk9uS2V5cyA9IChmdW5jLCAuLi5hcmdzKSA9PiB7XG5cbiAgICBsZXQgcHJlc3NlZEtleXMgPSBhcmdzLnJlZHVjZSgoYSxpKSA9PiB7XG4gICAgICBhW2ldID0gZmFsc2VcbiAgICAgIHJldHVybiBhXG4gICAgfSwge30pXG5cbiAgICBsZXQgaXNQcmVzc2VkQWxsID0gKGtleXMpID0+IHtcbiAgICAgIGZvcihsZXQga2V5IGluIGtleXMpe1xuICAgICAgICBpZiAoa2V5c1trZXldID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBzZXRDdXJyZW50S2V5U3RhdHVzID0gKGtleXMsIHN0YXR1cywgZSkgPT4ge1xuICAgICAgaWYgKGtleXNbZS5rZXlDb2RlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleXNbZS5rZXlDb2RlXSA9IHN0YXR1c1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBoYW5kbGVEb3duID0gZSA9PiB7XG4gICAgICBzZXRDdXJyZW50S2V5U3RhdHVzKHByZXNzZWRLZXlzLCB0cnVlLCBlKVxuXG4gICAgICBpZiAoaXNQcmVzc2VkQWxsKHByZXNzZWRLZXlzKSkge1xuICAgICAgICBmdW5jLmFwcGx5KG51bGwpICBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZURvd24pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZXRDdXJyZW50S2V5U3RhdHVzLmJpbmQobnVsbCwgcHJlc3NlZEtleXMsIGZhbHNlKSlcbiAgfVxuXG4gIHJ1bk9uS2V5cyggKCkgPT5jb25zb2xlLmxvZygnQlQhJyksIFwiQlwiLmNoYXJDb2RlQXQoMCksIFwiVFwiLmNoYXJDb2RlQXQoMCkpXG4gIHJ1bk9uS2V5cyggKCkgPT5jb25zb2xlLmxvZygnWU4hJyksIFwiWVwiLmNoYXJDb2RlQXQoMCksIFwiTlwiLmNoYXJDb2RlQXQoMCkpXG5cbn1cbnRhc2syKClcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
