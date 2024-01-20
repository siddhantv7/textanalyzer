import { useState } from 'react';
import './App.css';
// import About from './components/About.js';
import Navbar from "./components/Navbar.js"
import TextForm from './components/TextForm.js';
// import Alert from './components/Alert.js';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message = "Light mode has been enabled", type ="Success") => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#22396f";
      showAlert("Dark mode has been enabled", "Success");
      console.log(alert);
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
      showAlert("Light mode has been enabled", "Success")
      console.log(alert);
    }
  }


  return (
    < >
      <Navbar alert={alert} title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /*props*/ />
      {/* <Alert  setAlert={setAlert}/> */}
      <div className="container">
        {/* <About/> */}
        <TextForm headingText="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
