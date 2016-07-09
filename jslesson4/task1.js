//function SumTo(n) {
function SumTo(n) {
    'use strict';
    if (n === 1) {
        return 1;
    } else {
        return n + SumTo(n - 1);
    }
}
console.log(SumTo(3));