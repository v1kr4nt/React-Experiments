import "./App.css";
import { FormInput } from "./components/FormInput";

function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput />
        <FormInput />
      </form>
    </div>
  );
}

export default App;
