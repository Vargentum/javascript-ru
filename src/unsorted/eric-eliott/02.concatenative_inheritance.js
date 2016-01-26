/*

Concatenative inheritance - 
  
  process of combining properties of one or more source objects
  into new destination object

  It's a heart and soul of Prototypal OO


  There are some ways to implement CI:

    1. Defaults/Overriden pattern (Jquery)

    2. Object composition (lodash, Object.assign)


  Dynamic object extension

*/



// Defaults/Overrides pattern (from >=ES5)

function example1 () {
  
  let defaults = {
    bar: 'no',
    baz: 'works'
  }

  function foo(config) {
    let settings = _.assign(defaults, config)
    
    return `${settings.bar}, ${settings.baz}`
  }

  console.log(foo({
    bar: 'it'
  }))               // it, works 
}
// example1()






// Object composition Example

function example2 () {

  const distortion = { distortion: 1 };
  const volume = { volume: 1 };
  const cabinet = { cabinet: 'maple' };
  const lowCut = { lowCut: 1 };
  const inputLevel = { inputLevel: 1 };


  const GuitarAmp = (options) => {
    return Object.assign({}, distortion, volume, cabinet, options)
  }

  const BassAmp = (options) => {
    return Object.assign({}, lowCut, volume, cabinet, options)
  }


  test('BassAmp', assert => {
    const msg = 'should have volume, lowCut, and cabinet';
    const level = 2;
    const cabinet = 'vintage';

    const actual = BassAmp({
      lowCut: level,
      volume: level,
      cabinet
    });
    const expected = {
      lowCut: level,
      volume: level,
      cabinet
    };

    assert.deepEqual(actual, expected, msg)
    assert.end()
  })
  
}
// example2()


