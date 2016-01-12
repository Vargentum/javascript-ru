/*

  Promise: special object that help to work with async code

  it contains itself states:
    - pending
    - resolve
    - reject


  Method to attach handlers
    - .then(onResolve, onReject)

  constructor
    let promise = new Promise()

  it accepts one function as argument
  function contain two parameters
    - resolve(smth)
    - reject(smth)

    these are functions with single argument,
    that contains result or Error that handles inside
    .then(h1, h2) handlers

  Tips:
    - best practice to translate Error in reject parameter
    - prom

  P
*/

function example1 () {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!true) {
        resolve('success') //callback
      } else{
        reject(new Error('fail')) //callback
      };

    }, 2000)
  });

  promise.then(
    result => { //handler
      console.log(`Result is ${result}`)
    },
    reject => { //handler
      console.log(`Result is ${reject}`)
    }
  )
}
// example1()



/*
  Promicification:

  add wrapper to some function, to return promise instead


  TODO:

    make decorator httpGet(url) that returns promise

    create new XMLHttpRequest
    open with .open('QUERY', url, true)
    fill onload method
      if status 200
        resolve promise with context response

      else
        reject error
          add name as .statusText
          add error.code as .status

    reject new Network Error on xhr.onerror

    send xhr with .send()
*/



function example2 () {

  function httpGet (url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()

      xhr.open("GET", url, true)

      xhr.onload = () => {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          let e = new Error(this.statusText)
          e.code = this.status
          reject(e)
        }
      }

      xhr.onerror = () => {
        reject(new Error("Network Error"))
      }

      xhr.send()
    })
  }

  httpGet("http://liga.net/")
  .then(
    resolve => {
      console.log(`Success: ${resolve}`)
    },
    reject => {
      console.log(`Sorry: ${reject}`)
    }
  )
}
// example2()





function example3 () {

  /*
    Promise chaining
    - when done one async request, make next

    1.if .then() returns promise, its result
      will be applied to next .then()

    2.1 in this case, you can't attach next .then()
        because in contain async code

    2.2 return resolved (or rejected) promise for correct next() chaining
  */

  httpGet("users/me/user.json")
    .then(response => {
      let user = JSON.parse(response)
      return user
    })
    .then(user => {
      return httpGet(`http://github.com/users/${user.name}`)
    }) // 1
    .then(gitHubUser => {
      let user = JSON.parse(gitHubUser)
      let img = new Image()

      img.src = user.avatar_url
      document.body.append(img)

      // setTimeout(() => {img.remove()}, 1000) // 2.1

      return new Promise((resolve, reject) => { // 2.2
        setTimeout(() => {
          img.remove()
          resolve()
        }, delay)
      });
    })

}
example3()

