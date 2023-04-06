import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [advice, setAdvice] = useState("");

  const searchAdvice = async () => {
  const response = await fetch(
      "https://www.boredapi.com/api/activity/"
    );
   const data = await response.json();
   setAdvice(data.activity);
  };

  useEffect(() => {
    searchAdvice();
  }, []);

  return (
    <div className="App">
      <h3>Antiboredom Advices</h3>
      <button className="btn" onClick={searchAdvice}>Take new advice</button>
      <p>{advice}</p>
    </div>
  );
}

export default App;
