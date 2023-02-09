import styled from "styled-components";
import bg from '../../assets/hero-top.png'
import bg2 from '../../assets/hero-bottom.png'

export const HomeStyle = styled.div`
margin-top: 14px;

.blank-bg{
  height: 551px;
  position: relative;
}
`
export const HeroSectionTop = styled.section`
  position: absolute;
  padding: 0 65px;
  left: 50%;
  transform: translateX(-50%);
  width: 1336px;
  height: 568px;
  background-image: url(${bg});
  background-position: center top;
  background-size: cover;


  .display-flex{
    display: flex;
    justify-content: space-around;

  }
  .text{
    max-width: 620px;
    ul{
      color: var(--neutral);
      max-width: 432px;
      margin: 68px 0 40px 0;
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      li{
        cursor: pointer;
      }
    }
    h1{
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 120%;
      text-transform: uppercase;
      font-family: "Archivo-condensed";
      color: var(--hover);
    }
    p{
      margin: 24px 0 50px 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      max-width: 600px;
    }
  }
  .video{
    margin-top: 132px;
    iframe{
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 10px;
      border: none;
    }
  }
`
export const HeroSectionBottom = styled.section`
height: 802px;
background-image: url(${bg2});
background-position: center top;
background-size: contain;

h1{
  margin: 0 auto;
  font-family: 'Archivo-Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: var(--hover);
  padding-top: 182px;
  max-width: 1064px;
}

.content{
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  p{
    max-width: 630px;
    color: var(--heavy);
    line-height: 150%;
    }
  }
`

export const TrapezoidTop = styled.section`
height: 849px;
background-color: var(--azul);
clip-path: polygon(0 0, 100% 0, 100% 85%, 0 99%);
h1{
  margin: 0 auto;
  padding: 142px 0 0 0;
  font-family: 'Archivo-extra-condensed';
  max-width: 920px;
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}


`
export const TrapezoidCards = styled.section`
position: relative;
z-index: 0;
.content{
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  bottom: 7px;
}

.cards{
  width: 682px;
  display: flex;
  justify-content: space-between;
}

`

export const TrapezoidMiddle = styled.section`
height: 680px;
padding-top: 170px;

h2{
  font-family: 'Archivo-condensed';
  font-size: 48px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: var(--hover);
}

h3{
  font-family: 'Archivo-extra-condensed';
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--azul);
  margin: 16px 0;
}

p{
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
}

.cards{
  margin-top: 65px;
  display: flex;
  justify-content: space-between;
}

.card{
  max-width: 230px;
  text-align: center;
}
`
export const TrapezoidBottom = styled.section`
padding-top: 252px;
clip-path: polygon(0 18%, 100% 0, 100% 100%, 0 100%);
background-color: #ffffff;
padding-bottom: 50px;
h2{
margin-bottom: 50px;
font-family: 'Archivo-extra-condensed';
font-size: 48px;
line-height: 52px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--azulEscuro);
}
.cards{
  display: flex;
  justify-content: space-between;

}
.btn{
  text-align: center;
  margin: 55px 0 30px 0;
}
`
export const Partners = styled.section`
h2{
  padding-top: 135px;
  margin-bottom: 75px;
  font-family: 'Archivo-extra-condensed';
  font-size: 48px;
  line-height: 52px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--hover);
}
.images{
  margin: 0 auto;
  padding-bottom: 160px;
  max-width: 930px;
  display: flex;
  justify-content: space-between;
}
`
export const News = styled.section`
h2{
margin-bottom: 56px;
font-family: 'Archivo-extra-condensed';
font-size: 48px;
line-height: 52px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--azulEscuro);
}
.news{
  display: flex;
  justify-content: space-between;
}
.btn{
  text-align: center;
  margin: 60px 0 100px 0;
}
`
