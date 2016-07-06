// Find simple numbber
var startInterval = +prompt('Введите число начала интервала:', '');
var endInterval = +prompt('Введите число конца интервала', '');
var simpleNum;
for (var i = startInterval; i <= endInterval; i++) {
    simpleNum = 1;
    for (var y = startInterval; y < i; y++) {
        if (i % y == 0) {
            simpleNum =0;
            break;
        } 
    }
    if (simpleNum == 1) {
        console.log(i);
    }
}