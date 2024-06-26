import './styleRedexProduct.css';
import Img_Test from './image/Test.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './cartReducer';
import { useState } from 'react';

function RedexForProduct() {
    const product = useSelector(state => state.cart.products);
    console.log(product);

    const totalCash = product.map((e)=>{
        //console.log([(e.quantity)*(e.price)]);
        return (e.quantity)*(e.price);
    });
    console.log(totalCash);

    const sum = totalCash.reduce(
        (previousValue, currentValue, index) => previousValue + currentValue, 
        0);
        console.log(sum); 

    

    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);
    console.log(totalPrice);

    return(
        <>
        <div className='redex-product'>
            <div className='content'>
                <table>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>

                    {
                        product.map((e)=>{
                            return(
                                <>
                                    <tr>
                                        <td><img src={`${e.image}`}></img></td>
                                        <td>{e.title}</td>
                                        <td>$ {e.price}</td>
                                        <td>{e.quantity}</td>
                                        <td>$ {(e.price)*(e.quantity)}</td>
                                        <td><i 
                                                onClick={()=>{dispatch(removeFromCart({
                                                    id: e.id,
                                                }))}}

                                        className="fa-solid fa-xmark"></i></td>
                                        {
                                            //setTotalPrice(e.price)
                                        }
                                    </tr>
                                    <span className='hr'></span>
                                </>
                            )
                        })
                    }

                </table>

                <div className='cash'>
                    <h1>Cart Totals</h1>
                    <div className='calculate'>
                        <p>Subtotal</p>
                        <h5>{sum} $</h5>
                    </div>

                    <span className='hr'></span>

                    <div className='calculate'>
                        <p>Descound</p>
                        <h5>No Discound</h5>
                    </div>

                    <span className='hr'></span>

                    <div className='calculate'>
                        <h3>Total</h3>
                        <h5>{sum} $</h5>
                    </div>

                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
        </>
    );
};


export default RedexForProduct;