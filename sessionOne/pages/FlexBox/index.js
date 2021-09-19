import React from 'react'
import { View, Text } from 'react-native'

const FlexBox = () => {
    return (
        <View style={{flexDirection:'row', backgroundColor:'#95a5a6', justifyContent:'flex-end'}}>
            <View style={{ width:50 , height:100, backgroundColor: '#f1c40f' }} />
            <View style={{ width:50 , height:150, backgroundColor: '#e74c3c' }} />
            <View style={{ width:50 , height:200, backgroundColor: '#3498db' }} />
            <View style={{ width:50 , height:250, backgroundColor: '#2ecc71' }} />
        </View>
        );
    };
export default FlexBox