'use strict';

/*


  allmatched ranges:
    [/s/S]
    [/w/W]
*/

/*
  what does return and why?

  1. null - after 'Java' some letter (not s,c,r,i,p,t) must follow.
  2. 'Java' - because `S` is uppercased and it isn't equal `s` in this case.
*/

function task1() {

  var ptrn = /Java[^script]/g;

  console.log('Java'.match(ptrn)); // 1
  console.log('JavaScript'.match(ptrn)); // 2
}
// task1()

/*
Время может быть в формате часы:минуты или часы-минуты.
И часы и минуты состоят из двух цифр, например 09:00, 21-30.
*/

function task2() {

  var ptrn = /\d{2}[:-]\d{2}/g;

  console.log('24:42 10-00 55:94 132:3'.match(ptrn));
  console.log("Завтрак в 09:00. Обед - в 21-30".match(ptrn));
}
// task2()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLnJhbmdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxTQUFTLEtBQUssR0FBSTs7QUFFaEIsTUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUE7O0FBRTNCLFNBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLEFBQy9CLFNBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLENBQ3RDOzs7Ozs7OztBQUFBLEFBU0QsU0FBUyxLQUFLLEdBQUk7O0FBRWhCLE1BQUksSUFBSSxHQUFHLGlCQUFpQixDQUFBOztBQUU1QixTQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ2xELFNBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7Q0FDM0Q7O0FBQUEiLCJmaWxlIjoiUmVnRXhwLzAyLnJhbmdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cblxuICBhbGxtYXRjaGVkIHJhbmdlczpcbiAgICBbL3MvU11cbiAgICBbL3cvV11cbiovXG5cblxuXG5cblxuXG4vKlxuICB3aGF0IGRvZXMgcmV0dXJuIGFuZCB3aHk/XG5cbiAgMS4gbnVsbCAtIGFmdGVyICdKYXZhJyBzb21lIGxldHRlciAobm90IHMsYyxyLGkscCx0KSBtdXN0IGZvbGxvdy5cbiAgMi4gJ0phdmEnIC0gYmVjYXVzZSBgU2AgaXMgdXBwZXJjYXNlZCBhbmQgaXQgaXNuJ3QgZXF1YWwgYHNgIGluIHRoaXMgY2FzZS5cbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgXG4gIGxldCBwdHJuID0gL0phdmFbXnNjcmlwdF0vZ1xuXG4gIGNvbnNvbGUubG9nKCdKYXZhJy5tYXRjaChwdHJuKSkgLy8gMVxuICBjb25zb2xlLmxvZygnSmF2YVNjcmlwdCcubWF0Y2gocHRybikpIC8vIDJcbn1cbi8vIHRhc2sxKClcblxuXG4vKlxu0JLRgNC10LzRjyDQvNC+0LbQtdGCINCx0YvRgtGMINCyINGE0L7RgNC80LDRgtC1INGH0LDRgdGLOtC80LjQvdGD0YLRiyDQuNC70Lgg0YfQsNGB0Yst0LzQuNC90YPRgtGLLlxu0Jgg0YfQsNGB0Ysg0Lgg0LzQuNC90YPRgtGLINGB0L7RgdGC0L7Rj9GCINC40Lcg0LTQstGD0YUg0YbQuNGE0YAsINC90LDQv9GA0LjQvNC10YAgMDk6MDAsIDIxLTMwLlxuKi9cblxuZnVuY3Rpb24gdGFzazIgKCkge1xuICBcbiAgbGV0IHB0cm4gPSAvXFxkezJ9WzotXVxcZHsyfS9nXG5cbiAgY29uc29sZS5sb2coJzI0OjQyIDEwLTAwIDU1Ojk0IDEzMjozJy5tYXRjaChwdHJuKSlcbiAgY29uc29sZS5sb2coXCLQl9Cw0LLRgtGA0LDQuiDQsiAwOTowMC4g0J7QsdC10LQgLSDQsiAyMS0zMFwiLm1hdGNoKHB0cm4pKVxufVxuLy8gdGFzazIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
