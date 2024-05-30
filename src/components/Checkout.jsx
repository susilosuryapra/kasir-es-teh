import React from 'react';
import styles from './Checkout.module.css';

const Checkout = ({ cart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <div className={styles.checkoutContent}>
        <h2>Checkout</h2>
        <p>Total: Rp{total}</p>
        <button onClick={clearCart}>Bayar</button>
      </div>
    </div>
  );
};

export default Checkout;
