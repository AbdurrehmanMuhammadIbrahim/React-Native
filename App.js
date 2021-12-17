import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput ,TouchableOpacity,ImageBackground } from 'react-native';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>

<ImageBackground source={{uri: 'https://wallpaperaccess.com/full/187161.jpg',}} style={{
       
       resizeMode:"contain"
        }} >
      {/* <Text style={styles.text}>Inside</Text> */}
    </ImageBackground>
      {/* <Image
        style={{width:1200
          , height:500 
          // , resizeMode:"contain"
        }}
        source={{
          uri: 'https://wallpaperaccess.com/full/187161.jpg',
        }}
   /> */}
      <Text style={{fontSize:90, color:"blue"}}> pakistan</Text>

      <TextInput
      // secureTextEntry={true}   for password
        style={{ height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width:"70%"
        }}
        onChangeText={(text)=> console.log (text)}
        // value={text}
      />

<TouchableOpacity
        style={styles.button}
        onPress={()=>alert ("hello world")}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

      
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
