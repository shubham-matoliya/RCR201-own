const getAtIndex = (arr: number[], index: number): number => {
  return arr[index];
};

let arr: number[] = [1, 2, 3, 4, 5];
getAtIndex(arr, 3);
getAtIndex(arr, 1);
getAtIndex(arr, "bye");

const getY = (a: string): void => {
  console.log("hello");
};
