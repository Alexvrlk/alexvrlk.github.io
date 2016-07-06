// x^n
var num = +prompt('Insert number:','');
var powNum = + prompt('Insert pow number:', '');
console.log(pow(num,powNum));
function pow(num1, pownum1) {
    var result =1;
    for (var i = 1; i <= pownum1; i++) {
        result *= num;
    }
    return result
}