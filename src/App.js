import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer.js';
import './App.css';
import Error from './pages/Error/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/cartProvider';


function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" element={<Error />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <div>footer det</div>
        </CartProvider>
      </BrowserRouter>

  );
}

export default App;
