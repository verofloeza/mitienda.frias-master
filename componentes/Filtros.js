import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, {useState} from 'react';

import { CATEGORIAS } from '../data/CATEGORIAS';
import Colors from '../constantes/Colors';

export default function Filtros( props){
    const [listCategoria, setListCategoria] = useState(CATEGORIAS);
    const renderItem = data => (
       
      <Text 
        style={ data.item.active === true ? styles.listItemActive : styles.listItem } 
        onPress={()=>props.handlerCategoria(data.item.id)}
        >
          {data.item.value}
      </Text>
      )
 return(
        
            <View style={styles.listFilter}>
                <FlatList
                    data={listCategoria}
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
