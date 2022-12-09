import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import ProductsView from './views/ProductsView';
import ProductsDetailsView from './views/ProductsDetailsView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider} from './contexts/ShoppingCartContext';


function App() {
  return (
    <>
      <BrowserRouter> 
          <ShoppingCartProvider >
          <ProductProvider > 
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="*" element={<NotFoundView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/shoppingcart" element={<ShoppingCartView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductsDetailsView />} />
            </Routes>
          </ProductProvider>
          </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
