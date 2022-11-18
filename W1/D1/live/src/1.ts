console.log("hello");
// primitive datatype : string, number, boolean, undefined, null
// non-primitive datatype: Array, Object
//write types
let a: string = "Hello";
let b: number = 123;
b = 12.45;
// b = "Hello"  => error
// in js fule let changes to var as typescript convert ES6 => ES5
let c: boolean = true;

// union operator
let age: string | number = "23";
age = 25;
age = "twenty";

// string literal
let variable: "Shubham" = "Shubham";
// in string literal if we provide any other value then "Shubham" to it, it will throw error
// we can also define datatype as union of multiple datatype like a gender is a string but if we define it like let gender: string = "male" then it can also be written as gender = "hello" which is wrong hence we write it in the format below

// string literal and union operator independently doesn't make any sense but they make sense if they are used together
// string literal with union operator
let gender: "male" | "female" | "others" = "male";
// this means gender can be "male" or "female" none other than that

// any: bad developer

//Array
// we can write array of numbers and strings in two ways
let arr1: Array<number> = [1, 2, 3, 4]; //using constructors
// this also prevent us to push data of different data type for eg arr1.push("89") will throw error
let arr2: number[] = [2, 3, 4, 5];

let arr3: Array<string> = ["A", "B", "C", "D", "E"]; //using constructors
let arr4: readonly string[] = ["A", "B", "C", "D", "E"];

// for array of more than one type
let arr5: Array<string | number> = [1, 34, 23, 42, "A", "B", "hello"];
// if i want that nobody can push or pop data to my array then we write readonly before it note that it only write for array not for constructor functions notation

// Object
let user: { id: number; name: string } = { id: 12, name: "Shubham" };
// user = {lastname: "Matoliya"}  => error

// we can also define custom type like this (use capital letter in 1st letter of cutom types) in this ? suggest age is an optional key
type User = { id: number; name: string; age?: number };
let arr_users: User[] = [
  { id: 12, name: "Shubham 1" },
  { id: 13, name: "Shubham 12" },
  { id: 14, name: "Shubham 14" },
  { id: 15, name: "Shubham 15" },
  { id: 16, name: "Shubham 16" },
];

let students: {
  rollNumber: number;
  name: string;
  class: number;
  batch: "RCT101" | "RCT201";
  age?: number; //means age can be there or not
}[] = [
  { rollNumber: 1, name: "Anuj", batch: "RCT101", class: 1 },
  { rollNumber: 2, name: "Shivam", batch: "RCT201", class: 1 },
  { rollNumber: 3, name: "Aditya", batch: "RCT101", class: 1 },
  { rollNumber: 4, name: "Anuj", batch: "RCT101", class: 1 },
  // { rollNumber: 4, name: "Mahesh", batch: "RCT301", class: 1 },  => error
  // {
  //   rollNumber: 1,
  //   fullName: "Anuj sharma",
  //   batch: "RCT101",
  //   class: 1,
  //   age: 26,
  // },  => error
  // {
  //   rollNumber: 1,
  //   fullName: "dhiraj gupta",
  //   batch: "RCT101",
  //   class: 1,
  //   age: 24,
  // },   => error
];
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type Cart = {
  id: number;
  total: number;
  products: Product[];
};
let cartItems: Cart[] = [
  {
    id: 1,
    products: [
      { id: 1, name: "Shirt", price: 230, quantity: 2 },
      { id: 2, name: "Shoes", price: 830, quantity: 3 },
    ],
    total: 1060,
  },
  {
    id: 1,
    products: [
      { id: 1, name: "Shirt", price: 500, quantity: 1 },
      { id: 2, name: "Jeans", price: 800, quantity: 2 },
    ],
    total: 2100,
  },
  {
    id: 3,
    products: [{ id: 1, name: "Jacket", price: 1000, quantity: 2 }],
    total: 1000,
  },
];
