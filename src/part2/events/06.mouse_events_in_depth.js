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




Mouse movement:

  mouseover / mouseout - triggers when mouse "appears / go out" from element

    - event.relatedTarget - element that mouse 'come from / go to'
    - bubbles (delegation support)
    - parent -> child invokes additional mouseout (from parent)

  mouseenter / mouseleave - simple alternative to mouseover / mouseout
    - no bubbling
    - no parent -> child additional events
    
  
  relatedTarget === null, when mouse comes from position, behind the browser window


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


/*Task 2
Напишите JS-код, который будет показывать всплывающую подсказку над элементом, если у него есть атрибут data-tooltip.
Необходима поддержка вложенных элементов. При наведении показывается самая вложенная подсказка.
upgrade of 03.behavior_pattern.js task1
*/


function task2 () {

  class Tooltip {

    constructor() {
      this.tip = document.createElement('div')
      this.tip.classList.add('tooltip')
    }

    destroy() {
      document.body.removeChild(this.tip)
    }

    _setRelativeTo(target) {
      let targetCoords = target.getBoundingClientRect()
      let top;

      if (targetCoords.top > this.tip.offsetHeight) {
        top = targetCoords.top - this.tip.offsetHeight + 'px'
      } else {
        top = targetCoords.bottom + 'px'
      };
      this.tip.style.top = top
      this.tip.style.left = target.getBoundingClientRect().left + 'px'      
    }

    init(target, content) {
      this.tip.innerHTML = content
      document.body.appendChild(this.tip)
      this._setRelativeTo(target)
    }
  }
  

  const tooltip = new Tooltip()

  let tooltipController = (type, evt) => {
    let target = evt.target

    let getTipContent = elem => {
      while(target.parentElement){
        target = target.parentElement
        let ttp = target.dataset.tooltip
        if (ttp) return ttp
      }
      return
    }
    let targetContent = getTipContent(target)

    if (!targetContent) return;

    switch(type){
      case 'show':
        tooltip.init(target, targetContent)
        break;
      case 'hide':
        let relTargetContent = getTipContent(evt.relatedTarget)
        if (!relTargetContent && evt.relatedTarget.parentElement === target) return
        tooltip.destroy()
        break;
    }
  }


  document.addEventListener('mouseover', tooltipController.bind(this, 'show'))
  document.addEventListener('mouseout', tooltipController.bind(this, 'hide'))
}
task2()

