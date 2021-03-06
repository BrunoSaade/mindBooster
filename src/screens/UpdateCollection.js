import React from 'react';
import {useState} from "react";
import { 
  KeyboardAvoidingView, 
  View, 
  Image, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
}from 'react-native';

import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';


export default function UpdateCollection({navigation}) {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.background}>
        <View style={[styles.container, {justifyContent: 'flex-start', marginTop: 25}]}>
          <Text style={styles.containerTitleText}>Preencha os dados referente à coleção a ser criada</Text>
        </View>
        <View style={[styles.container, {flex: 6, justifyContent: 'flex-start'}]}>
          <TextInput 
            label="Nome coleção"
            style={styles.input}
            placeholder='Objetos'
            autoCorrect={true}
          />
          <TextInput 
            label="Descrição"
            style={[styles.input, styles.inputDescription]}
            placeholder='Coleção contendo objetos relacionados à materiais esportivos '
            autoCorrect={true}
          />
          <TextInput 
            label="Imagem"
            style={[styles.input, styles.inputImg]}
            placeholder='Coleção contendo objetos relacionados à materiais esportivos '
            autoCorrect={true}
          />
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>SALVAR ALTERAÇÕES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnCancel}>
            <Text style={styles.btnText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#332E56'
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
    marginBottom: 11
  },
  inputDescription: {
    height: 100
  },
  inputImg: {
    height: 160
  },
  btnRegister: {
    width: 335,
    height: 53,
    backgroundColor: '#6a61a1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
  btnCancel: {
    width: 335,
    height: 53,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  containerTitleText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 25
  }
});