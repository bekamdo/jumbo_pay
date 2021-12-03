import "./header.css";
import Logo from "./../images/JP Logo-1.svg";
import { AiOutlineRight } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = ({ show, setShow }) => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} className="header__logo" alt="" />
        <ul className="header__list">
          <li className="header__lists active">Personal</li>
          <div className="header__vertical"></div>
          <li className="header__lists">Business</li>
        </ul>
      </div>

      <div className="header__center">
        <ul className="header__list">
          <li className="header__lists">Home</li>
          <div className="header__top"></div>

          <li className="header__lists">About Us</li>
        </ul>
      </div>
      <div className="header__right">
        <ul className="header__list">
          <li className="header__lists top">Blog</li>

          <li className="header__lists">Developer</li>
          <li className="header__lists">Contact</li>
        </ul>
        <span>
          Swahili <AiOutlineRight className="pages_direction" />
        </span>
        <button className="header__button"> Account</button>
        {!show && (
          <FaBars
            className="header__arrowdown"
            onClick={(e) => setShow(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
