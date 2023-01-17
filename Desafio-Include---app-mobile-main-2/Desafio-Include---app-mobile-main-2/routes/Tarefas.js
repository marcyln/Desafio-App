import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, View } from 'react-native';


export default function Tarefas({ navigation }) {
    return (
        //o código da tela de tarefas será colado aqui, já está no formato do navigation
        //tem que lembrar que pra rodar corretamente, tem que ter uma tag Button, um comando
        //onPress e um tittle, se não, o stack navigation não irá funcionar (pelo menos aqui só rodou assim)
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC'}}>
        <Text>
            Em desenvolvimento
        </Text>
        <Button
        //isso vai mudar quando fizer a nova tela, é só para caráter ilustrativo
          title='Ir para Homepage'
          onPress={() => navigation.push('Homepage')}
        />
        
      </View>
    );
  }