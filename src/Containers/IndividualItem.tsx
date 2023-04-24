import "./IndividualItem.css";
import "./UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import {useState} from "react";
import { Link } from "react-router-dom";
import AlsoLikeContainer from "./AlsoLikeContainer";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";

let IndividualItem = (props: {data: any, from: string}) => {
    const data = props.data;
    const from = props.from; 
    const [value, setValue] = useState<number>(1);
    const handleIncrement = () => {
        setValue(value + 1);
    }
    const handleDecrement = () => {
        {value > 1 && setValue(value - 1)}
    }
    return(
        <div className="item-section">
            <SectionHeader />
            <div className="item-section__body app__product-section">
                <Link to={from}>
                    <button id="go-back-button" type="button">Go Back</button>
                </Link>
                <div className="app__product-body">
                    <div className="app__product-body__product">
                        <div className="product__image">
                            <img src={data.image} alt="headphone image" />
                        </div>
                        <div className="product__description">
                            {data.newProduct && <span>NEW PRODUCT</span>}
                            <h2>{data.h2}</h2>
                            <p>{data.p}</p>
                            <span id="price-tag">{'$ ' + data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            <div id="add-to-cart">
                                <div className="input">
                                    <button onClick={handleDecrement} type="button">-</button>
                                    <input value={value} onChange={(event) => setValue(parseInt(event.target.value))} type="number" />
                                    <button onClick={handleIncrement} type="button">+</button>
                                </div>
                                <button type="button" className="product-button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-section__features">
                    <div className="item-section__features-features">
                        <h2>Features</h2>
                        {data.features.map((item: string, key: number) => {
                            return <p key={key}>{item}</p>
                        })}
                    </div>
                    <div className="item-section__features-in-the-box">
                        <h2>In The Box</h2>
                        {data.inTheBox.map((item: any, key: number) => {
                            return (
                                <div id="in-the-box" key={key}>
                                    <h3>{item[0]}</h3>
                                    <p>{item[1]}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="decoration-images">
                    <img id="image1" src={data.images[0]} alt="human image" />
                    <img id="image2" src={data.images[1]} alt="headphone image" />
                    <img id="image3" src={data.images[2]} alt="headphone image" />
                </div>
                <div className="item-section__sections">
                    <AlsoLikeContainer />
                    <MiniSecContainer />
                </div>
                <div className="item-section__about">
                    <About />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default IndividualItem;