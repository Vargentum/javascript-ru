"use strict";

/*
  Map: object with keys of any type:
    - string
    - number
    - bool
    - object

  constructor: new Map(iterableObject)
  
  methods
    - .set(key, val) chainable
    - .delete(key)
    - .get(key)
    - .has(key)
    - .clear()

  property
    - .size

  iteration:
    - for..of
    - .forEach(key, value, map)
*/

function example1() {
  var user = { name: "Tom" };

  var m = new Map([["1", "1"], [1, 1], [true, 'somestr'], [user, 'aboutUser']]);
  console.log(m);

  var m1 = new Map();
  m1.set(user, "infoUser");
  console.log(m1.get(user));
}
// example1()

/*
  Set: collection. any item can be presented only ONCE

  constructor new Set(anyType)

  methods:
    - .add(item) chainable
    - .delete(item)
    - .has(item)
    - .clear()

  property:
    - .size

  iteration:
    - for..of
    - forEach(value, valueRepeat, set)

      valueRepeat === value (added for arguments equality with Map)
*/

function example2() {

  var me = { name: "Vlad" };
  var he = { name: "John" };

  var s = new Set();

  s.add(me).add(he).add(me) //refused
  .add(he); //refused

  console.log(s.size); // 2

  s.forEach(function (val, v, set) {
    console.log(val === v); // true
  });
}
// example2()

