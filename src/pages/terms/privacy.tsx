import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { PrivacyContainer } from "./style";

function Privacy() {
  return (<>
  <Header/>
    <PrivacyContainer>
      <div className="privacy-section">
        <h1 className="privacy-heading">
          Política de Privacidade do Instituto de Educação e Cidadania (IEC)
        </h1>
        <p>
          O Instituto de Educação e Cidadania (IEC) reconhece a importância da
          privacidade e proteção de dados pessoais e se compromete a adotar
          medidas para garantir a segurança e confidencialidade das informações
          fornecidas pelos usuários de seus serviços e visitantes do site.
        </p>
        <h2 className="privacy-heading">Coleta de Dados</h2>
        <p>
          O IEC pode coletar informações pessoais como nome, e-mail, telefone,
          endereço, CPF, entre outras, quando essas informações são fornecidas
          voluntariamente pelos usuários e visitantes do site, seja por meio de
          cadastro em nossos serviços ou por meio de formulários de contato.
        </p>
        <h2 className="privacy-heading">Uso de Dados</h2>
        <p>
          As informações coletadas pelo IEC serão utilizadas para fornecer
          serviços educacionais e informações relacionadas às atividades e
          eventos promovidos pelo Instituto. Além disso, esses dados poderão ser
          utilizados para envio de newsletters e comunicações promocionais,
          sempre respeitando a privacidade dos usuários e visitantes.
        </p>
        <h2 className="privacy-heading">Compartilhamento de Dados</h2>
        <p>
          O IEC não compartilha informações pessoais com terceiros, exceto
          quando necessário para o cumprimento de obrigações legais ou por
          solicitação judicial. Além disso, poderá compartilhar informações com
          prestadores de serviços contratados pelo Instituto para a realização
          de atividades relacionadas aos serviços oferecidos.
        </p>
        <h2 className="privacy-heading">Segurança de Dados</h2>
        <p>
          O IEC adota medidas de segurança adequadas para proteger as
          informações pessoais dos usuários e visitantes do site, como o uso de
          criptografia, firewalls e sistemas de proteção de dados.
        </p>
        <h2 className="privacy-heading">Direitos do Titular de Dados</h2>
        <p>
          Os usuários e visitantes do site têm direito a solicitar a correção,
          exclusão ou bloqueio de informações pessoais coletadas pelo IEC. Além
          disso, têm o direito de acessar os dados pessoais que foram coletados
          e armazenados pelo Instituto.
        </p>
        <h2 className="privacy-heading">
          Alterações na Política de Privacidade
        </h2>
        <p>
          O IEC se reserva o direito de alterar esta política de privacidade a
          qualquer momento, sempre respeitando as leis e normas aplicáveis à
          proteção de dados pessoais.
        </p>
        <h2 className="privacy-heading">Contato</h2>
        <p>
          Caso tenha alguma dúvida ou solicitação relacionada à privacidade de
          dados, por favor entre em contato conosco através do endereço de
          e-mail ou telefone disponibilizado em nosso site.
        </p>
      </div>
    </PrivacyContainer>
    <Footer/>
    </>
  );
}

export default Privacy;
