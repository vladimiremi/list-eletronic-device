import {
  Overpass_700Bold,
  Overpass_600SemiBold,
  Overpass_400Regular,
  Overpass_300Light,
  useFonts,
} from '@expo-google-fonts/overpass'
import { ThemeProvider } from 'styled-components/native'
import { List } from './src/screens/List'
import theme from './src/theme'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_600SemiBold,
    Overpass_400Regular,
    Overpass_300Light,
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <List /> : false}
    </ThemeProvider>
  )
}
