function task14 () {
  
  movieLists.concatMap(lst => {
    lst.videos.concatMap(vd => {
      vd.boxarts.filter(art => art.width === 150 && art.height === 200)
                .map(art => {
                  return {
                    id: art.id,
                    title: art.title,
                    boxart: art.url
                  }
                })
    })
  })

}
// task14()


function task17 () {
  
  return ratings.reduce((prev, next) => {
    return next > prev ? next : prev;
  })

}
// task17()


function task18 () {
  calcSize = arr => arr.map(i => i.width + i.height)

  boxarts
    .reduce((prev, next) => calcSize(next) > calcSize(prev) ? next : prev)
    .map(art => art.url)
}
// task18()


function task19 () {
  var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

  let a = videos
    .reduce((prev, {id, title}) => {
      prev[id] = title
      return prev
    }, {})

  console.log([a])
}
task19()