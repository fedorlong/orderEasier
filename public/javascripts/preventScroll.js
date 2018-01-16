var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}


function disableScroll(dom) {
    if(!dom) {
        return
    }
    if (dom.addEventListener) //older FF
        dom.addEventListener('DOMMouseScroll', preventDefault, false);
    dom.onwheel = preventDefault; // modern standard
    dom.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    dom.ontouchmove  = preventDefault; // mobile
    dom.onkeydown  = preventDefaultForScrollKeys;

}

function enableScroll(dom) {
    if(!dom) {
      return;
    }
    if (dom.removeEventListener)
        dom.removeEventListener('DOMMouseScroll', preventDefault, false);
    dom.onmousewheel = document.onmousewheel = null;
    dom.onwheel = null;
    dom.ontouchmove = null;
    dom.onkeydown = null;
}
