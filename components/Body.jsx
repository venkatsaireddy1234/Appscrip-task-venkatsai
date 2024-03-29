import React, { useEffect, useState } from "react";
import styles from "../styles/body.module.css";
import ProductCard from "./ProductCard";

function Body() {
  const [selectedPreference, setSelectedPreference] = useState("RECOMMENDED");
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to handle Preference change
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
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
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
      <div className={styles.filters}>
        <div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "◄" : "►"} {menuOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
        <div className={styles.recommend}>
          <select
            value={selectedPreference}
            onChange={handlePreferenceChange}
            className={styles.recommend}
          >
            <option value="RECOMMENDED" className={styles.recommend}>
              RECOMMENDED
            </option>
            <option value="NEWEST FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE:HIGH TO LOW">PRICE : HIGH TO LOW</option>
            <option value="PRICE:LOW TO HIGH">PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.productsContainer}>
        <div
          className={`${styles.sideMenu} ${
            menuOpen ? styles.sideMenuOpen : styles.sideMenuClosed
          }`}
        >
          <div className={styles.sidenav}>
            <div className={styles.dropDown}>
              <button className={styles.dropdownbtn}>Ideal For</button>
              <div onClick={toggleDropdown}>

              {dropdownOpen ? <div>&#11165;</div> : <div>&#11167;</div>}{" "}
              </div>
            </div>
            {dropdownOpen && (
              <div className={styles.dropdownContainer}>
                <div>
                  <input type="checkbox" /> Men
                </div>
                <div>
                  <input type="checkbox" /> Women
                </div>
                <div>
                  <input type="checkbox" /> Baby & kids
                </div>
              </div>
            )}
            <hr />
            <div className={styles.dropDown}>
              <button className={styles.dropdownbtn}>Ideal For</button>
              <div onClick={toggleDropdown}></div>
              {dropdownOpen ? <div>&#11165;</div> : <div>&#11167;</div>}
            </div>
            {dropdownOpen && (
              <div className={styles.dropdownContainer}>
                <div>
                  <input type="checkbox" /> Men
                </div>
                <div>
                  <input type="checkbox" /> Women
                </div>
                <div>
                  <input type="checkbox" /> Baby & kids
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.productList}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                price={product.price}
                name={product.title}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
