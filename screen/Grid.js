import {
    StyleSheet,
    View
} from 'react-native';

import Catalogo from '../componentes/Catalogo';
import Filtros from '../componentes/Filtros';

const Grid = props => {
    
    return (
        <View style={styles.containerGrid}>
            <Filtros style={styles.filtros}/>
            <Catalogo style={styles.containerList} onProductDetails={props.onProductDetails}/>
            
        </View>
        
    );
  }
  
  const styles = StyleSheet.create({
    containerGrid:{
        flex:1,
        width: "100%",
        padding:20,
        
    },
    filtros:{
        flex: 1,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerList:{
        flex:12,
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
  });
  export default Grid;