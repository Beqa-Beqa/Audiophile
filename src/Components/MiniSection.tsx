import "./MiniSection.css";

let MiniSection = (props: {item: string; description: string; icon: string}) => {
    return (
        <div className="mini-section">
            <div id="image-div">
                <img src={props.item} />
            </div>
            <div className="mini-section__description">
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