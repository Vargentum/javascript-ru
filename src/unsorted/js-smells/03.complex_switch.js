function jsSmells03 () {

  /*Old*/
  function getArea(shape, options) {
    var area = 0;

    switch (shape) {
      case 'Triangle':
        area = .5 * options.width * options.height;
        break;

      case 'Square':
        area = Math.pow(options.width, 2);
        break;

      case 'Rectangle':
        area = options.width * options.height;
        break;

      default:
        throw new Error('Invalid shape: ' + shape);
    }

    return area;
  }

  getArea('Triangle',  { width: 100, height: 100 });
  getArea('Square',    { width: 100 });
  getArea('Rectangle', { width: 100, height: 100 });
  getArea('Bogus');


  /*Refactor with Strategy design principle

    - add global Strategy object (shapes) (*) (суть)
    - create All nessessary Strategies inside it
      - constructor (with & height)
      - getArea 

    - implement getArea function
      - pass correct shape from Strategy based on argument
      - throw error if no shape
      - return value from `shape.getArea` method (суть)
      



    * Useful technique to create global objects:
      - use self-evaluated anon function
      - invoke with: window.obj = window.obj || {}
      - simply use as argument

    ** Tip: 
        let a = b = [], create multiple pointers to same array
  */

  

  (function (shapes) {
    debugger
    
    let Triangle = shapes.triangle = function(config) {
      this.width = config.width
      this.height = config.height
    }

    Triangle.prototype.getArea = function(){
      return .5 * this.width * this.height;
    };

    /* ... easy modification &  ... */

    let Square = shapes.square = function(config) {
      this.size = config.width || config.height
    }

    Square.prototype.getArea = function(){
      return Math.pow(this.size, 2)
    };

    /* ... add all other types, that you need  ... */

  })(window.shapes = window.shapes || {});


  function getArea (shape, options) {
    let Shape = window.shapes[shape]
       ,area = 0

    if (Shape && typeof Shape === 'function') {
      area = new Shape(options).getArea()
    } else {
      throw new Error(`Incorrect shape type: ${shape}`)
    }

    return area
  }

  console.log(getArea('Triangle',  { width: 100, height: 100 }))
  console.log(getArea('Square',    { width: 100 }))
  console.log(getArea('Bogus'))





  /*Magic strings Refactor*/



}
jsSmells03()