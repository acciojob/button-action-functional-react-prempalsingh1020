import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
let [text,setText] = useState(false);
function handleClick(){
  setText(true);
}

  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button onClick={handleClick} id="btn">Click me</button>
      {text && (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}


    </div>
  );
}


export default App;
