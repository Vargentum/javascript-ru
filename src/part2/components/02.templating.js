/*

  Lodash template function


  _.template(tmpl, data[, options])

  tmpl - html code with following syntax support

    <% code %>  - will be evaulated as is
    <%= expr %> - will be evaluated and assigned as HTML
    <%- expr %> - will be evauated and inserted as `safe` text
                  e.g. < > % & and other symbols are sanitized

  Example:

  _.template('<div>Hello, <%= who %></div>', {who: 'world'})

  // <div>Hello, world</div>

*/


/* Task 1

  Выведите данные в виде таблицы TABLE/TR/TD при помощи шаблона.
*/


function task1 () {
  
  let users = [
    {name: "Вася", age: 10},
    {name: "Петя", age: 15},
    {name: "Женя", age: 20},
    {name: "Маша", age: 25},
    {name: "Даша", age: 30},
  ];


  let tableTpl = 
    `<table>
      <tbody>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
        </tr>
        <% users.forEach(user => { %>
          <tr>
            <th><%= user.name %></th>
            <th><%= user.age %></th>
          </tr>
        <% }) %>
      </tbody>
    </table>`

  document.body.insertAdjacentHTML('beforeEnd', _.template(tableTpl)({users: users}))

}
task1()


/* Task 2

  Что лучше для размещения шаблона – <script> с нестандартным type или <div> с display:none?
  Почему? Есть ли какие-то другие хорошие варианты?

  Ответ: Хорошие варианты:
           - файл с кастомным расширением + система сборки
           - в ES6 литералах строк
         Div `none` хуже, тк стиль может переопределиться или убраться нечаянно
         Содержимое script гарантированно не будет показанно
       

  Ответ Ильи: div хуже по причине того что невалидный html может разрушить страницу
              Можно добавить код шаблона в комментарий <!-- --> и достать через textNode
              но без id это не так удобно

*/
  



/*Task 3

  Возьмите в качестве исходного кода меню на шаблонах и модифицируйте его,
  чтобы оно выводило не просто список, а список ссылок.  
*/

function task3 () {
  

  function Menu(options) {
    var elem;

    function getElem() {
      if (!elem) render();
      return elem;
    }

    function render() {
      var html = options.template({
        title: options.title
      });

      elem = document.createElement('div');
      elem.innerHTML = html;
      elem = elem.firstElementChild;

      elem.onmousedown = function() {
        return false;
      }

      elem.addEventListener('click', function(event) {
        if (event.target.closest('.title')) {
          toggle();
        }

        if (event.target.classList.contains('link')) {
          handleLinkClick(event, event.target)
        }
      })
    }

    function renderItems() {
      if (elem.querySelector('ul')) return;

      var listHtml = options.listTemplate({
        items: options.items
      });
      elem.insertAdjacentHTML("beforeEnd", listHtml);
    }

    function handleLinkClick(e, link) {
      e.preventDefault()
      alert(link.getAttribute('href'))
    }


    function open() {
      renderItems();
      elem.classList.add('open');
    };

    function close() {
      elem.classList.remove('open');
    };

    function toggle() {
      if (elem.classList.contains('open')) close();
      else open();
    };

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
  }


  let menuTpl = 
    `<div class="menu">
      <h2 class="title"> <%= title %> </h2>
    </div>`

  let menuListTpl = 
    `<ul>
      <% for (var key in items) { %>
        <li><a class="link" href="<%= key %>"> <%= items[key] %> </a></li>
      <% } %>
    </ul>`


  let menu = new Menu({
    title: "Сладости",
    template: _.template(menuTpl),
    listTemplate: _.template(menuListTpl),
    items: {
      "donut": "Пончик",
      "cake": "Пирожное",
      "chocolate": "Шоколадка"
    }
  })
  document.body.appendChild(menu.getElem())

}
task3()