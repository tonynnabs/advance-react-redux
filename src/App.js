import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartisVisible = useSelector(state => state.ui.isVisible)
  return (
    <Layout>
      {cartisVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
