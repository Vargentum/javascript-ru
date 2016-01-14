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
  const types = {
    static: 'div',
    editable: 'textarea'
  }
  const checkHotkey = (e, key) => e.keyCode === key.toUpperCase().charCodeAt(0) && e.ctrlKey
  const checkEscapeKey = (e) => e.keyCode === 27
  const cloneAs = (src, type) => {
    let clone = document.createElement(type)
    $$(src.attributes).forEach(attr => {
      clone.setAttribute(attr.name, attr)
    })
    return clone
  }

  const Editable = function(content, keydownHandler, src) {
    let elem = cloneAs(src, 'textarea')
    elem.addEventListener('keydown', keydownHandler)
    elem.value = content
    return elem
  }

  const Static = function (content, keydownHandler, src) {
    let elem = cloneAs(src, 'div')
    elem.addEventListener('keydown', keydownHandler)
    elem.textContent = content
    return elem
  }


  $('[data-editable]').forEach(elem => {
    let lastSavedTxt = ''

    let handler = function (e) {
      let replacer = null
      // editing static
      if (checkHotkey(e, "E") && this.tagName.toLowerCase() === types.static) {
        replacer = new Editable(this.textContent, handler, this)
      }
      // saving
      else if (checkHotkey(e, "S")) {
        lastSavedTxt = this.value
        replacer = new Static(this.value, handler, this)
      }
      // unsaved
      else if (checkEscapeKey(e)) {
        replacer = new Static(lastSavedTxt, handler, this)
      }
      // ignore other keys
      else {return}

      this.parentElement.replaceChild(replacer, this)
      replacer.focus()
    }

    elem.addEventListener('keydown', handler)
  })

}
task3()




/*Task 4
Сделать ячейки таблицы td редактируемыми по клику.

При клике – ячейка <td> превращается в редактируемую, можно менять HTML.

Размеры ячеек при этом не должны меняться.
В один момент может редактироваться одна ячейка.

При редактировании под ячейкой появляются кнопки для приема и отмена редактирования,
только клик на них заканчивает редактирование.

*/

function task4 () {
  const Editable = function(origin) {
    this.parent = origin
    this.area = document.createElement('textarea')
    this.area.classList.add('cell-editable')
    this.area.value = origin.innerHTML
  }
  Editable.prototype.destroy = function () {
    this.parent.removeChild(this.area)
    this.parent.removeChild(this.controls)
    return this
  }
  Editable.prototype.init = function () {
    this.parent.appendChild(this.area)
    this.parent.appendChild(this.controls)
    this.area.focus()
    return this
  }
  Editable.prototype.createControls = function(controlsTemplate) {
    this.controls = document.createElement('div')
    this.controls.classList.add('editable-control-wrap')
    
    controlsTemplate.forEach(control => {
      let btn = document.createElement('button')
      btn.classList.add('editable-control')
      btn.textContent = control.name
      btn.onclick = control.handler
      this.controls.appendChild(btn)
    })
    return this
  }

  let isEditing = false
  const table = document.getElementById('bagua-table')

  table.addEventListener('click', e => {
    let cell = e.target

    if (isEditing || cell.tagName !== 'TD') return;

    isEditing = true
    let lastSavedContent = cell.innerHTML
    let editable = new Editable(cell)

    editable
      .createControls([
        {
          name: 'Save',
          handler: e => {
            editable.destroy()
            isEditing = false
            cell.innerHTML = editable.area.value
          }
        },
        {
          name: 'Cancel',
          handler: e => {
            editable.destroy()
            isEditing = false
            cell.innerHTML = lastSavedContent
          }
        }
      ])
      .init()
  })
    
}
task4()



/*Task 5
  Создайте для <input type="password"> красивый, стилизованный плейсхолдер, например (кликните на тексте):
  
  Пропустил: task1 аналогичный, только сложнее
*/




/*Task 6
  Создайте поле, которое будет предупреждать пользователя, если включен CapsLock. Выключение CapsLock уберёт предупреждение.

*/

function task6 () {
  let Alert = function (text) {
    let alert = document.createElement('span')
    alert.classList.add('error-alert')
    alert.textContent = text
    return alert
  }
  const capsLockCode = 20
  
  $('[data-capslock-detect]').forEach(input => {
    let alert = null
    
    input.onkeydown = function (e) {
      if (e.keyCode !== capsLockCode) return
      alert = new Alert('Capslock enabled!')
      this.parentElement.appendChild(alert)
    }

    input.onkeyup = function(e) {
      if (e.keyCode !== capsLockCode || !alert) return
      this.parentElement.removeChild(alert)
    }

    input.onblur = function(e) {
      if (!alert) return
      this.parentElement.removeChild(alert)
    }

    input.onfocus = function(e) {
      let kv = new KeyboardEvent('keydown', {
        keyCode: capsLockCode
      })
      let ku = new KeyboardEvent('keyup')
      
      this.dispatchEvent(kv)
      this.dispatchEvent(ku)
    }
  })

}
task6()


