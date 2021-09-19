import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import FlexBox from './pages/FlexBox'
import PropsDinamis from './pages/PropsDinamis'
import State from './pages/State'
import DetailsScreen from './pages/DetailsScreen'
import CallApiVanilla from './pages/CallApiVanilla'
import CallApiAxios from './pages/CallApiAxios'
import MateriCrud from './pages/MateriCrud'
import Login from './pages/Login'
import Home from './pages/Home'

import { Auth } from './Helpers/auth'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const auth = useMemo(() => ({
    login: () => {
      setToken('qaafafaw123414')
      setIsLoading(false)
    },
    logout: () => {
      setToken(null)
      setIsLoading(false)
    }
  }))

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color="blue" />
      </View>
    )
  } else {
    return <Auth.Provider value={auth}>
      <NavigationContainer>
        <Stack.Navigator>
          {token !== null ? (
            <Stack.Screen name="Home" component={Home} />
          )
            :
            <Stack.Screen name="Login" component={Login} />
          }
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Auth.Provider>
  }
}



const Stack = createNativeStackNavigator();

export default App