import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Icon name="pizza" size={30} color="#900" />
            <Icon name="cart" size={30} color="#900" />
        </View>
    );
};
export default Home;
