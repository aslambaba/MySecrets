import React, { useRef, useState } from 'react';
import {View,Text,Button, StyleSheet, FlatList, Modal, ref} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MySecrets', {useNewUrlParser: true, useUnifiedTopology: true});
var con = mongoose.connection;
con.on("Connected" , ()=>{
    console.log("Database Connected")
});

function MyPasswords(){

    const web = useRef('');
    const username = useRef('');
    const pass = useRef('');

    const [model,setModel] = useState(false);
    const p = [
        {web: 'Facebook', password: '123', username: 'aslam'}
    ];

    const SubmitPass = ()=>{
        console.log(web.current.value);
        const newData = {
            web: web.current.value,
            password: pass.current.value,
            username: username.current.value,
        };

    }

    return(
        
        <View style={Style.ViewContainer}>
            <Modal visible={model} animationType='slide'>
                <View style={Style.mm}>
                <Text>Model Data</Text>
                <TextInput ref={web} placeholder= 'Enter The Website Link'/>
                 <TextInput ref={username} placeholder='Enter Username' />
                 <TextInput ref={pass} placeholder='Enter Password' />
                 <Button title='submit' onPress={SubmitPass} />
                </View>
            </Modal>    
            <View style={Style.ViewHeading}>
                <Text>My Passwords</Text>
            </View>
            <View style={Style.ViewButton}>
                <Button style={Style.btn} title='Add New'></Button>
            </View>
            <View style={Style.ViewPassword}>
                <FlatList
                    data={p}
                    renderItem={({item})=>(
                        <View>
                            <Text style={Style.pData}>{item.web}</Text>
                            <Text style={Style.pData}>{item.username}</Text>
                            <Text style={Style.pData}>{item.password}</Text>    
                        </View>
                    )}
                    style={Style.Flastl}
                />
            </View>
        </View>
    )
}

const Style = new StyleSheet.create({
    ViewContainer: {
        textAlign: 'center',
        paddingHorizontal: '10px'
    },
    ViewHeading: {
        marginVertical: '20px'
    },
    ViewButton: {
        marginVertical: '10px',
    },
    ViewPassword: {
        borderColor: 'gray',
        borderWidth: '1px',
        borderRadius: '2px',
        paddingHorizontal: '20px',
        paddingVertical: '5px',
    },
    Flastl: {
        display: 'inline-block'
    },
    pData: {
        margin: 0,
    },
    mm: {
        flex: 1,
    }
})
export default MyPasswords;