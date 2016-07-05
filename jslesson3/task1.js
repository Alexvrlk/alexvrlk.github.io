//перепишем switch на if
var browser = prompt('Введите имя браузера', 'browser');
if (browser == 'IE') {
    alert('0, да у вас IE!');
} else if (browser == 'Ch rome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    alert('Браузер норм!');
} else {
    alert ('Кто здесь?');
}