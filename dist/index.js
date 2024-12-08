"use strict";
// function return types
const func = (n, m) => {
    return String(n * m);
};
let a;
a = 'sss';
a = 5;
const f = (n, m) => {
    return String(n + m);
};
// arrays
let arr = [];
// or
let arr1 = [];
// arr = ['1'] ---> error
arr = [1, 2];
arr = Array(5);
let arr3 = [1, 2]; // tuple array
const box = {
    isBox: true,
    height: 5,
    width: 10,
};
const box1 = {
    height: 5,
    width: 10,
};
const box2 = {
    isBox: true,
    height: 5,
    width: 10,
};
const box3 = {
    height: 5,
    width: 10,
    isCircle: true,
    fun: (n, m) => {
        return n - m;
    }
};
box3.fun(10, 5);
// rest operator
const rest = (...args) => {
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
};
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const getData = (user) => {
    console.log(user);
};
const user = {
    name: 'John',
    age: 30,
    mobile: 123
};
getData(user);
// Never Type
// The never type in TypeScript represents a value that never occurs. It is typically used in functions that:
// Never return (e.g., throw an error or enter an infinite loop).
// Indicate unreachable code.
const error = (message) => {
    throw new Error(message);
}; // type never
// Error: Function explicitly creates and returns an Error object.
const error1 = (message) => {
    return new Error(message);
}; // type Error
class Product {
    constructor(name, price, stock, id, offer) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = id;
        this.offer = offer;
        this.getId = () => { return this.id; };
    }
}
const Product1 = new Product('iphone', 1000, 10, 1, true);
console.log(Product1);
console.log(Product1.getId());
// Type Assertion
const btn = document.getElementById('btn');
// or
const btn1 = document.getElementById('btn');
// or
const btn2 = document.getElementById('btn');
// by default btn2 is either an html element or null and '!' for saying it's not null so it's an HTMLElemet for sure 
btn2.onclick;
const img = document.getElementById('img');
// since not null so its html element
// img.src  ----> error: Property 'src' does not exist on type 'HTMLElement'
const img1 = document.getElementById('img');
img1.src;
const myObj = {
    name: 'John',
    age: 30,
    mobile: 123
};
const getName = (key) => {
    if (typeof myObj[key] === undefined || null) {
        return 0;
    }
    return myObj[key];
};
console.log(getName('name'));
// type utility
// in readme
// generics
// in readme
