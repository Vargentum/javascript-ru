/*
Example 1:
*/

function example1 () {

  function Animal(name) {
    this.name = name;
    this.speed = 0;
  }

  Animal.prototype.run = function(speed) {
    this.speed += speed;
    console.log( this.name + ' бежит, скорость ' + this.speed );
  };

  Animal.prototype.stop = function() {
    this.speed = 0;
    console.log( this.name + ' стоит' );
  };

  function Rabbit(name) {
    this.name = name;
    this.speed = 0;
  }

  /* set right prototype */
  
  Rabbit.prototype = Object.create(Animal.prototype)
  Rabbit.prototype.constructor = Rabbit



  Rabbit.prototype.jump = function() {
    this.speed++;
    console.log( this.name + ' прыгает' );
  };




  var rabbit = new Rabbit('Кроль');
}

// example1()



/*
Parent Constructo call

do this if you want to avoid duplications in some kind of Decendants
*/


function example2 () {
  function Animal(name) {
    this.name = name;
    this.speed = 0;
  }

  function Rabbit(name) {
    this.name = name;
    this.speed = 0;
  }

  //better
  function Rabbit (argument) {
    Animal.apply(this, arguments)
  }
}
// example2()



/*
Parent Method overriding
*/

function example3 () {
  function Animal(name) {
    this.name = name;
    this.speed = 0;
  }

  Animal.prototype.run = function(speed) {
    this.speed += speed;
    console.log( this.name + ' бежит, скорость ' + this.speed );
  };

  function Rabbit(name) {
    this.name = name;
    this.speed = 0;
  }

  Rabbit.prototype = Object.create(Animal.prototype)
  Rabbit.prototype.constructor = Rabbit

  Rabbit.prototype.jump = function() {
    this.speed++;
    console.log( this.name + ' прыгает' );
  };

  //total overriding
  Rabbit.prototype.run = function () {
    this.speed++
    this.jump()
  }

  // extend parent method
  Rabbit.prototype.run = function() {
    Animal.prototype.run.apply(this, arguments) // don't forget about proper context
    this.jump()
  };

  var rabbit = new Rabbit('Кроль');
}
// example3()




/*Tasks

Find a mistake in inheritance?
How it can affect the code?
*/

function task1 () {
  
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.walk = function() {
    console.log( "ходит " + this.name );
  };

  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype = Animal.prototype;

  Rabbit.prototype.walk = function() {
    console.log( "прыгает! и ходит: " + this.name );
  };

  var a = new Animal('a')

  var r = new Rabbit('r')

  a.walk() // прыгает и ходит????
  r.walk()
}

// task1()

/*Decision: Changes of Rabbit's prototype affect the Animal's one
*/


/*Task 2
Find the mistake. How it can affect the code?
*/

function task2 () {

  function Animal(name) {
    this.name = name;

    this.walk = function() {
      console.log( "ходит " + this.name );
    };
  }


  function Rabbit(name) {
    Animal.apply(this, arguments);
  }

  Rabbit.prototype = Object.create(Animal.prototype);

  Rabbit.prototype.walk = function() {
    console.log( "прыгает " + this.name );
  };

  var rabbit = new Rabbit("Кроль");
  rabbit.walk();
}
// task2()

/*Desicion: method .run() will be fount in Context (from Animal)
not in Prototype (correct, that we need)

Conclusion: define methods in prototype
*/


/*Task 3: rewrite Clock in prototype style

*/

function task3 () {
  //
  function Clock(options) {
    var template = options.template;
    var timer;
  
    function render() {
      var date = new Date();
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      var min = date.getMinutes();
      if (min < 10) min = '0' + min;
      var sec = date.getSeconds();
      if (sec < 10) sec = '0' + sec;
      var output = template.replace('h', hours).replace('m', min).replace('s', sec);
      console.log(output);
    }
    this.stop = function() {
      clearInterval(timer);
    };
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    }
  }
  
  var cf = new Clock({
    template: 'h:m:s'
  });
  // cf.start();


  function ClockP (options) {
    this._template = options.template
    this._timer = null
  }

  ClockP.prototype.render = function() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var min = date.getMinutes();
    if (min < 10) min = '0' + min;
    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;
    var output = this._template.replace('h', hours)
                               .replace('m', min)
                               .replace('s', sec);
    console.log(output);
  };

  ClockP.prototype.stop = function () {
    clearInterval(this._timer)
  }

  ClockP.prototype.start = function() {
    this.render()
    this._timer = setInterval(this.render.bind(this), 1000)
  };

  var cp = new ClockP({
    template: 'h:m:s'
  });
  cp.start();

}
// task3()





