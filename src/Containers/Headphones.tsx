import "./UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import About from "../Components/About";
import Footer from "../Components/Footer";
import MiniSecContainer from "./MiniSecContainer";
import { Link, useLocation } from "react-router-dom";
import headphoneData from "../Data/HeadphoneData";
import { dataObject } from "../Data/Interface";

let Headphones = (props: {setItemRoute: any}) => {
    const location = useLocation();
    const setLocation = (event: any) => {
        props.setItemRoute(location.pathname + "/" + event.target.name);
    }
    return (
        <div>
            <SectionHeader description="Headphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    {headphoneData.map((item: dataObject, key) => {
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
                                        <Link to={item.h2} state={{data: headphoneData[item.index - 1], from: location.pathname}}>
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
                                        <Link to={item.h2} state={{data: headphoneData[item.index - 1], from: location.pathname}}>
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

export default Headphones;