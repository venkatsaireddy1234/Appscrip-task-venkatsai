import React from "react";
import styles from "../styles/footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {  FaCcMastercard, FaPaypal,FaApplePay  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerItem}>
          <p><strong>BE THE FIRST TO KNOW</strong></p>
          <p>sign up for updates from metta muse</p>
          <input type="email" placeholder="Enter your e-mail"  className={styles.input}/>
          <button type="submit" className={styles.subscribe}>SUBSCRIBE</button>
        </div>
        <div className={styles.footerItem}>
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
      </div>{" "}
      <hr />
      <div className={styles.footerContent}>
        <div className={styles.footerItem}>
          <p><strong>metta muse</strong></p>
          <p>About us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className={styles.footerItem}>
          <p><strong>QUICK LINKS</strong></p>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <div className={styles.copyright} >
            <p><strong>Follow Us:</strong></p>
            <div className={styles.socialIcons}>
            <FaInstagram />
            <TiSocialLinkedinCircular />
            </div>
          </div>
          <div className={styles.copyright}>
            <p><strong>metta muse accepts</strong></p>
            <div className={styles.footerIcons}>
            <div className={styles.footerIcon}><FcGoogle /> <span className={styles.pay}>-pay</span></div>
            <div className={styles.footerIcon}><FaCcMastercard /></div>
            <div className={styles.footerIcon}><FaPaypal /></div>
            <div className={styles.footerIcon}><FaApplePay /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
