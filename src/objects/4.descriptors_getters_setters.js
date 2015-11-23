'use strict';


let user = {};

//1.Простое присваивание
user.name = "Tom";

 //2. Присваивание через дескриптор
Object.defineProperty(user, name, {
  value: "Tom",
  writable: false, //disable editing property
  configurable: false, //disable deliting property
  enumerable: true
})

user.name = "Jerry" // 'strict mode' ? generates Error : silent passing 


/*
У встроенного toString() enumerable false
у кастомного == true

если нужно изменить - тогда задавать через дескриптор
*/
user.toString = function(){ return this.name }

Object.defineProperty(user, toString, { enumerable: false })


/*Cвойство-функция
с помощью get можно задать свойство, которое будет являть функцией
*/

user = {
  firstName: "John",
  surname: "Rambo"
}

Object.defineProperty(user, fullName, {
  
  get: function(){
    return `${this.firstName} ${this.surname}`;
  }

  set: function(val){
    //set the first and last name, so the get() function can work correctly
    [this.firstName, this.lastName] = val.split(' ');
  }
})

console.log(user.fullName) //get
user.fullName = "Sylvester Stallone" //set




/* Геттеры/сеттеры в литералах объекта
*/

user = {
  firstName: "T1000",
  lastName: "Terminator"

  //define a getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  //define a setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ')
  }
}





/* Зачем??
простой рефакторинг
увеличение гибкости
*/

function User(name, age) {
  [this.name, this.age] = [name, age];
}

let user1 = new User("John", 25)


// but if you want to refactor age to birthdate
// 

function User(name, birthdate) {
  [this.name, this.birthdate] = [name, birthdate];

  //safe getting age for old code usages!
  get age() {
    return new Date.now().getFullYear() - this.birthdate.getFullYear()
  }
}

let user2 = new User("Jane", new Date(1984, 6, 4))
console.log(user2.age)



/* Другие методы работы со свойствами
*/
user = {};


// объявление нескольких свойств сразу

Object.defineDescriptors(user, {
  firstName: {
    value: "Captain"
  }
  lastName: {
    value: "America"
  }
  fullName: {
    get function(){
      return `${this.firstName} ${this.lastName}`
    }
  }
})



// Other methods
Object.keys(o); // return only enumerable properties

Object.getOwnPropertyDescriptor(o); //return descriptor object

Object.getOwnPropertyNames(o); //return all properties


//Rare used methods
Object.preventExtensions(o); //disable add props to object

Object.seal(o);  //disable add/delete props; make all props configurable: false

Object.freeze(o); //disable add/edit/delete props; configurable:false; writable: false

//checking
Object.isExtensible(o);
Object.isSealed(o);
Object.isFrozen(o);



// Задача:
//Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
//Имя и фамилия всегда разделяются пробелом.
//Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

function User(fullName) {
  
  return {
    fullName: fullName,

    //firstName
    get firstName(){
      return fullName.split(' ')[0];
    },

    set firstName(newName){
      this.fullName = newName + ' ' + this.lastName;
    },

    //lastName
    get lastName(){
      return fullName.split(' ')[1];
    },

    set lastName(newName){
      this.fullName = this.firstName + ' ' + newName;
    }  
  };
}


var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
console.log( vasya.fullName ); // Василий Сидоров



