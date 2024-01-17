import { useState} from 'react';
import './App.css';
// import About from './components/About.js';
import Navbar from "./components/Navbar.js"
import TextForm from './components/TextForm.js';


function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () =>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#22396f";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    < >
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode ={toggleMode} /*props*/ />
      <div className="container">
        {/* <About/> */}
        <TextForm headingText="Enter the text to analyze" mode={mode} />
      </div>

    </>
  );
}

export default App;
