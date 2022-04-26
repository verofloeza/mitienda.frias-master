import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constantes/Colors';
import React from 'react';
import { SelectCategory } from '../store/actions/categoria.action';
import { filteredProductos } from '../store/actions/productos.action';

export default function Filtros( props){
    const dispatch = useDispatch();
    const categorias = useSelector(state => state.categorias.listCategorias);

    const seleccionarCat = cat =>{
        dispatch(SelectCategory(cat));
        categorias.map( 
            itemCategoria => 
              {
                  itemCategoria.id === cat ?
                  itemCategoria.active = true
                :
                  itemCategoria.active = false
              }
              );
        dispatch(filteredProductos(cat));
    }

    const renderItem = data => (
      <Text 
        style={ data.item.active === true ? styles.listItemActive : styles.listItem } 
        onPress={()=>seleccionarCat(data.item.id)}
        >
          {data.item.value}
      </Text>
      )
 return(
        
            <View style={styles.listFilter}>
                <FlatList
                    data={categorias}
                    renderItem={renderItem}
                    keyExtractor={ item => item.id }
                    horizontal={true}
                />
            </View>

             
 )
}
const styles = StyleSheet.create({
    
    listFilter:{
        flex:0.5,
        height: 50
    },
    listItem:{
        borderWidth: 2,
        borderColor: Colors.grey,
        color: Colors.grey,
        paddingHorizontal:15,
        padding:10,
        borderRadius:10,
        fontSize:15,
        height: 40,
        alignItems: 'center',
        margin: 10
    },
    listItemActive:{
        borderWidth: 2,
        borderColor: Colors.accent,
        color: Colors.accent,
        paddingHorizontal:15,
        padding:10,
        borderRadius:10,
        fontSize:15,
        height: 40,
        alignItems: 'center',
        margin: 10
    }
});
