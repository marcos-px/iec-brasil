import { HeaderStyle } from "./Header";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { StyledButton } from "../Button";
import Home from "../../pages/Home/Home";
export function Header() {
  return (
    <HeaderStyle>
      <div className="header-icons">
        <img className="iec-logo" src={Logo} alt="Logo" />
        <div className="social-media">
          <Link to={"https://www.instagram.com/iecbrasil/"}>
            <AiOutlineInstagram />
          </Link>
          {/* <Link to={"https://twitter.com/iecbrasil"}>
            <AiOutlineTwitter />
          </Link> */}
          <Link to={"https://www.facebook.com/iecbrasil.org"}>
            <FaFacebookF />
          </Link>
          <Link to={"https://www.linkedin.com/company/iecbrasil/"}>
            <FaLinkedinIn />
          </Link>
          <Link to={"https://www.youtube.com/@iecbrasil7560"}>
            <AiFillYoutube />
          </Link>
        </div>
      </div>
      <div className="header-buttons" style={{ background: "transparent" }}>
        <Link className="link-buttons" to={"/"}>
          Home
        </Link>
        <Link className="link-buttons" to={"/proeduc"}>
          Proeduc
        </Link>
        {/* <Link className="link-buttons" to={""}>
          Projetos
        </Link>
        <Link className="link-buttons" to={""}>
          Blog
        </Link> */}
        <Link className="link-buttons" to={"/contato"}>
          Contato
        </Link>
        <StyledButton color="black" background="#FBFBFB">
          Quero apoiar
        </StyledButton>
      </div>
    </HeaderStyle>
  );
}
