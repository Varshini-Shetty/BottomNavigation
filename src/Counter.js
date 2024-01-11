import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multicountMemo = useMemo(function multicount(){
        console.log("multicount")
        return count*5
    }, [count])

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <Text style={styles.countText}>Count : {count}</Text>
                <Text>{multicountMemo}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>Update Count</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.centeredContainer}>
                <Text style={styles.itemText}>Item : {item}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setItem(item * 10)}
                >
                    <Text style={styles.buttonText}>Update Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    countText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
