import React, { useRef } from "react";
import { Header } from "../../components/Header";
import {
  HeroSectionBottom,
  HeroSectionTop,
  HomeStyle,
  TrapezoidMiddle,
  TrapezoidCards,
  TrapezoidTop,
  TrapezoidBottom,
  Partners,
  News,
} from "./Home.styles";
import BlueButton from "../../components/BlueButton/BlueButton";
import ColoredCard from "../../components/ColoredCard/ColoredCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import NewsCard from "../../components/NewsCard/NewsCard";
//images
import estudante from "../../assets/img-estudante.png";
import estudante2 from "../../assets/img-estudante2.png";
import estudante3 from "../../assets/img-estudante3.png";
import estudante3hover from "../../assets/img-estudante3hover.png";
import estudante4 from "../../assets/img-estudante4.png";
import estudante4hover from "../../assets/img-estudante4hover.png";
import estudante5 from "../../assets/img-estudante5.png";
import estudante5hover from "../../assets/img-estudante5hover.png";
import pencil from "../../assets/pencil.svg";
import book from "../../assets/book.svg";
import icon1 from "../../assets/img-icon1.svg";
import icon2 from "../../assets/img-icon2.svg";
import icon3 from "../../assets/img-icon3.svg";
import icon4 from "../../assets/img-icon4.svg";
import placeholder from "../../assets/placeholder.png";
import noticia1 from "../../assets/img-noticia1.png";
import noticia2 from "../../assets/img-noticia2.png";
import noticia3 from "../../assets/img-noticia3.png";
import Footer from "../../components/Footer";

type HomeProps = {

};

