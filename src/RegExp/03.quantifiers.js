/*
  Find digits:
  +7(903)-123-45-67

*/

function task1 () {

  // + quantifier usage: find digits
  console.log("+7(903)-123-45-67".match(/\d+/g))

  // ? quantifier usage: find color or colour
  console.log("Можно писать color или colour (британский вариант)".match(/\w+u?\w/g))

  // * quantifier usage: find digit with one zero after it
  console.log('1000, 100, 10, 1, 324203'.match(/\d0+/g));

  //restore correct floats: and get them
  console.log('100, .51, 1.14, 43n10, .442, 5402, 62.3fd, 60.2432'
                .replace(/\s\.\d+\b/g, (s) => "0" + s.trim())
                .match(/\b\d+\.\d+\b/g)) // convert .5 to 0.5

  // html tag without attributes
  console.log('<body class="test">lorem <div>test</div> <span>fdkj</span></body>'
                .match(/<[a-z]+>/ig))

  // html tag without attributes: updated. digit can be at any position, except first
  console.log('<h1 class="test">lorem <1h>test</1h><h2>rest</h2><time666>fdkj</time666></h1>'
                .match(/<[a-z][a-z0-9]*>/ig))

  /*
    get HTML tag
      - greedy mode: gets all to last close bracket 
        '<body class="test">lorem</body>'    
      
      - non-greedy:  gets only to first `>` occurrence: 
        '<body class="test">'
  */
    
  console.log('<body class="test">lorem</body>'
                .match(/<[a-z][a-z0-9]*\n*.*>/.ig))


}
// task1()




/*
Напишите регулярное выражения для поиска:
 - многоточий: трёх или более точек подряд.
 - HEX цвета
 - положительных чисел, в тч дробных
 - предыдущее плюс отрицательные числа (все десятичные числа)

*/


function task2 () {  
  function showMatched (str, ptrn) {
    console.log(str.match(ptrn))
  }

  let ellipsisPattern = /\.{3,}/g
  let hexPattern = /#[a-f0-9]{6}/ig
  let posPattern = /[^-]?\d+\.?\d*/g
  let allNumsPattern = /-?\d+\.?\d*/g

  showMatched("Привет!... Как дела?..... А это да..?", ellipsisPattern)
  showMatched("My color #0931 #09133fa is #fafafa and #6fap14", hexPattern)
  showMatched("-31, 14, 43.42, -15.05, 4103, af42410b, 0.5093, 0.53400", posPattern)
  showMatched("-31, 14, 43.42, -15.05, 4103, af42410b, 0.5093, 0.53400", allNumsPattern)

  /*Tips:
    wrap in () to add quantifiers to the part of regexp
    `-` doesnt need \ 
  */

  let posPatternU = /\d+(\.?\d*)?/g
  let allNumsPatternU = /-?\d+(\.?\d*)?/g
}
task2()

