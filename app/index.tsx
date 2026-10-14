import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAccess = () => {
    if (login === 'aluno' && password === '123456') {
      router.push('/dashboard');
    } else {
      const mensagem = 'Digita direito dedo torto!';
      if (Platform.OS === 'web') {
        alert(mensagem);
      } else {
        Alert.alert('Erro', mensagem);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        placeholderTextColor="#ba9ffb"
        value={login}
        onChangeText={setLogin}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#ba9ffb"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleAccess}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f5fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  input: {
    height: 45,
    borderColor: '#ce93d8',
    borderWidth: 1.5,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    color: '#6a1b9a',
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#b39ddb',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});