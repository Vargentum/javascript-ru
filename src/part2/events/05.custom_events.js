/*

  DOM4 events standart (IE11-)

    creation:

      with following Constructors

      Event
      MouseEvent
      KeyboardEvent
      ...

      return eventObject
  
      let event = new Event( type, [,flags])
      
      type - name of event. any string
      by default flags equal to this object
      {
        bubbles: false,
        cancellable: false
      }
        

    initialization:
    
      elem.dispatchEvent( event )

      dispatchEvent can return false if
      event.preventDefault() is supplied in handler

*/

function task1 () {
  
  let customEvent = new MouseEvent('customMouseEvent', {bubbles: true})

  grid.dispatchEvent(customEvent)

  let handler = evt => console.log('event fired')

  document.addEventListener('customMouseEvent', handler)

}
task1()