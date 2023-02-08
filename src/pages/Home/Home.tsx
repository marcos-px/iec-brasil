import React from 'react'
import { Header } from '../../components/Header'
import { HeroSectionBottom, HeroSectionTop, HomeStyle } from './Home.styles'
//images
import estudante from '../../assets/img-estudante.png'
import BlueButton from '../../components/BlueButton/BlueButton'

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
      </HomeStyle>
    </>
  )
}

export default Home
