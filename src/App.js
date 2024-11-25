import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Submission Form</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input type="text" />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
