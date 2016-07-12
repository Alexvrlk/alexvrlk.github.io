function arrLast(AnyArray) {
    'use strict';
    return AnyArray[AnyArray.length - 1];
}
var ar = ['sdf', 1, 2, 4, 5, '56', 'sasa'];
console.log(arrLast(ar));

function arrAdd(arr, any) {
    'use strict';
    arr.push(any);
    return arr;
}
console.log(arrAdd([1, 2, 3, 4, 5], 'hihi'));

var fruits = ['apple', 'orange'];
fruits.push('kiwi');
console.log(fruits);
fruits[fruits.length - 2] = 'pear';
console.log(fruits);
console.log(fruits.shift());
fruits.unshift('apricot', 'peach');
console.log(fruits);

function arRandomEl(arr) {
    'use strict';
    var rand = Math.floor(Math.random() * (arr.length + 1));
    return arr[rand];
}
var anyarr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 15];
console.log(arRandomEl(anyarr));

function fillterRange(arr, startR, endR) {
    'use strict';
    var tmpArr = [];
    for (var i = startR, j = 0; i <= endR ; i++, j++) {
         tmpArr[j] = arr[i];
    }
    return tmpArr;
}
console.log(fillterRange([9, 8, 7, 6, 5, 4, 3, 2, 1], 1, 7));