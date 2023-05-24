import "../Design/CSS/ComponentStyles/HomeBodySection.css"
import { Link } from "react-router-dom";

// As name says this container is used to hold main concepts of homepage
// earphones is image used on homepage
// other images are used in css styles
let HomeBodySection = () => {
    return(
    <div className='app__sections-body'>
        <div id="speaker-top">
            <div id="speaker-top__description">
                <h1>ZX9<br/>SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                {/* redirecting to respective item */}
                <Link to="/web-todo-5-test/speakers/ZX9 SPEAKER">
                    <button name="ZX9 SPEAKER" className='product-button' type='button'>See Product</button>
                </Link>
            </div>
        </div>
        <div id="speaker-bottom">
            <div id='speaker-bottom__description'>
                <h1>ZX7 SPEAKER</h1>
                {/* redirecting to respective item */}
                <Link to="/web-todo-5-test/speakers/ZX7 SPEAKER">
                    <button name="ZX7 SPEAKER" className='product-button' type='button'>See Product</button>
                </Link>
            </div>
        </div>
        <div id="earphones">
            {/* Div that contains image from CSS */}
            <div id="earphones-img" />
            <div id='earphones__description'>
                <div id="earphones__description-text">
                    <h1>YX1 EARPHONES</h1>
                    {/* redirecting to respective item */}
                    <Link to="/web-todo-5-test/earphones/YX1 WIRELESS EARPHONES">
                        <button name="YX1 EARPHONES" type="button" className='product-button'>See Product</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HomeBodySection;