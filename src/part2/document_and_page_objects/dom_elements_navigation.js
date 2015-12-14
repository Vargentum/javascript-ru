/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div>Пользователи:</div>
  <ul>
    <li>Маша</li>
    <li>Вовочка</li>
  </ul>

  <!-- комментарий -->

  <script>
    // ... ваш код
  </script>

</body>

</html>


Напишите код, который получит элемент HEAD.
Напишите код, который получит UL.
Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?

нет: так как в IE8- children содержит узлы комментариев
*/

function task1 () {
  let head = document.head
  let list = document.body.children[1]
  let li = list.children[1]
}

/*
  Tip: head = document.documentElement.firstChild
*/



/*
Придумайте самый короткий код для проверки, пуст ли элемент elem.
«Пустой» — значит нет дочерних узлов, даже текстовых.
*/
function isElementEmpty (element) {
  return !element.childNodes.length
}

/*
  Tip: .hasChildNodes() method is available. Do the same
*/


/*
Если elem — это произвольный узел DOM…

Верно ли, что elem.lastChild.nextSibling всегда null? 
Да, потому что .lastChild это гарантированно последний узел (в отличии от lastElementChild)

Верно ли, что elem.children[0].previousSibling всегда null ?
Нет, потому что children хранит только Элементы, а перед ним может быть текстовый узел.

Tip: если .lastChild/.children null, то будет ошибка
*/



/*
Напишите код, который выделит все ячейки в таблице по диагонали.

Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:
*/
function hLeftDiagonalCells (table) {
  for (var i = 0; i < table.rows.length; i++) {
    let diagCell = table.rows[i].cells[i];
    diagCell.style.backgroundColor = 'red'
  };
}

function hBothDiagonalCells (table) {
  for (var i = 0; i < table.rows.length; i++) {
    let diagCellLeft  = table.rows[i].cells[i];
    let diagCellRight = table.rows[i].cells[table.rows.length - i - 1];
    [diagCellLeft, diagCellRight].forEach(i => i.style.backgroundColor = 'red')
  };
}

// hLeftDiagonalCells(document.body.children[1])
hBothDiagonalCells(document.body.children[1])