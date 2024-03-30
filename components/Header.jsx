import styles from "../styles/header.module.css";
import { useState } from "react";
import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiSunflower } from "react-icons/gi";
import { AiOutlineMenu,AiOutlineClose  } from "react-icons/ai";
import SideBar from "./SideBar";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const [sideBarActive, setSidebarActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [occasionDropDown, setOccasionDropDown] = useState(false);
  const [fabricDropDown, setFabricDropDown] = useState(false);
  // Function to handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdownOccasion = () => {
    setOccasionDropDown(!occasionDropDown);
  };
  const toggleDropdownFabric = () => {
    setFabricDropDown(!fabricDropDown);
  };
  const toggleSideBar = () =>{
    setSidebarActive(!sideBarActive);
  }

  return (
    <div className={styles.head}>
      <div className={styles.hamburgerMenu} >
        {sideBarActive ? (
            <AiOutlineClose onClick={toggleSideBar} />
            ) : (
              <AiOutlineMenu onClick={toggleSideBar} />
            )}
        {sideBarActive && <SideBar onToggleDropdown={toggleDropdown}
          onToggleDropdownOccasion={toggleDropdownOccasion}
          onToggleDropdownFabric={toggleDropdownFabric}
          sideBarActive={sideBarActive}
          dropdownOpen={dropdownOpen}
          occasionDropDown={occasionDropDown}
          fabricDropDown={fabricDropDown}/>}
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
