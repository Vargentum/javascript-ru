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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2Lm5vZGVfYWRkX2Nsb25lX2RlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU07O0FBRXBDLFNBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDckMsUUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTTtBQUMvQixRQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNwQyxXQUFPLElBQUksQ0FBQTtHQUNaLENBQUE7Q0FDRjs7Ozs7O0FBQUEsQUFPRCxTQUFTLEtBQUssR0FBSTtBQUNoQixXQUFTLFdBQVcsQ0FBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ25DLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7QUFDOUIsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO0FBQ3JDLFFBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTTtBQUNsQixVQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMvQixXQUFPLElBQUksQ0FBQTtHQUNaO0NBQ0Y7Ozs7O0FBQUEsQUFNRCxTQUFTLEtBQUssR0FBSTtBQUNoQixXQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUU7QUFDNUIsUUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO0FBQ2hCLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQzdCLGFBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNqRDtBQUNELFdBQU8sT0FBTyxDQUFBO0dB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Q2xCOztBQUdELGdCQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtDQUNoQztBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2RvbS8wNi5ub2RlX2FkZF9jbG9uZV9kZWxldGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5DcmVhdGlvbjpcbiAgLSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0YWdOYW1lIClcbiAgLSBkb2N1ZW1lbnQuY3JlYXRlTm9kZVRleHQoIHRleHQgKVxuXG5cbkFkZGl0aW9uOlxuICAtIHBhcmVudC5hcHBlbmRDaGlsZCggZWxlbSApXG4gIC0gcGFyZW50Lmluc2VydEJlZm9yZSggZWxlbSBbLG5ld0VsZW1dKSBcbiAgICAtIGluc2VydCBgbmV3RWxlbWAgYXMgY2hpbGQgb2YgYHBhcmVudGAgYmVmb3JlIGBuZXdFbGVtYFxuICAgIC0gaWYgbm8gbmV3RWxlbSAtIHdvcmtzIGFzIGAuYXBwZW5kQ2hpbGRgXG5cbkNsb25pbmc6XG4gIC0gZWxlbS5jbG9uZUVsZW1lbnQoaXNEZWVwQ29weSlcbiAgICAtIGlzRGVlcENvcHkgYm9vbCwgXG4gICAgICBpZiB0cnVlIC0gZGVlcCBjb3B5IHdpdGggYXR0cmlidXRlcyBhbmQgY2hpbGRyZW4gd2lsbCBiZSBjcmVhdGVkXG5cblJlbW92aW5nXG4gIC0gcGFyZW50LnJlbW92ZUNoaWxkKCBlbGVtIClcbiAgLSBwYXJlbnQucmVwbGFjZUNoaWxkKCBuZXdFbGVtLCBlbGVtIClcbiAgLSBlbGVtLnJlbW92ZSgpXG4gICAgLSBJRTExLSAocG9seWZpbGxzIGF2YWlsYWJsZSlcbiAgICAtIG5vIHBhcmVudCBuZWVkc1xuKi9cblxuXG5cbi8q0JfQsNC00LDRh9CwIDFcbtCe0LTQuNC90LDQutC+0LLRi9C5INC70Lgg0YDQtdC30YPQu9GM0YLQsNGCINC00LDQtNGD0YIg0Y3RgtC4INGB0LrRgNC40L/RgtGLP1xuXG7Qn9C10YDQstGL0Lk6XG5lbGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblxu0JLRgtC+0YDQvtC5OlxuZWxlbS5pbm5lckhUTUwgPSB0ZXh0O1xuXG5cbtCe0YLQstC10YI6INCy0YHQtSDQt9Cw0LLQuNGB0LjRgiDQvtGCINC/0LXRgNC10LzQtdC90L3QvtC5IGB0ZXh0YC4g0LXRgdC70Lgg0LIg0L3QtdC5INCx0YPQtNC10YIgaHRtbCDQutC+0LQsIFxu0YLQviDQsiDRgdC70YPRh9Cw0LUgY3JlYXRlVGV4dE5vZGUg0L7QvSDQsdGD0LTQtdGCINCy0YvQstC10LTQtdC9INCyINGB0YLRgNC+0LrQvtCy0L7QvCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQuCxcbtCwINCyINGB0LvRg9GH0LDQtSBpbm5lckhUTUwg0YDQsNGB0L/QsNGA0YHQtdC9INC4INC00L7QsdCw0LLQu9C10L0g0LrQsNC6INGC0LXQs9C4LlxuXG4qL1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAyOlxuXG7QndCw0L/QuNGI0LjRgtC1INC/0L7Qu9C40YTQuNC70Lsg0LTQu9GPINC80LXRgtC+0LTQsCByZW1vdmUg0LTQu9GPINGB0YLQsNGA0YvRhSDQsdGA0LDRg9C30LXRgNC+0LIuXG5cbtCS0YvQt9C+0LIgZWxlbS5yZW1vdmUoKTpcblxu0JXRgdC70Lgg0YMgZWxlbSDQvdC10YIg0YDQvtC00LjRgtC10LvRjyDigJQg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdGCLlxu0JXRgdC70Lgg0LXRgdGC0Ywg4oCUINGD0LTQsNC70Y/QtdGCINGN0LvQtdC80LXQvdGCINC40Lcg0YDQvtC00LjRgtC10LvRjy5cblxuKi9cblxuZnVuY3Rpb24gdGFzazIgKCkge1xuICBcbiAgaWYgKEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSkgcmV0dXJuIFxuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50RWxlbWVudCkgcmV0dXJuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpICAgIFxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuXG4vKtCX0LDQtNCw0YfQsCAzOlxuXG7QndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOIGluc2VydEFmdGVyKGVsZW0sIHJlZkVsZW0pLCDQutC+0YLQvtGA0LDRjyDQtNC+0LHQsNCy0LjRgiBlbGVtINC/0L7RgdC70LUg0YPQt9C70LAgcmVmRWxlbS5cbiovXG5mdW5jdGlvbiB0YXNrMyAoKSB7XG4gIGZ1bmN0aW9uIGluc2VydEFmdGVyIChlbGVtLCByZWZFbGVtKSB7XG4gICAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50RWVtZW50XG4gICAgbGV0IG5leHQgPSByZWZFbGVtLm5leHRFbGVtZW50U2libGluZ1xuICAgIGlmKCFwYXJlbnQpIHJldHVyblxuICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbSwgbmV4dClcbiAgICByZXR1cm4gZWxlbVxuICB9XG59XG5cblxuLyrQl9Cw0LTQsNGH0LAgNDpcbtCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4gcmVtb3ZlQ2hpbGRyZW4sINC60L7RgtC+0YDQsNGPINGD0LTQsNC70Y/QtdGCINCy0YHQtdGFINC/0L7RgtC+0LzQutC+0LIg0Y3Qu9C10LzQtdC90YLQsC5cbiovXG5mdW5jdGlvbiB0YXNrNCAoKSB7XG4gIGZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKGVsZW0pIHtcbiAgICBsZXQgcmVtb3ZlZCA9IFtdXG4gICAgd2hpbGUoZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcbiAgICAgIHJlbW92ZWQucHVzaChlbGVtLnJlbW92ZUNoaWxkKGVsZW0uY2hpbGRyZW5bMF0pKVxuICAgIH1cbiAgICByZXR1cm4gcmVtb3ZlZFxuICB9XG5cbiAgY29uc29sZS5sb2cocmVtb3ZlQ2hpbGRyZW4odGFibGUpKVxuICBjb25zb2xlLmxvZyhyZW1vdmVDaGlsZHJlbihvbCkpXG59XG4vLyB0YXNrNCgpXG5cbi8qXG5UaXA6XG4gIHVzZSBsYXN0Q2hpbGQgb2YgZmlyc3RDaGlsZDpcbiAgICAtIHRvIHNob3J0ZW4gdGhlIGNvZGVcbiAgICAtIHRvIHJlbW92ZSB0ZXh0Tm9kZXNcblxuICB1c2UgbGFzdEVsZW1lbnRDaGlsZCAvIGZpcnN0RWxlbWVudENoaWxkXG5cbiAgd2hpbGUoZWxlbS5maXJzdENoaWxkKXtcbiAgICByZW1vdmVkLnB1c2goZWxlbS5yZW1vdmVDaGlsZChlbGVtLmZpcnN0Q2hpbGQpKVxuICB9XG5cbkFub3RoZXIgYXBwcm9hY2g6IGVyYXplIGFsbCBgaW5uZXJIVE1MYCBjb250ZW50XG4qL1xuXG5cbi8q0JfQsNC00LDRh9CwIDVcbtCd0LDQv9C40YjQuNGC0LUg0LjQvdGC0LXRgNGE0LXQudGBINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINGB0L/QuNGB0LrQsC5cblxu0JTQu9GPINC60LDQttC00L7Qs9C+INC/0YPQvdC60YLQsDpcblxu0JfQsNC/0YDQsNGI0LjQstCw0LnRgtC1INGB0L7QtNC10YDQttC40LzQvtC1INC/0YPQvdC60YLQsCDRgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0YEg0L/QvtC80L7RidGM0Y4gcHJvbXB0Llxu0KHQvtC30LTQsNCy0LDQudGC0LUg0L/Rg9C90LrRgiDQuCDQtNC+0LHQsNCy0LvRj9C50YLQtSDQtdCz0L4g0LogVUwuXG7Qn9GA0L7RhtC10YHRgSDQv9GA0LXRgNGL0LLQsNC10YLRgdGPLCDQutC+0LPQtNCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvdCw0LbQuNC80LDQtdGCIEVTQyDQuNC70Lgg0LLQstC+0LTQuNGCINC/0YPRgdGC0YPRjiDRgdGC0YDQvtC60YMuKi9cblxuZnVuY3Rpb24gdGFzazUgKCkge1xuICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXN0KVxuICBsZXQgdXNySW5wdXQgPSB0cnVlXG4gIGxldCBpID0gMVxuICB3aGlsZSh1c3JJbnB1dCl7XG4gICAgdXNySW5wdXQgPSB3aW5kb3cucHJvbXB0KFwiQWRkIGl0ZW0gdG8gbGlzdD9cIiwgYGl0ZW0gJHtpfWApXG4gICAgaWYgKCF1c3JJbnB1dCkgcmV0dXJuXG4gICAgaSsrXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IHVzcklucHV0XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKVxuICB9XG59XG4vLyB0YXNrNSgpXG5cblxuLyrQl9Cw0LTQsNGH0LAgNjpcbiovXG5cbmZ1bmN0aW9uIHRhc2s2ICgpIHtcbiAgbGV0IGRhdGEgPSB7XG4gICAgXCLQoNGL0LHRi1wiOiB7XG4gICAgICBcItCk0L7RgNC10LvRjFwiOiB7fSxcbiAgICAgIFwi0KnRg9C60LBcIjoge31cbiAgICB9LFxuXG4gICAgXCLQlNC10YDQtdCy0YzRj1wiOiB7XG4gICAgICBcItCl0LLQvtC50L3Ri9C1XCI6IHtcbiAgICAgICAgXCLQm9C40YHRgtCy0LXQvdC90LjRhtCwXCI6IHt9LFxuICAgICAgICBcItCV0LvRjFwiOiB7fVxuICAgICAgfSxcbiAgICAgIFwi0KbQstC10YLQutC+0LLRi9C1XCI6IHtcbiAgICAgICAgXCLQkdC10YDRkdC30LBcIjoge30sXG4gICAgICAgIFwi0KLQvtC/0L7Qu9GMXCI6IHt9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbi8qXG5cblxuY2hlY2sgb2JqZWN0IGZvciBlbXB0eVxuY3JlYXRlIGxpc3RcbmZvciBlYWNoIGtleSBjcmVhdGUgaXRlbVxuYWRkIGtleSBhcyB0ZXh0XG5cbmNyZWF0ZSBjaGlsZHJlbiB3aXRoIHJlcXVyc2l2ZVxuaWYgY2hpbGRyZW4gZXhzaXN0cyAtIGFkZCB0aGVtXG5cbmFkZCBpdGVtIHRvIGxpc3RcblxuXG4qL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURvbVRyZWUgKG9iaikge1xuICAgIGlmIChPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIGl0ZW0uaW5uZXJIVE1MID0ga2V5XG4gICAgICBcbiAgICAgIGxldCBzdWJMaXN0ID0gY3JlYXRlRG9tVHJlZShvYmpba2V5XSlcbiAgICAgIGlmIChzdWJMaXN0KSBpdGVtLmFwcGVuZENoaWxkKHN1Ykxpc3QpXG4gICAgICBcbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRG9tVHJlZShkYXRhKSlcblxuXG4gIC8qXG5cbiAgaXRlcmF0ZSB0aHJvdWdoIGtleXNcbiAgZ2VuZXJhdGUgYGxpYCB3aXRoIHRleHQgKGtleSlcbiAgY2hlY2sgaWYga2V5IGNvbnRhaW5zIG9iamVjdFxuICAgIGlmIHRydWU6IGNhbGwgcmVjdXJzaXZlXG4gICAgYWRkIHJlc3VsdCBvZiByZXF1cnNpb24gYXMgbGlzdFxuICBcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURvbVRyZWUxIChvYmopIHtcbiAgICBsZXQgaXRlbXMgPSBgYFxuXG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG9ialtrZXldKS5sZW5ndGggPT09IDApIGl0ZW1zICs9IGA8bGk+JHtrZXl9PC9saT5gXG4gICAgICBlbHNlIGl0ZW1zICs9IGA8bGk+JHtrZXl9ICR7Y3JlYXRlRG9tVHJlZTEob2JqW2tleV0pfTwvbGk+YFxuICAgIH07XG4gICAgcmV0dXJuIGl0ZW1zID8gYDx1bD4ke2l0ZW1zfTwvdWw+YCA6IGBgXG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGNyZWF0ZURvbVRyZWUxKGRhdGEpXG59XG4vLyB0YXNrNigpXG5cblxuXG5cbi8qXG7QodC+0LfQtNCw0YLRjCDQutCw0LvQtdC90LTQsNGA0Ywg0LIg0LLQuNC00LUg0YLQsNCx0LvQuNGG0YtcbtCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4sINC60L7RgtC+0YDQsNGPINGD0LzQtdC10YIg0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC60LDQu9C10L3QtNCw0YDRjCDQtNC70Y8g0LfQsNC00LDQvdC90L7QuSDQv9Cw0YDRiyAo0LzQtdGB0Y/Rhiwg0LPQvtC0KS5cblxu0JrQsNC70LXQvdC00LDRgNGMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDRgtCw0LHQu9C40YbQtdC5LCDQs9C00LUg0LrQsNC20LTRi9C5INC00LXQvdGMIOKAlCDRjdGC0L4gVEQuIFxu0KMg0YLQsNCx0LvQuNGG0Ysg0LTQvtC70LbQtdC9INCx0YvRgtGMINC30LDQs9C+0LvQvtCy0L7QuiDRgSDQvdCw0LfQstCw0L3QuNGP0LzQuCDQtNC90LXQuSDQvdC10LTQtdC70LgsINC60LDQttC00YvQuSDQtNC10L3RjCDigJQgVEguXG5cbtCh0LjQvdGC0LDQutGB0LjRgTogY3JlYXRlQ2FsZW5kYXIoaWQsIHllYXIsIG1vbnRoKS5cbtCi0LDQutC+0Lkg0LLRi9C30L7QsiDQtNC+0LvQttC10L0g0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINGC0LXQutGB0YIg0LTQu9GPINC60LDQu9C10L3QtNCw0YDRjyDQvNC10YHRj9GG0LAgbW9udGgg0LIg0LPQvtC00YMgeWVhcixcbtCwINC30LDRgtC10Lwg0L/QvtC80LXRidCw0YLRjCDQtdCz0L4g0LLQvdGD0YLRgNGMINGN0LvQtdC80LXQvdGC0LAg0YEg0YPQutCw0LfQsNC90L3Ri9C8IGlkLlxuXG7QndCw0L/RgNC40LzQtdGAOiBjcmVhdGVDYWxlbmRhcihcImNhbFwiLCAyMDEyLCA5KSDRgdCz0LXQvdC10YDQuNGA0YPQtdGCINCyIDxkaXYgaWQ9J2NhbCc+PC9kaXY+INGB0LvQtdC00YPRjtGJ0LjQuSDQutCw0LvQtdC90LTQsNGA0Yw6XG4qL1xuXG5cblxuLyp3aGlsZSBnLmdldE1vbnRoID0gMCovXG5cbmZ1bmN0aW9uIHRhc2s3ICgpIHtcblxuICBjb25zdCBkYXlzID0gJ3N1LCBtbywgdHUsIHdlLCB0aCwgZnIsIHNhJ1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXIgKGlkLCB5ZWFyLCBtb250aCkge1xuICAgIFxuICAgIGxldCBta0RheXMgPSAoZGQpID0+IHtcbiAgICAgIGxldCBkYXlzID0gZGQuc3BsaXQoJywnKS5tYXAoZCA9PiBgPHRoPiR7ZC50cmltKCl9PC90aD5gKS5qb2luKCcnKVxuICAgICAgcmV0dXJuIGA8dHI+JHtkYXlzfTwvdHI+YFxuICAgIH1cblxuICAgIGxldCBta051bWJlcnMgPSAoeWVhciwgbW9udGgpID0+IHtcbiAgICAgIGxldCBkYXlzID0gW11cbiAgICAgIGxldCBpID0gMVxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgIGxldCBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSlcbiAgICAgICAgaWYgKGRheS5nZXRNb250aCgpICE9PSBtb250aCkgYnJlYWtcbiAgICAgICAgZGF5cy5wdXNoKGRheSlcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG5cbiAgICAgIGxldCBmaXJzdFJvdyA9ICcnXG5cbiAgICAgIHdoaWxlKGNvbmRpdGlvbil7XG4gICAgICAgIHN0YXRlbWVudFxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvKlByb2JsZW06XG5cbiAgICAgIGJyZWFrIGRheXMgYXJyYXkgaW50byByb3dzICg3IGl0ZW1zKVxuICAgICAgc3luYyBkYXlzIHdpdGggZGF5IGNhcHRpb25zXG5cblxuICAgICovXG5cblxuICAgIHJldHVybiBgPHRhYmxlIGlkPSR7aWR9PlxuICAgICAgICAgICAgICAke21rRGF5cyhkYXlzKX1cbiAgICAgICAgICAgICAgJHtta051bWJlcnMoeWVhciwgbW9udGgpfVxuICAgICAgICAgICAgPC90YWJsZT5gXG4gIH1cblxuXG4gIGNyZWF0ZUNhbGVuZGFyKCd0ZXN0JywgMTk4OSwgMSlcbn1cbnRhc2s3KClcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
