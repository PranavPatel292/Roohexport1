import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-3xl bg-amber-50 font-bold underline">Hello world!</h1>
  );
}

export default App;
