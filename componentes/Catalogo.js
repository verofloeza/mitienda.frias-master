import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Colors from '../constantes/Colors';
import React from 'react';

const Catalogo = props => {
    
 return(
    <View style={styles.containerList}> 
        <TouchableOpacity style={styles.item}  onPress={props.onProductDetails}>
            <Image 
                source={require('../assets/sin-imagen.jpg')}
                style={styles.fotoProducto} 
            />
            <Text style={styles.title}>Producto 1</Text>
            <Text style={styles.marca}>Marca</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Image 
                source={require('../assets/sin-imagen.jpg')}
                style={styles.fotoProducto} 
            />
            <Text style={styles.title}>Producto 2</Text>
            <Text style={styles.marca}>Marca</Text> 
        </TouchableOpacity>
    </View>
     
    
 )
}
const styles = StyleSheet.create({
    fotoProducto:{
        width: '95%',
        height: 200,
        borderRadius: 10
    },
    title:{
        width: '100%',
        fontSize:22,
        color: Colors.primary,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    marca:{
        width: '100%',
        fontSize: 18,
        color: Colors.accent,
        justifyContent: 'center',
    },
    item:{
        width: '50%',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10
    },
    containerList:{
        flexDirection: 'row',
        marginTop:20
    }
});

export default Catalogo;