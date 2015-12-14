/*Статический метод: 
  не привязывается к конкретному экземпляру класса
  записывается в Конструктор

  существует у всех экземпляров класса!
  работает со всеми экземплярами класса

  Можно использовать для функций которые не требуют наличия объекта  



  Удобно применять для: 
    - общих действий с объектами данного типа (подсчеты)
    - методы не привязанные к конкретному экземпляру
    - вспомогательные методы
    - фабричные методы

  */


function Article() {
  Article.count++;
}
Article.count = 0 //static property
Article.DEFAULT_FORMAT = 'html' //static constant value


Article.showCount = function(){
  return this.count;
}


// define compare function for Journal date

function Journal(date) {
  this.date = date
}


Journal.compareByDate = function(one, another){
  return one.date === another.date
}

j1 = new Journal(new Date(1999,1,1));
j2 = new Journal(new Date(1999,1,1));

Journal.compare(j1, j2);


Journal.formatDate = function(date){ 
  //month + 1 because journal is for the next month)
  return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}

//no objects creation, simply format current data 
console.log( Journal.formatDate(new Date) );






/*Фабричные статический метод:
  
  служит для создания новых объектов (фабрика)
  удобная альтернатива полиморфному конструктору
  (возврат разных объектов в зависимости от типа входных данных)
*/


/*полиморфный конструктор. Плюсы:
использовать где нужна полиморфность 
(тип входящих данных заранее неизвестен)
*/
function User(data) {
  if (data) {
    this.name = data.name;
    this.age = data.age;
  } else {
    this.name = "Anonymous";
  }

  this.sayHi = function(){
    console.log(this.name);
  }
}
var knownUser = new User({
  name: "Tom",
  age: "16"
});
knownUser.sayHi() //Tom

var guest = new User();
guest.sayHi() //Anonymous




/*фабричный метод. Плюсы:
лучше читаемость (вместо одной сложной ф-ции - несколько простых)
лучше контроль ошибок
лучше расширяемость (проще добавить другой тип данных) ? 
*/


function FabricUser(data) {
  this.sayHi = function(){
    console.log(this.name);
  }
}

FabricUser.createKnownUser = function(data){
  let user = new FabricUser; // !!! not call constructor
  [user.name, user.age] = data;
  return user;
}

FabricUser.createAnonymousUser = function(){
  let user = new FabricUser; //create instance of Class to get all attributes
  user.name = "Anonymous";
  return user;
}

var knownUser = new FabricUser.createKnownUser({
  name: "Tom",
  age: "16"
});
knownUser.sayHi() //Tom

var guest = new FabricUser.createAnonymousUser()();
guest.sayHi() //Anonymous





/*Задача 1

Добавить в конструктор Article:

Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.

Пусть вызов Article.showStats() выводит то и другое.
*/




function Article() {
  this.created = new Date();
  Article.count++; //count each article and store in static prop
  Article.allDates.push(this.created);
}

// Init static help properties
Article.count = 0; 
Article.allDates = [];

//init static methods
Article.countTotal = function(){
  return this.count; //this === Constructor
};

Article.getLastDate = function(){
  return this.allDates[this.allDates.length - 1];
};

Article.showStats = function(){
  return 'Всего: ' + this.countTotal() + ', Последняя: ' + this.getLastDate();
};


new Article();
new Article();
console.log(Article.showStats()); // Всего: 2, Последняя: (дата)

new Article();
console.log(Article.showStats()); // Всего: 3, Последняя: (дата)

