import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';

import { CATEGORIAS } from '../data/CATEGORIAS';
import Card from '../componentes/Card';
import Colors from '../constantes/Colors';
import Filtros from '../componentes/Filtros';
import { PRODUCTOS } from '../data/PRODUCTOS';

const Grid = ( {navigation}) => {

    const [categoriaSelec, setCategoriaSelec] = useState(1);
    const listProductos = PRODUCTOS.filter ( productos => productos.categoria === categoriaSelec );

    const handlerCategoria = selectedCategoria => {
        setCategoriaSelec(selectedCategoria)
        CATEGORIAS.map( 
              itemCategoria => 
                {
                    itemCategoria.id === selectedCategoria ?
                    itemCategoria.active = true
                  :
                    itemCategoria.active = false
                }
                )
    };

    const handlerDetalles = (item)=>{
        let nombreCategoria;
        CATEGORIAS.filter( categoria => {
            if( categoria.id === item.categoria){
                nombreCategoria = categoria.value
            }
        })
        navigation.navigate('Details',
            { 
                ID: item.id,
                name: item.value,
                marca: item.marca,
                categoria: nombreCategoria,
                descripcion: item.descripcion,
                precio: item.precio
            }
        );
    }
    const renderProductos = ( {item}) =>(
        <Card>
            <TouchableOpacity onPress={()=>handlerDetalles(item)}>
                <Image 
                    source={require('../assets/sin-imagen.jpg')}
                    style={styles.fotoProducto} 
                />
                <Text style={styles.title}>{item.value}</Text>
                <Text style={styles.marca}>${item.precio}</Text>
            </TouchableOpacity>
        </Card>
    )

    return (
        <View style={styles.containerGrid}>
            <View style={styles.filtros}>
               <Filtros handlerCategoria={handlerCategoria}/> 
            </View>
            <View style={styles.containerList}> 
                <FlatList
                    data={listProductos}
                    keyExtractor={ item => item.id }
                    numColumns={2}
                    columnWrapperStyle={styles.lista}
                    renderItem={renderProductos}
                />
            </View>
            
            
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding:5,
        marginBottom: 60
    },
    filtros:{
        flex: 1,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    containerList:{
        flex:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    lista:{
        flex: 0.5,
        justifyContent: "space-around"
    },
    fotoProducto:{
        width: '100%',
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
  });
  export default Grid;