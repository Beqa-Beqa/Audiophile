import "../Design/CSS/ContainerStyles/Checkout.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import "../Design/CSS/ComponentStyles/SectionHeader.css";
import SectionHeader from "../Components/SectionHeader";
import { StorageObjectElement } from "../Data/Interface";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Cash } from "../Design/Checkout/export";

let Checkout = (props: {
    width: number;
    cartStorage: StorageObjectElement[];
    setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>;
}) => {
    const [paymentMethod, setPaymentMethod] = useState("e-money");
    let totalPrice: number = 0;
    let eMoneyButtonDivStyle: string;
    let cashButtonDivStyle: string;
    if(paymentMethod === "e-money") {
        eMoneyButtonDivStyle = "custom-element-container-focused";
        cashButtonDivStyle = "";
    } else {
        eMoneyButtonDivStyle = "";
        cashButtonDivStyle = "custom-element-container-focused";
    }
    const [required, setRequired] = useState<boolean>(false);
    const payAction = () => {
        setRequired(true);
    }
    return (
        <div className="checkout">
            <div className="checkout__header">
                <SectionHeader width={props.width} cartStorage={props.cartStorage} setCartStorage={props.setCartStorage} />
            </div>
            <div className="checkout__body">
                <div className="checkout__body-checkout">
                    <Link to="/web-todo-5-test">
                        <button className="go-back-button" type="button">Go Back</button>
                    </Link>
                    <div className="checkout__body-details">
                        <h2>Checkout</h2>
                        <div className="checkout__body-details__billing">
                            <h3>Billing Details</h3>
                            <div id="billing-details">
                                <div id="billing-element1" className="input-styles-element">
                                    <span>Name</span>
                                    <input required={required} placeholder="Alexei Ward" type="text" />
                                </div>
                                <div id="billing-element2" className="input-styles-element">
                                    <span>Email Adress</span>
                                    <input required={required} pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$" placeholder="alexei@mail.com" type="email" />
                                </div>
                                <div id="billing-element3" className="input-styles-element">
                                    <span>Phone Number</span>
                                    <input required={required} pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" placeholder="+1 202-555-0136" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="checkout__body-details__shipping">
                            <h3>Shipping Info</h3>
                            <div id="shipping-details">
                                <div id="shipping-element1" className="input-styles-element">
                                    <span>Address</span>
                                    <input required={required} placeholder="1137 Williams Avenue" type="text" />
                                </div>
                                <div id="shipping-element2" className="input-styles-element">
                                    <span>Zip Code</span>
                                    <input required={required} pattern="^[0-9]{5}(?:-[0-9]{4})?$" placeholder="10001" type="text" />
                                </div>
                                <div id="shipping-element3" className="input-styles-element">
                                    <span>City</span>
                                    <input required={required} placeholder="New York" type="text" />
                                </div>
                                <div id="shipping-element4" className="input-styles-element">
                                    <span>Country</span>
                                    <input required={required} placeholder="United States" type="text" />
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
                                    <label htmlFor="e-money">
                                        <div className={`custom-element-container ${eMoneyButtonDivStyle}`}>
                                            <input onChange={() => setPaymentMethod("e-money")} checked={paymentMethod === "e-money"} id="e-money" value="e-Money" type="radio" name="payment-method" />
                                            <span>e-Money</span>
                                        </div>
                                    </label>
                                    <label htmlFor="cash">
                                        <div className={`custom-element-container ${cashButtonDivStyle}`}>
                                            <input onChange={() => setPaymentMethod("cash")} checked={paymentMethod === "cash"} id="cash" value="Cash On Delivery" type="radio" name="payment-method" />
                                            <span>Cash on Delivery</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            {paymentMethod === "e-money" ?
                                <div id="payment-details">
                                    <div className="input-styles-element">
                                        <span>e-Money Number</span>
                                        <input required={required} pattern="\d{9}" id="eMoneyNum" type="text" placeholder="238521993" />
                                    </div>
                                    <div className="input-styles-element">
                                        <span>e-Money PIN</span>
                                        <input required={required} pattern="\d{4}" id="eMoneyPin" type="text" placeholder="6891" />
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
                                <span className="span">x{item.quantity}</span>
                            </div>
                        )
                        })}
                        <div className="checkout__body-summary-details__cart">
                            <div className="cart-menu__total">
                                <span>Total</span>
                                {props.cartStorage.length > 0 ? 
                                    <h3>
                                        $ {props.cartStorage.map((item, key) => {
                                        let itemPrice = item.quantity * item.price;
                                        totalPrice += itemPrice;
                                        if(item === props.cartStorage[props.cartStorage.length - 1]) {
                                            return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                        }
                                        })}
                                    </h3>
                                : 
                                    <h3>$ 0</h3>
                                }
                            </div>
                            <div className="cart-menu__total">
                                <span>Shipping</span>
                                {props.cartStorage.length > 0 ? 
                                    <h3>$ 50</h3>
                                : <h3>$ 0</h3>
                                }
                            </div>
                            <div className="cart-menu__total">
                                <span>Vat &#40;included&#41;</span>
                                <h3>$ {(totalPrice * 0.2).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                            </div>
                            <div id="grand-total" className="cart-menu__total">
                                <span>Grand Total</span>
                                {props.cartStorage.length > 0 ? 
                                    <h3>$ {(totalPrice + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                                : 
                                    <h3>$ 0</h3>
                                }
                            </div>
                            <button onClick={payAction} type="submit" className="product-button checkout-button">CONTINUE & PAY</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout__footer">
                <Footer width={props.width} />
            </div>
        </div>
    );
}

export default Checkout;