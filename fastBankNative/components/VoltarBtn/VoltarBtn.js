import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VoltarBtn = ({ title }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <Button onPress={handlePress} title={title} className={"h-10 w-10 bg-violet-600"}/>
    );
}

export default VoltarBtn;