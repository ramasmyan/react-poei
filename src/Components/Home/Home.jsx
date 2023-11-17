import React from 'react';
import './Home.scss';
import ProductCard from '../ProductCard/ProductCard';
import Yeezy from '../../Assets/img/models/yeezy.glb';
import HomeFilters from '../HomeFilters/HomeFilters';
import NewShoes from '../NewShoes/NewShoes';
import { filterProducts } from '../../Services/ProductManager';

function Home(props) {

  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState({
    sortBy: null, // 'ascPrice', 'descPrice', 'ascName', 'descName', etc.
    category: null, // 'Outdoor', 'Tennis', 'Running', etc.
    brands: [], // ['Nike', 'Adidas', 'New Balance', 'Vans', etc.]
    color: null, // 'Orange', 'Green', 'Red', etc.
  });
  const [searchTerm, setSearchTerm] = React.useState('');


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming props.products is a function that returns a Promise
        const data = await props.products;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.products]);

  React.useEffect(() => {
    filterProducts(products, filters).then((products) => setProducts(products));
  }, [filters]);
  

    return (
        <section className='Home'>
            <div>
                <h2 className="a-h2-title">Products</h2>
            </div>
            <HomeFilters 
            setFilters={setFilters} 
            filters={filters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            />
            <div className="container">
                <NewShoes />
                <div className="row products-container">
                  <div className="col" id="o-div-second-line">
                      <div className="justify-content-between d-flex">
                        <span>All shoes</span>
                      </div>
                      <div className="d-flex flex-row m-div-sl flex-wrap" id="productContainer">
                      {
                      searchTerm !== '' ?
                      products
                      .filter((product) => {
                        // Filtrer par nom du produit
                        const productName = product.name.toLowerCase();
                        const productBrand = product.brand.toLowerCase();
                        const searchTermLower = searchTerm.toLowerCase();
                        if (productName.includes(searchTermLower)) {
                          return productName.includes(searchTermLower);
                        } else if(productBrand.includes(searchTermLower)) {
                          return productBrand.includes(searchTermLower);
                        }
                      })
                      .map((product) => (
                        <ProductCard
                          key={product._id}
                          id={product._id}
                          name={product.name}
                          price={product.price}
                          images={product.images[0]}
                          description={product.description}
                        />
                        ))
                        :
                      products.map((product) => (
                        <ProductCard
                          key={product._id}
                          id={product._id}
                          name={product.name}
                          price={product.price}
                          images={product.images[0]}
                          description={product.description}
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