// import logo from './logo.svg';
import "./App.css";
// import "./Login.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#19171a";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      message: message,
    });

    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  return (
    <>
        <NavBar title="PRO EDIT's" currentMode={mode} />
        <Alert alert={alert} />
          <TextArea heading="Enter the text below!"
          currentMode={mode}
          toggleMode={switchMode}
          showAlert={showAlert} />
    </>
  );
}

export default App;
