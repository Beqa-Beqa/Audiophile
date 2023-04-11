import './App.css';
import 
    { Audiophile, BackSpeakerTop, BigEarphones,
    Earphones, Fb, Headphones, HumanImg, Insta, IntroHeadphones,
    Path, ShoppingCart, SpeakerBottom, SpeakerTop, Speakers,
    Twit
    } 
from './Design/Homepage/export';
import MiniSecContainer from './Containers/MiniSecContainer';
import HomeBodySection from './Components/HomeBodySection';

let navCreator = () => {
    return (
        <nav className="navigation">
            <a href="#">Home</a>
            <a href="#">Headphones</a>
            <a href="#">Speakers</a>
            <a href="#">Earphones</a>
        </nav>
    );
}
let nav = navCreator();

function App() {
    return (
        <div className='app'>
            <div className='app__header'>
                <div className='app__header-nav'>
                    <img src={Audiophile} alt="logo" />
                    {nav}
                    <img src={ShoppingCart} />
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
                <HomeBodySection personimg={HumanImg} speaker={SpeakerTop} earphones={BigEarphones} />
            </div>
            <div className='app__footer' >
                <div className='app__footer-about'>
                    <div>
                        <img src={Audiophile} alt="logo" />
                    </div>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <span>Copyright 2021. All Rights Reserved</span>
                </div>
                <div className='footer__nav'>
                    {nav}
                    <div id="icons">
                        <img src={Fb} alt="facebook icon" />
                        <img src={Twit} alt="twitter icon" />
                        <img src={Insta} alt="instagram icon" />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
