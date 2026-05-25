class human{
    constructor(name,age){
        this.name = name 
        this.age = age
    }

girl(){
    console.log("this girl in human class")
}
}
class boy extends human {

data(){
    console.log("this data is in boy class ")
}
}

let result = new boy("admin","24");
console.log(result)
result.girl
()
result.data()


// ///////////////////////////////////////////////
// inheritence
class animal{
    constructor(name,age){
        this.name = name 
        this.age = age
    }
cat(){
    console.log("this cat in animal class")
}
}
class dog extends animal {

data(){
    console.log("this data is in dog class ")
}
}

let result1 = new dog("dog","5");
console.log(result1)
result1.cat()
result1.data()


// ///////////////////////////////////////////////
// oops stands for object oriented programming system
// it is a programming paradigm that uses objects and classes to organize code and data
// it allows us to create reusable code and modularize our programs
// class is a blueprint for creating objects
// object is an instance of a class
// inheritance is a mechanism where one class can inherit properties and methods from another class
// encapsulation is the process of hiding the internal details of an object and only exposing a public interface
// polymorphism is the ability of an object to take on many forms, it allows us to use a single interface to represent different types of objects.
// abstraction is the process of hiding the complexity of a system and only exposing the necessary details to the user.
// oops is a powerful programming paradigm that allows us to create complex and scalable applications. It promotes code reusability, modularity, and maintainability. By using classes and objects, we can model real-world entities and their interactions in our code.

// encapsulation

class BankAccount {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log("New Balance:", this.balance);
    }
  }
  
  const user1 = new BankAccount("Ali", 5000);
  
  user1.deposit(2000);



//   polyorphism
class Animal {
    sound() {
      console.log("Animal makes sound");
    }
  }
  
  class Dog extends Animal {
    sound() {
      console.log("Dog barks");
    }
  }
  
  class Cat extends Animal {
    sound() {
      console.log("Cat meows");
    }
  }
  
  const d = new Dog();
  const c = new Cat();
  
  d.sound();
  c.sound();

//   Abstraction
class Car {
    start() {
      this.#engineStart();
      console.log("Car Started");
    }
  
    #engineStart() {
      console.log("Engine Started");
    }
  }
  
  const car1= new Car();
  
  car1.start();

  