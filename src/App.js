import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Products from "./pages/Products";
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
            </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;
