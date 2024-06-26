import './styleSlideShow.css';
import imgOne_1 from './image/01.png';
import imgOne_2 from './image/02.png';
import imgOne_3 from './image/03.png';
import imgOne_4 from './image/04.png';
import imgOne_5 from './image/05.png';
import imgTow_1 from './image/tow01.png';
import imgTow_2 from './image/tow02.png';
import imgTow_3 from './image/tow03.png';
import imgTow_4 from './image/tow04.png';
import imgTow_5 from './image/tow05.png';
import imgThree_1 from './image/three01.png';
import imgThree_2 from './image/three02.png';
import imgThree_3 from './image/three03.png';
import imgThree_4 from './image/three04.png';
import imgThree_5 from './image/three05.png';
import imgFour_1 from './image/four01.png';
import imgFour_2 from './image/four02.png';
import imgFour_3 from './image/four03.png';
import imgFour_4 from './image/four04.png';
import imgFour_5 from './image/four05.png';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import imgSmallOne_01 from './image/smallScreen/smallOne01.png';
import imgSmallOne_1 from './image/smallScreen/smallOne1.png';
import imgSmallOne_2 from './image/smallScreen/smallOne2.png';
import imgSmallOne_3 from './image/smallScreen/smallOne3.png';
import imgSmallTow_1 from './image/smallScreen/smallTow1.png';
import imgSmallTow_2 from './image/smallScreen/smallTow2.png';
import imgSmallTow_3 from './image/smallScreen/smallTow3.png';
import imgSmallThree_1 from './image/smallScreen/smallThree1.png';
import imgSmallThree_2 from './image/smallScreen/smallThree2.png';
import imgSmallThree_3 from './image/smallScreen/smallThree3.png';

function SlideShow() {
    const [count, setCount] = useState(1);
            

    useEffect(() => {
        
            const interval = setInterval(() => {
                
                setCount((count) => count + 1);
                console.log(count);
    
            }, 2400);

            return () => clearInterval(interval);
        
      }, []);
    

    
    

    return(
        <>
        <div className='slide-show'>
            
            {count > 3 ? setCount(1) : null}
            {/* {count ===3 ? imageTow.current.style.display = 'none' : imageTow.current.style.display = 'flex'} */}
            
            {/* <div className='list-image' style={count === 4 ? {zIndex: '4'} : {zIndex: '3'}}>
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 4 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 4 ? {scale: 1} : null} transition={{duration: 1}} src={imgFour_1}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 4 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 4 ? {scale: 1} : null} transition={{duration: 1}} src={imgFour_2}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 4 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 4 ? {scale: 1} : null} transition={{duration: 1}} src={imgFour_3}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 4 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 4 ? {scale: 1} : null} transition={{duration: 1}} src={imgFour_4}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 4 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 4 ? {scale: 1} : null} transition={{duration: 1}} src={imgFour_5}></motion.img>
                </motion.div>
            </div> */}

            {/* For Small Screen */}
            <div className='small-screen' style={count === 3 ? {zIndex: '3'} : {zIndex: '1'}}>
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallThree_1}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallThree_2}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallThree_3}></motion.img>
                </motion.div>
            </div>

            <div className='small-screen' style={count === 2 ? {zIndex: '3'} : {zIndex: '2'}}>
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallTow_1}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallTow_2}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallTow_3}></motion.img>
                </motion.div>
            </div>

            <div className='small-screen' style={count === 1 ? {zIndex: '3'} : {zIndex: '-4'}}>
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallOne_1}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallOne_2}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null} transition={{duration: 1}} src={imgSmallOne_3}></motion.img>
                </motion.div>
            </div>




            {/* For Large Screen */}
            <div className='list-image' style={count === 3 ? {zIndex: '3'} : {zIndex: '1'}}>
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgThree_1}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgThree_2}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgThree_3}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgThree_4}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 3 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 3 ? {scale: 1} : null} transition={{duration: 1}} src={imgThree_5}></motion.img>
                </motion.div>
            </div>

            <div className='list-image' style={count === 2 ? {zIndex: '3'} : {zIndex: '2'}}>
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgTow_1}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgTow_2}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgTow_3}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgTow_4}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 2 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 2 ? {scale: 1} : null} transition={{duration: 1}} src={imgTow_5}></motion.img>
                </motion.div>
            </div>

            <div className='list-image' style={count === 1 ? {zIndex: '3'} : {zIndex: '-4'}} >
                <motion.div 
                    initial={{scaleX: 1}}
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}}
                    transition={{duration: 0.5, delay: 2}}

                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null} transition={{duration: 1}} src={imgOne_1}></motion.img>
                    </motion.div>

                    <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null} transition={{duration: 1}} src={imgOne_2}></motion.img>
                    </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null}  transition={{duration: 1}} src={imgOne_3}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null}  transition={{duration: 1}} src={imgOne_4}></motion.img>
                </motion.div>

                <motion.div 
                    initial={{scaleX: 1}} 
                    animate={count === 1 ? {scaleX: 0} : {scaleX: 1}} 
                    transition={{duration: 0.5, delay: 2}} 
                    
                    className='image'>
                    <motion.img initial={{scale: 1.3}} animate={count === 1 ? {scale: 1} : null}  transition={{duration: 1}} src={imgOne_5}></motion.img>
                </motion.div>
            </div>
            
        </div>

        </>
    );
};


export default SlideShow;