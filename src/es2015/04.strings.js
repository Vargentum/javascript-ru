/*
Template strings
*/



function example1 () {

  //multistringing
  console.log(`some
               multiline string`);
  
  // interpolation support
  let a = 'interpolated'
  console.log(`my ${a} string`);


  // any expression can be interpolated
  let sum = (a, b) => a + b
  console.log(`Sum of 5 and 6 is ${sum(5,6)}`);

}
// example1()




/*
Template functions

  - first argument is array of string parts
    between interpolated params
  - rest params are all interpolated expression results
*/

function example2 () {

  let sum = (a, b) => a + b
  
  function strParse (strings, ...params) {
    console.log(strings);
    console.log(strings.raw);
    console.log(params);
  }

  let a = 'test'
  let b = 13

  let s = strParse`Some ${a}
                   string with another param ${b}
                   and sum of 5 and 4, that is ${sum(5,4)}`
}
// example2()
