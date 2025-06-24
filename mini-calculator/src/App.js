import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🧮 Mini Calculator</h2>

      <input
        type="number"
        placeholder="Enter your first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter your second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAddition}>Add ➕</button>
      <button onClick={handleSubtraction}>Subtract ➖</button>
      <button onClick={handleMultiplication}>Multiply ✖️</button>
      <button onClick={handleDivision}>Divide ➗</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
