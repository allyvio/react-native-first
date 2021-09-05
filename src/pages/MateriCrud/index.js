import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'axios'

const MateriCrud = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [posisi, setPosisi] = useState("")
    const [users, setUser] = useState([])
    const [button, setButton] = useState("Simpan")
    const [selectUser, setSelectUser] = useState({})

    useEffect(() => {
        getData()
    }, [])

    const submit = () => {
        const payloads = {
            nama,
            email,
            posisi
        }
        if (button === "Simpan") {
            axios.post('http://10.0.2.2:3004/users', payloads)
                .then(res => {
                    setNama("")
                    setEmail("")
                    setPosisi("")
                    getData()
                })
        } else if (button === "Update") {
            console.log(selectUser);
            axios.put(`http://10.0.2.2:3004/users/${selectUser.id}`, payloads)
                .then(res => {
                    setNama("")
                    setEmail("")
                    setPosisi("")
                    getData()
                    setButton("Simpan")
                })
        }
    }

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
            .then(res => {
                setUser(res.data)
            })
    }
    const selectedUser = (item) => {
        setSelectUser(item)
        setNama(item.nama)
        setEmail(item.email)
        setPosisi(item.posisi)
        setButton("Update")
    }

    return (<ScrollView>
        <View style={style.container}>
            <Text style={style.textTitle}>Materi CRUD</Text>
            <Text>User Management</Text>
            <TextInput placeholder="Nama Lengkap" style={style.input} value={nama} onChangeText={(value) => setNama(value)} />
            <TextInput placeholder="email" style={style.input} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="posisi" style={style.input} value={posisi} onChangeText={(value) => setPosisi(value)} />
            <Button title={button} onPress={submit} />
            <View style={style.line} />

            {users.map(user => {
                return <Items key={user.id} email={user.email} nama={user.nama} posisi={user.posisi} onPress={() => selectedUser(user)} />
            })}
        </View>
    </ScrollView>
    )
}

export default MateriCrud
const Items = ({ nama, email, posisi, onPress }) => {
    return <View style={style.itemCard}>
        <TouchableOpacity onPress={onPress}>
            <Image source={{ uri: `https://i.pravatar.cc/150?u=${email}` }} style={style.avatar} />
        </TouchableOpacity>
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