var detail=["bisma",24,"true", "orange"]
detail[2]=false
detail.pop()
detail.push("black","math")
detail.shift()
detail.unshift("ammar")
console.log(detail)
detail.splice(4,3,"cat")
console.log(detail)
var copy =detail.slice(0,2)
console.log(copy)
