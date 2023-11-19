import React, {useEffect, useState} from 'react';
import './Home.scss';
import ProductCard from '../ProductCard/ProductCard';
import Yeezy from '../../Assets/img/models/yeezy.glb';
import HomeFilters from '../HomeFilters/HomeFilters';
import NewShoes from '../NewShoes/NewShoes';


function Home(props) {
    console.log(props.products)
    const [products, setProducts] = useState()

    useEffect(() => {
        setProducts(props.products)
    }, [props.products]);

    return (
        <section className='Home'>
            <div>
                <h2 className="a-h2-title">Products</h2>
            </div>

            <div className="container">
                <NewShoes />
                <div className="row products-container">
                    <div className="col" id="o-div-second-line">
                        <div className="justify-content-between d-flex">
                            <span>All shoes</span>
                        </div>
                        <div className="d-flex flex-row m-div-sl flex-wrap" id="productContainer">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    brand={product.brand}
                                    images={product.images}
                                    price={product.price}
                                />
                            ))}
                        </div>
                    </div>
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
            <div className="alert alert-success alert-dismissible" id="cartAlert" role="alert">
                Article ajouté au panier!
            </div>
        </section>
    );
}

export default Home;