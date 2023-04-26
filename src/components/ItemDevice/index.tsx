import { useTheme } from 'styled-components/native'
import { Text } from '../Text'
import { Container, Field } from './styles'
import Divider from '../Divider'

export function ItemDevice() {
  const theme = useTheme()
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
      >
        Câmera 1
      </Text>
      <Divider top={4} />
      <Field>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
          fontSize={theme.FONT_SIZE.SM}
          color={theme.COLORS.GRAY_100}
        >
          Serial:
        </Text>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.GRAY_100}
        >
          {' '}
          123456789
        </Text>
      </Field>

      <Field>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
          fontSize={theme.FONT_SIZE.SM}
          color={theme.COLORS.GRAY_100}
        >
          MAC Address:
        </Text>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.GRAY_100}
        >
          {' '}
          00:11:22:33:44:55
        </Text>
      </Field>

      <Field>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
          fontSize={theme.FONT_SIZE.SM}
          color={theme.COLORS.GRAY_100}
        >
          Type:
        </Text>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.GRAY_100}
        >
          {' '}
          Câmera
        </Text>
      </Field>
    </Container>
  )
}
