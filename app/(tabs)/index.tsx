import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';

export default function HomeScreen() {
  const [contador, setContador] = useState(0);
  const scale = new Animated.Value(1);

  const animar = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const incrementar = () => {
    setContador(contador + 1);
    animar();
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
      animar();
    }
  };

  const resetar = () => {
    setContador(0);
    animar();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador Estilizado</Text>
      <Animated.Text style={[styles.numero, { transform: [{ scale }] }]}>
        {contador}
      </Animated.Text>
      <View style={styles.botoes}>
        <Pressable style={[styles.botao, styles.incrementar]} onPress={incrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>
        <Pressable style={[styles.botao, styles.decrementar]} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
        <Pressable style={[styles.botao, styles.resetar]} onPress={resetar}>
          <Text style={styles.textoBotao}>Resetar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 64,
    color: '#FF6F61',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botao: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  incrementar: {
    backgroundColor: '#4CAF50',
  },
  decrementar: {
    backgroundColor: '#F44336',
  },
  resetar: {
    backgroundColor: '#2196F3',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
