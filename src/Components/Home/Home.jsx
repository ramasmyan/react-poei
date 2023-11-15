import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Home.scss';
import ArrowUpShortWide from '../../Assets/img/svg/arrow-up-short-wide-svgrepo-com.svg';
import ArrowDownShortWide from '../../Assets/img/svg/arrow-down-wide-short-svgrepo-com.svg';
import ArrowUpZA from '../../Assets/img/svg/arrow-down-z-a-svgrepo-com.svg';
import ArrowDownZA from '../../Assets/img/svg/arrow-up-z-a-svgrepo-com.svg';



function Home(props) {

    return (
        <section className='Home'>
            <div>
                <h2 className="a-h2-title">Products</h2>
            </div>
            <div className="d-flex position-relative" id="filter-div">
                <div className="m-div-category pb-4">
                 
                    <div className="pt-3 pb-2">
                        <span>Filtres</span>                      
                    </div>
                    <div className="btn-toolbar m-div-filters mt-3" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-3" role="group" aria-label="First group">
                          <button type="button" className="btn btn-light m-button-filters" id="ascPrice">
                            <span>Prix </span>
                            <img src={ArrowUpShortWide} alt="filter price asc" className='arrow'/>
                          </button>
                        </div>
                        <div className="btn-group mr-3" role="group" aria-label="Second group">
                          <button type="button" className="btn btn-light m-button-filters" id="descPrice">
                            <span>Prix </span>
                            <img src={ArrowDownShortWide} alt="filter price desc" className='arrow'/>
                          </button>
                        </div>
                        <div className="btn-group mr-3" role="group" aria-label="Third group">
                          <button type="button" className="btn btn-light m-button-filters" id="ascName">
                            <span>Nom </span>
                            <img src={ArrowUpZA} alt="filter name asc" className='arrow'/>
                          </button>
                        </div>
                        <div className="btn-group" role="group" aria-label="Four group">
                            <button type="button" className="btn btn-light m-button-filters" id="descName">
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
                        <input type="search" id="searchInput" className="form-control" placeholder="Search anything..." />
                        <span className="left-pan">
                          <i className="fa fa-microphone"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-filter modal-header" style={{marginLeft: '20px'}}>                  
                    <button type="button" className="filterbutton " data-toggle="modal" data-target="#exampleModalScrollable">
                      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" width="30px" height="25px" ><path d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z"/><path d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"/><path d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"/></svg>
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
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Outdoor" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Outdoor
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Tennis" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Tennis
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Running" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Running
                                  </label>
                                </div>
                          <span className="span-filter"> By Brand </span>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" name="checkbox" value="Nike" id="flexRadioDefault4" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault4">
                                    Nike
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" name="checkbox" value="Adidas" id="flexRadioDefault5" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault5">
                                    Adidas
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" name="checkbox" value="New Balance" id="flexRadioDefault6" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault6">
                                    New Balance
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" name="checkbox" value="Vans" id="flexRadioDefault7" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault7">
                                    Vans
                                  </label>
                                </div>
                                
                          <span className="span-filter"> By Color </span>
                                
                                  <div className="dropdown">
                                    <button className="btn _select_color dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span _text_display="Orange" className="color orange"></span></button>
                                    <ul className="dropdown-menu _select_color_drop" aria-labelledby="dropdownMenu1">
                                        <li><span _text_display="Green" className="color green"></span></li>
                                        <li><span _text_display="Red" className="color red"></span></li>
                                        <li><span _text_display="Brown" className="color brown"></span></li>
                                        <li><span _text_display="Orange" className="color orange"></span></li>
                                        <li><span _text_display="Gray" className="color gray"></span></li>
                                        <li><span _text_display="Blue" className="color blue"></span></li>
                                        <li><span _text_display="Black" className="color black"></span></li>
                                        <li><span _text_display="White" className="color white"></span></li>
                                        <li><span _text_display="No color" className=""></span></li>
                                        <input type="hidden" name="filterColor" value="Orange" />
                                  </ul>
                                </div>
                              </div>
                          <div className="modal-footer justify-content-between">
                            
                            <button type="button" className="btn btn-danger" data-dismiss="modal" id="myBTNClose">Reset</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

            </div>
            <div className="container">
                <div className="row products-container">
                    <div className="col" id="product-populars-line">
                        <div className="justify-content-between d-flex">
                            <span>Popular Shoes</span>
                            <a className="a-a-see-all">See All</a>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="m-div-product" id="1">
                              <div className=" h-50 d-flex justify-content-center">
                                <img src="assets/img/airforcebw.png" className="img-fluid img-thumbnail a-img-shoes-pictures align-self-center" alt="Air Force 1 Mid made for You" />
                              </div>
                                <div className="d-flex h-100 flex-column">
                                    <div className="m-div-description p-2 m-text">
                                        <span className="text-primary a-span-subtitle">Best Seller</span>
                                        <p>Air Force 1</p>
                                    </div>
                                    <div className="justify-content-between d-flex position-relative h-100">
                                        <b className="pl-2 m-text">$110</b>
                                        <button className="ml-auto align-self-end btn-add-cart" data-id="1">
                                            <span>+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="m-div-product" id="2">
                              <div className=" h-50 d-flex justify-content-center">
                                <img src="assets/img/airforce1Mid.png" className="img-fluid img-thumbnail a-img-shoes-pictures align-self-center" alt="Air Force 1 Mid made for You" />
                              </div>                                
                              <div className="d-flex h-100 flex-column">
                                    <div className="m-div-description p-2 m-text">
                                        <span className="text-primary a-span-subtitle">Best Seller</span>
                                        <p>Nike Jordan 1 Mid</p>
                                    </div>
                                    <div className="justify-content-between d-flex position-relative h-100">
                                        <b className="pl-2 m-text">$210</b>
                                        <button className="ml-auto align-self-end btn-add-cart" data-id="2">
                                            <span>+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="news-arrivals">
                        <div className="justify-content-between d-flex">
                            <span>New Arrivals</span>
                            <a className="a-a-see-all">See All</a>
                        </div>
                        <div className="o-div-news-arrivals">
                            <div className="m-div-new-shoes justify-content-between position-relative">
                                <div className="m-div-description d-flex align-self-center flex-column p-3 position-relative h-100">

                                    <span className="text-primary a-span-subtitle m-text">Daily shoes</span>
                                    <div className="m-div-new-arrivals-text">

                                        <div className="position-absolute m-div-stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.36286 3.34856C9.40839 3.07838 9.4427 2.81127 9.46486 2.54413C9.49825 2.14341 9.4776 1.73964 9.48944 1.33892C9.49461 1.16892 9.51495 0.725713 9.50675 0.661963C9.43237 0.106427 8.984 0.021417 8.85286 0.00623841C8.78941 -0.00286873 8.13795 -0.0756933 7.9974 0.646807C7.82497 1.5302 7.76972 2.41965 7.83073 3.2909C7.68836 4.03162 7.44489 4.76928 7.12341 5.43714C5.84416 8.09339 3.40649 8.35143 0.765415 8.32714C0.359237 8.32107 0.0219564 8.63982 0.000705719 9.04357C-0.0205441 9.45035 0.281812 9.80249 0.686169 9.83892C2.16244 9.9816 4.78167 11.1655 5.68722 12.398C5.87665 12.6561 5.98684 13.2784 6.13256 13.8886C6.33595 14.7356 6.57789 15.5734 6.84898 15.9255C6.88966 15.9802 7.38418 16.5388 7.53172 16.6207C7.88629 16.815 8.17012 16.7027 8.33132 16.5995C8.49252 16.4963 8.67496 16.2929 8.74782 15.9559C8.82402 15.6038 8.75966 14.8812 8.7715 14.7264C8.81461 14.1648 8.92692 13.0629 9.15612 12.1157C9.27967 11.6057 9.41143 11.1352 9.62939 10.9014C10.4363 10.0362 11.7265 10.1638 12.8129 10.3064C12.9377 10.3216 13.0625 10.3398 13.1869 10.355C13.6292 10.4856 14.0989 10.5827 14.5952 10.6404C15.3447 10.7284 15.468 10.0393 15.4747 9.99375C15.4886 9.89357 15.5405 9.37751 14.9756 9.17108C14.914 9.14983 14.4592 9.04964 14.2841 9.01018C14.04 8.95554 13.7932 8.91305 13.5455 8.87359C10.9867 8.07823 9.59691 5.84392 9.36286 3.34856ZM8.48462 6.10805C7.51866 8.10555 6.05272 9.0709 4.31507 9.50804H4.31537C5.40034 10.0757 6.38726 10.7861 6.91031 11.4995C7.10885 11.7697 7.29098 12.313 7.45522 12.9232C7.54416 12.3555 7.66437 11.7514 7.82314 11.2353C8.00376 10.6464 8.24693 10.1577 8.51833 9.86627C9.04229 9.30466 9.69983 8.99198 10.4068 8.83716C9.56049 8.08734 8.91873 7.15234 8.48462 6.10805Z" fill="#636363" fillOpacity="0.2"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.36286 3.34856C9.40839 3.07838 9.4427 2.81127 9.46486 2.54413C9.49825 2.14341 9.4776 1.73964 9.48944 1.33892C9.49461 1.16892 9.51495 0.725713 9.50675 0.661963C9.43237 0.106427 8.984 0.021417 8.85286 0.00623841C8.78941 -0.00286873 8.13795 -0.0756933 7.9974 0.646807C7.82497 1.5302 7.76972 2.41965 7.83073 3.2909C7.68836 4.03162 7.44489 4.76928 7.12341 5.43714C5.84416 8.09339 3.40649 8.35143 0.765415 8.32714C0.359237 8.32107 0.0219564 8.63982 0.000705719 9.04357C-0.0205441 9.45035 0.281812 9.80249 0.686169 9.83892C2.16244 9.9816 4.78167 11.1655 5.68722 12.398C5.87665 12.6561 5.98684 13.2784 6.13256 13.8886C6.33595 14.7356 6.57789 15.5734 6.84898 15.9255C6.88966 15.9802 7.38418 16.5388 7.53172 16.6207C7.88629 16.815 8.17012 16.7027 8.33132 16.5995C8.49252 16.4963 8.67496 16.2929 8.74782 15.9559C8.82402 15.6038 8.75966 14.8812 8.7715 14.7264C8.81461 14.1648 8.92692 13.0629 9.15612 12.1157C9.27967 11.6057 9.41143 11.1352 9.62939 10.9014C10.4363 10.0362 11.7265 10.1638 12.8129 10.3064C12.9377 10.3216 13.0625 10.3398 13.1869 10.355C13.6292 10.4856 14.0989 10.5827 14.5952 10.6404C15.3447 10.7284 15.468 10.0393 15.4747 9.99375C15.4886 9.89357 15.5405 9.37751 14.9756 9.17108C14.914 9.14983 14.4592 9.04964 14.2841 9.01018C14.04 8.95554 13.7932 8.91305 13.5455 8.87359C10.9867 8.07823 9.59691 5.84392 9.36286 3.34856ZM8.48462 6.10805C7.51866 8.10555 6.05272 9.0709 4.31507 9.50804H4.31537C5.40034 10.0757 6.38726 10.7861 6.91031 11.4995C7.10885 11.7697 7.29098 12.313 7.45522 12.9232C7.54416 12.3555 7.66437 11.7514 7.82314 11.2353C8.00376 10.6464 8.24693 10.1577 8.51833 9.86627C9.04229 9.30466 9.69983 8.99198 10.4068 8.83716C9.56049 8.08734 8.91873 7.15234 8.48462 6.10805Z" fill="#636363" fillOpacity="0.2"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.36286 3.34856C9.40839 3.07838 9.4427 2.81127 9.46486 2.54413C9.49825 2.14341 9.4776 1.73964 9.48944 1.33892C9.49461 1.16892 9.51495 0.725713 9.50675 0.661963C9.43237 0.106427 8.984 0.021417 8.85286 0.00623841C8.78941 -0.00286873 8.13795 -0.0756933 7.9974 0.646807C7.82497 1.5302 7.76972 2.41965 7.83073 3.2909C7.68836 4.03162 7.44489 4.76928 7.12341 5.43714C5.84416 8.09339 3.40649 8.35143 0.765415 8.32714C0.359237 8.32107 0.0219564 8.63982 0.000705719 9.04357C-0.0205441 9.45035 0.281812 9.80249 0.686169 9.83892C2.16244 9.9816 4.78167 11.1655 5.68722 12.398C5.87665 12.6561 5.98684 13.2784 6.13256 13.8886C6.33595 14.7356 6.57789 15.5734 6.84898 15.9255C6.88966 15.9802 7.38418 16.5388 7.53172 16.6207C7.88629 16.815 8.17012 16.7027 8.33132 16.5995C8.49252 16.4963 8.67496 16.2929 8.74782 15.9559C8.82402 15.6038 8.75966 14.8812 8.7715 14.7264C8.81461 14.1648 8.92692 13.0629 9.15612 12.1157C9.27967 11.6057 9.41143 11.1352 9.62939 10.9014C10.4363 10.0362 11.7265 10.1638 12.8129 10.3064C12.9377 10.3216 13.0625 10.3398 13.1869 10.355C13.6292 10.4856 14.0989 10.5827 14.5952 10.6404C15.3447 10.7284 15.468 10.0393 15.4747 9.99375C15.4886 9.89357 15.5405 9.37751 14.9756 9.17108C14.914 9.14983 14.4592 9.04964 14.2841 9.01018C14.04 8.95554 13.7932 8.91305 13.5455 8.87359C10.9867 8.07823 9.59691 5.84392 9.36286 3.34856ZM8.48462 6.10805C7.51866 8.10555 6.05272 9.0709 4.31507 9.50804H4.31537C5.40034 10.0757 6.38726 10.7861 6.91031 11.4995C7.10885 11.7697 7.29098 12.313 7.45522 12.9232C7.54416 12.3555 7.66437 11.7514 7.82314 11.2353C8.00376 10.6464 8.24693 10.1577 8.51833 9.86627C9.04229 9.30466 9.69983 8.99198 10.4068 8.83716C9.56049 8.08734 8.91873 7.15234 8.48462 6.10805Z" fill="#636363" fillOpacity="0.2"/>
                                            </svg>
                                        </div>
                                        <p className="m-text">Nike Air Max 2017</p>

                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <g clipPath="url(#clip0_4_227)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.56958 14.7247C6.47603 14.623 6.38175 14.5213 6.28672 14.4203C5.31781 13.3924 4.35689 12.3637 3.46189 11.2686C3.24502 11.0034 2.83866 10.4896 2.41838 10.2145C2.11777 10.0177 1.80099 9.92569 1.50588 9.94831C1.31785 9.96263 1.04008 10.0429 0.884853 10.3941C0.858714 10.4531 0.826058 10.5552 0.808539 10.6867C0.780391 10.8993 0.777892 11.2832 0.78061 11.3365C0.817135 12.1128 0.855377 12.8553 0.955435 13.6265C1.04741 14.3363 1.09871 15.0494 1.20047 15.7585C1.35272 16.8195 1.56611 17.8442 1.90122 18.8642C2.02554 19.243 2.43414 19.4492 2.81288 19.3249C3.19125 19.2005 3.39782 18.7923 3.2735 18.4136C2.96503 17.4741 2.77031 16.5306 2.63044 15.5534C2.52943 14.8508 2.47889 14.1439 2.38767 13.4407C2.32845 12.9832 2.29256 12.5363 2.26552 12.0858L2.34341 12.1827C3.26021 13.3042 4.24335 14.3582 5.2356 15.4108C5.60682 15.805 5.96415 16.2093 6.34181 16.5976C6.37153 16.6462 6.50883 16.8686 6.57795 16.9459C6.6929 17.0747 6.82034 17.1498 6.93259 17.1895C7.21779 17.2908 7.51335 17.2736 7.78661 16.9621C7.99117 16.7287 8.12101 16.3575 8.13556 15.907C8.15577 15.2879 7.9624 14.4606 7.9317 14.0822C7.73719 11.6885 7.34745 9.29424 7.33358 6.88906C7.33139 6.49049 7.00603 6.16879 6.60746 6.17098C6.20888 6.17353 5.88682 6.49886 5.88937 6.89745C5.90321 9.33879 6.29438 11.7693 6.49175 14.1993C6.50254 14.3286 6.53438 14.5135 6.56958 14.7247Z" fill="#3B3B3B"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3726 5.18832C12.5436 5.36355 11.7147 5.51093 11.029 6.03947C10.3118 6.59279 9.91896 7.42943 9.74621 8.37522C9.52587 9.58182 9.6687 10.9707 9.75085 11.9594C9.79356 12.4714 9.78681 13.1815 9.90316 13.817C10.0034 14.3633 10.1963 14.858 10.5106 15.2135C11.0044 15.7718 11.8008 15.8661 12.6374 15.5759C13.6039 15.2407 14.5919 14.4039 14.8745 13.9012C15.0701 13.5538 14.9467 13.113 14.599 12.9178C14.2517 12.7223 13.8112 12.8456 13.6157 13.1929C13.4364 13.5118 12.7771 13.9986 12.1639 14.2116C12.027 14.2589 11.8923 14.2925 11.7663 14.2962C11.7007 14.2983 11.635 14.3044 11.5929 14.2571C11.3867 14.0235 11.3286 13.6579 11.284 13.2894C11.2215 12.7756 11.224 12.2424 11.1906 11.8394C11.1169 10.9552 10.9702 9.71371 11.1671 8.63464C11.2727 8.05606 11.4723 7.52202 11.9114 7.18346C12.4209 6.79062 13.0545 6.73201 13.6711 6.60169C14.0611 6.51952 14.3109 6.13591 14.2283 5.74592C14.1462 5.35594 13.7626 5.10615 13.3726 5.18832Z" fill="#3B3B3B"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.124 8.98621C12.4728 9.29919 11.7775 9.61967 11.086 9.82899C10.7045 9.94449 10.4884 10.3479 10.6035 10.7294C10.719 11.111 11.1224 11.327 11.504 11.2115C12.2656 10.9812 13.0328 10.6329 13.7496 10.2885C14.1087 10.1159 14.2604 9.68387 14.0878 9.32474C13.9151 8.96525 13.4835 8.81391 13.124 8.98621Z" fill="#3B3B3B"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.8161 9.81134C21.3218 9.14771 20.7972 8.49267 20.2384 7.89012C20.1928 7.84117 19.6247 7.32275 19.2816 7.12238C19.0502 6.98733 18.8407 6.95428 18.7167 6.95993C18.3561 6.97633 18.1273 7.15961 18.0207 7.48757C17.9187 7.80203 17.8708 8.13261 17.8536 8.47161C17.3709 7.44447 16.9352 6.39114 16.6937 5.29307C16.6737 5.20238 16.656 5.15954 16.6532 5.1518C16.5645 4.92601 16.4265 4.84379 16.3775 4.81165C16.1368 4.65336 15.912 4.66655 15.7191 4.74173C15.6955 4.75065 15.1755 4.9506 15.2677 5.53345C15.2751 5.58046 15.3413 5.9161 15.3589 6.0468C15.3744 6.1604 15.4154 6.26408 15.4756 6.3532C15.9001 7.80586 16.5919 9.19292 17.2547 10.5467C17.3979 10.8392 17.506 11.1387 17.5711 11.4576C17.5903 11.5508 17.5894 11.7594 17.6052 11.8625C17.6321 12.0371 17.6969 12.1564 17.739 12.2179C17.9578 12.5377 18.2451 12.5838 18.5156 12.5183C18.6313 12.4906 18.8634 12.4254 19.0191 12.1017C19.3691 11.3746 19.3754 10.5523 19.3268 9.72114C19.3126 9.47527 19.2918 9.22907 19.2839 8.98641C19.8931 9.6566 20.4579 10.3903 20.9866 11.1219C21.0447 11.2022 21.6373 11.9366 21.799 12.0497C22.2033 12.3335 22.5375 12.1526 22.6823 12.0421C22.9032 11.8733 23.0854 11.5734 23.1732 11.1841C23.2862 10.6804 23.2528 9.97755 23.2603 9.69589C23.3106 7.80017 23.3425 5.81748 23.0111 3.94722C22.9418 3.55465 22.5667 3.29262 22.1742 3.362C21.7816 3.43138 21.5195 3.80679 21.589 4.19901C21.9034 5.97512 21.8639 7.85801 21.8163 9.65769C21.8152 9.69922 21.8155 9.75129 21.8161 9.81134Z" fill="#3B3B3B"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.0222 3.56841C25.2195 4.84575 25.4178 6.11156 25.5227 7.42001C25.5546 7.81755 25.9029 8.11438 26.3005 8.08249C26.6977 8.05058 26.9945 7.70226 26.9626 7.30471C26.8147 5.45932 26.4862 3.69768 26.2289 1.87168C26.1298 1.16592 25.4606 1.22994 25.4194 1.23509C25.3288 1.2464 24.8341 1.32578 24.7888 1.89803C24.786 1.93295 24.7968 2.18153 24.7959 2.27766C24.7935 2.49774 24.7782 2.71211 24.7559 2.93154C24.73 3.18441 24.8377 3.42021 25.0222 3.56841Z" fill="#3B3B3B"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M26.511 11.1173C26.5955 10.8982 26.5713 10.6417 26.424 10.4364C26.1913 10.1126 25.7399 10.0387 25.416 10.2714C25.1169 10.4861 25.049 10.7629 25.0702 11.1068C25.0949 11.5047 25.4382 11.8077 25.8361 11.7827C26.1999 11.7603 26.4843 11.4711 26.511 11.1173Z" fill="#3B3B3B"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.1883 24.34C12.1226 24.1805 12.0697 24.0545 12.057 24.0274C11.4505 22.7402 10.7862 21.4666 10.0545 20.246C9.84951 19.9041 9.40573 19.793 9.06376 19.998C8.72179 20.203 8.61067 20.6468 8.81569 20.9888C9.52273 22.168 10.1642 23.3991 10.7505 24.6431C10.7952 24.7379 11.0828 25.5751 11.3006 25.9293C11.498 26.2499 11.76 26.3742 11.9121 26.4047C12.1537 26.4531 12.539 26.3852 12.869 25.9883C13.2999 25.4703 13.8962 24.0583 13.9945 23.8239C14.1748 23.3926 14.332 22.9385 14.4788 22.4965C14.7571 21.6581 14.9363 20.7994 15.1014 19.9335C15.1762 19.5417 14.9188 19.1634 14.527 19.0886C14.1356 19.0141 13.757 19.2715 13.6825 19.6629C13.5293 20.4662 13.3663 21.2635 13.108 22.0411C12.9724 22.449 12.8281 22.8687 12.6618 23.2667C12.6117 23.386 12.4152 23.8793 12.1883 24.34Z" fill="#3B3B3B"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4_227">
                                    <rect width="26" height="26" fill="white" transform="translate(1.31836) rotate(2.90577)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                <img src="assets/img/airmax2017.png" className="img-fluid img-thumbnail a-img-shoes-pictures align-self-center" alt="Air Force 1 Mid made for You" />
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="row products-container">
                  <div className="col" id="o-div-second-line">
                      <div className="justify-content-between d-flex">
                        <span>All shoes</span>
                      </div>
                      <div className="d-flex flex-row m-div-sl flex-wrap" id="productContainer">
                      </div>
                    </div>
                </div>
                <div id="pub">
                  <model-viewer 
                  src="./assets/img/models/yeezy.glb" 
                  className="mv-content"
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