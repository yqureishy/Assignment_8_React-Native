import React, { useState } from "react";
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {Report} from '_molecules';

const GetUserReports = (payload) => {
    const [reports, setReports] = useState([]);
    const userEmail = payload.email;

    fetch('https://rkb-city-works.uc.r.appspot.com/get_user_data', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail
      })
    }).then((response) => response.json())
      .then((json) => setReports(json.reports))
      .catch((error) => {
        console.error(error);
      });

      return (<FlatList
          data={ reports }
          renderItem={
              ({item}) =>
                  <Report
                      picture={item.picture}
                      title={item.title}
                      description={item.description}
                      location={item.location}
                      theme={item.theme}
                      tags={item.tags}
                  />
          }
      />
      );
}

export default GetUserReports;