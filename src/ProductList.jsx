import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';

const products = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    category: 'Tropical Statement Plants',
    price: 38,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'bird-of-paradise',
    name: 'Bird of Paradise',
    category: 'Tropical Statement Plants',
    price: 54,
    image: 'https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    category: 'Tropical Statement Plants',
    price: 46,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c0d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'philodendron-birkin',
    name: 'Philodendron Birkin',
    category: 'Tropical Statement Plants',
    price: 32,
    image: 'https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'calathea-orbifolia',
    name: 'Calathea Orbifolia',
    category: 'Tropical Statement Plants',
    price: 30,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'alocasia-polly',
    name: 'Alocasia Polly',
    category: 'Tropical Statement Plants',
    price: 36,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c0d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'Low Maintenance Plants',
    price: 22,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    category: 'Low Maintenance Plants',
    price: 28,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'pothos',
    name: 'Golden Pothos',
    category: 'Low Maintenance Plants',
    price: 18,
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    category: 'Low Maintenance Plants',
    price: 20,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'peperomia',
    name: 'Peperomia',
    category: 'Low Maintenance Plants',
    price: 19,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'cast-iron-plant',
    name: 'Cast Iron Plant',
    category: 'Low Maintenance Plants',
    price: 24,
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 26,
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 16,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    category: 'Air Purifying Plants',
    price: 34,
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c60530?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    category: 'Air Purifying Plants',
    price: 17,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'boston-fern',
    name: 'Boston Fern',
    category: 'Air Purifying Plants',
    price: 21,
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'areca-palm',
    name: 'Areca Palm',
    category: 'Air Purifying Plants',
    price: 40,
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c60530?auto=format&fit=crop&w=700&q=80',
  },
];

function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const categories = [...new Set(products.map((product) => product.category))];

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="products-page" id="plants">
      <div className="section-heading">
        <p>Shop plants</p>
        <h2>Choose your next houseplant</h2>
      </div>

      {categories.map((category) => (
        <section className="product-category" key={category}>
          <h3>{category}</h3>
          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div className="product-card-content">
                    <p className="plant-category">{product.category}</p>
                    <h4>{product.name}</h4>
                    <div className="product-card-footer">
                      <span>${product.price}</span>
                      <button
                        className="primary-button small"
                        type="button"
                        disabled={isInCart(product.id)}
                        onClick={() => dispatch(addItem(product))}
                      >
                        {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}

      <button className="secondary-button floating-cart-link" type="button" onClick={() => setPage('cart')}>
        View Shopping Cart
      </button>
    </main>
  );
}

export default ProductList;
