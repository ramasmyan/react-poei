import React from 'react';

const ProductCard = (props) => {
    return (
        <div className="m-div-product second-line" id={props.id}>
        <div className="d-flex justify-content-center h-50">
            <img className="img-fluid img-thumbnail a-img-shoes-pictures img-products&nbsp;" alt={props.name} src={props.images} />
        </div>
        <div className="d-flex h-50 flex-column">
            <div className="m-div-description p-2 m-text h-100">
                <span className="text-primary a-span-subtitle">{props.brand}</span>
                <p>{props.name}</p>
            </div>
            <div className="justify-content-between d-flex position-relative place-end price-btn">
                <b className="pl-2 m-text">$ {props.price}<button className="ml-auto align-self-end btn-add-cart" data-id={props.id}><span>+</span></button></b>
            </div>
        </div>
    </div>
    );
}

export default ProductCard;