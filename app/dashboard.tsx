import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trabalho concluido?</Text>
      </View>
      <View style={styles.content}>
        <Image 
          source={{ uri: 'https://i.redd.it/ckaip8hpj8eh1.gif' }} 
          style={{ width: 150, height: 150, marginBottom: 20 }} 
        />
        <Text style={styles.welcome}>Bem-vindo</Text>
      </View>
      <View style={styles.footer}>
        <Button title="Sair" onPress={handleLogout} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5fa', 
  },
  header: {
    backgroundColor: '#b39ddb', 
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff', 
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6a1b9a', 
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    marginBottom: 20,
  },
});