import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [mode, setMode]=useState("light");
  const [alert, setAlert]=useState(null);

  const modeHandler = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title="Textutils - Dark Mode";
    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "success")
      document.title="Textutils - Light Mode";
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  return (
   <div>
     
     <Navbar title={"Textutils"} mode={mode} modeHandler={modeHandler}/>
     <Alert alert={alert}/>
     <Textform heading="Enter the text to analyze" mode={mode} modeHandler={modeHandler} alert={showAlert}/>
     {/* <About/> */}

    </div>
  );
}

export default App;
