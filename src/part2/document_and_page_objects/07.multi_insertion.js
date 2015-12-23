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

function task1 () {
  let newItems = `<li>3</li><li>4</li><li>5</li>`
  task1List.insertAdjacentHTML('beforeEnd', newItems)
}
task1()


