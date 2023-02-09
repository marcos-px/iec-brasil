import React from 'react'
import { Header } from '../../components/Header'
import { HeroSectionBottom, HeroSectionTop, HomeStyle, TrapezoidMiddle, TrapezoidCards, TrapezoidTop, TrapezoidBottom } from './Home.styles'
import BlueButton from '../../components/BlueButton/BlueButton'
import ColoredCard from '../../components/ColoredCard/ColoredCard'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
//images
import estudante from '../../assets/img-estudante.png'
import estudante2 from '../../assets/img-estudante2.png'
import estudante3 from '../../assets/img-estudante3.png'
import estudante4 from '../../assets/img-estudante4.png'
import estudante5 from '../../assets/img-estudante5.png'
import pencil from '../../assets/pencil.svg'
import book from '../../assets/book.svg'
import icon1 from '../../assets/img-icon1.svg'
import icon2 from '../../assets/img-icon2.svg'
import icon3 from '../../assets/img-icon3.svg'
import icon4 from '../../assets/img-icon4.svg'

type HomeProps = {}

const Home = (props: HomeProps) => {
  return (
    <>
      <Header />
      <HomeStyle>
        <div className='blank-bg'>
          <HeroSectionTop >
            <div className='display-flex'>
              <div className='text'>
                <ul>
                  <li>quem somos</li>
                  <li>o que queremos</li>
                  <li>por que nós?</li>
                </ul>
                <h1>aprender a ensinar desenvolver o aprender</h1>
                <p>Somos um instituto que visa melhorar a educação para além dos índices. Nós criamos a vontade de aprender e continuar evoluindo nos alunos, nos professores e nas escolas.</p>
                <BlueButton href='#' children={'Quero apoiar'} />
              </div>
                <div  className='video'>
                <iframe width="506" height="304" src="https://www.youtube.com/embed/T_u8g7vjt1M?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
          </HeroSectionTop>
        </div>
        <HeroSectionBottom>
          <h1>consolidamos a educação <br /> construímos projetos, criamos soluções</h1>
          <div className='content container-home' >
            <p>O Instituto de Educação e Cidadania (IEC), foi fundado em 2008 em Belo Horizonte e somos uma OSCIP (Organização da Sociedade Civil de Interesse Público) que atua no terceiro setor do Brasil, que trabalha em prol da causa educacional brasileira.<br /><br />Trabalhamos em conjunto com organizações públicas e privadas, construindo projetos e soluções para a consolidação de uma sociedade sustentável.</p>
            <img src={estudante} alt="foto de estudante segurando cadernos" />
          </div>
        </HeroSectionBottom>
        <TrapezoidTop>
          <h1>estimulamos a leitura e a produção de textos dentro e fora da escola</h1>
        </TrapezoidTop>
        <TrapezoidCards>
            <div className='content container-home'>
                <img className='image-student' src={estudante2} alt="foto de menino escrevendo" />
              <div className="cards">
                <ColoredCard
                img={pencil}
                title={'escrita criativa em 5 passos'}
                text={'Após a leitura do passo a passo, você será capaz de escrever com agilidade e segurança. Entenderá também que a Metáfora é uma poderosa ferramenta para o autoconhecimento.'}
                color={'amarelo'}
                link={'#'}/>
                <ColoredCard
                img={book}
                title={'E-book Metáforas'}
                text={'As metáforas na educação têm o poder de criar, transformar, elucidar e fazer grandes e profundas reflexões.'}
                color={'verde'}
                link={'#'}/>
                <ColoredCard
                img={pencil}
                title={'[placeholder]'}
                text={'Nas minhas andanças pela educação me deparei com histórias que inspiraram e ensinaram. Decidi publicá-las no formato de metáforas. O objetivo é compartilhá-las com todos aqueles que educam '}
                color={'laranja'}
                link={'#'}/>
              </div>
            </div>
        </TrapezoidCards>
        <TrapezoidMiddle>
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
                <p>Inovação pedagógica, boas condições de trabalho e compromisso com estudantes.</p>
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
              <ProjectCard title={'curso de ciência e tecnologia'} image={estudante3}/>
              <ProjectCard title={'curso de ciência e tecnologia'} image={estudante4}/>
              <ProjectCard title={'curso de ciência e tecnologia'} image={estudante5}/>
            </div>
          </div>
        </TrapezoidBottom>
      </HomeStyle>
    </>
  )
}

export default Home
