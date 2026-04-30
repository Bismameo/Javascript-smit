
// chapter 38 
// functions

// question no 1

// function power(a, b) {
//     if (b === 0) {
//         return 1;
//     } else {
//         return a * power(a, b - 1);
//     }
// }

// console.log(power(2, 3)); 

    

    //   question no 2

// function leapyear(year){
//  if((year % 4 ===0 && year % 100 !==0) || (year  % 400 ===0)){
//     console.log("leap year");

//  }else if("Not a leap year");
// }
// console.log(leapyear(year));


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
mainfunction(percentage)



// question no 5:

function myIndexOf(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            return i; 
        }
    }
    return -1; 
}


console.log(myIndexOf("hello", "e")); 
console.log(myIndexOf("world", "z")); 


// question 6:

function remove(sentence){
    let vowels = "aeiouAEIOU"
    let result = "";
    for ( let i = 0; sentence.length; i++){
    if (!vowels.includes(sentence[i])){
        result += sentence[i];
    }
}
return result;

}

let text = prompt("Enter a sentence (max 25 characters):");
console.log("Without vowels:", Vowels(text));



// question 7:


function iscount(Ch){
    switch(Ch.toLowercase()){
    case 'a':
        case 'e':
            case 'i':
                case 'o':
                    case 'u':
    return true;
    default:
        return false;


}
}

function countvowels(){
    let count = 0
    for(i = 0; i < text.length -1; i++){
        if(iscount(text[i]) && iscount(text[i + 1])){
            count++;

        }
    }
    return count;
}
 let sentence ="Pleases read this application and give me gratuity"
let result =countvowels(sentence)


console.log("number of vowels:",result);


// question no 8

function Distance(x1,y1,x2,y2){
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
    
}
let x1 = parseFloat(prompt("Enter x coordinate of point 1:"));
let y1 = parseFloat(prompt("Enter y coordinate of point 1:"));
let x2 = parseFloat(prompt("Enter x coordinate of point 2:"));
let y2 = parseFloat(prompt("Enter y coordinate of point 2:"));

console.log("Distance between the points:", Distance(x1, y1, x2, y2));

    // question no 9:

  function overtimepay(hours){    
    if(hours > 40){
        let overtimeHours = hours - 40;
        let overtimePay = overtimeHours * 12;
        return overtimePay;
    }
    return 0;
}

let hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
let pay = overtimepay(hoursWorked);
console.log("Overtime pay:", pay);

// question no 10:

function currencyDenomination(amount){
    let denominations = [10, 50, 100];
    let result = {};    
    for(let i = 0; i < denominations.length; i++){
        let count = Math.floor(amount / denominations[i]);
        if(count > 0){
            result[denominations[i]] = count;
            amount -= count * denominations[i];
        }
    }
    return result;
}






