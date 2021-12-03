import Header from "../components/Header";
import Modal from "../components/Modal";
import "./pages.css";
import { AiOutlineRight } from "react-icons/ai";
import SendMoney_1 from "./../images/send money.svg";
import SendMoney_2 from "./../images/send money-1.svg";
import SendMoney_3 from "./../images/send money-2.svg";
import SendMoney_4 from "./../images/send money-3.svg";
import SendMoney_5 from "./../images/send money-4.svg";
import SendMoney_6 from "./../images/send money-5.svg";
import { useState } from "react";

const Pages = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="pages">
      <Header setShow={setShow} show={show} />
      {show && <Modal setShow={setShow} />}

      <div className="page__container">
        <div className="page__left">
          <div className="page__leftContainer">
            <h1>Say Jambo,to Seemless and secure payments</h1>

            <h3>Discover the easiest way to manage your finances.</h3>
            <h3>Save,invest,send and recieve money with no limit</h3>

            <div className="pages__button">
              <button className="pages__button1">
                Signup <AiOutlineRight className="pages_direction" />
              </button>
              <button className="pages__button2">
                Login <AiOutlineRight className="pages_direction" />
              </button>
            </div>
          </div>
        </div>
        <div className="page__right">
          <div className="page__rightContainer">
            <h4>BILL PAYMENTS</h4>
            <div className="page__containerImage">
              <img src={SendMoney_1} alt="" />
              <img src={SendMoney_2} alt="" />
              <img src={SendMoney_3} alt="" />
            </div>
            <div className="page__containerImage">
              <img src={SendMoney_4} alt="" />
              <img src={SendMoney_5} alt="" />
              <img src={SendMoney_6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
