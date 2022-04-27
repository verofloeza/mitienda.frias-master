import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors  from '../constantes/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const formatDay = (time) =>{
    const date = new Date(time);
    return date.toLocaleDateString();
}

const sumTotal= (list) => list.map(item => item.quantity*item.precio).reduce((a,b) => a + b, 0)

const OrdenItem = ({item, onDelete}) => {
    
    return (
        <View style={styles.item}>
            
            <View style={styles.detail}>
                <View>
                    <Text style={styles.fecha}>{formatDay(item.date)}</Text>
                    <Text style={styles.text}>${sumTotal(item.items)}</Text>
                </View>
                <TouchableOpacity onPress={ ()=>onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={Colors.accent} style={{alignItems: 'flex-end'}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    fecha: {
        fontSize: 16,
        fontFamily: 'RobotoBold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto'
    }
})

export default OrdenItem;