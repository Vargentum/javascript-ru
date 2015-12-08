/*

Capturing groups allows to:

  - exclude parts of founded result in separate elemens via 
    - string.match() no global mode (example2)
    - regexp.exec() with global mode (example3)

  - accept Quantifier to the whole group (example1)


  When CG not required and not matched, 
  array element will be created and equals `undefined` (example5)


  Exclude CG from remembering in separate array element with ?:
  (?:go) (example6)

*/

function example1 () {
  
  let r1 = /abc+/g    // find 'abcccccc'
  let r2 = /(abc)+/g  //find "abcabcabc"

  console.log(r1.test('abccccc') === r2.test('abcabcabc')) //true
}
// example1()



function example2 () {
  let str = '<h1>Привет, мир!</h1>';
  let reg = /<(.+?)>/

  console.log(str.match(reg)) // ["<h1>", "h1"]
}
// example2()



function example3 () {
  let str = '<h1>Привет, мир!</h1>';
  let reg = /<(.+?)>/g
  let match
  
  while((match = reg.exec(str)) != null){
    console.log(match)
  }
  //1. <h1>, h1
  //2. </h1>, /h1
}
// example3()



function example4 () {
  let str = `<span class="my">`
  let reg = /<([^/].+?)\s*(class=".*?")>/g
  let regOrig = /<(([a-z]+)\s*([^>]*))>/g

  let match

  while((match = regOrig.exec(str)) != null){
    console.log(match)
  }
}
// example4()



function example5 () {
  let reg = /a(b)?(c)?/

  console.log('a'.match(reg)) // a, undefined, undefined
  console.log('ack'.match(reg)) //ac, undefined, c
}
// example5()



function example6 () {
  let reg = /(go)+/
  let regExcluded = /(?:go)+/

  console.log('gogogo'.match(reg)) //gogogo, go
  console.log('gogogo'.match(regExcluded)) // gogogo
}
// example6()





/*
  Find Hex color in format `#abc` or `#abcdef`
*/
function task1 () {
  let hexReg = /#([0-9a-f]{3}){1,2}\b/ig
  let str = "#abc #01f #o01 #aabbcc #0f9oa4 test lers #1 #12 #1234 #12345 #1234567 #12345678"
  console.log(str.match(hexReg))

  /*
    100% correct decision, but there is another way: 
    not such elegant, but also workable
  */
  let hexAnother = /#[0-9a-f]{3}([0-9a-f]{3})?\b/ig
  console.log(str.match(hexAnother))
}
// task1()



/*
  Напишите функцию, которая будет получать выражение и возвращать массив из трёх аргументов:

    Первое число.
    Оператор.
    Второе число.
*/
function task2 () {
  
  function destruct (expr) {
    return expr.match(/(\s?-?\d+?\.?\d*\s*)([\+\-\*\/])(\s?-?\d+?\.?\d*\s*)/)
               .slice(1,4)
               .map(x => x.trim())
  }
  console.log(destruct("1*2"))
  console.log(destruct("1 + 2"))
  console.log(destruct("1.4 - 2.4"))
  console.log(destruct("-1.44 / -2.4"))

  /*Tip: 
    wrap to CG float part of number. make it no-rechable with :? 
    in [] you may not to ecranize operator symbols but make `-` (minus) first or last
  */
  let wrapFloat = /-?\d+(:?\.\d*)?/
  let idealOperatorGroup = /[-+*/]/
}
task2()