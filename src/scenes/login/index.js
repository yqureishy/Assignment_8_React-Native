import React, { useState, useEffect }from 'react';
import {ImageBackground, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native'
import {CheckUser} from '_services';

GoogleSignin.configure({
  webClientId: '457375834677-dksltf8t20h8ejmvj4mbngnsanh97sd9.apps.googleusercontent.com',
});
const navigation = useNavigation



const signInWithGoogle = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
 
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user_sign_in =  auth().signInWithCredential(googleCredential);
     
    user_sign_in.then(user => {
      console.log(user)
    })

    console.log(idToken)
    console.log(googleCredential)

 }

 Signout = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }




const LoginScreen = ({navigation}) => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userExists, setUserExists] = useState([]);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }

      useEffect(() => {
        fetch('https://rkb-city-works.uc.r.appspot.com/check_user_exists', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: "rkbergsma@gmail.com"
        // email: userEmail

      })
    }).then((response) => response.json())
      .then((json) => setUserExists(json.userExists))
      .catch((error) => {
        console.log(error);
      });

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
      }, []);



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
        <ImageBackground source={require('_assets/images/mountain_road.jpg')}
        resizeMode='cover'
        style={{width: '100%', height: '100%'}}>
      <GoogleSigninButton
      style={{marginLeft: 90, marginTop: 200}}
      onPress={signInWithGoogle}
      />
        </ImageBackground>
    </View>
        )}

    return (
        <View>
        <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
        ></Button>
        <Button
            bgColor="#e3e3e3"
            fgColor="#363636"
            color="#ff5c5c"
            title="Sign Out"
            onPress={Signout}
      />
        </View>
    )
    };

export default LoginScreen;