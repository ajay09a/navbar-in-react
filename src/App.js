import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './Navbar';
import ContactUs from './components/ContactUs';
import Item from './components/Item';
import ItemDetails from './components/ItemDetails';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/item' element={<Item />}></Route>
        <Route path='/item/:Id' element={<ItemDetails />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
