/*

  Delegation pattern:

    - one handler on Parent, instead of many handlers at every Child
    - event.target contains Initial element that event occurs
    
  
  Tips: 
    - use event.target
    - filter needless elements (outer, or inner)
    - use .closest() to handle clicks on childrens of your real target

*/



/*Task 1

Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
Используйте делегирование событий. Один обработчик для всего.
*/

function task1 () {
  
  let handler = (evt) => {
    let target = evt.target
    if (!(target.className === 'remove-button')) return
    target.closest('.pane').remove()
  }
  msgContainer.addEventListener('click', handler)
}
task1()



/*Task 2
  
  Создайте дерево, которое по клику на заголовок скрывает-показывает детей:
  Использовать делегирование.
  Клик вне текста заголовка (на пустом месте) ничего делать не должен.
*/

function task2 () {

  let toggleVisibility = (node) => node.hidden = !node.hidden

  let handler = (evt) => {
    let target = evt.target
    if (!(target.tagName === 'SPAN' && target.nextElementSibling.tagName === 'UL')) return
    toggleVisibility(target.nextElementSibling)
  }

  tree.addEventListener('click', handler)
}
task2()



/*Task 3
  Сделать сортировку таблицы при клике на заголовок.

  Использовать делегирование.
  Код не должен меняться при увеличении количества столбцов или строк.
*/

function task3 () {
  let getRowText = (row, idx) => row.children[idx].textContent.toLowerCase()
  
  let toggleWrapper = (fn, initType) => {
    let sortType = initType

    return (...args) => {
      sortType = !sortType
      return fn(sortType, ...args)
    }
  }

  let reorderRows = (isAsc, tbody, idx) => {
    return Array.prototype.sort.call(tbody.rows, (a, b) => {
      if (isAsc) {
        return getRowText(a, idx) - getRowText(b, idx)  
      } else{
        return getRowText(b, idx) - getRowText(a, idx)
      }
    })
  }
  let reorderRowsCycled = toggleWrapper(reorderRows, true)

  let handler = (evt) => {
    let table = evt.currentTarget
    let tbody = table.tBodies[0]
    let target = evt.target
    if (!target.tagName === 'TH') return

    let orderedRows = reorderRowsCycled(tbody, target.cellIndex)
    Array.prototype.map.call(orderedRows, row => {
      getRowText(row, 0)
      debugger
    })
  }

  grid.addEventListener('click', handler)
}
task3()