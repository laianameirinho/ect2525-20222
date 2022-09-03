import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>VASCO</Text>
      <Text style={styles.text}>OK OK</Text>
      <Image
        
        style = {styles.img} source = {require('./vasco-da-gama.png')}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#111'
  },
  text1: {
    color: '#111'
  }, 

  /*img: {
    wegth: 5,
    width: 5,
  }*/
});

