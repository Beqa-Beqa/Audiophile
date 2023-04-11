import "./MiniSecContainer.css";
import MiniSection from "../Components/MiniSection";

let MiniSecContainer = (props: {
    path: string;
    headphones: string;
    speakers: string;
    earphones: string;
}) => {
    return (
        <div className="container">
            <MiniSection icon={props.path} description="Headphones" item={props.headphones} />
            <MiniSection icon={props.path} description="Speakers" item={props.speakers} />
            <MiniSection icon={props.path} description="Earphones" item={props.earphones} />
        </div>
    );
}

export default MiniSecContainer;