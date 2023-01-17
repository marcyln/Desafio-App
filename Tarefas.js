import React, { useState } from 'react'
import { Button } from 'react-native';
import { StyleSheet, 
  Text, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  SafeAreaView, 
  TouchableOpacity,
  Switch, 
  View, ScrollView, StatusBar} from 'react-native';
  import {Picker} from '@react-native-picker/picker';


export default function Tarefas({ navigation }) {
  const buttonClickedHandler = () => {
    navigation.push('ProfileMembro')
  };
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true)
  const [selectedValue, setSelectedValue] = useState("java");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        //o código da tela de tarefas será colado aqui, já está no formato do navigation
        //tem que lembrar que pra rodar corretamente, tem que ter uma tag Button, um comando
        //onPress e um tittle, se não, o stack navigation não irá funcionar (pelo menos aqui só rodou assim)
        <SafeAreaView style={{flex: 1}}>
          
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
       backgroundColor: '#ECECEC'}}>
        
       <View style= {styles.linha}>
        <TextInput style={styles.texton}
         placeholder = "TÍTULO"
         autoCorrect = {false}
         onChangeText = {()=>{}}/>
       </View>
       <View style={styles.espaco}></View> 
      <View style={styles.caixa}>
        <TextInput 
        style={styles.desc}
        placeholder = "Descrição"
        autoCorrect = {false}
        onChangeText = {()=>{}}
        multiline = {true}
        maxHeight = {150}
        numberOfLines = {7}
        textAlignVertical = {"top"}
        />
      </View>
      <View style= {styles.linha}>
        <Text style={styles.textom}>ADICIONAR MEMBROS</Text>
       </View>
       <View style={styles.espaco}></View> 
      <View style= {styles.linha}>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}></TouchableOpacity>
        <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton2}></TouchableOpacity>
        <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton3}></TouchableOpacity>
      </View>
      
        <View style= {styles.linha}>
        <Text style={styles.textod}>PONTUAÇÃO</Text>
       </View> 
       <View style={styles.espaco}></View> 
       <View style={styles.caixa}>
        <View>
        <Picker
        selectedValue={selectedValue}
        style={styles.opcao}
        placeholder = "CATEGORIA"
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="PONTUALIDADE" value="java" />
        <Picker.Item label="ASSIDUIDADE" value="js" />
        <Picker.Item label="DENTRO DO PRAZO" value="js" />
        <Picker.Item label="PERSONALIZADO" value="js" />
      </Picker>
        </View>
      </View>
       
      <View style={styles.espaco}></View> 
      <View style={styles.espaco}></View>
      <View style={styles.espaco}></View> 
      <View style= {styles.linha}>
        <Text style={styles.textoS}>SELO(s)</Text>
       </View>
      <View style={styles.espaco}></View> 
      <View>
        <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton4}></TouchableOpacity>
        </View>
        
      </View>
      
      </SafeAreaView>
    );
      

  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    roundButton1: {
      right: 75,
      width: 85,
      height: 85,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 85,
      backgroundColor: '#C4C4C4',
      flexDirection: 'row',
      bottom: 40,
      
    },
    roundButton2: {
      right: 60,
      width: 85,
      height: 85,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 85,
      placeholder: '+',
      backgroundColor: '#C4C4C4',
      flexDirection: 'row',
      bottom: 40,
    },
    roundButton3: {
      right: 45,
      width: 85,
      height: 85,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 85,
      backgroundColor: '#C4C4C4',
      flexDirection: 'row',
      bottom: 40,
    },
    roundButton4: {
      right: 110,
      width: 85,
      height: 85,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 85,
      backgroundColor: '#C4C4C4',
      flexDirection: 'row',
      bottom: 0,
    },
   
    opcao:{
      borderRadius: 10,
      borderWidth: 1,
      height: 10, 
      width: 170,
      right: 64,
      padding: 5,
      backgroundColor: '#FFF',
      bottom: 25
      
    },
    linha:{
      flexDirection: 'row',
      marginLeft: 100
    },
    caixa:{
      flexDirection: 'row',
      alignContent: 'space-between'
    },
    textod:{ //PONTUAÇÃO
      right: 155,
      bottom: 28,
    },
    textoS:{ //SELOS
      right: 172,
    },
    textom: { //ADD MEMBROS
      right: 127,
      bottom:45,
    },
    desc: {
      bottom: 60,
      backgroundColor: '#FFF',
      width:'80%',
      marginBottom: 0,
      fontSize: 17,
      color: '#222',
      borderRadius: 7,
      right:3,
      padding: 10,
      alignContent:'space-between',
      

    },
    texton:{ //TÍTULO
      bottom: 57,
      right:175
    },
    espaco:{
      flex: 0.05,
      backgroundColor:"#D3D3D3"
    },
  });