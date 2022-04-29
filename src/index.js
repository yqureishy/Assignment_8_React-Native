import 'react-native-gesture-handler';
import React, { useState, useEffect }from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createDrawerNavigator, DrawerItem,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';




import HomeScreen from '_scenes/home';
import LoginScreen from '_scenes/login';


const Drawer = createDrawerNavigator();
const navigation = useNavigation

// const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(!user);
        if (initializing) setInitializing(false);
      }

//       useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//       }, []);

Signout = ({navigation}) => {
  auth()
  .signOut()
  .then(() => navigation.navigate('Home'));
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Signout"
        onPress={Signout}
      />
    </DrawerContentScrollView>

  );
}


const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Login" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="" onPress={Signout} />
      </DrawerContentScrollView>
    )
  }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />


    </Drawer.Navigator>
  </NavigationContainer>
);

//const App = () => <HomeScreen/>;

export default App;