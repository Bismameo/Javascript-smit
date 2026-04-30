// // // question 1:

// // function showDataTime(){
// //     var now = new Date()
// //      alert(now);
// // }
// // showDataTime()


// // question 2 :

// function add(name1,name2){
//     alert(name1+name2)
// }
// add("Bisma","Meo")


// // question 3:
// function addTwoNumbers(){
//     var num1=Number (prompt("Enter your first number"));
//     var num2=Number(prompt("Enter your second number"))

//     var sum = num1 + num2
//     return sum;
// }
// var result = addTwoNumbers()
// alert("The sum is " + result);
 


// // question no 4:

// function add(){
//     var num_1 = 2
//     var num_2 = 3
//     var  num3=(num_1 + num_2);
    
// }
// console.log((add));







// // Marksheet:

// function marksheet(sub1, sub2, sub3 , sub4 ,sub5){
//     var totalmarks = 500
//     var obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5 
//     var percentage = obtainedMarks / totalmarks * 100

//     console.log(percentage)
// if(percentage > 70)
//     console.log("A+", "GREAT")
// else if(percentage >60 )
//  console.log("A" , "good work")
// else if
//  (percentage >50)
//  console.log("B" , "good work")

//  else if
//  (percentage >40 )
//  console.log("C" , "looser")
//  else if (percentage >30)
//  console.log("D" , "your are so weak")


// }
// marksheet(34,56,78,34,23)

// //  question no 4 calculator:

// function calculator(num1, num2, operator){
//     if(operator === "+"){
//         return num1 + num2  
//     }
//     else if(operator === "-"){
//         return num1 - num2
//     }
//     else if(operator === "*"){
//         return num1 * num2
//     }
//     else if(operator === "/"){
//         return num1 / num2
//     }
//     else{
//         return "Invalid operator"
//     }
// }

// var result = calculator(10, 5, "+")
// console.log(result)
// var result = calculator(10, 5, "-")
// console.log(result)
// var result = calculator(10, 5, "*")
// console.log(result)
// var result = calculator(10, 5, "/")
// console.log(result)
// var result = calculator(10, 5, "%")
// console.log(result)


// // counting:
// function counting(start, end){
//     for(var i = start; i <= end; i++){
//         console.log(i)
//     }   
// }
// counting(1, 10)
// counting(5, 15)
// counting(20, 30)
// counting(50, 60)
// counting(100, 110)
// counting(200, 210)
// counting(300, 310)
// counting(400, 410)
// counting(500, 510)
// counting(600, 610)
// counting(700, 710)
// counting(800, 810)
// counting(900, 910)
// counting(1000, 1010)










// // question no 5:
// // square no
// function squares(num1){
//     console.log(num1*num1)
// } 
// squares(2)







// //question no 6 factorial:
// function factorial(n){
//     var result = 1      

//     for(var i = 1; i <= n; i++){
//         result = result * i
//     }                               
//     return result
// }

// var fact5 = factorial(5)
// console.log("Factorial of 5 is " + fact5)
// var fact6 = factorial(6)
// console.log("Factorial of 6 is " + fact6)
// var fact7 = factorial(7)
// console.log("Factorial of 7 is " + fact7)
// var fact8 = factorial(8)
// console.log("Factorial of 8 is " + fact8)
// var fact9 = factorial(9)
// console.log("Factorial of 9 is " + fact9)
// var fact10 = factorial(10)
// console.log("Factorial of 10 is " + fact10)
// var fact11 = factorial(11)
// console.log("Factorial of 11 is " + fact11)




// // question no 7
// // counting:
// function counting(start, end){
//     for(var i = start; i <= end; i++){
//         console.log(i)
//     }   
// }
// counting(1, 10)
// counting(5, 15)
// counting(20, 30)
// counting(50, 60)
// counting(100, 110)
// counting(200, 210)
// counting(300, 310)




// //question no 9:
// function rectangle(width,height){
//     var area=width*height
//     console.log(area);
// }
// rectangle(34,23);

// // question no 10:

// function palindrome(str){
//     var reversedStr = str.split("").reverse().join("")
//     if(str === reversedStr){
//         console.log(str + " is a palindrome")
//     } else {
//         console.log(str + " is not a palindrome")
//     }           
// }

