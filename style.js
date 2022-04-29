import Colors from './constantes/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
        alignItems: 'center',
        justifyContent: 'center', 
      },
      //login
    logoLogin:{
        flex: 1,
        width: 70,
        height: 65,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column', 
    },
      logo:{
        width: 70,
        height: 65, 
      },
      containerLogin: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
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
    butonsCarrito:{
        padding: 10,
        borderRadius:10,
        backgroundColor: Colors.accent,
        textAlign: 'center',
    },
    textButton:{
        fontSize: 20,
        fontFamily: 'Roboto',
        color: Colors.white,
        textAlign: 'center'
    },
    input:{
        width: '100%',
        borderBottomWidth:2,
        borderBottomColor: Colors.accent,
        padding: 10,
        marginBottom:25,
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    // Categorias
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
    },
    //Grid
    containerGrid:{
        flex:1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding:5,
        marginBottom: 60
    },
    filtros:{
        flex: 1,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerList:{
        flex:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    //cart
    containerCart: {
        flex: 1,
        width: '100%',
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
        justifyContent: 'center', 
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
      },
});