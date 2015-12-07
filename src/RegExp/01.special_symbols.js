/*
Task 1:
Напишите регулярное выражение для поиска времени в строке: 
Завтрак в 09:00.
*/

function task1 () {
  
  function getTime (str) {
    return str.match(/\d\d:\d\d/g)
              .join()
  }

  console.log(getTime('breakfast at 10:00.'));
  console.log(getTime('basketball match ends with 99:85 score.'));
}
// task1()

