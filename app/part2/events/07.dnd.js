'use strict';

/*



*/

function example1() {

  var calcBallCoords = function calcBallCoords(e) {
    var shiftY = e.pageY - (ball.getBoundingClientRect().top + pageYOffset);
    var shiftX = e.pageX - (ball.getBoundingClientRect().left + pageXOffset);

    ball.style.top = e.pageY - shiftY + 'px'; // strange `shift` behavior
    ball.style.left = e.pageX - shiftX + 'px'; // strange `shift` behavior
  };

  var dndStart = function dndStart(e) {
    if (e.target.getAttribute('id') !== 'ball') return;
    ball.style.position = 'absolute';
    ball.style.zIndex = '999';
    calcBallCoords(e);
    container.addEventListener('mousemove', calcBallCoords);
  };

  var dndEnd = function dndEnd(e) {
    ball.style.position = 'relative';
    ball.style.zIndex = 'auto';
    container.removeEventListener('mousemove', calcBallCoords);
  };

  ball.ondragstart = function () {
    return false;
  };
  container.addEventListener('mousedown', dndStart);
  container.addEventListener('mouseup', dndEnd);
}
// example1()

/*
Задача 1
Создайте слайдер:

Захватите мышкой синий бегунок и двигайте его, чтобы увидеть в работе.

Важно:

Слайдер должен нормально работать при резком движении мыши влево или вправо, за пределы полосы.
При этом бегунок должен останавливаться четко в нужном конце полосы.

При нажатом бегунке мышь может выходить за пределы полосы слайдера,
но слайдер пусть все равно работает (это удобно для пользователя).
*/

