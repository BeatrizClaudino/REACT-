import React, { useState } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View, Switch } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../../components/Navbar/Navbar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import VoltarBtn from '../../components/Voltarbtn/VoltarBtn';

export default function Home({ navigation }) {
    const MaterialIconss = styled(MaterialIcons)

    const Saldo = 121212
    const [showSaldo, setShowSaldo] = useState(false)
    return (
        <View className={'bg-black h-44'}>
            <Navbar />
            <VoltarBtn />
            <TouchableOpacity onPress={() => navigation.navigate('Login')} className={'bg-black w-1/4 h-12 rounded-full flex justify-center items-center'}>
                <Text className={'text-white'}>Back</Text>
            </TouchableOpacity>
            <View className={"flex justify-between flex-row px-5"}>
                <Text className={'text-white'}>See Bank balance</Text>
                {/* MUDAR ROTA */}
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text className={'text-white'}>See statement</Text>
                </TouchableOpacity>
            </View>
            <View className={"px-4 flex flex-row items-center"}>
                <MaterialIconss name="attach-money" size={20} color="white" />
                <View className={"flex flex-row"}>
                    {showSaldo && <Text className={"bg-orange-700 h-7 w-20"}>{Saldo}</Text>}
                    {!showSaldo && <View className={"h-7 w-20 bg-slate-300"} />}
                    <Text>Saldo:</Text>
                    <Switch onValueChange={() => setShowSaldo(!showSaldo)} value={showSaldo} />
                </View>
            </View>
            <View className={"flex items-center"}>
                {/* MINI CARROSSEL com touchable*/}
                <View className={"h-12 w-8/12 m-5 bg-orange-500 flex justify-center absolute rounded-lg"}>
                </View>
            </View>
        </View>
    )
}