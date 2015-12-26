/*

  - document.documentElement.scrollTop / Left
    buggy in Webkit: use with document.body.scrollTop / Left
    if jQuery, use $('html, body')

  - window.pageXOffset / YOffset
    read-only
    IE8-
    no Webkit bugs

  - window.scrollBy(x, y) - change relative to CURRENT scroll position
  
  - window.scrollTo(x, y) - change relative to WHOLE document scroll position (from start)
  
  - elem.scrollIntoView(isTop) - isTop ? scroll that element will be at the TOP of window visible area 
                                       : scroll that element will be at the BOTTOM of window visible area 
                                        
*/
"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0Mi9kb2N1bWVudF9hbmRfcGFnZV9vYmplY3RzLzA5LmRvY3VtZW50RWxlbWVudF9tZXRyaWNzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
