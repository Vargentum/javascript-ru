'use strict';

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
  var w = document.getElementById("widget");
  var wn = w.getAttribute('data-widget-name');
  var wn1 = w.dataset.widgetName; // IE10-

  console.log(wn, wn1);
}
// task1()

/*Task 2*/

function task2() {
  var externalLinkPattern = /^.+?:\/\/(?!internal.com)/i;
  var links = document.querySelectorAll('a');

  Array.prototype.forEach.call(links, function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    if (externalLinkPattern.test(href)) link.setAttribute('class', 'external');
  });
}
task2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1LmF0dHJpYnV0ZXNfdnNfZG9tLXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQSxTQUFTLEtBQUssR0FBRztBQUNmLE1BQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDekMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzNDLE1BQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVTs7QUFBQSxBQUU5QixTQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtDQUNyQjs7Ozs7QUFBQSxBQU9ELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksbUJBQW1CLEdBQUcsNEJBQTRCLENBQUE7QUFDdEQsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUUxQyxPQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSSxFQUFJO0FBQzFDLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDcEMsUUFBSSxDQUFDLElBQUksRUFBRSxPQUFNO0FBQ2pCLFFBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0dBQzNFLENBQUMsQ0FBQTtDQUNIO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZG9tLzA1LmF0dHJpYnV0ZXNfdnNfZG9tLXByb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuRE9NIHByb3BzOlxuICAtIGNhbiBiZSBhbnkgdHlwZVxuICAtIHdyaXRhYmxlIC8gcmVhZGFibGVcbiAgLSBjYW4gZGVmaW5lIGN1c3RvbSBwcm9wcyAvIG1ldGhvZHNcbiAgLSByZWdpc3RlciBkZXBlbmRlbnRcbiAgLSBub24tdmlzaWJsZSBpbiBpbm5lckhUTUxcblxuXG5BdHRyaWJ1dGVzOlxuICAtIHN0cmluZyBvbmx5OiBub3Qgc3RyaW5nIHdpbGwgYmUgYXV0by1jb252ZXJ0ZWRcbiAgLSByZWFkYWJsZVxuICAtIHJlZ2lzdGVyIGluZGVwZW5kZW5kXG4gIC0gdmlzaWJsZSBpbiBpbm5lckhUTUxcblxuICBNZXRob2RzIHRvIHdvcmsgd2l0aCBhdHRyaWJ1dGVzOlxuICAgIC0gZWxlbS5oYXNBdHRyaWJ1dGUobmFtZSlcbiAgICAtIGVsZW0uZ2V0QXR0cmlidXRlKG5hbWUpXG4gICAgLSBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCB2YWwpXG4gICAgLSBlbGVtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuXG4gIGVsZW0uYXR0cmlidXRlc1xuICAgIC0gY29sbGVjdGlvblxuICAgIC0gY29udGFpbnMgYWxsIG5vZGUgYXR0cmlidXRlcyBhcyB7bmFtZTogLCB2YWx1ZTp9IG9iamVjdFxuXG5cbkV4YW1wbGUxOiBodHRwczovL2pzYmluLmNvbS95b2Rhbm8vZWRpdD9odG1sLGpzLGNvbnNvbGUgIFxuXG5cblxuQXR0ci9Qcm9wcyBTeW5jaGluZzpcbiAgLSBvY2N1cnMgd2hlbiBicm93c2VyIHBhcnNlcyB0aGUgZG9jdW1lbnRcbiAgLSBhdHRyaWJ1dGVzIGJlY29tZSBwcm9wc1xuICAtIHNvbWV0aW1lcyBub3QgMS1pbi0xXG4gICAgbGluayBocmVmOiBcbiAgICAgIC0gYXR0cmlidXRlIGNhbiBiZSBhbnkgc3RyaW5nXG4gICAgICAtIHByb3AgbXVzdCBiZSBhIHZhbGlkIGxpbmsgYWRkcmVzcywgbGlrZSBcImh0dHA6Ly8uLi5cIlxuXG5cblByb3AgZGVwZW5kZW50IG9uIEF0dHJpYnV0ZVxuICAtIG1vc3QgY2FzZXNcbiAgLSBQcm9wIGNoYW5nZXMgbm90IGNoYW5nZSBBdHRyaWJ1dGVcbiAgLSBoaW50OiB1c2UgdG8gY29tcGFyZSB1c2VyLWNoYW5nZWQgdmFsdWVzIGZyb20gcHJvcHMgd2l0aCBvcmlnaW4gKHN0b3JlZCBpbiBBdHRyaWJ1dGUpXG5cblxuTm9uLXN0YW5kYXJ0IGF0dHJpYnV0ZXNcbiAgLSBub3QgZGVzY3JpYmVkIGluIFczQyBzdGFuZGFydFxuICAtIG5vIERPTS1wcm9wZXJ0aWVzIGZvciB0aGVtXG5cblxuRGF0YSBhdHRyaWJ1dGVzXG4gIC0gZGF0YS0qXG4gIC0gZGVmaW5lZCBmb3IgZGF0YSBzdG9yZVxuICAtIGFsbG93ZWQgYnkgSFRNTDVcbiAgLSBjYW4gYWNjZXNzIHRvIGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgd2l0aCBgZGF0YXNldGBcbiAgICAgIDxkaXYgaWQ9XCJlbGVtXCIgZGF0YS1hYm91dD1cImZvb1wiIGRhdGEtdXNlci1sb2NhdGlvbj1cImJhclwiPjwvZGl2PlxuICAgICAgZWxlbS5kYXRhc2V0LmFib3V0IC8vIFwiZm9vXCJcbiAgICAgIGVsZW0uZGF0YXNldC51c2VyTG9jYXRpb24gLy8gXCJiYXJcIiAocHJvcCB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIGNhbG1lbENhc2UgdmFyaWFudClcblxuXG5cbkJldHRlciBjb2RlICYgb2xkIElFIHN1cHBvcnQgdGlwczpcbiAgLSB1c2UgUHJvcHMgZWxzZXdoZXJlXG4gIC0gdXNlIEF0dHJpYnV0ZXMgd2hlbjpcbiAgICAtIGdldCBub24tc3RhbmRhcnQgQXR0cmlidXRlIChjcm9zc2Jyb3dzZXJseSlcbiAgICAtIGdldCBgb3JpZ2luYWxgIHZhbHVlIG9mIHN0YW5kYXJ0IEF0dHJpYnV0ZSAoaW5wdXQgdmFsdWU9XCIuLi5cIilcbiAgICAtIGdldCBhbGwgYXR0cmlidXRlcyAodmlhIGVsZW0uYXR0cmlidXRlcylcblxuKi9cblxuXG5cbi8qVGFzayAxOiovXG5cbmZ1bmN0aW9uIHRhc2sxKCkge1xuICBsZXQgdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkZ2V0XCIpXG4gIGxldCB3biA9IHcuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZGdldC1uYW1lJylcbiAgbGV0IHduMSA9IHcuZGF0YXNldC53aWRnZXROYW1lIC8vIElFMTAtXG5cbiAgY29uc29sZS5sb2cod24sIHduMSlcbn1cbi8vIHRhc2sxKClcblxuXG5cbi8qVGFzayAyKi9cblxuZnVuY3Rpb24gdGFzazIgKCkge1xuICBsZXQgZXh0ZXJuYWxMaW5rUGF0dGVybiA9IC9eLis/OlxcL1xcLyg/IWludGVybmFsLmNvbSkvaVxuICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbmtzLCBsaW5rID0+IHtcbiAgICBsZXQgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBpZiAoIWhyZWYpIHJldHVyblxuICAgIGlmIChleHRlcm5hbExpbmtQYXR0ZXJuLnRlc3QoaHJlZikpIGxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHRlcm5hbCcpXG4gIH0pXG59XG50YXNrMigpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
