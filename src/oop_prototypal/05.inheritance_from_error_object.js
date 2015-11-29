/*Example 1: PropertyError class inherited from Error

Important Error specific details:

  1. error.name equal to Constructor name
  2. common practice to generate custom properties, which need
     for detail debug info
  3. in custom Error there is no stack property, but we can
    3.1. in V8 engine browsers get it with .captureStackTrace property
    3.2. for other, we generate from newly created Error object

  4. Parent constructor call isn't necessary but highly recommended, 
     it define special prop [[ErrorData]], that outputs in .toString() method
*/

function example1 () {
  
  function PropertyError (property) {
    Error.call(this, property) // 4

    this.name = "PropertyError" // 1
    this.property = property //2
    this.message = "Incorrect property: " + property

    // 3
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PropertyError)
    } else{
      this.stack = (new Error()).stack
    };
  }

  PropertyError.prototype = Object.create(Error.prototype)
}
// example1()



/*Example 2: instanceof + try..catch = ♡ :)

you can check error types with instanceof , and add
custom handlers for each error type, or throw it to 
output code, if its error from other "Data Layers"
*/

function example2 () {
  
  function PropertyError(property) {
    Error.call(this, property)

    this.name = "PropertyError"
    this.message = "Error in property " + property
    this.property = property

    if (Error.captureStackTrace) {
      this.stack = Error.captureStackTrace(this, PropertyError)
    } else{
      this.stack = (new Error()).stack
    };
  }

  PropertyError.prototype = Object.create(Error.prototype)  


  // read json

  function readUser(data) {
    var user = JSON.parse(data)

    if (!user.name) {
      throw new PropertyError('name')
    } else if (!user.email) {
      throw new PropertyError('email')
    };

    return user;
  }


  try{
    var user = readUser('{"age": "25"}')
  }catch(e){

    // custom handler for Property errors
    if (e instanceof PropertyError) {
      if (e.property === "name") {
        console.log("Hello, Anonymous")
      } else{
        console.log(e.message);
      };  
    } 
    // custom handler for Syntax errors
    else if (e instanceof SyntaxError) {
      console.log("Synax error in data " + e.message);  
    } 
    //unknown error - throw output
    else {
      throw new e 
    }
  }

}
// example2()



/*Example 3 define custom descendant
for correct applying Parent Class, you must redefine .name and constructor values:
  1. change PropertyError hardcode to more flexible this.constructor
  1.1. set correct  constructor to prototype

  2. increase name flexibility with this.constructor.name (IE11-)

*/

function example3 () {
  
  function PropertyError(property) {
    Error.call(this, property)

    this.name = this.constructor.name // 2 
    this.message = "There is no property " + property
    this.property = property

    if (Error.captureStackTrace) {
      this.stack = Error.captureStackTrace(this, this.constructor) // 1
    } else{
      this.stack = (new Error()).stack
    };
  }

  PropertyError.prototype = Object.create(Error.prototype)  
  PropertyError.prototype.constructor = PropertyError //1.1



  function PropertyRequiredError(property){
    PropertyError.apply(this, arguments) //3
    this.messaage = "There is no property " + property
  }

  PropertyRequiredError.prototype = Object.create(PropertyError.prototype)
  PropertyRequiredError.prototype.constructor = PropertyRequiredError

  var err = new PropertyRequiredError('name')
  console.log(err instanceof PropertyError); //true
}
// example3()





/*Task 1: create FormatError that inherits from SyntaxError*/

function task1 () {  

  function FormatError (message) {
    SyntaxError.apply(this, arguments)

    this.name = this.constructor.name
    this.message = message

    if (Error.captureStackTrace) {
      this.stack = Error.captureStackTrace(this, this.constructor)
    } else{
      this.stack = (new Error()).stack
    };
  }
  FormatError.prototype = Object.create(SyntaxError.prototype)
  FormatError.prototype.constructor = FormatError


  var err = new FormatError("ошибка форматирования");

  console.log( err.message ); // ошибка форматирования
  console.log( err.name ); // FormatError
  console.log( err.stack ); // стек на момент генерации ошибки
  console.log( err instanceof SyntaxError ); // true
}
task1()

