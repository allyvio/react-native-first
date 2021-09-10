import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import FlexBox from './pages/FlexBox'
import PropsDinamis from './pages/PropsDinamis'
import State from './pages/State'
import DetailsScreen from './pages/DetailsScreen'
import CallApiVanilla from './pages/CallApiVanilla'
import CallApiAxios from './pages/CallApiAxios'
import MateriCrud from './pages/MateriCrud'
import MateriAsync from './pages/MateriAsync'
import Lifecycle from './pages/Lifecycle'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const App = () => {
  const [isShow, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 6000)
  }, [])
  return (<View>
    {isShow && < Lifecycle />}
    {/* <Lifecycle /> */}
  </View>
  )
  //   return <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //       <Stack.Screen name="Details" component={DetailsScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Scren</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default App