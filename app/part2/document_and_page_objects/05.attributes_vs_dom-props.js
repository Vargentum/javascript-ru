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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1LmF0dHJpYnV0ZXNfdnNfZG9tLXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQSxTQUFTLEtBQUssR0FBRztBQUNmLE1BQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDekMsTUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzNDLE1BQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVTs7QUFBQSxBQUU5QixTQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtDQUNyQjs7Ozs7QUFBQSxBQU9ELFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksbUJBQW1CLEdBQUcsNEJBQTRCLENBQUE7QUFDdEQsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUUxQyxPQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSSxFQUFJO0FBQzFDLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDcEMsUUFBSSxDQUFDLElBQUksRUFBRSxPQUFNO0FBQ2pCLFFBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0dBQzNFLENBQUMsQ0FBQTtDQUNIO0FBQ0QsS0FBSyxFQUFFLENBQUEiLCJmaWxlIjoicGFydDIvZG9jdW1lbnRfYW5kX3BhZ2Vfb2JqZWN0cy8wNS5hdHRyaWJ1dGVzX3ZzX2RvbS1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbkRPTSBwcm9wczpcbiAgLSBjYW4gYmUgYW55IHR5cGVcbiAgLSB3cml0YWJsZSAvIHJlYWRhYmxlXG4gIC0gY2FuIGRlZmluZSBjdXN0b20gcHJvcHMgLyBtZXRob2RzXG4gIC0gcmVnaXN0ZXIgZGVwZW5kZW50XG4gIC0gbm9uLXZpc2libGUgaW4gaW5uZXJIVE1MXG5cblxuQXR0cmlidXRlczpcbiAgLSBzdHJpbmcgb25seTogbm90IHN0cmluZyB3aWxsIGJlIGF1dG8tY29udmVydGVkXG4gIC0gcmVhZGFibGVcbiAgLSByZWdpc3RlciBpbmRlcGVuZGVuZFxuICAtIHZpc2libGUgaW4gaW5uZXJIVE1MXG5cbiAgTWV0aG9kcyB0byB3b3JrIHdpdGggYXR0cmlidXRlczpcbiAgICAtIGVsZW0uaGFzQXR0cmlidXRlKG5hbWUpXG4gICAgLSBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKVxuICAgIC0gZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsKVxuICAgIC0gZWxlbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcblxuICBlbGVtLmF0dHJpYnV0ZXNcbiAgICAtIGNvbGxlY3Rpb25cbiAgICAtIGNvbnRhaW5zIGFsbCBub2RlIGF0dHJpYnV0ZXMgYXMge25hbWU6ICwgdmFsdWU6fSBvYmplY3RcblxuXG5FeGFtcGxlMTogaHR0cHM6Ly9qc2Jpbi5jb20veW9kYW5vL2VkaXQ/aHRtbCxqcyxjb25zb2xlICBcblxuXG5cbkF0dHIvUHJvcHMgU3luY2hpbmc6XG4gIC0gb2NjdXJzIHdoZW4gYnJvd3NlciBwYXJzZXMgdGhlIGRvY3VtZW50XG4gIC0gYXR0cmlidXRlcyBiZWNvbWUgcHJvcHNcbiAgLSBzb21ldGltZXMgbm90IDEtaW4tMVxuICAgIGxpbmsgaHJlZjogXG4gICAgICAtIGF0dHJpYnV0ZSBjYW4gYmUgYW55IHN0cmluZ1xuICAgICAgLSBwcm9wIG11c3QgYmUgYSB2YWxpZCBsaW5rIGFkZHJlc3MsIGxpa2UgXCJodHRwOi8vLi4uXCJcblxuXG5Qcm9wIGRlcGVuZGVudCBvbiBBdHRyaWJ1dGVcbiAgLSBtb3N0IGNhc2VzXG4gIC0gUHJvcCBjaGFuZ2VzIG5vdCBjaGFuZ2UgQXR0cmlidXRlXG4gIC0gaGludDogdXNlIHRvIGNvbXBhcmUgdXNlci1jaGFuZ2VkIHZhbHVlcyBmcm9tIHByb3BzIHdpdGggb3JpZ2luIChzdG9yZWQgaW4gQXR0cmlidXRlKVxuXG5cbk5vbi1zdGFuZGFydCBhdHRyaWJ1dGVzXG4gIC0gbm90IGRlc2NyaWJlZCBpbiBXM0Mgc3RhbmRhcnRcbiAgLSBubyBET00tcHJvcGVydGllcyBmb3IgdGhlbVxuXG5cbkRhdGEgYXR0cmlidXRlc1xuICAtIGRhdGEtKlxuICAtIGRlZmluZWQgZm9yIGRhdGEgc3RvcmVcbiAgLSBhbGxvd2VkIGJ5IEhUTUw1XG4gIC0gY2FuIGFjY2VzcyB0byBjb3JyZXNwb25kaW5nIHByb3BlcnR5IHdpdGggYGRhdGFzZXRgXG4gICAgICA8ZGl2IGlkPVwiZWxlbVwiIGRhdGEtYWJvdXQ9XCJmb29cIiBkYXRhLXVzZXItbG9jYXRpb249XCJiYXJcIj48L2Rpdj5cbiAgICAgIGVsZW0uZGF0YXNldC5hYm91dCAvLyBcImZvb1wiXG4gICAgICBlbGVtLmRhdGFzZXQudXNlckxvY2F0aW9uIC8vIFwiYmFyXCIgKHByb3Agd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byBjYWxtZWxDYXNlIHZhcmlhbnQpXG5cblxuXG5CZXR0ZXIgY29kZSAmIG9sZCBJRSBzdXBwb3J0IHRpcHM6XG4gIC0gdXNlIFByb3BzIGVsc2V3aGVyZVxuICAtIHVzZSBBdHRyaWJ1dGVzIHdoZW46XG4gICAgLSBnZXQgbm9uLXN0YW5kYXJ0IEF0dHJpYnV0ZSAoY3Jvc3Nicm93c2VybHkpXG4gICAgLSBnZXQgYG9yaWdpbmFsYCB2YWx1ZSBvZiBzdGFuZGFydCBBdHRyaWJ1dGUgKGlucHV0IHZhbHVlPVwiLi4uXCIpXG4gICAgLSBnZXQgYWxsIGF0dHJpYnV0ZXMgKHZpYSBlbGVtLmF0dHJpYnV0ZXMpXG5cbiovXG5cblxuXG4vKlRhc2sgMToqL1xuXG5mdW5jdGlvbiB0YXNrMSgpIHtcbiAgbGV0IHcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpZGdldFwiKVxuICBsZXQgd24gPSB3LmdldEF0dHJpYnV0ZSgnZGF0YS13aWRnZXQtbmFtZScpXG4gIGxldCB3bjEgPSB3LmRhdGFzZXQud2lkZ2V0TmFtZSAvLyBJRTEwLVxuXG4gIGNvbnNvbGUubG9nKHduLCB3bjEpXG59XG4vLyB0YXNrMSgpXG5cblxuXG4vKlRhc2sgMiovXG5cbmZ1bmN0aW9uIHRhc2syICgpIHtcbiAgbGV0IGV4dGVybmFsTGlua1BhdHRlcm4gPSAvXi4rPzpcXC9cXC8oPyFpbnRlcm5hbC5jb20pL2lcbiAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW5rcywgbGluayA9PiB7XG4gICAgbGV0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgaWYgKCFocmVmKSByZXR1cm5cbiAgICBpZiAoZXh0ZXJuYWxMaW5rUGF0dGVybi50ZXN0KGhyZWYpKSBsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXh0ZXJuYWwnKVxuICB9KVxufVxudGFzazIoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
