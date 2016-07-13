function moreTasks(obj) {
    'use strict';
    var maxTasks = 0, key, men;
    for (key in obj) {
       if (obj[key] > maxTasks) {
           maxTasks = obj[key];
           men=key;   
       }
    }
    return men;
}
var tasksCompleted = {
  'Anna': 30,
  'Serg': 150,
  'Elena':99,
  'Anton': 1
};
console.log(moreTasks(tasksCompleted));