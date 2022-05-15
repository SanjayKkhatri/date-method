/*

Q No 1

var now = new Date();
document.write(now);
*/


/*

Q No 2

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var now = new Date();
alert("Current month : " + monthNames[now.getMonth()]);
*/

/*

Q No 3

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri",
  "Sat"
];

var now = new Date();
alert("Today is " + dayNames[now.getDay()]);

*/


/*

/*
Q No 4

var date = new Date();
switch(date.getDay()){
    case 0: alert("It's Fun Day!"); break;
    case 6: alert("It's Fun Day!"); break;
    default: alert("any other week day");
}

*/

// var date = new Date();
//  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1); 
//  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//  alert(date)
/*
var dob = '19800810';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
alert(age);
*/


/*
 var date = new Date();
 date.setDate(date.getDate() + 13);

 console.log(date);

var today = new Date();
var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  */


/*

//Q No 6

var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);


document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since January 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since January 1, 1970: " + accurateMin)

*/


/*

Q No 7

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 
console.log(" It's " + prepand);
*/


/*


var yearBorn = +prompt("Enter Your Birth Date");  
var dob = new Date(yearBorn);  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
  
//display the calculated age  
document.write("Your Age is " + age + " years");
document.write("<br> Your birth year is " + year ); 

*/


/*

Q No 8

var month = 0;
var laterDate = new Date(2022, month + 4, 0);
console.log("Later Date : "+ laterDate.toString());

*/





//=======================Function Objects================


//Q No 1

/*
function abc(){
  var now = new Date();
  document.write(now);
}

abc();
*/


//Q No 2

/*

function abc(){
  
  var firstName = prompt("Enter First Name ")
  var lastName = prompt("Enter Last Name ")
  var fullName = firstName + " " + lastName;
  
alert(fullName);
}

abc();

*/

//Q No 3

/*

function abc(){
  
  var num1 = +prompt("Enter First Number")
  var num2 = +prompt("Enter Last Number ")
  var result = num1 + num2;
  
alert(result);
}

abc();

*/

/*

Q No 4

  function abc(){
  
  var num1 = +prompt("Enter First Number")
  var operator = prompt("Enter any operator  '+ - * /' ")
  var num2 = +prompt("Enter Last Number ")
  var result;
  if (operator=='+'){
 result=num1+num2;
  }
  else if (operator=='-'){
  result=num1-num2;
  }
  else if (operator=='*'){
  result=num1*num2;
  }
  else if (operator=='/'){
  result=num1/num2;
  }
  alert(result);
  }

  abc();

*/

/*
Q No 5

function abc(){
  var a = +prompt("Enter Number To Get Square");
  var result = a*a;
  alert(result);
}

abc();

*/


/*

Q No 7

function abc(){
  var a = +prompt("Enter start number")
  var b = +prompt("Enter end number")
  for(i = a;i <= b;i++){
document.write(i + "<br>");

}
}
abc();
*/