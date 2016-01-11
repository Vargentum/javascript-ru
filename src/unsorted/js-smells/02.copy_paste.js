/*Old code*/

function jsSmells02 () {
    
  var boxes = document.querySelectorAll('.Box');

  [].forEach.call(boxes, function(element, index) {
    element.innerText = "Box: " + index;
    element.style.backgroundColor =
      '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  });


  var circles = document.querySelectorAll(".Circle");

  [].forEach.call(circles, function(element, index) {
    element.innerText = "Circle: " + index;
    element.style.color =
      '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  });


  /*Refactor*/

  let getRandom = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  let $$ = selector => [].slice.call(document.querySelectorAll(selector || '*'))


  let styleElems = (selector, caption) => {

    $$(selector).forEach(elems, (elem, idx) => {
      elem.innerText = `${caption}: ${idx}`
      elem.style.color = getRandom
    })
  }


  styleElems('.box', 'Box')
  styleElems('.circle', 'Circle')

}
// jsSmells02()