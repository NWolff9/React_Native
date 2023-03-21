import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Actions(){
    return(
        <ScrollView style={styles.container} horizontal={true}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='addfolder' size={26} color="#000"/>
                </View>

                <Text style={styles.labelButton}>Entrada</Text>
            </TouchableOpacity>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container:{
        
    }
})