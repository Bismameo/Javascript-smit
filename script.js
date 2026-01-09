// chapter:1- ALerts

// question 1. Write a script to greet your website visitor using JS alert box.
alert("JavaScript Alert");

// question 2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password.");

// question 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\nHappy Coding!");

// question 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert("Happy Coding!");

// question 5. Generate the following message through browser’s developer console:
console.log("Hello... I can run JS through my web browser's console");

// question 6. Make use of alerts in your new/existing HTML & CSS project.
alert("Welcome to my website!");









// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// chapter:2- Variables for Strings


// question 1. Declare a variable called username.
var username = "";
// question 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Mohsin Ali";

// question 3. Write script to
// a) Declare a JS variable, titled message.
var message ="hi there";

// b) Assign “Hello World” to variable message
message = "Hello World";

// c) Display the message in alert box.
massege = "Hello World";
alert(message);

// question 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "John Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse); 

// question 5. Write a script to display the following alert using one JS variable:
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// question 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com)
var email = "example@example.com";
alert("My email address is " + email);

// question 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// question 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");

// question 9. Store following string in a variable and show in alert and browser through JS





// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// chapter:3- Variables for Numbers

// question 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 20;
alert("I am " + age + " years old");

// question 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitcount = 14;
alert("you have visited this site " + visitcount + " times");

// question 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
document.write("<br>my birth year is  2003");
document.write("<br>Data type of my declared variable is number");


// question 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information about him:
// a. Visitor’s name
var visitorName = "John Doe"; 

// b. Product title
var productTitle = "T-shirt(s)";

// c. Quantity i.e. how many products a visitor wants to order
var quantity = 5;

// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
document.write("<br>" + visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");









// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// chapter:4- Variable names: Legal & Illegal
// question 1. Declare 3 variables in one statement.
var num1 = 5, num2 = 10, num3 = 15;

// question 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names
var firstname;
var studentAge;
var _totalAmount;
var $price;
var cityName123;

// Illegal variable names
// var -total; // Hyphen not allowed
// var 2ndPlace; // Cannot start with a number
// var alert; // Reserved keyword
// var my name; // Space not allowed
// var @home; // Special character not allowed

// question 3. Display this in your browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<br>Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable");
document.write("<br>Variables must begin with a letter, $, or _. For example: $name, _name or name");
document.write("<br>Variable names are case sensitive");
document.write("<br>Variable names should not be JS keywords")





// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// chapter:5- Math Expressions

// question 1. Write a program that takes two numbers & adds them in a new variable. Show the result in your browser.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
console.log("<br>Sum of " + num1 + " and " + num2 + " is " + sum);


// question 2. Repeat task1 for subtraction, multiplication, division & modulus.
var difference = num1 - num2;
console.log("<br>Difference of " + num1 + " and " + num2 + " is " + difference);
var product = num1 * num2;
console.log("<br>Product of " + num1 + " and " + num2 + " is " + product);
var quotient = num1 / num2;
console.log("<br>Quotient of " + num1 + " and " + num2 + " is " + quotient);
var remainder = num1 % num2;
console.log("<br>Remainder of " + num1 + " and " + num2 + " is " + remainder);


// question 3. Do the following using JS Mathematic Expressions
var value = 5;
document.write("<br>Value after variable declaration is: " + value);
value++;
document.write("<br>Value after increment is: " + value);
value += 7;
document.write("<br>Value after addition is: " + value);
value--;
document.write("<br>Value after decrement is: " + value);
var remainder = value % 3;
document.write("<br>The remainder is: " + remainder);

// question 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("<br>Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");


// question 5. Write a script to display multiplication table of any number in your browser.
var number = 4;
document.write("<br>Multiplication table of " + number + ":<br>");  
for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}

// question 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
var celsius = 25;           
var fahrenheit = (celsius * 9/5) + 32;
document.write("<br>" + celsius + "°C is " + fahrenheit + "°F<br>");
fahrenheit = 70;           
celsius = (fahrenheit - 32) * 5/9;
document.write("<br>" + fahrenheit + "°F is " + celsius + "°C<br>");


// question 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;

var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("<br>Total cost of your order is " + totalCost + " PKR");


// question 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<br>Percentage: " + percentage + "%");


// question 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
var usdToPkr = 104.80;
var sarToPkr = 28;
var totalPkr = (10 * usdToPkr) + (25 * sarToPkr);
document.write("<br>Total Currency in PKR: " + totalPkr);


// question 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
var num = 10;
document.write("<br>Initial value: " + num);
num += 5;
document.write("<br>Value after addition: " + num);
num *= 10;
document.write("<br>Value after multiplication: " + num);
num /= 2;
document.write("<br>Value after division: " + num);
num--;
document.write("<br>Value after decrement: " + num);
var remainder = num % 3;
document.write("<br>The remainder is: " + remainder);
// question 11. The Age Calculator: Forgot how old someone is? Calculate it!
var currentYear = 2023;
var birthYear = 2003;
var age = currentYear - birthYear;
document.write("<br>Your age is: " + age);

// question 12. The Geometrizer: Calculate properties of a circle.
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);

// question 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
var favoriteSnack = "Chocolate Chip";
var currentAge = 20;    
var maxAge = 65;
var amountPerDay = 3;
var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amountPerDay;
document.write("<br>You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);










