import React from "react";

const [name, setName] = useState("");

function App() {
  return (
    <div className="container">
      <h1>Hello </h1>
      <input onChange={handleChange}type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
