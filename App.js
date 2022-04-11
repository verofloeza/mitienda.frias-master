import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import AppLoading from 'expo-app-loading';
import Grid from './screen/Grid';
import Header from './componentes/Header';
import ProductDetails from './screen/ProductDetails';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    RobotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  
  const [userProduct, setUserProduct] = useState(null);

  const handlerGrid = selectedProduct =>(
    setUserProduct(selectedProduct)
  );

  let content = <Grid onProductDetails={handlerGrid}/>;;

  if (userProduct != null){
    content = <ProductDetails onBackGrid={handlerGrid} userProduct={userProduct}/>;
  }
  if (!loaded) {
    return <AppLoading />
  }
  return (
    <SafeAreaView style={styles.container}>

      <Header />

      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  
});
