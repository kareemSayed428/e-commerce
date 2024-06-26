import './styleSponser.css';
import img_sponser from './image/sponser.png';
import { motion } from "framer-motion";

function Sponser() {

    return(
        <>
        <div className="sponser">
            <div className='content'>
                <motion.img
                    initial={{x: '100vw'}}
                    animate={{x: '-100vw'}}
                    transition={{duration: 30, repeat: Infinity, repeatType: "loop", ease: 'linear'}}
                    
                
                    src={img_sponser}>
                </motion.img>
            </div>
        </div>
        
        </>
    );
};


export default Sponser;