import React, {useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import ProductForm from "./Pages/BO/ProductForm";
import Home from './Pages/Homepage';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import CartPage from './Pages/CartPage';
import BOProductsList from './Pages/BO/BOProductsList';
import Footer from './Components/Footer/Footer';
import ChartPage from './Pages/BO/ChartPage';
import Checkout from "./Pages/Checkout";

function App() {

    // Obtenez le chemin actuel de l'URL
    const currentPath = window.location.pathname;
    const isAdminPage = currentPath.startsWith('/admin');
  return (
    <div className="App">
      <BrowserRouter>
        {!isAdminPage && <Navbar />}
            <Routes>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/register" element={<SignIn/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/form" element={<ProductForm/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/products" element={<BOProductsList/>}/>
                <Route path="/admin/" element={<ChartPage />}/>
                <Route path="/admin/products/:id" element={<ProductForm />} />
                <Route path="/admin/products/add" element={<ProductForm />} />
                <Route path="*" element={<h1>404 not found</h1>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>  
        {!isAdminPage && <Footer />}
        </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;
