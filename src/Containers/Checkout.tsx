import "../Design/CSS/ContainerStyles/Checkout.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import "../Design/CSS/ComponentStyles/SectionHeader.css";
import SectionHeader from "../Components/SectionHeader";
import { StorageObjectElement } from "../Data/Interface";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState, useRef } from "react";
import { Cash, CheckoutTick } from "../Design/Checkout/export";

let Checkout = (props: {
    cartStorage: StorageObjectElement[];
    setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>;
}) => {
    // Total price of items in cart
    let totalPrice:number = 0;
    // if cart items are more than 0, this if - else statement calculates items price and then stores it in window.sessionstorage meaning we will have access to it after rerenders.
    if(props.cartStorage.length > 0) {
        for(let i in props.cartStorage) {
            totalPrice += props.cartStorage[i].quantity * props.cartStorage[i].price;
        }
        window.sessionStorage.setItem("totalPrice", totalPrice.toString());
    } else {
        totalPrice = 0;
    }
    // Copy of the cart items to store it in useRef hook to go through rerenders. Storing array where first element is cart items and second is total price.
    const helperCartItems = useRef([Object.assign(JSON.parse(window.sessionStorage.getItem("cartItems")!)), parseInt(window.sessionStorage.getItem("totalPrice")!)]);
    // Using state to get which payment method is used.
    const [paymentMethod, setPaymentMethod] = useState("e-money");
    // Variables for div styles "e-money" and "cash on delivery".
    let eMoneyButtonDivStyle: string;
    let cashButtonDivStyle: string;
    // This if else statmenet sets appropriate styles based on which payment method is chosen
    if(paymentMethod === "e-money") {
        eMoneyButtonDivStyle = "custom-element-container-focused";
        cashButtonDivStyle = "";
    } else {
        eMoneyButtonDivStyle = "";
        cashButtonDivStyle = "custom-element-container-focused";
    }
    // State to set all the inputs as a required. By setting inputs required right away inputs are shown with red borders. with this state we avoid that.
    const [required, setRequired] = useState<boolean>(false);
    // State for whether show order details after payment.
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    // State to show items other than first one ordered in order details.
    const [showOtherItems, setShowOtherItems] = useState(false);
    // Function that returns order details HTML.
    const orderDetails = () => {
        return <div className="order-details">
            <img src={CheckoutTick} alt="tick" />
            <h1>Thank you<br/>for your order</h1>
            <p>You will receive an email confirmation shortly.</p>
            <div className="order-details__items-box">
                <div className="order-details__items-box-55">
                    {/* Conditional rendering if showotheritems state is true then it shows other items as well in order details
                    we use helpercartitems which is stored in useRef. Pay button has payaction clicklistener that clears cartstorage
                    meaning we wouldn't have access to these information without useRef and it would throw an error */}
                    {showOtherItems ? helperCartItems.current[0].map((item: StorageObjectElement, key: number) => (
                            <div key={key} className="body-description">
                                <div className="cart-menu__body-image">
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="cart-menu__body-description">
                                    {/* Showing only first word of item's name */}
                                    <h2>{item.h2.replace(/ .*/,'')}</h2>
                                    {/* Item's price divided by a comma after every 3 digits */}
                                    <span>{`$ ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                                </div>
                                <div className="span-div">
                                    <span className="span">x{item.quantity}</span>
                                </div>                 
                            </div>
                        ))
                    : 
                        <div className="body-description">
                            {/* If otheritems state is set on false this will render details of only fisrt item from helpercartitems stored in useRef */}
                            <div className="cart-menu__body-image">
                                <img src={helperCartItems.current[0][0].image} alt="product" />
                            </div>
                            <div className="cart-menu__body-description">
                                <h2>{helperCartItems.current[0][0].h2.replace(/ .*/,'')}</h2>
                                <span>{`$ ${helperCartItems.current[0][0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                            </div>
                            <div className="span-div">
                                <span className="span">x{helperCartItems.current[0][0].quantity}</span>
                            </div>                 
                        </div>
                    }
                    {/* If there are more than 1 items in helperCartItems, this renders span tag with text "show-other-items" or "View Less" respectively if showotheritem is true or false. click listener sets showother items to true or false */}
                    {helperCartItems.current[0].length > 1 && <span onClick={() => setShowOtherItems(!showOtherItems)} id="other-items-span">{showOtherItems ? "View Less" : `and ${helperCartItems.current[0].length - 1} other item(s)`}</span>}
                </div>
                <div className="order-details__items-box-45">
                    <div id="grand-total-div">
                        <h2>Grand Total</h2>
                        <h3>
                            {/* Total price + shipping fee */}
                            $ {(helperCartItems.current[1] + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </h3>
                    </div>
                </div>
            </div>
            <div id="order-button-div">
                {/* Back to home button leads to homepage */}
                <Link to="/Audiophile">
                    <button type="button" className="product-button checkout-button">Back to home</button>
                </Link>
            </div>
        </div>
    }
    // validValueArr is used to store name of an input with valid value. if all the values are valid all the names will be in validvaluearr and user will be able to submit.
    const validValueArr = useRef<any>([]);
    // classname for inputs which helps us in validator function.
    const invalidInput = "invalid-input";
    const validator = (event: any) => {
        // Regex is the pattern written in input attributes
        const regex = event.target.pattern;
        // Target is the element that triggers this function
        const target = event.target.value;
        // spanDiv is the container of spans on top of input. e.g: Email adress   Wrong Format(if the input value is invalid).
        const spanDiv = event.target.previousElementSibling;
        // this if else statement ensures to give proper styles and update validvaluearr respectively if input values are valid or not.
        if(target.match(regex)) {
            if(validValueArr.current.indexOf(event.target.name) === -1) {
                validValueArr.current.push(event.target.name);
                event.target.className = "";
            }
            spanDiv.className = "span-div-inputs";
        } else if(validValueArr.current.indexOf(event.target.name) !== -1) {
            validValueArr.current.splice(validValueArr.current.indexOf(event.target.name), 1);
            event.target.className = invalidInput;
            spanDiv.className = "span-div-inputs span-div-error";
        } else {
            event.target.className = invalidInput;
            spanDiv.className = "span-div-inputs span-div-error";
        }
    }
    // pay action is triggered by clicking on pay button
    const payAction = () => {
        // This checks if validvaluearr has enough elements to proceed checkout or not. If everything is valid then showorderdetails appear on screen and cart storage gets cleaned. setRequired sets inputs' attribute required to true
        if((paymentMethod === "e-money" && validValueArr.current.length === 9) || (paymentMethod === "cash" && validValueArr.current.length >= 7)) {
            setRequired(true);
            setShowOrderDetails(true);
            props.setCartStorage([]);
        } else {
            // if any of the inputs is not valid than the wrong format styles show up and it redirects you to the very first input that's invalid.
            setRequired(true);
            if(document.getElementsByClassName(invalidInput).length > 0) {
                const elems = document.getElementsByClassName(invalidInput);
                const elemDimensions = document.getElementsByClassName(invalidInput)[0].getBoundingClientRect();
                for(let i = 0; i < elems.length; i++) {
                    let previousElement = document.getElementsByClassName(invalidInput)[i].previousElementSibling;
                    if(previousElement) {
                        previousElement.className = "span-div-inputs span-div-error";
                    }
                }
                window.scrollBy({
                    top: elemDimensions.top - window.innerHeight/2,
                    left: 0,
                    behavior: "smooth"
                });
            }
        }
    }
    return (
        <div className="checkout">
            <div className="checkout__header">
                <SectionHeader showOrderDetails={showOrderDetails} setShowOrderDetails={setShowOrderDetails} cartStorage={props.cartStorage} setCartStorage={props.setCartStorage} />
            </div>
            {/* Conditional rendering if order details state is true or false. */}
            {showOrderDetails && orderDetails()}
            <div className="checkout__body">
                <div className="checkout__body-checkout">
                    {/* button that leads to homepage */}
                    <Link to="/Audiophile">
                        <button className="go-back-button" type="button">Go Back</button>
                    </Link>
                    <div className="checkout__body-details">
                        <h2>Checkout</h2>
                        <div className="checkout__body-details__billing">
                            <h3>Billing Details</h3>
                            <div id="billing-details">
                                <div id="billing-element1" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>Name</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} name="name" pattern="^[A-Za-z\s'-]+$" onChange={validator} required={required} placeholder="Alexei Ward" type="text" />
                                </div>
                                <div id="billing-element2" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>Email Adress</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} name="email" onChange={validator} required={required} pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$" placeholder="alexei@mail.com" type="email" />
                                </div>
                                <div id="billing-element3" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>Phone Number</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} name="phone" onChange={validator} required={required} pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" placeholder="+1 202-555-0136" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="checkout__body-details__shipping">
                            <h3>Shipping Info</h3>
                            <div id="shipping-details">
                                <div id="shipping-element1" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>Adress</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} pattern="(?!\s).+(?!\s)$" name="adress" onChange={validator} required={required} placeholder="1137 Williams Avenue" type="text" />
                                </div>
                                <div id="shipping-element2" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>Zip Code</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} name="zip" onChange={validator} required={required} pattern="^\d{4,5}$" placeholder="10001" type="text" />
                                </div>
                                <div id="shipping-element3" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>City</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} pattern="^[A-Za-z\s.'-]+$" name="city" onChange={validator} required={required} placeholder="New York" type="text" />
                                </div>
                                <div id="shipping-element4" className="input-styles-element">
                                    <div className="span-div-inputs">
                                        <span>Country</span>
                                        <span>Wrong Format</span>
                                    </div>
                                    <input className={invalidInput} pattern="^[A-Za-z\s.'-]+$" name="country" onChange={validator} required={required} placeholder="United States" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="checkout__body-details__payment">
                            <h3>Payment Details</h3>
                            <div id="custom-div">
                                <div className="custom-element">
                                    <span>Payment Method</span>
                                </div>
                                <div className="custom-element">
                                    {/* e-money labeled input updates state of paymentmethod to e-money and sets styles of this div to show as highlighted */}
                                    <label htmlFor="e-money">
                                        <div className={`custom-element-container ${eMoneyButtonDivStyle}`}>
                                            <input onChange={() => setPaymentMethod("e-money")} checked={paymentMethod === "e-money"} id="e-money" value="e-Money" type="radio" name="payment-method" />
                                            <span>e-Money</span>
                                        </div>
                                    </label>
                                    {/* cash labeled input updates state of paymentmethod to cash and sets styles of this div to show as highlighted */}
                                    <label htmlFor="cash">
                                        <div className={`custom-element-container ${cashButtonDivStyle}`}>
                                            <input onChange={() => setPaymentMethod("cash")} checked={paymentMethod === "cash"} id="cash" value="Cash On Delivery" type="radio" name="payment-method" />
                                            <span>Cash on Delivery</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            {/* Conditional rendering if e money is set as payment method than e money number and pin input fields show up */}
                            {paymentMethod === "e-money" ?
                                <div id="payment-details">
                                    <div className="input-styles-element">
                                        <div className="span-div-inputs">
                                            <span>e-Money Number</span>
                                            <span>Wrong Format</span>
                                        </div>
                                        <input className={invalidInput} name="e-money-number" onChange={validator} required={required} pattern="^\d{9}$" id="eMoneyNum" type="text" placeholder="238521993" />
                                    </div>
                                    <div className="input-styles-element">
                                        <div className="span-div-inputs">
                                            <span>e-Money PIN</span>
                                            <span>Wrong Format</span>
                                        </div>
                                        <input className={invalidInput} name="e-money-pin" onChange={validator} required={required} pattern="^\d{4}$" id="eMoneyPin" type="text" placeholder="6891" />
                                    </div>
                                </div>
                            :
                                <div id="cash-payment">
                                    <div className="cash-image">
                                        <img src={Cash} alt="cash icon" />
                                    </div>
                                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="checkout__body-summary">
                    <div className="checkout__body-summary-details">
                        <div className="cart-menu__header">
                            <h1>Summary</h1>
                        </div>
                        {/* Mapping items from helperCartItem in summary. useRef is used to show the details of items even after cartStorage gets cleared */}
                        {helperCartItems.current[0].map((item: StorageObjectElement, key: number) => {
                            return (
                                <div key={key} className="cart-menu__body">
                                    <div className="body-description">
                                        <div className="cart-menu__body-image">
                                            <img src={item.image} alt="product" />
                                        </div>
                                        <div className="cart-menu__body-description">
                                            <h2>{item.h2.replace(/ .*/,'')}</h2>
                                            <span>{`$ ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
                                        </div>
                                    </div>
                                    <span className="span">x{item.quantity}</span>
                                </div>
                            )
                        })}
                        <div className="checkout__body-summary-details__cart">
                            <div className="cart-menu__total">
                                <span>Total</span>
                                {/* Showing total price if items in helperCartItems are more than 0, if not price will be shown as 0 */}
                                {helperCartItems.current[0].length > 0 ? 
                                    <h3>
                                        $ {helperCartItems.current[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </h3>
                                : 
                                    <h3>$ 0</h3>
                                }
                            </div>
                            <div className="cart-menu__total">
                                <span>Shipping</span>
                                {/* If items are more than 0, shipping price will show as 50$, if not it will be 0 */}
                                {helperCartItems.current[0].length > 0 ? 
                                    <h3>$ 50</h3>
                                : 
                                    <h3>$ 0</h3>
                                }
                            </div>
                            <div className="cart-menu__total">
                                <span>Vat &#40;included&#41;</span>
                                {/* Calculating VAT of total price from helperCartItems. VAT is 20% of the total price */}
                                <h3>$ {helperCartItems.current[0].length > 0 ? (helperCartItems.current[1] * 0.2).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}</h3>
                            </div>
                            <div id="grand-total" className="cart-menu__total">
                                <span>Grand Total</span>
                                {helperCartItems.current[0].length > 0 ? 
                                    <h3>$ {(helperCartItems.current[1] + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                                : 
                                    <h3>$ 0</h3>
                                }
                            </div>
                            <button onClick={payAction} type="submit" className="product-button checkout-button" disabled={props.cartStorage.length < 1}>CONTINUE & PAY</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout__footer">
                <Footer />
            </div>
        </div>
    );
}

export default Checkout;