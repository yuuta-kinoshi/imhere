import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import { style } from './styles'

import Participants from '../../components/Partcipants'
import React from 'react'

export default function Home() {

  const [partList, setPartList] = React.useState<{ id: number, name: string }[]>([])
  const [participant, setParticipant] = React.useState('')


  function handleAdd() {
    if (partList.some(item => item.name === participant)) {
      return Alert.alert('Atencao', 'Este participante ja existe!')
    } else if (participant === '') {
      return Alert.alert('Participante sem nome', 'O nome nao pode ficar fazio!')
    }

    setPartList([...partList, { id: partList.length + 1, name: participant }])
    setParticipant('')
    console.log(partList)
  }

  function handleRemove(name: string) {

    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setPartList(partList.filter(participant => participant.name !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleReset() {
    if (partList.length === 0) {
      return Alert.alert('Aviso', 'Nao tem nenhum participante na lista!')
    }

    Alert.alert('Resetar', 'Deseja resetar a lista de participantes?', [
      {
        text: 'Sim',
        onPress: () => setPartList([])
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={style.container}>
      <View style={style.flex}>
        <View>
          <Text style={style.eventName}>Nome do evento</Text>
          <Text style={style.eventTitle}>Sábado, 7 de setembro de 2024</Text>
        </View>
        <TouchableOpacity onPress={handleReset} style={[style.buttonReset, style.mt]}>
          <Text style={style.buttonTextReset}>Limpar lista</Text>
        </TouchableOpacity>
      </View>

      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder='Digite o nome do participante'
          placeholderTextColor='#3b3b3b'
          onChangeText={setParticipant}
          value={participant}
        />
        <TouchableOpacity onPress={handleAdd} style={style.button}>
          <Text style={style.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={partList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Participants key={item.id} user={item.name} onRemove={() => handleRemove(item.name)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={style.listEmptyText}>
            Ninguém chegou no evento ainda. Adicione participantes a sua lista.
          </Text>
        )}
      />


    </View>
  )
}