'use strict';

/*

Concatenative inheritance - 
  
  process of combining properties of one or more source objects
  into new destination object

  It's a heart and soul of Prototypal OO


  There are some ways to implement CI:

    1. Defaults/Overriden pattern (Jquery)

    2. Object composition (lodash, Object.assign)


  Dynamic object extension

*/

// Defaults/Overrides pattern (from >=ES5)

function example1() {

  var defaults = {
    bar: 'no',
    baz: 'works'
  };

  function foo(config) {
    var settings = _.assign(defaults, config);

    return settings.bar + ', ' + settings.baz;
  }

  console.log(foo({
    bar: 'it'
  })); // it, works
}
// example1()

// Object composition Example

function example2() {

  var distortion = { distortion: 1 };
  var volume = { volume: 1 };
  var cabinet = { cabinet: 'maple' };
  var lowCut = { lowCut: 1 };
  var inputLevel = { inputLevel: 1 };

  var GuitarAmp = function GuitarAmp(options) {
    return Object.assign({}, distortion, volume, cabinet, options);
  };

  var BassAmp = function BassAmp(options) {
    return Object.assign({}, lowCut, volume, cabinet, options);
  };

  test('BassAmp', function (assert) {
    var msg = 'should have volume, lowCut, and cabinet';
    var level = 2;
    var cabinet = 'vintage';

    var actual = BassAmp({
      lowCut: level,
      volume: level,
      cabinet: cabinet
    });
    var expected = {
      lowCut: level,
      volume: level,
      cabinet: cabinet
    };

    assert.deepEqual(actual, expected, msg);
    assert.end();
  });
}
// example2()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLmNvbmNhdGVuYXRpdmVfaW5oZXJpdGFuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxRQUFRLEdBQUc7QUFDYixPQUFHLEVBQUUsSUFBSTtBQUNULE9BQUcsRUFBRSxPQUFPO0dBQ2IsQ0FBQTs7QUFFRCxXQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUU7QUFDbkIsUUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7O0FBRXpDLFdBQVUsUUFBUSxDQUFDLEdBQUcsVUFBSyxRQUFRLENBQUMsR0FBRyxDQUFFO0dBQzFDOztBQUVELFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ2QsT0FBRyxFQUFFLElBQUk7R0FDVixDQUFDLENBQUM7QUFBQSxDQUNKOzs7OztBQUFBLEFBVUQsU0FBUyxRQUFRLEdBQUk7O0FBRW5CLE1BQU0sVUFBVSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzdCLE1BQU0sT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzdCLE1BQU0sVUFBVSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDOztBQUdyQyxNQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVMsQ0FBSSxPQUFPLEVBQUs7QUFDN0IsV0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtHQUMvRCxDQUFBOztBQUVELE1BQU0sT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFJLE9BQU8sRUFBSztBQUMzQixXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0dBQzNELENBQUE7O0FBR0QsTUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFBLE1BQU0sRUFBSTtBQUN4QixRQUFNLEdBQUcsR0FBRyx5Q0FBeUMsQ0FBQztBQUN0RCxRQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDaEIsUUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDOztBQUUxQixRQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDckIsWUFBTSxFQUFFLEtBQUs7QUFDYixZQUFNLEVBQUUsS0FBSztBQUNiLGFBQU8sRUFBUCxPQUFPO0tBQ1IsQ0FBQyxDQUFDO0FBQ0gsUUFBTSxRQUFRLEdBQUc7QUFDZixZQUFNLEVBQUUsS0FBSztBQUNiLFlBQU0sRUFBRSxLQUFLO0FBQ2IsYUFBTyxFQUFQLE9BQU87S0FDUixDQUFDOztBQUVGLFVBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUN2QyxVQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7R0FDYixDQUFDLENBQUE7Q0FFSDs7QUFBQSIsImZpbGUiOiJ1bnNvcnRlZC9lcmljLWVsaW90dC8wMi5jb25jYXRlbmF0aXZlX2luaGVyaXRhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuQ29uY2F0ZW5hdGl2ZSBpbmhlcml0YW5jZSAtIFxuICBcbiAgcHJvY2VzcyBvZiBjb21iaW5pbmcgcHJvcGVydGllcyBvZiBvbmUgb3IgbW9yZSBzb3VyY2Ugb2JqZWN0c1xuICBpbnRvIG5ldyBkZXN0aW5hdGlvbiBvYmplY3RcblxuICBJdCdzIGEgaGVhcnQgYW5kIHNvdWwgb2YgUHJvdG90eXBhbCBPT1xuXG5cbiAgVGhlcmUgYXJlIHNvbWUgd2F5cyB0byBpbXBsZW1lbnQgQ0k6XG5cbiAgICAxLiBEZWZhdWx0cy9PdmVycmlkZW4gcGF0dGVybiAoSnF1ZXJ5KVxuXG4gICAgMi4gT2JqZWN0IGNvbXBvc2l0aW9uIChsb2Rhc2gsIE9iamVjdC5hc3NpZ24pXG5cblxuICBEeW5hbWljIG9iamVjdCBleHRlbnNpb25cblxuKi9cblxuXG5cbi8vIERlZmF1bHRzL092ZXJyaWRlcyBwYXR0ZXJuIChmcm9tID49RVM1KVxuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIFxuICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgYmFyOiAnbm8nLFxuICAgIGJhejogJ3dvcmtzJ1xuICB9XG5cbiAgZnVuY3Rpb24gZm9vKGNvbmZpZykge1xuICAgIGxldCBzZXR0aW5ncyA9IF8uYXNzaWduKGRlZmF1bHRzLCBjb25maWcpXG4gICAgXG4gICAgcmV0dXJuIGAke3NldHRpbmdzLmJhcn0sICR7c2V0dGluZ3MuYmF6fWBcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGZvbyh7XG4gICAgYmFyOiAnaXQnXG4gIH0pKSAgICAgICAgICAgICAgIC8vIGl0LCB3b3JrcyBcbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cblxuXG5cbi8vIE9iamVjdCBjb21wb3NpdGlvbiBFeGFtcGxlXG5cbmZ1bmN0aW9uIGV4YW1wbGUyICgpIHtcblxuICBjb25zdCBkaXN0b3J0aW9uID0geyBkaXN0b3J0aW9uOiAxIH07XG4gIGNvbnN0IHZvbHVtZSA9IHsgdm9sdW1lOiAxIH07XG4gIGNvbnN0IGNhYmluZXQgPSB7IGNhYmluZXQ6ICdtYXBsZScgfTtcbiAgY29uc3QgbG93Q3V0ID0geyBsb3dDdXQ6IDEgfTtcbiAgY29uc3QgaW5wdXRMZXZlbCA9IHsgaW5wdXRMZXZlbDogMSB9O1xuXG5cbiAgY29uc3QgR3VpdGFyQW1wID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGlzdG9ydGlvbiwgdm9sdW1lLCBjYWJpbmV0LCBvcHRpb25zKVxuICB9XG5cbiAgY29uc3QgQmFzc0FtcCA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGxvd0N1dCwgdm9sdW1lLCBjYWJpbmV0LCBvcHRpb25zKVxuICB9XG5cblxuICB0ZXN0KCdCYXNzQW1wJywgYXNzZXJ0ID0+IHtcbiAgICBjb25zdCBtc2cgPSAnc2hvdWxkIGhhdmUgdm9sdW1lLCBsb3dDdXQsIGFuZCBjYWJpbmV0JztcbiAgICBjb25zdCBsZXZlbCA9IDI7XG4gICAgY29uc3QgY2FiaW5ldCA9ICd2aW50YWdlJztcblxuICAgIGNvbnN0IGFjdHVhbCA9IEJhc3NBbXAoe1xuICAgICAgbG93Q3V0OiBsZXZlbCxcbiAgICAgIHZvbHVtZTogbGV2ZWwsXG4gICAgICBjYWJpbmV0XG4gICAgfSk7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICBsb3dDdXQ6IGxldmVsLFxuICAgICAgdm9sdW1lOiBsZXZlbCxcbiAgICAgIGNhYmluZXRcbiAgICB9O1xuXG4gICAgYXNzZXJ0LmRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtc2cpXG4gICAgYXNzZXJ0LmVuZCgpXG4gIH0pXG4gIFxufVxuLy8gZXhhbXBsZTIoKVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
