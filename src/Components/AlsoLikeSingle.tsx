import "./AlsoLikeSingle.css";
import "../Containers/UniversalSectionStyles.css";
import { Link } from "react-router-dom";
import { specificDataObject } from "../Data/Interface";


let AlsoLikeSingle = (props: {from: string | undefined, itemData: specificDataObject}) => {
    return (
        <div className="also-like__single">
            <div className="also-like__single-image">
                <img src={props.itemData.image} alt="headphone image" />
            </div>
            <div className="also-like__single-description">
                <h2>{props.itemData.h2}</h2>
                <Link to={props.from + props.itemData.h2}>
                    <button  type="button" className="product-button">See Product</button>
                </Link>
            </div>
        </div>
    );
}

export default AlsoLikeSingle;