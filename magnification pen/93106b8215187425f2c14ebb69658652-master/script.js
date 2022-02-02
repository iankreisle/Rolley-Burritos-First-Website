document.getElementById("page").onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY*1 + "px";
    document.getElementById("magnify").style.left = e.pageX*1 + "px";
}