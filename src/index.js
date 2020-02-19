//Functional Component using Hooks (useState)
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App(props) {
  const [name, setName] = useState("shreyash");

  const handleChange = e => {
    setName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    //alert(`Your Name is : ${name}`);
    document.write("form submitted my name is \t", name);
  };

  return (
    <div className="App">
      <p>My name is {name} </p>

      <form onSubmit={handleSubmit}>
        Enter Name:
        <input type="text" value={name} onChange={handleChange} />
        <button> Submit </button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
