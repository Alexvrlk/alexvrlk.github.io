var strg = prompt('Insert string:', '');
if (strg.length <= 20) {
    console.log(strg);
} else {
    console.log(strg.substring(0,20) + '...');
}