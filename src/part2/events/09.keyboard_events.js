/*
  keydown / keyup: fired when key is down / up

    allow to get `event.keyCode` - unified code, represented for each key
      - layout agnostic
      - lettercase agnostic
      - 'Z'.keyCode === 'Z'.charPointAt(0)  (works for [a-zA-Z0-9])
  


  keypress: fired after keydown, if key generate a `symbol` (all keys except special, like F1, Ctrl ...)

    allow to get `event.charCode` - code for each pressed char
    crossbrowser function to get charcode, presented in `example1`


  
  You can prevent keyboard event to cancel user input



  all keyboard events support `modifier keys`: altKey / ctrlKey / shiftKey / metaKey
*/


function example1 () {
  
  /*Crossbroser function to get correct key symbol*/

  // event.type должен быть keypress
  function getChar(event) {
    if (event.which == null) { // IE
      if (event.keyCode < 32) return null; // спец. символ
      return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) { // все кроме IE
      if (event.which < 32) return null; // спец. символ
      return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
  }

}
// example1()




/*Task 1:
При помощи событий клавиатуры сделайте так, чтобы в поле можно было вводить только цифры. 
*/

function task1 () {
  
  let filterNonDigits = (e) => {
    let key = e.keyCode

    let isInside = (x,y) => key >= x && key <= y

    let isLetter       = () => isInside(65, 90)
    let isAriphmetics  = () => isInside(186, 192)
    let isPunctuation1 = () => isInside(186, 192)
    let isPunctuation2 = () => isInside(219, 222)
    let isSpecialMode = () => e.metaKey || e.shiftKey || e.altKey || e.ctrlKey


    if (!isSpecialMode() && isLetter() || isAriphmetics() || isPunctuation1() || isPunctuation2()) {
      e.preventDefault()
    }
  }

  numbersOnly.addEventListener('keydown', filterNonDigits)
}
// task1()



/*Task 2
Создайте функцию runOnKeys(func, code1, code2, ... code_n), 
которая запускает func при одновременном нажатии клавиш со скан-кодами code1, code2, …, code_n.

Например, код ниже выведет alert при одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)

  algo: 
    args -> ['c']

*/

function task2 () {

  const runOnKeys = (func, ...args) => {

    let pressedKeys = args.reduce((a,i) => {
      a[i] = false
      return a
    }, {})

    let isPressedAll = (keys) => {
      for(let key in keys){
        if (keys[key] === false) return false
      }
      return true
    }

    let setCurrentKeyStatus = (keys, status, e) => {
      if (keys[e.keyCode] !== undefined) {
        keys[e.keyCode] = status
      }
    }

    let handleDown = e => {
      setCurrentKeyStatus(pressedKeys, true, e)

      if (isPressedAll(pressedKeys)) {
        func.apply(null)  
      };
    }

    document.addEventListener('keydown', handleDown)
    document.addEventListener('keyup', setCurrentKeyStatus.bind(null, pressedKeys, false))
  }

  runOnKeys( () =>console.log('BT!'), "B".charCodeAt(0), "T".charCodeAt(0))
  runOnKeys( () =>console.log('YN!'), "Y".charCodeAt(0), "N".charCodeAt(0))

}
task2()
