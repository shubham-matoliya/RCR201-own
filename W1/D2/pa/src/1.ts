//type Direction = "East" | "West" | "North" | "South"

// String enum
enum Direction {
  East = "east",
  West = "west",
  North = "north",
  South = "south",
}
// when we make changes here in Direction enum it will reflect to all files
let a: Direction = Direction.East;
