/**
 * Here you implement your functions you want to use everywhere in your application.
 * See this functions as an example.
 */


var debugMode = true;

/////////////////////
/// devices helper //
/////////////////////

// < IE9
var isOldBrowser = !(('querySelector' in document) && ('localStorage' in window) && ('addEventListener' in window)),
  // includes tables and smartphones
  isMobile = !isUndefined(window.orientation),
  // smartphone detection (android,iphone,blackberry,windows phone)
  isSmartphone = /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  // device depending click event
  clickEvent = isMobile ? 'touchstart' : 'click';



///////////////////////
/// helper functions //
///////////////////////

function isUndefined(obj) {
  return typeof obj === 'undefined';
}


function isEmptyObject(obj) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

function formatDate(dateString){

  var date = new Date(dateString),
    year = date.getFullYear(),
    month = addLeadingZero(date.getMonth() + 1),
    day = addLeadingZero(date.getDate());

  return day + '.' + month + '.' + year;
}

function addLeadingZero(number){
  return parseInt(number) < 10 ? '0' + number : number;
}

function isNumeric(number) {
  if(isUndefined(number)){
    return false;
  }

  return !isNaN(number) && isFinite(number);
}

function numberFormat(number) {

  if (!isNumeric(number)) {
    return false;
  }

  return number.toLocaleString('de-DE');
}

// add some classes to the html element
function addHelperClasses() {
  var htmlElement = document.getElementsByTagName('html')[0],
    className = [];

  if (isOldBrowser) {
    className.push('is-oldbrowser');
  }

  if (isMobile) {
    className.push('is-mobile');
  }

  if (isSmartphone) {
    className.push('is-smartphone');
  }
  
  htmlElement.className = className.join(' ');
}

function log(){
  if(!debugMode) {
    return false;
  }
  
  var args = Array.prototype.slice.call(arguments);

  if(args.length === 1){
    args = args[0];
  }

  console.log(args);  
}

module.exports = {

  isMobile: isMobile,
  isSmartphone: isSmartphone,
  isOldBrowser: isOldBrowser,
  clickEvent: clickEvent,

  isUndefined: isUndefined,
  isNumeric: isNumeric,
  numberFormat: numberFormat,
  addHelperClasses: addHelperClasses,
  log : log,
  isEmptyObject: isEmptyObject,
  formatDate: formatDate

};