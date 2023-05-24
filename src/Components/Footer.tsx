import "../Design/CSS/ComponentStyles/Footer.css";
import {Audiophile, Fb, Twit, Insta} from "../Design/Homepage/export"
import { navCreator } from "./SectionHeader";

// footer used for every section that has footer.
let Footer = () => {
    // navcreator function from SectionHeader component.
    let nav = navCreator();
    return (
        <>
            <hr />
            <div className='app__footer' >
                <div className='app__footer-about'>
                    <div className="flex-group group-1">
                        <img src={Audiophile} alt="logo" />
                        {nav}
                    </div>
                    <div className="no-flex-group">
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    </div>
                    <div className="flex-group group-2">
                        <span>Copyright 2021. All Rights Reserved</span>
                        <div id="icons">
                            <img src={Fb} alt="facebook icon" />
                            <img src={Twit} alt="twitter icon" />
                            <img src={Insta} alt="instagram icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;