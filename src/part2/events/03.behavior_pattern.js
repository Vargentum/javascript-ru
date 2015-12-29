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
      init(parent)
    }

    destroy() {

    }

    init() {

    }
  }
  const tip = new Tooltip()


  let tooltipShow = (evt) => {
    let target = evt.target
    let content = target.dataset(tooltip)

    if (!content) return;
    tip.init(target, content)
  }

  let tooltipHide = (evt) => {
    
    tip.destroy()
  }


  document.addEventListener('mouseover', showTooltip)
  document.addEventListener('mouseout', hideTooltip)
}
task1()