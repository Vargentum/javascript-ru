'use strict';

/*
  script.onload / .onerror (ie8-)

    load - detects when script is loaded and executed
      
      inside load handler you have access to script:
        - functions 
        - variables ...

    error - when script load is fails (not execution errors!)


  Other resources:
    img - support load / error in all browsers

    iframe - only load event both for success / error states (all browsers)


  Loading external script:
    - create `script` container
    - set correct `src`
    - append container to body

*/

/* Task 1

Реализуйте «красивый» (HTML) аналог alt при помощи CSS/JavaScript,
который затем будет заменён картинкой сразу же как только она загрузится. 
А если загрузка не состоится – то не заменён.

Full decision: 
http://plnkr.co/edit/veEBilbP3YQOk5cJs2CG?p=preview
*/

function task1() {

  var handleImgLoad = function handleImgLoad(e) {
    var img = e.currentTarget;
    $$('.img-replace').filter(function (c) {
      return c.dataset.alt === img.src;
    }).forEach(function (c) {
      c.parentElement.replaceChild(img, c);
      img.classList.add('img-replace');
    });
  };

  $$('img').forEach(function (img) {
    img.addEventListener('load', handleImgLoad);
  });
}
// task1()

/*Task 2

Создайте функцию preloadImages(sources, callback),
которая предзагружает изображения из массива sources,
и после загрузки вызывает функцию callback.

Пример использования:
addScripts(["1.jpg", "2.jpg", "3.jpg"], callback);

Если вдруг возникает ошибка при загрузке – 
считаем такое изображение загруженным, чтобы не ломать поток выполнения.


Desicion: 
http://plnkr.co/edit/IHHqDRA0IPrW58SqJvfx?p=preview
*/

function task2() {
  var preloadImages = function preloadImages(sources, callback) {
    var promises = [];

    var insertImg = function insertImg(src, loader) {
      var img = document.createElement('img');
      img.src = src;
      document.body.appendChild(img);
      img.onload = loader;
    };

    sources.forEach(function (src, idx) {
      insertImg(src, function (e) {
        promises.push(Promise.resolve('loaded'));

        if (idx !== sources.length - 1) return;

        Promise.all(promises).then(function () {
          callback();
        });
      });
    });
  };

  // ---------- Проверка ----------

  /* файлы для загрузки */
  var sources = ["https://js.cx/images-load/1.jpg", "https://js.cx/imaged/1.jpg", "https://js.cx/images-load/2.jpg", "https://js.cx/images-load/3.jpg", "https://upload.wikimedia.org/wikipedia/commons/c/cf/Frog_on_river_4000x3000_26-09-2010_11-01am_2mb.jpg"];
  for (var i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random(); // добавляем параметр, чтобы без кеша (для теста)
  }

  /** если картинка загружена, то можно будет сразу получить её ширину
   * создадим все картинки и проверим, есть ли у них ширина
   */
  function testLoaded(state) {
    var widthSum = 0;
    for (var i = 0; i < sources.length; i++) {
      var img = document.createElement('img');
      img.src = sources[i];
      widthSum += img.width;
    }
    // каждое изображение 100x100, общая ширина должна быть 300px
    console.log(state, widthSum);
  }

  // до загрузки - выведет 0
  testLoaded('before');

  // после загрузки - выведет 300
  preloadImages(sources, testLoaded.bind(null, 'after'));
}
// task2()

/*

Создайте функцию addScript(src, callback),
которая загружает скрипт с данным src, и после его загрузки 
и выполнения вызывает функцию callback.

Сделал через модификацию функции из task2
*/

