/*

  elem.getBoundingClientRect()
  
    return object, containg 
      top
      left
      right
      bottom 
    coordinates of `elem`


  document.elemFromPoint(x, y)

    return element that holding x, y points
    how about two elements? if overlapping
*/



/* Task 1
find 
  outer top-left corner
  outer bottom-right corner
  inner top-left corner
  inner bottom-right corner
*/

function task1 () {
  let field = document.getElementById('scrolled')
  let stringify = (x, y) => `${x}, ${y}`
  let fieldRect = field.getBoundingClientRect()
  let getStyleVal = (elem, prop) => parseInt(getComputedStyle(field)[prop])
  
  let topLeftOuter =     stringify(fieldRect.left, fieldRect.top)
  let bottomRightOuter = stringify(fieldRect.right, fieldRect.bottom)
  let topLeftInner =     stringify(fieldRect.left + field.clientLeft
                                  ,fieldRect.top + field.clientTop)
  let bottomRightInner = stringify(fieldRect.right - getStyleVal(field, 'borderRightWidth')
                                  ,fieldRect.bottom - getStyleVal(field, 'borderBottomWidth'))

  console.log(topLeftOuter) 
  console.log(topLeftInner) 
  console.log(bottomRightOuter) 
  console.log(bottomRightInner) 
}
// task1()




/*Task 2

Создайте функцию positionAt(anchor, position, elem),
которая позиционирует элемент elem, в зависимости от position,
сверху ("top"), справа ("right") или снизу ("bottom") от элемента anchor.

Используйте её, чтобы сделать функцию showNote(anchor, position, html),
которая показывает элемент с классом note и текстом html
на позиции position рядом с элементом anchor.


Enlightment: 
  use TOP / LEFT properties when set up positioning of FIXED element
    and use top/left/right/bottom of `anchor` to get coords


*/

function task2 () {
  let positionAt = (anchor, position, elem) => {
    elem.style.position = 'fixed'
    switch(position){
      case 'top':
        elem.style.top = anchor.getBoundingClientRect().top - elem.offsetHeight + 'px'
        elem.style.left = anchor.getBoundingClientRect().left + 'px'
        break
      case 'left':
        elem.style.left = anchor.getBoundingClientRect().left - elem.offsetWidth + 'px'
        elem.style.top = anchor.getBoundingClientRect().top + 'px'
        break
      case 'bottom':
        elem.style.top = anchor.getBoundingClientRect().bottom + 'px'
        elem.style.left = anchor.getBoundingClientRect().left + 'px'
        break
      case 'right':
        elem.style.left = anchor.getBoundingClientRect().right + 'px'
        elem.style.top = anchor.getBoundingClientRect().top + 'px'
        break
    }
  }

  let showNote = (anchor, position, html) => {
    let note = document.createElement('div')
    note.className = 'note'
    note.innerHTML = html
    document.body.appendChild(note)
    positionAt(anchor, position, note)
  }

  ['top', 'right', 'bottom', 'left'].map(dir => {
    showNote(scrolled, dir, `Hello note at ${dir} !`)
  })

}
task2() 