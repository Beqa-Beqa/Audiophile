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
// description attribute is optional, if it's given then respective styles are added to it
// We use it with description in general sections and without description in individual section container


//Exporting function in footer.tsx which creates navigation
export function navCreator() {
    return(
        <nav className="navigation">
            <Link className='a' to="/Audiophile/">Home</Link>
            <Link className='a' to="/Audiophile/headphones">Headphones</Link>
            <Link className='a' to="/Audiophile/speakers">Speakers</Link>
            <Link className='a' to="/Audiophile/earphones">Earphones</Link>
        </nav>
    );
}


let SectionHeader = (props: {showOrderDetails?: boolean; setShowOrderDetails?: React.Dispatch<React.SetStateAction<boolean>>; setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>; cartStorage: StorageObjectElement[]; description?: string;}) => {
    // State for cart item whether show it or not
    const [toggleCart, setToggleCart] = useState(false);
    // State for navigation menu for tablets or smaller devices whether show it or not (Three line(Burger) icon)
    const [tabletMenu, setTabletMenu] = useState(false);
    // State that triggers rerender when item quantity is set to a new value from cart menu
    const [updateState, setUpdateState] = useState<boolean>(false);
    const location = useLocation();
    // Useffect that disappears cart menu after location change
    useEffect(() => {
        setToggleCart(false);
    }, [location]);
    // Total price of items in cart
    let totalPrice: number = 0;
    // Remove button action that removes particular item from cart
    const removeItem = (item: StorageObjectElement) => {
        const temporarArr = [...props.cartStorage];
        temporarArr.splice(temporarArr.indexOf(item), 1);
        props.setCartStorage(temporarArr);
    }
    // Cart Menu
    const Menu = () => {
        let element: JSX.Element = <div />;
        // Conditional rendering. If items quantity is more than 0 in the cart it shows us list of elements in mini cart menu
        if(props.cartStorage.length > 0) {
            element = 
                <div className="cart-menu">
                    <div className="cart-menu__header">
                        <h1>Cart &#40;{props.cartStorage.length}&#41;</h1>
                        {/* By clicking this p tag all the elements will be removed from the cart */}
                        <p onClick={() => {props.setCartStorage([])}}>Remove all</p>
                    </div>
                    {/* Mapping items from cart storage */}
                    {props.cartStorage.map((item, key) => {
                        return (
                            <div key={key} className="cart-menu__body">
                                <div className="body-description">
                                    <div className="cart-menu__body-image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                    <div className="cart-menu__body-description">
                                        {/* Showing only first word of item. Otherwise naming is very long and can't fit in */}
                                        <h2>{item.h2.replace(/ .*/,'')}</h2>
                                        {/* Splitting every 3 digit by comma */}
                                        <span>{`$ ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                                    </div>
                                </div>
                                <div id="item-quantity-edit">
                                    {/* P tag that acts as button to remove particular item */}
                                    <p onClick={() => removeItem(item)}>Remove</p>
                                    <div className="cart-menu__body-quantity">
                                        {/* Buttons used to change value for input field. PS: input value is not able to be interacted independently without plus or minus buttons*/}
                                        <button onClick={() => {if(item.quantity > 1) {item.quantity -= 1; setUpdateState(!updateState)}}} type="button">-</button>
                                        {/* Input field that shows total quantity of a specific item */}
                                        <input readOnly value={item.quantity} type="number" />
                                        <button onClick={() => {item.quantity += 1; setUpdateState(!updateState)}} type="button">+</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="cart-menu__total">
                        <span>Total</span>
                        {/* Calculating total price of items */}
                        <h3>$ {props.cartStorage.map((item) => {
                            let itemPrice = item.quantity * item.price;
                            totalPrice += itemPrice;
                            if(item === props.cartStorage[props.cartStorage.length - 1]) {
                                // Dividing final number by commas after every 3 digits
                                return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            }
                        })}</h3>
                    </div>
                    {/* Link to checkout page */}
                    <Link to="/Audiophile/checkout">
                        <button type="button" className="product-button checkout-button">Checkout</button>
                    </Link>
                </div>
            return element;
            // If there is no items in cart, then this text gets rendered.
        } else {
            element = <div className="cart-menu empty-text"><span>Your cart is empty!</span></div>
            return element;
        }
    }
    const TabletMenu = () => {
        // Tablet menu for tablets or smaller devices
        return (
            <div id="tabletMenu" className="slide-in-top">
                <MiniSecContainer />
            </div>
        );
    }
    // Creating navigation based on declared function in this component
    const nav: JSX.Element = navCreator();
    // Creating cart menu based on declared function in this component
    const menu: JSX.Element = Menu();
    // Creating tablet menu based on declared function in this component
    const tabletmenu: JSX.Element = TabletMenu();
    // totalNumberOfItems is used to display number of items on side of shopping cart icon.
    let totalNumberOfItems = 0;
    for(let i in props.cartStorage) {
        totalNumberOfItems += props.cartStorage[i].quantity
    }
    return (
        <div className="app__section-header__background">
            {/* If any of the given is active, Blur element is set on top of all the other elements except section header. Clicking on blur element deactivates any active element and disappears blur element*/}
            {tabletMenu || toggleCart || props.showOrderDetails ? BlurElement(() => {setTabletMenu(false); setToggleCart(false); props.setShowOrderDetails && props.setShowOrderDetails(false)}) : null}
                <div className="app__section-header-nav">
                    {/* Tablet menu icon with it's functionality to show or not show tablet menu. Activating one deactivets another active state. order details and set show order details come from checkout container and is optional */}
                    <div id="miniMenu">
                        <img onClick={() => {setTabletMenu(!tabletMenu); toggleCart && setToggleCart(false); props.setShowOrderDetails && props.setShowOrderDetails(false)}} src={ThreeLines} alt="toggle menu" />
                    </div>
                    {/* Audiophile logo that goes to homepage */}
                    <Link to="/Audiophile">
                        <img id="logo" src={Audiophile} alt="logo" />
                    </Link>
                    {/* Navigation */}
                    <div id="nav">
                        {nav}
                    </div>
                    {/* Shop cart icon with onclick listenre to show or not show cart menu. Activating one deactivates another active state. order details and set show order details comes from checkout container and is optional */}
                    <div id="shop-cart">
                        {totalNumberOfItems > 0 && <div id="number-of-items"><span>{totalNumberOfItems}</span></div>}
                        <img onClick={() => {setToggleCart(!toggleCart); tabletMenu && setTabletMenu(false); props.setShowOrderDetails && props.setShowOrderDetails(false)}} src={ShoppingCart} alt="shopping cart" />
                    </div>
                </div>
            {/* Conditional rendering whether or not to show tablet menu */}
            {tabletMenu && tabletmenu}
            {/* Conditional rendering whether or not to show shopping cart list */}
            {toggleCart && menu}
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