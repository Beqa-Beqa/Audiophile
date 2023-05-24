import "../Design/CSS/ContainerStyles/MiniSecContainer.css";
import MiniSection from "../Components/MiniSection";
import {Path, Headphones, Speakers, Earphones} from "../Design/Homepage/export";

// This container combines three times mini section component declared in components folder and applying respective styles to it
// also passing needed attributes.
let MiniSecContainer = () => {
    return (
        <div className="container">
            <MiniSection icon={Path} path="/web-todo-5-test/headphones" description="headphones" item={Headphones} />
            <MiniSection icon={Path} path="/web-todo-5-test/speakers" description="speakers" item={Speakers} />
            <MiniSection icon={Path} path="/web-todo-5-test/earphones" description="earphones" item={Earphones} />
        </div>
    );
}

export default MiniSecContainer;