function SumPay(obj) {
    var pay = 0;
    for (var item in obj) {
        pay += obj[item];
    }
    return pay;
}
var salaries = {
    'junior' : 1000,
    'middle' : 2500,
    'senior' : 3500,
    'lead' : 5000
};
console.log(SumPay(salaries));