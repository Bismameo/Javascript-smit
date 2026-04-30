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

const myset = new set([1,2,3,4,5,4,6,7,4]);
console.log(myset.add(5))
myset.delete(2)
console.log(myset.has(2))
myset.clear()
console.log(myset.size)
console.log(myset)


// my.map
const mymap = new Map([
    ["name","john"],
    ["age",32]

])
mymap.set("city", "karachi")
console.log(mymap.get("name"))
console.log(mymap.has("age"))
console.log(mymap.delete("age"))
mymap.clear()
console.log(mymap.size)
console.log(myMap)