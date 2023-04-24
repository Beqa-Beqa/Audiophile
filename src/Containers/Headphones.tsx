import "./UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import About from "../Components/About";
import Footer from "../Components/Footer";
import MiniSecContainer from "./MiniSecContainer";
import { Link } from "react-router-dom";
import headphoneData from "../Data/HeadphoneData";
import { specificDataObject } from "../Data/Interface";

let Headphones = () => {
    return (
        <div>
            <SectionHeader description="Headphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    {/* Mapping data from headphones. specificDataObject interface is defined in data/interface */}
                    {headphoneData.map((item: specificDataObject, key) => {
                        if(item.index % 2 != 0) {
                            return (
                                <div className="app__product-body__product" key={key}>
                                    <div className="product__image">
                                        <img src={item.image} alt="headphone image" />
                                    </div>
                                    <div className="product__description">
                                        {item.newProduct && <span>NEW PRODUCT</span>}
                                        <h2>{item.h2}</h2>
                                        <p>{item.p}</p>
                                        <Link to={item.h2}>
                                            <button name={item.h2} type="button" className="product-button">See Product</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        } else {
                            // Reversing position of containers
                            return (
                                <div className="app__product-body__product" key={key}>
                                    <div className="product__description">
                                        {item.newProduct && <span>NEW PRODUCT</span>}
                                        <h2>{item.h2}</h2>
                                        <p>{item.p}</p>
                                        <Link to={item.h2}>
                                            <button name={item.h2} type="button" className="product-button">See Product</button>
                                        </Link>
                                    </div>
                                    <div className="product__image">
                                        <img src={item.image} alt="headphone image" />
                                    </div>
                                </div>
                            );
                        }
                    })}
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