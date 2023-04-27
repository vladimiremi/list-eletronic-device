import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { List } from '../screens/List'
import { Create } from '../screens/Create'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

const { Navigator, Screen } = createNativeStackNavigator()

export function Routes() {
  const { COLORS } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.DARK }}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="device/list" component={List} />
          <Screen name="device/create" component={Create} />
        </Navigator>
      </NavigationContainer>
    </View>
  )
}
