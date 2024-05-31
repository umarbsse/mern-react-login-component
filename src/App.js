import './App.css';
import{BrowserRouter,
  Routes,
  Route,
  }from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';


function App() {
  const [alert, setAlert]= useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
    
  );
}

export default App;