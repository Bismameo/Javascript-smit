// chapter 1 alert
alert("Welcome to JavaScript!");

// chapter 2 variables
var name = "John";
var age = 30;
var isStudent = true;
// chapter 3 functions
function greet() {
    console.log("Hello, " + name + "!");
}
greet();
// chapter 4 loops
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// chapter 5 arrays
var fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple

// . Variables for Numbers 3
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("The sum is: " + sum); // Output: The sum is: 30

//  variables for Strings 4
var firstName = "bisma";
var lastName = "meo";
var fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName); // Output: Full Name: bisma meo

// variables name legal and illegal 5
// Legal variable names
var myVariable;
var _myVariable;
var $myVariable;
var myVariable123;
// Illegal variable names
// var 123myVariable; // Not allowed - cannot start with a number
// var my-variable; // Not allowed - cannot contain hyphens
// var my variable; // Not allowed - cannot contain spaces


// Math Expressions: familiar operators 6
var a = 10;
var b = 5;
var addition = a + b; // 15
var subtraction = a - b;
var multiplication = a * b; // 50
var division = a / b; // 2
var modulus = a % b; // 0   
console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulus);



// Math Expressions: Unfamiliar Operators 7
var x = 10;
x++; // Increment operator, x becomes 11
x--; // Decrement operator, x becomes 10 again
var y = 5;
var z= x ** y;
console.log("Exponentiation: " + z); // Output: Exponentiation: 100000


// Math Expressions: Operator unfamiliar 8
var a = 10;
var b = 5;
var c = a % b;
console.log("Modulus: " + c); // Output: Modulus: 0

// Math Expressions: eliminating ambiguity 9
var a = 10;
var b = 5;

var result = (a + b) * 2; // Parentheses ensure addition happens before multiplication
console.log("Result: " + result); // Output: Result: 30


// Math Expressions: Increment and Decrement Operators 10
var x = 10;
x++; // Increment operator, x becomes 11
console.log("After increment: " + x); // Output: After increment: 11
x--; // Decrement operator, x becomes 10 again
console.log("After decrement: " + x); // Output: After decrement: 10

// . Concatenating text strings  11
var firstName = "bisma";
var lastName = "meo";
var fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName); // Output: Full Name: bisma meo


// . Prompts 12
var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome to JavaScript!");

// . if statements 13
var age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}   

// Comparison operators
var a = 10;
var b = 20;
console.log(a > b); // Output: false
console.log(a < b); // Output: true
console.log(a >= b); // Output: false           
console.log(a <= b); // Output: true
console.log(a == b); // Output: false
console.log(a != b); // Output: true


// Logical operators
var isStudent = true;
var hasID = false;
console.log(isStudent && hasID); // Output: false

console.log(isStudent || hasID); // Output: true
console.log(!isStudent); // Output: false

// if...else if...else statements
var score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// switch statements
var day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;

    case "Tuesday":
        console.log("Today is Tuesday.");
        break;

    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;

    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}


// while loops
var count = 0;

while (count < 5) {
    console.log("Count: " + count);
    count++;
}

// do...while loops
var count = 0;
do {
    console.log("Count: " + count);
    count++;
}
while (count < 5);

// for loops
for (var i = 0; i < 5; i++) {
    console.log("i: " + i);
}

// nested loops
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 2; j++) {
        console.log("i: " + i + ", j: " + j);
    }   
}

// break and continue statements
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("i: " + i);
}
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log("i: " + i);
}

// functions
function data() {
    console.log("This is a function.");
}
data(); // Output: This is a function.

// /////////////// function parameters and arguments
function call(name) {
    console.log("Hello, " + name + "!");
}
call("Alice"); // Output: Hello, Alice!


function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
console.log("Sum: " + sum); // Output: Sum: 15


// local and global variables
var globalVar = "I am a global variable.";
function Variables() {
    var localVar = "I am a local variable.";
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}
Variables();

// returning values from functions
function multiply(a, b) {
    return a * b;
}
var product = multiply(5, 10);
console.log("Product: " + product); // Output: Product: 50


// arrays
var fruits = ["apple", "banana", "orange"];
 console.log (fruits[1]) // Output: banana

// array methods

var fruits = ["apple", "banana", "orange"];
fruits.push("grape"); 
console.log(fruits);
fruits.pop(); 
console.log(fruits); 
fruits.shift(); 
console.log(fruits); 

fruits.unshift("kiwi");
console.log(fruits);

fruits.splice(1, 0, "mango");
console.log(fruits);
fruits.splice(2, 1);
console.log(fruits);
fruits.slice(1, 3);
console.log(fruits);

