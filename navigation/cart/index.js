import CartScreen from '../../screen/CartScreen';
import Colors from '../../constantes/Colors';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.white : ''
                },
                headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.white,
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