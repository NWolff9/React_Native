import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

// O statusbar so tem em Android então temos que fazer uma condição
// para saber se existe uma statusbar padrão ou não
// e caso existir vamos saber que a aplicação está sendo em Android
// e com isso devemos dar um espaçamento maior


// Tamanho da statusbar
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
// se existir StatusBar então soma 22, se não soma 64

export default function Header({name}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>{name}</Text>

                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex:1, //pegar o tamanho da tela toda 
        alignItems: "center", // alinhar na horizontal 
        flexDirection: "row", 
        justifyContent: "space-between", // alinhar na vertical 
    },
    userName:{
        fontSize: 18,
        color: "#fff",
        fontWeigth: "Bold"
    },
    buttonUser:{
        width: 44,
        height: 44,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:44/2,
        backgroundColor: "rgba(255,255,255, 0.5)"
    }
})

