import React, { useEffect, useState } from "react";

export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const a = parseFloat(number1);
    const b = parseFloat(number2);

    let res ;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = 0;
    }

    setResult(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number1 === "" || number2 === "") {
      setError("Please fill in both numbers");
      return;
    }
    setError("");
    calculate();
  };

  useEffect(() => {
    if (result !== null) {
      console.log("Result:", result);
    }
  }, [result]);

  return (
    <div className="max-w-md mx-auto m-10 p-5 bg-purple-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} className="w-full border border-purple-600 p-2 rounded" placeholder="Enter first number"/>
        <select value={operation} 
        onChange={(e) => setOperation(e.target.value)} className=" w-1/3 border border-purple-600  p-2 rounded flex justify-center items-center flex-col">
          <option value="+">Add (+)</option>
          <option value="-">Subtract (-)</option>
          <option value="*">Multiply (×)</option>
          <option value="/">Divide (÷)</option>
        </select>
        <input
          type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} className="w-full border border-purple-600  p-2 rounded" placeholder="Enter second number"/>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-400"
        >
          Calculate
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      {result !== null && <h3 className="mt-4 text-xl">Result: {result}</h3>}
    </div>
  );
}