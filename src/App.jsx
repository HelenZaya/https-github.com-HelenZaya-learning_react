import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';
import ProductList from './ProductList.jsx';
import { selectCartCount } from './CartSlice.jsx';

function App() {
  const [page, setPage] = useState('home');
  const cartCount = useSelector(selectCartCount);

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <button className="brand" type="button" onClick={() => navigate('home')}>
          <span>Paradise</span> Nursery
        </button>
        <div className="nav-links">
          <button type="button" onClick={() => navigate('home')}>
            Home
          </button>
          <button type="button" onClick={() => navigate('plants')}>
            Plants
          </button>
          <button className="cart-link" type="button" onClick={() => navigate('cart')}>
            Cart <span>{cartCount}</span>
          </button>
        </div>
      </nav>

      {page === 'home' && (
        <>
          <header className="hero-page">
            <div className="hero-content">
              <p>Online plant shop</p>
              <h1>Paradise Nursery</h1>
              <p>
                Bring home fresh, calming greenery with curated indoor plants,
                practical care notes, and a simple shopping cart experience.
              </p>
              <button className="primary-button" type="button" onClick={() => navigate('plants')}>
                Get Started
              </button>
            </div>
          </header>
          <AboutUs />
        </>
      )}

      {page === 'plants' && <ProductList setPage={navigate} />}
      {page === 'cart' && <CartItem setPage={navigate} />}
    </div>
  );
}

export default App;
