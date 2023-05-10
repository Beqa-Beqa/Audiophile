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
    const [cartStorage, setCartStorage] = useState<StorageObjectElement[]>([]);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        {window.sessionStorage.getItem("cartItems") !== null && setCartStorage(JSON.parse(window.sessionStorage.getItem("cartItems")!))}
    }, []);
    useEffect(() => {
        window.sessionStorage.setItem("cartItems", JSON.stringify(cartStorage));
    }, [cartStorage]);
    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);
    return (
        <div className='app'>
            {/* Scroll to top is component which makes browser go to start while route is changed or page is refreshed */}
            <ScrollToTop>
                {/* Declaring routes */}
                <Routes>
                    <Route path="/web-todo-5-test" element={ <Home width={width} setCartStorage={setCartStorage} cartStorage={cartStorage} /> } />
                    <Route path="/web-todo-5-test/headphones" element={ <Headphones width={width} setCartStorage={setCartStorage} cartStorage={cartStorage} /> } />
                    <Route path="/web-todo-5-test/speakers" element={<Speakers width={width} setCartStorage={setCartStorage} cartStorage={cartStorage} />} />
                    <Route path="/web-todo-5-test/earphones" element={<Earphones width={width} setCartStorage={setCartStorage} cartStorage={cartStorage} />} />
                    {/*Mapping routes based on database and giving necessary attributes to elements passing an item from data as "data" and
                    passing route from where that data coms as "from"*/}
                    {headphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/web-todo-5-test/headphones/${item.h2}`} key={key} element={<IndividualItem width={width} cartStorage={cartStorage} setCartStorage={setCartStorage} from="/web-todo-5-test/headphones/" data={item} />} />
                    ))}
                    {speakerData.map((item: specificDataObject, key: number) => (
                        <Route path={`/web-todo-5-test/speakers/${item.h2}`} key={key} element={<IndividualItem width={width} cartStorage={cartStorage} setCartStorage={setCartStorage} from='/web-todo-5-test/speakers/' data={item} />} />
                    ))}
                    {earphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/web-todo-5-test/earphones/${item.h2}`} key={key} element={<IndividualItem width={width} cartStorage={cartStorage} setCartStorage={setCartStorage} from="/web-todo-5-test/earphones/" data={item} />} />
                    ))}
                    <Route path="/web-todo-5-test/checkout" element={<Checkout width={width} cartStorage={cartStorage} setCartStorage={setCartStorage} />} />
                </Routes>
            </ScrollToTop>
        </div>
  );
}

export default App;
