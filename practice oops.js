// ATM  card
class ATMCard {
    #cardNumber;
    #cardHolderName;
    #expiryDate;

    constructor(cardNumber, cardHolderName, expiryDate) {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.expiryDate = expiryDate;
    }
    displayCardInfo() {
        console.log("Card Number:", this.cardNumber);
        console.log("Card Holder Name:", this.cardHolderName);
        console.log("Expiry Date:", this.expiryDate);
    }
}
const myCard = new ATMCard("1234 5678 9012 3456", "John Doe", "12/25");
myCard.displayCardInfo();

// Encapsulation
class Person {
    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        this.#age = age;
        this.#email = email;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getEmail() {
        return this.#email;
    }
}

const person1 = new Person("Alice", 30, "alice@example.com");
console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.getEmail());

// inheritance
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log("Make:", this.make);
        console.log("Model:", this.model);
    }
}

class Car extends Vehicle {
    constructor(make, model, numDoors) {
        super(make, model);
        this.numDoors = numDoors;
    }
    displayCarInfo() {
        this.displayInfo();
        console.log("Number of Doors:", this.numDoors);
    }
}
const myCar = new Car("Toyota", "Camry", 4);
myCar.displayCarInfo();

// abstraction
class Shape {
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log("Area of Circle:", circle.area());

// polymorphism
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Output: Dog barks
cat.makeSound(); // Output: Cat meows

