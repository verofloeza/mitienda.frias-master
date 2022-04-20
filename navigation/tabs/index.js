import { StyleSheet, Text, View } from 'react-native';

import CartNavigator from '../cart';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import ShopNavigator from '../shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='ShopTab' 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor : "#e12257",
                tabBarInactiveTintColor: "#1d175c",
            }}
            >
            <BottomTabs.Screen name='ShopTab' component={ShopNavigator}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={24} color={color} />
                            <Text style={{color: color}}>Tienda</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen name='CartTab' component={CartNavigator}
                options={{
                    
                    tabBarIcon: ({color, focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-cart" size={24} color={color} />
                            <Text style={{color: color}}>Carrito</Text>
                        </View>
                    )
                }}
                />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        borderRadius: 15,
        height: 60,
        backgroundColor: 'white'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TabNavigator;