import React from 'react'
import { NewsCardStyle } from './NewsCard.styles'
import arrow from '../../assets/arrow.svg'

type NewsCardProps = {
  img:string
  date:string
  title:string
  text:string
  link:string
}

const NewsCard = ({img, date, title, text, link}: NewsCardProps) => {
  return (
    <NewsCardStyle>
      <img src={img} alt={`imagem de ${img}`} />
      <div className="padding">
        <span>{date}</span>
        <h4>{title}</h4>
        <p>{text}</p>
        <div className='link'>
          <a href={link} target={'_blank'}><img src={arrow} alt="icone de seta" /></a>
        </div>
      </div>
    </NewsCardStyle>
  )
}

export default NewsCard
