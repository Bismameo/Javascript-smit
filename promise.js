let check = new Promise((resolve, reject) => {
    let checkValue = false
    if (checkValue) {
        resolve ("yes fullfilled")
    }
    else {
        reject("rejected")
    }
})

check 
 .then((message) => console.log(message))
 .catch((error) => console.error(error));




//  ///////////////////////////////////////////////////////////////////////////////

 let password = new Promise ((login, rejected) => {
    let value = true 
    if (value) 
        {
        login ("login successful")
    }   
 else {
        rejected ("login failed")
        
    }
 })
.then((result) => console.log(result))
.catch((error) => console.error(error));    


 