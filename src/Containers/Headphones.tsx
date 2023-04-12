import "./Headphones.css";
import { HeadphoneOne, HeadphoneTwo, HeadphoneThree } from "../Design/Headphones/export";
import SectionHeader from "../Components/SectionHeader";

let Headphones = () => {
    return (
        <div className="app__headphones">
            <SectionHeader description="Headphones" />
            <div className="app__headphones-body">
                <div className="xx99-mark-II">
                    
                </div>
                <div className="xx99-mark-I">

                </div>
                <div className="xx59">

                </div>
            </div>
        </div>
    );
}

export default Headphones;