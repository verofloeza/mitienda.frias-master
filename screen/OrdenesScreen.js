import { FlatList, StyleSheet, View } from 'react-native';

import Colors  from '../constantes/Colors';
import ORDENES from '../data/ORDENES';
import OrdenItem from '../componentes/OrdenItem';
import React from 'react';

function OrdenesScreen() {
  const items = ORDENES;

  const handlerDeleteItem = (item) => console.log('Eliminar Elemento: ' + item.name);

  const renderItem = ({item}) => ( 
    <OrdenItem item={item} onDelete={handlerDeleteItem.bind(this, item)}/>
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