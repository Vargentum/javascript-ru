/*Useful functions*/

const $ = (query="*") => Array.prototype.slice.call(document.querySelectorAll(query))
const $$ = (array=[]) => Array.prototype.slice.call(array)