import SectionHeader from "../Components/SectionHeader";
import "./UniversalSectionStyles.css";
import { EarphoneOne } from "../Design/Earphones/export";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { Link, useLocation } from "react-router-dom";

let Earphones = (props: {setItemRoute: any;}) => {
    const location = useLocation();
    const setLocation = (event: any) => {
        props.setItemRoute(location.pathname + "/" + event.target.name);
    }
    let index = 1;
    const indexer = () => (index++);
    let data = [
        {
            index: indexer(),
            newProduct: true,
            image: EarphoneOne,
            h2: "YX1 WIRELESS EARPHONES",
            p: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        }
    ]
    return(
        <div>
            <SectionHeader description="earphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    {data.map((item, key) => {
                                if(item.index % 2 != 0) {
                                    return (
                                        <div className="app__product-body__product" key={key}>
                                            <div className="product__image">
                                                <img src={item.image} alt="headphone image" />
                                            </div>
                                            <div className="product__description">
                                                {item.newProduct && <span>NEW PRODUCT</span>}
                                                <h2>{item.h2}</h2>
                                                <p>{item.p}</p>
                                                <Link to={item.h2}>
                                                    <button name={item.h2} onClick={setLocation} type="button" className="product-button">See Product</button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="app__product-body__product" key={key}>
                                            <div className="product__description">
                                                {item.newProduct && <span>NEW PRODUCT</span>}
                                                <h2>{item.h2}</h2>
                                                <p>{item.p}</p>
                                                <Link to={item.h2}>
                                                    <button name={item.h2} onClick={setLocation} type="button" className="product-button">See Product</button>
                                                </Link>
                                            </div>
                                            <div className="product__image">
                                                <img src={item.image} alt="headphone image" />
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                </div>
                <MiniSecContainer />
                <div className="product-about">
                    <About />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Earphones;