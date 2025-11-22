// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today=new Date();
var day=today.getDay();

let days=['sunday','monday','tuesday','wednesday','thuresday','friday','saturday'];
console.log('Today is: ' + days[day]);
console.log('Current time is: ' +today.toLocaleTimeString());