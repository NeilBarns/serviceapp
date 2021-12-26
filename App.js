import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CHomeScreen from './src/screens/CHome/CHomeScreen';
export default function App() {
  return (
    // <SafeAreaView  style={styles.container}>
    //   <CHomeScreen/>
    //   <StatusBar style="auto" />
    // </SafeAreaView >
    <CHomeScreen/>
  );
}