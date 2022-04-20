import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors  from '../constantes/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text style={styles.text}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.text}>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={ ()=>onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={Colors.accent}/>
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
    header: {
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

export default CartItem;