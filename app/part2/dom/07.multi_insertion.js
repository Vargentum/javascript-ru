'use strict';

/*
elem.insertAdjacentHTML(where, html)

argument `where` is string, and can be
  - beforeBegin (1)
  - afterBegin (2)
  - beforeEnd (3)
  - afterEnd (4)

  1<li>2 test 3</li>4


document.createDocumentFragment

DocumentFragment
  - DOM object
  - similart to Node
    - hasn't props
  - when append - appending only its children, not Fragment itself
  - can appendChild, clone etc


New methods
  node.append(...nodes)
  node.prepend(...nodes)
  node.after(...nodes)
  node.before(...nodes)
  node.replaceWith(...nodes)

*/

/* Задача 1

Вставьте элементы в конец списка
важность: 5решение
Напишите код для вставки текста html в конец списка ul с использованием метода insertAdjacentHTML.
Tакая вставка, в отличие от присвоения innerHTML+=, не будет перезаписывать текущее содержимое.

Добавьте к списку ниже элементы <li>3</li><li>4</li><li>5</li>:
*/

function task1() {
  var newItems = '<li>3</li><li>4</li><li>5</li>';
  task1List.insertAdjacentHTML('beforeEnd', newItems);
}
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA3Lm11bHRpX2luc2VydGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksUUFBUSxtQ0FBbUMsQ0FBQTtBQUMvQyxXQUFTLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0NBQ3BEO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZG9tLzA3Lm11bHRpX2luc2VydGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5lbGVtLmluc2VydEFkamFjZW50SFRNTCh3aGVyZSwgaHRtbClcblxuYXJndW1lbnQgYHdoZXJlYCBpcyBzdHJpbmcsIGFuZCBjYW4gYmVcbiAgLSBiZWZvcmVCZWdpbiAoMSlcbiAgLSBhZnRlckJlZ2luICgyKVxuICAtIGJlZm9yZUVuZCAoMylcbiAgLSBhZnRlckVuZCAoNClcblxuICAxPGxpPjIgdGVzdCAzPC9saT40XG5cblxuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudFxuXG5Eb2N1bWVudEZyYWdtZW50XG4gIC0gRE9NIG9iamVjdFxuICAtIHNpbWlsYXJ0IHRvIE5vZGVcbiAgICAtIGhhc24ndCBwcm9wc1xuICAtIHdoZW4gYXBwZW5kIC0gYXBwZW5kaW5nIG9ubHkgaXRzIGNoaWxkcmVuLCBub3QgRnJhZ21lbnQgaXRzZWxmXG4gIC0gY2FuIGFwcGVuZENoaWxkLCBjbG9uZSBldGNcblxuXG5OZXcgbWV0aG9kc1xuICBub2RlLmFwcGVuZCguLi5ub2RlcylcbiAgbm9kZS5wcmVwZW5kKC4uLm5vZGVzKVxuICBub2RlLmFmdGVyKC4uLm5vZGVzKVxuICBub2RlLmJlZm9yZSguLi5ub2RlcylcbiAgbm9kZS5yZXBsYWNlV2l0aCguLi5ub2RlcylcblxuKi9cblxuXG5cblxuXG4vKiDQl9Cw0LTQsNGH0LAgMVxuXG7QktGB0YLQsNCy0YzRgtC1INGN0LvQtdC80LXQvdGC0Ysg0LIg0LrQvtC90LXRhiDRgdC/0LjRgdC60LBcbtCy0LDQttC90L7RgdGC0Yw6IDXRgNC10YjQtdC90LjQtVxu0J3QsNC/0LjRiNC40YLQtSDQutC+0LQg0LTQu9GPINCy0YHRgtCw0LLQutC4INGC0LXQutGB0YLQsCBodG1sINCyINC60L7QvdC10YYg0YHQv9C40YHQutCwIHVsINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10Lwg0LzQtdGC0L7QtNCwIGluc2VydEFkamFjZW50SFRNTC5cblTQsNC60LDRjyDQstGB0YLQsNCy0LrQsCwg0LIg0L7RgtC70LjRh9C40LUg0L7RgiDQv9GA0LjRgdCy0L7QtdC90LjRjyBpbm5lckhUTUwrPSwg0L3QtSDQsdGD0LTQtdGCINC/0LXRgNC10LfQsNC/0LjRgdGL0LLQsNGC0Ywg0YLQtdC60YPRidC10LUg0YHQvtC00LXRgNC20LjQvNC+0LUuXG5cbtCU0L7QsdCw0LLRjNGC0LUg0Log0YHQv9C40YHQutGDINC90LjQttC1INGN0LvQtdC80LXQvdGC0YsgPGxpPjM8L2xpPjxsaT40PC9saT48bGk+NTwvbGk+OlxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBsZXQgbmV3SXRlbXMgPSBgPGxpPjM8L2xpPjxsaT40PC9saT48bGk+NTwvbGk+YFxuICB0YXNrMUxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBuZXdJdGVtcylcbn1cbnRhc2sxKClcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
