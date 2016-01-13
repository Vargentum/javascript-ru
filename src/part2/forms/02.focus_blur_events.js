/*
  Events

    focus - when user focuses on input / textarea /selectbox
    blur - when focus lost

    no bubbling, but can be triggered on Capturing phase
   
    focusin / focusout - same, but bubbles
      no FF support :(


  tabIndex

    control focus with `tab` order: number value
    ! any elem with tabIndex has blur / focus events !
    
    some values:
      0 - make element focused last
      -1 - ignore tab on element


*/

function example1 () {
  
  age.onblur = (e) => {

    if (isNaN(age.value)) {
      age.classList.add('error')
      age.focus()
    } 
    else {
     age.classList.remove('error')
    }
  }


}
example1()



/*Task 1

Реализуйте более удобный плейсхолдер-подсказку на JavaScript через атрибут data-placeholder.

Правила работы плейсхолдера:
  Элемент изначально содержит плейсхолдер. Специальный класс placeholder придает ему синий цвет.
  При фокусировке плейсхолдер показывается уже над полем, становясь «подсказкой».
  При снятии фокуса, подсказка убирается, если поле пустое – плейсхолдер возвращается в него.
*/

function task1 () {
  let form = document.getElementById('placeholderWrap')
  let tip = null
  let isContainsPlaceholder = input => input.dataset.placeholder
  let createTip = (value) => {
    let tip = document.createElement('span')
    tip.classList.add('placeholder-tooltip')
    tip.innerHTML = value
    document.body.appendChild(tip)
    return tip
  }

  let setPlaceholderFor = input => {
    input.value = input.dataset.placeholder
  }
  
  document.addEventListener('DOMContentLoaded', (e) => {
    $('input[data-placeholder]').forEach(input => {
      setPlaceholderFor(input)
    })
  })

  form.addEventListener('focus', e => {
    let input = e.target

    if (!isContainsPlaceholder(input)) return false
    input.value = ''
    tip = createTip(input.dataset.placeholder)
    tip.style.top = input.offsetTop - tip.offsetHeight + 'px'
    tip.style.left = input.offsetLeft + 'px'
  }, true)

  form.addEventListener('blur', e => {
    let input = e.target
    if (!isContainsPlaceholder(input)) return false
    setPlaceholderFor(input)
    tip.parentElement.removeChild(tip)
  }, true)
}
task1()

/*Enlightment:
  instead of clojure `tip` you can use element.tip (custom dom property)
  useful, if you need to show 2 or more `tips`
*/




/*Task 2
 Кликните по мышонку. Затем нажимайте клавиши со стрелками, и он будет двигаться.
В этой задаче запрещается ставить обработчики куда-либо, кроме элемента #mouse.
Можно изменять атрибуты и классы в HTML.

http://plnkr.co/edit/kLh0yqbi6ircDNH4MSdW?p=preview
*/

function task2 () {
  const mouse = document.getElementById('mouse')
  const directions = ['left', 'top', 'right', 'bottom']
  const isArrow = (type, code) => {
    switch(type){
      case 'left'   : return code === 37
      case 'top'    : return code === 38
      case 'right'  : return code === 39
      case 'bottom' : return code === 40
      default       : return false
    }
  }
  const shift = (elem, dir, step=25) => {
    switch(dir){
      case 'left'   : elem.style.left = (parseInt(elem.style.left) || 0) - step + 'px'; break
      case 'right'  : elem.style.left = (parseInt(elem.style.left) || 0) + step + 'px'; break
      case 'top'    : elem.style.top = (parseInt(elem.style.top) || 0) - step + 'px'; break
      case 'bottom' : elem.style.top = (parseInt(elem.style.top) || 0) + step + 'px'; break
      default       : return false
    }
  }

  mouse.addEventListener('keydown', function (e) {
    directions.forEach(dir => {
      if (!isArrow(dir, e.keyCode)) return
      shift(this, dir)
    })
  })
}
task2()




/*Task 3

Создайте <div>, который при нажатии Ctrl+E превращается в <textarea>.
Изменения, внесенные в поле, можно сохранить обратно в <div> сочетанием клавиш Ctrl+S, при этом 
<div> получит в виде HTML содержимое <textarea>.

Если же нажать Esc, то <textarea> снова превращается в <div>, изменения не сохраняются.
*/

function task3 () {

  const checkHotkey = (e, key) => e.keyCode === key.toUpperCase().charCodeAt(0) && e.ctrlKey
  const checkEscapeKey = (e) => e.keyCode === 27

  const Editable = function(type, content, keydownHandler, origin) {
    let elem = document.createElement(type)

    for (let key in origin.attributes) {
      elem.attributes[key] = origin.attributes[key]
      debugger
    }

    if (content) {
      elem.value ? elem.value = content : elem.textContent = content  
    }
    elem.addEventListener('keydown', keydownHandler)
    return elem
  }

  $('[data-editable]').forEach(elem => {

    let handler = function (e) {
      let editable = null
      // editing
      if (checkHotkey(e, "E")) {
        editable = new Editable('textarea', this.textContent, handler, this)
      } 
      // saving
      else if (checkHotkey(e, "S")) {
        editable = new Editable('div', this.value, handler, this)
      }
      // unsaved
      else if (checkEscapeKey(e)) {
        editable = new Editable('div', null, handler, this)
      }
      else {return}
      this.parentElement.replaceChild(editable, this)
    }

    elem.addEventListener('keydown', handler)
  })

}
task3()



