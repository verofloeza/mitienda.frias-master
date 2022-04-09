import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Colors from '../constantes/Colors';
import Filtros from '../componentes/Filtros';
import { useState } from 'react';

const Grid = props => {

    return (
        <View style={styles.containerGrid}>
            <Filtros style={styles.filtros}/>
            <View style={styles.containerList}> 
                <TouchableOpacity style={styles.item}  onPress={props.onProductDetails}>
                    <Image 
                        source={require('../assets/sin-imagen.jpg')}
                        style={styles.fotoProducto} 
                    />
                    <Text style={styles.title}>Producto 1</Text>
                    <Text style={styles.marca}>Marca</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}  onPress={props.onProductDetails}>
                    <Image 
                        source={require('../assets/sin-imagen.jpg')}
                        style={styles.fotoProducto} 
                    />
                    <Text style={styles.title}>Producto 2</Text>
                    <Text style={styles.marca}>Marca</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.containerList}> 
                <TouchableOpacity style={styles.item}  onPress={props.onProductDetails}>
                    <Image 
                        source={require('../assets/sin-imagen.jpg')}
                        style={styles.fotoProducto} 
                    />
                    <Text style={styles.title}>Producto 1</Text>
                    <Text style={styles.marca}>Marca</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}  onPress={props.onProductDetails}>
                    <Image 
                        source={require('../assets/sin-imagen.jpg')}
                        style={styles.fotoProducto} 
                    />
                    <Text style={styles.title}>Producto 2</Text>
                    <Text style={styles.marca}>Marca</Text> 
                </TouchableOpacity>
            </View>
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:1,
        width: "100%",
        padding:20,
        
    },
    filtros:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerList:{
        flex:12,
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fotoProducto:{
        width: '95%',
        height: 200,
        borderRadius: 10
    },
    title:{
        fontSize:22,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: 'bold',
    },
    marca:{
        textAlign: 'center',
        fontSize: 18,
        color: Colors.accent,
    },
    item:{
        width: '50%',
        alignContent: 'center',
        padding: 10
    },
    
  });
  export default Grid;