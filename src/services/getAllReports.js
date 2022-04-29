import React, { useState } from "react";
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {Report} from '_molecules';

const GetAllReports = () => {
    const [reports, setReports] = useState([]);

    fetch('https://rkb-city-works.uc.r.appspot.com/get_view_reports')
      .then((response) => response.json())
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

export default GetAllReports;