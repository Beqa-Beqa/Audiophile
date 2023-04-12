import "./SectionHeader.css";
import { navCreator } from "../App";
import { Audiophile, ShoppingCart } from "../Design/Homepage/export";

let SectionHeader = (props: {description: string}) => {
    let nav = navCreator();
    return (
        <div className="app__section-header__background">
            <div className="app__section-header-nav">
                <img src={Audiophile} alt="logo" />
                {nav}
                <img id="shop-cart" src={ShoppingCart} alt="shopping cart" />
            </div>
            <h1 className="header">{props.description}</h1>
        </div>
    );
}

export default SectionHeader;