import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function Moviments({ data }) {

    // deixar os valores dinamicos
    const [showValue, setshowValue] = useState(false)


    return (
        // esconder e mostrar o valor quando clica
        <TouchableOpacity style={styles.container} onPress={()=> setshowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>

                <Text style={styles.label}>{data.label}</Text>
                {/* logica para desaparecer os valores */}
                {showValue ? (
                    // se for saida é vermelho, se for entrada é verde 
                    <Text style={data.type === 1 ? styles.value : styles.despesas}>
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ) : (
                    <View style={styles.hidden}></View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADA',
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },

    date: {
        color: '#7209b7',
        fontWeight: 'normal',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#7209b7'
    },

    value: {
        color: '#2eec71',
        fontSize: 16,
        fontWeight: 'bold',
    },

    despesas: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold',
    },

    hidden: {
        marginTop:6,
        height: 10,
        width: 80,
        backgroundColor: "#DADA",
        borderRadius: 8, 
    },
})