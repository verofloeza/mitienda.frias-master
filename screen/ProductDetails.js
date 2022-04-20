import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Colors from '../constantes/Colors';

export default function ProductDetails({route}) {
    const item = route.params;

    return (
        <ScrollView style={styles.containerGrid} onPress={() => onSelected(item)}>
            <Image 
                source={require('../assets/sin-imagen.jpg')}
                style={styles.fotoProducto} 
            />
            <View style={styles.containerText}>
                <Text style={styles.tituloProducto}>{item.name}</Text>
                <Text style={styles.marca}>{item.marca}</Text>
                <Text style={styles.precio}>${item.precio}</Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
                
            </View>
            
                 
        </ScrollView>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:1,
        backgroundColor: '#f6f6f6',
        width: "100%",
        paddingTop:20,
        alignContent: 'center',
    },
    fotoProducto: {
        width: '100%',
        height: 400,
        borderRadius: 20
    },
    containerText:{
        flex:1,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 30
    },
    tituloProducto:{
        width: '100%',
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'MontserratBold'
    },
    precio:{
        width: '100%',
        fontSize: 22,
        fontFamily: 'RobotoBold',
        textAlign: 'center',
        paddingBottom: 30,
    },
    marca:{
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent,
        paddingBottom: 10,
        textAlign: 'center',
        fontFamily: 'RobotoBold'
    },
    descripcion:{
        width: '100%',
        fontSize: 16,
        paddingBottom: 30,
        textAlign: 'center',
        fontFamily: 'Roboto'
    }
  });
  