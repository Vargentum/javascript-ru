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


/*Задача 5*/




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

}
task6()