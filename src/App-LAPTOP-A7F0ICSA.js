import './App.css';
import Navbar from "./components/Navbar.js"
import TextForm from './components/TextForm.js';
function App() {
  return (
    < >
      <Navbar title="TextUtils" aboutText="About Us" /*props*/ />
      <div className="container">
        <TextForm headingText="Enter the text to analyze"/>
      </div>

    </>
  );
}

export default App;
