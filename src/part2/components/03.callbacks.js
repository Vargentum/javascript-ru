/*

  Component need to interact with other components

  METHOD 1: Use Callbacks

    - function that translated to somewhere
    - expect that it will be executed after some `event`

  Example:

  function Menu() {
    ...
    function select(link) {
      options.onselect(link.getAttribute('href').slice(1));
      ...
    }
  ...
  }

  var menu = new Menu({
    title: "Сладости",
    template: _.template(document.getElementById('menu-template').innerHTML),
    listTemplate: _.template(document.getElementById('menu-list-template').innerHTML),
    items: {
      "donut": "Пончик",
      "cake": "Пирожное",
      "chocolate": "Шоколадка"
    },
    onselect: showSelected //!!!translate callback
  });

  function showSelected(href) {
    alert(href);
  }



  
  METHOD 2: Use Custom Events

    - generate and dispatch
    - listen to event and handle it


  Example: 


  function Menu(options) {

    function select(link) {
      var widgetEvent = new CustomEvent("select", {
        bubbles: true,
        // detail - стандартное свойство CustomEvent для произвольных данных
        detail: link.getAttribute('href').slice(1)
      });
      elem.dispatchEvent(widgetEvent);
    }

  }


  var menu = new Menu(...);

  var elem = menu.getElem();

  elem.addEventListener('select', function(event) { //!!!listen to custom event
    alert( event.detail );  
  });

*/


/*Task 1  
  
  Добавьте событие в голосовалку, созданную в задаче Голосовалка, используя механизм генерации событий на объекте.
  Пусть каждое изменение голоса сопровождается событием change со свойством detail, содержащим обновлённое значение:

*/

function task1 () {
  
  const Voter = stampit()
    .props({
      elem: '',
      id: _.uniqueId('voter-')
    })
    .methods({
      _generateChangeEvent: function(data) {
        let evt = new CustomEvent('change', {
          bubbles: true,
          detail: data
        })
        this.$vote.dispatchEvent(evt)
      },

      _replaceHTML: function(elem) {
        elem.insertAdjacentHTML('beforeBegin', this.html)
        elem.parentElement.removeChild(this.elem)
        elem = document.getElementById(this.id)
        return elem
      },
      _handleClick: function(e) {
        let vote = parseInt(this.$vote.textContent)
        let isTarget = type => e.target.classList.contains(type)
        if (isTarget('down')) this.setVote(--vote)
        else if (isTarget('up')) this.setVote(++vote)
        else return
      },
      setVote: function(vote) {
        this.$vote.textContent = vote
        this._generateChangeEvent(vote)
      }
    })
    .init(function () {
      this.html = `<div id="${this.id}" class="voter">
                     <span class="down">—</span>
                     <span class="vote">0</span>
                     <span class="up">+</span>
                   </div>`
      let elem = this._replaceHTML(this.elem)
      this.$vote = elem.querySelector('.vote')
      
      elem.addEventListener('click', e => {
        this._handleClick(e)
      })

      return this
    })


  let voter = new Voter({
    elem: document.getElementById('voter'),
    id: 'voter'
  });

  document.getElementById('voter').addEventListener('change', function(e) {
    alert( e.detail ); // новое значение голоса
  });

  voter.setVote(5);

}
// task1()



/*Task 3

Перепишите решение задачи Список с выделением в виде компонента.
У компонента должен быть единственный публичный метод getSelected(),
который возвращает выбранные значения в виде массива.

Добавьте в решение задачи Компонент: список с выделением событие select.
Оно должно срабатывать при каждом изменении выбора и в свойстве detail содержать список выбранных строк.
Во внешнем коде добавьте обработчик к списку, который при изменениях выводит список значений.

*/

