var write = document.querySelector('.btn-write');
var popup = document.querySelector('.pop-up');
if (popup) {var close = popup.querySelector('.close');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var email = popup.querySelector('[name=youremail]');
var close = popup.querySelector('.close')};
var overLay = document.querySelector('.overlay');
if (login)
	var storage = localStorage.getItem('login');

if(write) {
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
})
};

if (close) {
	close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('pop-up-active');
    popup.classList.remove('pop-up-error');
    overLay.classList.remove('overlay-active');
})
};

if(form)
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

