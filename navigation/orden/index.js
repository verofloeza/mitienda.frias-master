import Colors from '../../constantes/Colors';
import OrdenesScreen from '../../screen/OrdenesScreen';
import { Platform } from 'react-native-web';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrdenNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Orden'
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
                name='Orden'
                component={OrdenesScreen}
                options={{title: 'Ordenes'}}
            />
        </Stack.Navigator>
    )
}

export default OrdenNavigator;