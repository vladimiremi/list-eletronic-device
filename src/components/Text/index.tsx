import { TextProps } from 'react-native'
import { TextContainer } from './styles'
import { ReactNode } from 'react'

export interface IText extends TextProps {
  children: ReactNode
  fontSize: number
  fontFamily: string
  color: string
  textAlign?: 'center' | 'right' | 'left'
}

export const Text = ({
  children,
  fontSize,
  fontFamily,
  color,
  textAlign = 'left',
  ...rest
}: IText) => {
  return (
    <TextContainer
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </TextContainer>
  )
}
