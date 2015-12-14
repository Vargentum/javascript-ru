'use strict';

/*
Внутренний интерфейс - приватные свойства и методы
Внешний - публичные свойства и методы. Доступен снаружи объекта.

ИНКАПСУЛЯЦИЯ - разделение внутреннего и внешнего интерфейса


/*Get right context from private method
1. Use call/apply
2. use bind
3. var self = this
*/

function example1() {

  function CoffeeMachine(power) {
    this.watherAmount = 0;

    console.log('Created coffee machine with power of  ' + power + 'VT.');
  }

  //create
  var cm = new CoffeeMachine(1000);

  //add water
  cm.waterAmount = 200;
}
// example1()

/*
add private gedBoilTime - return some int
add private onReady with alert about ready state
add public run, that exec onReady after getBoilTime
*/

function example2() {

  function CoffeeMachine(power) {
    this.watherAmount = 0;

    function getBoilTime() {
      return 5000;
    }

    function onReady() {
      console.log('Your coffee is ready!');
    }

    this.run = function () {
      setTimeout(onReady, getBoilTime());
    };

    console.log('Created coffee machine with ' + power + ' VT.');
  }

  var cm = new CoffeeMachine(1000);
  cm.waterAmount = 200;

  cm.run();
}

// example2()

/*Add formula for getBoilTime c * m * T*/

function example3() {

  function CoffeeMachine(power) {
    var self = this; // save correct context in clojure

    this.watherAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    function getBoilTime() {
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
      console.log('Your coffee is ready!');
    }

    this.run = function () {
      setTimeout(onReady, getBoilTime());
    };

    console.log('Created coffee machine with ' + power + ' VT.');
  }

  var cm = new CoffeeMachine(10000);
  cm.waterAmount = 200;

  cm.run();
}

// example3()

/*TASK 1

add public method stop(), which stops water boiling
*/

function task1() {

  function CoffeeMachine(power) {
    var self = this; // save correct context in clojure

    this.watherAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    var boilTimerID;

    function getBoilTime() {
      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
      console.log('Your coffee is ready!');
    }

    this.run = function () {
      boilTimerID = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
      clearTimeout(boilTimerID);
      console.log("No Coffee");
    };

    console.log('Created coffee machine with ' + power + ' VT.');
  }

  var cm = new CoffeeMachine(10000);
  cm.waterAmount = 200;
  cm.run();
  cm.stop();
}

