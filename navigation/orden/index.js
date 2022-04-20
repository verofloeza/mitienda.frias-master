import Colors from '../../constantes/Colors';
import OrdenesScreen from '../../screen/OrdenesScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrdenNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Orden'
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
                name='Orden'
                component={OrdenesScreen}
                options={{title: 'Ordenes'}}
            />
        </Stack.Navigator>
    )
}

export default OrdenNavigator;