function task2 () {
  
  const SelectableList = stampit()
    .refs({
      element: null,
      onSelect: null,
      selectedClass: 'selected' 
    })
    .init(function({instance, stamp, args}) {
      let lastSelectedIdx = 0
         ,findItemIdx = (item, items) => _.indexOf(items, item)
         ,getSelectedItems = () => $(`.${this.selectedClass}`, this.element)
      
      let hltBulk = (item, items) => {
        let crtItemIdx = findItemIdx(item, items)
        _(items)
          .filter((i, idx) => {
            if (lastSelectedIdx > crtItemIdx) {
              return idx <= lastSelectedIdx && idx >= crtItemIdx
            } 
            else {
              return idx >= lastSelectedIdx && idx <= crtItemIdx
            }
          }).forEach(itm => {
            itm.classList.add(this.selectedClass)
          }).value()
        }

      let hltCurrent = (item, items) => {
        _.forEach(items, item => {
            item.classList.remove(this.selectedClass)
          })
        item.classList.add(this.selectedClass)
        lastSelectedIdx = findItemIdx(item, items)
      }

      let toggleCurrent = (item, items) => {
        item.classList.toggle(this.selectedClass)
        lastSelectedIdx = findItemIdx(item, items)
      }


      let handleClick = (evt) => {
        let crtItem  = evt.target
        let allItems = event.currentTarget.children

        if (crtItem.tagName !== 'LI') return

        if (evt.metaKey || evt.ctrlKey) toggleCurrent(crtItem, allItems)
        else if (evt.shiftKey)          hltBulk(crtItem, allItems)
        else                            hltCurrent(crtItem, allItems)

        this.onSelect(getSelectedItems())
      }

      this.element.addEventListener('click', handleClick)

    })
  
  

  let list = SelectableList({
    element: document.getElementById('list'),
    onSelect: function(selectedItems) {
      console.log('----------')
      $$(selectedItems).forEach(i => console.log(i))
    }
  })

}
task2()


/*Task 2

Напишите свой, самостоятельно оформленный, селект.

Требования:

Открытие и закрытие по клику на заголовок.
Закрытие селекта происходит при выборе или клике на любое другое место документа, в том числе на другой аналогичный селект.
Событие "select" при выборе опции возникает на элементе селекта и всплывает.
Значение опции хранится в атрибуте data-value (HTML-структура есть в исходном документе).

*/

function task3 () {
  
  const Select = stampit()
    .refs({
      element: null,
      options: []
    })
    .static({
      template: 
        `<span class="select-current"><%= current %></span>
          <ul class="select-items">
            <% options.forEach(option => { %>
              <li class="select-item"><%= option %></li>
            <% }) %>
          </li>`
    })
    .methods({
      render: function() {
        let tpl = _.template(Select.template)({
          current: this.options[0],
          options: this.options
        })

        this.element.insertAdjacentHTML('afterBegin', tpl)
        this.element.classList.add('select')
      },
      open: function() {
        this.element.classList.add('is-opened')
      },
      close: function() {
        this.element.classList.remove('is-opened')
      },
      setItem: function(txt) {
        let current = this.element.querySelector('.select-current')
        current.textContent = txt

        let evt = new CustomEvent('select', {
          bubbles: true,
          detail: txt
        })

        current.dispatchEvent(evt)
      }
    })
    .init(function () {
      let isHasClass = (elem, cls) => elem.classList.contains(cls)

      this.render()

      document.body.addEventListener('click', (e) => {
        let isTargetClass = _.partial(isHasClass, e.target)
        this.close()

        if (isTargetClass('select-current')) {
          this.open()
        }
        else if (isTargetClass('select-item')) {
          this.setItem(e.target.textContent)
        }
      })
    })




  let s1 = Select({
    element: document.getElementById('select-1'),
    options: [
      'Птицы',
      'Рыбы',
      'Звери',
      'Динозавры',
      'Одноклеточные'
    ]
  })

  let s2 = Select({
    element: document.getElementById('select-2'),
    options: [
      'Плотоядные',
      'Травоядные',
      'Всеядные'
    ]
  })

  document.addEventListener('select', (e) => {
    document.getElementById('select-value')
            .textContent = `Last selected value is ${e.detail}`
  })

}
task3()

