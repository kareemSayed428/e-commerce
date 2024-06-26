import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenClothes, { urlContext } from "./MenClothes";
import axios from "axios";
import './styleSingle.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redex/cartReducer";

function Single() {
    const shareUrl = useContext(urlContext);
    //console.log(shareUrl);

    const params = useParams();

    const [product, setProduct] = useState([]);
    //console.log(product);

    const myurl = `http://localhost:1337/api/products/${params.Id}?populate=*`;
    const myToken = 'd35fa7e3dca747b4fffb86d24ab35f392558ec706b1373d02da7883bb8580bc614060959c559901abfa299e63a10fece202633f0145898aeb4884161cfc28af2c291c4d1182fa2c5f16107a8dc5f6c7ac4362ed60fe321d22a4f18166f93464c3e782ef6f2a4497853f1e7461e6d40a3957417280fb2f8114b3f940dfd189504';

    useEffect(()=>{
        const data = async()=>{
            const getData = await axios.get(myurl,
                {
                    headers: {
                        Authorization: 'bearer ' + myToken,  // space after 'bearer '
                    },
                }
                
            )
            //console.log(getData.data.data); 
            //console.log(getData.data.data.attributes); 
            setProduct(getData.data.data); 
            
        }
        
        data();

    }, []);

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    //console.log(quantity);

    const [count, setCount] = useState(1);
    console.log(count);

    const [itemCart, setItemCart] = useState(false);

    return(
        <>
        <div className="single">
            {/* <h1>Kareem{params.Id}</h1> */}
            <div className="content">
                <div className="left">
                    <img src={`http://localhost:1337${product?.attributes?.image.data.attributes.url}`}></img>
                </div>

                <div className="right">
                    <h1>{product?.attributes?.title}</h1> 
                    <h2>${product?.attributes?.price}</h2> 
                    <p>{product?.attributes?.desc}</p>
                    <label>Quantity:</label>
                    <input type='number' min={1} defaultValue={1} onChange={(e)=>{setQuantity(e.target.value)}}></input>
                    <br></br>
                    <button onClick={()=>{
                        dispatch(addToCart({
                        id: product.id,
                        title: product?.attributes?.title,
                        price: product?.attributes?.price,
                        description: product?.attributes?.desc,
                        image: 'http://localhost:1337' + product?.attributes?.image.data.attributes.url,

                        quantity: quantity,
                        count: count,
                    }));

                    setCount(count + 1);

                    setItemCart(true);
                    
                    }}>Add To Card</button>

                    {itemCart === true ? <p className="item">{itemCart}Item Added To Card<i className="fa-solid fa-circle-check"></i></p> : null }
                    
                </div>
            </div>     
        </div>
        
        </>
    );
};


export default Single;