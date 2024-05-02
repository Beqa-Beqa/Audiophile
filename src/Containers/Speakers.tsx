import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import speakerData from "../Data/SpeakerData";
import { StorageObjectElement, specificDataObject } from "../Data/Interface";

let Speakers = (props: {setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>; cartStorage: StorageObjectElement[];}) => {
    return(
        <div className="page-style">
            <div className="black-background">
                <SectionHeader setCartStorage={props.setCartStorage} cartStorage={props.cartStorage} description="Speakers" />
            </div>
            <div className="app__product-section">
                <div className="app__product-body">
                    {/* Mapping every item from speakers database. specificDataObject interface is defined in data/interfaces */}
                    {speakerData.map((item: specificDataObject, key) => {
                        // If the item index is odd then the image will be on the left side
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
                                // If the item index is even image will be on the right side
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

export default Speakers;