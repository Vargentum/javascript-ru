/*
Greedy (by default)
  - maximum quantifier repeating
  - quantifier like {n,} * + cause to 
    - all string applying
    - backtracking phase


Lazy
  - minimum quantifier repeating
  - after applying each symbol - 
    checks with other pattern body


1. this is alternate logic to acheive the task with greedy quantifier
*/

function example1 () {
  let str = `The "witch" and her "broom" are alone.`

  let greedy = /".+"/g
  let lazy = /".+?"/g
  let greedyCorrect = /"[^"]+"/g //1
  
  console.log(str.match(greedy)) //"witch" and her "broom"
  console.log(str.match(lazy))  // "witch" "broom"
  console.log(str.match(greedyCorrect)) // "witch" "broom"

  "123 456".match(/\d+ \d+?/g) //123 4
}
// example1()


function task1 () {
  /*find the links 
    <a href="..." class="doc">, с любым содержанием href.*/

  let linksFinderG = /<a.*href=["']?.*["']?.*class=["']?doc["']?.*>/ig
  let linksFinderL = /<a.*?href=["']?.*?["']?.*?class=["']?doc["']?.*?/ig

  let str = `<a name="link" href="https://google.com/test?%afv" test="red" class="doc">, с любым содержанием href.</a>  <a name="link" href="https://google.com/test?%afv" test="red" class="doc">, с любым содержанием href.</a>`
  let str1 = `...<a href="link1" class="wrong">... <p style="" class="doc">...`

  //greedy isn't correct
  console.log(str.match(linksFinderG).length)

  //lazy works, but!
  console.log(str.match(linksFinderL).length)
  
  // it fails here 
  console.log(str1.match(linksFinderL))

}
// task1()



/*What shows?
Answer: 123 456
123 - from lazy
456 from greedy
*/

function task2() {
  console.log("123 456".match(/\d+? \d+/g) );
}
// task2()



/*
Регулярные выражения "[^"]*" и ".*?" — при выполнении одинаковы?

Иначе говоря, существует ли такая строка,
на которой они дадут разные результаты?
Если да — дайте такую строку.
*/

function task3 () {

  let g = /'[^']*/g //all
  let l = /'.*?'/g //all except /n

  let str = `'test \n rest'`
  console.log(str.match(g))
  console.log(str.match(l))
}
// task3()



/*Find html comments*/

function task4 () {
  let str = '<!DOCTYPE html><html lang=en><!-- another comment --><head><meta charset=UTF-8><!-- some \n comment --><title>Learn javascript.ru</title><body><h1>Welcome learn.javascript.ru!</h1><script src=./RegExp/04.greedy_and_lazy.js></script>'

  let filterComments = /<!--.*?\n*?.*?-->/gi
  let filterCommentsBetter = /<!--[/s/S]+?-->/gi
  let filterCommentsGreedy = /<!--[^-->]+-->/ig

  console.log(str.match(filterComments))
  console.log(str.match(filterCommentsBetter))
  console.log(str.match(filterCommentsGreedy))

}
task4()




/*Find all html tags with attributes*/

function task5 () {
  let str = ' some fdkaf;j <> <a href="/"> sdfasdf <input type="radio" checked> <b>';
  let filterTags = /<.+?>/gi
  let filterTagsU = /<[^>]+>/gi

  console.log(str.match(filterTags))
  console.log(str.match(filterTagsU))
}
task5()