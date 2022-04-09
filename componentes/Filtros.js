import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, {useState} from 'react';

import Colors from '../constantes/Colors';

export default function Filtros(){
    const [ listCategorias, setListCategorias ] = useState([{id:1, value:'Mujer', active:true},{id:2, value:'Hombre', active:false},{id:3, value:'Niños', active:false},{id:4, value:'Mas', active:false}]);
    const [ categoriasSelected, setCategoriasSelected ] = useState({});

    const renderItem = data => (
       
      <Text 
        style={ data.item.active === true ? styles.listItemActive : styles.listItem } 
        >
          {data.item.value}
      </Text>
      )
 return(
        
            <View style={styles.listFilter}>
                <FlatList
                    data={listCategorias}
                    renderItem={renderItem}
                    keyExtractor={ item => item.id }
                    horizontal={true}
                />
            </View>

             
 )
}
const styles = StyleSheet.create({
    
    listFilter:{
        flex:4,
        height: 250
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
