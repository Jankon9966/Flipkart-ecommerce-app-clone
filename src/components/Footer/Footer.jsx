import React from "react";
import footerPayments from "../../assets/footer_payments.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_flex">
        <div className="footer_categories">
          <h3>ABOUT</h3>
          <div className="category_1">Category 1</div>
        </div>
        <div className="footer_categories">
          <h3>HELP</h3>
          <div className="category_1">Category 2</div>
        </div>
        <div className="footer_categories">
          <h3>CONSUMER POLICY</h3>
          <div className="category_1">Category 3</div>
        </div>
        <div className="footer_categories">
          <h3>SOCIAL</h3>
          <div className="category_1">Category 4</div>
        </div>
      </div>
      <div className="footer_bottom">
        <span>Copyright</span>
        <div className="footer_cards">
          <img src={footerPayments} alt="payments image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
