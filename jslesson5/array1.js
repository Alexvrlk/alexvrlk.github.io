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