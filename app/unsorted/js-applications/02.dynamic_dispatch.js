'use strict';

/*
  Method dispatch - mechainsm, that determines, how to response at income message


  Dynamic dispatch - technique that select method, based on parameters passed into function


  Algo:

    - define methods map
    - compare argument with methods
    - make fallback if method isn't defined
    - translate parameters for selected method and execute it

*/

function example1() {

  var methods = {

    init: function init(args) {
      return 'Initializing...';
    },
    hello: function hello(args) {
      return 'Hello, ' + args;
    },
    bye: function bye(args) {
      return 'Goodbye, ' + args;
    }

  };

  var greeting = function greeting(type) {
    var action = 'init'; //init default param

    if (typeof type === 'string' && typeof methods[type] === "function") {
      action = type;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return methods[action](args);
  };

  console.log(greeting('hello', 'World', 'and', 'me'));
  console.log(greeting('bye', 'War'));
  console.log(greeting('someMethod', 'War'));
}
example1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAyLmR5bmFtaWNfZGlzcGF0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLFNBQVMsUUFBUSxHQUFJOztBQUduQixNQUFJLE9BQU8sR0FBRzs7QUFFWixRQUFJLEVBQUUsY0FBUyxJQUFJLEVBQUU7QUFDbkIsK0JBQXdCO0tBQ3pCO0FBQ0QsU0FBSyxFQUFFLGVBQVMsSUFBSSxFQUFFO0FBQ3BCLHlCQUFpQixJQUFJLENBQUU7S0FDeEI7QUFDRCxPQUFHLEVBQUUsYUFBUyxJQUFJLEVBQUU7QUFDbEIsMkJBQW1CLElBQUksQ0FBRTtLQUMxQjs7R0FFRixDQUFBOztBQUVELE1BQUksUUFBUSxHQUFHLFNBQVgsUUFBUSxDQUFZLElBQUksRUFBVztBQUNyQyxRQUFJLE1BQU0sR0FBRyxNQUFNOztBQUFBLEFBRW5CLFFBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUNuRSxZQUFNLEdBQUcsSUFBSSxDQUFBO0tBQ2Q7O3NDQUw4QixJQUFJO0FBQUosVUFBSTs7O0FBTW5DLFdBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0dBQzdCLENBQUE7O0FBRUQsU0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNwRCxTQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUNuQyxTQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtDQUUzQztBQUNELFFBQVEsRUFBRSxDQUFBIiwiZmlsZSI6InVuc29ydGVkL2pzLWFwcGxpY2F0aW9ucy8wMi5keW5hbWljX2Rpc3BhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgTWV0aG9kIGRpc3BhdGNoIC0gbWVjaGFpbnNtLCB0aGF0IGRldGVybWluZXMsIGhvdyB0byByZXNwb25zZSBhdCBpbmNvbWUgbWVzc2FnZVxuXG5cbiAgRHluYW1pYyBkaXNwYXRjaCAtIHRlY2huaXF1ZSB0aGF0IHNlbGVjdCBtZXRob2QsIGJhc2VkIG9uIHBhcmFtZXRlcnMgcGFzc2VkIGludG8gZnVuY3Rpb25cblxuXG4gIEFsZ286XG5cbiAgICAtIGRlZmluZSBtZXRob2RzIG1hcFxuICAgIC0gY29tcGFyZSBhcmd1bWVudCB3aXRoIG1ldGhvZHNcbiAgICAtIG1ha2UgZmFsbGJhY2sgaWYgbWV0aG9kIGlzbid0IGRlZmluZWRcbiAgICAtIHRyYW5zbGF0ZSBwYXJhbWV0ZXJzIGZvciBzZWxlY3RlZCBtZXRob2QgYW5kIGV4ZWN1dGUgaXRcblxuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTEgKCkge1xuICBcblxuICBsZXQgbWV0aG9kcyA9IHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHJldHVybiBgSW5pdGlhbGl6aW5nLi4uYFxuICAgIH0sXG4gICAgaGVsbG86IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHJldHVybiBgSGVsbG8sICR7YXJnc31gXG4gICAgfSxcbiAgICBieWU6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIHJldHVybiBgR29vZGJ5ZSwgJHthcmdzfWBcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBncmVldGluZyA9IGZ1bmN0aW9uKHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBsZXQgYWN0aW9uID0gJ2luaXQnIC8vaW5pdCBkZWZhdWx0IHBhcmFtXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBtZXRob2RzW3R5cGVdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGFjdGlvbiA9IHR5cGVcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZHNbYWN0aW9uXShhcmdzKVxuICB9XG5cbiAgY29uc29sZS5sb2coZ3JlZXRpbmcoJ2hlbGxvJywgJ1dvcmxkJywgJ2FuZCcsICdtZScpKVxuICBjb25zb2xlLmxvZyhncmVldGluZygnYnllJywgJ1dhcicpKVxuICBjb25zb2xlLmxvZyhncmVldGluZygnc29tZU1ldGhvZCcsICdXYXInKSlcblxufVxuZXhhbXBsZTEoKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
