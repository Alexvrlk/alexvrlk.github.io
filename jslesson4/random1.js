var randomNum = function RandomN(n) {
    'use strict';
    var tmp1 = '' + n;
    var length = tmp1.length;
    var tmp2 = Math.random() * Math.pow(10,length);
    if (tmp2 <= n) {
        return tmp2.toFixed(0);
    } else {
        return RandomN(n);
    }
}
var randomNumTwo = function RandomNn(m,n) {
    'use strict';
    var tmp1 = '' + n;
    var length = tmp1.length;
    var tmp2 = Math.random() * Math.pow(10,length);
    if (tmp2 <= n && tmp2 > m) {
        return tmp2.toFixed(0);
    } else {
        return RandomNn(m,n);
    }
}
function RandomInt(min,max) {
    'use strict';
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}
console.log(randomNum(4));
console.log(randomNumTwo(100,500));
console.log(RandomInt(100,500));