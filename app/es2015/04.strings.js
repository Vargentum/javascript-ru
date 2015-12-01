'use strict';

var _templateObject = _taggedTemplateLiteral(['Some ', '\n                   string with another param ', '\n                   and sum of 5 and 4, that is ', ''], ['Some ', '\n                   string with another param ', '\n                   and sum of 5 and 4, that is ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
Template strings
*/

function example1() {

  //multistringing
  console.log('some\n               multiline string');

  // interpolation support
  var a = 'interpolated';
  console.log('my ' + a + ' string');

  // any expression can be interpolated
  var sum = function sum(a, b) {
    return a + b;
  };
  console.log('Sum of 5 and 6 is ' + sum(5, 6));
}
// example1()

/*
Template functions

  - first argument is array of string parts
    between interpolated params
  - rest params are all interpolated expression results
*/

function example2() {

  var sum = function sum(a, b) {
    return a + b;
  };

  function strParse(strings) {
    console.log(strings);
    console.log(strings.raw);

    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    console.log(params);
  }

  var a = 'test';
  var b = 13;

  var s = strParse(_templateObject, a, b, sum(5, 4));
}
// example2()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA0LnN0cmluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1BLFNBQVMsUUFBUSxHQUFJOzs7QUFHbkIsU0FBTyxDQUFDLEdBQUcseUNBQ29COzs7QUFBQyxBQUdoQyxNQUFJLENBQUMsR0FBRyxjQUFjLENBQUE7QUFDdEIsU0FBTyxDQUFDLEdBQUcsU0FBTyxDQUFDLGFBQVU7OztBQUFDLEFBSTlCLE1BQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFJLENBQUMsRUFBRSxDQUFDO1dBQUssQ0FBQyxHQUFHLENBQUM7R0FBQSxDQUFBO0FBQ3pCLFNBQU8sQ0FBQyxHQUFHLHdCQUFzQixHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFHLENBQUM7Q0FFOUM7Ozs7Ozs7Ozs7O0FBQUEsQUFjRCxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUM7V0FBSyxDQUFDLEdBQUcsQ0FBQztHQUFBLENBQUE7O0FBRXpCLFdBQVMsUUFBUSxDQUFFLE9BQU8sRUFBYTtBQUNyQyxXQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLFdBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztzQ0FGSSxNQUFNO0FBQU4sWUFBTTs7O0FBR25DLFdBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDckI7O0FBRUQsTUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFBO0FBQ2QsTUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBOztBQUVWLE1BQUksQ0FBQyxHQUFHLFFBQVEsa0JBQVEsQ0FBQyxFQUNvQixDQUFDLEVBQ0MsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBRSxDQUFBO0NBQzFEOztBQUFBIiwiZmlsZSI6ImVzMjAxNS8wNC5zdHJpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIHN0cmluZ3NcbiovXG5cblxuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG5cbiAgLy9tdWx0aXN0cmluZ2luZ1xuICBjb25zb2xlLmxvZyhgc29tZVxuICAgICAgICAgICAgICAgbXVsdGlsaW5lIHN0cmluZ2ApO1xuICBcbiAgLy8gaW50ZXJwb2xhdGlvbiBzdXBwb3J0XG4gIGxldCBhID0gJ2ludGVycG9sYXRlZCdcbiAgY29uc29sZS5sb2coYG15ICR7YX0gc3RyaW5nYCk7XG5cblxuICAvLyBhbnkgZXhwcmVzc2lvbiBjYW4gYmUgaW50ZXJwb2xhdGVkXG4gIGxldCBzdW0gPSAoYSwgYikgPT4gYSArIGJcbiAgY29uc29sZS5sb2coYFN1bSBvZiA1IGFuZCA2IGlzICR7c3VtKDUsNil9YCk7XG5cbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cblxuLypcblRlbXBsYXRlIGZ1bmN0aW9uc1xuXG4gIC0gZmlyc3QgYXJndW1lbnQgaXMgYXJyYXkgb2Ygc3RyaW5nIHBhcnRzXG4gICAgYmV0d2VlbiBpbnRlcnBvbGF0ZWQgcGFyYW1zXG4gIC0gcmVzdCBwYXJhbXMgYXJlIGFsbCBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbiByZXN1bHRzXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMiAoKSB7XG5cbiAgbGV0IHN1bSA9IChhLCBiKSA9PiBhICsgYlxuICBcbiAgZnVuY3Rpb24gc3RyUGFyc2UgKHN0cmluZ3MsIC4uLnBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKHN0cmluZ3MpO1xuICAgIGNvbnNvbGUubG9nKHN0cmluZ3MucmF3KTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICB9XG5cbiAgbGV0IGEgPSAndGVzdCdcbiAgbGV0IGIgPSAxM1xuXG4gIGxldCBzID0gc3RyUGFyc2VgU29tZSAke2F9XG4gICAgICAgICAgICAgICAgICAgc3RyaW5nIHdpdGggYW5vdGhlciBwYXJhbSAke2J9XG4gICAgICAgICAgICAgICAgICAgYW5kIHN1bSBvZiA1IGFuZCA0LCB0aGF0IGlzICR7c3VtKDUsNCl9YFxufVxuLy8gZXhhbXBsZTIoKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
