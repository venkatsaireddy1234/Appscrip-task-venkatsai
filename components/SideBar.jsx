import React from "react";
import styles from "../styles/sideBar.module.css";

function SideBar({
  menuOpen,
  dropdownOpen,
  fabricDropDown,
  onToggleDropdown,
  onToggleDropdownOccasion,
  onToggleDropdownFabric,
  occasionDropDown,
}) {
  return (
    <div>
      {menuOpen && (
        <div
          className={`${styles.sideMenu} ${
            menuOpen ? styles.sideMenuOpen : styles.sideMenuClosed
          }`}
        >
          <div className={styles.sidenav}>
            <div className={styles.dropDown}>
              <div>
                <button className={styles.dropdownbtn}>Ideal For</button>
              </div>
              <div onClick={onToggleDropdown}>
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
            <div>
              <div className={styles.dropDown}>
                <div>
                  {" "}
                  <button className={styles.dropdownbtn}>Occasion</button>
                </div>
                <div onClick={onToggleDropdownOccasion}>
                  {occasionDropDown ? <div>&#11165;</div> : <div>&#11167;</div>}
                </div>
              </div>
            </div>
            {occasionDropDown && (
              <div className={styles.dropdownContainer}>
                <div>
                  <input type="checkbox" /> Marriage
                </div>
                <div>
                  <input type="checkbox" /> Festival
                </div>
                <div>
                  <input type="checkbox" /> Office
                </div>
              </div>
            )}
            <hr />
            <div>
              <div className={styles.dropDown}>
                <div>
                  <button className={styles.dropdownbtn}>Fabric</button>
                </div>
                <div onClick={onToggleDropdownFabric}>
                  {fabricDropDown ? <div>&#11165;</div> : <div>&#11167;</div>}
                </div>
              </div>
            </div>
            {fabricDropDown && (
              <div className={styles.dropdownContainer}>
                <div>
                  <input type="checkbox" /> Cotton
                </div>
                <div>
                  <input type="checkbox" /> Woollen
                </div>
                <div>
                  <input type="checkbox" /> Polyster
                </div>
              </div>
            )}
            <hr />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
