function isEmpty(obj) {
    var i = 0;
    for (var item in obj) {
        if (item in obj) {
            i++;
        }
    }
    console.log(item + ' i='+ i);
    return (i != 0) ? false : true;
    
// 2 variant
// for (var item in obj) {
//     return false;          
// }
// return true; т.к. нет свойств мы в тело цикла не зайдем
}
var todoList = {};
console.log(isEmpty(todoList));
todoList['homework'] = 'lesson5';
console.log(isEmpty(todoList));
console.log(todoList);