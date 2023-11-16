import React from "react";
import "./Footer.scss";
import FacebookIcon from "../../assets/FacebookIcon";
import TwitterIcon from "../../assets/TwitterIcon";
import InstagramIcon from "../../assets/InstagramIcon";
import TiktokIcon from "../../assets/TiktokIcon";
const Footer = () => {
  return (
    <div className="footer">
      <div className="pagination">
        <span>Home</span>
        <span>Page 1</span>
        <span>Page 2</span>
      </div>
      <div className="bottom-footer">
        <div className="horizontal-bar" />
        <div className="icons">
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <TiktokIcon />
          </span>
        </div>
      </div>
      <div className="copyright">
        <span>© Logo, Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
