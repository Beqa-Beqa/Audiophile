import './App.css';
import Home from './Containers/Home';
import {Routes, Route, useLocation} from "react-router-dom";
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

export function BlurElement() {
    return <div className='blur-element' />
}

function App() {
    const [toggleCart, setToggleCart] = useState(false);
    const [cartStorage, setCartStorage] = useState<StorageObjectElement[]>([]);
    const location = useLocation();
    useEffect(() => {
        setToggleCart(false);
    }, [location])
    return (
        <div className='app'>
            {/* Scroll to top is component which makes browser go to start while route is changed or page is refreshed */}
            <ScrollToTop>
                {/* Declaring routes */}
                <Routes>
                    <Route path="/" element={ <Home setCartStorage={setCartStorage} cartStorage={cartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} /> } />
                    <Route path="/headphones" element={ <Headphones setCartStorage={setCartStorage} cartStorage={cartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} /> } />
                    <Route path="/speakers" element={<Speakers setCartStorage={setCartStorage} cartStorage={cartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} />} />
                    <Route path="/earphones" element={<Earphones setCartStorage={setCartStorage} cartStorage={cartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} />} />
                    {/*Mapping routes based on database and giving necessary attributes to elements passing an item from data as "data" and
                    passing route from where that data coms as "from"*/}
                    {headphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/headphones/${item.h2}`} key={key} element={<IndividualItem cartStorage={cartStorage} setCartStorage={setCartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} from="/headphones/" data={item} />} />
                    ))}
                    {speakerData.map((item: specificDataObject, key: number) => (
                        <Route path={`/speakers/${item.h2}`} key={key} element={<IndividualItem cartStorage={cartStorage} setCartStorage={setCartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} from='/speakers/' data={item} />} />
                    ))}
                    {earphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/earphones/${item.h2}`} key={key} element={<IndividualItem cartStorage={cartStorage} setCartStorage={setCartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} from="/earphones/" data={item} />} />
                    ))}
                    {cartStorage.length > 0 && <Route path="/checkout" element={<Checkout cartStorage={cartStorage} setCartStorage={setCartStorage} toggleCart={toggleCart} setToggleCart={setToggleCart} />} />}
                </Routes>
            </ScrollToTop>
        </div>
  );
}

export default App;
