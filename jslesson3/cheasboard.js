var cols = 8;
for (var i = 1; i <= cols; i++) {
    var rows = '';
    for (var j = 1; j <= 8; j++) {
        if (i % 2 == 0) { // чтобы начать строку с пробела
            if (j % 2 == 0) { // добавляем #
                rows += '#'; 
            } else {         // добавляем пробел
                rows += ' ';
            }      
        } else { // начать строку с #
            if (j % 2 == 0) { // добавляем пробел
                rows = rows + ' '; 
            } else {         // добавляем #
                rows = rows + '#';
            }
        }
    }
    console.log (rows); // вывести готовую строку
}
/* var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board); */