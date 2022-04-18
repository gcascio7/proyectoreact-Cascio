import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  return (
    <html className='teko'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route path="/" element={<ItemListContainer/>} />   
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />   
            <Route path="/detail/:ID" element={<ItemDetailContainer/>} /> 
            <Route path="/cart" element={<Cart/>} />  
      </Routes>
    </BrowserRouter>
    </html>
  );
}

export default App;

