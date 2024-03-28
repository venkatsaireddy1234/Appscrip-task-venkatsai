import styles from "../styles/header.module.css";
import { useState } from "react";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className={styles.head}>
      <div className={styles.flower}>&#128269;</div>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.numbers}>
        <div className={styles.number}>&#128269;</div>
        <div className={styles.number}>&#9829;</div>
        <div className={styles.number}>&#x1F6CD; </div>
        <div className={styles.number}>&#9794;</div>
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
