import "./SectionHeader.css";
import { navCreator } from "../App";
import { Audiophile, ShoppingCart } from "../Design/Homepage/export";

// This component creates section headers which contain logo navigation and shopping cart icon
// description attribute is optional, if it's given then respective styles ar added to it
// We use it with description in general sections and without description in individual section container
let SectionHeader = (props: {description?: string}) => {
    // Creating navigation based on declared function in app.tsx
    let nav = navCreator();
    return (
        <div className="app__section-header__background">
            <div className="app__section-header-nav">
                <img src={Audiophile} alt="logo" />
                {nav}
                <img id="shop-cart" src={ShoppingCart} alt="shopping cart" />
            </div>
            {/* Conditional rendering if description is present or not */}
            {
            props.description ?
                <h1 className="header">{props.description}</h1>
            : null
            }
        </div>
    );
}

export default SectionHeader;