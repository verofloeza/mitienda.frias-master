import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect } from 'react';
import { filteredProductos, selectProductos } from '../store/actions/productos.action';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../componentes/Card';
import Colors from '../constantes/Colors';
import Filtros from '../componentes/Filtros';

const Grid = ( {navigation}) => {
    const dispatch = useDispatch();
    const categoryProductos = useSelector(state => state.productos.filteredProductos);
    const category = useSelector(state => state.categorias.selected);
    const categorias = useSelector(state => state.categorias.listCategorias);

    useEffect( () => {
        dispatch(filteredProductos(category));
      }, [])


    const handlerDetalles = (item)=>{
        dispatch(selectProductos(item.id));
        let nombreCategoria;
        categorias.filter( categoria => {
            if( categoria.id === item.categoria){
                nombreCategoria = categoria.value
            }
        })
        navigation.navigate('Details', { categoria: nombreCategoria });
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
               <Filtros/> 
            </View>
        <View style={styles.containerList}> 
                <FlatList
                    data={categoryProductos}
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
        alignItems: 'center'
    },
    containerList:{
        flex:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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