import { Project } from "../../components/project/Project";
import { Header } from "../../components/Header";
import { Container, Div, FirstSection, ObjectiveTitle, ObjectiveTitles, ProjectContainer, ObjectiveContainer, SecondSection, ThirdSection } from "./Proeduc.style";
import GeralImage from '../../assets/GeralImage.jpg'
import EstudantesImage from '../../assets/EstudantesImage.jpg'
import EducadoresImage from '../../assets/EducadoresImage.jpg'
import newspaper from '../../assets/newspaper.svg'
import checklist from '../../assets/checklist.svg'
import meeting from '../../assets/meeting.svg'
import seminar from '../../assets/seminar.svg'
import portal from '../../assets/portal.svg'
import projects from '../../assets/projects.svg'
import socialMedia from '../../assets/social-media.svg'
import results from '../../assets/results.svg'
import evaluation from '../../assets/evaluation.svg'
import Footer from "../../components/Footer";

type Props = {
  color: string;
}

export default function Proeduc({ color }:Props) {
  return (
    <>
      <Header/>
      <Div>
        <h2>aprender a ensinar <br /> desenvolver o aprender</h2>
      </Div>
      <FirstSection>
        <div>
        <iframe style = {
          {
            border: '1px solid #000000'
          }
        }
        width = "1002px"
        height = "602px"
        src = "https://www.youtube.com/embed/Muy8Kf2vH3M"
        title = "YouTube video player"
        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen > 
        </iframe>
          <p>
            O PROEDUC é um programa inédito no Brasil, que trabalha a individualidade de cada estudante e promove a educação com base no reforço positivo.
            <br/> <br />
            O programa tem o objetivo de alavancar Os índices do IDEB.
            <br/> <br />
            O Índice de Desenvolvimento da Educação Básica (IDEB) foi criado em 2007 para medir a qualidade de cada escola e de cada rede de ensino. O indicador é calculado com base no desempenho do estudante em avaliações do INEP e em taxas de aprovação. Assim, para que o IDEB de uma escola ou rede cresça é preciso que o aluno aprenda, não repita o ano e frequente a sala de aula.
            <br/> <br />
            O PROEDUC atenta para a diversidade, buscando perceber e atender às necessidades educativas, em salas de aulas, no sistema regular de ensino, de forma a promover a aprendizagem e o desenvolvimento pessoal de todos. Constituído por uma prática pedagógica inovadora, plural, dinâmica e flexível requer mudanças significativas na estrutura e no funcionamento das escolas, na formação humana dos professores e nas relações professor-aluno.
            <br/> <br />
            O PROEDUC possui registro no Cartório de Títulos e Documentos de Belo Horizonte , além de direitos autorais registrados na Biblioteca Nacional ( Nº do registro: 635.598.livro:1.221.Folha264 - protocolo de requerimento:2014RJ_3012.)
          </p>
        </div>
      </FirstSection>
      <SecondSection>
        <section>

        <h3>o programa possui nove projetos:</h3>
        <ProjectContainer>
        <Project number={1} color="green" icon={newspaper} title="Jornal Mensal"/>
        <Project number={2} color="blue" icon={checklist} title="Avaliação inicial"/>
        <Project number={3} color="red" icon={meeting} title="Quatro encontros com os educadores"/>
        <Project number={4} color="yellow" icon={seminar} title="Dois seminários para os pais"/>
        <Project number={5} color="red" icon={portal} title="Portal Virtual com atendimento ilimitado"/>
        <Project number={6} color="yellow" icon={projects} title="Concurso de Projetos Interdisciplinares"/>
        <Project number={7} color="blue" icon={socialMedia} title="Redes sociais"/>
        <Project number={8} color="green" icon={results} title="Publicação de resultados apresentados"/>
        <Project number={9} color="blue" icon={evaluation} title="Avaliação Final"/>
        </ProjectContainer>
        </section>
      </SecondSection>
      <ObjectiveContainer>
      <ThirdSection>
        <h2>objetivos</h2>
        <ObjectiveTitles>
          <ObjectiveTitle color="#ECBF4A;" shape="polygon(3% 17%, 100% 0, 100% 100%, 0% 100%);">
            <h3>GERAL</h3>
          </ObjectiveTitle>
          <ObjectiveTitle color="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #42C076" shape="polygon(3% 1%, 100% 14%, 100% 100%, 0% 100%)">
            <h3>ESTUDANTES</h3>
          </ObjectiveTitle>
          <ObjectiveTitle color="#EB784C;" shape="polygon(0 19%, 100% 0, 100% 100%, 0% 100%);">
            <h3>EDUCADORES</h3>
          </ObjectiveTitle>
        </ObjectiveTitles>
        <hr />
        <Container>
          <div>
            <img src={GeralImage} alt="" />
            <ul>
              <li>Redução ao analfabetismo funcional</li>
              <li>Melhora na Leitura e na escrita</li>
              <li>Aumento dos índices do IDEB</li>
            </ul>
          </div>
          <div>
          <img src={EstudantesImage} alt="" />
            <ul>
              <li>Reencontrar o prazer de ler com temas atuais</li>
              <li>Incentivar a aceitação de diferentes ritmos de leitura</li>
              <li>Apresentar a leitura como um hobby</li>
              <li>Apresentar estudantes no contexto social, abordando temas do Plano Curricular Nacional (PCN) como: ética, meio ambiente e saúde, pluralidade cultural e pessoal</li>
              <li>Desenvolvimento da pedagogia de projetos</li>
              <li>Envolvimento do estudante com a prática</li>
            </ul>
          </div>
          <div>
          <img src={EducadoresImage} alt="" />
            <ul>
              <li>Resgate da autoestima</li>
              <li>Valorização do potencial de cada um</li>
              <li>Identificação das habilidades e competências</li>
              <li>Melhora do desempenho profissional</li>
              <li>Resgate da parceria entre professores e alunos</li>
              <li>Melhora da indisciplina na sala de aula</li>
            </ul>
          </div>
        </Container>
      </ThirdSection>
      </ObjectiveContainer>
      <Footer />
    </>
  )
}
