"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.acceleration = 0;
        this.honk = function () { return console.log("Toooooooooot!"); };
        this.accelerate = function (speed) { return _this.acceleration += speed; };
        this.name = name;
    }
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    ;
    return Rectangle;
}(BaseObject));
;
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
        //enumerable: boolean = true;
        //configurable: boolean = true;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Person;
}());
;
var person = new Person();
console.log(person.firstName);
person.firstName = "AD";
console.log(person.firstName);
person.firstName = "Adwait";
console.log(person.firstName);