task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLmludGVybmFsX2FuZF9leHRlcm5hbF9pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBUyxRQUFRLEdBQUc7O0FBRWxCLFdBQVMsYUFBYSxDQUFFLEtBQUssRUFBRTtBQUM3QixRQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFFdEIsV0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7R0FDdkU7OztBQUFBLEFBR0QsTUFBSSxFQUFFLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDOzs7QUFBQyxBQUdqQyxJQUFFLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztDQUV0Qjs7Ozs7Ozs7O0FBQUEsQUFXRCxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsV0FBUyxhQUFhLENBQUUsS0FBSyxFQUFFO0FBQzdCLFFBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDOztBQUV0QixhQUFTLFdBQVcsR0FBRztBQUNyQixhQUFPLElBQUksQ0FBQTtLQUNaOztBQUVELGFBQVMsT0FBTyxHQUFHO0FBQ2pCLGFBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0Qzs7QUFFRCxRQUFJLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDckIsZ0JBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtLQUNuQyxDQUFBOztBQUVELFdBQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0dBQzlEOztBQUVELE1BQUksRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLElBQUUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUVyQixJQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7Q0FDVDs7Ozs7O0FBQUEsQUFVRCxTQUFTLFFBQVEsR0FBSTs7QUFFbkIsV0FBUyxhQUFhLENBQUUsS0FBSyxFQUFFO0FBQzdCLFFBQUksSUFBSSxHQUFHLElBQUk7O0FBQUMsQUFFaEIsUUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUE7O0FBRTlCLGFBQVMsV0FBVyxHQUFHO0FBQ3JCLGFBQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFBO0tBQzNEOztBQUVELGFBQVMsT0FBTyxHQUFHO0FBQ2pCLGFBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0Qzs7QUFFRCxRQUFJLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDckIsZ0JBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtLQUNuQyxDQUFBOztBQUVELFdBQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0dBQzlEOztBQUVELE1BQUksRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLElBQUUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUVyQixJQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7Q0FDVDs7Ozs7Ozs7O0FBQUEsQUFZRCxTQUFTLEtBQUssR0FBRzs7QUFFaEIsV0FBUyxhQUFhLENBQUUsS0FBSyxFQUFFO0FBQzVCLFFBQUksSUFBSSxHQUFHLElBQUk7O0FBQUMsQUFFaEIsUUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdEIsUUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUE7O0FBRTlCLFFBQUksV0FBVyxDQUFDOztBQUVoQixhQUFTLFdBQVcsR0FBRztBQUNyQixhQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQTtLQUMzRDs7QUFFRCxhQUFTLE9BQU8sR0FBRztBQUNqQixhQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDdEM7O0FBRUQsUUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZO0FBQ3JCLGlCQUFXLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO0tBQ2pELENBQUE7O0FBRUQsUUFBSSxDQUFDLElBQUksR0FBRyxZQUFZO0FBQ3RCLGtCQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDekIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtLQUN6QixDQUFBOztBQUVELFdBQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0dBQzlEOztBQUVELE1BQUksRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLElBQUUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLElBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNSLElBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtDQUNWOztBQUVELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQxL29vcF9mdW5jdGlvbmFsLzAxLmludGVybmFsX2FuZF9leHRlcm5hbF9pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu0JLQvdGD0YLRgNC10L3QvdC40Lkg0LjQvdGC0LXRgNGE0LXQudGBIC0g0L/RgNC40LLQsNGC0L3Ri9C1INGB0LLQvtC50YHRgtCy0LAg0Lgg0LzQtdGC0L7QtNGLXG7QktC90LXRiNC90LjQuSAtINC/0YPQsdC70LjRh9C90YvQtSDRgdCy0L7QudGB0YLQstCwINC4INC80LXRgtC+0LTRiy4g0JTQvtGB0YLRg9C/0LXQvSDRgdC90LDRgNGD0LbQuCDQvtCx0YrQtdC60YLQsC5cblxu0JjQndCa0JDQn9Ch0KPQm9Cv0KbQmNCvIC0g0YDQsNC30LTQtdC70LXQvdC40LUg0LLQvdGD0YLRgNC10L3QvdC10LPQviDQuCDQstC90LXRiNC90LXQs9C+INC40L3RgtC10YDRhNC10LnRgdCwXG5cblxuLypHZXQgcmlnaHQgY29udGV4dCBmcm9tIHByaXZhdGUgbWV0aG9kXG4xLiBVc2UgY2FsbC9hcHBseVxuMi4gdXNlIGJpbmRcbjMuIHZhciBzZWxmID0gdGhpc1xuKi9cblxuXG5mdW5jdGlvbiBleGFtcGxlMSgpIHtcblxuICBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lIChwb3dlcikge1xuICAgIHRoaXMud2F0aGVyQW1vdW50ID0gMDtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBjb2ZmZWUgbWFjaGluZSB3aXRoIHBvd2VyIG9mICAnICsgcG93ZXIgKyAnVlQuJyk7XG4gIH1cblxuICAvL2NyZWF0ZVxuICB2YXIgY20gPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwKTtcblxuICAvL2FkZCB3YXRlclxuICBjbS53YXRlckFtb3VudCA9IDIwMDtcblxufVxuLy8gZXhhbXBsZTEoKVxuXG5cblxuLypcbmFkZCBwcml2YXRlIGdlZEJvaWxUaW1lIC0gcmV0dXJuIHNvbWUgaW50XG5hZGQgcHJpdmF0ZSBvblJlYWR5IHdpdGggYWxlcnQgYWJvdXQgcmVhZHkgc3RhdGVcbmFkZCBwdWJsaWMgcnVuLCB0aGF0IGV4ZWMgb25SZWFkeSBhZnRlciBnZXRCb2lsVGltZVxuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTIgKCkge1xuICAgIFxuICBmdW5jdGlvbiBDb2ZmZWVNYWNoaW5lIChwb3dlcikge1xuICAgIHRoaXMud2F0aGVyQW1vdW50ID0gMDtcblxuICAgIGZ1bmN0aW9uIGdldEJvaWxUaW1lKCkge1xuICAgICAgcmV0dXJuIDUwMDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgICAgY29uc29sZS5sb2coJ1lvdXIgY29mZmVlIGlzIHJlYWR5IScpO1xuICAgIH1cblxuICAgIHRoaXMucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChvblJlYWR5LCBnZXRCb2lsVGltZSgpKVxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBjb2ZmZWUgbWFjaGluZSB3aXRoICcgKyBwb3dlciArICcgVlQuJyk7XG4gIH1cblxuICB2YXIgY20gPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwKTtcbiAgY20ud2F0ZXJBbW91bnQgPSAyMDA7XG5cbiAgY20ucnVuKClcbn1cblxuLy8gZXhhbXBsZTIoKVxuXG5cblxuXG4vKkFkZCBmb3JtdWxhIGZvciBnZXRCb2lsVGltZSBjICogbSAqIFQqL1xuXG5cbmZ1bmN0aW9uIGV4YW1wbGUzICgpIHtcbiAgICBcbiAgZnVuY3Rpb24gQ29mZmVlTWFjaGluZSAocG93ZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIHNhdmUgY29ycmVjdCBjb250ZXh0IGluIGNsb2p1cmVcbiAgICBcbiAgICB0aGlzLndhdGhlckFtb3VudCA9IDA7XG4gICAgdmFyIFdBVEVSX0hFQVRfQ0FQQUNJVFkgPSA0MjAwXG5cbiAgICBmdW5jdGlvbiBnZXRCb2lsVGltZSgpIHtcbiAgICAgIHJldHVybiBzZWxmLndhdGVyQW1vdW50ICogV0FURVJfSEVBVF9DQVBBQ0lUWSAqIDgwIC8gcG93ZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgICAgY29uc29sZS5sb2coJ1lvdXIgY29mZmVlIGlzIHJlYWR5IScpO1xuICAgIH1cblxuICAgIHRoaXMucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChvblJlYWR5LCBnZXRCb2lsVGltZSgpKVxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBjb2ZmZWUgbWFjaGluZSB3aXRoICcgKyBwb3dlciArICcgVlQuJyk7XG4gIH1cblxuICB2YXIgY20gPSBuZXcgQ29mZmVlTWFjaGluZSgxMDAwMCk7XG4gIGNtLndhdGVyQW1vdW50ID0gMjAwO1xuXG4gIGNtLnJ1bigpXG59XG5cbi8vIGV4YW1wbGUzKClcblxuXG5cblxuLypUQVNLIDFcblxuYWRkIHB1YmxpYyBtZXRob2Qgc3RvcCgpLCB3aGljaCBzdG9wcyB3YXRlciBib2lsaW5nXG4qL1xuXG5mdW5jdGlvbiB0YXNrMSgpIHtcblxuIGZ1bmN0aW9uIENvZmZlZU1hY2hpbmUgKHBvd2VyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBzYXZlIGNvcnJlY3QgY29udGV4dCBpbiBjbG9qdXJlXG4gICAgXG4gICAgdGhpcy53YXRoZXJBbW91bnQgPSAwO1xuICAgIHZhciBXQVRFUl9IRUFUX0NBUEFDSVRZID0gNDIwMFxuXG4gICAgdmFyIGJvaWxUaW1lcklEO1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9pbFRpbWUoKSB7XG4gICAgICByZXR1cm4gc2VsZi53YXRlckFtb3VudCAqIFdBVEVSX0hFQVRfQ0FQQUNJVFkgKiA4MCAvIHBvd2VyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGNvZmZlZSBpcyByZWFkeSEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvaWxUaW1lcklEID0gc2V0VGltZW91dChvblJlYWR5LCBnZXRCb2lsVGltZSgpKVxuICAgIH1cblxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChib2lsVGltZXJJRClcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gQ29mZmVlXCIpXG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIGNvZmZlZSBtYWNoaW5lIHdpdGggJyArIHBvd2VyICsgJyBWVC4nKTtcbiAgfVxuXG4gIHZhciBjbSA9IG5ldyBDb2ZmZWVNYWNoaW5lKDEwMDAwKTtcbiAgY20ud2F0ZXJBbW91bnQgPSAyMDA7XG4gIGNtLnJ1bigpXG4gIGNtLnN0b3AoKVxufVxuXG50YXNrMSgpXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
