import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Text, View, Image, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  const handleSubmit = () => {

    console.log(text)
  }
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Sobrenome"
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Endereço"
      />

      <Button
        title="Submeter"
        onPress={handleSubmit}
      />
    </View>
  );
};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
      backgroundColor: '#ffffff',
    },
    text: {
      fontSize: 16,
      color: '#333333',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  ;