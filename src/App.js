import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route path="/" element={<ItemListContainer/>} />   
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />   
            <Route path="/detail/:ID" element={<ItemDetailContainer/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

