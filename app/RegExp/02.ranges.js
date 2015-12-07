'use strict';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLnJhbmdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxTQUFTLEtBQUssR0FBSTs7QUFFaEIsTUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUE7O0FBRTNCLFNBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLEFBQy9CLFNBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUFBLENBQ3RDOzs7Ozs7OztBQUFBLEFBU0QsU0FBUyxLQUFLLEdBQUk7O0FBRWhCLE1BQUksSUFBSSxHQUFHLGlCQUFpQixDQUFBOztBQUU1QixTQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ2xELFNBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7Q0FDM0Q7O0FBQUEiLCJmaWxlIjoiUmVnRXhwLzAyLnJhbmdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIHdoYXQgZG9lcyByZXR1cm4gYW5kIHdoeT9cblxuICAxLiBudWxsIC0gYWZ0ZXIgJ0phdmEnIHNvbWUgbGV0dGVyIChub3QgcyxjLHIsaSxwLHQpIG11c3QgZm9sbG93LlxuICAyLiAnSmF2YScgLSBiZWNhdXNlIGBTYCBpcyB1cHBlcmNhc2VkIGFuZCBpdCBpc24ndCBlcXVhbCBgc2AgaW4gdGhpcyBjYXNlLlxuKi9cblxuZnVuY3Rpb24gdGFzazEgKCkge1xuICBcbiAgbGV0IHB0cm4gPSAvSmF2YVtec2NyaXB0XS9nXG5cbiAgY29uc29sZS5sb2coJ0phdmEnLm1hdGNoKHB0cm4pKSAvLyAxXG4gIGNvbnNvbGUubG9nKCdKYXZhU2NyaXB0Jy5tYXRjaChwdHJuKSkgLy8gMlxufVxuLy8gdGFzazEoKVxuXG5cbi8qXG7QktGA0LXQvNGPINC80L7QttC10YIg0LHRi9GC0Ywg0LIg0YTQvtGA0LzQsNGC0LUg0YfQsNGB0Ys60LzQuNC90YPRgtGLINC40LvQuCDRh9Cw0YHRiy3QvNC40L3Rg9GC0YsuXG7QmCDRh9Cw0YHRiyDQuCDQvNC40L3Rg9GC0Ysg0YHQvtGB0YLQvtGP0YIg0LjQtyDQtNCy0YPRhSDRhtC40YTRgCwg0L3QsNC/0YDQuNC80LXRgCAwOTowMCwgMjEtMzAuXG4qL1xuXG5mdW5jdGlvbiB0YXNrMiAoKSB7XG4gIFxuICBsZXQgcHRybiA9IC9cXGR7Mn1bOi1dXFxkezJ9L2dcblxuICBjb25zb2xlLmxvZygnMjQ6NDIgMTAtMDAgNTU6OTQgMTMyOjMnLm1hdGNoKHB0cm4pKVxuICBjb25zb2xlLmxvZyhcItCX0LDQstGC0YDQsNC6INCyIDA5OjAwLiDQntCx0LXQtCAtINCyIDIxLTMwXCIubWF0Y2gocHRybikpXG59XG4vLyB0YXNrMigpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
