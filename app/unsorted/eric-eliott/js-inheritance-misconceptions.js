'use strict';

/* Example 1

  Object creation with `delegating prototype`

  animal - delegate prototypa
  mouse - instance


  Tip: Combining Object.assign with Object.create for faster
*/

function example1() {

  var animal = {
    animalType: 'animal',
    describe: function describe() {
      return 'An ' + this.animalType + ', with ' + this.furColor + ' fur, ' + this.legs + ' legs, and a ' + this.tail + ' tail.';
    }
  };

  var mouse = Object.assign(Object.create(animal), {
    animalType: 'mouse',
    furColor: 'brown',
    legs: 4,
    tail: 'long, skinny'
  });

  console.log(mouse.describe());
}
example1();

/* Example 2: Factory function

  Constructors is dangerous and can cause side effects. 
  Stop to use them! Use factories instead.

  Tip: it isn't neccessary to end factory name with `factory` postfix )
*/

function example2() {

  var animal = {
    animalType: 'animal',
    describe: function describe() {
      return 'An ' + this.animalType + ', with ' + this.furColor + ' fur, ' + this.legs + ' legs, and a ' + this.tail + ' tail.';
    }
  };

  var mouseFactory = function mouseFactory(config) {
    return Object.assign(Object.create(animal), {
      animalType: 'mouse',
      furColor: 'brown',
      legs: 4,
      tail: 'long, skinny'
    });
  };

  var mickey = mouseFactory();
  console.log(mickey.describe());
}
example2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLWluaGVyaXRhbmNlLW1pc2NvbmNlcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFXQSxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxNQUFNLEdBQUc7QUFDWCxjQUFVLEVBQUUsUUFBUTtBQUNwQixZQUFRLHNCQUFJO0FBQ1YscUJBQWEsSUFBSSxDQUFDLFVBQVUsZUFBVSxJQUFJLENBQUMsUUFBUSxjQUFTLElBQUksQ0FBQyxJQUFJLHFCQUFnQixJQUFJLENBQUMsSUFBSSxZQUFTO0tBQ3hHO0dBQ0YsQ0FBQTs7QUFFRCxNQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDL0MsY0FBVSxFQUFFLE9BQU87QUFDbkIsWUFBUSxFQUFFLE9BQU87QUFDakIsUUFBSSxFQUFFLENBQUM7QUFDUCxRQUFJLEVBQUUsY0FBYztHQUNyQixDQUFDLENBQUE7O0FBRUYsU0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtDQUM5QjtBQUNELFFBQVEsRUFBRTs7Ozs7Ozs7OztBQUFBLEFBYVYsU0FBUyxRQUFRLEdBQUk7O0FBRW5CLE1BQUksTUFBTSxHQUFHO0FBQ1gsY0FBVSxFQUFFLFFBQVE7QUFDcEIsWUFBUSxzQkFBSTtBQUNWLHFCQUFhLElBQUksQ0FBQyxVQUFVLGVBQVUsSUFBSSxDQUFDLFFBQVEsY0FBUyxJQUFJLENBQUMsSUFBSSxxQkFBZ0IsSUFBSSxDQUFDLElBQUksWUFBUztLQUN4RztHQUNGLENBQUE7O0FBRUQsTUFBSSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQVksTUFBTSxFQUFFO0FBQ2xDLFdBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzFDLGdCQUFVLEVBQUUsT0FBTztBQUNuQixjQUFRLEVBQUUsT0FBTztBQUNqQixVQUFJLEVBQUUsQ0FBQztBQUNQLFVBQUksRUFBRSxjQUFjO0tBQ3JCLENBQUMsQ0FBQTtHQUNILENBQUE7O0FBRUQsTUFBSSxNQUFNLEdBQUcsWUFBWSxFQUFFLENBQUE7QUFDM0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtDQUMvQjtBQUNELFFBQVEsRUFBRSxDQUFBIiwiZmlsZSI6InVuc29ydGVkL2VyaWMtZWxpb3R0L2pzLWluaGVyaXRhbmNlLW1pc2NvbmNlcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXhhbXBsZSAxXG5cbiAgT2JqZWN0IGNyZWF0aW9uIHdpdGggYGRlbGVnYXRpbmcgcHJvdG90eXBlYFxuXG4gIGFuaW1hbCAtIGRlbGVnYXRlIHByb3RvdHlwYVxuICBtb3VzZSAtIGluc3RhbmNlXG5cblxuICBUaXA6IENvbWJpbmluZyBPYmplY3QuYXNzaWduIHdpdGggT2JqZWN0LmNyZWF0ZSBmb3IgZmFzdGVyXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIFxuICBsZXQgYW5pbWFsID0ge1xuICAgIGFuaW1hbFR5cGU6ICdhbmltYWwnLFxuICAgIGRlc2NyaWJlICgpIHtcbiAgICAgIHJldHVybiBgQW4gJHt0aGlzLmFuaW1hbFR5cGV9LCB3aXRoICR7dGhpcy5mdXJDb2xvcn0gZnVyLCAke3RoaXMubGVnc30gbGVncywgYW5kIGEgJHt0aGlzLnRhaWx9IHRhaWwuYDtcbiAgICB9XG4gIH1cblxuICBsZXQgbW91c2UgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoYW5pbWFsKSwge1xuICAgIGFuaW1hbFR5cGU6ICdtb3VzZScsXG4gICAgZnVyQ29sb3I6ICdicm93bicsXG4gICAgbGVnczogNCxcbiAgICB0YWlsOiAnbG9uZywgc2tpbm55J1xuICB9KVxuXG4gIGNvbnNvbGUubG9nKG1vdXNlLmRlc2NyaWJlKCkpXG59XG5leGFtcGxlMSgpXG5cblxuXG5cbi8qIEV4YW1wbGUgMjogRmFjdG9yeSBmdW5jdGlvblxuXG4gIENvbnN0cnVjdG9ycyBpcyBkYW5nZXJvdXMgYW5kIGNhbiBjYXVzZSBzaWRlIGVmZmVjdHMuIFxuICBTdG9wIHRvIHVzZSB0aGVtISBVc2UgZmFjdG9yaWVzIGluc3RlYWQuXG5cbiAgVGlwOiBpdCBpc24ndCBuZWNjZXNzYXJ5IHRvIGVuZCBmYWN0b3J5IG5hbWUgd2l0aCBgZmFjdG9yeWAgcG9zdGZpeCApXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMiAoKSB7XG5cbiAgbGV0IGFuaW1hbCA9IHtcbiAgICBhbmltYWxUeXBlOiAnYW5pbWFsJyxcbiAgICBkZXNjcmliZSAoKSB7XG4gICAgICByZXR1cm4gYEFuICR7dGhpcy5hbmltYWxUeXBlfSwgd2l0aCAke3RoaXMuZnVyQ29sb3J9IGZ1ciwgJHt0aGlzLmxlZ3N9IGxlZ3MsIGFuZCBhICR7dGhpcy50YWlsfSB0YWlsLmA7XG4gICAgfVxuICB9ICBcblxuICBsZXQgbW91c2VGYWN0b3J5ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShhbmltYWwpLCB7XG4gICAgICBhbmltYWxUeXBlOiAnbW91c2UnLFxuICAgICAgZnVyQ29sb3I6ICdicm93bicsXG4gICAgICBsZWdzOiA0LFxuICAgICAgdGFpbDogJ2xvbmcsIHNraW5ueSdcbiAgICB9KVxuICB9XG5cbiAgbGV0IG1pY2tleSA9IG1vdXNlRmFjdG9yeSgpXG4gIGNvbnNvbGUubG9nKG1pY2tleS5kZXNjcmliZSgpKVxufVxuZXhhbXBsZTIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
