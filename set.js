// var array = [1,2,3,4,5,6,3,4,5,6,7,8,9,10];

// function remove(arr) {
//     var unique_Array = [];
    
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 break;
//             }       
//         }
//         if (j === arr.length) {
//             unique_Array.push(arr[i]);
//         }   
//     }
//     return unique_Array;
// }
// var result = remove(array);
// console.log(result);


// set:
/*what is set?
A set is a collection of unique values. It can be used to store any type of data, including primitive values and object references. Sets are useful for storing unique values and for performing operations such as union, intersection, and difference.*/


const myset = new Set ([1,2,3,4,5,4,6,7,4]);
  console.log(myset.add(5))       //adding duplicate value will not be added to the set
  console.log(myset.has(3))       //check if the value is present in the set or 
myset.delete(2)                    // delete the value from the set
console.log(myset.has(2))          // check if the value is present in the set or not
myset.clear()                  // clear the set
console.log(myset.size)        // check the size of the set
console.log(myset)              // print the set 




// my.map
    /*what is map?
A map is a collection of key-value pairs. It can be used to store any type of data, including primitive values and object references. Maps are useful for storing data that needs to be accessed by a specific key, and for performing operations such as adding, deleting, and retrieving values based on their keys.*/
const mymap = new Map([
    ["name","john"],
    ["age",32]

])
mymap.set("city", "karachi")  // add new key value pair to the map
console.log(mymap.get("name"))  // get the value of the key
 console.log(mymap.has("age")) // check if the key is present in the map or not
 console.log(mymap.delete("age")) // delete the key value pair from the map
 mymap.clear()  // clear the map
 console.log(mymap.size) // check the size of the map
 console.log(mymap) // print the map


