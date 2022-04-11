import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Colors from '../constantes/Colors';

export default function ProductDetails(props) {
    
    return (
        <ScrollView style={styles.containerGrid}>
            <Image 
                source={require('../assets/sin-imagen.jpg')}
                style={styles.fotoProducto} 
            />
            <View style={styles.containerText}>
                <Text style={styles.tituloProducto}>{props.userProduct.value}</Text>
                <Text style={styles.marca}>{props.userProduct.marca}</Text>
                <Text style={styles.descripcion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Button title="volver" onPress={ () => props.onBackGrid(null)} color={Colors.accent}/> 
            </View>
            
                 
        </ScrollView>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:1,
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
        paddingBottom: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'MontserratBold'
    },
    marca:{
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent,
        paddingBottom: 30,
        textAlign: 'center',
        fontFamily: 'RobotoBold'
    },
    descripcion:{
        width: '100%',
        fontSize: 12,
        paddingBottom: 30,
        textAlign: 'center',
        fontFamily: 'Roboto'
    }
  });
  