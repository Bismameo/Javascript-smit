// var name = "Bisma";
// var age = 22;
// var gender = "female"; 
// console.log(`My name is ${name} and I am ${age} years old.`);






// // var studentone ={
// //     name :"Bisma",
// //     age: 22,
// //     gender:"female",
// //     hobbies:["reading","cooking","travelling"],
// //     method: function(){
// //         console.log("she can do anything")
// //     }
    
// // }


// // studentone.age = 23;
// // studentone.name = "Khan";
// // delete studentone.age;
// // studentone.method();
// // console.log(studentone.name);


// // var studenttwo ={
// //     name :"Ali",
// //     age: 24,
// //     gender  :"male",
// //     hobbies:["sports","music","gaming"],
// //     method: function(){
// //         console.log("he is a good student")
// //     }
// // }

// // studenttwo.age = 25;
// // studenttwo.name = "Ahmed";
// // delete studenttwo.age;
// // studenttwo.method();
// // console.log(studenttwo.name);

// // ////////////////////////////////////////////////////////////
// var students = [{
//     name: "alia",
//     age: 23,
//     gender: "female",
//      hobbies: ["reading", "cooking", "travelling"],
//     method: function() {
//         console.log("she can do anything");
//     }
// }, {
//     name: "ali",
//     age: 25,
//     gender: "male",
//      hobbies: ["sports","music", "gaming"],
//     method: function() {
//         console.log("he is a good student");
//     }
// }];
// console.log(students[0].name);
// console.log(students[1].age); 





// 
// var studentone ={
//     name :"Bisma",
//     age: 22,
//     gender:"female",
//     hobbies:["reading","cooking","travelling"],
//     method: function(){
//         console.log("she can do anything")
//     }
    
// }


// /////////////////
// var plan ={
//     name: "Premium",
//     price: "9.99"
//     quantity: 1,

    
// }

// var paln2 ={
//     name: "Basic",
//     price: "4.99",
//     quantity: 1,
// }

// function  plan3(name, price, quantity){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.method = function(){
//         return this.price * 2;
//     }
// }
// var plan = new plan3("Premium", "9.99", 1);
// var plan2 = new plan3("Basic", "4.99", 1);
// console.log(plan.method());
// console.log(plan2.method());

function datab (name,age,classes){
    this.name = name
    this.age = age,
    this.classes = classes,
    this.method = function(){        console.log(this.name + " is " + this.age + " years old and is in class " + this.classes);
    }

}


// let user = (a,b) => {console.log(a+b)};
// user(5,10);


// let userDate  = {
//     name :"Bisma",
//     age: 22,
//     method : function()  { 
//             //    console.log("she can do anything")
//             let user = () => {
//                 console.log(this.name + " is " + this.age + " years old.");
//     }
//     user();

// }
// }
// userDate.method();


let userDate  = {
    name :"Bisma",
    age: 22,
    method : () => { 
            //    console.log("she can do anything")
            let user = () => {
                console.log(this.name, this.age );
    }
    user()
 
}
}
userDate.method();



function  user (name="John",age=25){
    console.log(name,age)
}
user();



// object 
// array
// for loop
// if else