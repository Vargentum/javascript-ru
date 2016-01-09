/*



*/

function example1 () {

  let calcBallCoords = (e) => {
    let shiftY = e.pageY - (ball.getBoundingClientRect().top + pageYOffset)
    let shiftX = e.pageX - (ball.getBoundingClientRect().left + pageXOffset)

    ball.style.top = e.pageY  - shiftY + 'px' // strange `shift` behavior
    ball.style.left = e.pageX - shiftX + 'px' // strange `shift` behavior
  }
  
  let dndStart = (e) => {
    if (e.target.getAttribute('id') !== 'ball') return
    ball.style.position = 'absolute'
    ball.style.zIndex = '999'
    calcBallCoords(e)
    container.addEventListener('mousemove', calcBallCoords)
  }

  let dndEnd = (e) => {
    ball.style.position = 'relative'
    ball.style.zIndex = 'auto'
    container.removeEventListener('mousemove', calcBallCoords)
  }

  ball.ondragstart = () => false
  container.addEventListener('mousedown', dndStart)
  container.addEventListener('mouseup', dndEnd)

}
// example1()



/*
Задача 1
Создайте слайдер:

Захватите мышкой синий бегунок и двигайте его, чтобы увидеть в работе.

Важно:

Слайдер должен нормально работать при резком движении мыши влево или вправо, за пределы полосы.
При этом бегунок должен останавливаться четко в нужном конце полосы.

При нажатом бегунке мышь может выходить за пределы полосы слайдера,
но слайдер пусть все равно работает (это удобно для пользователя).
*/

function task1 () {

  let changeMarkPos = (e) => {
    let lt = sliderMark.style.left
    let sliderRect = slider.getBoundingClientRect()
    if (parseInt(lt) > sliderRect.right) {
      sliderMark.style.left = sliderRect.right + 'px'
    } else{
      sliderMark.style.left = e.pageX - sliderRect.left + 'px'
    }
  }
  let dndStart = (e) => {
    sliderWrap.addEventListener('mousemove', changeMarkPos)  
  }
  let dndEnd = (e) => {
    sliderWrap.removeEventListener('mousemove', changeMarkPos)
  }
  sliderMark.ondragstart = () => false
  sliderMark.addEventListener('mousedown', dndStart)
  sliderMark.addEventListener('mouseup', dndEnd)
}
task1()
