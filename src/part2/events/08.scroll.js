/*
Сделайте так, чтобы при прокрутке ниже элемента 
#avatar (картинка с Винни-Пухом) – он продолжал показываться в левом-верхнем углу.

При прокрутке вверх – должен возвращаться на обычное место.

Solve with markup: http://plnkr.co/edit/JDSm7hVgXoVVQdxgAjcr?p=preview
*/

function task1 () {
  let fixElem = elem => {
    elem.style.position = 'fixed'
    elem.style.left = '0'
    elem.style.top = '0'
  }
  let restoreElem = elem => {
    elem.style.position = 'static'
  }
  let elemPosHandler = (elem, elemY, evt) => {
    window.pageYOffset >= elemY ? fixElem(elem) : restoreElem(elem)
  }

  let avatarStartY = avatar.getBoundingClientRect().top + window.pageYOffset
  document.addEventListener('scroll', elemPosHandler.bind(null, avatar, avatarStartY))
}
// task1()



/*Task 2

Создайте кнопку навигации, которая помогает при прокрутке страницы.

Работать должна следующим образом:

Пока страница промотана меньше чем на высоту экрана вниз – кнопка не видна.
При промотке страницы вниз больше, чем на высоту экрана, появляется кнопка «стрелка вверх».
При нажатии на нее страница прыгает вверх, но не только.
Дополнительно, кнопка меняется на «стрелка вниз» и при клике возвратит на старое место. 
Если же в этом состоянии посетитель сам прокрутит вниз больше, чем один экран,
то она вновь изменится на «стрелка вверх».

*/
function task2 () {
  let helper = document.getElementById('scroll-helper')
  let lastPosition = null
  let isReturned = false

  let helperClickHandler = (type, e) => {
    switch(type){
      case 'toUp':
        window.scrollTo(0, 0)
        break;
      case 'toDown':
        window.scrollTo(lastPosition.left, lastPosition.top)
        break;
    }
  }

  let activateHelperAs = (type) => {
    switch(type){
      case 'toUp':
        helper.classList.remove('is-hidden')
        helper.classList.remove('is-down')
        helper.classList.add('is-up')    
        break;
      case 'toDown':
        helper.classList.remove('is-hidden')
        helper.classList.remove('is-up')
        helper.classList.add('is-down')    
        break;
      case 'hidden':
        helper.classList.remove('is-up')
        helper.classList.remove('is-down')
        helper.classList.add('is-hidden')    
        break;
    }
  }

  let setHelperBehavior = (e) => {
    let scrollY = window.pageYOffset
    let docHeight = window.innerHeight

    if (scrollY > docHeight) {
      activateHelperAs('toUp')
      lastPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
      }
      isReturned = true
      helper.onclick = helperClickHandler.bind(this, 'toUp')
    } 
    else if (scrollY === 0  && isReturned) {
      activateHelperAs('toDown')
      helper.onclick = helperClickHandler.bind(this, 'toDown')
    }
    else if (scrollY <= docHeight) {
      activateHelperAs('hidden')
      isReturned = false
      helper.onclick = false
    }
  }

  document.addEventListener('scroll', setHelperBehavior)
}
task2()

