import './App.css';
import Home from './Containers/Home';
import {Routes, Route, Link} from "react-router-dom";
import Headphones from './Containers/Headphones';
import Speakers from './Containers/Speakers';
import Earphones from './Containers/Earphones';

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
            <Routes>
                <Route path="/" element={ <Home nav={navCreator()}/> } />
                <Route path="/headphones" element={ <Headphones /> } />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/earphones" element={<Earphones />} />
            </Routes>
        </div>
  );
}

export default App;
