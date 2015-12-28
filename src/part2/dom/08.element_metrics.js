/*

metrics (read-only):

  .offsetParent - contains link to CSS positioning parent of element

  .offsetWidth / .offsetHeight - total width / height element (with borders and scroll)

  .offsetLeft / .offsetTop - distance from top/left offsetParent corner to top/left element corner

  
  .clientWidth / .clientHeight - width / height without borders and scroll

  .clientTop / .clientLeft - height top border / width left border
                             hint: in rtl system to .clientLeft value will be added size of scroll


  .scrollWidth / .scrollHeight - full width / height of scrolled element

  .scrollTop / .scrollLeft - height of scrolled top part of element
                             width of scrolled left part of element 
                             hint: this props is `writable`, changing of them triggers browser to scroll element

*/


/*Task 1

Найти размер прокрутки снизу
важность: 5решение
Свойство elem.scrollTop содержит размер прокрученной области при отсчете сверху. 
А как подсчитать размер прокрутки снизу?

Напишите соответствующее выражение для произвольного элемента elem.
Проверьте: если прокрутки нет вообще или элемент полностью прокручен — оно должно давать ноль.
*/

/**/


function task1 () {
  
  Object.defineProperty(Element.prototype, 'scrollBottom', {
    get: function() {
      return this.scrollHeight - this.scrollTop - this.clientHeight
    },

    set: function(val) {
      let diff = this.scrollTop + this.scrollBottom - val
      this.scrollTop = diff > 0 ? diff : 0
    }, 
  })

  console.log(scrolled.scrollBottom, scrolled.scrollTop)
  scrolled.onscroll = () => console.log(Math.floor(scrolled.scrollBottom), Math.floor(scrolled.scrollTop))

}
// task1()




/*Task 2

Узнать ширину полосы прокрутки

*/
function task2 () {
  Object.defineProperty(Element.prototype, 'scrollBarWidth', {
    get: function () {
      let getCssVal = prop => parseFloat(getComputedStyle(this)[prop])
      return this.offsetWidth - 
             this.clientWidth -
             getCssVal('borderRightWidth') - 
             getCssVal('borderLeftWidth')
    }
  })
  /*Note: left border can be accessed with this.clientLeft, 
          but access via CSS for consistency with right border*/

  console.log(scrolled.scrollBarWidth)
}
// task2()



/*Task 3
предотвратить схлопывание потока из-за придания элементу абсолютного позиционирования
Подсказка: склонировать элемент.

Решение: http://plnkr.co/edit/otsUUkLgtuCVGXUQotJ1?p=preview
*/



/* Task 4

Центрировать элемент на JS
Подсказка: простейшее центрирование

*/

function task4 () {
  let ctrJS = (elem) => {
    let pixelize = (val) => `${val}px`
    elem.style.position = "absolute"
    elem.style.top        = pixelize(elem.offsetParent.clientHeight / 2) // or '50%'
    elem.style.left       = pixelize(elem.offsetParent.clientWidth / 2)  // or '50%'
    elem.style.marginTop  = pixelize(elem.offsetHeight / -2)
    elem.style.marginLeft = pixelize(elem.offsetWidth / -2)
  }

  ctrJS(ball)

  //http://plnkr.co/edit/OMyifnplr6Hwsbtf17kw?p=preview
}
// task4()





/*Task 5
Задача — написать код, который «распахнет» <div> по ширине на всю страницу.
Исходный документ (<div> содержит текст и прокрутку):
*/

function task5 () {
  let reveal = elem => {
    elem.style.height = elem.scrollHeight + 'px' 
  }

  let revealToggler = (elem) => {
    let isScrollable = true
    let cache = {
      height: elem.offsetHeight
    }
    return () => {
      if (isScrollable) {
        elem.style.height = elem.scrollHeight + 'px' 
        isScrollable = false
      } else {
        elem.style.height = cache.height + 'px'
        isScrollable = true
      }
    }
  }

  let toggler = revealToggler(scrolled)

  scrolled.onclick = () => toggler()
}
task5()



/* Task 6

В чём отличия между getComputedStyle(elem).width (a) и elem.clientWidth (b)?
Укажите хотя бы три отличия, лучше — больше.

Решение:
  1. a - string with 'px' at the end, b - integer
  2. a - writable, b - read-only
  3. a - isn't count scroll width, b - is count
  4. a - can return `auto`

*/
