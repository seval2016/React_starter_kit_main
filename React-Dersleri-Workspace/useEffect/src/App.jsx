import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setfirstName] = useState("Ali");
  const [lastName, setlastName] = useState("Can");

  useEffect(() => {
    console.log("her zaman çalışır");
  }); //useeffect'de ikinci parametreyi vermezsek(koşul parantez) her zaman calısır

  useEffect(() => {
    console.log("component ilk render edildiğinde çalışır");
  }, []); // ikinci parametre ye [] yazıldıgında  component ilk render edildiğinde çalışır bir daha çalışmaz

  useEffect(() => {
    console.log(
      " ilk render edildiğinde çalışır ve birde 'firstName' state değeri değiştiğinde çalısır"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      " ilk render edildiğinde çalışır ve birde 'lastName' state değeri değiştiğinde çalısır"
    );
  }, [lastName]);

    useEffect(() => {
    console.log(
      " ilk render edildiğinde çalışır ve birde 'firstName' veya 'lastName' state değeri değiştiğinde çalısır"
    );
  }, [firstName, lastName]);

  return (
    <>
      {firstName} {" "}
      {lastName}
      <br></br><br></br>
      <button style={{ color: "white", fontSize: "20px",backgroundColor:"gray" }} onClick={(e) => setfirstName("Enes")}> Adı Değiştir</button><br></br><br></br>
      <button style={{ color: "white", fontSize: "20px",backgroundColor:"gray" }} onClick={(e) => setlastName("Yılmaz")}> Soyadı Değiştir</button>
    </>
  );
}

export default App;
