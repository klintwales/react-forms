import React, {useState} from "react";


function App() {

  var [name, setName] = useState(" ");
  var [newName, newSetName] = useState(" ");

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(){
    console.log("clicked");
     newSetName(name);
     setName("");

  }

  return (
    <div className="container">
      <h1>Hello {newName}</h1>
      <input
      onChange = {handleChange}
      type="text"
      placeholder="What's your name?"
      value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
