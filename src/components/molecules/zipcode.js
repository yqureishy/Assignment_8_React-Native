import React from 'react';
import {Text, View, Image } from 'react-native';
import Styles from '_styles';

const Zipcode = (zipcode) => (
    <View style={Styles.reportStyle}>
        <Image
            style={Styles.reportImage}
            source={{uri: `data:image/png;base64,${zipcode.picture}`}}
        />
        <Text>Zip Code: {zipcode.zip_code}</Text>
        <Text>Description: {zipcode.description}</Text>
    </View>
);

export default Zipcode;