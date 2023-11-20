import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProducts, reset} from "../Features/products/productsSlice";
import {toast} from "react-toastify";
import NewShoes from "./NewShoes/NewShoes";
import Yeezy from "../Assets/img/models/yeezy.glb";
import cartService from "../Services/CartService";

function ProductComponent(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(props.products)
    }, [props.products])
    function add(e) {
        products.find((product) => {
            if (product._id === e.target.dataset.id) {
                const newProduct = {...product, quantity: 1}
                cartService.addToCart(newProduct)
                toast.success("Product added to cart")
            }
        })
    }
           return (
               <div className="container">
                   <NewShoes />
                   <div className="row products-container">
                       <div className="col" id="o-div-second-line">
                           <div className="justify-content-between d-flex">
                               <span>All shoes</span>
                           </div>
           <div className="d-flex flex-row m-div-sl flex-wrap" id="productContainer">
            {products ? products.map((props) => (
                <div className="m-div-product second-line" id={props.id} key={props._id}>
                    <div className="d-flex justify-content-center h-50">
                        <img className="img-fluid img-thumbnail a-img-shoes-pictures img-products&nbsp;" alt={props.name} src={props.images} />
                    </div>
                    <div className="d-flex h-50 flex-column">
                        <div className="m-div-description p-2 m-text h-100">
                            <span className="text-primary a-span-subtitle">{props.brand}</span>
                            <p>{props.name}</p>
                        </div>
                        <div className="justify-content-between d-flex position-relative place-end price-btn">
                            <b className="pl-2 m-text">$ {props.price}<button className="ml-auto align-self-end btn-add-cart" data-id={props._id} onClick={(e)=>add(e)}>+</button></b>
                        </div>
                    </div>
                </div>
            )): <p>Loading...</p>}
        </div>
    <div id="pub">
        <model-viewer
            src={Yeezy}
            style={{width: '100%', height: '100%'}}
            disable-zoom
            camera-orbit="calc(0deg + env(window-scroll-y) * 360deg) calc(0deg + env(window-scroll-y) * 180deg) calc(20m - env(window-scroll-y) * 4m)"
            min-field-of-view='30deg'
            max-field-of-view='30deg'
        />
    </div>
   </div>
   </div>
</div>
    );

}


export default ProductComponent;