// for of and for in
let arr = [1, 2, 3, 4, 5];

// for of loop
for (let i of arr) {
    console.log(i);
}
// for in loop
for (let j in arr) {
    console.log(j);
}


// callback functions
function orderplace(callback){
    console.log("your order is placed")
    callback("your order is being prepared")
}

orderplace(function(message){
    console.log(message)
})


//
function order(call){
    console.log("your order is ready")
    call("your order is being deliverd")
}
function orderdeliverd(deliverd){
    console.log(deliverd)
}


order(orderdeliverd)


// ////////////// call and apply method
// call method
let data = {
    name: "John",
    age: 30,
    city: "New York",
    method: function() {
        console.log('${this.name} is ${this.age} years old and lives in ${this.city}.');

    }
}


let data2 = {
    name: "Alice",
    age: 25,
    city: "california",
}

data.method.call(data2)

// apply method
let data3 = {
    name: "Bob",
    age: 35,
    city: "Chicago",
}
data.method.apply(data2, ["not working"])
data.method.apply(data2, "not working")




