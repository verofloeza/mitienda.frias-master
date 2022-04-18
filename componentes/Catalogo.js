import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect, useState }  from 'react';

import { CATEGORIAS } from '../data/CATEGORIAS';
import Card from './Card';
import Colors from '../constantes/Colors';
import { PRODUCTOS } from '../data/PRODUCTOS';

const Catalogo = (props ) => {
    const [ categorySelected, setCategorySelect] = useState(1);
    const [ listProductCategory, setListProductCategory] =useState([]);

    /*useEffect(() =>{
        setListProductCategory(listProductos.filter(item => item.categoria === categorySelected))
        console.log(listProductCategory)
    })*/
    
    const handlerSelectedProduct = (id) => {
        console.log(id)
       props.onDetalles(PRODUCTOS.filter( item => item.id === id))
    
    }

    const renderProductos = ( {item}) =>(
        <Card>
            <TouchableOpacity onPress={handlerSelectedProduct} item={item}>
                <Image 
                    source={require('../assets/sin-imagen.jpg')}
                    style={styles.fotoProducto} 
                />
                <Text style={styles.title}>{item.value}</Text>
                <Text style={styles.marca}>{item.marca}</Text>
            </TouchableOpacity>
        </Card>
    )

 return(
    <View > 
        <FlatList
            data={PRODUCTOS}
            keyExtractor={ item => item.id }
            numColumns={2}
            columnWrapperStyle={styles.lista}
            renderItem={renderProductos}
        />
    </View>
     
    
 )
}
const styles = StyleSheet.create({
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

export default Catalogo;