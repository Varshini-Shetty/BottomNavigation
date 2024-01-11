import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [name, setName] = useState('')
    const handleLogin = () => {
        if (name) {
            Alert.alert(`Hi ${name}!`)
        } else {
            Alert.alert('Error', 'Please enter a username.');
        }
    }

    useEffect(() => {
        if (name == 'varshini') {
            console.log("name is varshini")
        }
    }, [name])
    return (
        <View>
            <ImageBackground source={require("./assets/leaves.jpg")}
                style={{ height: '100%', }}>
                <View>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 64,
                            fontWeight: 'bold',
                            marginVertical: 50,
                        }}>
                        Login
                    </Text>
                    <View
                        style={{
                            backgroundColor: 'white',
                            height: 700,
                            width: 460,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                            paddingTop: 100,
                            alignItems: 'center',
                        }}>
                        <Text>{name}</Text>
                        <Text style={{ fontSize: 40, color: '#006A42', fontWeight: 'bold', marginRight: 50 }}>
                            Welcome Back
                        </Text>
                        <Text
                            style={{
                                color: 'grey',
                                fontSize: 19,
                                fontWeight: 'bold',
                                marginBottom: 20,
                                marginRight: 50,
                            }}>
                            Login to your account
                        </Text>
                        <TextInput style={styles.input}
                            placeholder="Username"
                            keyboardType='default'
                            onChangeText={text => {
                                setName(text)
                            }} />
                        <TextInput style={styles.input}
                            placeholder="Password"

                            keyboardType='visible-password' />
                        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', paddingBottom: 5 }}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        borderRadius: 100,
        color: '#006A42',
        paddingHorizontal: 10,
        width: '78%',
        height: 45,
        backgroundColor: 'rgb(220,220, 220)',
        marginRight: 65,
        marginVertical: 10,
        //placeholderTextColor: '#006A42'
    },
    btn: {
        justifyContent: 'center',
        backgroundColor: '#006A42',
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        height: 80,
        paddingVertical: 5,
        marginVertical: 10,
        marginRight: 60
    }
})