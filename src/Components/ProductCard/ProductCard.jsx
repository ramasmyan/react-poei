import React from 'react';

const ProductCard = (props) => {
    return (
        <div class="m-div-product second-line" id={props.id}>
        <div class="d-flex justify-content-center h-50">
            <img class="img-fluid img-thumbnail a-img-shoes-pictures img-products&nbsp;" alt={props.name} src={props.images} />
        </div>
        <div class="d-flex h-50 flex-column">
            <div class="m-div-description p-2 m-text h-100">
                <span class="text-primary a-span-subtitle">{props.brand}</span>
                <p>{props.name}</p>
            </div>
            <div class="justify-content-between d-flex position-relative place-end price-btn">
                <b class="pl-2 m-text">$${props.price}<button class="ml-auto align-self-end btn-add-cart" data-id={props.id}><span>+</span></button></b>
            </div>
        </div>
    </div>
    );
}

export default ProductCard;