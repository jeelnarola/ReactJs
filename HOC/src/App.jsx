import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeCom from "./Components/Themcard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeCom title="hello" theme="dark" />
      <ThemeCom title="hello" theme="light" />
    </>
  );
}

export default App;
