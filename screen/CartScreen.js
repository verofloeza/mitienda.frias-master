import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { confirmCart, removeItem } from '../store/actions/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../componentes/CartItem';
import Colors  from '../constantes/Colors';
import React from 'react';

function CartScreen() {
  const items = useSelector(state => state.carrito.cart);
  const total = useSelector(state => state.carrito.total);
  const dispatch = useDispatch();

  const handlerConfirmCart = () => {
    if(items.length>0)
      dispatch(confirmCart(items, total));
    else
      console.log("No hay elementos en la lista.");
  }
  
  const handlerDeleteItem = id => dispatch(removeItem(id)); 

  const renderItem = ({item}) => ( 
    <CartItem item={item} onDelete={handlerDeleteItem.bind(this, item)}/>
  )

  return (
    <View style={styles.container}>     
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={ renderItem }
          keyExtractor={item => item.id}
      />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
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
  footer: {
    padding: 6,
    borderTopColor: Colors.accent,
    borderTopWidth: 2,
  },
  confirm: {
    backgroundColor: 'rgba(47, 72, 129, 0.7)',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  total: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 18,
    fontFamily: 'RobotoBold',
    padding: 8,
    color: Colors.white
  }
});


export default CartScreen;