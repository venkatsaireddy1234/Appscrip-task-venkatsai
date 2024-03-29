import styles from "../styles/header.module.css";
import { useState } from "react";
import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiSunflower } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className={styles.head}>
      <div className={styles.hamburgerMenu}>
        <AiOutlineMenu />
      </div>
      <div className={styles.flower}>
        <GiSunflower />
      </div>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.numbers}>
        <div className={styles.headerIcons}>
          <CiSearch />
        </div>
        <div className={styles.headerIconsUser}>
          <CiUser />
        </div>
        <div className={styles.headerIcons}>
          <CiHeart />
        </div>
        <div className={styles.headerIcons}>
          <HiOutlineShoppingBag />
        </div>
        <select
          className={styles.languageSelect}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="ENG">ENG</option>
          <option value="FRA">FRA</option>
          <option value="FRA">JAP</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