function task3() {

  var preloadSources = function preloadSources(type, sources, callback) {
    var promises = [];

    var loadSource = function loadSource(src, loader, errorer) {
      var source = document.createElement(type);
      source.src = src;
      document.body.appendChild(source);
      source.onload = loader;
      source.onerror = errorer;
    };

    sources.forEach(function (src, idx) {
      loadSource(src,
      // load
      function (e) {
        promises.push(Promise.resolve('loaded'));

        if (idx !== sources.length - 1) return;

        Promise.all(promises).then(function () {
          console.log(promises);
          callback();
        }), function (error) {
          throw new Error(error);
        };
      },
      // error
      function (e) {
        promises.push(Promise.reject('error'));
      });
    });
  };

  preloadSources('script', ["https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.12/d3.min.js", "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js"], function () {
    console.log(d3);
    console.log(Raphael(10, 50, 320, 200));
  });
}
task3();
//# sourceMappingURL=data:application/json;base64,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T0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTTs7QUFFdEMsZUFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFlBQU07QUFDSixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNyQixrQkFBUSxFQUFFLENBQUE7U0FDWCxDQUFDLEVBQ0YsVUFBQyxLQUFLLEVBQUs7QUFDVCxnQkFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN2QixDQUFBO09BQ0o7O0FBRUQsZ0JBQUEsQ0FBQyxFQUFJO0FBQ0gsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO09BQ3ZDLENBQ0YsQ0FBQTtLQUNGLENBQUMsQ0FBQTtHQUNILENBQUE7O0FBRUQsZ0JBQWMsQ0FBQyxRQUFRLEVBQ3JCLENBQ0MsNERBQTRELEVBQzVELHFFQUFxRSxDQUNyRSxFQUNELFlBQU07QUFDSixXQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2YsV0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtHQUN2QyxDQUNGLENBQUE7Q0FDRjtBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2V2ZW50cy8xMC5sb2FkX2V2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIHNjcmlwdC5vbmxvYWQgLyAub25lcnJvciAoaWU4LSlcblxuICAgIGxvYWQgLSBkZXRlY3RzIHdoZW4gc2NyaXB0IGlzIGxvYWRlZCBhbmQgZXhlY3V0ZWRcbiAgICAgIFxuICAgICAgaW5zaWRlIGxvYWQgaGFuZGxlciB5b3UgaGF2ZSBhY2Nlc3MgdG8gc2NyaXB0OlxuICAgICAgICAtIGZ1bmN0aW9ucyBcbiAgICAgICAgLSB2YXJpYWJsZXMgLi4uXG5cbiAgICBlcnJvciAtIHdoZW4gc2NyaXB0IGxvYWQgaXMgZmFpbHMgKG5vdCBleGVjdXRpb24gZXJyb3JzISlcblxuXG4gIE90aGVyIHJlc291cmNlczpcbiAgICBpbWcgLSBzdXBwb3J0IGxvYWQgLyBlcnJvciBpbiBhbGwgYnJvd3NlcnNcblxuICAgIGlmcmFtZSAtIG9ubHkgbG9hZCBldmVudCBib3RoIGZvciBzdWNjZXNzIC8gZXJyb3Igc3RhdGVzIChhbGwgYnJvd3NlcnMpXG5cblxuICBMb2FkaW5nIGV4dGVybmFsIHNjcmlwdDpcbiAgICAtIGNyZWF0ZSBgc2NyaXB0YCBjb250YWluZXJcbiAgICAtIHNldCBjb3JyZWN0IGBzcmNgXG4gICAgLSBhcHBlbmQgY29udGFpbmVyIHRvIGJvZHlcblxuKi9cblxuXG5cblxuLyogVGFzayAxXG5cbtCg0LXQsNC70LjQt9GD0LnRgtC1IMKr0LrRgNCw0YHQuNCy0YvQucK7IChIVE1MKSDQsNC90LDQu9C+0LMgYWx0INC/0YDQuCDQv9C+0LzQvtGJ0LggQ1NTL0phdmFTY3JpcHQsXG7QutC+0YLQvtGA0YvQuSDQt9Cw0YLQtdC8INCx0YPQtNC10YIg0LfQsNC80LXQvdGR0L0g0LrQsNGA0YLQuNC90LrQvtC5INGB0YDQsNC30YMg0LbQtSDQutCw0Log0YLQvtC70YzQutC+INC+0L3QsCDQt9Cw0LPRgNGD0LfQuNGC0YHRjy4gXG7QkCDQtdGB0LvQuCDQt9Cw0LPRgNGD0LfQutCwINC90LUg0YHQvtGB0YLQvtC40YLRgdGPIOKAkyDRgtC+INC90LUg0LfQsNC80LXQvdGR0L0uXG5cbkZ1bGwgZGVjaXNpb246IFxuaHR0cDovL3BsbmtyLmNvL2VkaXQvdmVFQmlsYlAzWVFPazVjSnMyQ0c/cD1wcmV2aWV3XG4qL1xuXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcblxuICBsZXQgaGFuZGxlSW1nTG9hZCA9IGUgPT4ge1xuICAgICAgbGV0IGltZyA9IGUuY3VycmVudFRhcmdldFxuICAgICAgJCQoJy5pbWctcmVwbGFjZScpLmZpbHRlcihjID0+IGMuZGF0YXNldC5hbHQgPT09IGltZy5zcmMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYy5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChpbWcsIGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWctcmVwbGFjZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgfVxuXG4gICQkKCdpbWcnKS5mb3JFYWNoKGltZyA9PiB7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVJbWdMb2FkKVxuICB9KVxufVxuLy8gdGFzazEoKVxuXG5cblxuLypUYXNrIDJcblxu0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBwcmVsb2FkSW1hZ2VzKHNvdXJjZXMsIGNhbGxiYWNrKSxcbtC60L7RgtC+0YDQsNGPINC/0YDQtdC00LfQsNCz0YDRg9C20LDQtdGCINC40LfQvtCx0YDQsNC20LXQvdC40Y8g0LjQtyDQvNCw0YHRgdC40LLQsCBzb3VyY2VzLFxu0Lgg0L/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INCy0YvQt9GL0LLQsNC10YIg0YTRg9C90LrRhtC40Y4gY2FsbGJhY2suXG5cbtCf0YDQuNC80LXRgCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjzpcbmFkZFNjcmlwdHMoW1wiMS5qcGdcIiwgXCIyLmpwZ1wiLCBcIjMuanBnXCJdLCBjYWxsYmFjayk7XG5cbtCV0YHQu9C4INCy0LTRgNGD0LMg0LLQvtC30L3QuNC60LDQtdGCINC+0YjQuNCx0LrQsCDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDigJMgXG7RgdGH0LjRgtCw0LXQvCDRgtCw0LrQvtC1INC40LfQvtCx0YDQsNC20LXQvdC40LUg0LfQsNCz0YDRg9C20LXQvdC90YvQvCwg0YfRgtC+0LHRiyDQvdC1INC70L7QvNCw0YLRjCDQv9C+0YLQvtC6INCy0YvQv9C+0LvQvdC10L3QuNGPLlxuXG5cbkRlc2ljaW9uOiBcbmh0dHA6Ly9wbG5rci5jby9lZGl0L0lISHFEUkEwSVByVzU4U3FKdmZ4P3A9cHJldmlld1xuKi9cblxuXG5mdW5jdGlvbiB0YXNrMiAoKSB7XG4gIGxldCBwcmVsb2FkSW1hZ2VzID0gKHNvdXJjZXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHByb21pc2VzID0gW11cblxuICAgIGxldCBpbnNlcnRJbWcgPSAoc3JjLCBsb2FkZXIpID0+IHtcbiAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgaW1nLnNyYyA9IHNyY1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXG4gICAgICBpbWcub25sb2FkID0gbG9hZGVyXG4gICAgfVxuXG4gICAgc291cmNlcy5mb3JFYWNoKChzcmMsIGlkeCkgPT4ge1xuICAgICAgaW5zZXJ0SW1nKHNyYywgZSA9PiB7XG4gICAgICAgIHByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKCdsb2FkZWQnKSkgIFxuXG4gICAgICAgIGlmIChpZHggIT09IHNvdXJjZXMubGVuZ3RoIC0gMSkgcmV0dXJuXG5cbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cblxuICAvLyAtLS0tLS0tLS0tINCf0YDQvtCy0LXRgNC60LAgLS0tLS0tLS0tLVxuXG4gIC8qINGE0LDQudC70Ysg0LTQu9GPINC30LDQs9GA0YPQt9C60LggKi9cbiAgdmFyIHNvdXJjZXMgPSBbXG4gICAgXCJodHRwczovL2pzLmN4L2ltYWdlcy1sb2FkLzEuanBnXCIsXG4gICAgXCJodHRwczovL2pzLmN4L2ltYWdlZC8xLmpwZ1wiLFxuICAgIFwiaHR0cHM6Ly9qcy5jeC9pbWFnZXMtbG9hZC8yLmpwZ1wiLFxuICAgIFwiaHR0cHM6Ly9qcy5jeC9pbWFnZXMtbG9hZC8zLmpwZ1wiLFxuICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9jL2NmL0Zyb2dfb25fcml2ZXJfNDAwMHgzMDAwXzI2LTA5LTIwMTBfMTEtMDFhbV8ybWIuanBnXCJcbiAgXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc291cmNlc1tpXSArPSAnPycgKyBNYXRoLnJhbmRvbSgpOyAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L/QsNGA0LDQvNC10YLRgCwg0YfRgtC+0LHRiyDQsdC10Lcg0LrQtdGI0LAgKNC00LvRjyDRgtC10YHRgtCwKVxuICB9XG5cbiAgLyoqINC10YHQu9C4INC60LDRgNGC0LjQvdC60LAg0LfQsNCz0YDRg9C20LXQvdCwLCDRgtC+INC80L7QttC90L4g0LHRg9C00LXRgiDRgdGA0LDQt9GDINC/0L7Qu9GD0YfQuNGC0Ywg0LXRkSDRiNC40YDQuNC90YNcbiAgICog0YHQvtC30LTQsNC00LjQvCDQstGB0LUg0LrQsNGA0YLQuNC90LrQuCDQuCDQv9GA0L7QstC10YDQuNC8LCDQtdGB0YLRjCDQu9C4INGDINC90LjRhSDRiNC40YDQuNC90LBcbiAgICovXG4gIGZ1bmN0aW9uIHRlc3RMb2FkZWQoc3RhdGUpIHtcbiAgICB2YXIgd2lkdGhTdW0gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nLnNyYyA9IHNvdXJjZXNbaV07XG4gICAgICB3aWR0aFN1bSArPSBpbWcud2lkdGg7XG4gICAgfVxuICAgIC8vINC60LDQttC00L7QtSDQuNC30L7QsdGA0LDQttC10L3QuNC1IDEwMHgxMDAsINC+0LHRidCw0Y8g0YjQuNGA0LjQvdCwINC00L7Qu9C20L3QsCDQsdGL0YLRjCAzMDBweFxuICAgIGNvbnNvbGUubG9nKHN0YXRlLCB3aWR0aFN1bSk7XG4gIH1cblxuICAvLyDQtNC+INC30LDQs9GA0YPQt9C60LggLSDQstGL0LLQtdC00LXRgiAwXG4gIHRlc3RMb2FkZWQoJ2JlZm9yZScpO1xuXG4gIC8vINC/0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCAtINCy0YvQstC10LTQtdGCIDMwMFxuICBwcmVsb2FkSW1hZ2VzKHNvdXJjZXMsIHRlc3RMb2FkZWQuYmluZChudWxsLCAnYWZ0ZXInKSk7XG5cbn1cbi8vIHRhc2syKClcblxuXG5cblxuLypcblxu0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiBhZGRTY3JpcHQoc3JjLCBjYWxsYmFjayksXG7QutC+0YLQvtGA0LDRjyDQt9Cw0LPRgNGD0LbQsNC10YIg0YHQutGA0LjQv9GCINGBINC00LDQvdC90YvQvCBzcmMsINC4INC/0L7RgdC70LUg0LXQs9C+INC30LDQs9GA0YPQt9C60LggXG7QuCDQstGL0L/QvtC70L3QtdC90LjRjyDQstGL0LfRi9Cy0LDQtdGCINGE0YPQvdC60YbQuNGOIGNhbGxiYWNrLlxuXG7QodC00LXQu9Cw0Lsg0YfQtdGA0LXQtyDQvNC+0LTQuNGE0LjQutCw0YbQuNGOINGE0YPQvdC60YbQuNC4INC40LcgdGFzazJcbiovXG5cblxuZnVuY3Rpb24gdGFzazMgKCkge1xuICBcbiAgbGV0IHByZWxvYWRTb3VyY2VzID0gKHR5cGUsIHNvdXJjZXMsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IHByb21pc2VzID0gW11cblxuICAgIGxldCBsb2FkU291cmNlID0gKHNyYywgbG9hZGVyLCBlcnJvcmVyKSA9PiB7XG4gICAgICBsZXQgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgICAgc291cmNlLnNyYyA9IHNyY1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzb3VyY2UpXG4gICAgICBzb3VyY2Uub25sb2FkID0gbG9hZGVyXG4gICAgICBzb3VyY2Uub25lcnJvciA9IGVycm9yZXJcbiAgICB9XG5cbiAgICBzb3VyY2VzLmZvckVhY2goKHNyYywgaWR4KSA9PiB7XG4gICAgICBsb2FkU291cmNlKHNyYywgXG4gICAgICAgIC8vIGxvYWRcbiAgICAgICAgZSA9PiB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoJ2xvYWRlZCcpKSAgXG5cbiAgICAgICAgICBpZiAoaWR4ICE9PSBzb3VyY2VzLmxlbmd0aCAtIDEpIHJldHVyblxuXG4gICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb21pc2VzKVxuICAgICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGVycm9yXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHByb21pc2VzLnB1c2goUHJvbWlzZS5yZWplY3QoJ2Vycm9yJykpICBcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBwcmVsb2FkU291cmNlcygnc2NyaXB0JywgXG4gICAgW1xuICAgICBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2QzLzMuNS4xMi9kMy5taW4uanNcIixcbiAgICAgXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yYXBoYWVsLzIuMS40L3JhcGhhZWwtbWluLmpzXCJcbiAgICBdLFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGQzKVxuICAgICAgY29uc29sZS5sb2coUmFwaGFlbCgxMCwgNTAsIDMyMCwgMjAwKSlcbiAgICB9XG4gIClcbn1cbnRhc2szKClcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
