import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [series, setSeries] = useState([]);

  const handleChange = (e) => {
    const number = +e.target.value || "";
    setNumber(number);
    setSeries([number - 1, number]);
  };

  const handleNext = () => {
    const length = series.length;
    const nextNumber = series[length - 2] + series[length - 1];
    setSeries([...series, nextNumber]);
  };

  const renderNumbers = series.map((el, index) => {
    return <div key={index}>{el}</div>;
  });

  return (
    <div>
      <label>Enter start number</label>
      <input value={number} onChange={handleChange} />
      <button onClick={handleNext}>Generate next number</button>
      {renderNumbers}
    </div>
  );
}
export default App;
