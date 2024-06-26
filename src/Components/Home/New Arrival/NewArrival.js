import './styleNewArrival.css';
import img_1 from './image/01.png';
import img_2 from './image/02.png';
import img_3 from './image/03.png';
import { useState } from 'react';
import { useRef } from 'react';
import { motion } from "framer-motion";
import img_product_1 from './image/product/Hoodie.png';
import img_productCircle_01 from './image/product/HoodieCircle01.png';
import img_productCircle_02 from './image/product/HoodieCircle02.png';
import img_productCircle_03 from './image/product/HoodieCircle03.png';
import img_product_2 from './image/product/Coats .png';
import img_productCircleTow_01 from './image/product/Coats 1.png';
import img_productCircleTow_02 from './image/product/Coats 2.png';
import img_productCircleTow_03 from './image/product/Coats 3.png';
import img_productCircleTow_04 from './image/product/Coats 4.png';
import img_product_3 from './image/product/T-Shirt.png';
import img_productCircleThree_01 from './image/product/T-Shirt1.png';
import img_productCircleThree_02 from './image/product/T-Shirt2.png';
import img_productCircleThree_03 from './image/product/T-Shirt3.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redex/cartReducer';

function NewArrival() {
    const [showProduct, setShowProduct] = useState(false);
    //console.log(showProduct);

    const [showProductTow, setShowProductTow] = useState(false);

    const [showProductThree, setShowProductThree] = useState(false);

    const newArrivalContainer = useRef(null);



    // To use Redux => To Add Ptoduct
    const product = useSelector(state => state.cart.products);
    console.log(product);

    const dispatch = useDispatch();


    return(
        <>
        <div className='new-arrival' ref={newArrivalContainer}>
                    {/* *** in large screen product 3 *** */}
                    {/* background color when click on product (this for product 3) */}
                    <motion.span 
                        initial={{width: 50, height: 50, borderRadius: '50%', backgroundColor: '#94d2d1', x: 1150, y: 300, opacity: 0}} 
                        animate={showProductThree === true ? {width: 1500, height: 1500, borderRadius: '0%', backgroundColor: '#94d2d1', x: 0, y: 0, opacity: 1} : null} 
                        transition={{duration: 0.5}}
                        className='span-product-one'>
                    </motion.span>

                    {/* button to back to all products (this for product 3)*/}
                    <motion.div
                    onClick={()=>{setShowProductThree(false)}}

                    initial={{x: -200, opacity: 0}}
                    animate={showProductThree === true ? {x: 0, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='back-to-all-product'>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </motion.div>

                    {/* product-details-board (this for product 3)*/}
                    <motion.div
                    initial={{x: '100%', opacity: 0}}
                    animate={showProductThree === true ? {x: '74%', opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='product-details-board hidden-for-small-screen'>
                        <div className='container'>
                            <div className='head-product'>
                                <h1>Tees & T-Shirt</h1>
                                <p>Price: 20$</p>
                                <img src={img_product_3}></img>
                            </div>
                            <div className='body-product'>
                                <h3>Choose Your Favorite Color</h3>
                                <div className='circle-image'>
                                    <img src={img_productCircleThree_01}></img>
                                    <img src={img_productCircleThree_02}></img>
                                    <img src={img_productCircleThree_03}></img>
                                </div>
                            </div>
                            <div className='add-to-card-product'>
                            <button style={{zIndex: '100'}} onClick={()=>{

                                dispatch(addToCart({
                                    image: img_product_3,
                                    price: 20,
                                    quantity: 1,
                                    title: 'Tees & T-Shirt',
                                    id: 100,
                                }));

                                }}>Add To Card <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                        
                    </motion.div>

                    {/* *** in small screen product 3*** */}
                    {/* product-details-board (this for product 3)*/}
                    <motion.div
                    initial={{x: '100%', opacity: 0}}
                    animate={showProductThree === true ? {x: '90%', opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='product-details-board show-for-small-screen-in-media'>
                        <div className='container'>
                            <div className='head-product'>
                                <h1>Tees & T-Shirt</h1>
                                <p>Price: 20$</p>
                                <img src={img_product_3}></img>
                            </div>
                            <div className='body-product'>
                                <h3>Choose Your Favorite Color</h3>
                                <div className='circle-image'>
                                    <img src={img_productCircleThree_01}></img>
                                    <img src={img_productCircleThree_02}></img>
                                    <img src={img_productCircleThree_03}></img>
                                </div>
                            </div>
                            <div className='add-to-card-product'>
                            <button onClick={()=>{

                                dispatch(addToCart({
                                    image: img_product_3,
                                    price: 20,
                                    quantity: 1,
                                    title: 'Tees & T-Shirt',
                                    id: 100,
                                }));

                                }}>Add To Card <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                        
                    </motion.div>





                    {/* *** in large screen product 2 *** */}
                    {/* background color when click on product (this for product 2) */}
                    <motion.span 
                        initial={{width: 50, height: 50, borderRadius: '50%', backgroundColor: '#b199c6', x: 600, y: 300, opacity: 0}} 
                        animate={showProductTow === true ? {width: 1500, height: 1500, borderRadius: '0%', backgroundColor: '#b199c6', x: 0, y: 0, opacity: 1} : null} 
                        transition={{duration: 0.5}}
                        className='span-product-one'>

                    </motion.span>

                    {/* button to back to all products (this for product 2)*/}
                    <motion.div
                    onClick={()=>{setShowProductTow(false)}}

                    initial={{x: -200, opacity: 0}}
                    animate={showProductTow === true ? {x: 0, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='back-to-all-product'>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </motion.div>

                    {/* product-details-board (this for product 2)*/}
                    <motion.div
                    initial={{x: '100%', opacity: 0}}
                    animate={showProductTow === true ? {x: '74%', opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='product-details-board hidden-for-small-screen'>
                        <div className='container'>
                            <div className='head-product'>
                                <h1>Coats & Parkas</h1>
                                <p>Price: 30$</p>
                                <img src={img_product_2}></img>
                            </div>
                            <div className='body-product'>
                                <h3>Choose Your Favorite Color</h3>
                                <div className='circle-image'>
                                    <img src={img_productCircleTow_01}></img>
                                    <img src={img_productCircleTow_02}></img>
                                    <img src={img_productCircleTow_03}></img>
                                    <img src={img_productCircleTow_04}></img>
                                    
                                </div>
                            </div>
                            <div className='add-to-card-product'>
                            <button onClick={()=>{

                                dispatch(addToCart({
                                    image: img_product_2,
                                    price: 30,
                                    quantity: 1,
                                    title: 'Coats & Parkas',
                                    id: 101,
                                }));

                                }}>Add To Card <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                        
                    </motion.div>

                    {/* *** in small screen product 2*** */}
                    {/* product-details-board (this for product 2)*/}
                    <motion.div
                    initial={{x: '100%', opacity: 0}}
                    animate={showProductTow === true ? {x: '90%', opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='product-details-board show-for-small-screen-in-media'>
                        <div className='container'>
                            <div className='head-product'>
                                <h1>Coats & Parkas</h1>
                                <p>Price: 30$</p>
                                <img src={img_product_2}></img>
                            </div>
                            <div className='body-product'>
                                <h3>Choose Your Favorite Color</h3>
                                <div className='circle-image'>
                                    <img src={img_productCircleTow_01}></img>
                                    <img src={img_productCircleTow_02}></img>
                                    <img src={img_productCircleTow_03}></img>
                                    <img src={img_productCircleTow_04}></img>
                                    
                                </div>
                            </div>
                            <div className='add-to-card-product'>
                            <button onClick={()=>{

                                    dispatch(addToCart({
                                        image: img_product_2,
                                        price: 30,
                                        quantity: 1,
                                        title: 'Coats & Parkas',
                                        id: 101,
                                    }));

                                    }}>Add To Card <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                        
                    </motion.div>






                    {/* *** in large screen product 1*** */}
                    {/* background color when click on product (this for product 1) */}
                    <motion.span 
                        initial={{width: 50, height: 50, borderRadius: '50%', backgroundColor: '#a2a1a4', x: 200, y: 300, opacity: 0}} 
                        animate={showProduct === true ? {width: 1500, height: 1500, borderRadius: '0%', backgroundColor: '#a2a1a4', x: 0, y: 0, opacity: 1} : null} 
                        transition={{duration: 0.5}}
                        className='span-product-one hidden-for-small-screen'>
                        
                    </motion.span>

                    {/* button to back to all products (this for product 1)*/}
                    <motion.div
                    onClick={()=>{setShowProduct(false)}}

                    initial={{x: -200, opacity: 0}}
                    animate={showProduct === true ? {x: 0, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='back-to-all-product hidden-for-small-screen'>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </motion.div>

                    {/* product-details-board (this for product 1)*/}
                    <motion.div
                    initial={{x: '100%', opacity: 0}}
                    animate={showProduct === true ? {x: '74%', opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='product-details-board hidden-for-small-screen'>
                        <div className='container'>
                            <div className='head-product'>
                                <h1>Hoodies & Sweetshirt</h1>
                                <p>Price: 50$</p>
                                <img src={img_product_1}></img>
                            </div>
                            <div className='body-product'>
                                <h3>Choose Your Favorite Color</h3>
                                <div className='circle-image'>
                                    <img src={img_productCircle_01}></img>
                                    <img src={img_productCircle_02}></img>
                                    <img src={img_productCircle_03}></img>
                                </div>
                            </div>
                            <div className='add-to-card-product'>
                                <button onClick={()=>{
                                    
                                    dispatch(addToCart({
                                        image: img_product_1,
                                        price: 50,
                                        quantity: 1,
                                        title: 'Hoodies & Sweetshirt',
                                        id: 102,
                                    }));

                                }}>Add To Card <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                        
                    </motion.div>


                    {/* *** in small screen product 1*** */}
                    {/* background color when click on product (this for product 1) */}
                    <motion.span 
                        initial={{width: 50, height: 50, borderRadius: '50%', backgroundColor: '#a2a1a4', x: 200, y: 300, opacity: 0}} 
                        animate={showProduct === true ? {width: 1500, height: 1500, borderRadius: '0%', backgroundColor: '#a2a1a4', x: 0, y: 0, opacity: 1} : null} 
                        transition={{duration: 0.5}}
                        className='span-product-one show-for-small-screen-in-media'>
                        
                    </motion.span>

                    {/* button to back to all products (this for product 1)*/}
                    <motion.div
                    onClick={()=>{setShowProduct(false)}}

                    initial={{x: -200, opacity: 0}}
                    animate={showProduct === true ? {x: 0, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    
                    className='back-to-all-product show-for-small-screen-in-media'>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </motion.div>

                    {/* product-details-board (this for product 1)*/}
                    <motion.div
                    initial={{x: '100%', opacity: 0}}
                    animate={showProduct === true ? {x: '90%', opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='product-details-board show-for-small-screen-in-media'>
                        <div className='container'>
                            <div className='head-product'>
                                <h1>Hoodies & Sweetshirt</h1>
                                <p>Price: 50$</p>
                                <img src={img_product_1}></img>
                            </div>
                            <div className='body-product'>
                                <h3>Choose Your Favorite Color</h3>
                                <div className='circle-image'>
                                    <img src={img_productCircle_01}></img>
                                    <img src={img_productCircle_02}></img>
                                    <img src={img_productCircle_03}></img>
                                </div>
                            </div>
                            <div className='add-to-card-product'>
                                <button onClick={()=>{

                                        dispatch(addToCart({
                                            image: img_product_1,
                                            price: 50,
                                            quantity: 1,
                                            title: 'Hoodies & Sweetshirt',
                                            id: 102,
                                        }));
                                        
                                }}>Add To Card <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                        
                    </motion.div>
                    







            {/* head of component (this for all products)*/}
            <motion.div
            initial={{x: -200, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}
            
            className='head'>
                        <h1>New Arrivals</h1>
                        <div className='svg-arrow'>
                            <svg viewBox="-28.7 -28.7 344.40 344.40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#EBD96B" transform="rotate(-45)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path d="M156.25 265.656C157.94 265.444 158.573 265.656 159.207 265.444C197.847 242.174 224.029 209.172 233.953 164.747C236.487 153.535 236.065 141.899 233.109 130.476C226.985 105.936 206.504 89.0121 181.377 87.5312C168.286 86.685 155.617 88.1659 144.215 95.3586C143.37 101.493 142.737 107.628 141.47 113.34C139.359 122.648 134.502 130.264 125.845 134.918C119.51 138.515 113.176 138.515 109.798 135.13C105.363 130.687 105.364 124.764 108.108 119.898C111.909 113.129 116.554 106.782 121.411 100.859C124.578 97.051 128.801 93.8777 132.602 90.7045C129.012 66.7994 106.419 56.645 79.3921 66.5878C78.5475 69.9726 77.7029 73.569 76.6472 76.9537C72.4242 89.4352 64.6117 98.9549 51.9427 103.397C47.0863 105.09 41.8075 105.724 37.5845 101.282C34.4173 97.8972 34.4173 91.9738 37.7957 86.0504C43.2856 76.7422 51.5204 70.1842 60.3887 64.4723C63.5559 62.5684 66.7232 60.6644 69.8904 58.972C65.6674 21.9508 32.517 -4.28131 0 10.5272C0.211149 7.77702 -1.29001e-05 5.44997 0.844584 4.18067C1.90033 2.69982 4.22297 1.85363 6.12332 1.43053C24.071 -1.95427 40.7518 0.161227 54.4765 13.2773C64.8228 23.0086 71.7908 34.8554 76.4361 48.3946C77.0695 50.2985 77.703 52.2024 78.5476 54.1064C78.5476 54.3179 78.9698 54.5295 79.8144 55.1641C81.7147 54.9526 84.0374 54.9526 86.36 54.5295C114.654 50.087 129.434 57.7027 142.526 84.1464C145.06 83.3002 148.016 82.454 150.761 81.3963C167.019 75.896 183.278 75.4729 199.747 80.9732C226.563 89.8583 243.877 112.917 245.778 142.111C246.833 157.977 244.089 173.209 238.388 188.017C224.452 223.769 201.648 251.905 167.441 270.31C165.752 271.368 163.852 272.214 162.163 273.272C161.951 273.483 161.74 273.906 161.107 275.176C168.286 276.868 175.043 276.233 181.8 275.81C188.345 275.599 195.102 274.964 202.281 274.541C201.648 280.041 198.691 282.157 195.102 283.426C190.879 284.695 186.656 286.388 182.433 286.599C171.031 287.023 159.418 287.234 147.804 286.599C138.725 285.965 136.191 281.099 140.203 273.695C148.86 258.04 157.728 242.386 166.597 226.731C168.075 224.192 169.975 222.077 172.298 219.115C176.31 223.769 174.62 227.154 173.142 230.327C167.23 241.751 161.951 253.175 156.25 265.656ZM43.919 94.9355C58.4883 93.0315 67.5677 83.7233 68.2012 70.6073C58.4883 76.9537 49.1978 82.6656 43.919 94.9355ZM115.288 127.726C127.745 124.764 133.658 116.302 132.391 103.397C124.367 110.167 117.399 116.514 115.288 127.726Z"
                                        fill="#EBD96B">
                                    </path> 
                                </g>
                            </svg>
                        </div>
            </motion.div>


            {/* all products */}
            <div className='content'>
                {/* Product 1 */}
                <motion.div 
                // initial={{y: 150}}
                // whileInView={{y: 0}}
                // transition={{duration: 0.3, ease: 'easeInOut'}}
                
                onClick={()=>{
                    setShowProduct(true);

                }} className='image'                    
                    style={showProductTow || showProductThree === true ? {visibility: 'hidden', opacity: '0', transition: '0.1s'} : showProduct === true ? {filter: 'brightness(1)'} : {visibility: 'visible', opacity: '1', transition: '2s', filter: 'brightness(0.5)'}}>

                    {/* image in motion in large screen */}
                    <motion.img
                    className='hidden-for-small-screen'
                    initial={{x: 0}}
                    animate={showProduct === true ? {x: 200} : null}
                    transition={{duration: 0.5}}
                    
                    src={img_1}></motion.img>

                    {/* image in motion in small screen screen */}
                    <motion.img
                    className='show-for-small-screen-in-media'
                    initial={{x: 0}}
                    animate={showProduct === true ? {x: 0} : null}
                    transition={{duration: 0.5}}
                    
                    src={img_1}></motion.img>

                    {/* title in motion in large screen */}
                    <motion.div
                    initial={{x: -150, y: -200, opacity: 0}}
                    animate={showProduct === true ? {x: 30, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='title-in-motion hidden-for-small-screen' style={{position: 'absolute', fontSize: '30px', color: 'white'}}>
                        <h1>Hoodies & <br></br>Sweetshirt</h1>
                    </motion.div>

                    {/* title in motion in small screen */}
                    <motion.div
                    initial={{x: -150, y: -200, opacity: 0}}
                    animate={showProduct === true ? {x: 30, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='title-in-motion show-for-small-screen-in-media' style={{position: 'absolute', fontSize: '30px', color: 'white'}}>
                        <h1>Hoodies & <br></br>Sweetshirt</h1>
                    </motion.div>

                    <div className='title'>
                        
                        <div className='left' style={showProduct === true ? {display: 'none'} : null}>
                            <h3>Hoodies & Sweetshirt</h3>
                            <p>Explore Now!</p>
                        </div>
                        <div className='right' style={showProduct === true ? {display: 'none'} : null}>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </motion.div>






                {/* Product 2 */}
                <motion.div 
                //  initial={{y: 150}}
                //  whileInView={{y: 0}}
                //  transition={{duration: 0.3, ease: 'easeInOut'}}
                
                onClick={()=>{
                    setShowProductTow(true);
                    newArrivalContainer.current.scrollLeft = '0';

                }} className='image' 
                    style={showProduct || showProductThree === true ? {visibility: 'hidden', opacity: '0', transition: '0.1s'} : showProductTow === true ? {filter: 'brightness(1)'} : {visibility: 'visible', opacity: '1', transition: '2s', filter: 'brightness(0.5)'}}>
                    
                    {/* image in motion in large screen */}
                    <motion.img
                    className='hidden-for-small-screen'
                    initial={{x: 0}}
                    animate={showProductTow === true ? {x: -100} : null}
                    transition={{duration: 0.5}}
                    
                    src={img_2}></motion.img>

                    {/* image in motion in small screen */}
                    <motion.img
                    className='show-for-small-screen-in-media'
                    initial={{x: 0}}
                    animate={showProductTow === true ? {x: -350} : null}
                    transition={{duration: 0.5}}
                    //style={{position: 'absolute', zIndex: '100', overflow: 'visible'}}
                    
                    src={img_2}></motion.img>

                    {/* title in motion in large screen*/}
                    <motion.div
                    initial={{x: -400, y: -200, opacity: 0}}
                    animate={showProductTow === true ? {x: -210, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='title-in-motion hidden-for-small-screen' style={{position: 'absolute', fontSize: '30px', color: 'white'}}>
                        <h1>Coats & <br></br>Parkas</h1>
                    </motion.div>

                    {/* title in motion in small screen*/}
                    <motion.div
                    initial={{x: -400, y: -200, opacity: 0}}
                    animate={showProductTow === true ? {x: -310, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='title-in-motion show-for-small-screen-in-media' style={{position: 'absolute', fontSize: '30px', color: 'white'}}>
                        <h1>Coats & <br></br>Parkas</h1>
                    </motion.div>

                    <div className='title'>
                        <div className='left' style={showProductTow === true ? {display: 'none'} : null}>
                            <h3>Coats & Parkas</h3>
                            <p>Explore Now!</p>
                        </div>
                        <div className='right' style={showProductTow === true ? {display: 'none'} : null}>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </motion.div>








                {/* Product 3 */}
                <motion.div
                // initial={{y: 150}}
                // whileInView={{y: 0}}
                // transition={{duration: 0.3, ease: 'easeInOut'}}
                
                onClick={()=>{
                    setShowProductThree(true);
                    newArrivalContainer.current.scrollLeft = '0';

                }} className='image'
                    style={showProduct || showProductTow === true ? {visibility: 'hidden', opacity: '0', transition: '0.1s'} : showProductThree === true ? {filter: 'brightness(1)'} : {visibility: 'visible', opacity: '1', transition: '2s', filter: 'brightness(0.5)'}}>
                    {/* image in motion in lage screen */}
                    <motion.img
                    initial={{x: 0}}
                    animate={showProductThree === true ? {x: -400} : null}
                    transition={{duration: 0.5}}
                    className='hidden-for-small-screen'
                    
                    src={img_3}></motion.img>


                    {/* image in motion in small screen */}
                    <motion.img
                    initial={{x: 0}}
                    animate={showProductThree === true ? {x: -660} : null}
                    transition={{duration: 0.5}}
                    className='show-for-small-screen-in-media'
                    
                    src={img_3}></motion.img>

                    {/* title in motion in large screen */}
                    <motion.div
                    initial={{x: -800, y: -200, opacity: 0}}
                    animate={showProductThree === true ? {x: -500, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='title-in-motion hidden-for-small-screen' style={{position: 'absolute', fontSize: '30px', color: 'white'}}>
                        <h1>Tees & <br></br>T-Shirt</h1>
                    </motion.div>

                    {/* title in motion in small screen */}
                    <motion.div
                    initial={{x: -800, y: -200, opacity: 0}}
                    animate={showProductThree === true ? {x: -650, opacity: 1} : null}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    
                    className='title-in-motion show-for-small-screen-in-media' style={{position: 'absolute', fontSize: '30px', color: 'white'}}>
                        <h1>Tees & <br></br>T-Shirt</h1>
                    </motion.div>

                    <div className='title'>
                        <div className='left' style={showProductThree === true ? {display: 'none'} : null}>
                            <h3>Tees & T-Shirt</h3>
                            <p>Explore Now!</p>
                        </div>
                        <div className='right' style={showProductThree === true ? {display: 'none'} : null}>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </div>
        </>
    );
};


export default NewArrival;