import "./UniversalSectionStyles.css";
import { HeadphoneOne, HeadphoneTwo, HeadphoneThree } from "../Design/Headphones/export";
import SectionHeader from "../Components/SectionHeader";
import About from "../Components/About";
import Footer from "../Components/Footer";
import MiniSecContainer from "./MiniSecContainer";
import { Link, useLocation } from "react-router-dom";
import * as IndividualHeadphoneImages from "../Design/Headphones/HeadphoneImages/export";

export interface dataObject {
    index: number;
    newProduct: boolean;
    image: string;
    h2: string;
    p: string;
}

let Headphones = (props: {setItemRoute: any}) => {
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
            image: HeadphoneOne,
            images: [IndividualHeadphoneImages.HeadphoneOneOne, IndividualHeadphoneImages.HeadphoneOneTwo, IndividualHeadphoneImages.HeadphoneOneThree],
            h2: "XX99 Mark II Headphones",
            p: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
            price: 2999
        },
        {
            index: indexer(),
            newProduct: false,
            image: HeadphoneTwo,
            images: [IndividualHeadphoneImages.HeadphoneTwoOne, IndividualHeadphoneImages.HeadphoneTwoTwo, IndividualHeadphoneImages.HeadphoneTwoThree],
            h2: "XX99 Mark I Headphones",
            p: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
            price: 1750
        },
        {
            index: indexer(),
            newProduct: false,
            image: HeadphoneThree,
            images: [IndividualHeadphoneImages.HeadphoneThreeOne, IndividualHeadphoneImages.HeadphoneThreeTwo, IndividualHeadphoneImages.HeadphoneThreeThree],
            h2: "XX59 Headphones",
            p: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
            price: 899
        }
    ]
    return (
        <div>
            <SectionHeader description="Headphones" />
            <div className="app__product-section">
                <div className="app__product-body">
                    {data.map((item: dataObject, key) => {
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
                                        <Link to={item.h2} state={data[item.index - 1]}>
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
                                        <Link to={item.h2} state={data[item.index - 1]}>
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

export default Headphones;