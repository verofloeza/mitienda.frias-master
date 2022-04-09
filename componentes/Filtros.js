import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Colors from '../constantes/Colors';

export default function Filtros(){
 return(
        <TouchableOpacity style={styles.containerCat}>
            <View style={styles.listFilter}>
                <Text style={styles.listItemActive}>Mujer</Text>
                <Text style={styles.listItem}>Hombre</Text>
                <Text style={styles.listItem}>Niño</Text>
                <Text style={styles.listItem}>Más</Text>
            </View> 
        </TouchableOpacity>
 )
}
const styles = StyleSheet.create({
    containerCat:{
        //flex:1
        marginTop:20
    },
    listFilter:{
        flex:1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom:20
    },
    listItem:{
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        padding:10,
        fontSize:15,
        height: 40
    },
    listItemActive:{
        borderWidth: 2,
        borderColor: Colors.accent,
        color: Colors.accent,
        paddingHorizontal:15,
        padding:10,
        borderRadius:10,
        fontSize:15,
        height: 40
    }
});
