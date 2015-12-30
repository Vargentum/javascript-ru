/*

  Behavior Pattern

    - allows to use custom handlers DECLARATIVELY
    - via html-attributes / classes


  How? 
    - set-up attrs / classes
    
    - add handler to DOCUMENT
      - it handles ALL clicks
      - if it bubbles from right target => do some actions

*/


/*Task 1

  При наведении мыши на элемент, на нём возникает событие mouseover, при удалении мыши с элемента — событие mouseout.
  Зная это, напишите JS-код, который будет делать так, что при наведении на элемент,
  если у него есть атрибут data-tooltip — над ним будет показываться подсказка с содержимым этого атрибута.
  В этой задаче можно полагать, что в элементе с атрибутом data-tooltip — только текст, то есть нет подэлементов.
  
  Детали оформления:
    Подсказка должна появляться при наведении на элемент, по центру и на небольшом расстоянии сверху. При уходе курсора с элемента — исчезать.
    Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
    Оформление подсказки должно задаваться CSS.
    Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена. Если нельзя показать сверху — показывать снизу элемента.

  Важно: нужно использовать приём разработки «поведение», то есть поставить обработчик (точнее два) на document, а не на каждый элемент.
  Плюс этого подхода — динамически добавленные в DOM позже элементы автоматически получат этот функционал.
*/

function task1 () {

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
    let content = target.dataset.tooltip

    if (!content) return;

    switch(type){
      case 'show': tooltip.init(target, content)
        break;
      case 'hide': tooltip.destroy()
        break;
    }
  }


  document.addEventListener('mouseover', tooltipController.bind(this, 'show'))
  document.addEventListener('mouseout', tooltipController.bind(this, 'hide'))
}
task1()