import { SafeAreaView, View, Text, TextInput, Image, Button, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  function attemptLogIn(){
    if((username.toLowerCase()=="username") && (password.toLowerCase()=="password")){
        navigation.navigate('Dashboard');
    }
    else{
        Alert.alert('Incorrect Log In','hint: try username and password')
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/logo.png')}/>
        <Text>Log In to Moodle{'\n'}</Text>
        <TextInput 
          placeholder="username"
          onChangeText={text => setUsername(text)}
        />
        <TextInput 
          placeholder="password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Button
          title='Log In'
          onPress={() => attemptLogIn()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#D9C89E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '50%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    objectFit: 'contain',
    height: '25%',
  },
});