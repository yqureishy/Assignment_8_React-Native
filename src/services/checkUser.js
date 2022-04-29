import React, { useState } from "react";
import {FlatList, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {User} from '_molecules';

const CheckUser = (payload) => {
    const [userExists, setUserExists] = useState([]);
    const userEmail = payload.email;

    fetch('https://rkb-city-works.uc.r.appspot.com/check_user_exists', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // email: "rkbergsma@gmail.com"
        email: userEmail

      })
    }).then((response) => response.json())
      .then((json) => setUserExists(json.userExists))
      .catch((error) => {
        console.log(error);
      });

      return (<FlatList
          data={ userExists }
          renderItem={
              ({item}) =>
                  <User
                      email={item.email}
                  />
                  
          }
      />
      );
}

export default CheckUser;