// palindrome("madam")
// palindrome("hello")
// palindrome("racecar")
// palindrome("javascript")
// palindrome("level")
// palindrome("world")
// palindrome("deed")
// palindrome("programming")
// palindrome("noon")
// palindrome("python")





// // switch statement

// var percentage =Number(prompt("ENTER YOUR parcentage"));

// switch( true){
//  case 10:(percentage >=80)
//         grade ="A+";
//         break;
//     case 8:(percentage >=70)
//         grade = "A";
//         break;
//     case 7:(percentage >=60)
//     grade = "B";
//     break;
//     case 8:(percentage >=50)
//     grade = "C";
//     break;

//     default:("your are faild")

// }





// // 
// var user = Number(prompt("ENTER A NUMBER"));

// if (user % 2 === 0) {
//     console.log("This number is even");
// } else {
//     console.log("This number is odd");
// }




// // 
// var name = Number(prompt("ENter your number"));
//  if (num > 10){
//     console.log("this number is maximum");
//  }
//     else{

//         console.log("this no is minimun")
//     }



//     // 

// var count = Number(prompt("How many numbers you want to enter?"));
// var numbers = [];

// for (var i = 0; i < count; i++) {
//     var num = Number(prompt("Enter number " + (i + 1)));
//     numbers.push(num);
// }

// console.log(numbers);








// ///////////////////////////////////////////////////

// while loop

// collatz conjecture counter
function collatzSteps(n) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error("n must be a positive integer");
    }
  
    let steps = 0;
  
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      steps++;
    }
  
    return steps;
  }




//   number guess 
 var num = 10;
 var num = Number(prompt("Enter your number"));

 if (num <= 10) {
   alert("You are eligible");
 } else {
   alert("You are not eligible");
 }
 

function numberguessing(){
    var target =Math.floor(Math.random()*100)+1;
    let guess;
    let attempts = 0;

    {
        do {
            guess = Math.floor(Math.random() * 100) + 1;
            attempts++;
            console.log(`Attempt ${attempts}: guessed ${guess}`);
          } while (guess !== target);
        
          console.log(`Correct! The number was ${target}.`);
          console.log(`Total attempts: ${attempts}`);
        }
        
        numberguessing();
    }

  





    // chapter 38 

// question no 1

function power(a, b) {
     if (b === 0) {
         return 1;
     } else {
         return a * power(a, b - 1);
     }
 }

 console.log(power(2, 3)); 

    

    //   question no 2

 function leapyear(year){
  if((year % 4 ===0 && year % 100 !==0) || (year  % 400 ===0)){
     console.log("leap year");

  }else if("Not a leap year");
 }
 console.log(leapyear(year));


// question no 3
function area(a, b, c){
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}

area(2,2,1);

// question no 4:
 function average(sub1,sub2,sub3){
    return (sub1 + sub2 + sub3) /3;
}

function  percentage(sub1,sub2,sub3){
    let total = sub1 + sub2 + sub3;
    let maxmarks =300; 
    return (total/maxmarks) * 300
}

function mainfunction(){
    let sub1 = parseFloat(prompt("Enter marks for subject 1:"));
    let sub2 = parseFloat(prompt("Enter marks for subject 2:"));
    let sub3 = parseFloat(prompt("Enter marks for subject 3:"));    
    let avg = average(sub1,sub2,sub3);
    let per = percentage(sub1,sub2,sub3);
    console.log("Average marks" + avg);
    console.log("percentage"+per + "%");
}   



// chapter 39-40
// switch statment:
var month = "febuary"
switch (month){
    case"january":
    console.log("Hey  January !")
break;


case "febuary":
    console.log("Hey Febuary!");
break;


case "march":
    console.log("Hey March!");
break;


case "april":
    console.log("Hey April!");

break;


case "may":
    console.log("welcome to May!");
break;

default:
    console.log("You are beak from the month")

}

// chapter 41-42
// while loops
var count = 1;

while (count < 5){
    console.log("count " + count );
    count++;
}

// do loops
var count = 1;

do {
    console.log("count" + count);
    count++;

}
while (count < 10);


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // chatper 21:
// // changing case 
 var str = "hello world";
 console.log(str.toUpperCase(0,1))
 console.log(str.toLowerCase())


