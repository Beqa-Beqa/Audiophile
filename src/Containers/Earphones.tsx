import SectionHeader from "../Components/SectionHeader";
import "./UniversalSectionStyles.css";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { Link, useLocation } from "react-router-dom";
import earphoneData from "../Data/EarphoneData";
import { dataObject } from "../Data/Interface";

let Earphones = (props: {setItemRoute: any;}) => {
    const location = useLocation();
    const setLocation = (event: any) => {
        props.setItemRoute(location.pathname + "/" + event.target.name);
    }
    return(
        <div>
            <SectionHeader description="earphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    {earphoneData.map((item: dataObject, key) => {
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
                                                <Link to={item.h2} state={{data: earphoneData[item.index - 1], from: location.pathname}}>
                                                    <button name={item.h2} onClick={setLocation} type="button" className="product-button">See Product</button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="app__product-body__product" key={key}>
                                            <div className="product__description">
                                                {item.newProduct && <span>NEW PRODUCT</span>}
                                                <h2>{item.h2}</h2>
                                                <p>{item.p}</p>
                                                <Link to={item.h2} state={{data: earphoneData[item.index - 1], from: location.pathname}}>
                                                    <button name={item.h2} onClick={setLocation} type="button" className="product-button">See Product</button>
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

export default Earphones;