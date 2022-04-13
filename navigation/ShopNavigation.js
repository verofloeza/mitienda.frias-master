import Grid from '../screen/Grid';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetails from '../screen/ProductDetails';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Grid}/>
            <Stack.Screen name='Details' component={ProductDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default ShopNavigator;