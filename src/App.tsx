import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductsDetailsView from './views/ProductsDetailsView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider} from './contexts/ShoppingCartContext';
import CategoriesView from './views/CategoriesView';
import CRUDView from './views/CRUDView';
import UpdateProducts from './CRUD-components/UpdateProducts';


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
              <Route path="/categories" element={<CategoriesView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/CRUD" element={<CRUDView />} />
              <Route path="/products/CRUD/:id" element={<UpdateProducts />} />
              <Route path="/products/details/:id" element={<ProductsDetailsView />} />
            </Routes>
          </ProductProvider>
          </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
