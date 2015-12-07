/*
  what does return and why?

  1. null - after 'Java' some letter (not s,c,r,i,p,t) must follow.
  2. 'Java' - because `S` is uppercased and it isn't equal `s` in this case.
*/

function task1 () {
  
  let ptrn = /Java[^script]/g

  console.log('Java'.match(ptrn)) // 1
  console.log('JavaScript'.match(ptrn)) // 2
}
// task1()


/*
Время может быть в формате часы:минуты или часы-минуты.
И часы и минуты состоят из двух цифр, например 09:00, 21-30.
*/

function task2 () {
  
  let ptrn = /\d{2}[:-]\d{2}/g

  console.log('24:42 10-00 55:94 132:3'.match(ptrn))
  console.log("Завтрак в 09:00. Обед - в 21-30".match(ptrn))
}
// task2()