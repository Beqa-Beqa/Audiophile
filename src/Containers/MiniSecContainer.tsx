import "./MiniSecContainer.css";
import MiniSection from "../Components/MiniSection";
import {Path, Headphones, Speakers, Earphones} from "../Design/Homepage/export";

let MiniSecContainer = () => {
    return (
        <div className="container">
            <MiniSection icon={Path} description="headphones" item={Headphones} />
            <MiniSection icon={Path} description="speakers" item={Speakers} />
            <MiniSection icon={Path} description="earphones" item={Earphones} />
        </div>
    );
}

export default MiniSecContainer;