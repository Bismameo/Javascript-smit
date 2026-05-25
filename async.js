async function getData(){
    try {
    const response = await fetch("https://dummyjson.com/carts");
    const data = await response .json();


    const DataMap = newMap();

    user.foreach(user => {
       
        userMap.set(user.id,user)
    });



     console.log(DataMap.get(1))
   return DataMap;
}  catch(error) {
    console.error('error fetching data:',error);
}
}
getData();


     