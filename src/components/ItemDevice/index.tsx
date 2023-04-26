import { useTheme } from 'styled-components/native'
import { Text } from '../Text'
import { Container } from './styles'

export function ItemDevice() {
  const theme = useTheme()
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
        style={{ lineHeight: 23 }}
      >
        Device
      </Text>
    </Container>
  )
}
