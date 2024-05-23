import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCatagory from './pages/ShopCatagory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import MyMap from './components/MyMap';

function App() {
  return (
    <div>
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path="/mens" element={<ShopCatagory banner={men_banner} category = "men"/>}/>
    <Route path='/womens' element={<ShopCatagory banner={women_banner} category="women"/>} />
    <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kid"/>}/>
    {/* <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
    </Route> */}
    <Route path='/product/:productId' element={<Product />} />
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    <Route path='/mymap' element={<MyMap/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
