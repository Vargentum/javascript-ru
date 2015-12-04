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

function example1 () {
  let user = {name: "Tom"}

  let m = new Map([
    ["1", "1"],
    [1, 1],
    [true, 'somestr'],
    [user, 'aboutUser']
  ])
  console.log(m);

  let m1 = new Map()
  m1.set(user, "infoUser")
  console.log(m1.get(user))
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

function example2 () {

  let me = {name: "Vlad"}
  let he = {name: "John"}
  
  let s = new Set()

  s.add(me)
   .add(he)
   .add(me) //refused
   .add(he) //refused

  console.log(s.size); // 2


  s.forEach((val, v, set) => {
    console.log(val === v); // true
  })

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

