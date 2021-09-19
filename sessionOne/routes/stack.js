import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from '../pages/DetailsScreen'
import HomeScreen from '../pages/Home'

const screens = {
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: Detail
    }
}
const Stack = createNativeStackNavigator(screens)

export default NavigationContainer(Stack)