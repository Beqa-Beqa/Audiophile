import "./UniversalSectionStyles.css";
import SectionHeader from "../Components/SectionHeader";
import {SpeakerOne, SpeakerTwo} from "../Design/Speakers/export";
import MiniSecContainer from "./MiniSecContainer";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { Link, useLocation } from "react-router-dom";

let Speakers = (props: {setItemRoute: any}) => {
    const location = useLocation();
    const setLocation = (event: any) => {
        props.setItemRoute(location.pathname + "/" + event.target.name);
    }
    let index = 1;
    const indexer = () => (index++);
    const data = [
        {
            index: indexer(),
            newProduct: true,
            image: SpeakerOne,
            h2: "ZX9 SPEAKER",
            p: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        },
        {
            index: indexer(),
            newProduct: false,
            image: SpeakerTwo,
            h2: "ZX7 SPEAKER",
            p: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        }
    ]
    return(
        <div>
            <SectionHeader description="Speakers" />
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

export default Speakers;