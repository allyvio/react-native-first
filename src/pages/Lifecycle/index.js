import React, { Component, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// class ClassLifecycle extends Component {
//     constructor(props) {
//         super(props)
//         console.log('====> : ini constructor')
//         this.state = {
//             text: 'Class Lifecycle'
//         }
//     }
//     componentDidMount() {
//         console.log('====> : ini didmount')
//         setTimeout(() => {
//             this.setState({
//                 text: 'Class Lifecycle terupdate'
//             })
//         }, 2000)
//     }

//     componentDidUpdate() {
//         console.log('====> : ini didupdate')
//     }
//     componentWillUnmount() {
//         console.log('====> : ini willunmont')
//     }
//     render() {
//         console.log('====> : ini render')
//         return (
//             <View>
//                 <Text>{this.state.text}</Text>
//             </View>
//         )
//     }
// }
const Lifecycle = () => {
    const [text, setText] = useState('Lifecycle')
    const [data, setData] = useState('')
    useEffect(() => {
        // AsyncStorage.getItem('storage_key')
        //     .then((data) => {
        //         setData(data)
        //     })
        // console.log(data);
        console.log('====> did mount');
        setTimeout(() => {
            setText('Lifecycle nya di ubah')
        }, 2000)
        return () => {
            console.log('====> : did update');
        }
    }, [text])
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}
export default Lifecycle