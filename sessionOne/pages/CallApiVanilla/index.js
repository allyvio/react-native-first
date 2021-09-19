import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { useEffect, useState } from 'react'


const CallApiVanilla = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    })
    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    })
    useEffect(() => {
        //call api dengan GET
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        // fetch('https://reqres.in/api/users/2')
        //     .then(response => response.json())
        //     .then(json => { console.log(json) })

        //call api dengan post

        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(payloads)
        // })
        //     .then(response => response.json())
        //     .then(json => console.log("post response: ", json))
    }, [])
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setDataUser(json.data)
            })
    }
    const postData = () => {
        const payloads = {
            name: "morpheus",
            job: "leader"
        }
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payloads)
        })
            .then(response => response.json())
            .then(json => {
                console.log("post response: ", json)
                setDataJob(json)
            })
    }
    const Jobs = (props) => {
        return (
            <View>
                <Text>{props.name}</Text>
                <Text>{props.job}</Text>
            </View>
        )
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>materi api with vanilla js</Text>
            <Button title="Get Data" onPress={getData} />
            <Text>Respon Get data</Text>
            {dataUser.avatar.length > 0 && (
                <Image
                    source={{ uri: dataUser.avatar }}
                    style={style.avatar}
                />
            )}
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <View style={style.line} />
            <Button title="Post Data" onPress={postData} />
            <Text>Respon post data</Text>
            <Jobs name={dataJob.name} job={dataJob.job} />
        </View>
    )

}
const style = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center' },
    line: { height: 2, marginVertical: 20, backgroundColor: 'black' },
    avatar: { width: 100, height: 100, borderRadius: 100 / 2 }
})

export default CallApiVanilla
