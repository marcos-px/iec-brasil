import React from 'react'
import { ProjectCardStyle } from './ProjectCard.styles'

type ProjectCardProps = {
  title:string
  image:string
  resume:string
  link:string
  imageHover:string
}

const ProjectCard = ({title, image, resume, link, imageHover}: ProjectCardProps) => {
  return (
    <ProjectCardStyle background={image} backgroundHover={imageHover}>

      <a href={link}><h4>{title}</h4></a>
      <a href={link}><h5>{resume}</h5></a>

    </ProjectCardStyle>
  )
}
export default ProjectCard
