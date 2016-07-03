var num = Number(prompt("select number",""));
var exp = Number(prompt("select exp",""));
var rezult = 1;
for(var i = 1; i <= exp; i++) {
    rezult *= num;
}
console.log(rezult);
console.log("Say 'stop'");
