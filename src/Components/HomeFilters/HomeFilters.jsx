import React, {useEffect, useState} from "react";
import ArrowUpShortWide from '../../Assets/img/svg/arrow-up-short-wide-svgrepo-com.svg';
import ArrowDownShortWide from '../../Assets/img/svg/arrow-down-wide-short-svgrepo-com.svg';
import ArrowUpZA from '../../Assets/img/svg/arrow-down-z-a-svgrepo-com.svg';
import ArrowDownZA from '../../Assets/img/svg/arrow-up-z-a-svgrepo-com.svg';
import {fetchAllProducts} from "../../Features/products/productsSlice";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "../ProductComponent";


function HomeFilters(props) {
    const {data,isSuccess} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [color, setColor] = useState("")


    function loadProducts() {
         dispatch(fetchAllProducts());
    }

    const [sort, setSort] = useState('');
    let dataFetch = [...data];
    useEffect( () => {
        loadProducts();
        if (sort === 'ascPrice') {
             dataFetch = dataFetch.sort((a, b) => a.price - b.price);
            setProducts(dataFetch);
        }else if (sort === 'descPrice') {
             dataFetch = dataFetch.sort((a, b) => b.price - a.price);
            setProducts(dataFetch);
        }else if (sort === 'ascName') {
             dataFetch = dataFetch.sort((a, b) => a.name.localeCompare(b.name));
            setProducts(dataFetch);
        }else if (sort === 'descName') {
             dataFetch = dataFetch.sort((a, b) => b.name.localeCompare(a.name));
            setProducts(dataFetch);
        }else {
             setProducts(dataFetch);
        }

        if (isSuccess) {

        }
        if (category && brand && color) {
            dataFetch = dataFetch.filter((product) => product.category === category && product.brand === brand && product.color === color);
            setProducts(dataFetch);
        }else if (category && brand) {
            dataFetch = dataFetch.filter((product) => product.category === category && product.brand === brand);
            setProducts(dataFetch);
        }else if (category && color) {
            dataFetch = dataFetch.filter((product) => product.category === category && product.color === color);
            setProducts(dataFetch);
        }else if (brand && color) {
            dataFetch = dataFetch.filter((product) => product.brand === brand && product.color === color);
            setProducts(dataFetch);
        }
        else if (category) {
            dataFetch = dataFetch.filter((product) => product.category === category);
            setProducts(dataFetch);
        }else if (brand) {
            dataFetch = dataFetch.filter((product) => product.brand === brand);
            setProducts(dataFetch);
        }else if (color) {
            dataFetch = dataFetch.filter((product) => product.color === color);
            setProducts(dataFetch);
        }else {
            setProducts(dataFetch);
        }
    },[isSuccess,sort]);




    return (
        <div className="d-flex position-relative" id="filter-div">
        <div className="m-div-category pb-4">
         
            <div className="pt-3 pb-2">
                <span>Filtres</span>                      
            </div>
            <div className="btn-toolbar m-div-filters mt-3" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-3" role="group" aria-label="First group">
                  <button 
                  type="button" 
                  className="btn btn-light m-button-filters" 
                  id="ascPrice" 
                  onClick={() => setSort('ascPrice')}
                  >
                    <span>Prix </span>
                    <img src={ArrowUpShortWide} alt="filter price asc" className='arrow'/>
                  </button>
                </div>
                <div className="btn-group mr-3" role="group" aria-label="Second group">
                  <button 
                  type="button" 
                  className="btn btn-light m-button-filters" 
                  id="descPrice"
                  onClick={() => setSort('descPrice')}
                  >
                    <span>Prix </span>
                    <img src={ArrowDownShortWide} alt="filter price desc" className='arrow'/>
                  </button>
                </div>
                <div className="btn-group mr-3" role="group" aria-label="Third group">
                  <button 
                  type="button" 
                  className="btn btn-light m-button-filters" 
                  id="ascName"
                  onClick={() =>setSort('ascName') }
                  >
                    <span>Nom </span>
                    <img src={ArrowUpZA} alt="filter name asc" className='arrow'/>
                  </button>
                </div>
                <div className="btn-group" role="group" aria-label="Four group">
                    <button 
                    type="button" 
                    className="btn btn-light m-button-filters" 
                    id="descName"
                    onClick={() => setSort('descName')}
                    >
                      <span>Nom </span>
                      <img src={ArrowDownZA} alt="filter name desc" className='arrow'/>
                    </button>
                </div>
            </div>
        </div>
        <div className="filterSearch" id="filterSearch">
          <div className="search-bar">
            <div className="input-group">
              <div className="form-outline d-flex align-items-baseline">
                <i className="fa fa-search" style={{position: 'absolute',left: '10px',top: '10px'}}></i>
                <input 
                type="search" 
                id="searchInput" 
                className="form-control" 
                placeholder="Search anything..." 
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
                />
                <span className="left-pan" id="span-microphone">
                  <i className="fa fa-microphone"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="modal-filter modal-header" style={{marginLeft: '20px'}}>                  
            <button type="button" className="filterbutton " data-toggle="modal" data-target="#exampleModalScrollable" style={{zIndex: 300 }}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" width="30px" height="25px" style={{marginLeft: '12px', fill: 'white'}}><path d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z"/><path d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"/><path d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"/></svg>
            </button>
            <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalScrollableTitle">Filters</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div className="modal-body">
                  <span className="span-filter"> By category </span>
                        <div className="form-check martop-10">
                          <input 
                          className="form-check-input" 
                          type="radio" 
                          name="flexRadioDefault" 
                          id="flexRadioDefault1" 
                          value="Outdoor" 
                          onChange={() => setCategory('Outdoor')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Outdoor
                          </label>
                        </div>
                        <div className="form-check">
                          <input 
                          className="form-check-input" 
                          type="radio" name="flexRadioDefault" 
                          id="flexRadioDefault2" 
                          value="Tennis" 
                          onChange={() => setCategory('Tennis')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Tennis
                          </label>
                        </div>
                        <div className="form-check">
                          <input 
                          className="form-check-input" 
                          type="radio" 
                          name="flexRadioDefault" 
                          id="flexRadioDefault3" 
                          value="Running" 
                          onChange={() => setCategory('Running')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault3" style={{marginBottom: '10px'}}>
                            Running
                          </label>
                        </div>
                  <span className="span-filter"> By Brand </span>
                        <div className="form-check martop-10">
                          <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="checkbox" 
                          value="Nike" 
                          id="flexRadioDefault4"
                          onChange={() => setBrand('Nike')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault4">
                            Nike
                          </label>
                        </div>
                        <div className="form-check martop-10">
                          <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="checkbox" 
                          value="Adidas" 
                          id="flexRadioDefault5" 
                          onChange={() => setBrand('Adidas')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault5">
                            Adidas
                          </label>
                        </div>
                        <div className="form-check martop-10">
                          <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="checkbox" 
                          value="New Balance" 
                          id="flexRadioDefault6" 
                          onChange={() => setBrand('New Balance')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault6">
                            New Balance
                          </label>
                        </div>
                        <div className="form-check martop-10">
                          <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="checkbox" 
                          value="Vans" 
                          id="flexRadioDefault7" 
                          onChange={() => setBrand('Vans')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault7">
                            Vans
                          </label>
                        </div>
                        
                  <span className="span-filter"> By Color </span>
                        
                          <div className="dropdown">
                            <button className="btn _select_color dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span _text_display="Orange" className="color orange"></span></button>
                            <ul className="dropdown-menu _select_color_drop" aria-labelledby="dropdownMenu1">
                                <li><span _text_display="Green" className="color green" onClick={() => setColor('Green')}></span></li>
                                <li><span _text_display="Red" className="color red" onClick={() => setColor('Red')}></span></li>
                                <li><span _text_display="Brown" className="color brown" onClick={() => setColor('Brown')}></span></li>
                                <li><span _text_display="Orange" className="color orange" onClick={() => setColor('Orange')}></span></li>
                                <li><span _text_display="Gray" className="color gray" onClick={() => setColor('Gray')}></span></li>
                                <li><span _text_display="Blue" className="color blue" onClick={() => setColor('Blue')}></span></li>
                                <li><span _text_display="Black" className="color black" onClick={() => setColor('Black')}></span></li>
                                <li><span _text_display="White" className="color white" onClick={() => setColor('White')}></span></li>
                                <li><span _text_display="No color" className="" onClick={() => setColor('')}></span></li>
                                <input type="hidden" name="filterColor" value="Orange" />
                          </ul>
                        </div>
            </div>
                  <div className="modal-footer justify-content-between">
                    
                    <button type="button" className="btn btn-danger" data-dismiss="modal" id="myBTNClose" onClick={() => props.setFilters({sortBy: "",category: "",brands: [],color: "",})}>Reset</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductComponent products={products} />
    </div>

    );
}

export default HomeFilters;