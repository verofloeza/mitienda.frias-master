import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { confirmCart, removeItem } from '../store/actions/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../componentes/CartItem';
import React from 'react';
import {styles} from '../style';

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
    <View style={styles.containerCart}>     
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
export default CartScreen;