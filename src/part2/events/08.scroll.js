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

  let handleHelperClick = (type, e) => {
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
      helper.onclick = handleHelperClick.bind(this, 'toUp')
    } 
    else if (scrollY === 0  && isReturned) {
      activateHelperAs('toDown')
      helper.onclick = handleHelperClick.bind(this, 'toDown')
    }
    else if (scrollY <= docHeight) {
      activateHelperAs('hidden')
      isReturned = false
      helper.onclick = false
    }
  }

  document.addEventListener('scroll', setHelperBehavior)
}
// task2()



/*
Напишите код, который при прокрутке окна загружает ставшие видимыми изображения.

То есть, как только изображение попало в видимую часть документа – 
в src нужно прописать правильный URL из realsrc.

- При начальной загрузке некоторые изображения должны быть видны сразу, до прокрутки.

- Некоторые изображения могут быть обычными, без realsrc.
  Их код не должен трогать вообще.

- Также код не должен перегружать уже показанное изображение.

- Желательно предусмотреть загрузку изображений не только видимых сейчас,
  но и на страницу вперед и назад от текущего места.

*/

function task3 () {
  let cachedSrc = 'realsrc'

  let loadImg = (img) => {
    img.setAttribute('src', img.getAttribute(cachedSrc))
    img.removeAttribute(cachedSrc)
  }

  let loadImages = (visibleArea) => {
    $$(`img[${cachedSrc}]`)
      .forEach(img => {
        let imgTop = img.getBoundingClientRect().top + pageYOffset
        if (imgTop > visibleArea.bottom || imgTop < visibleArea.top) return
        loadImg(img)
    })  
  }

  let loadImagesHandler = (e) => {
    let visibleArea = {
      top: e.pageYOffset - window.innerHeight,
      bottom: e.pageYOffset + window.innerHeight
    }
    loadImages(visibleArea)
  }

  loadImagesHandler(window) // little tricky
  document.addEventListener('scroll', loadImagesHandler)
}
// task3()
