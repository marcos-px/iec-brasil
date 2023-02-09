import React from 'react'
import { ProjectCardStyle } from './ProjectCard.styles'

type ProjectCardProps = {
  title:string
  image:string
}

const ProjectCard = ({title, image}: ProjectCardProps) => {
  return (
    <ProjectCardStyle background={image}>
      <h4>{title}</h4>
    </ProjectCardStyle>
  )
}
export default ProjectCard
