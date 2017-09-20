var popup = document.querySelector (".pop-up");
var write = document.querySelector (".btn-write");
var close = popup.querySelector (".close");
var yourName = popup.querySelector ("[name=name]");
var yourEmail = popup.querySelector ("[name=email]");
var form = popup.querySelector('form');
var modalOverlay = document.querySelector (".overlay");
var storage = localStorage.getItem('yourName');


if (write) write.addEventListener ("click", function(event) {
event.preventDefault();
popup.classList.add("pop-up-active");
modalOverlay.classList.add("overlay-active");
if (storage) 
{yourEmail.focus();
yourName.value = storage;
} 
else {yourName.focus();}
});

if (close) close.addEventListener ("click", function(event) {
event.preventDefault();
popup.classList.remove("pop-up-active");
modalOverlay.classList.remove("overlay-active");
popup.classList.remove("pop-up-error");

});

form.addEventListener('submit', function (event) {
    if (!yourName.value || !yourEmail.value) {
        event.preventDefault();
        popup.classList.add('pop-up-error');
    } else {
        localStorage.setItem('yourName', yourName.value);
    }
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (
            popup.classList.contains('pop-up-active')) {
            popup.classList.remove('pop-up-active');

        }
        if (
            modalOverLay.classList.contains('overlay-active')) {
            modalOverLay.classList.remove('overlay-active');

        }

    }
});
ymaps.ready(initMap);
function initMap() {
  var myMap;
    myMap = new ymaps.Map("map", {
        center: [59.938816, 30.323244],
        zoom: 16,
        controls: []
    });
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
  var myPlacemark = new ymaps.Placemark([59.938816, 30.323244] , {}, 
        { iconLayout: 'default#image',
          iconImageHref: ('img/marker.svg'),
          iconImageSize: [218, 142],
          iconImageOffset: [-20, -47] });     
 
    myMap.geoObjects.add(myPlacemark);}
