var UdanLibrary;!function(){"use strict";var e={r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var i,n=["body","document","window","html","script","style","iframe","doctype","link","svg","path","meta","circle","rect","stop","defs","linearGradient","g"],r=function(e){try{var t={element:e,id:""};if(t.element===window)return;var i=t.element.tagName;if(i&&-1!==n.indexOf(i.toLowerCase()))return;if(e.classList&&e.classList.contains("uda_exclude"))return;for(var r=0;r<UDAClickObjects.length;r++)if(UDAClickObjects[r].element.isSameNode(t.element))return;t.id=UDAClickObjects.length,UDAClickObjects.push(t)}catch(e){}};window.UDAClickObjects=[],window.UDARemovedClickObjects=[],EventTarget.prototype.addEventListener=(i=EventTarget.prototype.addEventListener,function(){"click"===arguments[0]&&r(this),i.call(this,arguments[0],arguments[1],arguments[2])}),UdanLibrary=t}();