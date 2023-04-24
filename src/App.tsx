import './App.css';
import Home from './Containers/Home';
import {Routes, Route, Link} from "react-router-dom";
import Headphones from './Containers/Headphones';
import Speakers from './Containers/Speakers';
import Earphones from './Containers/Earphones';
import ScrollToTop from "./Containers/Scroll"; 
import IndividualItem from './Containers/IndividualItem';
import headphoneData from './Data/HeadphoneData';
import speakerData from './Data/SpeakerData';
import earphoneData from './Data/EarphoneData';
import { specificDataObject } from './Data/Interface';

//Nav bar creator which gives each element respective links
//it is being used in other components too
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
    return (
        <div className='app'>
            {/* Scroll to top is component which makes browser go to start while route is changed or page is refreshed */}
            <ScrollToTop>
                {/* Declaring routes */}
                <Routes>
                    <Route path="/" element={ <Home nav={navCreator()}/> } />
                    <Route path="/headphones" element={ <Headphones /> } />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/earphones" element={<Earphones />} />
                    {/*Mapping routes based on database and giving necessary attributes to elements passing an item from data as "data" and
                    passing route from where that data coms as "from"*/}
                    {headphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/headphones/${item.h2}`} key={key} element={<IndividualItem from="/headphones/" data={item} />} />
                    ))}
                    {speakerData.map((item: specificDataObject, key: number) => (
                        <Route path={`/speakers/${item.h2}`} key={key} element={<IndividualItem from='/speakers/' data={item} />} />
                    ))}
                    {earphoneData.map((item: specificDataObject, key: number) => (
                        <Route path={`/earphones/${item.h2}`} key={key} element={<IndividualItem from="/earphones/" data={item} />} />
                    ))}
                </Routes>
            </ScrollToTop>
        </div>
  );
}

export default App;
