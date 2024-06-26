import './styleSaleNow.css';

import img_girl from './image/girleInYellow.png';
import img_star_1 from './image/Star 5.png';
import img_star_2 from './image/Star 6.png';
import img_star_3 from './image/Star 7.png';
import img_star_4 from './image/Star 8.png';

function SaleNow() {
    return(
        <>
        <div className='sale-now'>
            <div className='img-left'>
                <img src={img_girl}></img>
                <img src={img_star_1}></img>
                <img src={img_star_2}></img>
                <img src={img_star_3}></img>
                <img src={img_star_4}></img>
            </div>
            <div className='sale-content'>
                <h1>PAYDAY</h1>
                <h1>SALE NOW</h1>
                <p>
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                </p>
                <h5>1 June - 10 June 2024</h5>
                <p>*Terms & Conditions apply</p>
                <button><a>SHOP NOW</a></button>
            </div>
        </div>
        </>
    );
};


export default SaleNow;