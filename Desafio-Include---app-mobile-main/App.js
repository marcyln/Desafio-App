import React, { useState } from 'react'
import { Button, View, Text, Image, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './routes/Homepage';

//criando o navigation

function Login({ navigation }) {
  /*recuperando informações de login e senha para que possa
  ser feito uma comparação com as informações cadastradas e
  decidir se o usuário será logado ou não*/
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    if(email != 'admin' && password != '12345'){
      Alert.alert("Usuário ou senha incorretos")
    }
  }
  //criando o corpo da tela de login
  return (

    <KeyboardAvoidingView style={styles.telaLogin}>
      <View style={styles.img}>
        <Image
          source={require('./assets/logo-include.png')}
        />
      </View>
      <View style={styles.designUsuario}>
        <TextInput
        style={styles.login}
        placeholder = "Digite seu e-mail"
        autoCorrect = {false}
        //a função abaixo irá retornar as informações do email
        onChangeText = {value => setEmail(value)}
        />
        
        <TextInput
        style={styles.login}
        placeholder = "Digite sua senha"
        autoCorrect = {false}
        secureTextEntry = {true}
        onChangeText = {value => setPassword(value)}
        />
        </View>
      <View style = {styles.bottomEntrar}>
      <Button
      //criando o botão e usando o stack navigation para redirecionar para outra rota
        title="Entrar"
        onPress={() => entrar(navigation.navigate('Homepage'))}
      />
      </View>
      <View style = {styles.bottomRegistrar}>
      <Button
        title="Cadastra-se"
        onPress={() => entrar(navigation.navigate('Homepage'))}
      />
      </View>
    </KeyboardAvoidingView>
  );
}


//estilizando

const styles = StyleSheet.create({
  telaLogin: {
    flexGrow: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  img: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 15
  },

  designUsuario: {
    flexGrow: 1,
    width:'90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  login: {
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 10,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  bottomEntrar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15
  },
  bottomRegistrar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  }
});

//iniciando a função do stack navigator
const Stack = createNativeStackNavigator();

//definindo as rotas
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuário">
        <Stack.Screen name="Usuário" component={Login} />
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
