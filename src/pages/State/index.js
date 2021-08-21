import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

const State = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Anda menekan sebanyak {count} kali</Text>
            <Button title="tambah" onPress={() => setCount(count + 1)}>
                Klik saya
            </Button>
        </View>
    );
}
export default State