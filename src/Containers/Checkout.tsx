import "../Design/CSS/ContainerStyles/Checkout.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import { StorageObjectElement } from "../Data/Interface";
import { Link } from "react-router-dom";

let Checkout = (props: {
    cartStorage: StorageObjectElement[];
    setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>;
    toggleCart: boolean;
    setToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="checkout">
            <div className="checkout__header">
                <SectionHeader cartStorage={props.cartStorage} setCartStorage={props.setCartStorage} toggleCart={props.toggleCart} setToggleCart={props.setToggleCart} />
            </div>
            <div className="checkout__body">
                <Link to="/">
                    <button className="go-back-button" type="button">Go Back</button>
                </Link>
                <div className="checkout__body-details">
                    <h2>Checkout</h2>
                    <div className="checkout__body-details_billing">
                        <p>Billing Details</p>
                        <div className="input-styles" id="billing-details">
                            <div className="input-styles-element">
                                <span>Name</span>
                                <input type="text" />
                            </div>
                            <div className="input-styles-element">
                                <span>Email Adress</span>
                                <input type="email" />
                            </div>
                            <div className="input-styles-element">
                                <span>Phone Number</span>
                                <input type="number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;