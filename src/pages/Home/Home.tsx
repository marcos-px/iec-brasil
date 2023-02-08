import React from 'react'
import { Header } from '../../components/Header'
import { HeroSectionBottom, HeroSectionTop, HomeStyle } from './Home.styles'
//images
import estudante from '../../assets/img-estudante.png'

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
              </div>
                <div  className='video'>
                <iframe width="506" height="304" src="https://www.youtube.com/embed/T_u8g7vjt1M?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
          </HeroSectionTop>
        </div>
        <HeroSectionBottom>

        </HeroSectionBottom>
      </HomeStyle>
    </>
  )
}

export default Home
