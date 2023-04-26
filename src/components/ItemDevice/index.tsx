import { useTheme } from 'styled-components/native'
import { Text } from '../Text'
import { Container, Field } from './styles'
import Divider from '../Divider'

interface IItemDevice {
  name: string
  serial: string
  macAddress: string
  type: string
}

interface DeviceProps {
  data: IItemDevice
}

export function ItemDevice({ data }: DeviceProps) {
  const theme = useTheme()
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
      >
        {data.name}
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
          {data.serial}
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
          {data.macAddress}
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
          {data.type}
        </Text>
      </Field>
    </Container>
  )
}
