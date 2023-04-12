import "./Footer.css";
import {Audiophile, Fb, Twit, Insta} from "../Design/Homepage/export"
import { navCreator } from "../App";

let Footer = () => {
    let nav = navCreator();
    return (
    <div className='app__footer' >
        <div className='app__footer-about'>
            <div>
                <img src={Audiophile} alt="logo" />
            </div>
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className='footer__nav'>
            {nav}
            <div id="icons">
                <img src={Fb} alt="facebook icon" />
                <img src={Twit} alt="twitter icon" />
                <img src={Insta} alt="instagram icon" />
            </div>
        </div>
    </div>
    );
}

export default Footer;