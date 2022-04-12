import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartisVisible = useSelector(state => state.ui.isVisible)
  const cart = useSelector(state => state.cart);
  useEffect(()=> {
    fetch('https://react-http-request-c314b-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  },[cart]);
  return (
    <Layout>
      {cartisVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
