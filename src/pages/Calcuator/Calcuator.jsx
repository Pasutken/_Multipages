import React, { useState, useEffect } from "react";

import "./Calcuator.css";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const [lastOperand, setLastOperand] = useState(null);
  const [isClear, setIsClear] = useState(true); // State to manage AC/C button

  useEffect(() => {
    // Add event listener for keydown
    const handleKeyDown = (event) => {
      const { key } = event;

      // Check if key is a number
      if (!isNaN(key)) {
        handleNumber(key);
      }

      // Check for operators
      switch (key) {
        case "+":
          handleOperator("+");
          break;
        case "-":
          handleOperator("-");
          break;
        case "*":
          handleOperator("*");
          break;
        case "/":
          handleOperator("/");
          break;
        case "Enter":
          event.preventDefault(); // Prevent the form from submitting if the calculator is in a form
          calculate();
          break;
        case "Escape":
          clearAll();
          break;
        case ".":
          handleDot();
          break;
        case "%":
          percentage();
          break;
        case "Backspace":
          setCurrentInput((prev) => prev.slice(0, -1)); // Remove last character
          break;
        default:
          break;
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentInput, operator, previousInput, result]);

  // Clear all inputs
  const clearAll = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperator("");
    setResult(0);
    setLastOperand(null);
    setIsClear(true); // Set to true when inputs are cleared
  };

  // Clear current input
  const clearInput = () => {
    setCurrentInput("");
    setIsClear(true); // Set back to true if input is cleared
  };

  // Handle +/- toggle
  const plusMinus = () => {
    if (currentInput) {
      setCurrentInput((prev) => (-parseFloat(prev)).toString());
    }
  };

  // Handle percentage
  const percentage = () => {
    if (currentInput) {
      setCurrentInput((prev) => (parseFloat(prev) / 100).toString());
    }
  };

  // Handle operator selection
  const handleOperator = (op) => {
    if (currentInput || result) {
      if (previousInput && operator) {
        calculate();
      }
      setOperator(op);
      setPreviousInput(currentInput || result.toString());
      setCurrentInput(""); // Clear the input field to allow for the next input
      setIsClear(false); // Set to false when an operator is chosen (this will switch AC to C)
    }
  };

  // Handle number button click
  const handleNumber = (value) => {
    setCurrentInput((prev) => prev + value);
    setIsClear(false); // Set to false when input starts (this will switch AC to C)
  };

  // Handle decimal point
  const handleDot = () => {
    if (!currentInput.includes(".")) {
      setCurrentInput((prev) => prev + ".");
    }
  };

  // Handle calculation using if-else instead of switch
  const calculate = () => {
    let num1 = parseFloat(previousInput || result);
    let num2 = parseFloat(currentInput);

    if (lastOperand !== null && !currentInput) {
      num2 = lastOperand;
    }

    let resultCalc = 0;

    if (operator === "/") {
      resultCalc = num1 / num2;
    } else if (operator === "*") {
      resultCalc = num1 * num2;
    } else if (operator === "-") {
      resultCalc = num1 - num2;
    } else if (operator === "+") {
      resultCalc = num1 + num2;
    }

    setCurrentInput(resultCalc.toString());
    setResult(resultCalc);
    setPreviousInput("");
    setLastOperand(num2);
    setIsClear(false); // After calculation, switch to C instead of AC
  };

  return (
    <div className="calculator-container">
      <div className="calc-container">
        <input
          className="calc-screen"
          value={currentInput || previousInput || result} // Show currentInput or previousInput or result
          readOnly
        />
        <div className="calc-box1">
          <button
            className="calc-clear"
            onClick={currentInput ? clearInput : clearAll}
          >
            {isClear ? "AC" : "C"} {/* Show C when an operator or number is pressed */}
          </button>
          <button className="calc-operation-alt" onClick={plusMinus}>
            +/-
          </button>
          <button className="calc-operation-alt" onClick={percentage}>
            %
          </button>
          <button
            className="calc-operation"
            onClick={() => handleOperator("/")}
          >
            &divide;
          </button>
        </div>
        <div className="calc-box2">
          <button className="calc-button" onClick={() => handleNumber("7")}>
            7
          </button>
          <button className="calc-button" onClick={() => handleNumber("8")}>
            8
          </button>
          <button className="calc-button" onClick={() => handleNumber("9")}>
            9
          </button>
          <button
            className="calc-operation"
            onClick={() => handleOperator("*")}
          >
            &times;
          </button>
        </div>
        <div className="calc-box3">
          <button className="calc-button" onClick={() => handleNumber("4")}>
            4
          </button>
          <button className="calc-button" onClick={() => handleNumber("5")}>
            5
          </button>
          <button className="calc-button" onClick={() => handleNumber("6")}>
            6
          </button>
          <button
            className="calc-operation"
            onClick={() => handleOperator("-")}
          >
            &#45;
          </button>
        </div>
        <div className="calc-box4">
          <button className="calc-button" onClick={() => handleNumber("1")}>
            1
          </button>
          <button className="calc-button" onClick={() => handleNumber("2")}>
            2
          </button>
          <button className="calc-button" onClick={() => handleNumber("3")}>
            3
          </button>
          <button
            className="calc-operation"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>
        <div className="calc-box5">
          <button className="calc-double" onClick={() => handleNumber("0")}>
            0
          </button>
          <button className="calc-button" onClick={handleDot}>
            .
          </button>
          <button className="calc-equals" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
