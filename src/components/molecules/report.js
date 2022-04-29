import React from 'react';
import {Text, View, Image } from 'react-native';
import Styles from '_styles';

const Report = (report) => (
    <View style={Styles.reportStyle}>
        <Image
            style={Styles.reportImage}
            source={{uri: `data:image/png;base64,${report.picture}`}}
        />
        <Text>Title: {report.title}</Text>
        <Text>Description: {report.description}</Text>
        <Text>Location: {report.location}</Text>
        <Text>Zip Code: {report.theme}</Text>
        <Text>Tags: {report.tags}</Text>
    </View>
);

export default Report;