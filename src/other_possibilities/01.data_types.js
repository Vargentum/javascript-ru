/*Полиморфная функция*/

function sayHi(who) {

  if (Array.isArray(who)) {
    // for (i in who) {
    //   console.log "Привет: " + who[i];
    // }
    who.forEach(sayHi) // изящнее с помощью рекурсии
  } else {
    console.log("Привет: " + who)
  }
}


// Утиная типизация
function sayHi(who) {

  if (who.forEach) { //eсли существует forEach - предполагаем что данные правильные
    who.forEach(sayHi)  
  }  else {
    console.log("Привет: " + who)
  }
}




/*Задача 1:

Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

Как объект Date.
Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
Как число секунд с 01.01.1970.
Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.


*/


function formatDate(date) {

  function isTypeEqual(d, type){
    return {}.toString.call(d).slice(8, -1) === type ? true : false;
  }

  function convertToProperFormat(d){
    return "" + d.getDay() + "." + d.getMonth() + "." + d.getFullYear();
  }


  if (isTypeEqual(date, "Date")) {
    return convertToProperFormat(date);
  } 
  else if (typeof date === "number") {
    return convertToProperFormat(new Date(date));
  }
  else if (Array.isArray(date)) {
    date = new Date(date[0], date[1] + 1, date[2]);
    return convertToProperFormat(date);
  }
  else {
    return "Error! Incorrect date format: " + date;
  }
}



console.log( formatDate( Date.now() ));
console.log( formatDate( 234143234  ));
console.log( formatDate( [1999,0,24] ));


