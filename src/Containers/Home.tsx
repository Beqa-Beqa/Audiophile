import "./Home.css";
import * as Images from '../Design/Homepage/export';
import HomeBodySection from '../Components/HomeBodySection';
import Footer from '../Components/Footer';
import About from '../Components/About';
import MiniSecContainer from '../Containers/MiniSecContainer';
import { Link } from "react-router-dom";

let Home = (props: {nav: JSX.Element;}) => {
    return (
    <div className='app'>
        <div className='app__header'>
            <div className='app__header-nav'>
                {/* Imported images from design folder homepage */}
                <img src={Images.Audiophile} alt="logo" />
                {/* Creating navigation for homepage utilizing exported navcreator function from app.tsx */}
                {props.nav}
                <img id="shopping-cart" src={Images.ShoppingCart} />
            </div>
            <div className='app__header-description'>
                <div className='app__header-description__text'>
                    <span>NEW PRODUCT</span>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    {/* Setting link to the path of item which it represents */}
                    <Link to="/headphones/XX99 MARK II HEADPHONES">
                        <button name="XX99 MARK II HEADPHONES" type="button" className="product-button">See Product</button>
                    </Link>
                </div>
                <img src={Images.IntroHeadphones} alt="image" />
            </div>
        </div>
        <div className='app__sections'>
            <MiniSecContainer/>
            <HomeBodySection earphones={Images.BigEarphones} />
            <About />
        </div>
        <div className='app__sections-footer'>
            <Footer />
        </div>
    </div>
    );
}

export default Home;