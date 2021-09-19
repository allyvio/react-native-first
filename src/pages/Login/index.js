import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { Auth } from '../../Helpers/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext(Auth)

    const loginHandler = (email, pass) => {
        login(email, pass)
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>Login area</Text>
            <TextInput style={style.textInput} placeholder="email..." value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput style={style.textInput} placeholder="password..." value={password} onChangeText={(value) => setPassword(value)} />
            <View style={style.buttonArea}>
                <TouchableOpacity style={style.buttonStyle}>
                    <Button title="Login" onPress={() => loginHandler(email, password)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
const style = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        paddingLeft: 20,
        marginTop: 20,
        borderWidth: 1,
        height: 60,
        width: '100%',
        fontSize: 22,
        borderColor: 'blue'
    },
    buttonStyle: {
        marginTop: 16,
        height: 200,
        width: '50%'
    },
    buttonArea: {
        alignItems: 'center'
    }
})
