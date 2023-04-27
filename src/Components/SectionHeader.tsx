import { useState } from "react";
import { StorageObjectElement } from "../Data/Interface";
import "../Design/CSS/ComponentStyles/SectionHeader.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import { Audiophile, ShoppingCart } from "../Design/Homepage/export";
import { Link } from "react-router-dom";

// This component creates section headers which contain logo navigation and shopping cart icon
// description attribute is optional, if it's given then respective styles ar added to it
// We use it with description in general sections and without description in individual section container


//Exporting function in footer.tsx
export function navCreator() {
    return(
        <nav className="navigation">
            <Link className='a' to="/">Home</Link>
            <Link className='a' to="/headphones">Headphones</Link>
            <Link className='a' to="/speakers">Speakers</Link>
            <Link className='a' to="/earphones">Earphones</Link>
        </nav>
    );
}


let SectionHeader = (props: {setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>; cartStorage: StorageObjectElement[]; description?: string; toggleCart: boolean; setToggleCart: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [updateState, setUpdateState] = useState<boolean>(false);
    let totalPrice: number = 0;
    const Menu = () => {
        let element: JSX.Element = <div />;
        if(props.cartStorage.length > 0) {
            element = 
                <div className="cart-menu">
                    <div className="cart-menu__header">
                        <h1>Cart &#40;{props.cartStorage.length}&#41;</h1>
                        <p onClick={() => {props.setCartStorage([])}}>Remove all</p>
                    </div>
                    {props.cartStorage.map((item, key) => {
                        return (
                            <div key={key} className="cart-menu__body">
                                <div className="body-description">
                                    <div className="cart-menu__body-image">
                                        <img src={item.image} alt="product image" />
                                    </div>
                                    <div className="cart-menu__body-description">
                                        <h2>{item.h2.replace(/ .*/,'')}</h2>
                                        <span>{`$ ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                                    </div>
                                </div>
                                <div className="cart-menu__body-quantity">
                                    {/* Buttons used to change value for input field. PS: input value is not able to be interacted independently */}
                                    <button onClick={() => {if(item.quantity > 1) {item.quantity -= 1; setUpdateState(!updateState)}}} type="button">-</button>
                                    {/* Input field whose value holds the value state on top of container */}
                                    <input readOnly value={item.quantity} type="number" />
                                    <button onClick={() => {item.quantity += 1; setUpdateState(!updateState)}} type="button">+</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="cart-menu__total">
                        <span>Total</span>
                        <h3>$ {props.cartStorage.map((item, key) => {
                            let itemPrice = item.quantity * item.price;
                            totalPrice += itemPrice;
                            if(item === props.cartStorage[props.cartStorage.length - 1]) {
                                return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        })}</h3>
                    </div>
                    <Link to="/checkout">
                        <button type="button" className="product-button checkout-button">Checkout</button>
                    </Link>
                </div>
            return element;
        } else {
            element = <div className="cart-menu empty-text"><span>Your cart is empty!</span></div>
            return element;
        }
    }
    // Creating navigation based on declared function in app.tsx
    const nav: JSX.Element = navCreator();
    const menu: JSX.Element = Menu();
    return (
        <div className="app__section-header__background">
            <div className="app__section-header-nav">
                <img src={Audiophile} alt="logo" />
                {nav}
                <img onClick={() => props.setToggleCart(!props.toggleCart)} id="shop-cart" src={ShoppingCart} alt="shopping cart" />
            </div>
            {/* Conditional rendering whether or not to show shopping cart list */}
            {props.toggleCart && menu}
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