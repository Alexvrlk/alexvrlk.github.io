var i;
for ( i = 1; i <= 100; i++ ) {
    if (i % 3 == 0) {
        console.log('Flizz');
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}