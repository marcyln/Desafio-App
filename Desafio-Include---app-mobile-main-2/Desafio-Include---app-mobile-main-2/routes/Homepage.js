import React from 'react'

import { 
StyleSheet, 
Text, 
SafeAreaView, 
TouchableOpacity, 
View, 
Image } from 'react-native';

export default function Homepage({ navigation }) {

  const buttonClickedHandler = () => {
    navigation.push('ProfileMembro')
  };

    return (
      <SafeAreaView style = {{flex: 1}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC',
      }}>
        <View style ={{left: 20, top: 55}}>
        <Text style = {styles.texto}>Rychardson</Text>
        </View>
          <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton1}
          > 
          <Image
          source={require('../assets/foto-teste.png')}
        />   
        
      </TouchableOpacity>
      <View style ={{left: 2, top: 75}}>
        <Text style = {styles.texto}>Amanda</Text>
        </View>
      <View style = {{padding: 10,}}></View>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}>
      </TouchableOpacity>
      <View style ={{left: 1, top: 75}}>
        <Text style = {styles.texto}>Marcely</Text>
        </View>
      <View style = {{padding: 10}}></View>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}>
      </TouchableOpacity>
      <View style ={{left: 7, top: 75}}>
        <Text style = {styles.texto}>Leonardo</Text>
        </View>
      <View style = {{padding: 10}}></View>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}>
      </TouchableOpacity>    
      <View style = {{paddingBottom: 30}}></View>
      </View>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    roundButton1: {
      right: 85,
      width: 85,
      height: 85,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 85,
      backgroundColor: '#C4C4C4',
    },
    texto: {
      fontSize: 20,
      fontStyle: 'normal',
      color: '#003057',
      letterSpacing: 1.5,
      textDecorationStyle: 'dashed'
    },
  });




  