import Colors from '../constantes/Colors';
import Grid from '../screen/Grid';
import {
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PRODUCTOS } from '../data/PRODUCTOS';
import { Plataform } from 'react-native';
import ProductDetails from '../screen/ProductDetails';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const Stack = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
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
                    name='Home' 
                    component={Grid}
                    options={{ headerTitle: () => <Image
                        style={{ width: 150, height: 29 }}
                        source={ require('../assets/logo-horizontal.png')}
                      />
                     }}
                />
                <Stack.Screen 
                    name='Details' 
                    component={ProductDetails}
                    options={ ({route}) => ({title: route.params.categoria})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;