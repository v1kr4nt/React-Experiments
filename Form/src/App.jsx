import { useEffect, useRef, useState } from "react";
import "./App.css";
import { FormInput } from "./components/FormInput";

function App() {
  const [username, setUsername] = useState("");
  console.log(username);
  return (
    <div className="app">
      {/* <form>
        <FormInput placeholder="Username" setUsername={setUsername} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="abc" />
        <FormInput placeholder="asd" />
      </form> */}
      <Testing />
    </div>
  );
}

export default App;

function Testing() {
  const [price, setPrice] = useState("$35k");
  const divRef = useRef();

  useEffect(() => {
    setInterval(() => {
      divRef.current.innerHTML = "The cost of this car is $40k";
    }, 4000);
  }, []);

  console.log("re-render");
  return <div ref={divRef}>The cost of this car is {price}</div>;
}
