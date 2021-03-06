// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import PrivateChat from './screens/privatechat';
import Myfiles from './screens/myfiles';
import MyPasswords from './screens/mypasswords';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PrivateChat" component={PrivateChat} />
        <Stack.Screen name="MyFiles" component={Myfiles} />
        <Stack.Screen name="MyPasswords" component={MyPasswords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;