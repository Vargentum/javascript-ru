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


function task1 () {

  let handleImgLoad = e => {
      let img = e.currentTarget
      $$('.img-replace').filter(c => c.dataset.alt === img.src)
                        .forEach(c => {
                          c.parentElement.replaceChild(img, c)
                          img.classList.add('img-replace')
                        });
  }

  $$('img').forEach(img => {
    img.addEventListener('load', handleImgLoad)
  })
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


function task2 () {
  let preloadImages = (sources, callback) => {
    let promises = []

    let insertImg = (src, loader) => {
      let img = document.createElement('img')
      img.src = src
      document.body.appendChild(img)
      img.onload = loader
    }

    sources.forEach((src, idx) => {
      insertImg(src, e => {
        promises.push(Promise.resolve('loaded'))  

        if (idx !== sources.length - 1) return

        Promise.all(promises).then(() => {
          callback()
        })
      })
    })
  }



  // ---------- Проверка ----------

  /* файлы для загрузки */
  var sources = [
    "https://js.cx/images-load/1.jpg",
    "https://js.cx/imaged/1.jpg",
    "https://js.cx/images-load/2.jpg",
    "https://js.cx/images-load/3.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/Frog_on_river_4000x3000_26-09-2010_11-01am_2mb.jpg"
  ];
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


function task3 () {
  
  let preloadSources = (type, sources, callback) => {
    let promises = []

    let loadSource = (src, loader, errorer) => {
      let source = document.createElement(type)
      source.src = src
      document.body.appendChild(source)
      source.onload = loader
      source.onerror = errorer
    }

    sources.forEach((src, idx) => {
      loadSource(src, 
        // load
        e => {
          promises.push(Promise.resolve('loaded'))  

          if (idx !== sources.length - 1) return

          Promise.all(promises).then(
            () => {
              console.log(promises)
              callback()
            }),
            (error) => {
              throw new Error(error)
            }
        },
        // error
        e => {
          promises.push(Promise.reject('error'))  
        }
      )
    })
  }

  preloadSources('script', 
    [
     "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.12/d3.min.js",
     "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js"
    ],
    () => {
      console.log(d3)
      console.log(Raphael(10, 50, 320, 200))
    }
  )
}
task3()



