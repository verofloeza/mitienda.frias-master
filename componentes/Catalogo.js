import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState }  from 'react';

import Card from './Card';
import Colors from '../constantes/Colors';

const Catalogo = props => {
    const [ listProductos, setListProductos ] = useState([{id:1, value:'Producto 1', marca:'Marca'},{id:2,  value:'Producto 2', marca:'Marca'},{id:3,  value:'Producto 3', marca:'Marca'},{id:4,  value:'Producto 4', marca:'Marca'}]);
    const [ productosSelected, setProductosSelected ] = useState({});


    const renderProductos = ( data) =>(
        <Card>
            <TouchableOpacity onPress={props.onProductDetails}>
                <Image 
                    source={require('../assets/sin-imagen.jpg')}
                    style={styles.fotoProducto} 
                />
                <Text style={styles.title}>{data.item.value}</Text>
                <Text style={styles.marca}>{data.item.marca}</Text>
            </TouchableOpacity>
        </Card>
    )

 return(
    <View > 
        {/*style={{flexDirection: 'row', flex: 22}}*/}
       {/*} <TouchableOpacity style={styles.item}  onPress={props.onProductDetails}>
            <Image 
                source={require('../assets/sin-imagen.jpg')}
                style={styles.fotoProducto} 
            />
            <Text style={styles.title}>Producto 1</Text>
            <Text style={styles.marca}>Marca</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Image 
                source={require('../assets/sin-imagen.jpg')}
                style={styles.fotoProducto} 
            />
            <Text style={styles.title}>Producto 2</Text>
            <Text style={styles.marca}>Marca</Text> 
        </TouchableOpacity>
 */}
        <FlatList
            data={listProductos}
            keyExtractor={ item => item.id }
            numColumns={2}
            columnWrapperStyle={styles.lista}
            renderItem={renderProductos}
            extraData={props}
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
        width: '95%',
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
    item:{
        width: '50%',
        alignContent: 'center',
        padding: 10,
    },
});

export default Catalogo;