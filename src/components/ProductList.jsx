import React from 'react';
import styles from './ProductList.module.css';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Thai Tea Medium', price: 5000, imageUrl: '/images/thai-tea-medium.jpg' },
    { id: 2, name: 'Thai Tea Large', price: 10000, imageUrl: '/images/thai-tea-large.jpg' },
    { id: 3, name: 'Es Teh Red Velvet', price: 15000, imageUrl: '/images/teh-red-velvet.jpg' },
    { id: 4, name: 'Es Teh Original', price: 8000, imageUrl: '/images/es-teh-original.jpg' },
    { id: 5, name: 'Es Teh Susu', price: 10000, imageUrl: '/images/es-teh-susu.jpg' },
    { id: 6, name: 'Es Teh Taro', price: 12000, imageUrl: '/images/es-teh-taro.jpg' },
    { id: 7, name: 'Brown Sugar', price: 18000, imageUrl: '/images/brown-sugar.jpg' },
    { id: 8, name: 'Cookies and Cream', price: 12000, imageUrl: '/images/cookies-and-cream.jpg' },
    { id: 9, name: 'Es Teh Avocado', price: 15000, imageUrl: '/images/es-teh-avocado.jpg' },
    { id: 10, name: 'Es Teh Green Tea Large', price: 12000, imageUrl: '/images/es-teh-green-tea-large.jpg' },
    { id: 11, name: 'Es Teh Leci', price: 12000, imageUrl: '/images/es-teh-leci.jpg' },
    { id: 12, name: 'Es Teh Lemon', price: 12000, imageUrl: '/images/es-teh-lemon.jpg' },
    { id: 13, name: 'Milo', price: 16000, imageUrl: '/images/milo.jpg' },
    { id: 14, name: 'Ovaltine', price: 16000, imageUrl: '/images/ovaltine.jpg' },
    { id: 15, name: 'Avocado Chizu', price: 17000, imageUrl: '/images/new-avocado-chizu.jpg' },
    { id: 16, name: 'Red Velvet Chizu', price: 17000, imageUrl: '/images/new-red-velvet-chizu.jpg' },
    { id: 17, name: 'Taro Chizu', price: 17000, imageUrl: '/images/new-taro-chizu.jpg' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.productListWrapper}>
        <h2>Daftar Produk</h2>
        <ul className={styles.productList}>
          {products.map(product => (
            <li key={product.id} className={styles.productItem}>
              <img src={product.imageUrl} alt={product.name} />
              <div>
                {product.name} <br /> Rp. {product.price}
              </div>
              <button onClick={() => addToCart(product)}>Tambah</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
