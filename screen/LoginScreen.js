import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import React from 'react';
import {styles} from '../style';

function LoginScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.containerLogin}>  
            <View style={styles.logoLogin}>
                <Image 
                    source={require('../assets/logo-mitienda.png')}
                    style={styles.logo} 
                />
            </View>
            <TextInput title='Email' placeholder='Email' style={styles.input}/>
            <TextInput title='contraseña' placeholder='Contraseña' style={styles.input}/>
            <TouchableOpacity>
                <View style={styles.butonsCarrito}>
                    <Text style={styles.textButton}>Login</Text>
                </View>
                            
            </TouchableOpacity>
        </View>
      </View>
  );
}

export default LoginScreen;