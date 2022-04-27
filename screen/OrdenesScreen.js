import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { deleteOrder, getOrders } from '../store/actions/order.action';
import { useDispatch, useSelector } from 'react-redux';

import Colors  from '../constantes/Colors';
import OrdenItem from '../componentes/OrdenItem';

function OrdenesScreen({navigation}) {
  const items = useSelector(state => state.ordenes.items);
  const dispatch = useDispatch();


  const handlerDeleteItem = (id) => dispatch(deleteOrder(id));

  const renderItem = (itemData) => (
    <OrdenItem
      item={itemData.item}
      onDelete={handlerDeleteItem}
    />
)
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {        
      dispatch(getOrders());
    });  
    return unsubscribe;      
  }, [navigation]);

  return (
    <View style={styles.container}>     
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={ renderItem }
          keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontFamily: 'RobotoBold',
    padding: 8,
    color: Colors.white
  }
});


export default OrdenesScreen;