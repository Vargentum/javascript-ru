/*

  In Browser there are some default handlers

  Examples: 
    - highlight text after double click
    - go to URL after clicking on link


  All these handlers are CANCELLABLE

  How to Cancel?
    - through `event` object: event.preventDefault()
    - if no event object: 
        handler defined via attribute (<a onclick"" />)
        use `return: false`


*/


/*Task 1

  Why don't work?

  <script>
    function handler() {
      alert( "..." );
      return false;
    }
  </script>

  <a href="http://w3.org" onclick="handler()">w3.org</a>


  Decision: you need to `return` result of handler execurtion

*/



/*Task 2


Сделайте так, чтобы при клике на ссылки внутри элемента #contents 
пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу 
и если он не хочет, то прерывать переход по ссылке.


Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.

Содержимое может содержать вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

*/
function task2 () {
  
  let handler = evt => {
    let link = evt.target.closest('a')
    if (!(link && link.closest('#contents'))) return

    let choise = confirm(`Transfer you to ${link.href}?`)
    if (!choise) evt.preventDefault()
  }

  document.addEventListener('click', handler)

}
// task2()



/*Task 3

Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
Для обработки событий используйте делегирование, т.е. не более одного обработчика.
P.S. Обратите внимание — клик может быть как на маленьком изображении IMG, так и на A вне него.
     При этом event.target будет, соответственно, либо IMG, либо A.

Дополнительно:
Если получится — сделайте предзагрузку больших изображений, чтобы при клике они появлялись сразу.

Enlightment:
  - use closest area for handlers (thumbs instead of document)
  - don't forget about secondary elements (alt / titles)

*/

function task3 () {

  let imgsPreload = urls => {
    urls.forEach(url => (new Image()).src = url)
  }
  
  let handler = evt => {
    let link = evt.target.closest('a')
    if (!link) return

    largeImg.src = link.href
    largeImg.alt = link.title
    event.preventDefault()
  }

  let thumbImages = Array.prototype.map.call(thumbs.children, chld => chld.href)
  imgsPreload(thumbImages)

  thumbs.addEventListener('click', handler)
}
task3()