// loops with arrays
var fruits = ["apple", "banana", "orange"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// objects
var person = {
    name: "bisma",
    age: 24,
    isStudent: true
};
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

// Changing case
var str = "Hello, World!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Finding a character
var char = str.charAt(7);
console.log(char); // Output:

// Finding a substring
var substring = str.substring(0, 5);
console.log(substring); // Output: Hello

// Finding the length of a string
var length = str.length;
console.log(length); // Output: 13

// find segments
var segments = str.split("Hello, World!");
console.log(segments); // Output: ["Hello", "World!"]

// replacing characters
var newStr = str.replace("World", "JavaScript");
console.log(newStr); // Output: Hello, JavaScript!

// Rounding numbers
var num = 3.14;
console.log(Math.round(num));

// Generating random numbers
var randomNum = Math.random();
console.log(randomNum);


// Converting strings to integers and decimals
var str = "123";
var num = parseInt(str);
console.log(num); // Output: 123

var str = "3.14";
var num = parseFloat(str);
console.log(num); // Output: 3.14

var num = 3.14;
var str = num.toString();
console.log(str); // Output: "3.14"


// Converting strings to numbers, numbers to strings
var str = "123";
var num = Number(str);
console.log(num); // Output: 123

var num = 3.14;
var str = num.toString();
console.log(str); // Output: "3.14"

// Controlling the length of decimals
var num = 3.14159;
var roundedNum = num.toFixed(2);
console.log(roundedNum); // Output: "3.14"


// Getting the current date and time
var currentDate = new Date();
console.log(currentDate); 

// Getting the current month, day, and year
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();
console.log("Current Month: " + currentMonth);
console.log("Current Day: " + currentDay);
console.log("Current Year: " + currentYear);


// Getting the current hours, minutes, and seconds
var currentHours = currentDate.getHours();
var currentMinutes = currentDate.getMinutes();
var currentSeconds = currentDate.getSeconds();


console.log("Current Hours: " + currentHours);

console.log("Current Minutes: " + currentMinutes);

console.log("Current Seconds: " + currentSeconds);


// . Extracting parts of the date and time
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();
var month = currentDate.getMonth() + 2;

var year = currentDate.getFullYear();
console.log("Day of the Week: " + dayOfWeek);
console.log("Month: " + month);
console.log("Year: " + year);

// creating a date object for a specific date
var specificDate = new Date("December 25, 2024");
console.log(specificDate);                    // Output: Wed Dec 25 2024 00:00:00 GMT+0000 (Coordinated Universal Time)


// changing the date and time
var currentDate = new Date();
currentDate.setFullYear(2025);
currentDate.setMonth(11);

currentDate.setDate(31);
console.log(currentDate); 
 
// event: link
var link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("Link clicked!");
});

// html code for link
// <a href="" id="myLink">Click</a> 

// event: form
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Form submitted!");
});
// html code for form
// <form id="myForm">
//     <input type="text" name="name" placeholder="Enter your name">
//     <button type="submit">Submit</button>
// </form> in the form method not add click event because form submit event is used instead of click event.


// event: mouse
var button = document.getElementById("myButton");
button.addEventListener("mouseover", function() {
    console.log("Mouse over the button!");
});
// html code for mouse event
// <button id="myButton">Hover me</button>

// event: fields
var field = document.getElementById("myfield");
field.document("focus", function() {
    console.log("Field is focused!");
});

// html code for field event
// <input type="text" id="myfield" placeholder="Focus on me">


// Reading field values
function readFieldValue() {
    var inputField = document.getElementById("inputField");
    var fieldValue = inputField.value;
    console.log(fieldValue);
}
// html code for reading field values
// <input type="text" id="inputField" placeholder="Enter something">
// <button onclick="readFieldValue()">Read Value</button>





// chapter 50


// Setting field values   
function setFieldValue() {
    var inputField = document.getElementById("inputField");
    inputField.value = "New Value";
}
// html code for setting field values
// <input type="text" id="inputField" placeholder="Enter something">
// <button onclick="setFieldValue()">Set Value</button>




// swipping image & stting classes chapter#54
function change(changePic){
    var picture = document.getElementById(id);
    picture.src = changePic
    // document.getelementbyid(id).src=changepic
}
// html code
// <img src="" height="120" width="120" id="image" change(id,imgsrc)
// <img src="" height="120" width="120" id="image" changemouseover("img1") changemouseleave("img2")


// setting style chapter #55
function makingBig(){
    document.getElementById("p1").className += " big";
    //  function makeBig() {
        
}
 





// target some element by tag name chapter# 57
function specifyelemeny(p1){
    document.getElementByTagName("p");
}
