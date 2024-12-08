
// function return types
const func = (n:number, m:number):string => {
    return String(n*m);
}


// aliases
type tp = string | number;
let a : tp;
a = 'sss';
a = 5;



// functions + aliases
type t = (n: number, m: number) => string;
const f:t = (n,m) => {
    return String(n+m);
}


// arrays
let arr: number[] = [];
// or
let arr1: Array<string> = [];
// arr = ['1'] ---> error
arr = [1,2];
arr = Array(5);
let arr3: [number, number] = [1,2]; // tuple array



// objects
type Obj = {
    height: number,
    width: number
    isBox?: boolean,
} // if ? then that property is optional

const box: Obj = {
    isBox: true,
    height: 5,
    width: 10,
}

const box1: Obj = {
    height: 5,
    width: 10,
}



// interface

interface Obj1 {
    height: number,
    width: number
    isBox?: boolean,
} // if ? then that property is optional

const box2: Obj1 = {
    isBox: true,
    height: 5,
    width: 10,
}

type FuncType = (n: number, m: number) => number;

interface NewObj extends Obj {
    isCircle: boolean,
    fun: FuncType
}

const box3: NewObj = {
    height: 5,
    width: 10,
    isCircle: true,
    fun: (n,m) => {
        return n-m ;
    }
}

box3.fun(10, 5);



// rest operator
const rest = (...args: number[]) => {
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
}
rest(1,2,3,4,5,6,7,8,9,10);



// functions with objects
interface userInterface {
    name: string,
    age: number,
    mobile?: number
}

type GetDataType = (user: userInterface) => void



const getData: GetDataType = (user) => {
    console.log(user);
}

const user: userInterface = {
    name: 'John',
    age: 30,
    mobile: 123
}

getData(user);




// Never Type
// The never type in TypeScript represents a value that never occurs. It is typically used in functions that:

// Never return (e.g., throw an error or enter an infinite loop).
// Indicate unreachable code.

const error = (message: string): never => {
    throw new Error(message);
}  // type never


// Error: Function explicitly creates and returns an Error object.
const error1 = (message: string): Error => {
    return new Error(message);
} // type Error




// classes

interface ProductType {
    name: string;
    price: number;
    stock: number;
    id: number;
    offer?: boolean;
}

class Product implements ProductType {
    constructor(
        public name: string, 
        public price: number, 
        public stock: number, 
        public id: number, 
        public offer?: boolean
    ) {}
    getId = () => {return this.id};
}


const Product1 = new Product('iphone', 1000, 10, 1, true);
console.log(Product1);
console.log(Product1.getId());



// Type Assertion

const btn = document.getElementById('btn') as HTMLElement;
// or
const btn1 = <HTMLElement>document.getElementById('btn');
// or
const btn2 = document.getElementById('btn')!; 
// by default btn2 is either an html element or null and '!' for saying it's not null so it's an HTMLElemet for sure 


btn2.onclick

const img = document.getElementById('img')!; 
// since not null so its html element
// img.src  ----> error: Property 'src' does not exist on type 'HTMLElement'

const img1 = document.getElementById('img') as HTMLImageElement;
img1.src 




// dynamic key: values in interface/objects

interface Person {
    [key: string]: string | number | boolean;
}

const myObj: Person = {
    name: 'John',
    age: 30,
    mobile: 123
}

type GetNameType  = (key: string) => string | number | boolean

const getName: GetNameType = (key) => {
    if(typeof myObj[key] === undefined || null) {
        return 0;
    }
    return myObj[key];
}

console.log(getName('name'));






// type utility

// in readme


// generics

// in readme