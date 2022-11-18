// ENUM
// if we have multiple gender options then it's not good to write like this
const gender:
  | "male"
  | "female"
  | "trans"
  | "bi-gender"
  | "others"
  | "not-to-disclose" = "male";

gender: "female";

// instead of writing like about we write it using enum so that in future if any string manupulation has to be done we done it at only one place and it will get reflect in all code wherever we have used in our code

enum Gender {
  male = "male",
  female = "female",
  others = "other genders that dont want to specify",
}

const gender1: Gender = Gender.others;
console.log(gender1);
// for log run node 1.js

// Tuple --> to know exactly how many elements are in array

let arr: [number, string] = [23, "Shubh"];
// arr[0] = "34" //error
// arr[0] = 34 //correct

// its main application can be found in 2d array in which we have to set array inside array and both elements of that array should be string

let arr_2d: [number, number][] = [
  [2, 3], //okay
  // [3, 4, 5], //error
  [4, 6], //okay
];

// generics

const useState = (arg) => {
  let v = arg;

  const setV = (newValue) => {
    v = newValue;
  };

  return [v, setV];
};

// write generics for above function
const [count, setCount] = useState(0);
//type of argument passed is number and value returning is a tuple
// ans
// const useState = <A>(arg: A): [A, (a: A) => void] => {
//   let v: typeof arg = arg;
//   // let v: A = arg;  // it is also correct
//   const setV = (newValue: A): void => {
//     v = newValue;
//   };

//   return [v, setV];
// };
