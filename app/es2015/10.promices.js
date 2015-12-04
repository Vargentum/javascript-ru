'use strict';

/*

  Promice: special object that help to work with async code

  it contains itself states:
    - pending
    - resolve
    - reject

  
  Method to attach handlers
    - .then(onResolve, onReject)

  constructor
    let promice = new Promice()

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

  var promice = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!true) {
        resolve('success'); //callback
      } else {
          reject(new Error('fail')); //callback
        };
    }, 2000);
  });

  promice.then(function (result) {
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

  add wrapper to some function, to return promice instead


  TODO:
    
    make decorator httpGet(url) that returns promice

    create new XMLHttpRequest
    open with .open('QUERY', url, true)
    fill onload method
      if status 200
        resolve promice with context response

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
    Promice chaining
    - when done one async request, make next
     1.if .then() returns promice, its result 
      will be applied to next .then()
     2.1 in this case, you can't attach next .then()
        because in contain async code
     2.2 return resolved (or rejected) promice for correct next() chaining
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
//# sourceMappingURL=data:application/json;base64,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SUFBSSxDQUFDLFVBQVUsQ0FBQTtBQUN6QixZQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Ozs7QUFBQSxBQUl6QixXQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSzs7QUFDdEMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsV0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ1osZUFBTyxFQUFFLENBQUE7T0FDVixFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ1YsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFBO0NBRUw7QUFDRCxRQUFRLEVBQUUsQ0FBQSIsImZpbGUiOiJlczIwMTUvMTAucHJvbWljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG4gIFByb21pY2U6IHNwZWNpYWwgb2JqZWN0IHRoYXQgaGVscCB0byB3b3JrIHdpdGggYXN5bmMgY29kZVxuXG4gIGl0IGNvbnRhaW5zIGl0c2VsZiBzdGF0ZXM6XG4gICAgLSBwZW5kaW5nXG4gICAgLSByZXNvbHZlXG4gICAgLSByZWplY3RcblxuICBcbiAgTWV0aG9kIHRvIGF0dGFjaCBoYW5kbGVyc1xuICAgIC0gLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdClcblxuICBjb25zdHJ1Y3RvclxuICAgIGxldCBwcm9taWNlID0gbmV3IFByb21pY2UoKVxuXG4gIGl0IGFjY2VwdHMgb25lIGZ1bmN0aW9uIGFzIGFyZ3VtZW50XG4gIGZ1bmN0aW9uIGNvbnRhaW4gdHdvIHBhcmFtZXRlcnMgXG4gICAgLSByZXNvbHZlKHNtdGgpXG4gICAgLSByZWplY3Qoc210aClcblxuICAgIHRoZXNlIGFyZSBmdW5jdGlvbnMgd2l0aCBzaW5nbGUgYXJndW1lbnQsXG4gICAgdGhhdCBjb250YWlucyByZXN1bHQgb3IgRXJyb3IgdGhhdCBoYW5kbGVzIGluc2lkZSBcbiAgICAudGhlbihoMSwgaDIpIGhhbmRsZXJzXG5cbiAgVGlwczogXG4gICAgLSBiZXN0IHByYWN0aWNlIHRvIHRyYW5zbGF0ZSBFcnJvciBpbiByZWplY3QgcGFyYW1ldGVyXG4gICAgLSBwcm9tXG5cbiAgUFxuKi9cblxuZnVuY3Rpb24gZXhhbXBsZTEgKCkge1xuICBcbiAgbGV0IHByb21pY2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSgnc3VjY2VzcycpIC8vY2FsbGJhY2sgIFxuICAgICAgfSBlbHNle1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdmYWlsJykpIC8vY2FsbGJhY2tcbiAgICAgIH07XG4gICAgICBcbiAgICB9LCAyMDAwKVxuICB9KTtcblxuICBwcm9taWNlLnRoZW4oXG4gICAgcmVzdWx0ID0+IHsgLy9oYW5kbGVyXG4gICAgICBjb25zb2xlLmxvZyhgUmVzdWx0IGlzICR7cmVzdWx0fWApXG4gICAgfSxcbiAgICByZWplY3QgPT4geyAvL2hhbmRsZXJcbiAgICAgIGNvbnNvbGUubG9nKGBSZXN1bHQgaXMgJHtyZWplY3R9YClcbiAgICB9XG4gIClcbn1cbi8vIGV4YW1wbGUxKClcblxuXG5cbi8qXG4gIFByb21pY2lmaWNhdGlvbjpcblxuICBhZGQgd3JhcHBlciB0byBzb21lIGZ1bmN0aW9uLCB0byByZXR1cm4gcHJvbWljZSBpbnN0ZWFkXG5cblxuICBUT0RPOlxuICAgIFxuICAgIG1ha2UgZGVjb3JhdG9yIGh0dHBHZXQodXJsKSB0aGF0IHJldHVybnMgcHJvbWljZVxuXG4gICAgY3JlYXRlIG5ldyBYTUxIdHRwUmVxdWVzdFxuICAgIG9wZW4gd2l0aCAub3BlbignUVVFUlknLCB1cmwsIHRydWUpXG4gICAgZmlsbCBvbmxvYWQgbWV0aG9kXG4gICAgICBpZiBzdGF0dXMgMjAwXG4gICAgICAgIHJlc29sdmUgcHJvbWljZSB3aXRoIGNvbnRleHQgcmVzcG9uc2VcblxuICAgICAgZWxzZVxuICAgICAgICByZWplY3QgZXJyb3JcbiAgICAgICAgICBhZGQgbmFtZSBhcyAuc3RhdHVzVGV4dFxuICAgICAgICAgIGFkZCBlcnJvci5jb2RlIGFzIC5zdGF0dXNcblxuICAgIHJlamVjdCBuZXcgTmV0d29yayBFcnJvciBvbiB4aHIub25lcnJvclxuXG4gICAgc2VuZCB4aHIgd2l0aCAuc2VuZCgpXG4qL1xuXG5cblxuZnVuY3Rpb24gZXhhbXBsZTIgKCkge1xuXG4gIGZ1bmN0aW9uIGh0dHBHZXQgKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgZSA9IG5ldyBFcnJvcih0aGlzLnN0YXR1c1RleHQpXG4gICAgICAgICAgZS5jb2RlID0gdGhpcy5zdGF0dXNcbiAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpXG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKClcbiAgICB9KVxuICB9XG5cbiAgaHR0cEdldChcImh0dHA6Ly9saWdhLm5ldC9cIilcbiAgLnRoZW4oXG4gICAgcmVzb2x2ZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgU3VjY2VzczogJHtyZXNvbHZlfWApXG4gICAgfSxcbiAgICByZWplY3QgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFNvcnJ5OiAke3JlamVjdH1gKVxuICAgIH1cbiAgKVxufVxuLy8gZXhhbXBsZTIoKVxuXG5cblxuXG5cbmZ1bmN0aW9uIGV4YW1wbGUzICgpIHtcbiAgXG4gIC8qXG4gICAgUHJvbWljZSBjaGFpbmluZ1xuICAgIC0gd2hlbiBkb25lIG9uZSBhc3luYyByZXF1ZXN0LCBtYWtlIG5leHRcblxuICAgIDEuaWYgLnRoZW4oKSByZXR1cm5zIHByb21pY2UsIGl0cyByZXN1bHQgXG4gICAgICB3aWxsIGJlIGFwcGxpZWQgdG8gbmV4dCAudGhlbigpXG5cbiAgICAyLjEgaW4gdGhpcyBjYXNlLCB5b3UgY2FuJ3QgYXR0YWNoIG5leHQgLnRoZW4oKVxuICAgICAgICBiZWNhdXNlIGluIGNvbnRhaW4gYXN5bmMgY29kZVxuXG4gICAgMi4yIHJldHVybiByZXNvbHZlZCAob3IgcmVqZWN0ZWQpIHByb21pY2UgZm9yIGNvcnJlY3QgbmV4dCgpIGNoYWluaW5nXG4gICovXG5cbiAgaHR0cEdldChcInVzZXJzL21lL3VzZXIuanNvblwiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHsgXG4gICAgICBsZXQgdXNlciA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgICByZXR1cm4gdXNlciBcbiAgICB9KVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIGh0dHBHZXQoYGh0dHA6Ly9naXRodWIuY29tL3VzZXJzLyR7dXNlci5uYW1lfWApICAgICAgICBcbiAgICB9KSAvLyAxXG4gICAgLnRoZW4oZ2l0SHViVXNlciA9PiB7XG4gICAgICBsZXQgdXNlciA9IEpTT04ucGFyc2UoZ2l0SHViVXNlcilcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKSBcblxuICAgICAgaW1nLnNyYyA9IHVzZXIuYXZhdGFyX3VybFxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaW1nKVxuXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtpbWcucmVtb3ZlKCl9LCAxMDAwKSAvLyAyLjFcbiAgICAgIFxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgLy8gMi4yXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGltZy5yZW1vdmUoKVxuICAgICAgICAgIHJlc29sdmUoKSAgXG4gICAgICAgIH0sIGRlbGF5KVxuICAgICAgfSk7XG4gICAgfSlcblxufVxuZXhhbXBsZTMoKVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
