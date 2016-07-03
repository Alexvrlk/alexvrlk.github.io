var text;
var userName = prompt('login:');
text = (userName === 'admin') ? 'Hi' : (userName === 'manager') ? 'Hello' :
   (userName === '') ? 'No login' : '';

alert(text);