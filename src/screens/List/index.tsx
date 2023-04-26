import { FlatList, Text } from 'react-native'
import { Container, Separator } from './styles'
import { ItemDevice } from '../../components/ItemDevice'
import { devicesMock } from '../../data/devices'
import Divider from '../../components/Divider'

export function List() {
  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={devicesMock}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <Divider top={11} />}
        renderItem={({ item, index }) => {
          return <ItemDevice data={item} key={index} />
        }}
      />
    </Container>
  )
}
