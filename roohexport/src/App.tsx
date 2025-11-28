import { BentoDemo } from "./components/sections/BentoGrid";
import HeroCarousel from "./components/sections/HeroCarousel";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroCarousel />
      <BentoDemo />
    </>
  );
}

export default App;
