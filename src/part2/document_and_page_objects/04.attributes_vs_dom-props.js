/*

DOM props:
  - can be any type
  - writable / readable
  - can define custom props / methods
  - register dependent
  - non-visible in innerHTML


Attributes:
  - string only: not string will be auto-converted
  - readable
  - register independend
  - visible in innerHTML

  Methods to work with attributes:
    - elem.hasAttribute(name)
    - elem.getAttribute(name)
    - elem.setAttribute(name, val)
    - elem.removeAttribute(name)

  elem.attributes
    - collection
    - contains all node attributes as {name: , value:} object


Example1: https://jsbin.com/yodano/edit?html,js,console  



Attr/Props Synching:
  - occurs when browser parses the document
  - attributes become props
  - sometimes not 1-in-1
    link href: 
      - attribute can be any string
      - prop must be a valid link address, like "http://..."


Prop dependent on Attribute
  - most cases
  - Prop changes not change Attribute
  - hint: use to compare user-changed values from props with origin (stored in Attribute)


Non-standart attributes
  - not described in W3C standart
  - no DOM-properties for them


Data attributes
  - data-*
  - defined for data store
  - allowed by HTML5
  - can access to corresponding property with `dataset`
      <div id="elem" data-about="foo" data-user-location="bar"></div>
      elem.dataset.about // "foo"
      elem.dataset.userLocation // "bar" (prop will be transformed to calmelCase variant)



Better code & old IE support tips:
  - use Props elsewhere
  - use Attributes when:
    - get non-standart Attribute (crossbrowserly)
    - get `original` value of standart Attribute (input value="...")
    - get all attributes (via elem.attributes)

*/



/*Task 1:*/

function task1() {
  let w = document.getElementById("widget")
  let wn = w.getAttribute('data-widget-name')
  let wn1 = w.dataset.widgetName // IE10-

  console.log(wn, wn1)
}
// task1()



/*Task 2*/

function task2 () {
  let externalLinkPattern = /^.+?:\/\/(?!internal.com)/i
  let links = document.querySelectorAll('a')

  Array.prototype.forEach.call(links, link => {
    let href = link.getAttribute('href')
    if (!href) return
    if (externalLinkPattern.test(href)) link.setAttribute('class', 'external')
  })
}
task2()