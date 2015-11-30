/*
  Destructuring - special assignment syntax
*/

/* array examples 
(use var instead of let to prevent errors with equal naming)
*/
function example1 () {
  
  //simple
  var [name, surname] = ["vlad", "argentum"]
  console.log(name, surname); //vlad argentum

  
  // you can skip some values
  var [, , position] = ["vlad", "argentum", "web-developer", 26]
  console.log(position); //web-developer


  //no error when assign empty values
  var [name, surname] = []
  console.log(name, surname); //undefined undefined

  
  //you can add values by default
  var [name="Guest", surname="Anonymous"] = []
  console.log(name, surname); //Guest Anonymous


  //default can be any expression, even function
  function getSurName () {
    return Date.now() + '-visitor'
  }
  var [name, surname=getSurName()] = ["vlad"]
  console.log(name, surname);    //vlad nnnnnnnnnnn-visitor
}
// example1()



/*Object examples
(use var instead of let to prevent errors with equal naming)
*/
function example2 () {

  var me = {
    name: "vlad",
    surname: "argentum",
    position: "web-developer"
  }

  //base object destructuring
  var {name, surname} = me
  console.log(name, surname); //vlad argentum


  //custom variable assigning
  var {name: nm, surname: snm} = me
  console.log(nm, snm);//vlad argentum


  //default values
  var {name="Guest", surname="Anon"} = {}
  console.log(name, surname);  //Guest Anon


  //custom default values 
  var {name:nm="Guest", surname:snm="Anon"} = {}
  console.log(nm, snm);  //Guest Anon


  /*
    spread operator: 
      - only with Babel Exprimental features enable
      - by default caused to error
  */
  // let {name, ...rest} = me

}
// example2()



/*
  Destructuring without definition
*/
function example3 () {
  let a, b;

  /*
    {a, b} = {a:1, b:2}
    this is causes to error, because interpreter treats
    {...} as a block
  */

  ({a, b} = {a:1, b:2}) //correct usage
}



/*
  Nested destructuring
*/
function example4 () {
  
  let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Salad", "Apple"]
  }

  let {title="Menu", size:{width:w, height:h}, items:[a,b]} = options
  console.log(title);
  console.log(w, h);
  console.log(a, b);

}
// example4()