import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, View } from 'react-native';


export default function Homepage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Ir para..."
          onPress={() => navigation.push('Homepage')}
        />
        <Button title="Voltar para tela de usuário" onPress={() => navigation.navigate('Usuário')} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  