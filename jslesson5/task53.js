var inputPromt, arr = [], counter = 0, sum = 0;

while(true) { 
    inputPromt = prompt('Insert number:', '');
    if (inputPromt == null || inputPromt == '') {break;}
    arr[counter] = Number(inputPromt);
    counter++;
}
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
arr.length != 0 ? console.log(arr) : console.log('no data');
arr.length != 0 ? console.log(sum) : console.log('no data');