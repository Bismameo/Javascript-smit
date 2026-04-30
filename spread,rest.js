// // spread operator

// const male = {
//     name: "ahmed",
//     age : 20,
//     class : 11
// }
// const usermale = {
//     ...male,
//     country : "egypt"
// }
// console.log(usermale);

// // rest operator
// const [a,...rest] = [1,2,3,4,5]
// console.log(a);
// console.log(rest);


// // spread operator
// // expandvalue 1 to many
// // use arrays ,object,
// //  function ko call krwate h

// // rest operator
// // collect multiple elements and condense them into a single value  
// // FUNCTION K PERAMETERS MEIN USE HOTA H
// // DESCTRUCTURING MEIN USE HOTA H



// // DESCTRUCTURING
// const user = {
//     name : "ahmed",
//     age : 20,
//     country : "egypt"
// }
// const {name, ...other} = user;
// console.log(name);
// console.log(other);


// const data = (a,b,...rest) => {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// var arr = [1,2,3,4,5]
// data(...arr)


// const DATA= (name ,age ,...rest) => {
//     console.log(name);
//     console.log(age);
//     // console.log(country);
//     console.log(rest);
// }
// var arr = ["bisma",23,"pakistan",4,5]
// DATA(...arr);



// //////////////////////////////////////////
// question 1
// student result system

var student = {
name: "Bisma",
marks: [75, 80, 80]  // one subject fail
};

function Result(std) {
var total = 0;
var isFail = false;

for (var i = 0; i < std.marks.length; i++) {
    total += std.marks[i];

    if (std.marks[i] < 40) {
        isFail = true;
    }
}

var percentage = total / std.marks.length;

console.log("Name: " + std.name);
console.log("Percentage: " + percentage + "%");

if (isFail) {
    console.log("Result: FAIL (One subject failed) ❌");
} else if (percentage >= 50) {
    console.log("Result: PASS ✅");
} else {
    console.log("Result: FAIL ❌");
}
}

Result(student);

// question no 2
// online store cart total: calculate total bill using an array and loop

// Array of product prices
var cart = [500, 1200, 300, 150];

// Function to calculate total bill
function Total(items) {
    var total = 0;

    // Loop through array
    for (var i = 0; i < items.length; i++) {
        total += items[i];
    }

    console.log("Total Bill: Rs " + total);
}

// Call function
Total(cart);

// question no 3:
// login system: check email and pasword using iffalse:
// Stored user data
var email = "bisma@gmail.com";
var password = "12345";

// User input
var userEmail = prompt("Enter your email:");
var userPassword = prompt("Enter your password:");

// Check login
if (userEmail === email && userPassword === password) {
    console.log("Login Successful ✅");
} else {
    console.log("Email or Password is incorrect ❌");
}
    
// question 4:
// product stock checker: loop through product array and display stock availability.

const products = [
  { name: "earings", stock: 4 },
  { name: "makeup", stock: 6 },
  { name: "clothes", stock: 3 },
  { name: "shoes", stock: 1}
];


products.Each(product => {
  if (product.stock > 0) {
    console.log(product.name + " is in stock (" + product.stock + " available)");
  } else {
    console.log(product.name + " is out of stock");
  }
});

// question no 5:
// user search feature :search a username in side the arrays:
const user =[
    {Name:"bisma"},
    {Name:"hifza"},
    {Name:"Rabia"},
    {Name:"khatija"}
];
const searchUser = "sara";

const found = users.includes(searchUser);

console.log(found); // true
 



// question no 6:
// Discount system:Apply discount if user is member
const user = {
    name: "Bisma",
    isMember: true
};
const price = 1000;
const discount = 0.1; // 10% discount

if (user.isMember) {
    const discountedPrice = price * (1 - discount);
    console.log("Discounted Price: Rs " + discountedPrice);
}

// question no 7:
// grade calculator: calculate grade based on percentage using if else
const percentage = 85;

if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 80) {
    console.log("Grade: B");
} else if (percentage >= 70) {
    console.log("Grade: C");
} else if (percentage >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
console.log("Percentage: " + percentage + "%");



// question no 8:
// age verification: check if user is old enough to access content
const age = 20;
const requiredAge = 18;
if (age >= requiredAge) {
    console.log("Access Granted ");
} else {
    console.log("Access Denied ");
}
// question no 9:
// event registration: check if user has filled all required fields
const user = {
    name: "Bisma",
    email: "bisma@gmail.com"
};

if (user.name && user.email) {
    console.log("Event Registration Successful ");
} else {
    console.log("Please fill in all required fields ");
}   

// question no 10:
// password strength checker: check if password meets criteria using if else
const password = "P@ssw0rd";
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
const isValidLength = password.length >= 8;

if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength) {
    console.log("Password is strong ");
} else {
    console.log("Password does not meet all criteria ");
}
 
// question no 11:
// To-Do App Logic: Add, delete, and display tasks using arrays and objects.
const tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log("Task added: " + task);
}
function deleteTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Task deleted: " + task);
    }
}  elseif (index === -1)
     {
        console.log("Task not found: " + task);
    }
function displayTasks() {
    console.log("To-Do List:"); 
    tasks.forEach((task, index) => {
        console.log((index + 1) + ". " + task);
    }
);
}
addTask("Buy groceries");
addTask("Complete assignment");
displayTasks();
deleteTask("Buy groceries");
displayTasks();

// question no 12:
// Student Management System: Add students, find topper, and fail list.
const students = [
    { name: "Bisma", marks: 85 },
    { name: "Hifza", marks: 78 },
    { name: "Rabia", marks: 92 },
    { name: "Khatija", marks: 65 }
];
function findTopper(students) {
    let topper = students[0];
    students.forEach(student => {
        if (student.marks > topper.marks) {
            topper = student;
        }
    });
    return topper;
}
function findFailList(students) {
    const failList = students.filter(student => student.marks < 40);
    return failList;
}
const topper = findTopper(students);
console.log("Topper: " + topper.name + " with marks " + topper.marks);
const failList = findFailList(students);
console.log("Fail List:");
failList.forEach(student => {
    console.log("- " + student.name + ": " + student.marks);
});

// question no 13:
// Shopping Cart Object System: Calculate total and update quantities.
const cart = [
    { name: "product1", price:50 ,quantity:2},
    {name: "product2", price:100 ,quantity:1},
    {name: "product3", price:30 ,quantity:3}
];
function calculateTotal(cart) {
    let total = 0;  
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}
console.log("Total: Rs " + calculateTotal(cart));   
