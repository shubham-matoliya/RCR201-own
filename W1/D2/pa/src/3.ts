type Person = { id: number; fname: string; lname: string };
type Student = { rollno: number; fullName: string; age: number };

let person: Person = { id: 1, fname: "Sam", lname: "jon" };
let student: Student = { rollno: 21, fullName: "jon cero", age: 23 };

const objV = <O>(obj: O, key: keyof O): O => {
  let b: typeof obj = {
    ...obj,
    id: 1,
    fname: "Samhi",
    lname: "jony",
  };
  return b;
};

objV<Person>(person, "lname");
objV<Student>(student, "fullName");
