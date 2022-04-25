import React from 'react';
import {useState} from "react";
import { 
  KeyboardAvoidingView, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
}from 'react-native';

export default function Login({navigation}) {

  const register = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Register"}]
    })
  }

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo}
            source={require('../assets/mindBoosterLogo.png')}
          />
        </View>
        <View style={styles.container}>
          <TextInput 
            style={[styles.input, {marginBottom: 11}]}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />

          <TextInput 
            style={styles.input}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Text style={[{color: 'white'}, styles.textForgotPassword]}
            onPress={() => Linking.openURL('http://google.com')}>
            Esqueci a senha
          </Text>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnRegister} onPress={() => register()}>
            <Text style={styles.btnText}>CADASTRE-SE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43405E'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 133,
    height: 133
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: '#fff',
    width: 329,
    height: 57,
    color: 'rgba(0,0,0,0.8705882352941177 )',
    fontSize: 16,
    borderRadius: 3,
    paddingLeft: 16,
    paddingTop: 26
  },
  btnSubmit: {
    width: 335,
    height: 53,
    backgroundColor: '#6a61a1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
  btnRegister: {
    width: 335,
    height: 53,
    backgroundColor: '#b58d97',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textForgotPassword: {
    alignSelf: 'flex-end',
    paddingEnd: 10,
    marginTop: 8,
    fontSize: 14,
  }
});