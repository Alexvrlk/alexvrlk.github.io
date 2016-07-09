function aFractal(n) {
    'use strict';
    if (n === 1) {
        return 1;
    } else {
        return n * aFractal(n - 1);
    }
}
console.log(aFractal(12));