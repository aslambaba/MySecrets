// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Media from './screens/media';
import Messeges from './screens/messeges';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Media" component={Media} />
        <Stack.Screen name="Messeges" component={Messeges} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;