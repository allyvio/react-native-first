import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const AsyncStorage_ = () => {
    const [inputText, setInputText] = useState('')
    const [data, setData] = useState('')

    const saveData = () => {
        if (inputText) {
            AsyncStorage.setItem('storage_key', inputText)
            setInputText('')
            alert('Data disimpan')
        } else {
            alert('mohon isi data')
        }
    }
    const getData = () => {
        AsyncStorage.getItem('storage_key')
            .then((data) => {
                setData(data)
            })
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>AsyncStorage React Native</Text>
            <TextInput style={style.textInput} placeholder="Masukan sesuatu..." value={inputText} onChangeText={(value) => setInputText(value)} />
            <TouchableOpacity style={style.buttonStyle}>
                <Button title="Save data" onPress={saveData} />
            </TouchableOpacity >
            <TouchableOpacity style={style.buttonStyle}>
                <Button title="Get data" onPress={getData} />
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={style.textRender}>{data}</Text>
        </View>
    )
}
export default AsyncStorage_

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white'
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        marginTop: 20,
        borderWidth: 1,
        height: 60,
        width: '100%',
        textAlign: 'center',
        fontSize: 22,
        borderColor: 'blue'
    },
    buttonStyle: {
        marginTop: 16
    },
    line: { height: 2, marginVertical: 20, backgroundColor: 'black' },
    textRender: {
        textAlign: 'center',
        fontSize: 20,
    }
})
