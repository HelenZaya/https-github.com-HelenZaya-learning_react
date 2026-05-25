import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  updateQuantity,
} from './CartSlice.jsx';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <main className="cart-page" id="cart">
      <div className="section-heading">
        <p>Shopping cart</p>
        <h2>Your selected plants</h2>
      </div>

      {items.length === 0 ? (
        <section className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add a few plants to begin your Paradise Nursery order.</p>
          <button className="primary-button" type="button" onClick={() => setPage('plants')}>
            Continue Shopping
          </button>
        </section>
      ) : (
        <>
          <section className="cart-summary">
            <div>
              <span>Total plants</span>
              <strong>{cartCount}</strong>
            </div>
            <div>
              <span>Total cost</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>
          </section>

          <section className="cart-list">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}>
                    +
                  </button>
                </div>
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
                <button
                  className="visually-hidden"
                  type="button"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity }))}
                >
                  Update Quantity
                </button>
              </article>
            ))}
          </section>

          <div className="cart-actions">
            <button className="secondary-button" type="button" onClick={() => setPage('plants')}>
              Continue Shopping
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={() => window.alert('Coming Soon')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
