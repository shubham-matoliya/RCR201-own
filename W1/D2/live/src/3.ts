// Interfaces (99% similar to type)
// advantage of using interface over type is a same interface can be defined multiple times by adding more values
// try to avoid using any, Object, interface

type Person = {
  id: number;
  name: string;
};
interface PersonX {
  id: number;
  name: string;
}
interface PersonX {
  age: number;
}
interface PersonX {
  id: number;
  name: string;
}
//finally existing values will get overwrite and final interface will have all types added in it till last
