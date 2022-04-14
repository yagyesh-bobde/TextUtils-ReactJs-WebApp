import React, { useState } from "react";
import About from "./Components/About";
import Alert from "./Components/Alert";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

const App = () => {
    const [mode , setMode] = useState('light')

    const [alert , setAlert] = useState(null)

    const showAlert = (msg , type) => {
        setAlert({
            msg: msg,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#012b68';
            showAlert("Dark Mode is Enabled" , "success")
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode is Enabled" , "success")
        }
    }
    
    return(
        <Router>

            <NavBar  mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>
            <Routes> 
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/" element= {<TextForm heading="Enter the Text Below" mode={mode}/>}/>
            </Routes>

         </Router>
    )
}

export default App;