const Home = (props: HomeProps) => {

  const who = useRef(null)
  const what = useRef(null)
  const why = useRef(null)

  const scrollTo = (elementRef:any) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header />
      <HomeStyle>
        <div className="blank-bg">
          <HeroSectionTop>
            <div className="display-flex">
              <div className="text">
                <ul>
                  <li onClick={() => scrollTo(who)}>quem somos</li>
                  <li onClick={() => scrollTo(what)}>o que queremos</li>
                  <li onClick={() => scrollTo(why)}>por que nós?</li>
                </ul>
                <h1>aprender a ensinar desenvolver o aprender</h1>
                <p>
                  Somos um instituto que visa melhorar a educação para além dos
                  índices. Nós criamos a vontade de aprender e continuar
                  evoluindo nos alunos, nos professores e nas escolas.
                </p>
                <BlueButton href="#" children={"Quero apoiar"} />
              </div>
              <div className="video">
                <iframe
                  width="506"
                  height="304"
                  src="https://www.youtube.com/embed/T_u8g7vjt1M?controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </HeroSectionTop>
        </div>
        <HeroSectionBottom>
          <h1 ref={who}>
            consolidamos a educação <br /> construímos projetos, criamos
            soluções
          </h1>
          <div className="content container-home">
            <p>
              O Instituto de Educação e Cidadania (IEC), foi fundado em 2008 em
              Belo Horizonte e somos uma OSCIP (Organização da Sociedade Civil
              de Interesse Público) que atua no terceiro setor do Brasil, que
              trabalha em prol da causa educacional brasileira.
              <br />
              <br />
              Trabalhamos em conjunto com organizações públicas e privadas,
              construindo projetos e soluções para a consolidação de uma
              sociedade sustentável.
            </p>
            <img src={estudante} alt="foto de estudante segurando cadernos" />
          </div>
        </HeroSectionBottom>
        <TrapezoidTop ref={what}>
          <h1>
            estimulamos a leitura e a produção de textos dentro e fora da escola
          </h1>
        </TrapezoidTop>
        <TrapezoidCards>
          <div className="content container-home">
            <img
              className="image-student"
              src={estudante2}
              alt="foto de menino escrevendo"
            />
            <div className="cards">
              <ColoredCard
                img={pencil}
                title={"escrita criativa em 5 passos"}
                text={
                  "Após a leitura do passo a passo, você será capaz de escrever com agilidade e segurança. Entenderá também que a Metáfora é uma poderosa ferramenta para o autoconhecimento."
                }
                color={"amarelo"}
                link={"#"}
              />
              <ColoredCard
                img={book}
                title={"E-book Metáforas"}
                text={
                  "As metáforas na educação têm o poder de criar, transformar, elucidar e fazer grandes e profundas reflexões."
                }
                color={"verde"}
                link={"#"}
              />
              <ColoredCard
                img={pencil}
                title={"[placeholder]"}
                text={
                  "Nas minhas andanças pela educação me deparei com histórias que inspiraram e ensinaram. Decidi publicá-las no formato de metáforas. O objetivo é compartilhá-las com todos aqueles que educam "
                }
                color={"laranja"}
                link={"#"}
              />
            </div>
          </div>
        </TrapezoidCards>
        <TrapezoidMiddle ref={why}>
          <div className="content container-home">
            <h2>mais do que sonhos, minha mochila tem que ter:</h2>
            <div className="cards">
              <div className="card">
                <img src={icon1} alt="icone de formando" />
                <h3>estudantes</h3>
                <p>Aprendizado focado no meu desenvolvimento.</p>
              </div>
              <div className="card">
                <img src={icon2} alt="icone de formando" />
                <h3>responsáveis</h3>
                <p>Transparência e colaboração.</p>
              </div>
              <div className="card">
                <img src={icon3} alt="icone de grupo de estudantes" />
                <h3>professores</h3>
                <p>
                  Inovação pedagógica, boas condições de trabalho e compromisso
                  com estudantes.
                </p>
              </div>
              <div className="card">
                <img src={icon4} alt="icone de escola" />
                <h3>escola</h3>
                <p>Planejamento, organização e responsabilidade</p>
              </div>
            </div>
          </div>
        </TrapezoidMiddle>
        <TrapezoidBottom>
          <div className="content container-home">
            <h2>projetos</h2>
            <div className="cards">
              <ProjectCard
                title={"curso de ciência e tecnologia"}
                image={estudante3}
                resume={"Lorem ipsum dolor sit amet consectetur. Sit turpis urna amet gravida vitae nascetur placerat. Sed in sit diam imperdiet. Viverra."}
                link={'#'}
                imageHover={estudante3hover}
                />
              <ProjectCard
                title={"curso de ciência e tecnologia"}
                image={estudante4}
                resume={"Lorem ipsum dolor sit amet consectetur. Sit turpis urna amet gravida vitae nascetur placerat. Sed in sit diam imperdiet. Viverra."}
                link={'#'}
                imageHover={estudante4hover}
              />
              <ProjectCard
                title={"curso de ciência e tecnologia"}
                image={estudante5}
                resume={"Lorem ipsum dolor sit amet consectetur. Sit turpis urna amet gravida vitae nascetur placerat. Sed in sit diam imperdiet. Viverra."}
                link={'#'}
                imageHover={estudante5hover}
              />
            </div>
            <div className="btn">
              <BlueButton href="#" children={"Ver todos"} />
            </div>
          </div>
        </TrapezoidBottom>
        <Partners>
          <div className="container-home">
            <h2>parceiros</h2>
            <div className="images">
              <img src={placeholder} alt="icone placeholder" />
              <img src={placeholder} alt="icone placeholder" />
              <img src={placeholder} alt="icone placeholder" />
              <img src={placeholder} alt="icone placeholder" />
              <img src={placeholder} alt="icone placeholder" />
            </div>
          </div>
        </Partners>
        <News>
          <div className="container-home">
            <h2>notícias</h2>
            <div className="news">
              <NewsCard
                img={noticia1}
                date={"17 de janeiro 2023"}
                title={"Novo estudo revela impacto positivo de turmas pequenas nos resultados de aprendizagem dos alunos"}
                text={"Projeto mostra evidências sobre o que é eficaz no âmbito escolar. Qualidade do professor tem grande impacto sobre desempenho dos alunos."}
                link={"#"}
              />
              <NewsCard
                img={noticia2}
                date={"17 de janeiro 2023"}
                title={"Governo anuncia investimentos em tecnologia para melhorar a educação à distância"}
                text={"Projeto mostra evidências sobre o que é eficaz no âmbito escolar. Qualidade do professor tem grande impacto sobre desempenho dos alunos."}
                link={"#"}
              />
              <NewsCard
                img={noticia3}
                date={"17 de janeiro 2023"}
                title={"Universidades públicas brasileiras recebem verbas para ampliação de programas de pós-graduação"}
                text={"Projeto mostra evidências sobre o que é eficaz no âmbito escolar. Qualidade do professor tem grande impacto sobre desempenho dos alunos."}
                link={"#"}
              />
            </div>
            <div className="btn">
              <BlueButton href="#" children={"Ver todos"} />
            </div>
          </div>
        </News>
      </HomeStyle>
      <Footer />
    </>
  );
};

export default Home;
