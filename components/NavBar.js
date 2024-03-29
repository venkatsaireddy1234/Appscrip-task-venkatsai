import React from "react";
import styles from "../styles/navBar.module.css";
function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div>
          <strong>SHOP</strong>
        </div>
        <div>
          <strong>SKILLS</strong>
        </div>
        <div>
          <strong>STORIES</strong>
        </div>
        <div>
          <strong>ABOUT</strong>
        </div>
        <div>
          <strong>CONTACT US</strong>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.homeShop}>
        <p>HOME <strong> | SHOP</strong></p>
        
      </div>
    </>
  );
}

export default NavBar;
