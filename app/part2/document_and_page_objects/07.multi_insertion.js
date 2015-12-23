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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA3Lm11bHRpX2luc2VydGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksUUFBUSxtQ0FBbUMsQ0FBQTtBQUMvQyxXQUFTLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0NBQ3BEO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZG9jdW1lbnRfYW5kX3BhZ2Vfb2JqZWN0cy8wNy5tdWx0aV9pbnNlcnRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuZWxlbS5pbnNlcnRBZGphY2VudEhUTUwod2hlcmUsIGh0bWwpXG5cbmFyZ3VtZW50IGB3aGVyZWAgaXMgc3RyaW5nLCBhbmQgY2FuIGJlXG4gIC0gYmVmb3JlQmVnaW4gKDEpXG4gIC0gYWZ0ZXJCZWdpbiAoMilcbiAgLSBiZWZvcmVFbmQgKDMpXG4gIC0gYWZ0ZXJFbmQgKDQpXG5cbiAgMTxsaT4yIHRlc3QgMzwvbGk+NFxuXG5cbmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnRcblxuRG9jdW1lbnRGcmFnbWVudFxuICAtIERPTSBvYmplY3RcbiAgLSBzaW1pbGFydCB0byBOb2RlXG4gICAgLSBoYXNuJ3QgcHJvcHNcbiAgLSB3aGVuIGFwcGVuZCAtIGFwcGVuZGluZyBvbmx5IGl0cyBjaGlsZHJlbiwgbm90IEZyYWdtZW50IGl0c2VsZlxuICAtIGNhbiBhcHBlbmRDaGlsZCwgY2xvbmUgZXRjXG5cblxuTmV3IG1ldGhvZHNcbiAgbm9kZS5hcHBlbmQoLi4ubm9kZXMpXG4gIG5vZGUucHJlcGVuZCguLi5ub2RlcylcbiAgbm9kZS5hZnRlciguLi5ub2RlcylcbiAgbm9kZS5iZWZvcmUoLi4ubm9kZXMpXG4gIG5vZGUucmVwbGFjZVdpdGgoLi4ubm9kZXMpXG5cbiovXG5cblxuXG5cblxuLyog0JfQsNC00LDRh9CwIDFcblxu0JLRgdGC0LDQstGM0YLQtSDRjdC70LXQvNC10L3RgtGLINCyINC60L7QvdC10YYg0YHQv9C40YHQutCwXG7QstCw0LbQvdC+0YHRgtGMOiA10YDQtdGI0LXQvdC40LVcbtCd0LDQv9C40YjQuNGC0LUg0LrQvtC0INC00LvRjyDQstGB0YLQsNCy0LrQuCDRgtC10LrRgdGC0LAgaHRtbCDQsiDQutC+0L3QtdGGINGB0L/QuNGB0LrQsCB1bCDRgSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8INC80LXRgtC+0LTQsCBpbnNlcnRBZGphY2VudEhUTUwuXG5U0LDQutCw0Y8g0LLRgdGC0LDQstC60LAsINCyINC+0YLQu9C40YfQuNC1INC+0YIg0L/RgNC40YHQstC+0LXQvdC40Y8gaW5uZXJIVE1MKz0sINC90LUg0LHRg9C00LXRgiDQv9C10YDQtdC30LDQv9C40YHRi9Cy0LDRgtGMINGC0LXQutGD0YnQtdC1INGB0L7QtNC10YDQttC40LzQvtC1LlxuXG7QlNC+0LHQsNCy0YzRgtC1INC6INGB0L/QuNGB0LrRgyDQvdC40LbQtSDRjdC70LXQvNC10L3RgtGLIDxsaT4zPC9saT48bGk+NDwvbGk+PGxpPjU8L2xpPjpcbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgbGV0IG5ld0l0ZW1zID0gYDxsaT4zPC9saT48bGk+NDwvbGk+PGxpPjU8L2xpPmBcbiAgdGFzazFMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgbmV3SXRlbXMpXG59XG50YXNrMSgpXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
