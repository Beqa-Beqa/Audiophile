import "./IndividualItem.css";
import "./UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import { useLocation } from "react-router-dom";
import {useState} from "react";

let IndividualItem = () => {
    const location = useLocation();
    const data = location.state;
    const [value, setValue] = useState<number>(1);
    const handleIncrement = () => {
        setValue(value + 1);
    }
    const handleDecrement = () => {
        setValue(value - 1);
    }
    return(
        <div className="item-section">
            <SectionHeader />
            <div className="item-section__body app__product-section">
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
                                    <input placeholder="1" min={1} value={value} onChange={(event) => setValue(parseInt(event.target.value))} type="number" />
                                    <button onClick={handleIncrement} type="button">+</button>
                                </div>
                                <button type="button" className="product-button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualItem;