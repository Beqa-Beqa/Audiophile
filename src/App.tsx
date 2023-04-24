import './App.css';
import Home from './Containers/Home';
import {Routes, Route, Link} from "react-router-dom";
import Headphones from './Containers/Headphones';
import Speakers from './Containers/Speakers';
import Earphones from './Containers/Earphones';
import ScrollToTop from "./Containers/Scroll"; 
import {useState, useEffect} from 'react';
import IndividualItem from './Containers/IndividualItem';
import headphoneData from './Data/HeadphoneData';
import speakerData from './Data/SpeakerData';
import earphoneData from './Data/EarphoneData';

export function navCreator() {
    return (
        <nav className="navigation">
            <Link className='a' to="/">Home</Link>
            <Link className='a' to="/headphones">Headphones</Link>
            <Link className='a' to="/speakers">Speakers</Link>
            <Link className='a' to="/earphones">Earphones</Link>
        </nav>
    );
}


function App() {
    const [itemRoute, setItemRoute] = useState("");
    useEffect(() => {
        const data = window.localStorage.getItem("CURL");
        {data && setItemRoute(data)}
    }, []);
    useEffect(() => {
        window.localStorage.setItem("CURL", itemRoute);
    }, [itemRoute]);
    return (
        <div className='app'>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={ <Home setItemRoute={setItemRoute} nav={navCreator()}/> } />
                    <Route path="/headphones" element={ <Headphones setItemRoute={setItemRoute} /> } />
                    <Route path="/speakers" element={<Speakers setItemRoute={setItemRoute} />} />
                    <Route path="/earphones" element={<Earphones setItemRoute={setItemRoute} />} />
                    {headphoneData.map((item: any, key: number) => (
                        <Route path={`/headphones/${item.h2}`} key={key} element={<IndividualItem from="/headphones/" data={item} />} />
                    ))}
                    {speakerData.map((item: any, key: number) => (
                        <Route path={`/speakers/${item.h2}`} key={key} element={<IndividualItem from='/speakers/' data={item} />} />
                    ))}
                    {earphoneData.map((item: any, key: number) => (
                        <Route path={`/earphones/${item.h2}`} key={key} element={<IndividualItem from="/earphones/" data={item} />} />
                    ))}
                </Routes>
            </ScrollToTop>
        </div>
  );
}

export default App;
