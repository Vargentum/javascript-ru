/*
Метод elem.matches(css) в некоторых старых браузерах поддерживается 
под старым именем matchesSelector или с префиксами,
то есть: webkitMatchesSelector (старый Chrome, Safari),
mozMatchesSelector (старый Firefox) 
или Element.prototype.msMatchesSelector (старый IE).

Создайте полифилл, который гарантирует стандартный синтаксис 
elem.matches(css) для всех браузеров.

*/


function task1 () {

  if (!Element.prototype.matches) {

    Element.prototype.matches = function(cssQuery) {

      return   this.matchesSelector
            || this.webkitMatchesSelector
            || this.mozMatchesSelector
            || this.msMatchesSelector
    }
  }
}

/*
  Enlightment: write following method into prototype.matches
               make check `before` method implementation
*/




/*
Метод elem.closest(css) для поиска ближайшего родителя,
удовлетворяющего селектору css, не поддерживается некоторыми браузерами, например IE11-.

Создайте для него полифилл.

*/


function task2 () {
  
  if (!Element.prototype.closest) {

    Element.prototype.closest = function(cssQuery) {
      [].prototype.forEach.call(this.querySelectorAll(cssQuery), (el) => {
        if (el === this.parentElement) return true;
      })
      return false
    }

  }
}


/*
Свойство textContent не поддерживается IE8. Однако, там есть свойство innerText.

Создаёте полифилл, который проверяет поддержку свойства textContent,
и если её нет — создаёт его, используя innerText.
Получится, что в IE8 «новое» свойство textContent будет «псевдонимом» для innerText.

Хотя свойство innerText и работает по-иному, нежели textContent,
но в некоторых ситуациях они могут быть взаимозаменимы. Именно на них направлен полифилл.

*/

function task3() {

  if (document.documentElement.textContent === undefined) {
    Object.defineProperty(HTMLElement.prototype, "textContent", {
      get: function() {
        return this.innerText
      },
      set: function(val) {
        this.innerText = val
      }
    })
  }
}
