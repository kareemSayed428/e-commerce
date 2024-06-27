import './styleNavbar.css';

import logo_img from './image/logo.png';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    //console.log(toggle);

    const product = useSelector(state => state.cart.products);
    console.log(product);

    return(
        <>
        <div className='navbar' style={toggle === true ? {height: '230px', transition: '0.5s'} : {height: '60px', transition: '0.5s'}}>
            <nav>
                <div className='logo'>
                    <Link to='/'><img src={logo_img}></img></Link>
                </div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='MenClothes'>Men's Clothes</Link></li>
                    <li><a>Another Section</a></li>
                    <li><a>Another Section</a></li>
                    <li><a>Another Section</a></li>

                    {/* Count From Redex in large screen */}
                    <Link to='RedexForProduct'><i className="fa-solid fa-circle">{product.length}</i><i className="fa-solid fa-cart-shopping"></i></Link>
                    

                </ul>
                <div onClick={()=>{
                    setToggle(!toggle);
                }} className='toggle'>
                    <div className='circle'>
                        <motion.p
                            initial={{width: 0, height: 0}}
                            animate={toggle === true ? {width: 1800, height: 1500, x: -1300, y: -200} : null}
                            transition={{duration: 0.5}}
                        
                        ></motion.p>
                    </div>
                   
                    <div className='bar'>
                        <motion.span 
                            initial={{rotate: 0, x: -13}}
                            animate={toggle === true ? {rotate: 45, x: -13 ,y: 5} : null}
                            transition={{duration: 0.5}}
                        
                        ></motion.span>
                        <motion.span
                            initial={{rotate: 0, x: -10}}
                            animate={toggle === true ? {rotate: -45, width: 25, x: -15, y: 1} : null}
                            transition={{duration: 0.5}}
                        
                        ></motion.span>

                        {/* Count From Redex in small screen */}
                        <div className='link-to-redex'>
                            
                        <Link to='RedexForProduct'>
                            <i className="fa-solid fa-circle">{product.length}</i>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        </div>

                    </div>
                    
                </div>

                <div className='link-toggle'>
                    <motion.li
                        initial={{x: -100, opacity: 0}}
                        animate={toggle === true ? {x: 0, opacity: 1} : null}
                        transition={{duration: 0.3, delay: 0.3}}
                    
                    ><Link onClick={()=>{setToggle(false)}} to='/'>Home</Link></motion.li>
                    <motion.li
                        initial={{x: -100, opacity: 0}}
                        animate={toggle === true ? {x: 0, opacity: 1} : null}
                        transition={{duration: 0.3, delay: 0.6}}
                    
                    ><Link onClick={()=>{setToggle(false)}} to='MenClothes'>Men's Clothes</Link></motion.li>
                    <motion.li
                        initial={{x: -100, opacity: 0}}
                        animate={toggle === true ? {x: 0, opacity: 1} : null}
                        transition={{duration: 0.3, delay: 0.9}}
                    
                    ><a onClick={()=>{setToggle(false)}}>Women's Clothes</a></motion.li>
                    <motion.li
                        initial={{x: -100, opacity: 0}}
                        animate={toggle === true ? {x: 0, opacity: 1} : null}
                        transition={{duration: 0.3, delay: 1.2}}
                    
                    ><a onClick={()=>{setToggle(false)}}>Boys Clothes</a></motion.li>
                    <motion.li
                        initial={{x: -100, opacity: 0}}
                        animate={toggle === true ? {x: 0, opacity: 1} : null}
                        transition={{duration: 0.3, delay: 1.5}}

                    ><a onClick={()=>{setToggle(false)}}>Girls Clothes</a></motion.li>
                </div>
                
            </nav>
        </div>
        </>
    );
};


export default Navbar;