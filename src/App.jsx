import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsvalid = userInput.duration >= 1;
  function handelChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />

      <UserInput userInput={userInput} onChange={handelChange} />
      {!inputIsvalid && (
        <p className="center">plese enter a duration greater than zero</p>
      )}
      {inputIsvalid && <Results input={userInput} />}
    </>
  );
}

export default App;
