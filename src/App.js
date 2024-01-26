import { useState } from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About.js';
import Navbar from "./components/Navbar.js"
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

// https://create-react-app.dev/docs/deployment/      git hub app deployment
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message = "Light mode has been enabled", type = "Success") => {
    setAlert({
      msg: message,
      type: type
    })
    //   setTimeout(() => {
    //     setAlert(null);
    // }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#22396f";
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        setAlert(null);
      }, 3000)

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000)
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      setInterval(() => {
        setAlert(null);
      }, 3000)
    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /*props*/ />
        <Alert alert={alert} setAlert={setAlert} />
        <div className="container">
          <Routes>
            <Route exact path="/home" element={<TextForm headingText="Enter the text to analyze" mode={mode} />} />
            <Route exact path="/about"  element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App