/*Task 4 

extend clock with new descendant, that has precision animation
*/

function task4 () {

  function Clock (options) {
    this._template = options.template
  }
  
  Clock.prototype.render = function() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var min = date.getMinutes();
    if (min < 10) min = '0' + min;
    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;
    var output = this._template.replace('h', hours)
                               .replace('m', min)
                               .replace('s', sec);
    console.log(output);
  };

  Clock.prototype.stop = function () {
    clearInterval(this._timer)
  }

  Clock.prototype.start = function() {
    this.render()
    this._timer = setInterval(this.render.bind(this), 1000)
  };



  // Descendant

  function RelativeClock(options) {
    Clock.apply(this, arguments) // coffee script super() :)
    this._precision = options.precision || 1000
  };

  RelativeClock.prototype = Object.create(Clock.prototype);
  RelativeClock.prototype.constructor = RelativeClock;

  RelativeClock.prototype.start = function() {
    this.render()
    this._timer = setInterval(this.render.bind(this), this._precision)
  };

  var rc = new RelativeClock({
    template: "h:m:s",
    precision: 10000
  })
  rc.start()
}
// task4()




/*Task 5:

Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.

При вызове open() состояние меняется на STATE_ANIMATING,
а через 1 секунду, по таймеру, открытие завершается вызовом open() родителя.

Вызов close() при необходимости отменяет таймер анимации
(назначаемый в open) и передаёт вызов родительскому close.

Метод showState для нового состояния выводит "анимация",
для остальных — полагается на родителя.
*/


function task5 () {
  
  function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
  };

  Menu.STATE_OPEN = 1;
  Menu.STATE_CLOSED = 0;

  Menu.prototype.open = function() {
    this._state = Menu.STATE_OPEN;
  };

  Menu.prototype.close = function() {
    this._state = Menu.STATE_CLOSED;
  };

  Menu.prototype._stateAsString = function() {
    switch (this._state) {
      case Menu.STATE_OPEN:
        return 'открыто';

      case Menu.STATE_CLOSED:
        return 'закрыто';
    }
  };

  Menu.prototype.showState = function() {
    console.log(this._stateAsString());
  };


  
  // Animating menu

  function AnimatingMenu (state) {
    Menu.apply(this, arguments)
    this._animationDuration = state.animationDuration || 1000
  }

  AnimatingMenu.STATE_ANIMATING = 'анимация'

  AnimatingMenu.prototype = Object.create(Menu.prototype)
  AnimatingMenu.prototype.constructor = AnimatingMenu

  AnimatingMenu.prototype.open = function(){
    this._state = AnimatingMenu.STATE_ANIMATING
    this._timer = setTimeout(Menu.prototype.open.bind(this, arguments), this._animationDuration)
  };

  AnimatingMenu.prototype.close = function(){
    clearTimeout(this._timer)
    Menu.prototype.close.apply(this, arguments)
  };

  AnimatingMenu.prototype.showState = function () {
    if (this._state === AnimatingMenu.STATE_ANIMATING) {
      console.log(this._state);
    } else {
      Menu.prototype.showState.apply(this, arguments)
    }
  }

  var am = new AnimatingMenu(false)
  am.showState() //closed
  am.open()
  am.showState() //animation
  setTimeout(am.showState.bind(am), 1001)
  am.showState() //opened
}
// task5()



/*Task 6: constructor checking
what write console.log?
*/

function task6 () {
  
  function Animal() {}

  function Rabbit() {}
  Rabbit.prototype = Object.create(Animal.prototype);

  var rabbit = new Rabbit();

  console.log( rabbit.constructor == Rabbit );
}
task6()

/*Answer: false, because rabbit.constructor is Animal,
to prevent this - set constructor explicitly
Rabbit.prototype.constructor = Rabbit
*/

