/*

^ Anchor checks if occurrecne in regexp begin from the start of the string
$ - checks if O ends from end of the string

both Anchors used when you need to validate something (example2)
*/


function example1 () {
  let str = "100500 попугаев съели бананов 500100"
  let regStart = /^\d+/g
  let regEnd = /\d+$/g

  console.log(str.match(regStart)) //100500
  console.log(str.match(regEnd))   //500100
}
// example1()


function example2 () {
  let reg = /\d+\.\d+/g
  let regStrict = /^\d+\.\d+$/g

  let str1 = "4.23"
  let str2 = "1.35 invalid input 42.241"

  console.log(str1.match(reg));
  console.log(str1.match(regStrict));

  console.log(str2.match(reg));
  console.log(str2.match(regStrict));
}
// example2()




/*
Предложите строку, которая подойдёт под регулярное выражение ^$.
Ответ: пустая строка
*/
function task1 () {
  console.log("".match(/^$/g))
}
// task1()



/*
MAC-адрес сетевого интерфейса состоит из шести двузначиных шестандцатиричных чисел, разделённых двоеточием.
Например: '01:32:54:67:89:AB'.
Напишите регулярное выражение, которое по строке проверяет, является ли она корректным MAC-адресом.
*/
function task2 () {
  let regIncorrect = /^(([0-9a-f]{2}):){5}\2$/ig //can't understand why \2 not match 2 capturing group!!
  let reg = /^([0-9a-f]{2}:){5}[0-9a-f]{2}/ig
  let str1 = '01:32:54:67:89:AB'
  let str2 = '01:32:54:67:89:AF:'
  let str3 = '0132:54:67:89:AB'

  console.log(str1.match(reg)) //found
  console.log(str2.match(reg)) //null
  console.log(str3.match(reg)) //null
}
// task2()

