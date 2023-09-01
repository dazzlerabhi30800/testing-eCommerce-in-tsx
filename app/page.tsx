"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { ProductData } from './utils/Types';

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('api/product/');
      const data = await res.json();
      if (data) {
        setProducts(data);
      }
    }
    fetchProduct();
  }, [])
  return (
    <main className={styles.main}>
      <h1>Products</h1>
      <div className={styles.productWrapper}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <div className={styles.discountWrapper}>
              <p>₹{product.price}</p>
              <span className={styles.discount} style={{ fontWeight: "500" }}>-{product.discount}%</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
