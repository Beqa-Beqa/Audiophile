import "./Home.css";
import 
    { Audiophile, BigEarphones,
    Earphones, Headphones, IntroHeadphones,
    Path, ShoppingCart, SpeakerTop, Speakers} 
from '../Design/Homepage/export';
import HomeBodySection from '../Components/HomeBodySection';
import Footer from '../Components/Footer';
import About from '../Components/About';
import MiniSecContainer from '../Containers/MiniSecContainer';

let Home = (props: {nav: JSX.Element}) => {
    return (
    <div className='app'>
        <div className='app__header'>
            <div className='app__header-nav'>
                <img src={Audiophile} alt="logo" />
                {props.nav}
                <img id="shopping-cart" src={ShoppingCart} />
            </div>
            <div className='app__header-description'>
                <div className='app__header-description__text'>
                    <span>NEW PRODUCT</span>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="product-button">See Product</button>
                </div>
                <img src={IntroHeadphones} alt="image" />
            </div>
        </div>
        <div className='app__sections'>
            <MiniSecContainer
            earphones={Earphones} headphones={Headphones}
            path={Path} speakers={Speakers} 
            />
            <HomeBodySection speaker={SpeakerTop} earphones={BigEarphones} />
            <About />
        </div>
        <div className='app__sections-footer'>
            <Footer />
        </div>
    </div>
    );
}

export default Home;