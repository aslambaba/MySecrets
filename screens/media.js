import React from 'react';
import { View, Text, Button } from 'react-native';


function Media({navigation}) {
    console.log(navigation);
    return (
      <View>
        <Text>Hello {navigation.name}</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Messeges')}
        />
      </View>
    );
  }

export default Media
