import SectionHeader from "../Components/SectionHeader";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import earphoneData from "../Data/EarphoneData";
import { StorageObjectElement, specificDataObject } from "../Data/Interface";

// This function renders every earphone in earphones section from earphone.ts in Data.
let Earphones = (props: {setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>; cartStorage: StorageObjectElement[];}) => {
    return(
        <div>
            <div className="black-background">
                <SectionHeader setCartStorage={props.setCartStorage} cartStorage={props.cartStorage} description="earphones" />
            </div>
            <div className="app__product-section">
                <div className="app__product-body">
                    {/* Rendering based on data. specificDataObject interfaces is declared in data/interface */}
                    {earphoneData.map((item: specificDataObject, key) => {
                        // If the index is odd then the images will be render on the left side
                            if(item.index % 2 !== 0) {
                                return (
                                    // rendering elements based on speakers database. using conditional rendering if product is new or not
                                    <div className="app__product-body__product" key={key}>
                                        <div className="product__image">
                                            <img src={item.image} alt="headphone" />
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
                                // If the index is even then the image will be on the right side
                                return (
                                    // reversing position of containers
                                    <div className="app__product-body__product" key={key}>
                                        <div className="product__image tablet-style-image">
                                            <img src={item.image} alt="headphone" />
                                        </div>
                                        <div className="product__description">
                                            {item.newProduct && <span>NEW PRODUCT</span>}
                                            <h2>{item.h2}</h2>
                                            <p>{item.p}</p>
                                            <Link to={item.h2}>
                                                <button name={item.h2} type="button" className="product-button">See Product</button>
                                            </Link>
                                        </div>
                                        <div className="product__image tablet-style-image-hidden">
                                            <img src={item.image} alt="headphone" />
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

export default Earphones;