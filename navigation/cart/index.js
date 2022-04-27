import CartScreen from '../../screen/CartScreen';
import Colors from '../../constantes/Colors';
import { Platform } from 'react-native-web';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.white : Colors.white
                },
                headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen 
                name='Cart'
                component={CartScreen}
                options={{title: 'Carrito'}}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;