/*

Widget: 
  
  - object that controls excisting DOM, or create its own one
  - only ONE element inside Widget Constructor
  - no ID inside markup
  - Delegation for handlers
  
  - Handlers call following methods, avoid `hard` logic in handlers
    - better readability
    - possibility to add public methods
  
  - Lazy DOM generation:
    - render if really need
    - increase performance at `Init loading stage`

    example: don't render Dropdown inside Menu, do it when user try to open it!


  - separate Public & Private methods

*/

function example1 () {
  
  function Menu (options) {
    
    let elem = null;

    function getElem() {
      if (!elem) render()
      return elem
    }


    function render() {
      elem = document.createElement('div')
      elem.classList.add('menu')
      document.body.appendChild(elem)

      let title = document.createElement('span')
      title.classList.add('menu-title')
      title.textContent = options.title
      elem.appendChild(title)


      elem.addEventListener('click', (e) => {
        if (!event.target.closest('.menu-title')) return
        toggle()
      })
    }


    function renderItems() {
      let list = document.createElement('ul')
      list.classList.add('menu-list')
      options.items.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        list.appendChild(li)
      })
      elem.appendChild(list)
    }


    function open() {
      let list = elem.querySelector('ul')
      if (!list) renderItems()
      elem.classList.add('is-open')
    }

    function close() {
      elem.classList.remove('is-open')
    }


    function toggle() {
      if (elem.classList.contains('is-open')) close()
      else open()
    }


    this.open = open
    this.close = close
    this.toggle = toggle
    this.getElem = getElem
  }




  // создать объект меню с данным заголовком и опциями
  let menu = new Menu({
    title: "Сладости",
    items: [
      "Торт",
      "Пончик",
      "Пирожное",
      "Шоколадка",
      "Мороженое"
    ]
  });

  // получить сгенерированный DOM-элемент меню
  let elem = menu.getElem();

  // вставить меню в нужное место страницы
  document.body.appendChild(elem);
}
// example1()









/* Task 1

Создайте компонент «Часы» (Clock).
Интерфейс:

var clock = new Clock({
  elem: элемент
});

clock.start(); // старт
clock.stop(); // стоп
Остальные методы, если нужны, должны быть приватными.

При нажатии на alert часы должны приостанавливаться, а затем продолжать идти с правильным временем.
*/



function task1 () {
  

  function Clock (options) {
    let elem = options.elem
    let timerId = null
    let stringifyTime = time => time < 10 ? `0${time}` : time

    function createSgmt(type) {
      let sgmt = document.createElement('span')
      sgmt.classList.add(`clock-${type}`)
      elem.appendChild(sgmt)
      return sgmt
    }

    function update(date) {
      let dateTpl = [{
        name: 'hour',
        time: date.getHours()
      },{
        name: 'minute',
        time: date.getMinutes()
      },{
        name: 'second',
        time: date.getSeconds()
      }]

      dateTpl.forEach(tpl => {
        let {name, time} = tpl
        let sgmt = elem.querySelector(`.clock-${name}`)

        if (!sgmt) sgmt = createSgmt(name)
        sgmt.textContent = stringifyTime(time)
      })
    }
    
    function start() {
      timerId = setTimeout(() => {
        update(new Date())
        start()
      }, 100)
    }

    function stop() {
      if (timerId) clearTimeout(timerId)
    }    

    this.start = start
    this.stop = stop
    start()
  }



  let clock = new Clock({
    elem: document.getElementById('clock')
  })

  let start = document.getElementById('clock-start')
  start.onclick = clock.start

  let stop = document.getElementById('clock-stop')
  stop.onclick = clock.stop

}
task1()







/* Task 2
Напишите функцию-конструктор new Voter(options) для голосовалки. Она должна получать элемент в options.elem, в следующей разметке:
  По клику на + и — число должно увеличиваться или уменьшаться.
  Публичный метод voter.setVote(vote) должен устанавливать текущее число – значение голоса.
  Все остальные методы и свойства пусть будут приватными.
*/

function task2 () {
  
  function Voter(options) {
    let elem = options.elem
    let elemId = elem.id
    let $vote = null
    let vote = 0
    let html = `<div id="${elemId}" class="voter">
                 <span class="down">—</span>
                 <span class="vote">${vote}</span>
                 <span class="up">+</span>
               </div>`

    function init() {
      elem.insertAdjacentHTML('beforeBegin', html)
      elem.parentElement.removeChild(elem)
      elem = document.getElementById(elemId)

      $vote = elem.querySelector('.vote')
      elem.addEventListener('click', function(e) {
        handleClick(e)
      })
    }

    function handleClick (e) {
      let vote = parseInt($vote.textContent)
      let isTarget = type => e.target.classList.contains(type)

      if (isTarget('down')) setVote(--vote)
      else if (isTarget('up')) setVote(++vote)
      else return
    }

    function setVote(vote) {
      $vote.textContent = vote
    }


    this.setVote = setVote
    init()
  }

  new Voter({
    elem: document.getElementById('voter')
  }).setVote(15)




}
// task2()







/*Task 3

Поменяйте стиль ООП в голосовалке, созданной в задаче Голосовалка на прототипный.
Внешний код, использующий класс Voter, не должен измениться.

*/

function task3 () {
  
  function Voter(options) {
    this.elem = options.elem
    this.elemId = this.elem.id
    this.$vote = null
    this.vote = 0
    this.html = `<div id="${this.elemId}" class="voter">
                 <span class="down">—</span>
                 <span class="vote">${this.vote}</span>
                 <span class="up">+</span>
               </div>`

    this.init()
  }

  Voter.prototype.init = function(){
    this.elem.insertAdjacentHTML('beforeBegin', this.html)
    this.elem.parentElement.removeChild(this.elem)
    this.elem = document.getElementById(this.elemId)

    this.$vote = this.elem.querySelector('.vote')
    this.elem.addEventListener('click', e => {
      this.handleClick(e)
    })
  };

  Voter.prototype.handleClick = function(e){
    this.vote = parseInt(this.$vote.textContent)
    let isTarget = type => e.target.classList.contains(type)

    if (isTarget('down')) this.setVote(--this.vote)
    else if (isTarget('up')) this.setVote(++this.vote)
    else return
  };


  Voter.prototype.setVote = function(vote) {
    this.$vote.textContent = vote
  }



  new Voter({
    elem: document.getElementById('voter')
  }).setVote(15)

}
task3()