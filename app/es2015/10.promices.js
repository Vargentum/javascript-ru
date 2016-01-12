'use strict';

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

function example1() {

  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!true) {
        resolve('success'); //callback
      } else {
          reject(new Error('fail')); //callback
        };
    }, 2000);
  });

  promise.then(function (result) {
    //handler
    console.log('Result is ' + result);
  }, function (reject) {
    //handler
    console.log('Result is ' + reject);
  });
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

function example2() {

  function httpGet(url) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", url, true);

      xhr.onload = function () {
        if (_this.status === 200) {
          resolve(_this.response);
        } else {
          var e = new Error(_this.statusText);
          e.code = _this.status;
          reject(e);
        }
      };

      xhr.onerror = function () {
        reject(new Error("Network Error"));
      };

      xhr.send();
    });
  }

  httpGet("http://liga.net/").then(function (resolve) {
    console.log('Success: ' + resolve);
  }, function (reject) {
    console.log('Sorry: ' + reject);
  });
}
// example2()

function example3() {

  /*
    Promise chaining
    - when done one async request, make next
     1.if .then() returns promise, its result
      will be applied to next .then()
     2.1 in this case, you can't attach next .then()
        because in contain async code
     2.2 return resolved (or rejected) promise for correct next() chaining
  */

  httpGet("users/me/user.json").then(function (response) {
    var user = JSON.parse(response);
    return user;
  }).then(function (user) {
    return httpGet('http://github.com/users/' + user.name);
  }) // 1
  .then(function (gitHubUser) {
    var user = JSON.parse(gitHubUser);
    var img = new Image();

    img.src = user.avatar_url;
    document.body.append(img);

    // setTimeout(() => {img.remove()}, 1000) // 2.1

    return new Promise(function (resolve, reject) {
      // 2.2
      setTimeout(function () {
        img.remove();
        resolve();
      }, delay);
    });
  });
}
example3();
//# sourceMappingURL=data:application/json;base64,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SUFBSSxDQUFDLFVBQVUsQ0FBQTtBQUN6QixZQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Ozs7QUFBQSxBQUl6QixXQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSzs7QUFDdEMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ1osZUFBTyxFQUFFLENBQUE7T0FDVixFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ1YsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFBO0NBRUw7QUFDRCxRQUFRLEVBQUUsQ0FBQSIsImZpbGUiOiJlczIwMTUvMTAucHJvbWljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG4gIFByb21pc2U6IHNwZWNpYWwgb2JqZWN0IHRoYXQgaGVscCB0byB3b3JrIHdpdGggYXN5bmMgY29kZVxuXG4gIGl0IGNvbnRhaW5zIGl0c2VsZiBzdGF0ZXM6XG4gICAgLSBwZW5kaW5nXG4gICAgLSByZXNvbHZlXG4gICAgLSByZWplY3RcblxuXG4gIE1ldGhvZCB0byBhdHRhY2ggaGFuZGxlcnNcbiAgICAtIC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpXG5cbiAgY29uc3RydWN0b3JcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKClcblxuICBpdCBhY2NlcHRzIG9uZSBmdW5jdGlvbiBhcyBhcmd1bWVudFxuICBmdW5jdGlvbiBjb250YWluIHR3byBwYXJhbWV0ZXJzXG4gICAgLSByZXNvbHZlKHNtdGgpXG4gICAgLSByZWplY3Qoc210aClcblxuICAgIHRoZXNlIGFyZSBmdW5jdGlvbnMgd2l0aCBzaW5nbGUgYXJndW1lbnQsXG4gICAgdGhhdCBjb250YWlucyByZXN1bHQgb3IgRXJyb3IgdGhhdCBoYW5kbGVzIGluc2lkZVxuICAgIC50aGVuKGgxLCBoMikgaGFuZGxlcnNcblxuICBUaXBzOlxuICAgIC0gYmVzdCBwcmFjdGljZSB0byB0cmFuc2xhdGUgRXJyb3IgaW4gcmVqZWN0IHBhcmFtZXRlclxuICAgIC0gcHJvbVxuXG4gIFBcbiovXG5cbmZ1bmN0aW9uIGV4YW1wbGUxICgpIHtcblxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKCdzdWNjZXNzJykgLy9jYWxsYmFja1xuICAgICAgfSBlbHNle1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdmYWlsJykpIC8vY2FsbGJhY2tcbiAgICAgIH07XG5cbiAgICB9LCAyMDAwKVxuICB9KTtcblxuICBwcm9taXNlLnRoZW4oXG4gICAgcmVzdWx0ID0+IHsgLy9oYW5kbGVyXG4gICAgICBjb25zb2xlLmxvZyhgUmVzdWx0IGlzICR7cmVzdWx0fWApXG4gICAgfSxcbiAgICByZWplY3QgPT4geyAvL2hhbmRsZXJcbiAgICAgIGNvbnNvbGUubG9nKGBSZXN1bHQgaXMgJHtyZWplY3R9YClcbiAgICB9XG4gIClcbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cbi8qXG4gIFByb21pY2lmaWNhdGlvbjpcblxuICBhZGQgd3JhcHBlciB0byBzb21lIGZ1bmN0aW9uLCB0byByZXR1cm4gcHJvbWlzZSBpbnN0ZWFkXG5cblxuICBUT0RPOlxuXG4gICAgbWFrZSBkZWNvcmF0b3IgaHR0cEdldCh1cmwpIHRoYXQgcmV0dXJucyBwcm9taXNlXG5cbiAgICBjcmVhdGUgbmV3IFhNTEh0dHBSZXF1ZXN0XG4gICAgb3BlbiB3aXRoIC5vcGVuKCdRVUVSWScsIHVybCwgdHJ1ZSlcbiAgICBmaWxsIG9ubG9hZCBtZXRob2RcbiAgICAgIGlmIHN0YXR1cyAyMDBcbiAgICAgICAgcmVzb2x2ZSBwcm9taXNlIHdpdGggY29udGV4dCByZXNwb25zZVxuXG4gICAgICBlbHNlXG4gICAgICAgIHJlamVjdCBlcnJvclxuICAgICAgICAgIGFkZCBuYW1lIGFzIC5zdGF0dXNUZXh0XG4gICAgICAgICAgYWRkIGVycm9yLmNvZGUgYXMgLnN0YXR1c1xuXG4gICAgcmVqZWN0IG5ldyBOZXR3b3JrIEVycm9yIG9uIHhoci5vbmVycm9yXG5cbiAgICBzZW5kIHhociB3aXRoIC5zZW5kKClcbiovXG5cblxuXG5mdW5jdGlvbiBleGFtcGxlMiAoKSB7XG5cbiAgZnVuY3Rpb24gaHR0cEdldCAodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpXG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBlID0gbmV3IEVycm9yKHRoaXMuc3RhdHVzVGV4dClcbiAgICAgICAgICBlLmNvZGUgPSB0aGlzLnN0YXR1c1xuICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiTmV0d29yayBFcnJvclwiKSlcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoKVxuICAgIH0pXG4gIH1cblxuICBodHRwR2V0KFwiaHR0cDovL2xpZ2EubmV0L1wiKVxuICAudGhlbihcbiAgICByZXNvbHZlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBTdWNjZXNzOiAke3Jlc29sdmV9YClcbiAgICB9LFxuICAgIHJlamVjdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgU29ycnk6ICR7cmVqZWN0fWApXG4gICAgfVxuICApXG59XG4vLyBleGFtcGxlMigpXG5cblxuXG5cblxuZnVuY3Rpb24gZXhhbXBsZTMgKCkge1xuXG4gIC8qXG4gICAgUHJvbWlzZSBjaGFpbmluZ1xuICAgIC0gd2hlbiBkb25lIG9uZSBhc3luYyByZXF1ZXN0LCBtYWtlIG5leHRcblxuICAgIDEuaWYgLnRoZW4oKSByZXR1cm5zIHByb21pc2UsIGl0cyByZXN1bHRcbiAgICAgIHdpbGwgYmUgYXBwbGllZCB0byBuZXh0IC50aGVuKClcblxuICAgIDIuMSBpbiB0aGlzIGNhc2UsIHlvdSBjYW4ndCBhdHRhY2ggbmV4dCAudGhlbigpXG4gICAgICAgIGJlY2F1c2UgaW4gY29udGFpbiBhc3luYyBjb2RlXG5cbiAgICAyLjIgcmV0dXJuIHJlc29sdmVkIChvciByZWplY3RlZCkgcHJvbWlzZSBmb3IgY29ycmVjdCBuZXh0KCkgY2hhaW5pbmdcbiAgKi9cblxuICBodHRwR2V0KFwidXNlcnMvbWUvdXNlci5qc29uXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgcmV0dXJuIHVzZXJcbiAgICB9KVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIGh0dHBHZXQoYGh0dHA6Ly9naXRodWIuY29tL3VzZXJzLyR7dXNlci5uYW1lfWApXG4gICAgfSkgLy8gMVxuICAgIC50aGVuKGdpdEh1YlVzZXIgPT4ge1xuICAgICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGdpdEh1YlVzZXIpXG4gICAgICBsZXQgaW1nID0gbmV3IEltYWdlKClcblxuICAgICAgaW1nLnNyYyA9IHVzZXIuYXZhdGFyX3VybFxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaW1nKVxuXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtpbWcucmVtb3ZlKCl9LCAxMDAwKSAvLyAyLjFcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgLy8gMi4yXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGltZy5yZW1vdmUoKVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LCBkZWxheSlcbiAgICAgIH0pO1xuICAgIH0pXG5cbn1cbmV4YW1wbGUzKClcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
