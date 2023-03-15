import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Balance(){
    return(
        <View style={styles.container}>
            {/* Saldo */}
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text> 
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>15.000,00</Text>
                </View>
            </View>

            {/* Gastos */}
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text> 
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>10,00</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3a86ff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        // nada sobrepoe o container
        zIndex: 99
    }
})