function task1() {

  var changeMarkPos = function changeMarkPos(e) {
    var lt = sliderMark.style.left;
    var sliderRect = slider.getBoundingClientRect();
    if (parseInt(lt) > sliderRect.right) {
      sliderMark.style.left = sliderRect.right + 'px';
    } else {
      sliderMark.style.left = e.pageX - sliderRect.left + 'px';
    }
  };
  var dndStart = function dndStart(e) {
    sliderWrap.addEventListener('mousemove', changeMarkPos);
  };
  var dndEnd = function dndEnd(e) {
    sliderWrap.removeEventListener('mousemove', changeMarkPos);
  };
  sliderMark.ondragstart = function () {
    return false;
  };
  sliderMark.addEventListener('mousedown', dndStart);
  sliderMark.addEventListener('mouseup', dndEnd);
}
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA3LmRuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLFNBQVMsUUFBUSxHQUFJOztBQUVuQixNQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQUksQ0FBQyxFQUFLO0FBQzFCLFFBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQSxBQUFDLENBQUE7QUFDdkUsUUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFBLEFBQUMsQ0FBQTs7QUFFeEUsUUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBSSxNQUFNLEdBQUcsSUFBSTtBQUFBLEFBQ3pDLFFBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUk7QUFBQSxHQUMxQyxDQUFBOztBQUVELE1BQUksUUFBUSxHQUFHLFNBQVgsUUFBUSxDQUFJLENBQUMsRUFBSztBQUNwQixRQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRSxPQUFNO0FBQ2xELFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtBQUNoQyxRQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFDekIsa0JBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNqQixhQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFBO0dBQ3hELENBQUE7O0FBRUQsTUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksQ0FBQyxFQUFLO0FBQ2xCLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtBQUNoQyxRQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDMUIsYUFBUyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQTtHQUMzRCxDQUFBOztBQUVELE1BQUksQ0FBQyxXQUFXLEdBQUc7V0FBTSxLQUFLO0dBQUEsQ0FBQTtBQUM5QixXQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ2pELFdBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7Q0FFOUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBb0JELFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUksQ0FBQyxFQUFLO0FBQ3pCLFFBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO0FBQzlCLFFBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0FBQy9DLFFBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUU7QUFDbkMsZ0JBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO0tBQ2hELE1BQUs7QUFDSixnQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtLQUN6RDtHQUNGLENBQUE7QUFDRCxNQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxDQUFDLEVBQUs7QUFDcEIsY0FBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQTtHQUN4RCxDQUFBO0FBQ0QsTUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksQ0FBQyxFQUFLO0FBQ2xCLGNBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUE7R0FDM0QsQ0FBQTtBQUNELFlBQVUsQ0FBQyxXQUFXLEdBQUc7V0FBTSxLQUFLO0dBQUEsQ0FBQTtBQUNwQyxZQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ2xELFlBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7Q0FDL0M7QUFDRCxLQUFLLEVBQUUsQ0FBQSIsImZpbGUiOiJwYXJ0Mi9ldmVudHMvMDcuZG5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuXG5cbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUxICgpIHtcblxuICBsZXQgY2FsY0JhbGxDb29yZHMgPSAoZSkgPT4ge1xuICAgIGxldCBzaGlmdFkgPSBlLnBhZ2VZIC0gKGJhbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgcGFnZVlPZmZzZXQpXG4gICAgbGV0IHNoaWZ0WCA9IGUucGFnZVggLSAoYmFsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgcGFnZVhPZmZzZXQpXG5cbiAgICBiYWxsLnN0eWxlLnRvcCA9IGUucGFnZVkgIC0gc2hpZnRZICsgJ3B4JyAvLyBzdHJhbmdlIGBzaGlmdGAgYmVoYXZpb3JcbiAgICBiYWxsLnN0eWxlLmxlZnQgPSBlLnBhZ2VYIC0gc2hpZnRYICsgJ3B4JyAvLyBzdHJhbmdlIGBzaGlmdGAgYmVoYXZpb3JcbiAgfVxuICBcbiAgbGV0IGRuZFN0YXJ0ID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnYmFsbCcpIHJldHVyblxuICAgIGJhbGwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgYmFsbC5zdHlsZS56SW5kZXggPSAnOTk5J1xuICAgIGNhbGNCYWxsQ29vcmRzKGUpXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGNhbGNCYWxsQ29vcmRzKVxuICB9XG5cbiAgbGV0IGRuZEVuZCA9IChlKSA9PiB7XG4gICAgYmFsbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICBiYWxsLnN0eWxlLnpJbmRleCA9ICdhdXRvJ1xuICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjYWxjQmFsbENvb3JkcylcbiAgfVxuXG4gIGJhbGwub25kcmFnc3RhcnQgPSAoKSA9PiBmYWxzZVxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG5kU3RhcnQpXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZG5kRW5kKVxuXG59XG4vLyBleGFtcGxlMSgpXG5cblxuXG4vKlxu0JfQsNC00LDRh9CwIDFcbtCh0L7Qt9C00LDQudGC0LUg0YHQu9Cw0LnQtNC10YA6XG5cbtCX0LDRhdCy0LDRgtC40YLQtSDQvNGL0YjQutC+0Lkg0YHQuNC90LjQuSDQsdC10LPRg9C90L7QuiDQuCDQtNCy0LjQs9Cw0LnRgtC1INC10LPQviwg0YfRgtC+0LHRiyDRg9Cy0LjQtNC10YLRjCDQsiDRgNCw0LHQvtGC0LUuXG5cbtCS0LDQttC90L46XG5cbtCh0LvQsNC50LTQtdGAINC00L7Qu9C20LXQvSDQvdC+0YDQvNCw0LvRjNC90L4g0YDQsNCx0L7RgtCw0YLRjCDQv9GA0Lgg0YDQtdC30LrQvtC8INC00LLQuNC20LXQvdC40Lgg0LzRi9GI0Lgg0LLQu9C10LLQviDQuNC70Lgg0LLQv9GA0LDQstC+LCDQt9CwINC/0YDQtdC00LXQu9GLINC/0L7Qu9C+0YHRiy5cbtCf0YDQuCDRjdGC0L7QvCDQsdC10LPRg9C90L7QuiDQtNC+0LvQttC10L0g0L7RgdGC0LDQvdCw0LLQu9C40LLQsNGC0YzRgdGPINGH0LXRgtC60L4g0LIg0L3Rg9C20L3QvtC8INC60L7QvdGG0LUg0L/QvtC70L7RgdGLLlxuXG7Qn9GA0Lgg0L3QsNC20LDRgtC+0Lwg0LHQtdCz0YPQvdC60LUg0LzRi9GI0Ywg0LzQvtC20LXRgiDQstGL0YXQvtC00LjRgtGMINC30LAg0L/RgNC10LTQtdC70Ysg0L/QvtC70L7RgdGLINGB0LvQsNC50LTQtdGA0LAsXG7QvdC+INGB0LvQsNC50LTQtdGAINC/0YPRgdGC0Ywg0LLRgdC1INGA0LDQstC90L4g0YDQsNCx0L7RgtCw0LXRgiAo0Y3RgtC+INGD0LTQvtCx0L3QviDQtNC70Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPKS5cbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcblxuICBsZXQgY2hhbmdlTWFya1BvcyA9IChlKSA9PiB7XG4gICAgbGV0IGx0ID0gc2xpZGVyTWFyay5zdHlsZS5sZWZ0XG4gICAgbGV0IHNsaWRlclJlY3QgPSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAocGFyc2VJbnQobHQpID4gc2xpZGVyUmVjdC5yaWdodCkge1xuICAgICAgc2xpZGVyTWFyay5zdHlsZS5sZWZ0ID0gc2xpZGVyUmVjdC5yaWdodCArICdweCdcbiAgICB9IGVsc2V7XG4gICAgICBzbGlkZXJNYXJrLnN0eWxlLmxlZnQgPSBlLnBhZ2VYIC0gc2xpZGVyUmVjdC5sZWZ0ICsgJ3B4J1xuICAgIH1cbiAgfVxuICBsZXQgZG5kU3RhcnQgPSAoZSkgPT4ge1xuICAgIHNsaWRlcldyYXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTWFya1BvcykgIFxuICB9XG4gIGxldCBkbmRFbmQgPSAoZSkgPT4ge1xuICAgIHNsaWRlcldyYXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2hhbmdlTWFya1BvcylcbiAgfVxuICBzbGlkZXJNYXJrLm9uZHJhZ3N0YXJ0ID0gKCkgPT4gZmFsc2VcbiAgc2xpZGVyTWFyay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkbmRTdGFydClcbiAgc2xpZGVyTWFyay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZG5kRW5kKVxufVxudGFzazEoKVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
