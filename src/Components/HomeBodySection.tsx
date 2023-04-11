import "./HomeBodySection.css"

let HomeBodySection = (props: {speaker: string; earphones: string; personimg: string;}) => {
    return(
    <div className='app__sections-body'>
        <div id="speaker-top">
            <img id="speaker" src={props.speaker} alt="speaker" />
            <div id="speaker-top__description">
                <h1>ZX9<br/>SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className='product-button' type='button'>See Product</button>
            </div>
        </div>
        <div id="speaker-bottom">
            <div id='speaker-bottom__description'>
                <h1>ZX7 SPEAKER</h1>
                <button className='product-button' type='button'>See Product</button>
            </div>
        </div>
        <div id="earphones">
            <div id="earphones-img">
                <img src={props.earphones} alt="earphones" />
            </div>
            <div id='earphones__description'>
                <div id="earphones__description-text">
                    <h1>YX1 EARPHONES</h1>
                    <button type="button" className='product-button'>See Product</button>
                </div>
            </div>
        </div>
        <div id="about">
            <div id="about__description">
                <h1>Bringing you the <span>best</span> audio gear</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div id="about__image">
                <img src={props.personimg} alt="person image" />
            </div>
        </div>
    </div>
    );
}

export default HomeBodySection;