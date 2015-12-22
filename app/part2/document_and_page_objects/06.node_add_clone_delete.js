'use strict';

/*

Creation:
  - document.createElement( tagName )
  - docuement.createNodeText( text )


Addition:
  - parent.appendChild( elem )
  - parent.insertBefore( elem [,newElem]) 
    - insert `newElem` as child of `parent` before `newElem`
    - if no newElem - works as `.appendChild`

Cloning:
  - elem.cloneElement(isDeepCopy)
    - isDeepCopy bool, 
      if true - deep copy with attributes and children will be created

Removing
  - parent.removeChild( elem )
  - parent.replaceChild( newElem, elem )
  - elem.remove()
    - IE11- (polyfills available)
    - no parent needs
*/

/*Задача 1
Одинаковый ли результат дадут эти скрипты?

Первый:
elem.appendChild(document.createTextNode(text));

Второй:
elem.innerHTML = text;


Ответ: все зависит от переменной `text`. если в ней будет html код, 
то в случае createTextNode он будет выведен в строковом представлении,
а в случае innerHTML распарсен и добавлен как теги.

*/

/*Задача 2:

Напишите полифилл для метода remove для старых браузеров.

Вызов elem.remove():

Если у elem нет родителя — ничего не делает.
Если есть — удаляет элемент из родителя.

*/

function task2() {

  if (Element.prototype.remove) return;

  Element.prototype.remove = function () {
    if (!this.parentElement) return;
    this.parentElement.removeChild(this);
    return this;
  };
}

/*Задача 3:

Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.
*/
function task3() {
  function insertAfter(elem, refElem) {
    var parent = elem.parentEement;
    var next = refElem.nextElementSibling;
    if (!parent) return;
    parent.insertBefore(elem, next);
    return elem;
  }
}

/*Задача 4:
Напишите функцию removeChildren, которая удаляет всех потомков элемента.
*/
function task4() {
  function removeChildren(elem) {
    var removed = [];
    while (elem.children.length > 0) {
      removed.push(elem.removeChild(elem.children[0]));
    }
    return removed;
  }

  console.log(removeChildren(table));
  console.log(removeChildren(ol));
}
// task4()

/*
Tip:
  use lastChild of firstChild:
    - to shorten the code
    - to remove textNodes

  use lastElementChild / firstElementChild

  while(elem.firstChild){
    removed.push(elem.removeChild(elem.firstChild))
  }

Another approach: eraze all `innerHTML` content
*/

/*Задача 5
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к UL.
Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.*/

function task5() {
  var list = document.createElement('ul');
  document.body.appendChild(list);
  var usrInput = true;
  var i = 1;
  while (usrInput) {
    usrInput = window.prompt("Add item to list?", 'item ' + i);
    if (!usrInput) return;
    i++;
    var item = document.createElement('li');
    item.textContent = usrInput;
    list.appendChild(item);
  }
}
// task5()

/*Задача 6:
*/

function task6() {
  var data = {
    "Рыбы": {
      "Форель": {},
      "Щука": {}
    },

    "Деревья": {
      "Хвойные": {
        "Лиственница": {},
        "Ель": {}
      },
      "Цветковые": {
        "Берёза": {},
        "Тополь": {}
      }
    }
  };

  /*
  
  
  check object for empty
  create list
  for each key create item
  add key as text
  
  create children with reqursive
  if children exsists - add them
  
  add item to list
  
  
  */

  function createDomTree(obj) {
    if (Object.keys(obj).length === 0) return;

    var list = document.createElement('ul');
    for (var key in obj) {
      var item = document.createElement('li');
      item.innerHTML = key;

      var subList = createDomTree(obj[key]);
      if (subList) item.appendChild(subList);

      list.appendChild(item);
    }
    return list;
  }

  document.body.appendChild(createDomTree(data));

  /*
   iterate through keys
  generate `li` with text (key)
  check if key contains object
    if true: call recursive
    add result of reqursion as list
  
  */

  function createDomTree1(obj) {
    var items = '';

    for (var key in obj) {
      if (Object.keys(obj[key]).length === 0) items += '<li>' + key + '</li>';else items += '<li>' + key + ' ' + createDomTree1(obj[key]) + '</li>';
    };
    return items ? '<ul>' + items + '</ul>' : '';
  }

  document.body.innerHTML = createDomTree1(data);
}
// task6()

