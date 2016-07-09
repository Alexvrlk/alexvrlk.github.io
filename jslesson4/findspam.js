function checkSpam(strg) {
    var strTmp = strg.toLowerCase();
    if (strTmp.indexOf('spam') >= 0 || strTmp.indexOf('sex') >= 0) {
        return true;
    } else {
        return false;
    }
}
var inputSt = prompt('Insert string', '');
var output = checkSpam(inputSt) ? 'yes, spam' : 'no spam!';
console.log(output);