import React from "react";
import Select from "./Select";

const options = [
  {
    title: "Первый вариант",
    value: "1",
  },
  {
    title: "Второй вариант",
    value: "2",
  },
  // Add other options as needed
];

const App = () => {
  return (
    <div>
      <h1>Выберите вариант:</h1>
      <Select options={options} placeholder="Выберите..." />
    </div>
  );
};

export default App;
