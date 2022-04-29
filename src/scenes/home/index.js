import React, { useState } from 'react';
import {FlatList, Text, View} from 'react-native';
import {Report} from '_molecules';
import {GetUserReports} from '_services';

const HomeScreen = () => {
    return (
        <>
            <GetUserReports email='rkbergsma@gmail.com'/>
        </>
        );
};

export default HomeScreen;