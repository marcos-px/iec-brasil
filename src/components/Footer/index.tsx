import { Link } from "react-router-dom";
import Logo from "../../../public/iec.png";
import { BiEnvelope } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FooterStyle, InfoFooter } from "./Footer.style";

function Footer() {
  return (
    <FooterStyle>
      <InfoFooter>
        <div className="ContainerNavecacaoFooter">
          <div className="ContainterLogo">
            <Link to={""}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="NavecacaoFooter">
            <h3>Navegação</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"proeduc"}>Proeduc</Link>
              </li>

              <li>
                <Link to={"/contato"}>Contato</Link>
              </li>
            </ul>
          </div>
          <div className="NavecacaoFooter">
            <h3>Termos e Políticas</h3>
            <ul>
              <li>
                <Link to={""}>Termos de uso</Link>
              </li>
              <li>
                <Link to={""}>Política de privacidade</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ContainerContatoFooter">
          <label>
            Newslatter
            <div>
              <input type="text" placeholder="Email" />
              <i>
                <BiEnvelope />
              </i>
              <button>
                <BiEnvelope />
                <AiOutlineArrowRight />
              </button>
            </div>
          </label>
          <div className="NavegacaoRedesSociais">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </InfoFooter>
      <div className="RodapeFooter">
        <p>
          2023 Instituto de Educação e Cidadania.Todos os direitos reservados
        </p>
      </div>
    </FooterStyle>
  );
}

export default Footer;
