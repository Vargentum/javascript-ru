var xhr = new XMLHttpRequest()

xhr.open('GET', 'phones.json')
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send()

xhr.onreadystatechange = xhrProcessor(
  function() { updateAppContent(createLoadingArea()) },
  function(response) { updateAppContent(createList(JSON.parse(response))) }
)

function xhrProcessor(onStart, onSuccess) {
  onStart()
  return function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      onSuccess(xhr.responseText)
    } 
  }
}

function createList(data) {
  return "<ul>" + data.map(createItem).join('') + "</ul>"
} 

function createItem(item) {
  return "<li>"+item.name+"</li>"
}

function createLoadingArea() {
  return "<div>Loading...</div>"
}

function updateAppContent (html) {
  document.getElementById('app').innerHTML = html
}
