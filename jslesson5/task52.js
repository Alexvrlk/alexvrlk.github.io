function multiplyNumeric(obj) {
    'use strict';
    var keyS;
    for (keyS in obj) {
        if (typeof (obj[keyS]) === 'number') {
            obj[keyS] *= 2;
        }  
    }
    return obj;
}
var image = {
    width: 100,
    height: 400,
    title: 'Cool image',
    numb: 700
};
console.log(multiplyNumeric(image));