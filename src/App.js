import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import Toto from "./Pages/Toto";
import Home from './Pages/Homepage';
import Products from "./Pages/Products";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<Products/>}/>
                <Route path="/register" element={<SignIn/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;
