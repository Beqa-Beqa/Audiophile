import "./MiniSection.css";
import { useNavigate } from "react-router";

let MiniSection = (props: {item: string; description: string; icon: string}) => {
    const navigate = useNavigate();
    let navigatorClick = () => {
        navigate(`/${props.description}`);
    }
    return (
        <div className="mini-section">
            <div onClick={navigatorClick} id="mini-section-image-div">
                <img src={props.item} alt="item image" />
            </div>
            <div onClick={navigatorClick} className="mini-section__description">
                <h2>{props.description}</h2>
                <div id="button-div">
                    <span>Shop</span>
                    <img src={props.icon} />
                </div>
            </div>
        </div>
    );
}

export default MiniSection;