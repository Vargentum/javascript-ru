/*

elem.nodeType
  - number
  - 1 for Element, 2 for Text
  - total 12

elem.tagName
  - shows name of element
  - only for Elements
  - uppercased

elem.nodeName
  - smimlar to tagName
  - works for any Node

elem.innerHTML
  - get / set inner html of element (between open and closing tag)
  - return a valid html string
  - auto-correct mistakes when set
  - caveats in ie9-

elem.outerHTML
  - get full element html (with open and closing tags)
  - caveats when writing to: 
    - new node will be applied to DOM
    - BUT elem.outerHTML keep the old value

elem.data
  - return value of ANY node type
  - useful for TextNodes reading

elem.textContent
  - return all textNodes inside Element without tags
  - useful for writing: all tags inside `input` will be erased: 
    - prevent for unknown HTML injection

elem.hidden
  - bool
  - ie11+
  - similar to style="display: none", but shorter

*/



/*Задача 1:

<body>
  <h1>Привет, мир!</h1>

  <script>
    alert( document.body.firstChild.innerHTML ); // undefined
  </script>
</body>

Ответ: зависит от того есть ли TextNode (пробел) между <body> и <h1>
  - если да: то `undefined`
  - если нет: `Привет, мир!`
*/




/*Задача 2:

<!DOCTYPE HTML>
<html>
<body>
  <script>
    alert( document.body.lastChild.nodeType );
  </script>
</body>
</html>

Ответ: подвох - последним узлом будет считаться SCRIPT, 
       потому что все что после него, еще не обработано в момент выполнения скрипта.
*/



/*Задача 3: 

<script>
  var body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>

Ответ: body.tagName (BODY) при условии
  - body существует (существует, будет добавлен автоматически)
*/


/*Задача 4:

1.Объектом какого класса является document?
2.Какое место он занимает в DOM-иерархии?
3.Наследует ли он Node или Element?
Воспользуйтесь для решения тем фактом, что DOM-узлы образуют стандартную прототипную иерархию классов.

Ответ: 
  1. DocumentNode (конструктор HTMLDocument)
  2. Корневое (неправильно: HTMLDocument, Document, Node)
  3. Node
*/