// Loops:

// question no 1:forword counting:
for (let a=1; a<=10; a++){
    console.log(a);
}


// question no 2: backward counting;
for(let b=10; b>=1; b--){
    console.log(b);
}

// question no 3: even numbers;
for(let c=0; c<=20; c+=2){
    console.log(c);
}


// question no 4: odd numbers;
for(let d=1; d<=20; d+=2){
    console.log(d);
}


// Multiples ;
// question no 5: b)  
// 2 table

for(let e=2; e<=20; e+=2){
    let multiple = ("2 x " + (e/2) + " = " + e);
    console.log(multiple);
}

// question no 5: a)// 5 table
for(let f=5; f<=50; f+=5){
    let multiple5 = ("5 x " + (f/5) + " = " + f);
    console.log(multiple5);
}

// question no 6; (C)
// Nested loops:
for(let g=0; g<=5; g++){
    let line ="";
    for(let h=1; h<=5; h++){
    line += "*";
    
    console.log(line);
    }
}


