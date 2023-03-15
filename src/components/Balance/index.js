import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Balance({saldo, gastos}){
    return(
        <View style={styles.container}>
            {/* Saldo */}
            <View style={styles.item}>
                <Text style={styles.itemSaldo}>Saldo</Text> 
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            {/* Gastos */}
            <View style={styles.item}>
                <Text style={styles.itemGasto}>Gastos</Text> 
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{gastos}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
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
    },

    itemSaldo:{
        fontSize: 20,
        color:"#70e000" 
    },

    itemGasto:{
        fontSize: 20,
        color:"#ef233c"
    },

    content:{
        flexDirection:'row',
        alignItems: 'center'
    },
    currencySymbol:{
        color:"#000000",
        marginRight:6 
    },
    
})