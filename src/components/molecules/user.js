import React from 'react';
import {Text, View, Image } from 'react-native';
import Styles from '_styles';

const User = (user) => (
    <View>
        <Text>User email: {user.email}</Text>
    </View>
);

export default User;