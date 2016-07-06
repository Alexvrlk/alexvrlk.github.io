var rows = +prompt('Insert number rows triangle:', '7');
var symbol = prompt('Insert symbol:', '*');
// 1-й вариант
/*var counter;
var results = '';
for (counter = 1; counter <= rows; counter++) {
    results += symbol;
    console.log(results);
}*/
// 2-й вариант
for( var line = ''; line.length <= rows; line += symbol) {
    console.log(line);
}