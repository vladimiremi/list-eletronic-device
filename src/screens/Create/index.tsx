import { useTheme } from 'styled-components/native'
import { Text } from '../../components/Text'
import { Container } from './styles'

export function Create() {
  const theme = useTheme()
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
      >
        Hello World
      </Text>
    </Container>
  )
}
