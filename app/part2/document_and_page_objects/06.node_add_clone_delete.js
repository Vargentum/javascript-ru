"use strict";

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

/*Задача 5*/

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
}
task6();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA2Lm5vZGVfYWRkX2Nsb25lX2RlbGV0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU07O0FBRXBDLFNBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDckMsUUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTTtBQUMvQixRQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNwQyxXQUFPLElBQUksQ0FBQTtHQUNaLENBQUE7Q0FDRjs7Ozs7O0FBQUEsQUFPRCxTQUFTLEtBQUssR0FBSTtBQUNoQixXQUFTLFdBQVcsQ0FBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ25DLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7QUFDOUIsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFBO0FBQ3JDLFFBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTTtBQUNsQixVQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUMvQixXQUFPLElBQUksQ0FBQTtHQUNaO0NBQ0Y7Ozs7O0FBQUEsQUFNRCxTQUFTLEtBQUssR0FBSTtBQUNoQixXQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUU7QUFDNUIsUUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO0FBQ2hCLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO0FBQzdCLGFBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNqRDtBQUNELFdBQU8sT0FBTyxDQUFBO0dBQ2Y7O0FBRUQsU0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUNsQyxTQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0NBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBMkJELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksSUFBSSxHQUFHO0FBQ1QsVUFBTSxFQUFFO0FBQ04sY0FBUSxFQUFFLEVBQUU7QUFDWixZQUFNLEVBQUUsRUFBRTtLQUNYOztBQUVELGFBQVMsRUFBRTtBQUNULGVBQVMsRUFBRTtBQUNULHFCQUFhLEVBQUUsRUFBRTtBQUNqQixhQUFLLEVBQUUsRUFBRTtPQUNWO0FBQ0QsaUJBQVcsRUFBRTtBQUNYLGdCQUFRLEVBQUUsRUFBRTtBQUNaLGdCQUFRLEVBQUUsRUFBRTtPQUNiO0tBQ0Y7R0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsQUFtQkYsV0FBUyxhQUFhLENBQUUsR0FBRyxFQUFFO0FBQzNCLFFBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU07O0FBRXpDLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdkMsU0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDbkIsVUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QyxVQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTs7QUFFcEIsVUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ3JDLFVBQUksT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7O0FBRXRDLFVBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDdkI7QUFDRCxXQUFPLElBQUksQ0FBQTtHQUNaOztBQUVELFVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0NBRS9DO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZG9jdW1lbnRfYW5kX3BhZ2Vfb2JqZWN0cy8wNi5ub2RlX2FkZF9jbG9uZV9kZWxldGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5DcmVhdGlvbjpcbiAgLSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0YWdOYW1lIClcbiAgLSBkb2N1ZW1lbnQuY3JlYXRlTm9kZVRleHQoIHRleHQgKVxuXG5cbkFkZGl0aW9uOlxuICAtIHBhcmVudC5hcHBlbmRDaGlsZCggZWxlbSApXG4gIC0gcGFyZW50Lmluc2VydEJlZm9yZSggZWxlbSBbLG5ld0VsZW1dKSBcbiAgICAtIGluc2VydCBgbmV3RWxlbWAgYXMgY2hpbGQgb2YgYHBhcmVudGAgYmVmb3JlIGBuZXdFbGVtYFxuICAgIC0gaWYgbm8gbmV3RWxlbSAtIHdvcmtzIGFzIGAuYXBwZW5kQ2hpbGRgXG5cbkNsb25pbmc6XG4gIC0gZWxlbS5jbG9uZUVsZW1lbnQoaXNEZWVwQ29weSlcbiAgICAtIGlzRGVlcENvcHkgYm9vbCwgXG4gICAgICBpZiB0cnVlIC0gZGVlcCBjb3B5IHdpdGggYXR0cmlidXRlcyBhbmQgY2hpbGRyZW4gd2lsbCBiZSBjcmVhdGVkXG5cblJlbW92aW5nXG4gIC0gcGFyZW50LnJlbW92ZUNoaWxkKCBlbGVtIClcbiAgLSBwYXJlbnQucmVwbGFjZUNoaWxkKCBuZXdFbGVtLCBlbGVtIClcbiAgLSBlbGVtLnJlbW92ZSgpXG4gICAgLSBJRTExLSAocG9seWZpbGxzIGF2YWlsYWJsZSlcbiAgICAtIG5vIHBhcmVudCBuZWVkc1xuKi9cblxuXG5cbi8q0JfQsNC00LDRh9CwIDFcbtCe0LTQuNC90LDQutC+0LLRi9C5INC70Lgg0YDQtdC30YPQu9GM0YLQsNGCINC00LDQtNGD0YIg0Y3RgtC4INGB0LrRgNC40L/RgtGLP1xuXG7Qn9C10YDQstGL0Lk6XG5lbGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblxu0JLRgtC+0YDQvtC5OlxuZWxlbS5pbm5lckhUTUwgPSB0ZXh0O1xuXG5cbtCe0YLQstC10YI6INCy0YHQtSDQt9Cw0LLQuNGB0LjRgiDQvtGCINC/0LXRgNC10LzQtdC90L3QvtC5IGB0ZXh0YC4g0LXRgdC70Lgg0LIg0L3QtdC5INCx0YPQtNC10YIgaHRtbCDQutC+0LQsIFxu0YLQviDQsiDRgdC70YPRh9Cw0LUgY3JlYXRlVGV4dE5vZGUg0L7QvSDQsdGD0LTQtdGCINCy0YvQstC10LTQtdC9INCyINGB0YLRgNC+0LrQvtCy0L7QvCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQuCxcbtCwINCyINGB0LvRg9GH0LDQtSBpbm5lckhUTUwg0YDQsNGB0L/QsNGA0YHQtdC9INC4INC00L7QsdCw0LLQu9C10L0g0LrQsNC6INGC0LXQs9C4LlxuXG4qL1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCAyOlxuXG7QndCw0L/QuNGI0LjRgtC1INC/0L7Qu9C40YTQuNC70Lsg0LTQu9GPINC80LXRgtC+0LTQsCByZW1vdmUg0LTQu9GPINGB0YLQsNGA0YvRhSDQsdGA0LDRg9C30LXRgNC+0LIuXG5cbtCS0YvQt9C+0LIgZWxlbS5yZW1vdmUoKTpcblxu0JXRgdC70Lgg0YMgZWxlbSDQvdC10YIg0YDQvtC00LjRgtC10LvRjyDigJQg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdGCLlxu0JXRgdC70Lgg0LXRgdGC0Ywg4oCUINGD0LTQsNC70Y/QtdGCINGN0LvQtdC80LXQvdGCINC40Lcg0YDQvtC00LjRgtC10LvRjy5cblxuKi9cblxuZnVuY3Rpb24gdGFzazIgKCkge1xuICBcbiAgaWYgKEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSkgcmV0dXJuIFxuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50RWxlbWVudCkgcmV0dXJuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpICAgIFxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuXG4vKtCX0LDQtNCw0YfQsCAzOlxuXG7QndCw0L/QuNGI0LjRgtC1INGE0YPQvdC60YbQuNGOIGluc2VydEFmdGVyKGVsZW0sIHJlZkVsZW0pLCDQutC+0YLQvtGA0LDRjyDQtNC+0LHQsNCy0LjRgiBlbGVtINC/0L7RgdC70LUg0YPQt9C70LAgcmVmRWxlbS5cbiovXG5mdW5jdGlvbiB0YXNrMyAoKSB7XG4gIGZ1bmN0aW9uIGluc2VydEFmdGVyIChlbGVtLCByZWZFbGVtKSB7XG4gICAgbGV0IHBhcmVudCA9IGVsZW0ucGFyZW50RWVtZW50XG4gICAgbGV0IG5leHQgPSByZWZFbGVtLm5leHRFbGVtZW50U2libGluZ1xuICAgIGlmKCFwYXJlbnQpIHJldHVyblxuICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbSwgbmV4dClcbiAgICByZXR1cm4gZWxlbVxuICB9XG59XG5cblxuLyrQl9Cw0LTQsNGH0LAgNDpcbtCd0LDQv9C40YjQuNGC0LUg0YTRg9C90LrRhtC40Y4gcmVtb3ZlQ2hpbGRyZW4sINC60L7RgtC+0YDQsNGPINGD0LTQsNC70Y/QtdGCINCy0YHQtdGFINC/0L7RgtC+0LzQutC+0LIg0Y3Qu9C10LzQtdC90YLQsC5cbiovXG5mdW5jdGlvbiB0YXNrNCAoKSB7XG4gIGZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKGVsZW0pIHtcbiAgICBsZXQgcmVtb3ZlZCA9IFtdXG4gICAgd2hpbGUoZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcbiAgICAgIHJlbW92ZWQucHVzaChlbGVtLnJlbW92ZUNoaWxkKGVsZW0uY2hpbGRyZW5bMF0pKVxuICAgIH1cbiAgICByZXR1cm4gcmVtb3ZlZFxuICB9XG5cbiAgY29uc29sZS5sb2cocmVtb3ZlQ2hpbGRyZW4odGFibGUpKVxuICBjb25zb2xlLmxvZyhyZW1vdmVDaGlsZHJlbihvbCkpXG59XG4vLyB0YXNrNCgpXG5cbi8qXG5UaXA6XG4gIHVzZSBsYXN0Q2hpbGQgb2YgZmlyc3RDaGlsZDpcbiAgICAtIHRvIHNob3J0ZW4gdGhlIGNvZGVcbiAgICAtIHRvIHJlbW92ZSB0ZXh0Tm9kZXNcblxuICB1c2UgbGFzdEVsZW1lbnRDaGlsZCAvIGZpcnN0RWxlbWVudENoaWxkXG5cbiAgd2hpbGUoZWxlbS5maXJzdENoaWxkKXtcbiAgICByZW1vdmVkLnB1c2goZWxlbS5yZW1vdmVDaGlsZChlbGVtLmZpcnN0Q2hpbGQpKVxuICB9XG5cbkFub3RoZXIgYXBwcm9hY2g6IGVyYXplIGFsbCBgaW5uZXJIVE1MYCBjb250ZW50XG4qL1xuXG5cbi8q0JfQsNC00LDRh9CwIDUqL1xuXG5cblxuXG4vKtCX0LDQtNCw0YfQsCA2OlxuKi9cblxuZnVuY3Rpb24gdGFzazYgKCkge1xuICBsZXQgZGF0YSA9IHtcbiAgICBcItCg0YvQsdGLXCI6IHtcbiAgICAgIFwi0KTQvtGA0LXQu9GMXCI6IHt9LFxuICAgICAgXCLQqdGD0LrQsFwiOiB7fVxuICAgIH0sXG5cbiAgICBcItCU0LXRgNC10LLRjNGPXCI6IHtcbiAgICAgIFwi0KXQstC+0LnQvdGL0LVcIjoge1xuICAgICAgICBcItCb0LjRgdGC0LLQtdC90L3QuNGG0LBcIjoge30sXG4gICAgICAgIFwi0JXQu9GMXCI6IHt9XG4gICAgICB9LFxuICAgICAgXCLQptCy0LXRgtC60L7QstGL0LVcIjoge1xuICAgICAgICBcItCR0LXRgNGR0LfQsFwiOiB7fSxcbiAgICAgICAgXCLQotC+0L/QvtC70YxcIjoge31cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuLypcblxuXG5jaGVjayBvYmplY3QgZm9yIGVtcHR5XG5jcmVhdGUgbGlzdFxuZm9yIGVhY2gga2V5IGNyZWF0ZSBpdGVtXG5hZGQga2V5IGFzIHRleHRcblxuY3JlYXRlIGNoaWxkcmVuIHdpdGggcmVxdXJzaXZlXG5pZiBjaGlsZHJlbiBleHNpc3RzIC0gYWRkIHRoZW1cblxuYWRkIGl0ZW0gdG8gbGlzdFxuXG5cbiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlRG9tVHJlZSAob2JqKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgaXRlbS5pbm5lckhUTUwgPSBrZXlcbiAgICAgIFxuICAgICAgbGV0IHN1Ykxpc3QgPSBjcmVhdGVEb21UcmVlKG9ialtrZXldKVxuICAgICAgaWYgKHN1Ykxpc3QpIGl0ZW0uYXBwZW5kQ2hpbGQoc3ViTGlzdClcbiAgICAgIFxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVEb21UcmVlKGRhdGEpKVxuXG59XG50YXNrNigpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
