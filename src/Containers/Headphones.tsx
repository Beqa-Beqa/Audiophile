import "./UniversalSectionStyles.css";
import { HeadphoneOne, HeadphoneTwo, HeadphoneThree } from "../Design/Headphones/export";
import SectionHeader from "../Components/SectionHeader";
import About from "../Components/About";
import Footer from "../Components/Footer";
import MiniSecContainer from "./MiniSecContainer";

let Headphones = () => {
    return (
        <div>
            <SectionHeader description="Headphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    <div className="app__product-body__product">
                        <div className="product__image">
                            <img src={HeadphoneOne} alt="headphone image" />
                        </div>
                        <div className="product__description">
                            <span>NEW PRODUCT</span>
                            <h2>XX99 Mark II Headphones</h2>
                            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <button type="button" className="product-button">See Product</button>
                        </div>
                    </div>
                    <div className="app__product-body__product">
                        <div className="product__description">
                            <h2>XX99 Mark I Headphones</h2>
                            <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                            <button type="button" className="product-button">See Product</button>
                        </div>
                        <div className="product__image">
                            <img src={HeadphoneTwo} alt="headphone image" />
                        </div>
                    </div>
                    <div className="app__product-body__product">
                        <div className="product__image">
                            <img src={HeadphoneThree} alt="headphone image" />
                        </div>
                        <div className="product__description">
                            <h2>XX59 Headphones</h2>
                            <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                            <button type="button" className="product-button">See Product</button>
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

export default Headphones;