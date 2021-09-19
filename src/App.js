import React, { useState, useEffect, useMemo, useReducer } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import FlexBox from './pages/FlexBox'
import PropsDinamis from './pages/PropsDinamis'
import State from './pages/State'
import DetailsScreen from './pages/DetailsScreen'
import Home from './pages/Home'
import axios from 'axios'

import CallApiVanilla from './pages/CallApiVanilla'
import CallApiAxios from './pages/CallApiAxios'
import MateriCrud from './pages/MateriCrud'
import MateriAsync from './pages/MateriAsync'
import Lifecycle from './pages/Lifecycle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from './pages/Login'
import { Auth } from './Helpers/auth'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const App = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [token, setToken] = useState(null)

  const initialLoginState = {
    isLoading: true,
    token: null,
    email: null

  }
  const loginReducer = (prevState = initialLoginState, action) => {
    switch (action.type) {
      case 'Retrive_token':
        return {
          ...prevState,
          token: action.token,
          isLoading: false
        }
      case 'Login':
        return {
          ...prevState,
          email: action.email,
          token: action.token,
          isLoading: false
        }
      case 'Logout':
        return {
          ...prevState,
          email: null,
          token: null,
          isLoading: false
        }
    }
  }
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const auth = useMemo(() => ({
    login: async (email, password) => {
      let userToken
      userToken = null
      const payloads = {
        email: email,
        password: password
      }
      try {
        await axios.post('https://reqres.in/api/login', payloads)
          .then(response => {
            userToken = response.data.token
            if (userToken) {
              console.log(userToken);
              AsyncStorage.setItem('userToken', userToken)
            }
          })
      } catch (e) {
        console.log(e)
      }

      dispatch({ type: 'Login', email: email, token: userToken })
    },
    logout: async () => {
      // setIsLoading(false)
      // setToken(null)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'Logout' })
    }
  }))

  useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
        console.log(userToken)
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'Retrive_token', token: userToken })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color="blue" />
      </View>
    )
  } else {
    return <Auth.Provider value={auth}>
      <NavigationContainer>
        <Stack.Navigator>
          {loginState.token !== null ? (
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

  // return (
  //   <State />
  // )
  // const [isShow, setShow] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false)
  //   }, 6000)
  // }, [])
  // return (<View>
  //   <Text>123</Text>
  //   {/* {isShow && < Lifecycle />}
  //   <Lifecycle /> */}
  // </View>
  // )
}




const Stack = createNativeStackNavigator();

export default App