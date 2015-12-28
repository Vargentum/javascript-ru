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

function task2 () {
  
  if (Element.prototype.remove) return 

  Element.prototype.remove = function () {
    if (!this.parentElement) return
    this.parentElement.removeChild(this)    
    return this
  }
}


/*Задача 3:

Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.
*/
function task3 () {
  function insertAfter (elem, refElem) {
    let parent = elem.parentEement
    let next = refElem.nextElementSibling
    if(!parent) return
    parent.insertBefore(elem, next)
    return elem
  }
}


/*Задача 4:
Напишите функцию removeChildren, которая удаляет всех потомков элемента.
*/
function task4 () {
  function removeChildren(elem) {
    let removed = []
    while(elem.children.length > 0){
      removed.push(elem.removeChild(elem.children[0]))
    }
    return removed
  }

  console.log(removeChildren(table))
  console.log(removeChildren(ol))
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


/*Задача 5
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к UL.
Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.*/

function task5 () {
  let list = document.createElement('ul')
  document.body.appendChild(list)
  let usrInput = true
  let i = 1
  while(usrInput){
    usrInput = window.prompt("Add item to list?", `item ${i}`)
    if (!usrInput) return
    i++
    let item = document.createElement('li')
    item.textContent = usrInput
    list.appendChild(item)
  }
}
// task5()


/*Задача 6:
*/

function task6 () {
  let data = {
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

  function createDomTree (obj) {
    if (Object.keys(obj).length === 0) return

    let list = document.createElement('ul')
    for (let key in obj) {
      let item = document.createElement('li')
      item.innerHTML = key
      
      let subList = createDomTree(obj[key])
      if (subList) item.appendChild(subList)
      
      list.appendChild(item)
    }
    return list
  }

  document.body.appendChild(createDomTree(data))


  /*

  iterate through keys
  generate `li` with text (key)
  check if key contains object
    if true: call recursive
    add result of reqursion as list
  
  */


  function createDomTree1 (obj) {
    let items = ``

    for (let key in obj) {
      if (Object.keys(obj[key]).length === 0) items += `<li>${key}</li>`
      else items += `<li>${key} ${createDomTree1(obj[key])}</li>`
    };
    return items ? `<ul>${items}</ul>` : ``
  }

  document.body.innerHTML = createDomTree1(data)
}
// task6()




/*
Создать календарь в виде таблицы
Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).

Календарь должен быть таблицей, где каждый день — это TD. 
У таблицы должен быть заголовок с названиями дней недели, каждый день — TH.

Синтаксис: createCalendar(id, year, month).
Такой вызов должен генерировать текст для календаря месяца month в году year,
а затем помещать его внутрь элемента с указанным id.

Например: createCalendar("cal", 2012, 9) сгенерирует в <div id='cal'></div> следующий календарь:
*/



/*while g.getMonth = 0*/

function task7 () {

  const days = 'su, mo, tu, we, th, fr, sa'
  
  function createCalendar (id, year, month) {
    
    let mkDays = (dd) => {
      let days = dd.split(',').map(d => `<th>${d.trim()}</th>`).join('')
      return `<tr>${days}</tr>`
    }

    let mkNumbers = (year, month) => {
      let days = []
      let i = 1
      while(true){
        let day = new Date(year, month, i)
        if (day.getMonth() !== month) break
        days.push(day)
        i++;
      }


      let firstRow = ''

      while(condition){
        statement
      }

    }


    /*Problem:

      break days array into rows (7 items)
      sync days with day captions


    */


    return `<table id=${id}>
              ${mkDays(days)}
              ${mkNumbers(year, month)}
            </table>`
  }


  createCalendar('test', 1989, 1)
}
task7()


