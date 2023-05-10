import "../Design/CSS/ContainerStyles/IndividualItem.css";
import "../Design/CSS/ContainerStyles/UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import AlsoLikeContainer from "./AlsoLikeContainer";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { specificDataObject, StorageObjectElement } from "../Data/Interface";

// This container renders every individual product on the after click on "See Product" from any section
// data and from are passed here dynamicaly by app.tsx 
let IndividualItem = (props: {
    width: number;
    data: specificDataObject; from: string;
    cartStorage: StorageObjectElement[];
    setCartStorage: React.Dispatch<React.SetStateAction<StorageObjectElement[]>>;
}) => {
    const data = props.data;
    const from = props.from; 
    const location = useLocation();
    // useffect resets value of items on location change
    useEffect(() => {
        setValue(1);
    }, [location]);
    // State for quantity of product next to Add to cart button and event handlers for respective functions on button clicks
    const [value, setValue] = useState<number>(1);
    const handleIncrement = () => {
        setValue(value + 1);
    }
    const handleDecrement = () => {
        {value > 1 && setValue(value - 1)}
    }
    // onClick function which updates the storage of cart. If product is already in cart it sums up total quantity
    // otherwise it adds another product in cart storage
    const AddToCart = () => {
        const item: StorageObjectElement = {...data, quantity: value}
        window.alert("Item added to your cart");
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
            {/* Section header is component defined in Components folder which creates section headers
            that contains navigation logo and shopping cart icon, it's being used in individual section container
            also in headphone speakers and earphones containers */}
            <div className="black-background">
                <SectionHeader width={props.width} setCartStorage={props.setCartStorage} cartStorage={props.cartStorage} />
            </div>
            <div className="item-section__body app__product-section">
                <Link to={from}>
                    <button className="go-back-button" type="button">Go Back</button>
                </Link>
                {/* Rendering based on database */}
                <div className="app__product-body">
                    <div className="app__product-body__product">
                        <div className="product__image">
                            <img src={data.image} alt="headphone image" />
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
                        {/* Mapping data from database which is given in arrays. at this instance features paragraphs are being rendered */}
                        {data.features.map((item: string, key: number) => {
                            return <p key={key}>{item}</p>
                        })}
                    </div>
                    <div className="item-section__features-in-the-box">
                        <h2>In The Box</h2>
                        {/* Rendering in the box items */}
                        {data.inTheBox.map((item: string[], key: number) => {
                            return (
                                <div id="in-the-box" key={key}>
                                    <h3>{item[0]}</h3>
                                    <p>{item[1]}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="decoration-images">
                    {/* Rendering images from data */}
                    <img id="image1" src={data.images[0]} alt="human image" />
                    <img id="image2" src={data.images[1]} alt="headphone image" />
                    <img id="image3" src={data.images[2]} alt="headphone image" />
                </div>
                <div className="item-section__sections">
                    <AlsoLikeContainer data={data} />
                    <MiniSecContainer />
                </div>
                <div className="item-section__about">
                    <About width={props.width} />
                </div>
            </div>
            <Footer width={props.width} />
        </div>
    );
}

export default IndividualItem;