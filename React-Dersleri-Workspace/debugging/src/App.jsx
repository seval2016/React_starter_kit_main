import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);


  debugger;

  const ortalamaBul = () => {
    const ortalama = topla(vize1, vize2) / 2;
    debugger;
    console.log("Ortalama : " + ortalama);
  };


const topla=(vize1,vize2)=>{
  const ortalama = (vize1 + vize2);
    debugger;  
}


  return (
    <>
      <form>
        <input type="number" value={vize1} onChange={(e)=>setVize1(Number(e.target.value))}/>
        <br></br>
        <input type="number" value={vize2} onChange={(e)=>setVize2(Number(e.target.value))} />
        <br></br>
        <button type="button" onClick={ortalamaBul}>Ortalama Bul</button>
      </form>
    </>
  );
}

export default App;
