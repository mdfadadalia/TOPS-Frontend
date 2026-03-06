# 📘 JavaScript Basic Programs (All In One File) Dt.08.02.2026

This file contains 10 basic JavaScript programs.

// ===============================
// 1. Print All Output Methods
// ===============================

console.log("Hello using console.log");

document.write("Hello using document.write <br>");

alert("Hello using alert");

// For innerHTML (Make sure HTML has element with id="demo")
// document.getElementById("demo").innerHTML = "Hello using innerHTML";


// ===============================
// 2. Print Square of a Number
// ===============================

let num = 5;
console.log("Square:", num * num);


// ===============================
// 3. Print Simple Interest
// Formula: (P × R × T) / 100
// ===============================

let P = 10000;
let R = 5;
let T = 2;

let simpleInterest = (P * R * T) / 100;
console.log("Simple Interest:", simpleInterest);


// ===============================
// 4. Print Compound Interest
// Formula: P(1 + R/100)^T - P
// ===============================

let principal = 10000;
let rate = 5;
let time = 2;

let compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
console.log("Compound Interest:", compoundInterest);


// ===============================
// 5. Print Area of Circle
// Formula: πr²
// ===============================

let radius = 7;
let areaCircle = Math.PI * radius * radius;
console.log("Area of Circle:", areaCircle);


// ===============================
// 6. Print Area of Rectangle
// Formula: Length × Width
// ===============================

let length = 10;
let width = 5;

let areaRectangle = length * width;
console.log("Area of Rectangle:", areaRectangle);


// ===============================
// 7. Print Area of Triangle
// Formula: (Base × Height) / 2
// ===============================

let base = 10;
let height = 6;

let areaTriangle = (base * height) / 2;
console.log("Area of Triangle:", areaTriangle);


// ===============================
// 8. Print Random Value
// ===============================

let randomValue = Math.random();
console.log("Random Value:", randomValue);


// ===============================
// 9. Print Square Root
// ===============================

let number = 25;
let squareRoot = Math.sqrt(number);
console.log("Square Root:", squareRoot);


// ===============================
// 10. Print Adult or Child (Without If-Else)
// Using Ternary Operator
// ===============================

let age = 18;
let result = age >= 18 ? "Adult" : "Child";
console.log("Person is:", result);
