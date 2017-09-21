var write = document.querySelector('.btn-write');
var popup = document.querySelector('.pop-up');
var close = popup.querySelector('.close');
var overLay = document.querySelector('.overlay');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var email = popup.querySelector('[name=youremail]');
var storage = localStorage.getItem('login');

write.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('pop-up-active');
    overLay.classList.add('overlay-active');
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('pop-up-active');
    popup.classList.remove('pop-up-error');
    overLay.classList.remove('overlay-active');
});

form.addEventListener('submit', function (event) {
    if (!login.value || !email.value) {
        event.preventDefault();
        popup.classList.add('pop-up-error');
    } else {
        localStorage.setItem('login', login.value);
    }
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (
            popup.classList.contains('pop-up-active')) {
            popup.classList.remove('pop-up-active');

        }
        if (
            overLay.classList.contains('overlay-active')) {
            overLay.classList.remove('overlay-active');

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
        position: {
            top: 15,
            left: 15
        }
    });
    var myPlacemark = new ymaps.Placemark([59.938816, 30.323244], {}, {
        iconLayout: 'default#image',
        iconImageHref: ('img/marker.svg'),
        iconImageSize: [218, 142],
        iconImageOffset: [-20, -47]
    });

    myMap.geoObjects.add(myPlacemark);
}
