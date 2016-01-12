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

