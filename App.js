import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Name, SetName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hi there! This from ReactNative</Text>
      <TextInput placeholder='Enter Your Name...' onChangeText={SetName} style={{height:50, borderBottomColor:'#000000', borderBottomWidth:1}} textAlign="center"></TextInput>
      <Text style={{padding:15}}>Hello {Name}</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}
function setText(){
  return(
    <Text>Hello {Name}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
