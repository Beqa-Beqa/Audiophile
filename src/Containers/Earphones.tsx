import SectionHeader from "../Components/SectionHeader";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import earphoneData from "../Data/EarphoneData";
import { StorageObjectElement, specificDataObject } from "../Data/Interface";

let Earphones = (props: {width: number; setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>; cartStorage: StorageObjectElement[];}) => {
    return(
        <div>
            <div className="black-background">
                <SectionHeader width={props.width} setCartStorage={props.setCartStorage} cartStorage={props.cartStorage} description="earphones" />
            </div>
            <div className="app__product-section">
                <div className="app__product-body">
                    {/* Rendering based on data. specificDataObject interfaces is declared in data/interface */}
                    {earphoneData.map((item: specificDataObject, key) => {
                                if(props.width > 1150) {
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
                                                    <Link to={item.h2} state={{data: earphoneData[item.index - 1]}}>
                                                        <button name={item.h2} type="button" className="product-button">See Product</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        // reversing container positions
                                        return (
                                            <div className="app__product-body__product" key={key}>
                                                <div className="product__description">
                                                    {item.newProduct && <span>NEW PRODUCT</span>}
                                                    <h2>{item.h2}</h2>
                                                    <p>{item.p}</p>
                                                    <Link to={item.h2} state={{data: earphoneData[item.index - 1]}}>
                                                        <button name={item.h2} type="button" className="product-button">See Product</button>
                                                    </Link>
                                                </div>
                                                <div className="product__image">
                                                    <img src={item.image} alt="headphone image" />
                                                </div>
                                            </div>
                                        );
                                    }
                                } else {
                                    return(
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
                                }
                            })}
                </div>
                <MiniSecContainer />
                <div className="product-about">
                    <About width={props.width} />
                </div>
            </div>
            <Footer width={props.width} />
        </div>
    );
}

export default Earphones;