// chapter 6

// quesiton no 1 :


var a = 10;

console.log("the value of a is" + a);

console.log("the value of a is" + ++a);

console.log("the value of a is" + a++); 

console.log("the value of a is" + a);

console.log("the value of a is " + -- a);



// question no 2:

var a = 2;
var b = 1;

 var result = --a - --b + ++b + b--;

 console.log("Result is: " + result);
console.log("The value of a is: " + a);
console.log("The value of b is: " + b);

  // Question 3
  var userName = prompt("Enter your name:");
  alert("Hello " + userName + "! Welcome ");

  // Question 5
  var num = prompt("Enter a number for multiplication table:", "5");

if (num === "10" || num === null) {
  num = 5;
}

num = Number(num);




  // Question 6

  // a) Subject names
  var subject1 = prompt("Enter first subject name:");
  var subject2 = prompt("Enter second subject name:");
  var subject3 = prompt("Enter third subject name:");

  // b) Total marks
  var totalMarksEach = 100;

  // c & d) Obtained marks
  var marks1 = +prompt("Enter obtained marks for " + subject1);
  var marks2 = +prompt("Enter obtained marks for " + subject2);
  var marks3 = +prompt("Enter obtained marks for " + subject3);

  // e) Calculations
  var totalObtained = marks1 + marks2 + marks3;
  var totalMarks = totalMarksEach * 3;
  var percentage = (totalObtained / totalMarks) * 100;

  // Display result in table
  document.write("<h2>Marks Sheet</h2>");
  document.write("<table border='1' cellpadding='10'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th></tr>");
  document.write("</table>");

  document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");



