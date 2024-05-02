import './App.css';
import Home from './Containers/Home';
import {Routes, Route} from "react-router-dom";
import Headphones from './Containers/Headphones';
import Speakers from './Containers/Speakers';
import Earphones from './Containers/Earphones';
import ScrollToTop from "./Scroll"; 
import IndividualItem from './Containers/IndividualItem';
import headphoneData from './Data/HeadphoneData';
import speakerData from './Data/SpeakerData';
import earphoneData from './Data/EarphoneData';
import { specificDataObject, StorageObjectElement } from './Data/Interface';
import { useState, useEffect } from "react";
import "./Design/CSS/Global/global.css";
import Checkout from './Containers/Checkout';

export function BlurElement(clickEvent?: any) {
    return <div onClick={clickEvent} className='blur-element' />
}

function App() {
    const [cartStorage, setCartStorage] = useState<StorageObjectElement[]>([]);
    useEffect(() => {
        window.sessionStorage.getItem("cartItems") !== null && setCartStorage(JSON.parse(window.sessionStorage.getItem("cartItems")!))
    }, []);
    useEffect(() => {
        window.sessionStorage.setItem("cartItems", JSON.stringify(cartStorage));
    }, [cartStorage]);
    return (
        <div className='app'>
            {/* Scroll to top is component which makes browser go to start while route is changed or page is refreshed */}
            <ScrollToTop>
                {/* Declaring routes */}
                <Routes>
                    <Route path="/Audiophile" element={ <Home setCartStorage={setCartStorage} cartStorage={cartStorage} /> } />
                    <Route path="/Audiophile/headphones" element={ <Headphones setCartStorage={setCartStorage} cartStorage={cartStorage} /> } />
                    <Route path="/Audiophile/speakers" element={<Speakers setCartStorage={setCartStorage} cartStorage={cartStorage} />} />
                    <Route path="/Audiophile/earphones" element={<Earphones setCartStorage={setCartStorage} cartStorage={cartStorage} />} />
                    {/*Mapping routes based on database and giving necessary attributes to elements passing an item from data as "data" and
                    passing route from where that data coms as "from"*/}
                    {headphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/Audiophile/headphones/${item.h2}`} key={key} element={<IndividualItem cartStorage={cartStorage} setCartStorage={setCartStorage} from="/Audiophile/headphones/" data={item} />} />
                    ))}
                    {speakerData.map((item: specificDataObject, key: number) => (
                        <Route path={`/Audiophile/speakers/${item.h2}`} key={key} element={<IndividualItem cartStorage={cartStorage} setCartStorage={setCartStorage} from='/Audiophile/speakers/' data={item} />} />
                    ))}
                    {earphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/Audiophile/earphones/${item.h2}`} key={key} element={<IndividualItem cartStorage={cartStorage} setCartStorage={setCartStorage} from="/Audiophile/earphones/" data={item} />} />
                    ))}
                    <Route path="/Audiophile/checkout" element={<Checkout cartStorage={cartStorage} setCartStorage={setCartStorage} />} />
                </Routes>
            </ScrollToTop>
        </div>
  );
}

export default App;
