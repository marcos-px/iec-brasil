import { HeaderStyle } from "./Header";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
export function Header() {
  return (
    <HeaderStyle>
      <div className="header-icons">
        <img className="iec-logo" src={Logo} alt="Logo" />
        <div className="social-media">
          <Link to={""}>
            <AiOutlineInstagram />
          </Link>
          <Link to={""}>
            <AiOutlineTwitter />
          </Link>
          <Link to={""}>
            <FaFacebookF />
          </Link>
          <Link to={""}>
            <FaLinkedinIn />
          </Link>
          <Link to={""}>
            <AiFillYoutube />
          </Link>
        </div>
      </div>
      <div className="header-buttons">
        
      </div>
    </HeaderStyle>
  );
}
