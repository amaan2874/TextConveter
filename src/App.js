import './Apps.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './Alert';

import React, { useState } from 'react'



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enable","sucess");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enable","sucess");
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About" home = "Home" mode={mode} toggleMode={toggleMode} enablemode="darkmode"/>
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyzed below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}
export default App;
