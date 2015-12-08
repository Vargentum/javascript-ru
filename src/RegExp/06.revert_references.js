/*
$n - work with n captured group ()
works with .replace() method

you can reorganize, or implement some new look to string
*/

function example1 () {
  let name = "Vlad Argentum"

  console.log(name.replace(/([a-z]+) ([a-z]+)/i, "$2 $1")) //Argentum Vlad
}
// example1()



/*
Use \n inside pattern to get reference to used part of patter:
1 - get reference to used type of quotation mark to properly handle the string

no access to excluded (:? groups)
*/

function example2 () {
  let str = "He said: \"She's the one!\".";
  
  let patternIncorrect = /["'].+?["']/gi
  let pattern = /(["']).+?\1/gi //1

  console.log(str.match(patternIncorrect))
  console.log(str.match(pattern))
}
// example2()