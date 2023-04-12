import "./UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import {SpeakerOne, SpeakerTwo} from "../Design/Speakers/export";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";

let Speakers = () => {
    return(
        <div>
            <SectionHeader description="Speakers" />
            <div className="app__product-section">
                <div className="app__product-body">
                    <div className="app__product-body__product">
                        <div className="product__image">
                            <img src={SpeakerOne} alt="speaker image"/>
                        </div>
                        <div className="product__description">
                            <span>NEW PRODUCT</span>
                            <h2>ZX9 SPEAKER</h2>
                            <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                            <button type="button" className="product-button">See Product</button>
                        </div>
                    </div>
                    <div className="app__product-body__product">
                        <div className="product__description">
                            <h2>ZX7 SPEAKER</h2>
                            <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                            <button type="button" className="product-button">See Product</button>
                        </div>
                        <div className="product__image">
                            <img src={SpeakerTwo} alt="speaker image" />
                        </div>
                    </div>
                </div>
                <MiniSecContainer />
                <div className="product-about">
                    <About />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Speakers;