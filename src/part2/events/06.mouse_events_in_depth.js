/*

  Two event types:

    Simple 
      - mouseup
      - mousedown
      - mouseover (mouse appears over element)
      - mouseout
      - mousemove

    Complex (consists of some simple)
      - click (mousedown, mouseup, click)
      - dbclick
      - contextmenu


  Event additional props

    event.which - what mouse button was pressed
      1 - left
      2 - center
      3 - right


    Keyboard modifiers - bool values, enabled when according button is pressed
      
      event.ctrlKey
      event.altKey
      event.shiftKey
      event.metaKey

    
    Coords of mouse pointer

      event.clientX / .clientY - relative to visible Window
      event.pageX / .pageY - relative to whole document
*/



/*Task 1

Сделайте список, элементы которого можно выделять кликом.

Добавьте мульти-выделение.  Если клик с нажатым Ctrl (Cmd под Mac), то элемент добавляется-удаляется из выделенных.

Добавьте выделение промежутков. Если происходит клик с нажатым Shift,
то к выделению добавляется промежуток элементов от предыдущего кликнутого до этого. 
При этом не важно, какое именно действие делал предыдущий клик.

Это похоже на то, как работает файловый менеджер в ряде ОС, но чуть проще,
так как конкретная реализация выделений различается у разных ОС, и её точное воспроизведение не входит в эту задачу.
*/

function task1 () {
  let lastSelectedIdx = 0
  
  let handler = (evt) => {
    let trgt = evt.target
    let mod = 'selected'
    let items = event.currentTarget.children

    let findItemIdx = itm => _.indexOf(items, itm)

    let hltBulk = itm => {
      let itmIdx = findItemIdx(itm)

      _(items)
        .filter((i, idx) => {
          if (lastSelectedIdx > itmIdx) {
            return idx <= lastSelectedIdx && idx >= itmIdx
          } 
          else {
            return idx >= lastSelectedIdx && idx <= itmIdx
          }
        }).forEach(item => {
          item.classList.add(mod)
        }).value()
    }

    let hltCurrent = itm => {
      _.forEach(items, item => {
          item.classList.remove(mod)
        })
      itm.classList.add(mod)
      lastSelectedIdx = findItemIdx(itm)
    }

    let toggleCurrent = itm => {
      itm.classList.toggle(mod)
      lastSelectedIdx = findItemIdx(itm)
    }

    if (trgt.tagName !== 'LI') return

    if (evt.metaKey || evt.ctrlKey) {
      toggleCurrent(trgt)
    } 
    else if (evt.shiftKey) {
      hltBulk(trgt)
    } 
    else {
      hltCurrent(trgt)
    }

  }

  list.addEventListener('click', handler)

}
task1()


/**/

