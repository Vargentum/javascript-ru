/*
Best practice and most used query methods:

  elem.querySelectorAll( cssSelector )
  elem.querySelector( cssSelector )

cssSelector - any valid css selector string
examples: 'ul > li', '.test:hover .test_link', '#nav:last-of-type'
supports pseudoelements and pseudostates


Other methods:
  .getElementById()
  .getElementsByTagName()
  .getElementsByName()
  .getElementsByClassName()

*/





/*Task 1:
Ниже находится документ с таблицей и формой.

Все элементы label внутри таблицы. Должно быть 3 элемента.
Первую ячейку таблицы (со словом "Возраст").
Вторую форму в документе.
Форму с именем search, без использования её позиции в документе.
Элемент input в форме с именем search. Если их несколько, то нужен первый.
Элемент с именем info[0], без точного знания его позиции в документе.
Элемент с именем info[0], внутри формы с именем search-person.
*/

function task1 () {
  
  let labels = document.querySelectorAll('table label')
  let ageCell = document.querySelector('table td')
  
  let secondForm = document.querySelectorAll('form[name=search-person]')
  let secondForm1 = document.getElementsByName('search-person')

  let firstForm = document.querySelectorAll('form[name=search]')
  let firstForm1 = document.getElementsByName('search')
  let firstInputInFirstForm = firstForm[0].querySelector('input')

  let infoZeroInput = document.querySelectorAll('[name="info[0]"]')
  let secondFormZeroInput = secondForm[0].querySelectorAll('[name="info[0]"]')


  /*Enlightment:
    
    - querySelectorAll returns a Collection, not an Element itself.
      Add direct access with [0] for example, or use iteration

      Same for any getElements`Type` queries

    - wrap in string quotation "" to escape [ and ] characters inside query.
  */
}




/*
Есть дерево из тегов <ul>/<li>.

Напишите код, который для каждого элемента <li> выведет:

Текст непосредственно в нём (без подразделов).
Количество вложенных в него элементов <li> — всех, с учётом вложенных.
*/

function task2 () {

  let getItemInfo = (ul) => {
    Array.prototype.forEach.call(
      ul.querySelectorAll('li')
     ,li => {
        console.log(li.firstChild.data.trim(), li.querySelectorAll('li').length)
      }
    )
  }
  getItemInfo( document.querySelector('.test') )

  /*
  Enlightment: use .data to get inner content of node
               use .trim() to remove \n characters

  */
}
task2()
