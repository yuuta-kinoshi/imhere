import { View, Text, TouchableOpacity } from 'react-native'

import { style } from './styles'

type Props = {
  user: string;
  onRemove: () => void;
}

export default function Partcipants({ user, onRemove }: Props) {
  return (
    <View style={style.container}>
      <View style={style.list}>
        <Text 
        numberOfLines={2}
        ellipsizeMode='tail'
        style={style.name}>
          {user}
        </Text>
        <TouchableOpacity>
          <Text style={style.delete} onPress={onRemove}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

