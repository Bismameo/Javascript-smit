function orderbook(order){
    console.log("Your order is confirm");
    order("recived soon")

}
function ordermaking(get){
    console.log("order ready will be soon");
    console.log(get)

}
// function orderontheway(way){
//     console.log("your order is on the way")
//     console.log(way)
// }



orderbook(ordermaking)


// /////////////////////////

function orderplace(ordering){
    console.log("your order is ready into the restaurant")
    ordering("deliverd soon")

}

function orderready(get){
    console.log("your order is ready")
    console.log(get)
}
function orderdeliverd(deliverd){
    console.log("your order is deliverd")
    console.log(deliverd)
}
orderplace(orderready)

// orderplace(orderdeliverd)

// ////////////////////////

// Student Result System 🎓
function studentresult(result){
    console.log("Check marksheet")
    result("you are pass")
}

function checkresult(get){
    console.log("please wait for result")
    console.log(get)
}
studentresult(checkresult)

// ////////////////////////
// Ride Booking App 🚗
function bookRide(booking){
    console.log("Your ride is being booked...");
    booking("Driver is on the way");
}
bookRide(function(message){
    console.log(message);
});

// ////////////////////////
// Online Food Delivery 🍔
function placeOrder(order){
    console.log("Placing your order...");
    order("Your order is placed successfully.");
}   
placeOrder(function(status){
    console.log("Your food is being prepared. ")
    console.log(status);
});

// ////////////////////////
// E-commerce Checkout 🛒
// function checkout(cart, callback){
//     console.log("Processing your checkout...");
//     callback("Your order has been placed successfully");
// }
// checkout([], function(message){
//     console.log(message);
// }


