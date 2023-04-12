import SectionHeader from "../Components/SectionHeader";
import "./UniversalSectionStyles.css";
import { EarphoneOne } from "../Design/Earphones/export";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";

let Earphones = () => {
    return(
        <div>
            <SectionHeader description="earphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    <div className="app__product-body__product">
                        <div className="product__image">
                            <img src={EarphoneOne} alt="earphone image" />
                        </div>
                        <div className="product__description">
                            <span>NEW PRODUCT</span>
                            <h2>YX1 WIRELESS EARPHONES</h2>
                            <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
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

export default Earphones;