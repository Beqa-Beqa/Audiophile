import "../Design/CSS/ComponentStyles/MiniSection.css";
import { useNavigate } from "react-router";

// Mini section which is used in MiniSecContainer container 
// item is an images and description is for declaring
// which section will be accessed by this component
let MiniSection = (props: {path: string; item: string; description: string; icon: string}) => {
    // This function sets url respectively based on description
    const navigate = useNavigate();
    let navigatorClick = () => {
        navigate(`${props.path}`);
    }
    return (
        <div className="mini-section">
            {/* This div acts as a button*/}
            <div onClick={navigatorClick} id="mini-section-image-div">
                <img src={props.item} alt="item" />
            </div>
            {/* This div acts as a button */}
            <div onClick={navigatorClick} className="mini-section__description">
                <h2>{props.description}</h2>
                <div id="button-div">
                    <span>Shop</span>
                    <img src={props.icon} alt="button icon"/>
                </div>
            </div>
        </div>
    );
}

export default MiniSection;