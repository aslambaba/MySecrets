import React from 'react';
import {StyleSheet, View, Text, FlatList, Image } from 'react-native';


function PrivateChat() {
    const rr = [
      {name: 'aslam'},
      {name: 'Usama'},
    ]
    return (
      <View style={Style.ViewContainer}>
        <FlatList
          data={rr}
          renderItem={({item})=> (
          <View style={Style.chatsec}>
            <View style={Style.ImageSec}>
            <Image style={Style.chatImage} source={{uri: 'https://reactjs.org/logo-og.png'}} />
            </View>
            <View style={Style.ChatSec}>
            <Text style={Style.ChatName}>{item.name}</Text>
            <Text style={Style.ChatNote}>read the messeges</Text>
            </View>
          </View>
          )}
        />
      </View>
    );
}

const Style = new StyleSheet.create({
  ImageSec: {
    flex: 'left',
    width: '20%',
    display: 'inline-block'
  },
  ChatSec: {
    flex: 'left',
    width: '70%',
    display: 'inline-block'
  },
  ViewContainer: {
    paddingVertical: '20px',
    height: '100%',
  },
  chatsec: {
    marginVertical: '5px',
    borderColor: 'black',
    borderBottomWidth: '1px',
    paddingVertical: '5px',
    paddingHorizontal: '10px',
  },
  chatImage: {
    width: 20,
    height: 20,
    display: 'inline-block'
  },  
  ChatNote: {
    fontSize: '10px',
    marginVertical: '5px',
  }
});

export default PrivateChat
