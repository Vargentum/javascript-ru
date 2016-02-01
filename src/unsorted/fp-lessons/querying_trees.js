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
task17()


function task18 () {
  calcSize = arr => arr.map(i => i.width + i.height)

  boxarts
    .reduce((prev, next) => calcSize(next) > calcSize(prev) ? next : prev)
    .map(art => art.url)
}
task18()