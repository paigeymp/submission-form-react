import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };

  return (
    <div className="App">
      <h1>React Submission Form</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
