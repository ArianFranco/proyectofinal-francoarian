import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer.js';
import Error from './pages/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/cartProvider';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" element={<Error />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
