/*
// basics:
function greet(person: any) {
	console.log("Hello, " +person.name);
}
const person = {
	name: "Adwait", // now what if we change the property to 'firstName'?
	age: 25
};
greet(person);
*/


/*
// basics create an interface instead of editing at 2 places:
function greet(person: {name: string}) {
	console.log("Hello, " +person.name);
}
function changeName(person: {name: string}) {
	person.name = "AD";
}
const person = {
	name: "Adwait",
	age: 25
};
greet(person);			// try with Object literal {name:"Adwait", age: 25} switch to interfaces
changeName(person);
greet(person);
*/





interface INamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: INamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: INamedPerson) {
    person.firstName = "AD";
}

const person: INamedPerson = {
    firstName: "Adwait",
    //hobbies: ["Cooking", "Riding"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

changeName(person);
greet(person);
person.greet("Deshpande");

class Person implements INamedPerson {
    firstName: string;
    lastName: string;

    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = "Nikhil";
myPerson.lastName = "Deshpande";
greet(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));


// Interface Inheritance

interface AgedPerson extends INamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);