import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        <h2>Keranjang</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id} className={styles.cartItem}>
              {item.name} - Rp{item.price}
              <button onClick={() => removeFromCart(item.id)}>Hapus</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
