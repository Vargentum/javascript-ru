/*
  Property improvements
*/


//short property notation

function example1 () {

  let name = "Vlad"
  let surname = "Argentum"

  let me = {name, surname} //equal to {name: name, surname: surname}
  console.log(me);

}
// example1()





//expression key notation

function example2 () {
  
  let a = "about"
  let j = `${a}_job`

  let object = {
    [a]: "description",
    [j]: 'some text'
  }

  console.log(object);
}
// example2()





/*
  Prototype get/set
*/


function example3 () {
  
  Object.getPrototypeOf(obj)
  Object.setPrototypeOf(obj, newProto) //can be used instead of Object.create(proto)

}
// example3()





/*
  Object.assign(obj, o1, o2, ... oN) 
  - merges properties to obj from o1, o2, ... oN
  - modify the first argument


*/

function example4 () {
  
  let body = {name: "John", surname: "Doe", gender: "man"}
  let b =    {isDead: true, legs: [1,1]}
  let c =    {name: "Jane", gender: "woman"}

  Object.assign(body, b, c)
  console.log(body);


  //useful for 1-lvl deep cloning

  let clone = Object.assign({}, body)
  console.log('this is clone ', clone);
}
// example4()



/*
  Object.is(pro1, prop2)
  - equal to strict equality operator ===
  - but with has diffferences between NaN and +0 -0 equality
*/

function example5 () {
  // Сравнение +0 и -0
  console.log( Object.is(+0, -0)); // false
  console.log( +0 === -0 );        // true

  // Сравнение с NaN
  console.log( Object.is(NaN, NaN) ); // true
  console.log( NaN === NaN );         // false
}
// example5()




/*
  Object methods 
  - new syntax
  - has [[HomeObject]], that points to object that contains this method
*/


function example6 () {
  
  let user = {
    name: "John",
    surname: "Doe",
    sayHi () {
      console.log(`Hi, I'am ${this.name} ${this.surname}`);
    },

    get fullName () {
      console.log(`${this.name} ${this.surname}`);
    },

    set fullName (str) {
      [this.name, this.surname] = str.split(' ')
    }
  }
  user.sayHi();
  user.fullName = 'Vlad Argentum'
  user.sayHi();
}
// example6()




/*
  Super keyword
  
  1 standart defined inheritance
  2 get access to parent method (via prototype)

  super in depth: 
    - access to [[HomeObject]] of current method
    - get its __proto__

  3. Works only with methods
 
  4. But works inside Arrow functions
     - arrow function hasnt its own super (similar to 'this')
     - super gets from outside funciton
*/


function example7 () {
  
  let animal = {
    walk() {
      console.log(`I'am walking`);
    }
  }

  let rabbit = {
    __proto__: animal, // 1 

    walk() {
      super.walk()  // 2
    },

    //3
    // walk: function() {
    //   super.walk() // Error
    // }


    //4
    walk1() {
      setTimeout(() => super.walk())
    }

  }
  rabbit.walk()
  rabbit.walk1()
}
// example7()





function example () {
  


}
// example()