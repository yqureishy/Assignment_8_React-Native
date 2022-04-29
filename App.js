/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import type {Node} from 'react';

// GoogleSignin.configure({
//   webClientId: '135020628326-e1trtca24vm7peh5tqjdrudu32jp1t9i.apps.googleusercontent.com',
// });

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}


Login = () => {

auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

Logout = () => {
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{
        display: 'flex',
         position: 'absolute',
             top: 0, left: 0,
             right: 0, bottom: 0,
         alignItems: 'center',
         justifyContent: 'center',
         color: 'black'
         
     }}>

<ImageBackground source={require('_src/assets/images/mountain_road.jpg')}
        resizeMode='cover'
        style={{width: '100%', height: '100%'}}> 
        <Button
      title="Google Sign-In"
      onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    <TextInput
    placeholder="Enter username"
    onChangeText={userInput => setUsername(userInput)}
    defaultValue={username}
    />
    <TextInput
    placeholder="Enter password"
    onChangeText={userInput => setPassword(userInput)}
    defaultValue={password}
    />
        <Button
        title='Login'
        onPress={this.Login}
      />
      <Button
        title='Log out'
        onPress={this.Login}
      />
      </ImageBackground>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
