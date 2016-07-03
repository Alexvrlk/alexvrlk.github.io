var user = prompt('Login:', '');
if (user === 'admin') {
    var userPassword = prompt('Password:', '');
    if (userPassword === 'passw0rd') {
        alert('Welcome home!');
    } else if (userPassword === null) {
        alert('Chancelled');
    } else {
        alert('Wrong password');
    }
} else if (user === null) {
    alert('Chancelled');
} else {
    alert('Access denied');
}