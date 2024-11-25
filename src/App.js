import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [seasons, setSeasons] = useState({
    spring: true,
    summer: false,
    fall: false,
    winter: false,
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, contact, gender, seasons);
  };

  const handleSeasonChange = (season) => {
    setSeasons((prev) => ({ ...prev, [season]: !prev[season] }));
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSeasons({
      spring: true,
      summer: false,
      autumn: false,
      winter: false,
    });
    setSelectedOption("");
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
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label for="email">Email*</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          female
          <input
            type="radio"
            name="gender"
            value="non-binary"
            id="non-binary"
            checked={gender === "non-binary"}
            onChange={(e) => setGender(e.target.value)}
          />
          non-binary
          <label for="season">Your favourite season</label>
          <input
            type="checkbox"
            name="season"
            id="spring"
            checked={seasons.spring === true}
            onChange={(e) => handleSeasonChange("spring")}
          />
          spring
          <input
            type="checkbox"
            name="season"
            id="summer"
            checked={seasons.summer === true}
            onChange={(e) => handleSeasonChange("summer")}
          />
          summer
          <input
            type="checkbox"
            name="season"
            id="autumn"
            checked={seasons.autumn === true}
            onChange={(e) => handleSeasonChange("autumn")}
          />
          autumn
          <input
            type="checkbox"
            name="season"
            id="winter"
            checked={seasons.winter === true}
            onChange={(e) => handleSeasonChange("winter")}
          />
          winter
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
