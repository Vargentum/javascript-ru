function example1 () {

  require(['tape'], function (test) {

    test('Order WITH unintentional side effect.', function(t) {

      let cartProto = {
        items: [],
        add(item) {
          this.items.push(item)
        }
      }

      createCart = function(items) {
        let cart = Object.create(cartProto)
        // BAD: provide side effect: when change cart.items, items will be changed too (reference relations)
        cart.items = items 

        // GOOD: create copy of items (keep them immutable)
        cart.items = Object.create(items)
        return card
      }
      savedCart = createCart(['a', 'b', 'c'])

      session = {
        get() {
          return this.cart
        },
        cart: createCart(savedCart.items)
      }
      session.card.addItem('d')

      t.ok(session.cart.items.indexOf('d') === 1, 'Passes: Session cart has "d".')
      t.ok(session.cart.items.indexOf('d') === -1, 'Fails: The stored cart is unchanged.')
    })

  })


}
example1()




function example2 () {


  /*-----------------------
    Using IIFE  for encapsulating modules
  -----------------------*/

  /*Without IIFE*/

  let Lightbulb = function() {
    this.isOn = false
  }

  let lightbulb = new Lightbulb()

  let toggle = function () { 
    this.isOn = !this.isOn;
    return this.isOn;
  };
  Lightbulb.prototype.getState = function getState() { 
    // Implementation...
  };
  Lightbulb.prototype.off = function off() {
    // Implementation...
  };
  Lightbulb.prototype.on = function on() { 
    // Implementation...
  };
  Lightbulb.prototype.blink = function blink() { 
    // Implementation...
  };
  test('Prototypes without IIFE.', function () { 
    equal(lightbulb.toggle(), true, 'Lightbulb turns on.'); 
    equal(lightbulb.toggle(), false, 'Lightbulb turns off.');
  });


  /*With IIFE*/

  (function () {

    let toggle = function () {
      this.isOn = !this.isOn;
      return this.isOn;  
    }
    let getState = function getState() { 
      // Implementation...
    };
    let off = function off() {
      // Implementation...
    };
    let on = function on() { 
      // Implementation...
    };
    let blink = function blink() { 
      // Implementation...
    };

    let lightbulb = {
      isOn: false,
      toggle: toggle,
      getState: getState,
      off: off,
      on: on,
      blink: blink
    }


    test('Prototypes with IIFE.', function () { 
      equal(lightbulb.toggle(), true, 'Lightbulb turns on.'); 
      equal(lightbulb.toggle(), false 'Lightbulb turns off.');
    });
  }())
    

}
example2()