/*
WeakMap an WeakSet - cropped versions of following data structures,
that not blocks garbage collection

So, if object persists only in WeakMap/WeakSet - it will be deleted

Useful for collecting additional info about main object
Don't remove manually, when main object is deleted.

  constructor WeakMap/WeakSet


  methods
    - set()
    - get()
    - has()
    - delete()
    all methods available only with direct key/item

  not available
    - size
    - clear()
    - iteration

*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA5LnNldF9tYXBfd2Vha1NldF93ZWFrTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLFNBQVMsUUFBUSxHQUFJO0FBQ25CLE1BQUksSUFBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFBOztBQUV4QixNQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUNkLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUNqQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FDcEIsQ0FBQyxDQUFBO0FBQ0YsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFZixNQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ2xCLElBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3hCLFNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0NBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQTBCRCxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsTUFBSSxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUE7QUFDdkIsTUFBSSxFQUFFLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUE7O0FBRXZCLE1BQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7O0FBRWpCLEdBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQ1AsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUNQLEdBQUcsQ0FBQyxFQUFFO0FBQUMsR0FDUCxHQUFHLENBQUMsRUFBRSxDQUFDOztBQUFBLEFBRVQsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztBQUFDLEFBR3BCLEdBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBSztBQUN6QixXQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFBQyxHQUN4QixDQUFDLENBQUE7Q0FFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6ImVzMjAxNS8wOS5zZXRfbWFwX3dlYWtTZXRfd2Vha01hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIE1hcDogb2JqZWN0IHdpdGgga2V5cyBvZiBhbnkgdHlwZTpcbiAgICAtIHN0cmluZ1xuICAgIC0gbnVtYmVyXG4gICAgLSBib29sXG4gICAgLSBvYmplY3RcblxuICBjb25zdHJ1Y3RvcjogbmV3IE1hcChpdGVyYWJsZU9iamVjdClcbiAgXG4gIG1ldGhvZHNcbiAgICAtIC5zZXQoa2V5LCB2YWwpIGNoYWluYWJsZVxuICAgIC0gLmRlbGV0ZShrZXkpXG4gICAgLSAuZ2V0KGtleSlcbiAgICAtIC5oYXMoa2V5KVxuICAgIC0gLmNsZWFyKClcblxuICBwcm9wZXJ0eVxuICAgIC0gLnNpemVcblxuICBpdGVyYXRpb246XG4gICAgLSBmb3IuLm9mXG4gICAgLSAuZm9yRWFjaChrZXksIHZhbHVlLCBtYXApXG4qL1xuXG5mdW5jdGlvbiBleGFtcGxlMSAoKSB7XG4gIGxldCB1c2VyID0ge25hbWU6IFwiVG9tXCJ9XG5cbiAgbGV0IG0gPSBuZXcgTWFwKFtcbiAgICBbXCIxXCIsIFwiMVwiXSxcbiAgICBbMSwgMV0sXG4gICAgW3RydWUsICdzb21lc3RyJ10sXG4gICAgW3VzZXIsICdhYm91dFVzZXInXVxuICBdKVxuICBjb25zb2xlLmxvZyhtKTtcblxuICBsZXQgbTEgPSBuZXcgTWFwKClcbiAgbTEuc2V0KHVzZXIsIFwiaW5mb1VzZXJcIilcbiAgY29uc29sZS5sb2cobTEuZ2V0KHVzZXIpKVxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLypcbiAgU2V0OiBjb2xsZWN0aW9uLiBhbnkgaXRlbSBjYW4gYmUgcHJlc2VudGVkIG9ubHkgT05DRVxuXG4gIGNvbnN0cnVjdG9yIG5ldyBTZXQoYW55VHlwZSlcblxuICBtZXRob2RzOlxuICAgIC0gLmFkZChpdGVtKSBjaGFpbmFibGVcbiAgICAtIC5kZWxldGUoaXRlbSlcbiAgICAtIC5oYXMoaXRlbSlcbiAgICAtIC5jbGVhcigpXG5cbiAgcHJvcGVydHk6XG4gICAgLSAuc2l6ZVxuXG4gIGl0ZXJhdGlvbjpcbiAgICAtIGZvci4ub2ZcbiAgICAtIGZvckVhY2godmFsdWUsIHZhbHVlUmVwZWF0LCBzZXQpXG5cbiAgICAgIHZhbHVlUmVwZWF0ID09PSB2YWx1ZSAoYWRkZWQgZm9yIGFyZ3VtZW50cyBlcXVhbGl0eSB3aXRoIE1hcClcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUyICgpIHtcblxuICBsZXQgbWUgPSB7bmFtZTogXCJWbGFkXCJ9XG4gIGxldCBoZSA9IHtuYW1lOiBcIkpvaG5cIn1cbiAgXG4gIGxldCBzID0gbmV3IFNldCgpXG5cbiAgcy5hZGQobWUpXG4gICAuYWRkKGhlKVxuICAgLmFkZChtZSkgLy9yZWZ1c2VkXG4gICAuYWRkKGhlKSAvL3JlZnVzZWRcblxuICBjb25zb2xlLmxvZyhzLnNpemUpOyAvLyAyXG5cblxuICBzLmZvckVhY2goKHZhbCwgdiwgc2V0KSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsID09PSB2KTsgLy8gdHJ1ZVxuICB9KVxuXG59XG4vLyBleGFtcGxlMigpXG5cblxuLypcbldlYWtNYXAgYW4gV2Vha1NldCAtIGNyb3BwZWQgdmVyc2lvbnMgb2YgZm9sbG93aW5nIGRhdGEgc3RydWN0dXJlcyxcbnRoYXQgbm90IGJsb2NrcyBnYXJiYWdlIGNvbGxlY3Rpb25cblxuU28sIGlmIG9iamVjdCBwZXJzaXN0cyBvbmx5IGluIFdlYWtNYXAvV2Vha1NldCAtIGl0IHdpbGwgYmUgZGVsZXRlZFxuXG5Vc2VmdWwgZm9yIGNvbGxlY3RpbmcgYWRkaXRpb25hbCBpbmZvIGFib3V0IG1haW4gb2JqZWN0XG5Eb24ndCByZW1vdmUgbWFudWFsbHksIHdoZW4gbWFpbiBvYmplY3QgaXMgZGVsZXRlZC5cblxuICBjb25zdHJ1Y3RvciBXZWFrTWFwL1dlYWtTZXRcblxuXG4gIG1ldGhvZHNcbiAgICAtIHNldCgpXG4gICAgLSBnZXQoKVxuICAgIC0gaGFzKClcbiAgICAtIGRlbGV0ZSgpXG4gICAgYWxsIG1ldGhvZHMgYXZhaWxhYmxlIG9ubHkgd2l0aCBkaXJlY3Qga2V5L2l0ZW1cblxuICBub3QgYXZhaWxhYmxlXG4gICAgLSBzaXplXG4gICAgLSBjbGVhcigpXG4gICAgLSBpdGVyYXRpb25cblxuKi9cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
