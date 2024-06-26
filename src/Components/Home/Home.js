import './styleHome.css';
import SlideShow from "./SlideShow/SlideShow";
import Sponser from './Sponser/Sponser';
import NewArrival from './New Arrival/NewArrival';
import SaleNow from './Sale Now/SaleNow';
import CategoryInHome from './Category in home/CategoryInHome';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Home() {
    return(
        <>
            <div className="home">
                
                <section>
                    <SlideShow></SlideShow>
                    <Sponser></Sponser>
                </section>

                <section>
                    <NewArrival></NewArrival>
                </section>

                <section>
                    <SaleNow></SaleNow>
                </section>

                <section>
                    <CategoryInHome></CategoryInHome>
                </section>

                <section>
                    <Contact></Contact>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </>
    );
};


export default Home;