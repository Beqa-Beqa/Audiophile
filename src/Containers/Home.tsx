import "../Design/CSS/ContainerStyles/Home.css";
import * as Images from '../Design/Homepage/export';
import HomeBodySection from '../Components/HomeBodySection';
import Footer from '../Components/Footer';
import About from '../Components/About';
import MiniSecContainer from '../Containers/MiniSecContainer';
import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import { BlurElement } from "../App";
import { StorageObjectElement } from "../Data/Interface";

let Home = (props: {setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>;cartStorage: StorageObjectElement[]; toggleCart: boolean; setToggleCart: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const blurElement = BlurElement();
    return (
    <>
        {props.toggleCart && blurElement}
        <div className='app'>
            <div className='app__header'>
                <div className='app__header-nav'>
                    <div className="black-background"></div>
                    <SectionHeader setCartStorage={props.setCartStorage} cartStorage={props.cartStorage} toggleCart={props.toggleCart} setToggleCart={props.setToggleCart} />
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
    </>
    );
}

export default Home;