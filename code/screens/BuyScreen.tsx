import React from 'react';
import { View, Text } from 'react-native';
import HorsesTable from '../components/HorsesTable';

const BuyScreen = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 45 }}>Buy Screen 💲</Text>
            <HorsesTable />
        </View>
    );
};

export default BuyScreen;
