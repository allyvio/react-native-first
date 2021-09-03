import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import axios from 'axios'

const MateriCrud = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [posisi, setPosisi] = useState("")
    const [users, setUser] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const submit = () => {
        const payloads = {
            nama,
            email,
            posisi
        }
        axios.post('http://10.0.2.2:3004/users', payloads)
            .then(res => {
                console.log(res)
                setNama("")
                setEmail("")
                setPosisi("")
            })
    }

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
            .then(res => {
                console.log('respon get: ', res.data)
                setUser(res.data)
            })
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>Materi CRUD</Text>
            <Text>User Management</Text>
            <TextInput placeholder="Nama Lengkap" style={style.input} value={nama} onChangeText={(value) => setNama(value)} />
            <TextInput placeholder="email" style={style.input} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="posisi" style={style.input} value={posisi} onChangeText={(value) => setPosisi(value)} />
            <Button title="simpan" onPress={submit} />
            <View style={style.line} />
            {users.map(user => {
                return <Items email={user.email} nama={user.nama} posisi={user.posisi} />
            })}
        </View>
    )
}

export default MateriCrud
const Items = ({ nama, email, posisi }) => {
    return <View style={style.itemCard}>
        <Image source={{ uri: `https://i.pravatar.cc/150?u=${email}` }} style={style.avatar} />
        <View style={style.desc}>
            <Text style={style.textName}>{nama}</Text>
            <Text style={style.textEmail}>{email}</Text>
            <Text style={style.textPosisi}>{posisi}</Text>
        </View>
        <Text style={style.textDelete}>x</Text>
    </View>
}
const style = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center' },
    line: { height: 2, marginVertical: 20, backgroundColor: 'black' },
    avatar: { width: 100, height: 100, borderRadius: 100 / 2 },
    input: { borderWidth: 1, marginBottom: 12, borderRadius: 20, paddingHorizontal: 18 },
    itemCard: { flexDirection: 'row', marginBottom: 20 },
    desc: { marginLeft: 12, flex: 1 },
    textName: { fontSize: 20, fontWeight: 'bold' },
    textEmail: { fontSize: 18 },
    textPosisi: { fontSize: 16, marginTop: 8 },
    textDelete: { fontSize: 20, color: 'red', fontWeight: 'bold' }

})