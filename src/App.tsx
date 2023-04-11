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

function App() {
    return (
        <div className='app'>
            <div className='app__header'>
                <div className='app__header-nav'>
                    <img src={Audiophile} alt="logo" />
                    <nav id="nav">
                        <a href="#">Home</a>
                        <a href="#">Headphones</a>
                        <a href="#">Speakers</a>
                        <a href="#">Earphones</a>
                    </nav>
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
        </div>
  );
}

export default App;
