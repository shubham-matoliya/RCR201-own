import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const handleClick = () => {};
  return (
    <div className="App">
      <Button label="Hello" handleClick={handleClick} />
    </div>
  );
}

export default App;
