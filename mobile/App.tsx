import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * View --> div
 * Text --> se quiser estilizar, vai ser separadamente
 */

export default function App() {
  return (
    // no HTML tags!
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

// display: flex is already implicit
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
