// generic catch for errors
window.onerror = function(message, file, line) {
  alert('Error gevangen: ' + file + ':' + line + '\n' + message);
};

// override some JQM defaults
$(document).bind("mobileinit", function(){
  $.extend(
      $.mobile, {
        defaultPageTransition: "slide"
      })
});

function getUrlParam(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {
     return decodeURIComponent(name[1]);
   } else {
     return null;
   }
}
