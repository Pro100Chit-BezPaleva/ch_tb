var version = 1;
var url = 'https://Pro100Chit-BezPaleva.github.io/ch_tb/';
var forEach = Array.prototype.forEach;

forEach.call(document.querySelectorAll('html, body, object'), function (elem) {
    elem.style.height = elem.style.width = '100%';
});

  
function inject(ver, bundle) {
    if (ver != version) {
        alert('Версия лоадера устарела, пересоздайте закладки.');
        window.location.href = url;
    }
    window.bundle = bundle.substring(1);
    forEach.call(document.querySelectorAll('#flash-app'), function (elem) {
        elem.data = url + 'client_release1248' + bundle + '.swf';
        elem.parentNode.replaceChild(elem.cloneNode(true), elem);
    });   
}


}