import "./HomeBodySection.css"

let HomeBodySection = (props: {speaker: string; earphones: string;}) => {
    return(
    <div className='app__sections-body'>
        <div id="speaker-top">
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
    </div>
    );
}

export default HomeBodySection;