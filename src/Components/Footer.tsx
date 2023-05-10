import "../Design/CSS/ComponentStyles/Footer.css";
import {Audiophile, Fb, Twit, Insta} from "../Design/Homepage/export"
import { navCreator } from "./SectionHeader";

// footer used for every section that has footer
let Footer = (props: {width: number;}) => {
    // navcreator function from app.tsx
    let nav = navCreator();
    if(props.width > 1150) {
        return (
            <>
                <hr />
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
            </>
        );
    } else {
        return (
            <>
                <hr />
                <div className='app__footer' >
                    <div className='app__footer-about'>
                        <div className="footer__header">
                            <img src={Audiophile} alt="logo" />
                        </div>
                        {nav}
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    </div>
                    <div className='footer__nav'>
                        <span>Copyright 2021. All Rights Reserved</span>
                        <div id="icons">
                            <img src={Fb} alt="facebook icon" />
                            <img src={Twit} alt="twitter icon" />
                            <img src={Insta} alt="instagram icon" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;