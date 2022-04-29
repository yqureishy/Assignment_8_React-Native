import React, { useState } from "react";
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {Zipcode} from '_molecules';

const GetAllZipCodes = () => {
    const [zipCodes, setZipCodes] = useState([]);

    fetch('https://rkb-city-works.uc.r.appspot.com/get_themes')
      .then((response) => response.json())
      .then((json) => setZipCodes(json))
      .catch((error) => {
        console.error(error);
      });

      return (<FlatList
          data={ zipCodes }
          renderItem={
              ({item}) =>
                  <Zipcode
                      picture={item.picture}
                      zip_code={item.zip_code}
                      description={item.description}
                  />
          }
      />
      );
}

export default GetAllZipCodes;