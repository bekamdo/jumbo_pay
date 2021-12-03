import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ show, setShow }) => {
  const hideModal = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div className="modal">
      <div className="modal__container">
        <AiOutlineClose className="modal__close" onClick={hideModal} />
        <ul className="modal__list">
          <li className="modal__lists modal__active">Personal</li>
          <li className="modal__lists">Business</li>
          <li className="modal__lists">Home</li>
          <li className="modal__lists">About Us</li>
          <li className="modal__lists top">Blog</li>
          <li className="modal__lists">Developer</li>
          <li className="modal__lists">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
