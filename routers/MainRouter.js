import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from  'react-navigation';
import Home from '../screens/home';
import Media from '../screens/media';
import Messeges from '../screens/messeges';

const screens = {
    HomeScreen: {
        screen: Home 
    },
    MediaScreen: {
        screen: Media
    },
    MessegesScreen: {
        screen: Messeges
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
