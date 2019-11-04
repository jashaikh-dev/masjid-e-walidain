import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPageView from './src/components/LandingPageView'
export default function App() {
  return (
    <LandingPageView />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
