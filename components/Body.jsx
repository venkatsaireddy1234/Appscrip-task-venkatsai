import React, { useEffect, useState } from "react";
import styles from "../styles/body.module.css";
import ProductCard from "./ProductCard";
function Body() {
  const [selectedPreference, setSelectedPreference] = useState("RECOMMNDED");
  const [products, setProducts] = useState([]);
  // Function to handle Preference change
  const handlePreferenceChange = (event) => {
    setSelectedPreference(event.target.value);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the function to fetch products when the component mounts
  }, []);
  return (
    <div>
      <div className={styles.ourProducts}>
        <div className={styles.header}>
          <div className={styles.text}>DISCOVER OUR PRODUCTS</div>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            </p>
            <p>
              {" "}
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.filters}>
        <div> Hide Filters</div>
        <div className={styles.recommend}>
          <select
            value={selectedPreference}
            onChange={handlePreferenceChange}
            className={styles.recommend}
          >
            <option value="RECOMMNDED" className={styles.recommend}>
              RECOMMNDED
            </option>
            <option value="NEWEST FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE:HIGHTOLOW">PRICE : HIGH TO LOW </option>
            <option value="PRICE:LOWTOHIGH">PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <hr className={styles.hr} />

      <div className={styles.productsContainer}>
        {products && products.length > 0 ? (
          products.map((product) => {
            console.log(product.id);
            return (
              <ProductCard
                className={styles.product}
                key={product.id}
                id={product.id}
                image={product.image}
                price={product.price}
                name={product.title}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Body;
