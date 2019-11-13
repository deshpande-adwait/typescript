/**
 * Section 2
type BankAccount = {money: number, deposit:(val: number) => void};
let abcBankAccount: BankAccount = {
	money: 2000,
	deposit(value: number) {
		this.money += value;
	}
};

type Self = {name: string, bankAccount: BankAccount, hobbies: string[]};
let myself: Self = {
	name: "Adwait",
	bankAccount: abcBankAccount,
	hobbies: ["Riding", "Swimming"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

 **/














/**
 * Section 4
 *
// Exercise 1:
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2:
const greet = (name: string = "Max") => console.log("Hello, " + name);
greet();
greet("Adwait");

// Exercise 3:
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
let testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
let scientist = {firstName: "Will", experience: 12};
const {firstName: fName, experience: exp} = scientist;
console.log(fName, exp);
*/










/**
 * Section 5
 **/
// Exercise 1:
class Car {
	name: string;
	acceleration: number = 0;
	
	constructor(name: string) {
		this.name = name;
	}
	
	honk = () => console.log("Toooooooooot!");
	
	accelerate = (speed: number) => this.acceleration += speed;
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class BaseObject {
    width: number = 0;
    length: number = 0;
};
class Rectangle extends BaseObject {

	calcSize() {
		return this.width * this.length;
	};
};
let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string = "";
	
    get firstName() {
        return this._firstName;
    };
	
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    };
    //enumerable: boolean = true;
    //configurable: boolean = true;
};
let person = new Person();
console.log(person.firstName);
person.firstName = "AD";
console.log(person.firstName);
person.firstName = "Adwait";
console.log(person.firstName);