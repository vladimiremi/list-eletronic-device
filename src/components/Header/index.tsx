import { useTheme } from 'styled-components/native'
import { Text } from '../Text'
import { Button, Container } from './styles'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
      >
        {title}
      </Text>

      <Button onPress={() => navigation.navigate('device/create')}>
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
