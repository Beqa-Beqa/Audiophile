import { useEffect, useState } from "react";
import { StorageObjectElement } from "../Data/Interface";
import "../Design/CSS/ComponentStyles/SectionHeader.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import { Audiophile, ShoppingCart } from "../Design/Homepage/export";
import { Link, useLocation } from "react-router-dom";
import MiniSecContainer from "../Containers/MiniSecContainer";
import { ThreeLines } from "../Design/TabletStyles/export";
import { BlurElement } from "../App";
// This component creates section headers which contain logo navigation and shopping cart icon
// description attribute is optional, if it's given then respective styles ar added to it
// We use it with description in general sections and without description in individual section container


//Exporting function in footer.tsx
export function navCreator() {
    return(
        <nav className="navigation">
            <Link className='a' to="/web-todo-5-test/">Home</Link>
            <Link className='a' to="/web-todo-5-test/headphones">Headphones</Link>
            <Link className='a' to="/web-todo-5-test/speakers">Speakers</Link>
            <Link className='a' to="/web-todo-5-test/earphones">Earphones</Link>
        </nav>
    );
}


let SectionHeader = (props: {width: number; setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>; cartStorage: StorageObjectElement[]; description?: string;}) => {
    const [toggleCart, setToggleCart] = useState(false);
    const [tabletMenu, setTabletMenu] = useState(false);
    const [updateState, setUpdateState] = useState<boolean>(false);
    const location = useLocation();
    useEffect(() => {
        setToggleCart(false);
    }, [location]);
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
                    <Link to="/web-todo-5-test/checkout">
                        <button type="button" className="product-button checkout-button">Checkout</button>
                    </Link>
                </div>
            return element;
        } else {
            element = <div className="cart-menu empty-text"><span>Your cart is empty!</span></div>
            return element;
        }
    }
    const TabletMenu = () => {
        return (
            <div id="tabletMenu" className="slide-in-top">
                <MiniSecContainer />
            </div>
        );
    }
    // Creating navigation based on declared function in app.tsx
    const nav: JSX.Element = navCreator();
    const menu: JSX.Element = Menu();
    const tabletmenu: JSX.Element = TabletMenu();
    return (
        <div className="app__section-header__background">
            {tabletMenu || toggleCart ? BlurElement() : null}
                {props.width < 650 ?
                    <div className="app__section-header-nav">
                        <img id="miniMenu" onClick={() => {setTabletMenu(!tabletMenu); {toggleCart && setToggleCart(false)}}} src={ThreeLines} alt="toggle menu" />
                        <Link to="/web-todo-5-test">
                            <img id="logo" src={Audiophile} alt="logo" />
                        </Link>
                        <img onClick={() => {setToggleCart(!toggleCart); {tabletMenu && setTabletMenu(false)}}} id="shop-cart" src={ShoppingCart} alt="shopping cart" />
                    </div>
                : 
                    <div className="app__section-header-nav">
                        <div id="headerImages">
                            {props.width <= 1150 && <img id="miniMenu" onClick={() => {setTabletMenu(!tabletMenu); {toggleCart && setToggleCart(false)}}} src={ThreeLines} alt="toggle menu" />}
                            <Link to="/web-todo-5-test">
                                <img id="logo" src={Audiophile} alt="logo" />
                            </Link>
                        </div>
                        {props.width > 1150 && nav}
                        <img onClick={() => {setToggleCart(!toggleCart); {tabletMenu && setTabletMenu(false)}}} id="shop-cart" src={ShoppingCart} alt="shopping cart" />
                    </div>
                }
            {/* Conditional rendering whether or not to show shopping cart list */}
            {toggleCart && menu}
            {/* Conditional rendering if description is present or not */}
            {props.width <= 1150 && tabletMenu ? tabletmenu : null}
            {
                props.description ?
                    <h1 className="header">{props.description}</h1>
                : null
            }
        </div>
    );
}

export default SectionHeader;