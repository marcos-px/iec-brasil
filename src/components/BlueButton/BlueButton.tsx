import React, { MouseEventHandler } from 'react'
import { BlueAnchorStyle, BlueButtonStyle } from './BlueButton.styles';

type BlueButtonProps = {
  href?: string
  onClick?: MouseEventHandler;
  children: React.ReactNode;

}

const BlueButton = ({children, href, onClick}: BlueButtonProps) => {
  if(href){
    return(
      <BlueAnchorStyle>
        <a href={href}>{children}</a>
      </BlueAnchorStyle>
    )
  }
  return(
    <BlueButtonStyle>
      <button onClick={onClick}>{children}</button>
    </BlueButtonStyle>
  )
}

export default BlueButton
