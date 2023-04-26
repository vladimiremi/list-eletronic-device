import { useTheme } from 'styled-components/native'
import { Text } from '../Text'
import { Button, Container } from './styles'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme()
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
      >
        {title}
      </Text>

      <Button>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.SM}
          color={theme.COLORS.WHITE}
        >
          Adicionar novo
        </Text>
      </Button>
    </Container>
  )
}
