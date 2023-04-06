import { ColoredCardStyle } from "./ColoredCard.styles"
import download from "../../assets/download.svg"
type ColoredCardProps = {
  img: string
  title:string
  text:string
  link?:string
  color:string
}

const ColoredCard = ({img, title, text, link, color}: ColoredCardProps) => {
  return (
    <ColoredCardStyle backgroundColor={`var(--${color})`}>
      <img src={img} alt={`ícone de ${img}`} />
      <span>{title}</span>
      <p>{text}</p>
      {/* Adicionar quando o produto estiver pronto */}
      {/* <a href={link}><img src={download} alt="ícone de download" /></a> */}
    </ColoredCardStyle>
  )
}

export default ColoredCard
