import { FlatList } from 'react-native'
import { Container } from './styles'
import { ItemDevice } from '../../components/ItemDevice'
import { devicesMock } from '../../data/devices'
import Divider from '../../components/Divider'
import { Header } from '../../components/Header'

export function List() {
  return (
    <Container>
      <Divider top={22} />

      <Header title="Lista de dispositivos" />

      <Divider top={10} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={devicesMock}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <Divider top={16} />}
        renderItem={({ item, index }) => {
          return <ItemDevice data={item} key={index} />
        }}
      />
    </Container>
  )
}
