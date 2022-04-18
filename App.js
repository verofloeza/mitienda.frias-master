import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/ShopNavigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    RobotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <ShopNavigator /> 
  );
}
