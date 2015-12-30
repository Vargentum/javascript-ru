'use strict';

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

function task1() {

  var customEvent = new MouseEvent('customMouseEvent', { bubbles: true });

  grid.dispatchEvent(customEvent);

  var handler = function handler(evt) {
    return console.log('event fired');
  };

  document.addEventListener('customMouseEvent', handler);
}
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1LmN1c3RvbV9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBLFNBQVMsS0FBSyxHQUFJOztBQUVoQixNQUFJLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBOztBQUVyRSxNQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFBOztBQUUvQixNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQU8sQ0FBRyxHQUFHO1dBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7R0FBQSxDQUFBOztBQUUvQyxVQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUE7Q0FFdkQ7QUFDRCxLQUFLLEVBQUUsQ0FBQSIsImZpbGUiOiJwYXJ0Mi9ldmVudHMvMDUuY3VzdG9tX2V2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbiAgRE9NNCBldmVudHMgc3RhbmRhcnQgKElFMTEtKVxuXG4gICAgY3JlYXRpb246XG5cbiAgICAgIHdpdGggZm9sbG93aW5nIENvbnN0cnVjdG9yc1xuXG4gICAgICBFdmVudFxuICAgICAgTW91c2VFdmVudFxuICAgICAgS2V5Ym9hcmRFdmVudFxuICAgICAgLi4uXG5cbiAgICAgIHJldHVybiBldmVudE9iamVjdFxuICBcbiAgICAgIGxldCBldmVudCA9IG5ldyBFdmVudCggdHlwZSwgWyxmbGFnc10pXG4gICAgICBcbiAgICAgIHR5cGUgLSBuYW1lIG9mIGV2ZW50LiBhbnkgc3RyaW5nXG4gICAgICBieSBkZWZhdWx0IGZsYWdzIGVxdWFsIHRvIHRoaXMgb2JqZWN0XG4gICAgICB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxsYWJsZTogZmFsc2VcbiAgICAgIH1cbiAgICAgICAgXG5cbiAgICBpbml0aWFsaXphdGlvbjpcbiAgICBcbiAgICAgIGVsZW0uZGlzcGF0Y2hFdmVudCggZXZlbnQgKVxuXG4gICAgICBkaXNwYXRjaEV2ZW50IGNhbiByZXR1cm4gZmFsc2UgaWZcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaXMgc3VwcGxpZWQgaW4gaGFuZGxlclxuXG4qL1xuXG5mdW5jdGlvbiB0YXNrMSAoKSB7XG4gIFxuICBsZXQgY3VzdG9tRXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY3VzdG9tTW91c2VFdmVudCcsIHtidWJibGVzOiB0cnVlfSlcblxuICBncmlkLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpXG5cbiAgbGV0IGhhbmRsZXIgPSBldnQgPT4gY29uc29sZS5sb2coJ2V2ZW50IGZpcmVkJylcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjdXN0b21Nb3VzZUV2ZW50JywgaGFuZGxlcilcblxufVxudGFzazEoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
