import React, { useState, useEffect } from "react";

function App() {
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("babe")) || []);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setArr([input, ...arr]);
  }

  const handleChangeInInput = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    setInput("")
    localStorage.setItem("babe", JSON.stringify(arr))
  }, [arr, setArr])

  return (
    <div className="App">
      <div className="form">
        <input type="text" placeholder="Add content" value={input} onChange={handleChangeInInput} />
        <button onClick={handleClick}>Add</button>
      </div>
      <section className="context-box">
        {
          !arr.length ? "Your entered data will show here" : arr.map(a => <div className="card">{a}</div>)
        }
      </section>
      <button style={{ marginLeft: "40%", marginTop: "30px", padding: "10px 30px", border: "none", background: "red", color: "#fff", borderRadius: "10px", cursor: "pointer" }} onClick={() => {
        setArr([]);
      }}>Delete All</button>
    </div>
  );
}

export default App;