// let x = 10;


// function test(){
//     let x = 5 
//     console.log(x);
// }
// test();
// console.log(x);


// // 7modify global variable

// var counter = 0


// function increment(){
//     counter+=1;
//     return counter;


// }
// increment();
// console.log(counter);
// increment();
// console.log(counter);



// // 
// function showmessage(){
//     // let message ="Hello";
  

// }
// showmessage()



// // 9 global score
// let score = 100;

// function showScore(){
//    let score = 50;
//    console.log(score);
// }
// showScore();
// console.log(score);


// // 11 swith statement

// let days = 4;
// switch(days){
//    case 1:
//     console.log("Monday");
//     break;

//     case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//             console.log("wednesday");
//             break;
//             case 4:
//                 console.log("Thursday");
//                 break;
//                 case 5:
//                     console.log("friday");
//                     break;
//                     case 6:
//                         console.log("saturday");
//                         break;
//                         case 7:
//                             console.log("sunday");
//                             break;
//                             default:
//                             console.log("Invalid Number! Please enter the number between 1-7")

// }


// // calculator with switch statement

// function calculator(num1,num2,operator){
//     switch(operator){
//         case "+":
//             return num1 + num2

//         case "-":
//            return num1 + num2
//            case "/":
//             if(num2 ===0){
//                 return"error: Divison by Zero";
//             }
//             return num1 + num2

//             case "*":
//                 return num1 + num2
//     default:
//         return"Error!Invalid operaotr"

            
//     }

// }

// console.log(calculator(10,34,"*"));



// // 
// var numchar = "bisma";
// var char = numchar.slice(0,1);
// var changedchar = char.toUpperCase();

// console.log(char);



// // change first letter of string to uppercase
// var str = "hello world";
// var firstchar = str.slice(0,1); 
// var changedchar = firstchar.toUpperCase();
// var restofstring = str.slice(1);
// var changedstring = changedchar + restofstring;
// console.log(changedstring);

// var str1= "javascript is fun";
// var firstchar1 = str1.slice(0,1);
// var changechar1 = firstchar1.toUpperCase();
// var restofstingg1= str1.slice(1);
// var changedstring1 = changechar1 + restofstingg1;
// console.log(changedstring1);


// // string measuring length and extracting characters:
// var str ="helloworld";
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.charAt(5));
// console.log(str.charAt(str.length -1));

// // string find segment:
// var str ="hello world";
// console.log(str.indexOf("o"));
// console.log(str.indexOf("o",5));
// console.log(str.indexOf("x"));

// // string find  a charater from the end:
// var str = "hello world";
// console.log(str.lastIndexOf("o"));
// console.log(str.lastIndexOf("o",5));
// console.log(str.lastIndexOf("x"));


// // Replace a segment of string:
// var str = "hello world";
// var newstr = str.replace("world","javascript");
// console.log(newstr);

// // replace all occurences of a segment:
// var str = "hello world, welcome to the world";
// var newstr = str.replace(/world/g,"javascript");
// console.log(newstr);



// // rounding numbers:
// var num = 3.4;
// console.log(Math.round(num)); // rounds to nearest integer
//  console.log(Math.floor(num)); // rounds down to nearest integer
//  console.log(Math.ceil(num)); // rounds up to nearest integer



// //  generating random numbers:
// var randomNum = Math.random(10); // generates a random number between 0 and 1
// console.log(randomNum);
// var randomNum1 = Math.random() * 10; // generates a random number between 0 and 10
// console.log(randomNum1);
// var randomNum2 = Math.floor(Math.random() * 10) + 1; // generates a random integer between 1 and 10
// console.log(randomNum2);



// // generating random numbers within a specific range:
// function getRandomNumber(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(1,100)); // generates a random integer between 1 and 100




// // generating random numbers with decimal places:
// function getRandomDecimal(red,blue,green){
//     var randomNum = Math.random() * (blue - red) + red;
//     return parseFloat(randomNum.toFixed(green));
// }
// console.log(getRandomDecimal(1,10,2)); // generates a random decimal number between 1 and 10 with 2 decimal places


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
