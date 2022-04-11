import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Catalogo from '../componentes/Catalogo';
import Colors from '../constantes/Colors';
import Filtros from '../componentes/Filtros';
import { useState } from 'react';

const Grid = props => {
    
    return (
        <View style={styles.containerGrid}>
            <Filtros style={styles.filtros}/>
            <Catalogo style={styles.containerList} onProductDetails={props.onProductDetails}/>
            
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
        height: 150,
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
        fontFamily: 'MontserratBold'
    },
    marca:{
        textAlign: 'center',
        fontSize: 18,
        color: Colors.accent,
        fontFamily: 'RobotoBold'
    },
    item:{
        width: '50%',
        alignContent: 'center',
        padding: 10
    },
    
  });
  export default Grid;