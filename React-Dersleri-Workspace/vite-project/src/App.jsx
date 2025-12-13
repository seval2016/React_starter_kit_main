import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setfirstName] = useState("seval");
  const [lastName, setlastName] = useState(" Şentürk");
  const [names, setnames] = useState(["ali", "veli", "ayşe", "fatma", "seval"]); //array
  const [info, setInfo] = useState({
    name: "seval",
    lastName: "şentürk",
    age: 20,
    isMarried: true,
  }); //object
  const [show, setShow] = useState(true);

  const handleChange = () => {
    debugger;
    setfirstName("Ahmet");
  };

  return (
    <>
      <h1>{firstName}</h1>
      {/*<button onClick={() =>(setfirstName('Ahmet'))}>İsmi Değiştir</button>*/}
      <button onClick={handleChange}>İsmi Değiştir</button>

      {names.map((name, index) => (
        <h2 key={index}>{name}</h2>
      ))}

      <div>
        {info.name}
        {info.lastName}
        {info.age}
        {info.isMarried ? "evli" : "evli degil"}
      </div>

      <div>
        {show ? (
          <div>
            {info.name}
            {info.lastName}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
