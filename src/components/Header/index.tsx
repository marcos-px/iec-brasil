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
        {/* Tratar isso     width: 110px; height: 78px; */}
        <a href="/" title="Página Inicial">
          <img className="iec-logo" src={Logo} alt="Logo" />
        </a>
        <div className="social-media">
          <Link target={"_blank"} to={"https://www.instagram.com/iecbrasil/"}>
            <AiOutlineInstagram />
          </Link>
          <Link target={"_blank"} to={"https://www.facebook.com/iecbrasil.org"}>
            <FaFacebookF />
          </Link>
          <Link
            target={"_blank"}
            to={"https://www.linkedin.com/company/iecbrasil/"}
          >
            <FaLinkedinIn />
          </Link>
          <Link target={"_blank"} to={"https://www.youtube.com/@iecbrasil7560"}>
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
        <Link className="link-buttons" to={"/contato"}>
          Quero apoiar
        </Link>
      </div>
    </HeaderStyle>
  );
}
