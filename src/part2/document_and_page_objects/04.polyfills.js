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


