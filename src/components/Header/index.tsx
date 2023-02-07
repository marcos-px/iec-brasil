import { HeaderStyle } from "./Header";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Button } from "../Button/Button";
import { StyledButton } from "../Button";
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
      <div className="header-buttons" style={{ background: "transparent" }}>
        <Link className="link-buttons"  to={""} >Home</Link>
        <Link className="link-buttons" to={""} >Proeduc</Link >
        <Link className="link-buttons" to={""} >Projetos</Link >
        <Link className="link-buttons" to={""} >Blog</Link >
        <Link className="link-buttons" to={""} >Contato</Link>
        <StyledButton color="black" background="#FBFBFB">
          Quero apoiar
        </StyledButton>
      </div>
    </HeaderStyle>
  );
}
