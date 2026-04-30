// var plan1 = {
//      name: "Basic",
//      price: 3.99,
//      space: 100,
//      transfer: 1000,
//      pages: 10,
//      discountMonths: [6, 7]
//      };
     


function calcAnnual() {
     var bestPrice = plan1.price;
     var currDate = new Date();
     var thisMo = currDate.getMonth();
     for (var i = 0; i < plan1.discountMonths.length; i++) {
     if (plan1.discountMonths[i] === thisMo) {
     bestPrice = plan1.price * .8;
     break;
     }
     }
     return bestPrice * 12;
     }
    

    