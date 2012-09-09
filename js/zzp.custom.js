// generic catch for errors
window.onerror = function(message, file, line) {
//  alert('Error gevangen: ' + file + ':' + line + '\n' + message);
  console.log('Error gevangen: ' + file + ':' + line + '\n' + message);
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

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
}

function getServiceURL(servicePath) {
  // on a device, connect to the testserver, otherwise to the dev machine
  if (isAndroid() || isIOS()) {
    return "http://www.thumbrater.com:9006" + servicePath;
  } else {
    return "http://www.thumbrater.com:9005" + servicePath;
  }
}