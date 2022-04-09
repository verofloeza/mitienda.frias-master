import {
    Image,
    StyleSheet,
    View
} from 'react-native';

import Colors from '../constantes/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.iconsHeader}>
               <FontAwesome name="bars" size={24} color={Colors.accent} /> 
            </View>
            <View style={styles.logoHeader}>
               <Image 
                source={ require('../assets/logo-horizontal.png')}
                style={styles.logo}
               />
            </View>
            <View style={styles.iconsHeader}>
               <FontAwesome name="search" size={24} color={Colors.accent} /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        maxHeight:100,
        padding:10,
        flexDirection: "row",
        height: 250
      },
      iconsHeader:{
          flex: 1,
          width:150,
          alignItems: 'center',
          justifyContent: 'center',
      },
      logoHeader:{
          flex:5,
          alignItems: 'center',
          justifyContent: 'center',
      },
      logo:{
          width: 150,
          height: 29
      }
});