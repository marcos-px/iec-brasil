import { ProjectCard, NumberCard, IconCard } from "./Project.style"

type Props = {
  number: number;
  color: string;
  icon: string;
  title: string;
}

export function Project({ number, color, icon, title }: Props) {
  return (
    <ProjectCard>
      <NumberCard className={`type--${color}`}>
        <span>{number}</span>
      </NumberCard>
      <IconCard>
        <img src={icon} alt="" />
        <p>{title}</p>
      </IconCard>
    </ProjectCard>
  )
}