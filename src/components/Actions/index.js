import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';



export default function Actions() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* <a href='https://expo.github.io/router/docs/'></a> */}
            <TouchableOpacity style={styles.actionButton} onPress={()=>navigation.navigate('Perfil')} >
                <View style={styles.areaButton}>
                    <AntDesign name='addfolder' size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Entrada</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='tagso' size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 50,
        marginEnd: 50,
    },

    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },

    areaButton: {
        backgroundColor: '#dada',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelButton: {
        fontWeight: 'bold',
        marginTop: 4,
        textAlign: 'center',
    }
})