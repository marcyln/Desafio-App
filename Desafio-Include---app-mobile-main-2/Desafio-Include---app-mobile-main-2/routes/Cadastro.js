import React, { useState } from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View, SafeAreaView,  Switch, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function Cadastro({ navigation }) {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true)
  const [selectedValue, setSelectedValue] = useState("java");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <KeyboardAvoidingView style={styles.telaLogin}>
      <View style={styles.designUsuario}>
      <View style={styles.espaco}></View> 
      <View style={styles.espaco}></View> 
       <View style= {styles.linha}>
        <Text style={styles.texton}>NOME</Text>
        <Text style={styles.textogg}>SOBRENOME</Text>
       </View>
       <View style={styles.espaco}></View> 
      <View style={styles.caixa}>
        <TextInput 
        style={styles.login1}
        placeholder = ""
        autoCorrect = {false}
        onChangeText = {()=>{}}
        />
        <TextInput
          style={styles.login2}
          placeholder = ""
          autoCorrect = {false}
          onChangeText = {()=>{}}
        />
      </View>
        
        <Text style={styles.textog}>USUÁRIO</Text>
        <View style={styles.espaco}></View> 
        <TextInput
        style={styles.login}
        placeholder = ""
        autoCorrect = {false}
        onChangeText = {()=>{}}
        />
        <Text style={styles.textoe}>E-MAIL</Text>
        <View style={styles.espaco}></View> 
        <TextInput
        style={styles.login}
        placeholder = ""
        autoCorrect = {false}
        autoComplete = 'email'
        onChangeText = {()=>{}}
        />
        <Text style={styles.texto}>SENHA</Text>
        <View style={styles.espaco}></View> 
        <View style= {styles.inputArea}> 
          <TextInput
          style={styles.logininput}
          placeholder = ""
          autoCorrect = {false}
          autoComplete = 'password'
          onChangeText = {(texto)=> setInput(texto)}
          secureTextEntry={hidePass}
          value={input}
          />
          <TouchableOpacity style={styles.icon} onPress= {() => setHidePass(!hidePass)}>
            {hidePass ?
              <Ionicons name = "eye" color="#121212" size={25}/>
              :
              <Ionicons name = "eye-off" color="#121212" size={25}/>
            }
          </TouchableOpacity>
        </View>
        <View style={styles.espaco}></View> 
        <View style= {styles.linha}>
        <Text style={styles.textod}>DIRETORIA</Text>
       </View> 
       <View style={styles.espaco}></View> 
        <View style={styles.caixa}>
        <View>
        <Picker
        placeholder = "PRIMÁRIA"
        selectedValue={selectedValue}
        style={ styles.opcao }
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="PRESIDÊNCIA" value="java" />
        <Picker.Item label="ADM/FIN" value="js" />
        <Picker.Item label="PROJETOS" value="js" />
        <Picker.Item label="GESTÃO DE PESSOAS" value="js" />
      </Picker>
        </View>
        <TextInput
          style={styles.login3}
          placeholder = "CARGO"
          autoCorrect = {false}
          onChangeText = {()=>{}}
        />
      </View>
      <Text style={styles.nomefim}>+ DIRETORIA</Text> 
      <Text style={{color:'white', width:'100%', alignItems:'center', left:20}}>----------------------------------------------------------------------------------</Text>
      <View style={styles.lgl}>
        <View style={{color:'green', bottom: 30}}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
    </View>
    <View style ={{bottom: 30}}>
    <Text>ADMINISTRADOR</Text>
    </View>
      </View>
        <TouchableOpacity style={styles.bottom} onPress={() => navigation.push('Usuário')}> 
          <Text style={styles.bottomLogar}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  telaLogin: {
    flexGrow: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  designUsuario: {
    flexGrow: 1,
    width:'90%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  login: {
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  login1: {
    top: 20,
    backgroundColor: '#FFF',
    width:'44%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    right:3,
    padding: 10,
    alignContent:'space-between'
  },
  login2: {
    top: 20,
    backgroundColor: '#FFF',
    width:'44%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    left:3,
    padding: 10,
    alignContent:'space-between'
  },
  login3: {
    top: 2,
    backgroundColor: '#FFF',
    width:'44%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    left:3,
    padding: 10,
    alignContent:'space-between'
  },
  bottom: {
    bottom: 30,
    backgroundColor: '#003057',
    width: '30%',
    height: 45,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  bottomLogar: {
    color: '#FFFAFA',
    fontSize: 15
  },
  bottomCad: {
    color: 'FFF',
    fontSize: 18,
  },
  texto:{ //senha
    right:138
  },
  texton:{ //nome
    top: 20,
    right:145
  },
  textog:{ //usuario
    top: 10,
    right:132
  },
  textoe:{ //email
    top: 10,
    right:140
  },
  textogg:{ //sobrenome
    top: 20,
    right:22
  },
  textod:{ //diretoria
    right:175
  },
  login: {
    top: 10,
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 15,
    fontSize: 17,
    color: '#222',
    borderRadius: 7,
    padding: 10,
  },
  inputArea:{
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 5, 
    height: 45,
    alignItems: 'center'
  },
  logininput:{
    width: '85%',
    height:45,
    color: '#121212',
    padding: 8,
    fontSize:17
  },
  icon:{
    width: '15%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  caixa:{
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  linha:{
    flexDirection: 'row',
    marginLeft: 100
  },
  header:{
    flex: 0.7,
    backgroundColor:"#D3D3D3"
  },
  textoh:{
    flexDirection:'row',
    alignItems:'center'
  },
  textohi:{
    top:60,
    left:170,
    color:'#E6E6FA'
  },
  textohc:{
    top:60,
    left:250,
    color:'#808080',
    fontSize:12
  },
  seta:{
    top:60,
    left:30,
    color:'white'
  },
  opcao:{
    height: 10, 
    width: 170,
    backgroundColor: '#FFF',
    
  },
  espaco:{
    flex: 0.05,
    backgroundColor:"#D3D3D3"
  },
  nomefim:{
    left: 120,
    fontSize:15
  },
  lgl:{
    flexDirection:'row',
    alignItems: 'center',
    right:90
  }
});
