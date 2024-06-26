import './styleMenClothes.css';
import img_man from './image/man01.png';
import img_exProduct from './image/exProduct.png';
import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Single from './Single';


export const urlContext = createContext();

function MenClothes() {
    const [product, setProduct] = useState([]);
    console.log(product);

    const [urlUpdate, setUrlUpdate] = useState('products');
    const [checkedHat, setCheckedHat] = useState(false);
    const [checkedShirt, setCheckedShirt] = useState(false);
    const [checkedJeans, setCheckedJeans] = useState(false);
    //console.log(checkedHat);



     const newNum = [];
     const newPrice = [];

     const [array, setArray] = useState([]);
     //console.log(array[0].attributes.price);

     const newArray = array.map((e)=>{
        console.log(e.attributes.price);
        return newNum.push(e.attributes.price);
        
     });
     console.log(newNum);
     console.log(newNum.sort(function(a, b){return a - b}));
    

    //const myurl = 'http://localhost:1337/api/products?populate=*';
    const myToken = 'd35fa7e3dca747b4fffb86d24ab35f392558ec706b1373d02da7883bb8580bc614060959c559901abfa299e63a10fece202633f0145898aeb4884161cfc28af2c291c4d1182fa2c5f16107a8dc5f6c7ac4362ed60fe321d22a4f18166f93464c3e782ef6f2a4497853f1e7461e6d40a3957417280fb2f8114b3f940dfd189504';

    useEffect(()=>{
        const data = async()=>{
            const getData = await axios.get(`http://localhost:1337/api/${urlUpdate}?populate=*`,
                {
                    headers: {
                        Authorization: 'bearer ' + myToken,  // space after 'bearer '
                    },
                }
                
            )
            //console.log(getData.data.data); 
            //console.log(getData.data.data.attributes); 
            setProduct(getData.data.data); 
            setArray(getData.data.data);
        }
        
        data();

    }, [urlUpdate]);

    return(
        <>
        <div className='MenClothes'>
            <div className='container'>

                {/* product-filter */}
                <div className='product-filter'>
                    <div className='content'>
                        <h3>Product Categories</h3>
                        <div className='check'>

                            <div className='checkbox-div'>
                                <input onClick={()=>{
                                    setCheckedHat(!checkedHat);
                                    
                                    checkedHat === false ? setUrlUpdate('hat-men') : setUrlUpdate('products');

                                }} type='checkbox' id='1'></input>
                                <label htmlFor='1'>Hats</label>
                            </div>

                            <div className='checkbox-div'>
                                <input onClick={()=>{
                                    setCheckedShirt(!checkedShirt);

                                    checkedShirt === false ? setUrlUpdate('t-shirts') : setUrlUpdate('products');


                                }} type='checkbox' id='2'></input>
                                <label htmlFor='2'>T-shirt</label>
                            </div>

                            {/* <div className='checkbox-div'>
                                <input type='checkbox' id='3'></input>
                                <label htmlFor='3'>Shoes</label>
                            </div> */}

                            <div className='checkbox-div'>
                                <input onClick={()=>{
                                    setCheckedJeans(!checkedJeans);

                                    checkedJeans === false ? setUrlUpdate('jeans') : setUrlUpdate('products');

                                }} type='checkbox' id='4'></input>
                                <label htmlFor='4'>Jeans</label>
                            </div>
                            
                        </div>

                        {/* <div className='filter-by-price'>
                            <h4>Filter by price</h4>
                            <span>0</span>
                            <input type='range'></input>
                            <span>1000</span>
                        </div> */}

                        {/* <div className='sort-by'>
                            <h4>Sort by</h4>
                            <div className='radio-div'>
                                <input onClick={()=>{
                                    console.log('low');


                                }} type='radio' id='5' name='price'></input>
                                <label htmlFor='5'>Price (Lower First)</label>
                            </div>


                            <div className='radio-div'>
                                <input type='radio' id='6' name='price'></input>
                                <label htmlFor='6'>Price (Hights First)</label>
                            </div>
                            
                        </div> */}
                    </div>
                    
                </div>

                {/* product-body */}
                <div className='product-body'>
                    <div className='head-img'>
                        <img src={img_man}></img>
                    </div>
                    <div className='all-product'>

                        <div className='single-product'>
                            {
                                product.map((e)=>{
                                    return(
                                        
                                        <div key={e.id}>
                                            <Link to={`/Details/${e.id}`}>
                                            
                                            <img src={`http://localhost:1337${e.attributes.image.data.attributes.url}`}></img>
                                            </Link>

                                            <h4>{(e.attributes.title).slice(0, 25)}</h4>
                                            <div className='price'>
                                                <p>{e.attributes.old_price}$</p>
                                               
                                                <h5>{e.attributes.price}$</h5>
                                            </div>
                                        </div>
                                        
                                        
                                    )
                                })
                            }
                        </div>

                        {/* <div className='single-product'>
                            <img src={img_exProduct}></img>
                            <h4>Title-Product</h4>
                            <div className='price'>
                                <p>70$</p>
                                <h5>50$</h5>
                            </div>
                        </div> */}

                        
                        
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    );
};


export default MenClothes;