import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Logout from "./pages/Toto";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/register" element={<SignIn/>}/>
            <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Logout/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
