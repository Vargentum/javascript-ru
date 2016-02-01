/*Useful functions*/

const $ = (query="*", elem=document) => Array.prototype.slice.call(elem.querySelectorAll(query))
const $$ = (array=[]) => Array.prototype.slice.call(array)


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


function cloneAs (src, type) {
  let clone = document.createElement(type)
  $$(src.attributes).forEach(attr => {
    clone.setAttribute(attr.name, attr)
  })
  return clone
}