/*
Создать календарь в виде таблицы
Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).

Календарь должен быть таблицей, где каждый день — это TD. 
У таблицы должен быть заголовок с названиями дней недели, каждый день — TH.

Синтаксис: createCalendar(id, year, month).
Такой вызов должен генерировать текст для календаря месяца month в году year,
а затем помещать его внутрь элемента с указанным id.

Например: createCalendar("cal", 2012, 9) сгенерирует в <div id='cal'></div> следующий календарь:
*/

/*while g.getMonth = 0*/

function task7() {

  var days = 'su, mo, tu, we, th, fr, sa';

  function createCalendar(id, year, month) {

    var mkDays = function mkDays(dd) {
      var days = dd.split(',').map(function (d) {
        return '<th>' + d.trim() + '</th>';
      }).join('');
      return '<tr>' + days + '</tr>';
    };

    var mkNumbers = function mkNumbers(year, month) {
      var days = [];
      var i = 1;
      while (true) {
        var day = new Date(year, month, i);
        if (day.getMonth() !== month) break;
        days.push(day);
        i++;
      }

      var firstRow = '';

      while (condition) {
        statement;
      }
    };

    /*Problem:
       break days array into rows (7 items)
      sync days with day captions
      */

    return '<table id=' + id + '>\n              ' + mkDays(days) + '\n              ' + mkNumbers(year, month) + '\n            </table>';
  }

  createCalendar('test', 1989, 1);
}
task7();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2Lm5vZGVfYWRkX2Nsb25lX2RlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU07O0FBRXBDLFNBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDckMsUUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTTtBQUMvQixRQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNwQyxXQUFPLElBQUksQ0FBQTtHQUNaLENBQUE7Q0FDRjs7Ozs7O0FBQUEsQUFPRCxTQUFTLEtBQUssR0FBSTtBQUNoQixXQUFTLFdBQVcsQ0FBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ25DLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7QUFDOUIsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO0FBQ3JDLFFBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTTtBQUNsQixVQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMvQixXQUFPLElBQUksQ0FBQTtHQUNaO0NBQ0Y7Ozs7O0FBQUEsQUFNRCxTQUFTLEtBQUssR0FBSTtBQUNoQixXQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUU7QUFDNUIsUUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO0FBQ2hCLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQzdCLGFBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNqRDtBQUNELFdBQU8sT0FBTyxDQUFBO0dB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Q2xCOztBQUdELGdCQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtDQUNoQztBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2RvY3VtZW50X2FuZF9wYWdlX29iamVjdHMvMDYubm9kZV9hZGRfY2xvbmVfZGVsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuQ3JlYXRpb246XG4gIC0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGFnTmFtZSApXG4gIC0gZG9jdWVtZW50LmNyZWF0ZU5vZGVUZXh0KCB0ZXh0IClcblxuXG5BZGRpdGlvbjpcbiAgLSBwYXJlbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKVxuICAtIHBhcmVudC5pbnNlcnRCZWZvcmUoIGVsZW0gWyxuZXdFbGVtXSkgXG4gICAgLSBpbnNlcnQgYG5ld0VsZW1gIGFzIGNoaWxkIG9mIGBwYXJlbnRgIGJlZm9yZSBgbmV3RWxlbWBcbiAgICAtIGlmIG5vIG5ld0VsZW0gLSB3b3JrcyBhcyBgLmFwcGVuZENoaWxkYFxuXG5DbG9uaW5nOlxuICAtIGVsZW0uY2xvbmVFbGVtZW50KGlzRGVlcENvcHkpXG4gICAgLSBpc0RlZXBDb3B5IGJvb2wsIFxuICAgICAgaWYgdHJ1ZSAtIGRlZXAgY29weSB3aXRoIGF0dHJpYnV0ZXMgYW5kIGNoaWxkcmVuIHdpbGwgYmUgY3JlYXRlZFxuXG5SZW1vdmluZ1xuICAtIHBhcmVudC5yZW1vdmVDaGlsZCggZWxlbSApXG4gIC0gcGFyZW50LnJlcGxhY2VDaGlsZCggbmV3RWxlbSwgZWxlbSApXG4gIC0gZWxlbS5yZW1vdmUoKVxuICAgIC0gSUUxMS0gKHBvbHlmaWxscyBhdmFpbGFibGUpXG4gICAgLSBubyBwYXJlbnQgbmVlZHNcbiovXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAxXG7QntC00LjQvdCw0LrQvtCy0YvQuSDQu9C4INGA0LXQt9GD0LvRjNGC0LDRgiDQtNCw0LTRg9GCINGN0YLQuCDRgdC60YDQuNC/0YLRiz9cblxu0J/QtdGA0LLRi9C5OlxuZWxlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG5cbtCS0YLQvtGA0L7QuTpcbmVsZW0uaW5uZXJIVE1MID0gdGV4dDtcblxuXG7QntGC0LLQtdGCOiDQstGB0LUg0LfQsNCy0LjRgdC40YIg0L7RgiDQv9C10YDQtdC80LXQvdC90L7QuSBgdGV4dGAuINC10YHQu9C4INCyINC90LXQuSDQsdGD0LTQtdGCIGh0bWwg0LrQvtC0LCBcbtGC0L4g0LIg0YHQu9GD0YfQsNC1IGNyZWF0ZVRleHROb2RlINC+0L0g0LHRg9C00LXRgiDQstGL0LLQtdC00LXQvSDQsiDRgdGC0YDQvtC60L7QstC+0Lwg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LgsXG7QsCDQsiDRgdC70YPRh9Cw0LUgaW5uZXJIVE1MINGA0LDRgdC/0LDRgNGB0LXQvSDQuCDQtNC+0LHQsNCy0LvQtdC9INC60LDQuiDRgtC10LPQuC5cblxuKi9cblxuXG5cblxuLyrQl9Cw0LTQsNGH0LAgMjpcblxu0J3QsNC/0LjRiNC40YLQtSDQv9C+0LvQuNGE0LjQu9C7INC00LvRjyDQvNC10YLQvtC00LAgcmVtb3ZlINC00LvRjyDRgdGC0LDRgNGL0YUg0LHRgNCw0YPQt9C10YDQvtCyLlxuXG7QktGL0LfQvtCyIGVsZW0ucmVtb3ZlKCk6XG5cbtCV0YHQu9C4INGDIGVsZW0g0L3QtdGCINGA0L7QtNC40YLQtdC70Y8g4oCUINC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXRgi5cbtCV0YHQu9C4INC10YHRgtGMIOKAlCDRg9C00LDQu9GP0LXRgiDRjdC70LXQvNC10L3RgiDQuNC3INGA0L7QtNC40YLQtdC70Y8uXG5cbiovXG5cbmZ1bmN0aW9uIHRhc2syICgpIHtcbiAgXG4gIGlmIChFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUpIHJldHVybiBcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHJldHVyblxuICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzKSAgICBcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cblxuLyrQl9Cw0LTQsNGH0LAgMzpcblxu0J3QsNC/0LjRiNC40YLQtSDRhNGD0L3QutGG0LjRjiBpbnNlcnRBZnRlcihlbGVtLCByZWZFbGVtKSwg0LrQvtGC0L7RgNCw0Y8g0LTQvtCx0LDQstC40YIgZWxlbSDQv9C+0YHQu9C1INGD0LfQu9CwIHJlZkVsZW0uXG4qL1xuZnVuY3Rpb24gdGFzazMgKCkge1xuICBmdW5jdGlvbiBpbnNlcnRBZnRlciAoZWxlbSwgcmVmRWxlbSkge1xuICAgIGxldCBwYXJlbnQgPSBlbGVtLnBhcmVudEVlbWVudFxuICAgIGxldCBuZXh0ID0gcmVmRWxlbS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICBpZighcGFyZW50KSByZXR1cm5cbiAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW0sIG5leHQpXG4gICAgcmV0dXJuIGVsZW1cbiAgfVxufVxuXG5cbi8q0JfQsNC00LDRh9CwIDQ6XG7QndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOIHJlbW92ZUNoaWxkcmVuLCDQutC+0YLQvtGA0LDRjyDRg9C00LDQu9GP0LXRgiDQstGB0LXRhSDQv9C+0YLQvtC80LrQvtCyINGN0LvQtdC80LXQvdGC0LAuXG4qL1xuZnVuY3Rpb24gdGFzazQgKCkge1xuICBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihlbGVtKSB7XG4gICAgbGV0IHJlbW92ZWQgPSBbXVxuICAgIHdoaWxlKGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG4gICAgICByZW1vdmVkLnB1c2goZWxlbS5yZW1vdmVDaGlsZChlbGVtLmNoaWxkcmVuWzBdKSlcbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZWRcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHJlbW92ZUNoaWxkcmVuKHRhYmxlKSlcbiAgY29uc29sZS5sb2cocmVtb3ZlQ2hpbGRyZW4ob2wpKVxufVxuLy8gdGFzazQoKVxuXG4vKlxuVGlwOlxuICB1c2UgbGFzdENoaWxkIG9mIGZpcnN0Q2hpbGQ6XG4gICAgLSB0byBzaG9ydGVuIHRoZSBjb2RlXG4gICAgLSB0byByZW1vdmUgdGV4dE5vZGVzXG5cbiAgdXNlIGxhc3RFbGVtZW50Q2hpbGQgLyBmaXJzdEVsZW1lbnRDaGlsZFxuXG4gIHdoaWxlKGVsZW0uZmlyc3RDaGlsZCl7XG4gICAgcmVtb3ZlZC5wdXNoKGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5maXJzdENoaWxkKSlcbiAgfVxuXG5Bbm90aGVyIGFwcHJvYWNoOiBlcmF6ZSBhbGwgYGlubmVySFRNTGAgY29udGVudFxuKi9cblxuXG4vKtCX0LDQtNCw0YfQsCA1XG7QndCw0L/QuNGI0LjRgtC1INC40L3RgtC10YDRhNC10LnRgSDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgdC/0LjRgdC60LAuXG5cbtCU0LvRjyDQutCw0LbQtNC+0LPQviDQv9GD0L3QutGC0LA6XG5cbtCX0LDQv9GA0LDRiNC40LLQsNC50YLQtSDRgdC+0LTQtdGA0LbQuNC80L7QtSDQv9GD0L3QutGC0LAg0YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGBINC/0L7QvNC+0YnRjNGOIHByb21wdC5cbtCh0L7Qt9C00LDQstCw0LnRgtC1INC/0YPQvdC60YIg0Lgg0LTQvtCx0LDQstC70Y/QudGC0LUg0LXQs9C+INC6IFVMLlxu0J/RgNC+0YbQtdGB0YEg0L/RgNC10YDRi9Cy0LDQtdGC0YHRjywg0LrQvtCz0LTQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QsNC20LjQvNCw0LXRgiBFU0Mg0LjQu9C4INCy0LLQvtC00LjRgiDQv9GD0YHRgtGD0Y4g0YHRgtGA0L7QutGDLiovXG5cbmZ1bmN0aW9uIHRhc2s1ICgpIHtcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlzdClcbiAgbGV0IHVzcklucHV0ID0gdHJ1ZVxuICBsZXQgaSA9IDFcbiAgd2hpbGUodXNySW5wdXQpe1xuICAgIHVzcklucHV0ID0gd2luZG93LnByb21wdChcIkFkZCBpdGVtIHRvIGxpc3Q/XCIsIGBpdGVtICR7aX1gKVxuICAgIGlmICghdXNySW5wdXQpIHJldHVyblxuICAgIGkrK1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSB1c3JJbnB1dFxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgfVxufVxuLy8gdGFzazUoKVxuXG5cbi8q0JfQsNC00LDRh9CwIDY6XG4qL1xuXG5mdW5jdGlvbiB0YXNrNiAoKSB7XG4gIGxldCBkYXRhID0ge1xuICAgIFwi0KDRi9Cx0YtcIjoge1xuICAgICAgXCLQpNC+0YDQtdC70YxcIjoge30sXG4gICAgICBcItCp0YPQutCwXCI6IHt9XG4gICAgfSxcblxuICAgIFwi0JTQtdGA0LXQstGM0Y9cIjoge1xuICAgICAgXCLQpdCy0L7QudC90YvQtVwiOiB7XG4gICAgICAgIFwi0JvQuNGB0YLQstC10L3QvdC40YbQsFwiOiB7fSxcbiAgICAgICAgXCLQldC70YxcIjoge31cbiAgICAgIH0sXG4gICAgICBcItCm0LLQtdGC0LrQvtCy0YvQtVwiOiB7XG4gICAgICAgIFwi0JHQtdGA0ZHQt9CwXCI6IHt9LFxuICAgICAgICBcItCi0L7Qv9C+0LvRjFwiOiB7fVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4vKlxuXG5cbmNoZWNrIG9iamVjdCBmb3IgZW1wdHlcbmNyZWF0ZSBsaXN0XG5mb3IgZWFjaCBrZXkgY3JlYXRlIGl0ZW1cbmFkZCBrZXkgYXMgdGV4dFxuXG5jcmVhdGUgY2hpbGRyZW4gd2l0aCByZXF1cnNpdmVcbmlmIGNoaWxkcmVuIGV4c2lzdHMgLSBhZGQgdGhlbVxuXG5hZGQgaXRlbSB0byBsaXN0XG5cblxuKi9cblxuICBmdW5jdGlvbiBjcmVhdGVEb21UcmVlIChvYmopIHtcbiAgICBpZiAoT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICBpdGVtLmlubmVySFRNTCA9IGtleVxuICAgICAgXG4gICAgICBsZXQgc3ViTGlzdCA9IGNyZWF0ZURvbVRyZWUob2JqW2tleV0pXG4gICAgICBpZiAoc3ViTGlzdCkgaXRlbS5hcHBlbmRDaGlsZChzdWJMaXN0KVxuICAgICAgXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgfVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZURvbVRyZWUoZGF0YSkpXG5cblxuICAvKlxuXG4gIGl0ZXJhdGUgdGhyb3VnaCBrZXlzXG4gIGdlbmVyYXRlIGBsaWAgd2l0aCB0ZXh0IChrZXkpXG4gIGNoZWNrIGlmIGtleSBjb250YWlucyBvYmplY3RcbiAgICBpZiB0cnVlOiBjYWxsIHJlY3Vyc2l2ZVxuICAgIGFkZCByZXN1bHQgb2YgcmVxdXJzaW9uIGFzIGxpc3RcbiAgXG4gICovXG5cblxuICBmdW5jdGlvbiBjcmVhdGVEb21UcmVlMSAob2JqKSB7XG4gICAgbGV0IGl0ZW1zID0gYGBcblxuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvYmpba2V5XSkubGVuZ3RoID09PSAwKSBpdGVtcyArPSBgPGxpPiR7a2V5fTwvbGk+YFxuICAgICAgZWxzZSBpdGVtcyArPSBgPGxpPiR7a2V5fSAke2NyZWF0ZURvbVRyZWUxKG9ialtrZXldKX08L2xpPmBcbiAgICB9O1xuICAgIHJldHVybiBpdGVtcyA/IGA8dWw+JHtpdGVtc308L3VsPmAgOiBgYFxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBjcmVhdGVEb21UcmVlMShkYXRhKVxufVxuLy8gdGFzazYoKVxuXG5cblxuXG4vKlxu0KHQvtC30LTQsNGC0Ywg0LrQsNC70LXQvdC00LDRgNGMINCyINCy0LjQtNC1INGC0LDQsdC70LjRhtGLXG7QndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOLCDQutC+0YLQvtGA0LDRjyDRg9C80LXQtdGCINCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQutCw0LvQtdC90LTQsNGA0Ywg0LTQu9GPINC30LDQtNCw0L3QvdC+0Lkg0L/QsNGA0YsgKNC80LXRgdGP0YYsINCz0L7QtCkuXG5cbtCa0LDQu9C10L3QtNCw0YDRjCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0YLQsNCx0LvQuNGG0LXQuSwg0LPQtNC1INC60LDQttC00YvQuSDQtNC10L3RjCDigJQg0Y3RgtC+IFRELiBcbtCjINGC0LDQsdC70LjRhtGLINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQt9Cw0LPQvtC70L7QstC+0Log0YEg0L3QsNC30LLQsNC90LjRj9C80Lgg0LTQvdC10Lkg0L3QtdC00LXQu9C4LCDQutCw0LbQtNGL0Lkg0LTQtdC90Ywg4oCUIFRILlxuXG7QodC40L3RgtCw0LrRgdC40YE6IGNyZWF0ZUNhbGVuZGFyKGlkLCB5ZWFyLCBtb250aCkuXG7QotCw0LrQvtC5INCy0YvQt9C+0LIg0LTQvtC70LbQtdC9INCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDRgtC10LrRgdGCINC00LvRjyDQutCw0LvQtdC90LTQsNGA0Y8g0LzQtdGB0Y/RhtCwIG1vbnRoINCyINCz0L7QtNGDIHllYXIsXG7QsCDQt9Cw0YLQtdC8INC/0L7QvNC10YnQsNGC0Ywg0LXQs9C+INCy0L3Rg9GC0YDRjCDRjdC70LXQvNC10L3RgtCwINGBINGD0LrQsNC30LDQvdC90YvQvCBpZC5cblxu0J3QsNC/0YDQuNC80LXRgDogY3JlYXRlQ2FsZW5kYXIoXCJjYWxcIiwgMjAxMiwgOSkg0YHQs9C10L3QtdGA0LjRgNGD0LXRgiDQsiA8ZGl2IGlkPSdjYWwnPjwvZGl2PiDRgdC70LXQtNGD0Y7RidC40Lkg0LrQsNC70LXQvdC00LDRgNGMOlxuKi9cblxuXG5cbi8qd2hpbGUgZy5nZXRNb250aCA9IDAqL1xuXG5mdW5jdGlvbiB0YXNrNyAoKSB7XG5cbiAgY29uc3QgZGF5cyA9ICdzdSwgbW8sIHR1LCB3ZSwgdGgsIGZyLCBzYSdcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyIChpZCwgeWVhciwgbW9udGgpIHtcbiAgICBcbiAgICBsZXQgbWtEYXlzID0gKGRkKSA9PiB7XG4gICAgICBsZXQgZGF5cyA9IGRkLnNwbGl0KCcsJykubWFwKGQgPT4gYDx0aD4ke2QudHJpbSgpfTwvdGg+YCkuam9pbignJylcbiAgICAgIHJldHVybiBgPHRyPiR7ZGF5c308L3RyPmBcbiAgICB9XG5cbiAgICBsZXQgbWtOdW1iZXJzID0gKHllYXIsIG1vbnRoKSA9PiB7XG4gICAgICBsZXQgZGF5cyA9IFtdXG4gICAgICBsZXQgaSA9IDFcbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICBsZXQgZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGkpXG4gICAgICAgIGlmIChkYXkuZ2V0TW9udGgoKSAhPT0gbW9udGgpIGJyZWFrXG4gICAgICAgIGRheXMucHVzaChkYXkpXG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuXG4gICAgICBsZXQgZmlyc3RSb3cgPSAnJ1xuXG4gICAgICB3aGlsZShjb25kaXRpb24pe1xuICAgICAgICBzdGF0ZW1lbnRcbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLypQcm9ibGVtOlxuXG4gICAgICBicmVhayBkYXlzIGFycmF5IGludG8gcm93cyAoNyBpdGVtcylcbiAgICAgIHN5bmMgZGF5cyB3aXRoIGRheSBjYXB0aW9uc1xuXG5cbiAgICAqL1xuXG5cbiAgICByZXR1cm4gYDx0YWJsZSBpZD0ke2lkfT5cbiAgICAgICAgICAgICAgJHtta0RheXMoZGF5cyl9XG4gICAgICAgICAgICAgICR7bWtOdW1iZXJzKHllYXIsIG1vbnRoKX1cbiAgICAgICAgICAgIDwvdGFibGU+YFxuICB9XG5cblxuICBjcmVhdGVDYWxlbmRhcigndGVzdCcsIDE5ODksIDEpXG59XG50YXNrNygpXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
