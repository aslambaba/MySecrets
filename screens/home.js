import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import './styles/home.css';

function Home({navigation}){

    const PV = ()=> {
        console.log('Private chat Clicked');
        navigation.navigate('PrivateChat');
    };
    const MF = ()=> {
        console.log('My Files Clicked');
        navigation.navigate('MyFiles');
    };
    const MP = ()=> {
        console.log('My Passwords Clicked');
        navigation.navigate('MyPasswords');
    };
    return(
        <View style={Style.MainContainer}>
            <View style={Style.ViewBox}>
                <Text>Select the Feature</Text>
            </View>
            <View style={Style.ViewBox}>
                <Button onPress={PV} className='Button' title='Private Chat' />
            </View>
            <View style={Style.ViewBox}>
                <Button onPress={MF} className='Button' title='My Files' />
            </View>
            <View style={Style.ViewBox}>
                <Button onPress={MP} className='Button' title='My Passwords' />
            </View>
        </View>

    )
}
const Style = new StyleSheet.create({
    MainContainer: {
        paddingHorizontal: '20px',
        paddingVertical: '15%',

    },  
    ViewBox: {
        height: '50px'
    }
})

export default Home
