Задача 1: превратить объект в json*/
 
var leader = {
  name: "Tom Jefferson",
  age: 35
}

var leaderJ = console.log(JSON.stringify(leader));
console.log(JSON.parse(leaderJ))


/*
Задача 2: 

Может ли это сделать прямой вызов JSON.stringify(team)? Если нет, то почему?
Какой подход вы бы предложили для чтения и восстановления таких объектов?
*/

var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];


/*Решение:

Прямой вызов JSON.stringify(team) приведет к бесконечному циклу
можно сделать проверку предотвращающую ссылку объектов друг на друга через их свойства


Дополнение: выдаст ошибку ()
Не поддерживается хранение ссылок

В таких случаях лучше всего использовать кастомные реализации JSON
(jquery, dojo...) которые поддерживают хранение ссылок

*/