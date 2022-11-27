import "./App.css";
import { Grid, Stack, VStack, Input, Center } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const calcButtons = [
    ["(", "#d9dce0"],
    [")", "#d9dce0"],
    ["%", "#d9dce0"],
    ["AC", "#d9dce0"],
    [7, "#f0f3f4"],
    [8, "#f0f3f4"],
    [9, "#f0f3f4"],
    ["/", "#d9dce0"],
    [4, "#f0f3f4"],
    [5, "#f0f3f4"],
    [6, "#f0f3f4"],
    ["*", "#d9dce0"],
    [1, "#f0f3f4"],
    [2, "#f0f3f4"],
    [3, "#f0f3f4"],
    ["-", "#d9dce0"],
    [0, "#f0f3f4"],
    [".", "#d9dce0"],
    ["=", "#4284f3", "white"],
    ["+", "#d9dce0"],
  ];
  const [value, setValue] = useState("0");
  const calculate = (el) => {
    if (el[0] === "AC") setValue("0");
    else if (el[0] === "=") {
      let x = eval(value);
      console.log(x);
      setValue(x);
    } else {
      setValue((value) => value + el[0]);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <VStack
        border={" 1px solid black"}
        margin="auto"
        borderRadius={10}
        padding={"20px"}
        width="35vw"
        gap={15}
      >
        <Stack spacing={3}>
          <Input
            placeholder="medium size"
            size="md"
            width={"33vw"}
            fontSize="25px"
            padding={10}
            value={value}
          />
        </Stack>
        <Grid
          templateColumns="repeat(4, 1fr)"
          backgroundColor={"white"}
          gap={15}
          width="35vw"
          marginTop={20}
        >
          {calcButtons.map((el) => (
            <Center
              bg={el[1]}
              fontSize="25px"
              padding={"10px"}
              borderRadius={8}
              cursor="pointer"
              style={el[0] == "=" ? { color: "white" } : { color: "black" }}
              onClick={() => calculate(el)}
            >
              {el[0]}
            </Center>
          ))}
        </Grid>
      </VStack>
    </div>
  );
}

export default App;
