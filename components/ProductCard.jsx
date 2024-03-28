import React, { useState } from "react";
import styles from "../styles/product.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useRouter } from "next/router";

function ProductCard({ id, image, name, price }) {
  const [isLiked, setIsLiked] = useState(false);
  const truncatedName = name.length > 40 ? name.slice(0, 40) + "..." : name;
  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const router = useRouter();

  const handleImageClick = () => {
    router.push(`/${id}`);
  };
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt="productImage"
        onClick={handleImageClick}
      />
      <div>{truncatedName}</div>
      <div className={styles.heart}>
        <div>${price}</div>
        <button
          className={styles.heartButton}
          onClick={() => handleHeartClick(id)}
        >
          {isLiked ? <FaHeart className={styles.redHeart} /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
