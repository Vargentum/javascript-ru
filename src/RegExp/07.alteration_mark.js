/*
Alteration mark |
used to chose one from some variants (OR)

Example: javascript|html|css

Similar to [ab] but not symbolic and can contain any
  - symbols
  - regexp parts

Alteration borders with ()
Example: /before(XXX|YYY)after/
         find beforeXXXafter or beforeYYYafter
*/

function example1 () {
  let reg = /html|css|javascript/ig
  let str = "Сначала появился HTML, затем CSS, потом JavaScript"

  console.log( str.match(reg) ) // 'HTML', 'CSS', 'JavaScript'
}
// example1()



/*
Существует много языков программирования, например Java, JavaScript, PHP, C, C++.
Напишите регулярное выражение, 
которое найдёт их все в строке «Java JavaScript PHP C++ C»
*/

function task1 () {
  let reg = /java(script)?|php|c(\+\+)?/gi
  let str = "There are Java JavaScript PHP C++ C and some other fine langugages."  
  console.log( str.match(reg) )
}
// task1()



/*
Найдите в тексте при помощи регэкспа строки в двойных кавычках "...".

В строке поддерживается экранирование при помощи слеша — 
примерно в таком же виде, как в обычных строках JavaScript.
То есть, строка может содержать любые символы, экранированные слэшем,
в частности: \", \n, и даже сам слэш в экранированном виде: \\.

Здесь особо важно, что двойная кавычка после слэша не оканчивает строку,
а считается её частью.
*/

function task2 () {
  let reg = /"[\s\S]+?[^\\]"/ig //can't get last occurrence
  let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\r\\n\\\\" .. ';
  console.log(str.match(reg)); //  .. "test me" .. "Скажи \"Привет\"!" .. "\r\n\\" ..

  //use greedy search
  let regG = /"(\\.|[^\\"])*"/ig //full worable
  console.log(str.match(regG)); //  .. "test me" .. "Скажи \"Привет\"!" .. "\r\n\\" ..
}
// task2()




/*
Напишите регулярное выражение, которое будет искать в тексте тег <style>.
Подходят как обычный тег <style>, так и вариант с атрибутами <style type="...">.

Но регулярное выражение не должно находить <styler>!

*/

function task3 () {
  let reg = /<(style)([\s\S]*?)>.*?<\/\1>/ig // why \2 not works? 
  let str = `<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>Learn javascript.ru</title><style type=text/css>body{color:red}</style><style>body{color:red}</style><styler>body {color: red}</styler><body><h1>Welcome learn.javascript.ru!</h1><script src=./RegExp/07.alteration_mark.js></script>`
  console.log(str.match(reg));
}
task3()

