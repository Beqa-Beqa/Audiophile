import "../Design/CSS/ContainerStyles/IndividualItem.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import {useState, useMemo} from "react";
import { Link, useLocation } from "react-router-dom";
import AlsoLikeContainer from "./AlsoLikeContainer";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { specificDataObject, StorageObjectElement } from "../Data/Interface";
import { Tick } from "../Design/General/export";

// This container renders every individual product on the after click on "See Product" from any section
// data and from are passed here dynamicaly by app.tsx 
let IndividualItem = (props: {
    data: specificDataObject; from: string;
    cartStorage: StorageObjectElement[];
    setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>;
}) => {
    const data = props.data;
    const from = props.from; 
    const location = useLocation();
    // State for quantity of product next to Add to cart button and event handlers for respective functions on button clicks
    const [value, setValue] = useState<number>(1);
    const handleIncrement = () => {
        setValue(value + 1);
    }
    const handleDecrement = () => value > 1 && setValue(value - 1);
    // State for window alert to show it or not
    const [windowAlert, setWindowAlert] = useState(false);
    // alert function that shows styled alert
    const alert = () => {
        return(
            <div className="alert__window">
                <img src={Tick} alt="tick" />
                <span>Item added to your cart</span>
            </div>
        );
    }
    // global late initialized timer variable
    let timer: any = null;
    // onClick function which updates the storage of cart. If product is already in cart it sums up total quantity
    // otherwise it adds another product in cart storage
    const AddToCart = () => {
        // If else statement sets timeout function and assigns it to the timer variable if there is no timer present. if yes then it clears the timer meaning there won't be many alerts on the page.
        if(windowAlert) {
            clearTimeout(timer);
            timer = null;
        } else {
            setWindowAlert(true);
            timer = setTimeout(() => setWindowAlert(false), 1500);
        }
        // Declaring item variable with StorageObjectElement interface, and adding quantity to it's object keys
        const item: StorageObjectElement = {...data, quantity: value}
        // this for loop sums up quantity of the item if it is already present. if not it adds it to the cart storage.
        for(let i in props.cartStorage) {
            if(props.cartStorage[i].h2 === item.h2) {
                let temporarItem: StorageObjectElement = props.cartStorage[i];
                temporarItem.quantity += item.quantity;
                let temporarArr: StorageObjectElement[] = [...props.cartStorage];
                temporarArr[i] = temporarItem;
                return props.setCartStorage(temporarArr);
            }
        }
        return props.setCartStorage([...props.cartStorage, item]);
    }
    return(
        <div className="item-section">
            {/* Showing window alert "item added to your cart" on Add to cart button click */}
            {windowAlert && alert()}
            <div className="black-background">
                {/* Section header is component defined in Components folder which creates section headers
                that contains navigation logo and shopping cart icon, it's being used in individual section container
                also in headphone speakers and earphones containers */}
                <SectionHeader setCartStorage={props.setCartStorage} cartStorage={props.cartStorage} />
            </div>
            <div className="item-section__body app__product-section">
                {/* this button leads to the section where the item is coming from */}
                <Link to={from}>
                    <button className="go-back-button go-back-button-tablet" type="button">Go Back</button>
                </Link>
                {/* Rendering based on database */}
                <div className="app__product-body">
                    <div className="app__product-body__product app__product-body__product-tablet">
                        <div className="product__image">
                            <img src={data.image} alt="headphone" />
                        </div>
                        <div className="product__description">
                            {data.newProduct && <span>NEW PRODUCT</span>}
                            <h2>{data.h2}</h2>
                            <p>{data.p}</p>
                            {/* This regex expression splits every three digits by comma */}
                            <span id="price-tag">{'$ ' + data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                            <div id="add-to-cart">
                                <div className="input">
                                    {/* Buttons used to change value for input field. PS: input value is not able to be interacted independently */}
                                    <button onClick={handleDecrement} type="button">-</button>
                                    {/* Input field whose value holds the value state on top of container */}
                                    <input value={value} onChange={(event) => setValue(parseInt(event.target.value))} type="number" />
                                    <button onClick={handleIncrement} type="button">+</button>
                                </div>
                                <button onClick={AddToCart} type="button" className="product-button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-section__features">
                    <div className="item-section__features-features">
                        <h2>Features</h2>
                        {/* Mapping data from database which is given in arrays. for this instance features paragraphs are being rendered */}
                        {data.features.map((item: string, key: number) => {
                            return <p key={key}>{item}</p>
                        })}
                    </div>
                    <div className="item-section__features-in-the-box">
                        <div className="in-the-box-h2">
                            <h2>In The Box</h2>
                        </div>
                        {/* Rendering in the box items */}
                        <div className="in-the-box-items">
                            {/* Mapping items in the box */}
                            {data.inTheBox.map((item: string[], key: number) => {
                                return (
                                    <div className="in-the-box" key={key}>
                                        <h3>{item[0]}</h3>
                                        <p>{item[1]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="decoration-images">
                    {/* Rendering images from data */}
                    <img id="image1" src={data.images[0]} alt="human" />
                    <img id="image2" src={data.images[1]} alt="headphone" />
                    <img id="image3" src={data.images[2]} alt="headphone" />
                </div>
                <div className="item-section__sections">
                    {/* Also like container is called in useMemo function to avoid unnecessary rerenders */}
                    {useMemo(() => <AlsoLikeContainer data={data} />, [location])}
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